// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var penumbra_core_app_v1alpha1_app_pb = require('../../../../penumbra/core/app/v1alpha1/app_pb.js');
var penumbra_core_component_chain_v1alpha1_chain_pb = require('../../../../penumbra/core/component/chain/v1alpha1/chain_pb.js');
var penumbra_core_component_stake_v1alpha1_stake_pb = require('../../../../penumbra/core/component/stake/v1alpha1/stake_pb.js');
var penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb = require('../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb.js');
var penumbra_core_component_governance_v1alpha1_governance_pb = require('../../../../penumbra/core/component/governance/v1alpha1/governance_pb.js');
var penumbra_core_component_ibc_v1alpha1_ibc_pb = require('../../../../penumbra/core/component/ibc/v1alpha1/ibc_pb.js');
var penumbra_core_component_fee_v1alpha1_fee_pb = require('../../../../penumbra/core/component/fee/v1alpha1/fee_pb.js');
var penumbra_core_component_dao_v1alpha1_dao_pb = require('../../../../penumbra/core/component/dao/v1alpha1/dao_pb.js');
var ibc_core_commitment_v1_commitment_pb = require('../../../../ibc/core/commitment/v1/commitment_pb.js');

function serialize_penumbra_core_app_v1alpha1_AppParametersRequest(arg) {
  if (!(arg instanceof penumbra_core_app_v1alpha1_app_pb.AppParametersRequest)) {
    throw new Error('Expected argument of type penumbra.core.app.v1alpha1.AppParametersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_app_v1alpha1_AppParametersRequest(buffer_arg) {
  return penumbra_core_app_v1alpha1_app_pb.AppParametersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_app_v1alpha1_AppParametersResponse(arg) {
  if (!(arg instanceof penumbra_core_app_v1alpha1_app_pb.AppParametersResponse)) {
    throw new Error('Expected argument of type penumbra.core.app.v1alpha1.AppParametersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_app_v1alpha1_AppParametersResponse(buffer_arg) {
  return penumbra_core_app_v1alpha1_app_pb.AppParametersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_app_v1alpha1_KeyValueRequest(arg) {
  if (!(arg instanceof penumbra_core_app_v1alpha1_app_pb.KeyValueRequest)) {
    throw new Error('Expected argument of type penumbra.core.app.v1alpha1.KeyValueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_app_v1alpha1_KeyValueRequest(buffer_arg) {
  return penumbra_core_app_v1alpha1_app_pb.KeyValueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_app_v1alpha1_KeyValueResponse(arg) {
  if (!(arg instanceof penumbra_core_app_v1alpha1_app_pb.KeyValueResponse)) {
    throw new Error('Expected argument of type penumbra.core.app.v1alpha1.KeyValueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_app_v1alpha1_KeyValueResponse(buffer_arg) {
  return penumbra_core_app_v1alpha1_app_pb.KeyValueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_app_v1alpha1_PrefixValueRequest(arg) {
  if (!(arg instanceof penumbra_core_app_v1alpha1_app_pb.PrefixValueRequest)) {
    throw new Error('Expected argument of type penumbra.core.app.v1alpha1.PrefixValueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_app_v1alpha1_PrefixValueRequest(buffer_arg) {
  return penumbra_core_app_v1alpha1_app_pb.PrefixValueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_app_v1alpha1_PrefixValueResponse(arg) {
  if (!(arg instanceof penumbra_core_app_v1alpha1_app_pb.PrefixValueResponse)) {
    throw new Error('Expected argument of type penumbra.core.app.v1alpha1.PrefixValueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_app_v1alpha1_PrefixValueResponse(buffer_arg) {
  return penumbra_core_app_v1alpha1_app_pb.PrefixValueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query operations for the overall Penumbra application.
var QueryServiceService = exports.QueryServiceService = {
  // Gets the app parameters.
appParameters: {
    path: '/penumbra.core.app.v1alpha1.QueryService/AppParameters',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_core_app_v1alpha1_app_pb.AppParametersRequest,
    responseType: penumbra_core_app_v1alpha1_app_pb.AppParametersResponse,
    requestSerialize: serialize_penumbra_core_app_v1alpha1_AppParametersRequest,
    requestDeserialize: deserialize_penumbra_core_app_v1alpha1_AppParametersRequest,
    responseSerialize: serialize_penumbra_core_app_v1alpha1_AppParametersResponse,
    responseDeserialize: deserialize_penumbra_core_app_v1alpha1_AppParametersResponse,
  },
  // General-purpose key-value state query API, that can be used to query
// arbitrary keys in the JMT storage.
keyValue: {
    path: '/penumbra.core.app.v1alpha1.QueryService/KeyValue',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_core_app_v1alpha1_app_pb.KeyValueRequest,
    responseType: penumbra_core_app_v1alpha1_app_pb.KeyValueResponse,
    requestSerialize: serialize_penumbra_core_app_v1alpha1_KeyValueRequest,
    requestDeserialize: deserialize_penumbra_core_app_v1alpha1_KeyValueRequest,
    responseSerialize: serialize_penumbra_core_app_v1alpha1_KeyValueResponse,
    responseDeserialize: deserialize_penumbra_core_app_v1alpha1_KeyValueResponse,
  },
  // General-purpose prefixed key-value state query API, that can be used to query
// arbitrary prefixes in the JMT storage.
// Returns a stream of `PrefixValueResponse`s.
prefixValue: {
    path: '/penumbra.core.app.v1alpha1.QueryService/PrefixValue',
    requestStream: false,
    responseStream: true,
    requestType: penumbra_core_app_v1alpha1_app_pb.PrefixValueRequest,
    responseType: penumbra_core_app_v1alpha1_app_pb.PrefixValueResponse,
    requestSerialize: serialize_penumbra_core_app_v1alpha1_PrefixValueRequest,
    requestDeserialize: deserialize_penumbra_core_app_v1alpha1_PrefixValueRequest,
    responseSerialize: serialize_penumbra_core_app_v1alpha1_PrefixValueResponse,
    responseDeserialize: deserialize_penumbra_core_app_v1alpha1_PrefixValueResponse,
  },
};

exports.QueryServiceClient = grpc.makeGenericClientConstructor(QueryServiceService);
