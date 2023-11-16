// package: penumbra.view.v1alpha1
// file: penumbra/view/v1alpha1/view.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as penumbra_view_v1alpha1_view_pb from "../../../penumbra/view/v1alpha1/view_pb";
import * as penumbra_crypto_tct_v1alpha1_tct_pb from "../../../penumbra/crypto/tct/v1alpha1/tct_pb";
import * as penumbra_core_keys_v1alpha1_keys_pb from "../../../penumbra/core/keys/v1alpha1/keys_pb";
import * as penumbra_core_num_v1alpha1_num_pb from "../../../penumbra/core/num/v1alpha1/num_pb";
import * as penumbra_core_app_v1alpha1_app_pb from "../../../penumbra/core/app/v1alpha1/app_pb";
import * as penumbra_core_asset_v1alpha1_asset_pb from "../../../penumbra/core/asset/v1alpha1/asset_pb";
import * as penumbra_core_transaction_v1alpha1_transaction_pb from "../../../penumbra/core/transaction/v1alpha1/transaction_pb";
import * as penumbra_core_component_chain_v1alpha1_chain_pb from "../../../penumbra/core/component/chain/v1alpha1/chain_pb";
import * as penumbra_core_component_dex_v1alpha1_dex_pb from "../../../penumbra/core/component/dex/v1alpha1/dex_pb";
import * as penumbra_core_component_fee_v1alpha1_fee_pb from "../../../penumbra/core/component/fee/v1alpha1/fee_pb";
import * as penumbra_core_component_ibc_v1alpha1_ibc_pb from "../../../penumbra/core/component/ibc/v1alpha1/ibc_pb";
import * as penumbra_core_component_sct_v1alpha1_sct_pb from "../../../penumbra/core/component/sct/v1alpha1/sct_pb";
import * as penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb from "../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb";
import * as penumbra_core_component_stake_v1alpha1_stake_pb from "../../../penumbra/core/component/stake/v1alpha1/stake_pb";

interface IViewProtocolServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    status: IViewProtocolServiceService_IStatus;
    statusStream: IViewProtocolServiceService_IStatusStream;
    notes: IViewProtocolServiceService_INotes;
    notesForVoting: IViewProtocolServiceService_INotesForVoting;
    witness: IViewProtocolServiceService_IWitness;
    witnessAndBuild: IViewProtocolServiceService_IWitnessAndBuild;
    assets: IViewProtocolServiceService_IAssets;
    appParameters: IViewProtocolServiceService_IAppParameters;
    gasPrices: IViewProtocolServiceService_IGasPrices;
    fMDParameters: IViewProtocolServiceService_IFMDParameters;
    addressByIndex: IViewProtocolServiceService_IAddressByIndex;
    walletId: IViewProtocolServiceService_IWalletId;
    indexByAddress: IViewProtocolServiceService_IIndexByAddress;
    ephemeralAddress: IViewProtocolServiceService_IEphemeralAddress;
    balances: IViewProtocolServiceService_IBalances;
    noteByCommitment: IViewProtocolServiceService_INoteByCommitment;
    swapByCommitment: IViewProtocolServiceService_ISwapByCommitment;
    unclaimedSwaps: IViewProtocolServiceService_IUnclaimedSwaps;
    nullifierStatus: IViewProtocolServiceService_INullifierStatus;
    transactionInfoByHash: IViewProtocolServiceService_ITransactionInfoByHash;
    transactionInfo: IViewProtocolServiceService_ITransactionInfo;
    transactionPlanner: IViewProtocolServiceService_ITransactionPlanner;
    broadcastTransaction: IViewProtocolServiceService_IBroadcastTransaction;
    ownedPositionIds: IViewProtocolServiceService_IOwnedPositionIds;
    authorizeAndBuild: IViewProtocolServiceService_IAuthorizeAndBuild;
}

