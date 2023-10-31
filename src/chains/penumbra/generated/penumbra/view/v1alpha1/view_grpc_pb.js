// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var penumbra_view_v1alpha1_view_pb = require('../../../penumbra/view/v1alpha1/view_pb.js');
var penumbra_crypto_tct_v1alpha1_tct_pb = require('../../../penumbra/crypto/tct/v1alpha1/tct_pb.js');
var penumbra_core_keys_v1alpha1_keys_pb = require('../../../penumbra/core/keys/v1alpha1/keys_pb.js');
var penumbra_core_num_v1alpha1_num_pb = require('../../../penumbra/core/num/v1alpha1/num_pb.js');
var penumbra_core_app_v1alpha1_app_pb = require('../../../penumbra/core/app/v1alpha1/app_pb.js');
var penumbra_core_asset_v1alpha1_asset_pb = require('../../../penumbra/core/asset/v1alpha1/asset_pb.js');
var penumbra_core_transaction_v1alpha1_transaction_pb = require('../../../penumbra/core/transaction/v1alpha1/transaction_pb.js');
var penumbra_core_component_chain_v1alpha1_chain_pb = require('../../../penumbra/core/component/chain/v1alpha1/chain_pb.js');
var penumbra_core_component_dex_v1alpha1_dex_pb = require('../../../penumbra/core/component/dex/v1alpha1/dex_pb.js');
var penumbra_core_component_fee_v1alpha1_fee_pb = require('../../../penumbra/core/component/fee/v1alpha1/fee_pb.js');
var penumbra_core_component_ibc_v1alpha1_ibc_pb = require('../../../penumbra/core/component/ibc/v1alpha1/ibc_pb.js');
var penumbra_core_component_sct_v1alpha1_sct_pb = require('../../../penumbra/core/component/sct/v1alpha1/sct_pb.js');
var penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb = require('../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb.js');
var penumbra_core_component_stake_v1alpha1_stake_pb = require('../../../penumbra/core/component/stake/v1alpha1/stake_pb.js');

