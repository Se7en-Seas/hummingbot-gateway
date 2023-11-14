import LRUCache from 'lru-cache';
import { Penumbra } from '../../chains/penumbra/penumbra';

import { PenumbraCLOBConfig } from './penumbra.clob.config';
import { CLOBMarkets, ClobMarketsRequest } from '../../clob/clob.requests';
import { QueryServiceClient } from '../../chains/penumbra/generated/penumbra/core/component/dex/v1alpha1/dex_grpc_pb';
import {
  LiquidityPositionsRequest,
  LiquidityPositionsResponse,
} from '../../chains/penumbra/generated/penumbra/core/component/dex/v1alpha1/dex_pb';
const grpc = require('@grpc/grpc-js');

export class PenumbraCLOB {
  private static _instances: LRUCache<string, PenumbraCLOB>;
  private _chain;
  public conf;
  private _ready: boolean = false;
  public parsedMarkets: CLOBMarkets = {};

  private constructor(_chain: string, network: string) {
    this._chain = Penumbra.getInstance(network);
    this.conf = PenumbraCLOBConfig.config;
  }

  public static getInstance(chain: string, network: string): PenumbraCLOB {
    if (PenumbraCLOB._instances === undefined) {
      PenumbraCLOB._instances = new LRUCache<string, PenumbraCLOB>({
        max: 10,
      });
    }
    const instanceKey = chain + network;
    if (!PenumbraCLOB._instances.has(instanceKey)) {
      PenumbraCLOB._instances.set(
        instanceKey,
        new PenumbraCLOB(chain, network)
      );
    }

    return PenumbraCLOB._instances.get(instanceKey) as PenumbraCLOB;
  }

  public async loadMarkets() {
    return new Promise((resolve, reject) => {
      // Make connection
      const client = new QueryServiceClient(
        this._chain.rpcUrl,
        grpc.credentials.createInsecure()
      );

      let req = new LiquidityPositionsRequest();
      req.setIncludeClosed(true);

      // Get liq positions
      const call = client.liquidityPositions(req);
      const responses: any[] = [];

      call.on('data', (response: any) => {
        const returnObject = LiquidityPositionsResponse.toObject(
          false,
          response
        );

        responses.push(returnObject);
      });

      call.on('end', async () => {
        try {
          resolve(responses);
          this.parsedMarkets = responses;
        } catch (e) {
          let error = e as Error;
          console.error('Error during streaming:', error.message);
          reject(error);
        }
      });
    });
  }

  public async init() {
    if (!this._chain.ready() || Object.keys(this.parsedMarkets).length === 0) {
      await this._chain.init();
      await this.loadMarkets();
      this._ready = true;
    }
  }

  public ready(): boolean {
    return this._ready;
  }

  // curl -X 'GET'   'http://localhost:15888/clob/markets?chain=penumbra&network=testnet&connector=penumbra'   -H 'accept: application/json'   -H 'Content-Type: application/json'
  public async markets(
    req: ClobMarketsRequest
  ): Promise<{ markets: CLOBMarkets }> {
    // Reload markets for freshes data
    // this.loadMarkets();

    if (req.market && req.market.split('-').length === 2) {
      const resp: CLOBMarkets = {};
      resp[req.market] = this.parsedMarkets[req.market];
      return { markets: resp };
    }
    return { markets: this.parsedMarkets };
  }
}
