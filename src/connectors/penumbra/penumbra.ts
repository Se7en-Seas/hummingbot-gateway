import LRUCache from 'lru-cache';
import { Penumbra } from '../../chains/penumbra/penumbra';

import { PenumbraCLOBConfig } from './penumbra.clob.config';
import { CLOBMarkets, ClobMarketsRequest } from '../../clob/clob.requests';

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
    // TODO
    //let rawMarkets = []
    //for (const market of rawMarkets) {
    //  this.parsedMarkets[market.ticker.replace('/', '-')] = market;
    //}
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

  public async markets(
    req: ClobMarketsRequest
  ): Promise<{ markets: CLOBMarkets }> {
    if (req.market && req.market.split('-').length === 2) {
      const resp: CLOBMarkets = {};
      resp[req.market] = this.parsedMarkets[req.market];
      return { markets: resp };
    }
    return { markets: this.parsedMarkets };
  }
}
