import { ConfigManagerV2 } from '../../services/config-manager-v2';

export interface NetworkConfig {
  name: string;
  rpcURL: string;
}

export interface Config {
  network: NetworkConfig;
}

export namespace PenumbraConfig {
  export const config: Config = getPenumbraConfig('penumbra');
}

export function getPenumbraConfig(chainName: string): Config {
  const configManager = ConfigManagerV2.getInstance();
  const network = configManager.get(chainName + '.network');

  return {
    network: {
      name: network,
      rpcURL: configManager.get(chainName + '.networks.' + network + '.rpcURL'),
    },
  };
}

// !
// PROTO COMPILATION COMANDS -- Must run from base repo directory
// npm install grpc-tools @grpc/proto-loader grpc_tools_node_protoc_ts --legacy-peer-deps
/*

find /Users/phil/Desktop/hummingbot/hummingbot-gateway/src/chains/penumbra -name "*.proto" | xargs npx grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:/Users/phil/Desktop/hummingbot/hummingbot-gateway/src/chains/penumbra/generated \
    --grpc_out=grpc_js:/Users/phil/Desktop/hummingbot/hummingbot-gateway/src/chains/penumbra/generated \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=service=grpc-node:/Users/phil/Desktop/hummingbot/hummingbot-gateway/src/chains/penumbra/generated \
    -I/Users/phil/Desktop/hummingbot/hummingbot-gateway/src/chains/penumbra/proto/penumbra

*/