interface IViewProtocolServiceService_IStatus extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.StatusRequest, penumbra_view_v1alpha1_view_pb.StatusResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/Status";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.StatusRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.StatusRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.StatusResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.StatusResponse>;
}
interface IViewProtocolServiceService_IStatusStream extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.StatusStreamRequest, penumbra_view_v1alpha1_view_pb.StatusStreamResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/StatusStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.StatusStreamRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.StatusStreamRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.StatusStreamResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.StatusStreamResponse>;
}
interface IViewProtocolServiceService_INotes extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.NotesRequest, penumbra_view_v1alpha1_view_pb.NotesResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/Notes";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.NotesRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.NotesRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.NotesResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.NotesResponse>;
}
interface IViewProtocolServiceService_INotesForVoting extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.NotesForVotingRequest, penumbra_view_v1alpha1_view_pb.NotesForVotingResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/NotesForVoting";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.NotesForVotingRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.NotesForVotingRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.NotesForVotingResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.NotesForVotingResponse>;
}
interface IViewProtocolServiceService_IWitness extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.WitnessRequest, penumbra_view_v1alpha1_view_pb.WitnessResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/Witness";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.WitnessRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.WitnessRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.WitnessResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.WitnessResponse>;
}
interface IViewProtocolServiceService_IWitnessAndBuild extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.WitnessAndBuildRequest, penumbra_view_v1alpha1_view_pb.WitnessAndBuildResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/WitnessAndBuild";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.WitnessAndBuildRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.WitnessAndBuildRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.WitnessAndBuildResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.WitnessAndBuildResponse>;
}
interface IViewProtocolServiceService_IAssets extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.AssetsRequest, penumbra_view_v1alpha1_view_pb.AssetsResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/Assets";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.AssetsRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.AssetsRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.AssetsResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.AssetsResponse>;
}
interface IViewProtocolServiceService_IAppParameters extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.AppParametersRequest, penumbra_view_v1alpha1_view_pb.AppParametersResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/AppParameters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.AppParametersRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.AppParametersRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.AppParametersResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.AppParametersResponse>;
}
interface IViewProtocolServiceService_IGasPrices extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.GasPricesRequest, penumbra_view_v1alpha1_view_pb.GasPricesResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/GasPrices";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.GasPricesRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.GasPricesRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.GasPricesResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.GasPricesResponse>;
}
interface IViewProtocolServiceService_IFMDParameters extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.FMDParametersRequest, penumbra_view_v1alpha1_view_pb.FMDParametersResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/FMDParameters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.FMDParametersRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.FMDParametersRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.FMDParametersResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.FMDParametersResponse>;
}
interface IViewProtocolServiceService_IAddressByIndex extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.AddressByIndexRequest, penumbra_view_v1alpha1_view_pb.AddressByIndexResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/AddressByIndex";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.AddressByIndexRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.AddressByIndexRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.AddressByIndexResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.AddressByIndexResponse>;
}
interface IViewProtocolServiceService_IWalletId extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.WalletIdRequest, penumbra_view_v1alpha1_view_pb.WalletIdResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/WalletId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.WalletIdRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.WalletIdRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.WalletIdResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.WalletIdResponse>;
}
interface IViewProtocolServiceService_IIndexByAddress extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.IndexByAddressRequest, penumbra_view_v1alpha1_view_pb.IndexByAddressResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/IndexByAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.IndexByAddressRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.IndexByAddressRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.IndexByAddressResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.IndexByAddressResponse>;
}
interface IViewProtocolServiceService_IEphemeralAddress extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.EphemeralAddressRequest, penumbra_view_v1alpha1_view_pb.EphemeralAddressResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/EphemeralAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.EphemeralAddressRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.EphemeralAddressRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.EphemeralAddressResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.EphemeralAddressResponse>;
}
interface IViewProtocolServiceService_IBalances extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.BalancesRequest, penumbra_view_v1alpha1_view_pb.BalancesResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/Balances";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.BalancesRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.BalancesRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.BalancesResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.BalancesResponse>;
}
interface IViewProtocolServiceService_INoteByCommitment extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.NoteByCommitmentRequest, penumbra_view_v1alpha1_view_pb.NoteByCommitmentResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/NoteByCommitment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.NoteByCommitmentRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.NoteByCommitmentRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.NoteByCommitmentResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.NoteByCommitmentResponse>;
}
interface IViewProtocolServiceService_ISwapByCommitment extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.SwapByCommitmentRequest, penumbra_view_v1alpha1_view_pb.SwapByCommitmentResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/SwapByCommitment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.SwapByCommitmentRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.SwapByCommitmentRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.SwapByCommitmentResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.SwapByCommitmentResponse>;
}
interface IViewProtocolServiceService_IUnclaimedSwaps extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.UnclaimedSwapsRequest, penumbra_view_v1alpha1_view_pb.UnclaimedSwapsResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/UnclaimedSwaps";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.UnclaimedSwapsRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.UnclaimedSwapsRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.UnclaimedSwapsResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.UnclaimedSwapsResponse>;
}
interface IViewProtocolServiceService_INullifierStatus extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.NullifierStatusRequest, penumbra_view_v1alpha1_view_pb.NullifierStatusResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/NullifierStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.NullifierStatusRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.NullifierStatusRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.NullifierStatusResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.NullifierStatusResponse>;
}
interface IViewProtocolServiceService_ITransactionInfoByHash extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.TransactionInfoByHashRequest, penumbra_view_v1alpha1_view_pb.TransactionInfoByHashResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/TransactionInfoByHash";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.TransactionInfoByHashRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.TransactionInfoByHashRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.TransactionInfoByHashResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.TransactionInfoByHashResponse>;
}
interface IViewProtocolServiceService_ITransactionInfo extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.TransactionInfoRequest, penumbra_view_v1alpha1_view_pb.TransactionInfoResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/TransactionInfo";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.TransactionInfoRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.TransactionInfoRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.TransactionInfoResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.TransactionInfoResponse>;
}
interface IViewProtocolServiceService_ITransactionPlanner extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.TransactionPlannerRequest, penumbra_view_v1alpha1_view_pb.TransactionPlannerResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/TransactionPlanner";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.TransactionPlannerRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.TransactionPlannerRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.TransactionPlannerResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.TransactionPlannerResponse>;
}
interface IViewProtocolServiceService_IBroadcastTransaction extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.BroadcastTransactionRequest, penumbra_view_v1alpha1_view_pb.BroadcastTransactionResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/BroadcastTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.BroadcastTransactionRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.BroadcastTransactionRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.BroadcastTransactionResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.BroadcastTransactionResponse>;
}
interface IViewProtocolServiceService_IOwnedPositionIds extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.OwnedPositionIdsRequest, penumbra_view_v1alpha1_view_pb.OwnedPositionIdsResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/OwnedPositionIds";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.OwnedPositionIdsRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.OwnedPositionIdsRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.OwnedPositionIdsResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.OwnedPositionIdsResponse>;
}
interface IViewProtocolServiceService_IAuthorizeAndBuild extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildRequest, penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildResponse> {
    path: "/penumbra.view.v1alpha1.ViewProtocolService/AuthorizeAndBuild";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildResponse>;
}

