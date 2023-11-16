// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb = require('../../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb.js');
var penumbra_crypto_tct_v1alpha1_tct_pb = require('../../../../../penumbra/crypto/tct/v1alpha1/tct_pb.js');
var penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb = require('../../../../../penumbra/crypto/decaf377_rdsa/v1alpha1/decaf377_rdsa_pb.js');
var penumbra_core_asset_v1alpha1_asset_pb = require('../../../../../penumbra/core/asset/v1alpha1/asset_pb.js');
var penumbra_core_keys_v1alpha1_keys_pb = require('../../../../../penumbra/core/keys/v1alpha1/keys_pb.js');
var penumbra_core_num_v1alpha1_num_pb = require('../../../../../penumbra/core/num/v1alpha1/num_pb.js');

function serialize_penumbra_core_component_shielded_pool_v1alpha1_DenomMetadataByIdRequest(arg) {
  if (!(arg instanceof penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.shielded_pool.v1alpha1.DenomMetadataByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_shielded_pool_v1alpha1_DenomMetadataByIdRequest(buffer_arg) {
  return penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_shielded_pool_v1alpha1_DenomMetadataByIdResponse(arg) {
  if (!(arg instanceof penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.shielded_pool.v1alpha1.DenomMetadataByIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_shielded_pool_v1alpha1_DenomMetadataByIdResponse(buffer_arg) {
  return penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query operations for the shielded pool component.
var QueryServiceService = exports.QueryServiceService = {
  denomMetadataById: {
    path: '/penumbra.core.component.shielded_pool.v1alpha1.QueryService/DenomMetadataById',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdRequest,
    responseType: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdResponse,
    requestSerialize: serialize_penumbra_core_component_shielded_pool_v1alpha1_DenomMetadataByIdRequest,
    requestDeserialize: deserialize_penumbra_core_component_shielded_pool_v1alpha1_DenomMetadataByIdRequest,
    responseSerialize: serialize_penumbra_core_component_shielded_pool_v1alpha1_DenomMetadataByIdResponse,
    responseDeserialize: deserialize_penumbra_core_component_shielded_pool_v1alpha1_DenomMetadataByIdResponse,
  },
};

exports.QueryServiceClient = grpc.makeGenericClientConstructor(QueryServiceService);
