// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var penumbra_core_component_governance_v1alpha1_governance_pb = require('../../../../../penumbra/core/component/governance/v1alpha1/governance_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb = require('../../../../../penumbra/crypto/decaf377_rdsa/v1alpha1/decaf377_rdsa_pb.js');
var penumbra_core_num_v1alpha1_num_pb = require('../../../../../penumbra/core/num/v1alpha1/num_pb.js');
var penumbra_core_asset_v1alpha1_asset_pb = require('../../../../../penumbra/core/asset/v1alpha1/asset_pb.js');
var penumbra_core_keys_v1alpha1_keys_pb = require('../../../../../penumbra/core/keys/v1alpha1/keys_pb.js');
var penumbra_core_component_chain_v1alpha1_chain_pb = require('../../../../../penumbra/core/component/chain/v1alpha1/chain_pb.js');
var penumbra_core_component_fee_v1alpha1_fee_pb = require('../../../../../penumbra/core/component/fee/v1alpha1/fee_pb.js');
var penumbra_core_component_dao_v1alpha1_dao_pb = require('../../../../../penumbra/core/component/dao/v1alpha1/dao_pb.js');
var penumbra_core_component_ibc_v1alpha1_ibc_pb = require('../../../../../penumbra/core/component/ibc/v1alpha1/ibc_pb.js');
var penumbra_core_component_stake_v1alpha1_stake_pb = require('../../../../../penumbra/core/component/stake/v1alpha1/stake_pb.js');
var penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb = require('../../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb.js');

function serialize_penumbra_core_component_governance_v1alpha1_ProposalInfoRequest(arg) {
  if (!(arg instanceof penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.governance.v1alpha1.ProposalInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_governance_v1alpha1_ProposalInfoRequest(buffer_arg) {
  return penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_governance_v1alpha1_ProposalInfoResponse(arg) {
  if (!(arg instanceof penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.governance.v1alpha1.ProposalInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_governance_v1alpha1_ProposalInfoResponse(buffer_arg) {
  return penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_governance_v1alpha1_ProposalRateDataRequest(arg) {
  if (!(arg instanceof penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataRequest)) {
    throw new Error('Expected argument of type penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_governance_v1alpha1_ProposalRateDataRequest(buffer_arg) {
  return penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_core_component_governance_v1alpha1_ProposalRateDataResponse(arg) {
  if (!(arg instanceof penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataResponse)) {
    throw new Error('Expected argument of type penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_core_component_governance_v1alpha1_ProposalRateDataResponse(buffer_arg) {
  return penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query operations for the governance component.
var QueryServiceService = exports.QueryServiceService = {
  proposalInfo: {
    path: '/penumbra.core.component.governance.v1alpha1.QueryService/ProposalInfo',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoRequest,
    responseType: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoResponse,
    requestSerialize: serialize_penumbra_core_component_governance_v1alpha1_ProposalInfoRequest,
    requestDeserialize: deserialize_penumbra_core_component_governance_v1alpha1_ProposalInfoRequest,
    responseSerialize: serialize_penumbra_core_component_governance_v1alpha1_ProposalInfoResponse,
    responseDeserialize: deserialize_penumbra_core_component_governance_v1alpha1_ProposalInfoResponse,
  },
  // Used for computing voting power ?
proposalRateData: {
    path: '/penumbra.core.component.governance.v1alpha1.QueryService/ProposalRateData',
    requestStream: false,
    responseStream: true,
    requestType: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataRequest,
    responseType: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataResponse,
    requestSerialize: serialize_penumbra_core_component_governance_v1alpha1_ProposalRateDataRequest,
    requestDeserialize: deserialize_penumbra_core_component_governance_v1alpha1_ProposalRateDataRequest,
    responseSerialize: serialize_penumbra_core_component_governance_v1alpha1_ProposalRateDataResponse,
    responseDeserialize: deserialize_penumbra_core_component_governance_v1alpha1_ProposalRateDataResponse,
  },
};

exports.QueryServiceClient = grpc.makeGenericClientConstructor(QueryServiceService);
