import { AvailableNetworks } from '../../services/config-manager-types';

export namespace PenumbraCLOBConfig {
  export interface NetworkConfig {
    tradingTypes: Array<string>;
    chainType: string;
    availableNetworks: Array<AvailableNetworks>;
  }

  export const config: NetworkConfig = {
    tradingTypes: ['CLOB_SPOT'],
    chainType: 'PENUMBRA',
    availableNetworks: [
      {
        chain: 'penumbra',
        networks: [/*'mainnet',*/ 'testnet'],
      },
    ],
  };
}