function serialize_penumbra_view_v1alpha1_AddressByIndexRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.AddressByIndexRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.AddressByIndexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_AddressByIndexRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.AddressByIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_AddressByIndexResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.AddressByIndexResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.AddressByIndexResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_AddressByIndexResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.AddressByIndexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_AppParametersRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.AppParametersRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.AppParametersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_AppParametersRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.AppParametersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_AppParametersResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.AppParametersResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.AppParametersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_AppParametersResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.AppParametersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_AssetsRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.AssetsRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.AssetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_AssetsRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.AssetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_AssetsResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.AssetsResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.AssetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_AssetsResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.AssetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_AuthorizeAndBuildRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.AuthorizeAndBuildRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_AuthorizeAndBuildRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_AuthorizeAndBuildResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.AuthorizeAndBuildResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_AuthorizeAndBuildResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_BalancesRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.BalancesRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.BalancesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_BalancesRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.BalancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_BalancesResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.BalancesResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.BalancesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_BalancesResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.BalancesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_BroadcastTransactionRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.BroadcastTransactionRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.BroadcastTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_BroadcastTransactionRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.BroadcastTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_BroadcastTransactionResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.BroadcastTransactionResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.BroadcastTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_BroadcastTransactionResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.BroadcastTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_EphemeralAddressRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.EphemeralAddressRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.EphemeralAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_EphemeralAddressRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.EphemeralAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_EphemeralAddressResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.EphemeralAddressResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.EphemeralAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_EphemeralAddressResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.EphemeralAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_FMDParametersRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.FMDParametersRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.FMDParametersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_FMDParametersRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.FMDParametersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_FMDParametersResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.FMDParametersResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.FMDParametersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_FMDParametersResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.FMDParametersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_GasPricesRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.GasPricesRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.GasPricesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_GasPricesRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.GasPricesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_GasPricesResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.GasPricesResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.GasPricesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_GasPricesResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.GasPricesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_IndexByAddressRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.IndexByAddressRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.IndexByAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_IndexByAddressRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.IndexByAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_IndexByAddressResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.IndexByAddressResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.IndexByAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_IndexByAddressResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.IndexByAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_NoteByCommitmentRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.NoteByCommitmentRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.NoteByCommitmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_NoteByCommitmentRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.NoteByCommitmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_NoteByCommitmentResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.NoteByCommitmentResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.NoteByCommitmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_NoteByCommitmentResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.NoteByCommitmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_NotesForVotingRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.NotesForVotingRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.NotesForVotingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_NotesForVotingRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.NotesForVotingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_NotesForVotingResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.NotesForVotingResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.NotesForVotingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_NotesForVotingResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.NotesForVotingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_NotesRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.NotesRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.NotesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_NotesRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.NotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_NotesResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.NotesResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.NotesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_NotesResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.NotesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_NullifierStatusRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.NullifierStatusRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.NullifierStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_NullifierStatusRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.NullifierStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_NullifierStatusResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.NullifierStatusResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.NullifierStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_NullifierStatusResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.NullifierStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_OwnedPositionIdsRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.OwnedPositionIdsRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.OwnedPositionIdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_OwnedPositionIdsRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.OwnedPositionIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_OwnedPositionIdsResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.OwnedPositionIdsResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.OwnedPositionIdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_OwnedPositionIdsResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.OwnedPositionIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_StatusRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.StatusRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.StatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_StatusRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.StatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_StatusResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.StatusResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.StatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_StatusResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.StatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_StatusStreamRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.StatusStreamRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.StatusStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_StatusStreamRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.StatusStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_StatusStreamResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.StatusStreamResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.StatusStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_StatusStreamResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.StatusStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_SwapByCommitmentRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.SwapByCommitmentRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.SwapByCommitmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_SwapByCommitmentRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.SwapByCommitmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_SwapByCommitmentResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.SwapByCommitmentResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.SwapByCommitmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_SwapByCommitmentResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.SwapByCommitmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_TransactionInfoByHashRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.TransactionInfoByHashRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.TransactionInfoByHashRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_TransactionInfoByHashRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.TransactionInfoByHashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_TransactionInfoByHashResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.TransactionInfoByHashResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.TransactionInfoByHashResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_TransactionInfoByHashResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.TransactionInfoByHashResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_TransactionInfoRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.TransactionInfoRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.TransactionInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_TransactionInfoRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.TransactionInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_TransactionInfoResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.TransactionInfoResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.TransactionInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_TransactionInfoResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.TransactionInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_TransactionPlannerRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.TransactionPlannerRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.TransactionPlannerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_TransactionPlannerRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.TransactionPlannerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_TransactionPlannerResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.TransactionPlannerResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.TransactionPlannerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_TransactionPlannerResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.TransactionPlannerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_UnclaimedSwapsRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.UnclaimedSwapsRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.UnclaimedSwapsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_UnclaimedSwapsRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.UnclaimedSwapsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_UnclaimedSwapsResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.UnclaimedSwapsResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.UnclaimedSwapsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_UnclaimedSwapsResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.UnclaimedSwapsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_ViewAuthRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.ViewAuthRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.ViewAuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_ViewAuthRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.ViewAuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_ViewAuthResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.ViewAuthResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.ViewAuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_ViewAuthResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.ViewAuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_WalletIdRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.WalletIdRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.WalletIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_WalletIdRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.WalletIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_WalletIdResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.WalletIdResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.WalletIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_WalletIdResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.WalletIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_WitnessAndBuildRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.WitnessAndBuildRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.WitnessAndBuildRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_WitnessAndBuildRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.WitnessAndBuildRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_WitnessAndBuildResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.WitnessAndBuildResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.WitnessAndBuildResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_WitnessAndBuildResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.WitnessAndBuildResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_WitnessRequest(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.WitnessRequest)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.WitnessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_WitnessRequest(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.WitnessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_penumbra_view_v1alpha1_WitnessResponse(arg) {
  if (!(arg instanceof penumbra_view_v1alpha1_view_pb.WitnessResponse)) {
    throw new Error('Expected argument of type penumbra.view.v1alpha1.WitnessResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_penumbra_view_v1alpha1_WitnessResponse(buffer_arg) {
  return penumbra_view_v1alpha1_view_pb.WitnessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The view protocol is used by a view client, who wants to do some
// transaction-related actions, to request data from a view service, which is
// responsible for synchronizing and scanning the public chain state with one or
// more full viewing keys.
//
// View protocol requests optionally include the wallet id, used to
// identify which set of data to query.
var ViewProtocolServiceService = exports.ViewProtocolServiceService = {
  // Get current status of chain sync
status: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/Status',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.StatusRequest,
    responseType: penumbra_view_v1alpha1_view_pb.StatusResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_StatusRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_StatusRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_StatusResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_StatusResponse,
  },
  // Stream sync status updates until the view service has caught up with the chain.
// Returns a stream of `StatusStreamResponse`s.
statusStream: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/StatusStream',
    requestStream: false,
    responseStream: true,
    requestType: penumbra_view_v1alpha1_view_pb.StatusStreamRequest,
    responseType: penumbra_view_v1alpha1_view_pb.StatusStreamResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_StatusStreamRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_StatusStreamRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_StatusStreamResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_StatusStreamResponse,
  },
  // Queries for notes that have been accepted by the chain.
// Returns a stream of `NotesResponse`s.
notes: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/Notes',
    requestStream: false,
    responseStream: true,
    requestType: penumbra_view_v1alpha1_view_pb.NotesRequest,
    responseType: penumbra_view_v1alpha1_view_pb.NotesResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_NotesRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_NotesRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_NotesResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_NotesResponse,
  },
  // Returns a stream of `NotesForVotingResponse`s.
notesForVoting: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/NotesForVoting',
    requestStream: false,
    responseStream: true,
    requestType: penumbra_view_v1alpha1_view_pb.NotesForVotingRequest,
    responseType: penumbra_view_v1alpha1_view_pb.NotesForVotingResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_NotesForVotingRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_NotesForVotingRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_NotesForVotingResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_NotesForVotingResponse,
  },
  // Returns authentication paths for the given note commitments.
//
// This method takes a batch of input commitments, rather than just one, so
// that the client can get a consistent set of authentication paths to a
// common root.  (Otherwise, if a client made multiple requests, the wallet
// service could have advanced the state commitment tree state between queries).
witness: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/Witness',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.WitnessRequest,
    responseType: penumbra_view_v1alpha1_view_pb.WitnessResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_WitnessRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_WitnessRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_WitnessResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_WitnessResponse,
  },
  witnessAndBuild: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/WitnessAndBuild',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.WitnessAndBuildRequest,
    responseType: penumbra_view_v1alpha1_view_pb.WitnessAndBuildResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_WitnessAndBuildRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_WitnessAndBuildRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_WitnessAndBuildResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_WitnessAndBuildResponse,
  },
  // Queries for assets.
