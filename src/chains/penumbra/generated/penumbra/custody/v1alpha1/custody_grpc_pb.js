// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var penumbra_custody_v1alpha1_custody_pb = require('../../../penumbra/custody/v1alpha1/custody_pb.js');
var penumbra_core_keys_v1alpha1_keys_pb = require('../../../penumbra/core/keys/v1alpha1/keys_pb.js');
var penumbra_core_transaction_v1alpha1_transaction_pb = require('../../../penumbra/core/transaction/v1alpha1/transaction_pb.js');

function serialize_penumbra_custody_v1alpha1_AuthorizeRequest(arg) {
  if (!(arg instanceof penumbra_custody_v1alpha1_custody_pb.AuthorizeRequest)) {
    throw new Error('Expected argument of type penumbra.custody.v1alpha1.AuthorizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_custody_v1alpha1_AuthorizeRequest(buffer_arg) {
  return penumbra_custody_v1alpha1_custody_pb.AuthorizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_custody_v1alpha1_AuthorizeResponse(arg) {
  if (!(arg instanceof penumbra_custody_v1alpha1_custody_pb.AuthorizeResponse)) {
    throw new Error('Expected argument of type penumbra.custody.v1alpha1.AuthorizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_custody_v1alpha1_AuthorizeResponse(buffer_arg) {
  return penumbra_custody_v1alpha1_custody_pb.AuthorizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The custody protocol is used by a wallet client to request authorization for
// a transaction they've constructed.
//
// Modeling transaction authorization as an asynchronous RPC call encourages
// software to be written in a way that has a compatible data flow with a "soft
// HSM", threshold signing, a hardware wallet, etc.
//
// The custody protocol does not trust the client to authorize spends, so
// custody requests must contain sufficient information for the custodian to
// understand the transaction and determine whether or not it should be
// authorized.
var CustodyProtocolServiceService = exports.CustodyProtocolServiceService = {
  // Requests authorization of the transaction with the given description.
authorize: {
    path: '/penumbra.custody.v1alpha1.CustodyProtocolService/Authorize',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_custody_v1alpha1_custody_pb.AuthorizeRequest,
    responseType: penumbra_custody_v1alpha1_custody_pb.AuthorizeResponse,
    requestSerialize: serialize_penumbra_custody_v1alpha1_AuthorizeRequest,
    requestDeserialize: deserialize_penumbra_custody_v1alpha1_AuthorizeRequest,
    responseSerialize: serialize_penumbra_custody_v1alpha1_AuthorizeResponse,
    responseDeserialize: deserialize_penumbra_custody_v1alpha1_AuthorizeResponse,
  },
};

exports.CustodyProtocolServiceClient = grpc.makeGenericClientConstructor(CustodyProtocolServiceService);
