import { logger } from '../../services/logger';

import { PenumbraController } from './penumbra.controller';
import { getPenumbraConfig } from './penumbra.config';

export class Penumbra {
  private static _instances: { [name: string]: Penumbra };
  private _rpcUrl: string;
  private _ready: boolean = false;
  private _initialized: Promise<boolean> = Promise.resolve(false);
  private _requestCount: number;
  private _metricsLogInterval: number;
  private _metricTimer;
  private _network: string;
  public controller: typeof PenumbraController;

  private constructor(network: string) {
    // TODO: Move service initializations here
    this._network = network;
    const config = getPenumbraConfig(network);
    this._rpcUrl = config.network.rpcURL;
    this._requestCount = 0;
    this._metricsLogInterval = 300000; // 5 minutes

    this._metricTimer = setInterval(
      this.metricLogger.bind(this),
      this.metricsLogInterval
    );
    this.controller = PenumbraController;
  }

  public async init(): Promise<void> {
    await this._initialized; // Wait for any previous init() calls to complete
    if (!this.ready()) {
      // If we're not ready, this._initialized will be a Promise that resolves after init() completes
      this._initialized = (async () => {
        try {
          // TODO: Nonce manager
          // initialize nonce manager
          //await this._nonceManager.init(
          //  async (address: string) => await this.getTransactionCount(address)
          //);

          // TODO: Move service initializations here
          return true;
        } catch (e) {
          logger.error(`Failed to initialize ${this.chain} chain: ${e}`);
          return false;
        }
      })();
      this._ready = await this._initialized; // Wait for the initialization to complete
    }
    return;
  }

  public ready(): boolean {
    return this._ready;
  }

  public static getInstance(network: string): Penumbra {
    if (Penumbra._instances === undefined) {
      Penumbra._instances = {};
    }
    if (!(network in Penumbra._instances)) {
      Penumbra._instances[network] = new Penumbra(network);
    }

    return Penumbra._instances[network];
  }

  public static getConnectedInstances(): { [network: string]: Penumbra } {
    return Penumbra._instances;
  }

  public requestCounter(msg: any): void {
    if (msg.action === 'request') this._requestCount += 1;
  }

  public metricLogger(): void {
    logger.info(
      this.requestCount +
        ' request(s) sent in last ' +
        this.metricsLogInterval / 1000 +
        ' seconds.'
    );
    this._requestCount = 0; // reset
  }

  public get chainId(): string {
    return 'penumbra';
  }

  public get chain(): string {
    return 'penumbra';
  }

  public get network(): string {
    return this._network;
  }

  public get rpcUrl(): string {
    return this._rpcUrl;
  }

  public get nativeCurrency(): string {
    return 'penumbra';
  }

  public get requestCount(): number {
    return this._requestCount;
  }

  public get metricsLogInterval(): number {
    return this._metricsLogInterval;
  }

  async close() {
    clearInterval(this._metricTimer);
  }
}