// Returns a stream of `AssetsResponse`s.
assets: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/Assets',
    requestStream: false,
    responseStream: true,
    requestType: penumbra_view_v1alpha1_view_pb.AssetsRequest,
    responseType: penumbra_view_v1alpha1_view_pb.AssetsResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_AssetsRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_AssetsRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_AssetsResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_AssetsResponse,
  },
  // Query for the current app parameters.
appParameters: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/AppParameters',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.AppParametersRequest,
    responseType: penumbra_view_v1alpha1_view_pb.AppParametersResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_AppParametersRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_AppParametersRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_AppParametersResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_AppParametersResponse,
  },
  // Query for the current gas prices.
gasPrices: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/GasPrices',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.GasPricesRequest,
    responseType: penumbra_view_v1alpha1_view_pb.GasPricesResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_GasPricesRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_GasPricesRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_GasPricesResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_GasPricesResponse,
  },
  // Query for the current FMD parameters.
fMDParameters: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/FMDParameters',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.FMDParametersRequest,
    responseType: penumbra_view_v1alpha1_view_pb.FMDParametersResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_FMDParametersRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_FMDParametersRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_FMDParametersResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_FMDParametersResponse,
  },
  // Query for an address given an address index
addressByIndex: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/AddressByIndex',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.AddressByIndexRequest,
    responseType: penumbra_view_v1alpha1_view_pb.AddressByIndexResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_AddressByIndexRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_AddressByIndexRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_AddressByIndexResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_AddressByIndexResponse,
  },
  // Query for wallet id
walletId: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/WalletId',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.WalletIdRequest,
    responseType: penumbra_view_v1alpha1_view_pb.WalletIdResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_WalletIdRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_WalletIdRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_WalletIdResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_WalletIdResponse,
  },
  // Query for an address given an address index
indexByAddress: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/IndexByAddress',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.IndexByAddressRequest,
    responseType: penumbra_view_v1alpha1_view_pb.IndexByAddressResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_IndexByAddressRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_IndexByAddressRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_IndexByAddressResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_IndexByAddressResponse,
  },
  // Query for an ephemeral address
ephemeralAddress: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/EphemeralAddress',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.EphemeralAddressRequest,
    responseType: penumbra_view_v1alpha1_view_pb.EphemeralAddressResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_EphemeralAddressRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_EphemeralAddressRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_EphemeralAddressResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_EphemeralAddressResponse,
  },
  // Query for balance of a given address.
// Returns a stream of `BalancesResponses`.
balances: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/Balances',
    requestStream: false,
    responseStream: true,
    requestType: penumbra_view_v1alpha1_view_pb.BalancesRequest,
    responseType: penumbra_view_v1alpha1_view_pb.BalancesResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_BalancesRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_BalancesRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_BalancesResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_BalancesResponse,
  },
  // Query for a note by its note commitment, optionally waiting until the note is detected.
noteByCommitment: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/NoteByCommitment',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.NoteByCommitmentRequest,
    responseType: penumbra_view_v1alpha1_view_pb.NoteByCommitmentResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_NoteByCommitmentRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_NoteByCommitmentRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_NoteByCommitmentResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_NoteByCommitmentResponse,
  },
  // Query for a swap by its swap commitment, optionally waiting until the swap is detected.
