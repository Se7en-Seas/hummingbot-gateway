// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var penumbra_tools_summoning_v1alpha1_summoning_pb = require('../../../../penumbra/tools/summoning/v1alpha1/summoning_pb.js');
var penumbra_core_keys_v1alpha1_keys_pb = require('../../../../penumbra/core/keys/v1alpha1/keys_pb.js');
var penumbra_core_num_v1alpha1_num_pb = require('../../../../penumbra/core/num/v1alpha1/num_pb.js');

function serialize_penumbra_tools_summoning_v1alpha1_ParticipateRequest(arg) {
  if (!(arg instanceof penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateRequest)) {
    throw new Error('Expected argument of type penumbra.tools.summoning.v1alpha1.ParticipateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_tools_summoning_v1alpha1_ParticipateRequest(buffer_arg) {
  return penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_tools_summoning_v1alpha1_ParticipateResponse(arg) {
  if (!(arg instanceof penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateResponse)) {
    throw new Error('Expected argument of type penumbra.tools.summoning.v1alpha1.ParticipateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_tools_summoning_v1alpha1_ParticipateResponse(buffer_arg) {
  return penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Runs a Phase 2 MPC ceremony with dynamic slot allocation.
var CeremonyCoordinatorServiceService = exports.CeremonyCoordinatorServiceService = {
  // The protocol used to participate in the ceremony.
//
// The message flow is
// ```
// Client                     Server
//  Identify     ===========>
//               <=========== Position (repeated)
//               <=========== ContributeNow
//  Contribution ===========>
//               <=========== Confirm
// ```
participate: {
    path: '/penumbra.tools.summoning.v1alpha1.CeremonyCoordinatorService/Participate',
    requestStream: true,
    responseStream: true,
    requestType: penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateRequest,
    responseType: penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateResponse,
    requestSerialize: serialize_penumbra_tools_summoning_v1alpha1_ParticipateRequest,
    requestDeserialize: deserialize_penumbra_tools_summoning_v1alpha1_ParticipateRequest,
    responseSerialize: serialize_penumbra_tools_summoning_v1alpha1_ParticipateResponse,
    responseDeserialize: deserialize_penumbra_tools_summoning_v1alpha1_ParticipateResponse,
  },
};

exports.CeremonyCoordinatorServiceClient = grpc.makeGenericClientConstructor(CeremonyCoordinatorServiceService);
