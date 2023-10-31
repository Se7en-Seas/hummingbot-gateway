// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var penumbra_core_component_dex_v1alpha1_dex_pb = require('../../../../../penumbra/core/component/dex/v1alpha1/dex_pb.js');
var penumbra_crypto_tct_v1alpha1_tct_pb = require('../../../../../penumbra/crypto/tct/v1alpha1/tct_pb.js');
var penumbra_core_num_v1alpha1_num_pb = require('../../../../../penumbra/core/num/v1alpha1/num_pb.js');
var penumbra_core_asset_v1alpha1_asset_pb = require('../../../../../penumbra/core/asset/v1alpha1/asset_pb.js');
var penumbra_core_keys_v1alpha1_keys_pb = require('../../../../../penumbra/core/keys/v1alpha1/keys_pb.js');
var penumbra_core_component_sct_v1alpha1_sct_pb = require('../../../../../penumbra/core/component/sct/v1alpha1/sct_pb.js');
var penumbra_core_component_fee_v1alpha1_fee_pb = require('../../../../../penumbra/core/component/fee/v1alpha1/fee_pb.js');
var penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb = require('../../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb.js');

function serialize_penumbra_core_component_dex_v1alpha1_ArbExecutionRequest(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.ArbExecutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_ArbExecutionRequest(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_ArbExecutionResponse(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.ArbExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_ArbExecutionResponse(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_ArbExecutionsRequest(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_ArbExecutionsRequest(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_ArbExecutionsResponse(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_ArbExecutionsResponse(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_BatchSwapOutputDataRequest(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_BatchSwapOutputDataRequest(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_BatchSwapOutputDataResponse(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_BatchSwapOutputDataResponse(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionByIdRequest(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionByIdRequest(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionByIdResponse(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionByIdResponse(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsByIdRequest(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsByIdRequest(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsByIdResponse(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsByIdResponse(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsByPriceRequest(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsByPriceRequest(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsByPriceResponse(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsByPriceResponse(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsRequest(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsRequest(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsResponse(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsResponse(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_SimulateTradeRequest(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.SimulateTradeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_SimulateTradeRequest(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_SimulateTradeResponse(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.SimulateTradeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_SimulateTradeResponse(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_SpreadRequest(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.SpreadRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.SpreadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_SpreadRequest(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.SpreadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_SpreadResponse(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.SpreadResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.SpreadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_SpreadResponse(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.SpreadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_SwapExecutionRequest(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.SwapExecutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_SwapExecutionRequest(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_SwapExecutionResponse(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.SwapExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_SwapExecutionResponse(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_SwapExecutionsRequest(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_SwapExecutionsRequest(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_dex_v1alpha1_SwapExecutionsResponse(arg) {
  if (!(arg instanceof penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_dex_v1alpha1_SwapExecutionsResponse(buffer_arg) {
  return penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query operations for the DEX component.
var QueryServiceService = exports.QueryServiceService = {
  // Get the batch clearing prices for a specific block height and trading pair.
batchSwapOutputData: {
    path: '/penumbra.core.component.dex.v1alpha1.QueryService/BatchSwapOutputData',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataRequest,
    responseType: penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataResponse,
    requestSerialize: serialize_penumbra_core_component_dex_v1alpha1_BatchSwapOutputDataRequest,
    requestDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_BatchSwapOutputDataRequest,
    responseSerialize: serialize_penumbra_core_component_dex_v1alpha1_BatchSwapOutputDataResponse,
    responseDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_BatchSwapOutputDataResponse,
  },
  // Get the precise swap execution used for a specific batch swap.
swapExecution: {
    path: '/penumbra.core.component.dex.v1alpha1.QueryService/SwapExecution',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionRequest,
    responseType: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionResponse,
    requestSerialize: serialize_penumbra_core_component_dex_v1alpha1_SwapExecutionRequest,
    requestDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_SwapExecutionRequest,
    responseSerialize: serialize_penumbra_core_component_dex_v1alpha1_SwapExecutionResponse,
    responseDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_SwapExecutionResponse,
  },
  // Get the precise execution used to perform on-chain arbitrage.
arbExecution: {
    path: '/penumbra.core.component.dex.v1alpha1.QueryService/ArbExecution',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionRequest,
    responseType: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionResponse,
    requestSerialize: serialize_penumbra_core_component_dex_v1alpha1_ArbExecutionRequest,
    requestDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_ArbExecutionRequest,
    responseSerialize: serialize_penumbra_core_component_dex_v1alpha1_ArbExecutionResponse,
    responseDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_ArbExecutionResponse,
  },
  // Stream all swap executions over a range of heights, optionally subscribing to future executions.
swapExecutions: {
    path: '/penumbra.core.component.dex.v1alpha1.QueryService/SwapExecutions',
    requestStream: false,
    responseStream: true,
    requestType: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsRequest,
    responseType: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsResponse,
    requestSerialize: serialize_penumbra_core_component_dex_v1alpha1_SwapExecutionsRequest,
    requestDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_SwapExecutionsRequest,
    responseSerialize: serialize_penumbra_core_component_dex_v1alpha1_SwapExecutionsResponse,
    responseDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_SwapExecutionsResponse,
  },
  // Stream all arbitrage executions over a range of heights, optionally subscribing to future executions.
arbExecutions: {
    path: '/penumbra.core.component.dex.v1alpha1.QueryService/ArbExecutions',
    requestStream: false,
    responseStream: true,
    requestType: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsRequest,
    responseType: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsResponse,
    requestSerialize: serialize_penumbra_core_component_dex_v1alpha1_ArbExecutionsRequest,
    requestDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_ArbExecutionsRequest,
    responseSerialize: serialize_penumbra_core_component_dex_v1alpha1_ArbExecutionsResponse,
    responseDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_ArbExecutionsResponse,
  },
  // Query all liquidity positions on the DEX.
liquidityPositions: {
    path: '/penumbra.core.component.dex.v1alpha1.QueryService/LiquidityPositions',
    requestStream: false,
    responseStream: true,
    requestType: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsRequest,
    responseType: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsResponse,
    requestSerialize: serialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsRequest,
    requestDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsRequest,
    responseSerialize: serialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsResponse,
    responseDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsResponse,
  },
  // Query liquidity positions by ID.
//
// To get multiple positions, use `LiquidityPositionsById`.
liquidityPositionById: {
    path: '/penumbra.core.component.dex.v1alpha1.QueryService/LiquidityPositionById',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdRequest,
    responseType: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdResponse,
    requestSerialize: serialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionByIdRequest,
    requestDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionByIdRequest,
    responseSerialize: serialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionByIdResponse,
    responseDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionByIdResponse,
  },
  // Query multiple liquidity positions by ID.
liquidityPositionsById: {
    path: '/penumbra.core.component.dex.v1alpha1.QueryService/LiquidityPositionsById',
    requestStream: false,
    responseStream: true,
    requestType: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdRequest,
    responseType: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdResponse,
    requestSerialize: serialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsByIdRequest,
    requestDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsByIdRequest,
    responseSerialize: serialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsByIdResponse,
    responseDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsByIdResponse,
  },
  // Query liquidity positions on a specific pair, sorted by effective price.
liquidityPositionsByPrice: {
    path: '/penumbra.core.component.dex.v1alpha1.QueryService/LiquidityPositionsByPrice',
    requestStream: false,
    responseStream: true,
    requestType: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceRequest,
    responseType: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceResponse,
    requestSerialize: serialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsByPriceRequest,
    requestDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsByPriceRequest,
    responseSerialize: serialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsByPriceResponse,
    responseDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_LiquidityPositionsByPriceResponse,
  },
  // Get the current (direct) spread on a trading pair.
// 
// This method doesn't do simulation, so actually executing might result in a
// better price (if the chain takes a different route to the target asset).
spread: {
    path: '/penumbra.core.component.dex.v1alpha1.QueryService/Spread',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_core_component_dex_v1alpha1_dex_pb.SpreadRequest,
    responseType: penumbra_core_component_dex_v1alpha1_dex_pb.SpreadResponse,
    requestSerialize: serialize_penumbra_core_component_dex_v1alpha1_SpreadRequest,
    requestDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_SpreadRequest,
    responseSerialize: serialize_penumbra_core_component_dex_v1alpha1_SpreadResponse,
    responseDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_SpreadResponse,
  },
};

exports.QueryServiceClient = grpc.makeGenericClientConstructor(QueryServiceService);
// Simulation for the DEX component.
// 
// This is a separate service from the QueryService because it's not just a
// simple read query from the state. Thus it poses greater DoS risks, and node
// operators may want to enable it separately.
var SimulationServiceService = exports.SimulationServiceService = {
  // Simulate routing and trade execution.
simulateTrade: {
    path: '/penumbra.core.component.dex.v1alpha1.SimulationService/SimulateTrade',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeRequest,
    responseType: penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeResponse,
    requestSerialize: serialize_penumbra_core_component_dex_v1alpha1_SimulateTradeRequest,
    requestDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_SimulateTradeRequest,
    responseSerialize: serialize_penumbra_core_component_dex_v1alpha1_SimulateTradeResponse,
    responseDeserialize: deserialize_penumbra_core_component_dex_v1alpha1_SimulateTradeResponse,
  },
};

exports.SimulationServiceClient = grpc.makeGenericClientConstructor(SimulationServiceService);