swapByCommitment: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/SwapByCommitment',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.SwapByCommitmentRequest,
    responseType: penumbra_view_v1alpha1_view_pb.SwapByCommitmentResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_SwapByCommitmentRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_SwapByCommitmentRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_SwapByCommitmentResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_SwapByCommitmentResponse,
  },
  // Query for all unclaimed swaps.
unclaimedSwaps: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/UnclaimedSwaps',
    requestStream: false,
    responseStream: true,
    requestType: penumbra_view_v1alpha1_view_pb.UnclaimedSwapsRequest,
    responseType: penumbra_view_v1alpha1_view_pb.UnclaimedSwapsResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_UnclaimedSwapsRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_UnclaimedSwapsRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_UnclaimedSwapsResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_UnclaimedSwapsResponse,
  },
  // Query for whether a nullifier has been spent, optionally waiting until it is spent.
nullifierStatus: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/NullifierStatus',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.NullifierStatusRequest,
    responseType: penumbra_view_v1alpha1_view_pb.NullifierStatusResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_NullifierStatusRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_NullifierStatusRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_NullifierStatusResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_NullifierStatusResponse,
  },
  // Query for a given transaction by its hash.
transactionInfoByHash: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/TransactionInfoByHash',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.TransactionInfoByHashRequest,
    responseType: penumbra_view_v1alpha1_view_pb.TransactionInfoByHashResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_TransactionInfoByHashRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_TransactionInfoByHashRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_TransactionInfoByHashResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_TransactionInfoByHashResponse,
  },
  // Query for the full transactions in the given range of blocks.
// Returns a stream of `TransactionInfoResponse`s.
transactionInfo: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/TransactionInfo',
    requestStream: false,
    responseStream: true,
    requestType: penumbra_view_v1alpha1_view_pb.TransactionInfoRequest,
    responseType: penumbra_view_v1alpha1_view_pb.TransactionInfoResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_TransactionInfoRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_TransactionInfoRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_TransactionInfoResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_TransactionInfoResponse,
  },
  // Query for a transaction plan
transactionPlanner: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/TransactionPlanner',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.TransactionPlannerRequest,
    responseType: penumbra_view_v1alpha1_view_pb.TransactionPlannerResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_TransactionPlannerRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_TransactionPlannerRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_TransactionPlannerResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_TransactionPlannerResponse,
  },
  // Broadcast a transaction to the network, optionally waiting for full confirmation.
broadcastTransaction: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/BroadcastTransaction',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.BroadcastTransactionRequest,
    responseType: penumbra_view_v1alpha1_view_pb.BroadcastTransactionResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_BroadcastTransactionRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_BroadcastTransactionRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_BroadcastTransactionResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_BroadcastTransactionResponse,
  },
  // Query for owned position IDs for the given trading pair and in the given position state.
ownedPositionIds: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/OwnedPositionIds',
    requestStream: false,
    responseStream: true,
    requestType: penumbra_view_v1alpha1_view_pb.OwnedPositionIdsRequest,
    responseType: penumbra_view_v1alpha1_view_pb.OwnedPositionIdsResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_OwnedPositionIdsRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_OwnedPositionIdsRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_OwnedPositionIdsResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_OwnedPositionIdsResponse,
  },
  // Authorize a transaction plan and build the transaction.
authorizeAndBuild: {
    path: '/penumbra.view.v1alpha1.ViewProtocolService/AuthorizeAndBuild',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildRequest,
    responseType: penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_AuthorizeAndBuildRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_AuthorizeAndBuildRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_AuthorizeAndBuildResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_AuthorizeAndBuildResponse,
  },
};

exports.ViewProtocolServiceClient = grpc.makeGenericClientConstructor(ViewProtocolServiceService);
var ViewAuthServiceService = exports.ViewAuthServiceService = {
  viewAuth: {
    path: '/penumbra.view.v1alpha1.ViewAuthService/ViewAuth',
    requestStream: false,
    responseStream: false,
    requestType: penumbra_view_v1alpha1_view_pb.ViewAuthRequest,
    responseType: penumbra_view_v1alpha1_view_pb.ViewAuthResponse,
    requestSerialize: serialize_penumbra_view_v1alpha1_ViewAuthRequest,
    requestDeserialize: deserialize_penumbra_view_v1alpha1_ViewAuthRequest,
    responseSerialize: serialize_penumbra_view_v1alpha1_ViewAuthResponse,
    responseDeserialize: deserialize_penumbra_view_v1alpha1_ViewAuthResponse,
  },
};

exports.ViewAuthServiceClient = grpc.makeGenericClientConstructor(ViewAuthServiceService);
