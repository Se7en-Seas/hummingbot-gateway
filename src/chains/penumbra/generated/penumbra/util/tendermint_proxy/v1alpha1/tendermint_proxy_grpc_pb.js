// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb = require('../../../../penumbra/util/tendermint_proxy/v1alpha1/tendermint_proxy_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var tendermint_crypto_proof_pb = require('../../../../tendermint/crypto/proof_pb.js');
var tendermint_p2p_types_pb = require('../../../../tendermint/p2p/types_pb.js');
var tendermint_types_block_pb = require('../../../../tendermint/types/block_pb.js');
var tendermint_types_types_pb = require('../../../../tendermint/types/types_pb.js');
var tendermint_types_validator_pb = require('../../../../tendermint/types/validator_pb.js');

function serialize_penumbra_util_tendermint_proxy_v1alpha1_ABCIQueryRequest(arg) {
  if (!(arg instanceof penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryRequest)) {
    throw new Error('Expected argument of type penumbra.util.tendermint_proxy.v1alpha1.ABCIQueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_util_tendermint_proxy_v1alpha1_ABCIQueryRequest(buffer_arg) {
  return penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_util_tendermint_proxy_v1alpha1_ABCIQueryResponse(arg) {
  if (!(arg instanceof penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryResponse)) {
    throw new Error('Expected argument of type penumbra.util.tendermint_proxy.v1alpha1.ABCIQueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_util_tendermint_proxy_v1alpha1_ABCIQueryResponse(buffer_arg) {
  return penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_util_tendermint_proxy_v1alpha1_BroadcastTxAsyncRequest(arg) {
  if (!(arg instanceof penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncRequest)) {
    throw new Error('Expected argument of type penumbra.util.tendermint_proxy.v1alpha1.BroadcastTxAsyncRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_util_tendermint_proxy_v1alpha1_BroadcastTxAsyncRequest(buffer_arg) {
  return penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_util_tendermint_proxy_v1alpha1_BroadcastTxAsyncResponse(arg) {
  if (!(arg instanceof penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncResponse)) {
    throw new Error('Expected argument of type penumbra.util.tendermint_proxy.v1alpha1.BroadcastTxAsyncResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_util_tendermint_proxy_v1alpha1_BroadcastTxAsyncResponse(buffer_arg) {
  return penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_util_tendermint_proxy_v1alpha1_BroadcastTxSyncRequest(arg) {
  if (!(arg instanceof penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncRequest)) {
    throw new Error('Expected argument of type penumbra.util.tendermint_proxy.v1alpha1.BroadcastTxSyncRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_util_tendermint_proxy_v1alpha1_BroadcastTxSyncRequest(buffer_arg) {
  return penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_util_tendermint_proxy_v1alpha1_BroadcastTxSyncResponse(arg) {
  if (!(arg instanceof penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncResponse)) {
    throw new Error('Expected argument of type penumbra.util.tendermint_proxy.v1alpha1.BroadcastTxSyncResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_util_tendermint_proxy_v1alpha1_BroadcastTxSyncResponse(buffer_arg) {
  return penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_util_tendermint_proxy_v1alpha1_GetBlockByHeightRequest(arg) {
  if (!(arg instanceof penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightRequest)) {
    throw new Error('Expected argument of type penumbra.util.tendermint_proxy.v1alpha1.GetBlockByHeightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_util_tendermint_proxy_v1alpha1_GetBlockByHeightRequest(buffer_arg) {
  return penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_util_tendermint_proxy_v1alpha1_GetBlockByHeightResponse(arg) {
  if (!(arg instanceof penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightResponse)) {
    throw new Error('Expected argument of type penumbra.util.tendermint_proxy.v1alpha1.GetBlockByHeightResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_util_tendermint_proxy_v1alpha1_GetBlockByHeightResponse(buffer_arg) {
  return penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_util_tendermint_proxy_v1alpha1_GetStatusRequest(arg) {
  if (!(arg instanceof penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusRequest)) {
    throw new Error('Expected argument of type penumbra.util.tendermint_proxy.v1alpha1.GetStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_util_tendermint_proxy_v1alpha1_GetStatusRequest(buffer_arg) {
  return penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_util_tendermint_proxy_v1alpha1_GetStatusResponse(arg) {
  if (!(arg instanceof penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusResponse)) {
    throw new Error('Expected argument of type penumbra.util.tendermint_proxy.v1alpha1.GetStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_util_tendermint_proxy_v1alpha1_GetStatusResponse(buffer_arg) {
  return penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_util_tendermint_proxy_v1alpha1_GetTxRequest(arg) {
  if (!(arg instanceof penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxRequest)) {
    throw new Error('Expected argument of type penumbra.util.tendermint_proxy.v1alpha1.GetTxRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_util_tendermint_proxy_v1alpha1_GetTxRequest(buffer_arg) {
  return penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_util_tendermint_proxy_v1alpha1_GetTxResponse(arg) {
  if (!(arg instanceof penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxResponse)) {
    throw new Error('Expected argument of type penumbra.util.tendermint_proxy.v1alpha1.GetTxResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_util_tendermint_proxy_v1alpha1_GetTxResponse(buffer_arg) {
  return penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Defines the gRPC query service for proxying requests to an upstream Tendermint RPC.
var TendermintProxyServiceService = exports.TendermintProxyServiceService = {
  // Status queries the current status.
getStatus: {
    path: '/penumbra.util.tendermint_proxy.v1alpha1.TendermintProxyService/GetStatus',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusRequest,
    responseType: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusResponse,
    requestSerialize: serialize_penumbra_util_tendermint_proxy_v1alpha1_GetStatusRequest,
    requestDeserialize: deserialize_penumbra_util_tendermint_proxy_v1alpha1_GetStatusRequest,
    responseSerialize: serialize_penumbra_util_tendermint_proxy_v1alpha1_GetStatusResponse,
    responseDeserialize: deserialize_penumbra_util_tendermint_proxy_v1alpha1_GetStatusResponse,
  },
  // Broadcast a transaction asynchronously.
broadcastTxAsync: {
    path: '/penumbra.util.tendermint_proxy.v1alpha1.TendermintProxyService/BroadcastTxAsync',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncRequest,
    responseType: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncResponse,
    requestSerialize: serialize_penumbra_util_tendermint_proxy_v1alpha1_BroadcastTxAsyncRequest,
    requestDeserialize: deserialize_penumbra_util_tendermint_proxy_v1alpha1_BroadcastTxAsyncRequest,
    responseSerialize: serialize_penumbra_util_tendermint_proxy_v1alpha1_BroadcastTxAsyncResponse,
    responseDeserialize: deserialize_penumbra_util_tendermint_proxy_v1alpha1_BroadcastTxAsyncResponse,
  },
  // Broadcast a transaction synchronously.
broadcastTxSync: {
    path: '/penumbra.util.tendermint_proxy.v1alpha1.TendermintProxyService/BroadcastTxSync',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncRequest,
    responseType: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncResponse,
    requestSerialize: serialize_penumbra_util_tendermint_proxy_v1alpha1_BroadcastTxSyncRequest,
    requestDeserialize: deserialize_penumbra_util_tendermint_proxy_v1alpha1_BroadcastTxSyncRequest,
    responseSerialize: serialize_penumbra_util_tendermint_proxy_v1alpha1_BroadcastTxSyncResponse,
    responseDeserialize: deserialize_penumbra_util_tendermint_proxy_v1alpha1_BroadcastTxSyncResponse,
  },
  // Fetch a transaction by hash.
getTx: {
    path: '/penumbra.util.tendermint_proxy.v1alpha1.TendermintProxyService/GetTx',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxRequest,
    responseType: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxResponse,
    requestSerialize: serialize_penumbra_util_tendermint_proxy_v1alpha1_GetTxRequest,
    requestDeserialize: deserialize_penumbra_util_tendermint_proxy_v1alpha1_GetTxRequest,
    responseSerialize: serialize_penumbra_util_tendermint_proxy_v1alpha1_GetTxResponse,
    responseDeserialize: deserialize_penumbra_util_tendermint_proxy_v1alpha1_GetTxResponse,
  },
  // ABCIQuery defines a query handler that supports ABCI queries directly to the
// application, bypassing Tendermint completely. The ABCI query must contain
// a valid and supported path, including app, custom, p2p, and store.
aBCIQuery: {
    path: '/penumbra.util.tendermint_proxy.v1alpha1.TendermintProxyService/ABCIQuery',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryRequest,
    responseType: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryResponse,
    requestSerialize: serialize_penumbra_util_tendermint_proxy_v1alpha1_ABCIQueryRequest,
    requestDeserialize: deserialize_penumbra_util_tendermint_proxy_v1alpha1_ABCIQueryRequest,
    responseSerialize: serialize_penumbra_util_tendermint_proxy_v1alpha1_ABCIQueryResponse,
    responseDeserialize: deserialize_penumbra_util_tendermint_proxy_v1alpha1_ABCIQueryResponse,
  },
  // GetBlockByHeight queries block for given height.
getBlockByHeight: {
    path: '/penumbra.util.tendermint_proxy.v1alpha1.TendermintProxyService/GetBlockByHeight',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightRequest,
    responseType: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightResponse,
    requestSerialize: serialize_penumbra_util_tendermint_proxy_v1alpha1_GetBlockByHeightRequest,
    requestDeserialize: deserialize_penumbra_util_tendermint_proxy_v1alpha1_GetBlockByHeightRequest,
    responseSerialize: serialize_penumbra_util_tendermint_proxy_v1alpha1_GetBlockByHeightResponse,
    responseDeserialize: deserialize_penumbra_util_tendermint_proxy_v1alpha1_GetBlockByHeightResponse,
  },
};

exports.TendermintProxyServiceClient = grpc.makeGenericClientConstructor(TendermintProxyServiceService);