export const ViewProtocolServiceService: IViewProtocolServiceService;

export interface IViewProtocolServiceServer {
    status: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.StatusRequest, penumbra_view_v1alpha1_view_pb.StatusResponse>;
    statusStream: grpc.handleServerStreamingCall<penumbra_view_v1alpha1_view_pb.StatusStreamRequest, penumbra_view_v1alpha1_view_pb.StatusStreamResponse>;
    notes: grpc.handleServerStreamingCall<penumbra_view_v1alpha1_view_pb.NotesRequest, penumbra_view_v1alpha1_view_pb.NotesResponse>;
    notesForVoting: grpc.handleServerStreamingCall<penumbra_view_v1alpha1_view_pb.NotesForVotingRequest, penumbra_view_v1alpha1_view_pb.NotesForVotingResponse>;
    witness: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.WitnessRequest, penumbra_view_v1alpha1_view_pb.WitnessResponse>;
    witnessAndBuild: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.WitnessAndBuildRequest, penumbra_view_v1alpha1_view_pb.WitnessAndBuildResponse>;
    assets: grpc.handleServerStreamingCall<penumbra_view_v1alpha1_view_pb.AssetsRequest, penumbra_view_v1alpha1_view_pb.AssetsResponse>;
    appParameters: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.AppParametersRequest, penumbra_view_v1alpha1_view_pb.AppParametersResponse>;
    gasPrices: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.GasPricesRequest, penumbra_view_v1alpha1_view_pb.GasPricesResponse>;
    fMDParameters: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.FMDParametersRequest, penumbra_view_v1alpha1_view_pb.FMDParametersResponse>;
    addressByIndex: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.AddressByIndexRequest, penumbra_view_v1alpha1_view_pb.AddressByIndexResponse>;
    walletId: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.WalletIdRequest, penumbra_view_v1alpha1_view_pb.WalletIdResponse>;
    indexByAddress: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.IndexByAddressRequest, penumbra_view_v1alpha1_view_pb.IndexByAddressResponse>;
    ephemeralAddress: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.EphemeralAddressRequest, penumbra_view_v1alpha1_view_pb.EphemeralAddressResponse>;
    balances: grpc.handleServerStreamingCall<penumbra_view_v1alpha1_view_pb.BalancesRequest, penumbra_view_v1alpha1_view_pb.BalancesResponse>;
    noteByCommitment: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.NoteByCommitmentRequest, penumbra_view_v1alpha1_view_pb.NoteByCommitmentResponse>;
    swapByCommitment: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.SwapByCommitmentRequest, penumbra_view_v1alpha1_view_pb.SwapByCommitmentResponse>;
    unclaimedSwaps: grpc.handleServerStreamingCall<penumbra_view_v1alpha1_view_pb.UnclaimedSwapsRequest, penumbra_view_v1alpha1_view_pb.UnclaimedSwapsResponse>;
    nullifierStatus: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.NullifierStatusRequest, penumbra_view_v1alpha1_view_pb.NullifierStatusResponse>;
    transactionInfoByHash: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.TransactionInfoByHashRequest, penumbra_view_v1alpha1_view_pb.TransactionInfoByHashResponse>;
    transactionInfo: grpc.handleServerStreamingCall<penumbra_view_v1alpha1_view_pb.TransactionInfoRequest, penumbra_view_v1alpha1_view_pb.TransactionInfoResponse>;
    transactionPlanner: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.TransactionPlannerRequest, penumbra_view_v1alpha1_view_pb.TransactionPlannerResponse>;
    broadcastTransaction: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.BroadcastTransactionRequest, penumbra_view_v1alpha1_view_pb.BroadcastTransactionResponse>;
    ownedPositionIds: grpc.handleServerStreamingCall<penumbra_view_v1alpha1_view_pb.OwnedPositionIdsRequest, penumbra_view_v1alpha1_view_pb.OwnedPositionIdsResponse>;
    authorizeAndBuild: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildRequest, penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildResponse>;
}

