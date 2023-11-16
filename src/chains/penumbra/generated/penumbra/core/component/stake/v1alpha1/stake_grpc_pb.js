// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var penumbra_core_component_stake_v1alpha1_stake_pb = require('../../../../../penumbra/core/component/stake/v1alpha1/stake_pb.js');
var penumbra_core_keys_v1alpha1_keys_pb = require('../../../../../penumbra/core/keys/v1alpha1/keys_pb.js');
var penumbra_core_num_v1alpha1_num_pb = require('../../../../../penumbra/core/num/v1alpha1/num_pb.js');
var penumbra_core_asset_v1alpha1_asset_pb = require('../../../../../penumbra/core/asset/v1alpha1/asset_pb.js');

function serialize_penumbra_core_component_stake_v1alpha1_CurrentValidatorRateRequest(arg) {
  if (!(arg instanceof penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.stake.v1alpha1.CurrentValidatorRateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_stake_v1alpha1_CurrentValidatorRateRequest(buffer_arg) {
  return penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_stake_v1alpha1_CurrentValidatorRateResponse(arg) {
  if (!(arg instanceof penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.stake.v1alpha1.CurrentValidatorRateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_stake_v1alpha1_CurrentValidatorRateResponse(buffer_arg) {
  return penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_stake_v1alpha1_NextValidatorRateRequest(arg) {
  if (!(arg instanceof penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.stake.v1alpha1.NextValidatorRateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_stake_v1alpha1_NextValidatorRateRequest(buffer_arg) {
  return penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_stake_v1alpha1_NextValidatorRateResponse(arg) {
  if (!(arg instanceof penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.stake.v1alpha1.NextValidatorRateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_stake_v1alpha1_NextValidatorRateResponse(buffer_arg) {
  return penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_stake_v1alpha1_ValidatorInfoRequest(arg) {
  if (!(arg instanceof penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.stake.v1alpha1.ValidatorInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_stake_v1alpha1_ValidatorInfoRequest(buffer_arg) {
  return penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_stake_v1alpha1_ValidatorInfoResponse(arg) {
  if (!(arg instanceof penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.stake.v1alpha1.ValidatorInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_stake_v1alpha1_ValidatorInfoResponse(buffer_arg) {
  return penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_stake_v1alpha1_ValidatorPenaltyRequest(arg) {
  if (!(arg instanceof penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.stake.v1alpha1.ValidatorPenaltyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_stake_v1alpha1_ValidatorPenaltyRequest(buffer_arg) {
  return penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_stake_v1alpha1_ValidatorPenaltyResponse(arg) {
  if (!(arg instanceof penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.stake.v1alpha1.ValidatorPenaltyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_stake_v1alpha1_ValidatorPenaltyResponse(buffer_arg) {
  return penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_stake_v1alpha1_ValidatorStatusRequest(arg) {
  if (!(arg instanceof penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.stake.v1alpha1.ValidatorStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_stake_v1alpha1_ValidatorStatusRequest(buffer_arg) {
  return penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_stake_v1alpha1_ValidatorStatusResponse(arg) {
  if (!(arg instanceof penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.stake.v1alpha1.ValidatorStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_stake_v1alpha1_ValidatorStatusResponse(buffer_arg) {
  return penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query operations for the staking component.
var QueryServiceService = exports.QueryServiceService = {
  // Queries the current validator set, with filtering.
validatorInfo: {
    path: '/penumbra.core.component.stake.v1alpha1.QueryService/ValidatorInfo',
    requestStream: false,
    responseStream: true,
    requestType: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoRequest,
    responseType: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoResponse,
    requestSerialize: serialize_penumbra_core_component_stake_v1alpha1_ValidatorInfoRequest,
    requestDeserialize: deserialize_penumbra_core_component_stake_v1alpha1_ValidatorInfoRequest,
    responseSerialize: serialize_penumbra_core_component_stake_v1alpha1_ValidatorInfoResponse,
    responseDeserialize: deserialize_penumbra_core_component_stake_v1alpha1_ValidatorInfoResponse,
  },
  validatorStatus: {
    path: '/penumbra.core.component.stake.v1alpha1.QueryService/ValidatorStatus',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusRequest,
    responseType: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusResponse,
    requestSerialize: serialize_penumbra_core_component_stake_v1alpha1_ValidatorStatusRequest,
    requestDeserialize: deserialize_penumbra_core_component_stake_v1alpha1_ValidatorStatusRequest,
    responseSerialize: serialize_penumbra_core_component_stake_v1alpha1_ValidatorStatusResponse,
    responseDeserialize: deserialize_penumbra_core_component_stake_v1alpha1_ValidatorStatusResponse,
  },
  validatorPenalty: {
    path: '/penumbra.core.component.stake.v1alpha1.QueryService/ValidatorPenalty',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyRequest,
    responseType: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyResponse,
    requestSerialize: serialize_penumbra_core_component_stake_v1alpha1_ValidatorPenaltyRequest,
    requestDeserialize: deserialize_penumbra_core_component_stake_v1alpha1_ValidatorPenaltyRequest,
    responseSerialize: serialize_penumbra_core_component_stake_v1alpha1_ValidatorPenaltyResponse,
    responseDeserialize: deserialize_penumbra_core_component_stake_v1alpha1_ValidatorPenaltyResponse,
  },
  currentValidatorRate: {
    path: '/penumbra.core.component.stake.v1alpha1.QueryService/CurrentValidatorRate',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateRequest,
    responseType: penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateResponse,
    requestSerialize: serialize_penumbra_core_component_stake_v1alpha1_CurrentValidatorRateRequest,
    requestDeserialize: deserialize_penumbra_core_component_stake_v1alpha1_CurrentValidatorRateRequest,
    responseSerialize: serialize_penumbra_core_component_stake_v1alpha1_CurrentValidatorRateResponse,
    responseDeserialize: deserialize_penumbra_core_component_stake_v1alpha1_CurrentValidatorRateResponse,
  },
  nextValidatorRate: {
    path: '/penumbra.core.component.stake.v1alpha1.QueryService/NextValidatorRate',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateRequest,
    responseType: penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateResponse,
    requestSerialize: serialize_penumbra_core_component_stake_v1alpha1_NextValidatorRateRequest,
    requestDeserialize: deserialize_penumbra_core_component_stake_v1alpha1_NextValidatorRateRequest,
    responseSerialize: serialize_penumbra_core_component_stake_v1alpha1_NextValidatorRateResponse,
    responseDeserialize: deserialize_penumbra_core_component_stake_v1alpha1_NextValidatorRateResponse,
  },
};

exports.QueryServiceClient = grpc.makeGenericClientConstructor(QueryServiceService);
