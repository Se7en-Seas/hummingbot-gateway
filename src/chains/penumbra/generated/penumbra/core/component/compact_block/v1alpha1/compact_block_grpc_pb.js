// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var penumbra_core_component_compact_block_v1alpha1_compact_block_pb = require('../../../../../penumbra/core/component/compact_block/v1alpha1/compact_block_pb.js');
var penumbra_crypto_tct_v1alpha1_tct_pb = require('../../../../../penumbra/crypto/tct/v1alpha1/tct_pb.js');
var penumbra_core_component_sct_v1alpha1_sct_pb = require('../../../../../penumbra/core/component/sct/v1alpha1/sct_pb.js');
var penumbra_core_component_chain_v1alpha1_chain_pb = require('../../../../../penumbra/core/component/chain/v1alpha1/chain_pb.js');
var penumbra_core_component_dex_v1alpha1_dex_pb = require('../../../../../penumbra/core/component/dex/v1alpha1/dex_pb.js');
var penumbra_core_component_fee_v1alpha1_fee_pb = require('../../../../../penumbra/core/component/fee/v1alpha1/fee_pb.js');
var penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb = require('../../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb.js');

function serialize_penumbra_core_component_compact_block_v1alpha1_CompactBlockRangeRequest(arg) {
  if (!(arg instanceof penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.compact_block.v1alpha1.CompactBlockRangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_compact_block_v1alpha1_CompactBlockRangeRequest(buffer_arg) {
  return penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_compact_block_v1alpha1_CompactBlockRangeResponse(arg) {
  if (!(arg instanceof penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.compact_block.v1alpha1.CompactBlockRangeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_compact_block_v1alpha1_CompactBlockRangeResponse(buffer_arg) {
  return penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query operations for the compact block component.
var QueryServiceService = exports.QueryServiceService = {
  // Returns a stream of `CompactBlockRangeResponse`s.
compactBlockRange: {
    path: '/penumbra.core.component.compact_block.v1alpha1.QueryService/CompactBlockRange',
    requestStream: false,
    responseStream: true,
    requestType: penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeRequest,
    responseType: penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeResponse,
    requestSerialize: serialize_penumbra_core_component_compact_block_v1alpha1_CompactBlockRangeRequest,
    requestDeserialize: deserialize_penumbra_core_component_compact_block_v1alpha1_CompactBlockRangeRequest,
    responseSerialize: serialize_penumbra_core_component_compact_block_v1alpha1_CompactBlockRangeResponse,
    responseDeserialize: deserialize_penumbra_core_component_compact_block_v1alpha1_CompactBlockRangeResponse,
  },
};

exports.QueryServiceClient = grpc.makeGenericClientConstructor(QueryServiceService);