export interface IViewProtocolServiceClient {
    status(request: penumbra_view_v1alpha1_view_pb.StatusRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    status(request: penumbra_view_v1alpha1_view_pb.StatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    status(request: penumbra_view_v1alpha1_view_pb.StatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    statusStream(request: penumbra_view_v1alpha1_view_pb.StatusStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.StatusStreamResponse>;
    statusStream(request: penumbra_view_v1alpha1_view_pb.StatusStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.StatusStreamResponse>;
    notes(request: penumbra_view_v1alpha1_view_pb.NotesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.NotesResponse>;
    notes(request: penumbra_view_v1alpha1_view_pb.NotesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.NotesResponse>;
    notesForVoting(request: penumbra_view_v1alpha1_view_pb.NotesForVotingRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.NotesForVotingResponse>;
    notesForVoting(request: penumbra_view_v1alpha1_view_pb.NotesForVotingRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.NotesForVotingResponse>;
    witness(request: penumbra_view_v1alpha1_view_pb.WitnessRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WitnessResponse) => void): grpc.ClientUnaryCall;
    witness(request: penumbra_view_v1alpha1_view_pb.WitnessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WitnessResponse) => void): grpc.ClientUnaryCall;
    witness(request: penumbra_view_v1alpha1_view_pb.WitnessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WitnessResponse) => void): grpc.ClientUnaryCall;
    witnessAndBuild(request: penumbra_view_v1alpha1_view_pb.WitnessAndBuildRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WitnessAndBuildResponse) => void): grpc.ClientUnaryCall;
    witnessAndBuild(request: penumbra_view_v1alpha1_view_pb.WitnessAndBuildRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WitnessAndBuildResponse) => void): grpc.ClientUnaryCall;
    witnessAndBuild(request: penumbra_view_v1alpha1_view_pb.WitnessAndBuildRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WitnessAndBuildResponse) => void): grpc.ClientUnaryCall;
    assets(request: penumbra_view_v1alpha1_view_pb.AssetsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.AssetsResponse>;
    assets(request: penumbra_view_v1alpha1_view_pb.AssetsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.AssetsResponse>;
    appParameters(request: penumbra_view_v1alpha1_view_pb.AppParametersRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AppParametersResponse) => void): grpc.ClientUnaryCall;
    appParameters(request: penumbra_view_v1alpha1_view_pb.AppParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AppParametersResponse) => void): grpc.ClientUnaryCall;
    appParameters(request: penumbra_view_v1alpha1_view_pb.AppParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AppParametersResponse) => void): grpc.ClientUnaryCall;
    gasPrices(request: penumbra_view_v1alpha1_view_pb.GasPricesRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.GasPricesResponse) => void): grpc.ClientUnaryCall;
    gasPrices(request: penumbra_view_v1alpha1_view_pb.GasPricesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.GasPricesResponse) => void): grpc.ClientUnaryCall;
    gasPrices(request: penumbra_view_v1alpha1_view_pb.GasPricesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.GasPricesResponse) => void): grpc.ClientUnaryCall;
    fMDParameters(request: penumbra_view_v1alpha1_view_pb.FMDParametersRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.FMDParametersResponse) => void): grpc.ClientUnaryCall;
    fMDParameters(request: penumbra_view_v1alpha1_view_pb.FMDParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.FMDParametersResponse) => void): grpc.ClientUnaryCall;
    fMDParameters(request: penumbra_view_v1alpha1_view_pb.FMDParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.FMDParametersResponse) => void): grpc.ClientUnaryCall;
    addressByIndex(request: penumbra_view_v1alpha1_view_pb.AddressByIndexRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AddressByIndexResponse) => void): grpc.ClientUnaryCall;
    addressByIndex(request: penumbra_view_v1alpha1_view_pb.AddressByIndexRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AddressByIndexResponse) => void): grpc.ClientUnaryCall;
    addressByIndex(request: penumbra_view_v1alpha1_view_pb.AddressByIndexRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AddressByIndexResponse) => void): grpc.ClientUnaryCall;
    walletId(request: penumbra_view_v1alpha1_view_pb.WalletIdRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WalletIdResponse) => void): grpc.ClientUnaryCall;
    walletId(request: penumbra_view_v1alpha1_view_pb.WalletIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WalletIdResponse) => void): grpc.ClientUnaryCall;
    walletId(request: penumbra_view_v1alpha1_view_pb.WalletIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WalletIdResponse) => void): grpc.ClientUnaryCall;
    indexByAddress(request: penumbra_view_v1alpha1_view_pb.IndexByAddressRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.IndexByAddressResponse) => void): grpc.ClientUnaryCall;
    indexByAddress(request: penumbra_view_v1alpha1_view_pb.IndexByAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.IndexByAddressResponse) => void): grpc.ClientUnaryCall;
    indexByAddress(request: penumbra_view_v1alpha1_view_pb.IndexByAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.IndexByAddressResponse) => void): grpc.ClientUnaryCall;
    ephemeralAddress(request: penumbra_view_v1alpha1_view_pb.EphemeralAddressRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.EphemeralAddressResponse) => void): grpc.ClientUnaryCall;
    ephemeralAddress(request: penumbra_view_v1alpha1_view_pb.EphemeralAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.EphemeralAddressResponse) => void): grpc.ClientUnaryCall;
    ephemeralAddress(request: penumbra_view_v1alpha1_view_pb.EphemeralAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.EphemeralAddressResponse) => void): grpc.ClientUnaryCall;
    balances(request: penumbra_view_v1alpha1_view_pb.BalancesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.BalancesResponse>;
    balances(request: penumbra_view_v1alpha1_view_pb.BalancesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.BalancesResponse>;
    noteByCommitment(request: penumbra_view_v1alpha1_view_pb.NoteByCommitmentRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.NoteByCommitmentResponse) => void): grpc.ClientUnaryCall;
    noteByCommitment(request: penumbra_view_v1alpha1_view_pb.NoteByCommitmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.NoteByCommitmentResponse) => void): grpc.ClientUnaryCall;
    noteByCommitment(request: penumbra_view_v1alpha1_view_pb.NoteByCommitmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.NoteByCommitmentResponse) => void): grpc.ClientUnaryCall;
    swapByCommitment(request: penumbra_view_v1alpha1_view_pb.SwapByCommitmentRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.SwapByCommitmentResponse) => void): grpc.ClientUnaryCall;
    swapByCommitment(request: penumbra_view_v1alpha1_view_pb.SwapByCommitmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.SwapByCommitmentResponse) => void): grpc.ClientUnaryCall;
    swapByCommitment(request: penumbra_view_v1alpha1_view_pb.SwapByCommitmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.SwapByCommitmentResponse) => void): grpc.ClientUnaryCall;
    unclaimedSwaps(request: penumbra_view_v1alpha1_view_pb.UnclaimedSwapsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.UnclaimedSwapsResponse>;
    unclaimedSwaps(request: penumbra_view_v1alpha1_view_pb.UnclaimedSwapsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.UnclaimedSwapsResponse>;
    nullifierStatus(request: penumbra_view_v1alpha1_view_pb.NullifierStatusRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.NullifierStatusResponse) => void): grpc.ClientUnaryCall;
    nullifierStatus(request: penumbra_view_v1alpha1_view_pb.NullifierStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.NullifierStatusResponse) => void): grpc.ClientUnaryCall;
    nullifierStatus(request: penumbra_view_v1alpha1_view_pb.NullifierStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.NullifierStatusResponse) => void): grpc.ClientUnaryCall;
    transactionInfoByHash(request: penumbra_view_v1alpha1_view_pb.TransactionInfoByHashRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.TransactionInfoByHashResponse) => void): grpc.ClientUnaryCall;
    transactionInfoByHash(request: penumbra_view_v1alpha1_view_pb.TransactionInfoByHashRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.TransactionInfoByHashResponse) => void): grpc.ClientUnaryCall;
    transactionInfoByHash(request: penumbra_view_v1alpha1_view_pb.TransactionInfoByHashRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.TransactionInfoByHashResponse) => void): grpc.ClientUnaryCall;
    transactionInfo(request: penumbra_view_v1alpha1_view_pb.TransactionInfoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.TransactionInfoResponse>;
    transactionInfo(request: penumbra_view_v1alpha1_view_pb.TransactionInfoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.TransactionInfoResponse>;
    transactionPlanner(request: penumbra_view_v1alpha1_view_pb.TransactionPlannerRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.TransactionPlannerResponse) => void): grpc.ClientUnaryCall;
    transactionPlanner(request: penumbra_view_v1alpha1_view_pb.TransactionPlannerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.TransactionPlannerResponse) => void): grpc.ClientUnaryCall;
    transactionPlanner(request: penumbra_view_v1alpha1_view_pb.TransactionPlannerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.TransactionPlannerResponse) => void): grpc.ClientUnaryCall;
    broadcastTransaction(request: penumbra_view_v1alpha1_view_pb.BroadcastTransactionRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.BroadcastTransactionResponse) => void): grpc.ClientUnaryCall;
    broadcastTransaction(request: penumbra_view_v1alpha1_view_pb.BroadcastTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.BroadcastTransactionResponse) => void): grpc.ClientUnaryCall;
    broadcastTransaction(request: penumbra_view_v1alpha1_view_pb.BroadcastTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.BroadcastTransactionResponse) => void): grpc.ClientUnaryCall;
    ownedPositionIds(request: penumbra_view_v1alpha1_view_pb.OwnedPositionIdsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.OwnedPositionIdsResponse>;
    ownedPositionIds(request: penumbra_view_v1alpha1_view_pb.OwnedPositionIdsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.OwnedPositionIdsResponse>;
    authorizeAndBuild(request: penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildResponse) => void): grpc.ClientUnaryCall;
    authorizeAndBuild(request: penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildResponse) => void): grpc.ClientUnaryCall;
    authorizeAndBuild(request: penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildResponse) => void): grpc.ClientUnaryCall;
}

