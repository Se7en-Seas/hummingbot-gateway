// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var penumbra_core_component_sct_v1alpha1_sct_pb = require('../../../../../penumbra/core/component/sct/v1alpha1/sct_pb.js');
var penumbra_crypto_tct_v1alpha1_tct_pb = require('../../../../../penumbra/crypto/tct/v1alpha1/tct_pb.js');
var penumbra_core_component_chain_v1alpha1_chain_pb = require('../../../../../penumbra/core/component/chain/v1alpha1/chain_pb.js');

function serialize_penumbra_core_component_sct_v1alpha1_TransactionByNoteRequest(arg) {
  if (!(arg instanceof penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.sct.v1alpha1.TransactionByNoteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_sct_v1alpha1_TransactionByNoteRequest(buffer_arg) {
  return penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_sct_v1alpha1_TransactionByNoteResponse(arg) {
  if (!(arg instanceof penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.sct.v1alpha1.TransactionByNoteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_sct_v1alpha1_TransactionByNoteResponse(buffer_arg) {
  return penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query operations for the SCT component.
var QueryServiceService = exports.QueryServiceService = {
  // TODO: change to generic tx-by-commitment
transactionByNote: {
    path: '/penumbra.core.component.sct.v1alpha1.QueryService/TransactionByNote',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteRequest,
    responseType: penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteResponse,
    requestSerialize: serialize_penumbra_core_component_sct_v1alpha1_TransactionByNoteRequest,
    requestDeserialize: deserialize_penumbra_core_component_sct_v1alpha1_TransactionByNoteRequest,
    responseSerialize: serialize_penumbra_core_component_sct_v1alpha1_TransactionByNoteResponse,
    responseDeserialize: deserialize_penumbra_core_component_sct_v1alpha1_TransactionByNoteResponse,
  },
};

exports.QueryServiceClient = grpc.makeGenericClientConstructor(QueryServiceService);
