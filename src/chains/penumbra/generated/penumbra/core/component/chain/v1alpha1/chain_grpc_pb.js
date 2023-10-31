// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var penumbra_core_component_chain_v1alpha1_chain_pb = require('../../../../../penumbra/core/component/chain/v1alpha1/chain_pb.js');
var penumbra_core_asset_v1alpha1_asset_pb = require('../../../../../penumbra/core/asset/v1alpha1/asset_pb.js');

function serialize_penumbra_core_component_chain_v1alpha1_EpochByHeightRequest(arg) {
  if (!(arg instanceof penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.chain.v1alpha1.EpochByHeightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_chain_v1alpha1_EpochByHeightRequest(buffer_arg) {
  return penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_chain_v1alpha1_EpochByHeightResponse(arg) {
  if (!(arg instanceof penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.chain.v1alpha1.EpochByHeightResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_chain_v1alpha1_EpochByHeightResponse(buffer_arg) {
  return penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query operations for the chain component.
var QueryServiceService = exports.QueryServiceService = {
  // TODO: move to SCT cf sct/src/component/view.rs:9 "make epoch management the responsibility of this component"
epochByHeight: {
    path: '/penumbra.core.component.chain.v1alpha1.QueryService/EpochByHeight',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightRequest,
    responseType: penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightResponse,
    requestSerialize: serialize_penumbra_core_component_chain_v1alpha1_EpochByHeightRequest,
    requestDeserialize: deserialize_penumbra_core_component_chain_v1alpha1_EpochByHeightRequest,
    responseSerialize: serialize_penumbra_core_component_chain_v1alpha1_EpochByHeightResponse,
    responseDeserialize: deserialize_penumbra_core_component_chain_v1alpha1_EpochByHeightResponse,
  },
};

exports.QueryServiceClient = grpc.makeGenericClientConstructor(QueryServiceService);