export class ViewProtocolServiceClient extends grpc.Client implements IViewProtocolServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public status(request: penumbra_view_v1alpha1_view_pb.StatusRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public status(request: penumbra_view_v1alpha1_view_pb.StatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public status(request: penumbra_view_v1alpha1_view_pb.StatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public statusStream(request: penumbra_view_v1alpha1_view_pb.StatusStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.StatusStreamResponse>;
    public statusStream(request: penumbra_view_v1alpha1_view_pb.StatusStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.StatusStreamResponse>;
    public notes(request: penumbra_view_v1alpha1_view_pb.NotesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.NotesResponse>;
    public notes(request: penumbra_view_v1alpha1_view_pb.NotesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.NotesResponse>;
    public notesForVoting(request: penumbra_view_v1alpha1_view_pb.NotesForVotingRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.NotesForVotingResponse>;
    public notesForVoting(request: penumbra_view_v1alpha1_view_pb.NotesForVotingRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.NotesForVotingResponse>;
    public witness(request: penumbra_view_v1alpha1_view_pb.WitnessRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WitnessResponse) => void): grpc.ClientUnaryCall;
    public witness(request: penumbra_view_v1alpha1_view_pb.WitnessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WitnessResponse) => void): grpc.ClientUnaryCall;
    public witness(request: penumbra_view_v1alpha1_view_pb.WitnessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WitnessResponse) => void): grpc.ClientUnaryCall;
    public witnessAndBuild(request: penumbra_view_v1alpha1_view_pb.WitnessAndBuildRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WitnessAndBuildResponse) => void): grpc.ClientUnaryCall;
    public witnessAndBuild(request: penumbra_view_v1alpha1_view_pb.WitnessAndBuildRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WitnessAndBuildResponse) => void): grpc.ClientUnaryCall;
    public witnessAndBuild(request: penumbra_view_v1alpha1_view_pb.WitnessAndBuildRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WitnessAndBuildResponse) => void): grpc.ClientUnaryCall;
    public assets(request: penumbra_view_v1alpha1_view_pb.AssetsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.AssetsResponse>;
    public assets(request: penumbra_view_v1alpha1_view_pb.AssetsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.AssetsResponse>;
    public appParameters(request: penumbra_view_v1alpha1_view_pb.AppParametersRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AppParametersResponse) => void): grpc.ClientUnaryCall;
    public appParameters(request: penumbra_view_v1alpha1_view_pb.AppParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AppParametersResponse) => void): grpc.ClientUnaryCall;
    public appParameters(request: penumbra_view_v1alpha1_view_pb.AppParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AppParametersResponse) => void): grpc.ClientUnaryCall;
    public gasPrices(request: penumbra_view_v1alpha1_view_pb.GasPricesRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.GasPricesResponse) => void): grpc.ClientUnaryCall;
    public gasPrices(request: penumbra_view_v1alpha1_view_pb.GasPricesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.GasPricesResponse) => void): grpc.ClientUnaryCall;
    public gasPrices(request: penumbra_view_v1alpha1_view_pb.GasPricesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.GasPricesResponse) => void): grpc.ClientUnaryCall;
    public fMDParameters(request: penumbra_view_v1alpha1_view_pb.FMDParametersRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.FMDParametersResponse) => void): grpc.ClientUnaryCall;
    public fMDParameters(request: penumbra_view_v1alpha1_view_pb.FMDParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.FMDParametersResponse) => void): grpc.ClientUnaryCall;
    public fMDParameters(request: penumbra_view_v1alpha1_view_pb.FMDParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.FMDParametersResponse) => void): grpc.ClientUnaryCall;
    public addressByIndex(request: penumbra_view_v1alpha1_view_pb.AddressByIndexRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AddressByIndexResponse) => void): grpc.ClientUnaryCall;
    public addressByIndex(request: penumbra_view_v1alpha1_view_pb.AddressByIndexRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AddressByIndexResponse) => void): grpc.ClientUnaryCall;
    public addressByIndex(request: penumbra_view_v1alpha1_view_pb.AddressByIndexRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AddressByIndexResponse) => void): grpc.ClientUnaryCall;
    public walletId(request: penumbra_view_v1alpha1_view_pb.WalletIdRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WalletIdResponse) => void): grpc.ClientUnaryCall;
    public walletId(request: penumbra_view_v1alpha1_view_pb.WalletIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WalletIdResponse) => void): grpc.ClientUnaryCall;
    public walletId(request: penumbra_view_v1alpha1_view_pb.WalletIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.WalletIdResponse) => void): grpc.ClientUnaryCall;
    public indexByAddress(request: penumbra_view_v1alpha1_view_pb.IndexByAddressRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.IndexByAddressResponse) => void): grpc.ClientUnaryCall;
    public indexByAddress(request: penumbra_view_v1alpha1_view_pb.IndexByAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.IndexByAddressResponse) => void): grpc.ClientUnaryCall;
    public indexByAddress(request: penumbra_view_v1alpha1_view_pb.IndexByAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.IndexByAddressResponse) => void): grpc.ClientUnaryCall;
    public ephemeralAddress(request: penumbra_view_v1alpha1_view_pb.EphemeralAddressRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.EphemeralAddressResponse) => void): grpc.ClientUnaryCall;
    public ephemeralAddress(request: penumbra_view_v1alpha1_view_pb.EphemeralAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.EphemeralAddressResponse) => void): grpc.ClientUnaryCall;
    public ephemeralAddress(request: penumbra_view_v1alpha1_view_pb.EphemeralAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.EphemeralAddressResponse) => void): grpc.ClientUnaryCall;
    public balances(request: penumbra_view_v1alpha1_view_pb.BalancesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.BalancesResponse>;
    public balances(request: penumbra_view_v1alpha1_view_pb.BalancesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.BalancesResponse>;
    public noteByCommitment(request: penumbra_view_v1alpha1_view_pb.NoteByCommitmentRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.NoteByCommitmentResponse) => void): grpc.ClientUnaryCall;
    public noteByCommitment(request: penumbra_view_v1alpha1_view_pb.NoteByCommitmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.NoteByCommitmentResponse) => void): grpc.ClientUnaryCall;
    public noteByCommitment(request: penumbra_view_v1alpha1_view_pb.NoteByCommitmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.NoteByCommitmentResponse) => void): grpc.ClientUnaryCall;
    public swapByCommitment(request: penumbra_view_v1alpha1_view_pb.SwapByCommitmentRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.SwapByCommitmentResponse) => void): grpc.ClientUnaryCall;
    public swapByCommitment(request: penumbra_view_v1alpha1_view_pb.SwapByCommitmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.SwapByCommitmentResponse) => void): grpc.ClientUnaryCall;
    public swapByCommitment(request: penumbra_view_v1alpha1_view_pb.SwapByCommitmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.SwapByCommitmentResponse) => void): grpc.ClientUnaryCall;
    public unclaimedSwaps(request: penumbra_view_v1alpha1_view_pb.UnclaimedSwapsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.UnclaimedSwapsResponse>;
    public unclaimedSwaps(request: penumbra_view_v1alpha1_view_pb.UnclaimedSwapsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.UnclaimedSwapsResponse>;
    public nullifierStatus(request: penumbra_view_v1alpha1_view_pb.NullifierStatusRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.NullifierStatusResponse) => void): grpc.ClientUnaryCall;
    public nullifierStatus(request: penumbra_view_v1alpha1_view_pb.NullifierStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.NullifierStatusResponse) => void): grpc.ClientUnaryCall;
    public nullifierStatus(request: penumbra_view_v1alpha1_view_pb.NullifierStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.NullifierStatusResponse) => void): grpc.ClientUnaryCall;
    public transactionInfoByHash(request: penumbra_view_v1alpha1_view_pb.TransactionInfoByHashRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.TransactionInfoByHashResponse) => void): grpc.ClientUnaryCall;
    public transactionInfoByHash(request: penumbra_view_v1alpha1_view_pb.TransactionInfoByHashRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.TransactionInfoByHashResponse) => void): grpc.ClientUnaryCall;
    public transactionInfoByHash(request: penumbra_view_v1alpha1_view_pb.TransactionInfoByHashRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.TransactionInfoByHashResponse) => void): grpc.ClientUnaryCall;
    public transactionInfo(request: penumbra_view_v1alpha1_view_pb.TransactionInfoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.TransactionInfoResponse>;
    public transactionInfo(request: penumbra_view_v1alpha1_view_pb.TransactionInfoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.TransactionInfoResponse>;
    public transactionPlanner(request: penumbra_view_v1alpha1_view_pb.TransactionPlannerRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.TransactionPlannerResponse) => void): grpc.ClientUnaryCall;
    public transactionPlanner(request: penumbra_view_v1alpha1_view_pb.TransactionPlannerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.TransactionPlannerResponse) => void): grpc.ClientUnaryCall;
    public transactionPlanner(request: penumbra_view_v1alpha1_view_pb.TransactionPlannerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.TransactionPlannerResponse) => void): grpc.ClientUnaryCall;
    public broadcastTransaction(request: penumbra_view_v1alpha1_view_pb.BroadcastTransactionRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.BroadcastTransactionResponse) => void): grpc.ClientUnaryCall;
    public broadcastTransaction(request: penumbra_view_v1alpha1_view_pb.BroadcastTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.BroadcastTransactionResponse) => void): grpc.ClientUnaryCall;
    public broadcastTransaction(request: penumbra_view_v1alpha1_view_pb.BroadcastTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.BroadcastTransactionResponse) => void): grpc.ClientUnaryCall;
    public ownedPositionIds(request: penumbra_view_v1alpha1_view_pb.OwnedPositionIdsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.OwnedPositionIdsResponse>;
    public ownedPositionIds(request: penumbra_view_v1alpha1_view_pb.OwnedPositionIdsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_view_v1alpha1_view_pb.OwnedPositionIdsResponse>;
    public authorizeAndBuild(request: penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildResponse) => void): grpc.ClientUnaryCall;
    public authorizeAndBuild(request: penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildResponse) => void): grpc.ClientUnaryCall;
    public authorizeAndBuild(request: penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.AuthorizeAndBuildResponse) => void): grpc.ClientUnaryCall;
}

