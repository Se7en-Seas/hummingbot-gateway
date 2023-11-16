// package: penumbra.core.component.governance.v1alpha1
// file: penumbra/core/component/governance/v1alpha1/governance.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as penumbra_core_component_governance_v1alpha1_governance_pb from "../../../../../penumbra/core/component/governance/v1alpha1/governance_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb from "../../../../../penumbra/crypto/decaf377_rdsa/v1alpha1/decaf377_rdsa_pb";
import * as penumbra_core_num_v1alpha1_num_pb from "../../../../../penumbra/core/num/v1alpha1/num_pb";
import * as penumbra_core_asset_v1alpha1_asset_pb from "../../../../../penumbra/core/asset/v1alpha1/asset_pb";
import * as penumbra_core_keys_v1alpha1_keys_pb from "../../../../../penumbra/core/keys/v1alpha1/keys_pb";
import * as penumbra_core_component_chain_v1alpha1_chain_pb from "../../../../../penumbra/core/component/chain/v1alpha1/chain_pb";
import * as penumbra_core_component_fee_v1alpha1_fee_pb from "../../../../../penumbra/core/component/fee/v1alpha1/fee_pb";
import * as penumbra_core_component_dao_v1alpha1_dao_pb from "../../../../../penumbra/core/component/dao/v1alpha1/dao_pb";
import * as penumbra_core_component_ibc_v1alpha1_ibc_pb from "../../../../../penumbra/core/component/ibc/v1alpha1/ibc_pb";
import * as penumbra_core_component_stake_v1alpha1_stake_pb from "../../../../../penumbra/core/component/stake/v1alpha1/stake_pb";
import * as penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb from "../../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb";

interface IQueryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    proposalInfo: IQueryServiceService_IProposalInfo;
    proposalRateData: IQueryServiceService_IProposalRateData;
}

interface IQueryServiceService_IProposalInfo extends grpc.MethodDefinition<penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoRequest, penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoResponse> {
    path: "/penumbra.core.component.governance.v1alpha1.QueryService/ProposalInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoResponse>;
}
interface IQueryServiceService_IProposalRateData extends grpc.MethodDefinition<penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataRequest, penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataResponse> {
    path: "/penumbra.core.component.governance.v1alpha1.QueryService/ProposalRateData";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataResponse>;
}

export const QueryServiceService: IQueryServiceService;

export interface IQueryServiceServer {
    proposalInfo: grpc.handleUnaryCall<penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoRequest, penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoResponse>;
    proposalRateData: grpc.handleServerStreamingCall<penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataRequest, penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataResponse>;
}

export interface IQueryServiceClient {
    proposalInfo(request: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoResponse) => void): grpc.ClientUnaryCall;
    proposalInfo(request: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoResponse) => void): grpc.ClientUnaryCall;
    proposalInfo(request: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoResponse) => void): grpc.ClientUnaryCall;
    proposalRateData(request: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataResponse>;
    proposalRateData(request: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataResponse>;
}

export class QueryServiceClient extends grpc.Client implements IQueryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public proposalInfo(request: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoResponse) => void): grpc.ClientUnaryCall;
    public proposalInfo(request: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoResponse) => void): grpc.ClientUnaryCall;
    public proposalInfo(request: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalInfoResponse) => void): grpc.ClientUnaryCall;
    public proposalRateData(request: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataResponse>;
    public proposalRateData(request: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_governance_v1alpha1_governance_pb.ProposalRateDataResponse>;
}