interface IViewAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    viewAuth: IViewAuthServiceService_IViewAuth;
}

interface IViewAuthServiceService_IViewAuth extends grpc.MethodDefinition<penumbra_view_v1alpha1_view_pb.ViewAuthRequest, penumbra_view_v1alpha1_view_pb.ViewAuthResponse> {
    path: "/penumbra.view.v1alpha1.ViewAuthService/ViewAuth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.ViewAuthRequest>;
    requestDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.ViewAuthRequest>;
    responseSerialize: grpc.serialize<penumbra_view_v1alpha1_view_pb.ViewAuthResponse>;
    responseDeserialize: grpc.deserialize<penumbra_view_v1alpha1_view_pb.ViewAuthResponse>;
}

export const ViewAuthServiceService: IViewAuthServiceService;

export interface IViewAuthServiceServer {
    viewAuth: grpc.handleUnaryCall<penumbra_view_v1alpha1_view_pb.ViewAuthRequest, penumbra_view_v1alpha1_view_pb.ViewAuthResponse>;
}

export interface IViewAuthServiceClient {
    viewAuth(request: penumbra_view_v1alpha1_view_pb.ViewAuthRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.ViewAuthResponse) => void): grpc.ClientUnaryCall;
    viewAuth(request: penumbra_view_v1alpha1_view_pb.ViewAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.ViewAuthResponse) => void): grpc.ClientUnaryCall;
    viewAuth(request: penumbra_view_v1alpha1_view_pb.ViewAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.ViewAuthResponse) => void): grpc.ClientUnaryCall;
}

export class ViewAuthServiceClient extends grpc.Client implements IViewAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public viewAuth(request: penumbra_view_v1alpha1_view_pb.ViewAuthRequest, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.ViewAuthResponse) => void): grpc.ClientUnaryCall;
    public viewAuth(request: penumbra_view_v1alpha1_view_pb.ViewAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.ViewAuthResponse) => void): grpc.ClientUnaryCall;
    public viewAuth(request: penumbra_view_v1alpha1_view_pb.ViewAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_view_v1alpha1_view_pb.ViewAuthResponse) => void): grpc.ClientUnaryCall;
}
