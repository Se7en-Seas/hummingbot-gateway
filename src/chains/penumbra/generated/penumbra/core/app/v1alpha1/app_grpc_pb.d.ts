// package: penumbra.core.app.v1alpha1
// file: penumbra/core/app/v1alpha1/app.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as penumbra_core_app_v1alpha1_app_pb from "../../../../penumbra/core/app/v1alpha1/app_pb";
import * as penumbra_core_component_chain_v1alpha1_chain_pb from "../../../../penumbra/core/component/chain/v1alpha1/chain_pb";
import * as penumbra_core_component_stake_v1alpha1_stake_pb from "../../../../penumbra/core/component/stake/v1alpha1/stake_pb";
import * as penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb from "../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb";
import * as penumbra_core_component_governance_v1alpha1_governance_pb from "../../../../penumbra/core/component/governance/v1alpha1/governance_pb";
import * as penumbra_core_component_ibc_v1alpha1_ibc_pb from "../../../../penumbra/core/component/ibc/v1alpha1/ibc_pb";
import * as penumbra_core_component_fee_v1alpha1_fee_pb from "../../../../penumbra/core/component/fee/v1alpha1/fee_pb";
import * as penumbra_core_component_dao_v1alpha1_dao_pb from "../../../../penumbra/core/component/dao/v1alpha1/dao_pb";
import * as ibc_core_commitment_v1_commitment_pb from "../../../../ibc/core/commitment/v1/commitment_pb";

interface IQueryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    appParameters: IQueryServiceService_IAppParameters;
    keyValue: IQueryServiceService_IKeyValue;
    prefixValue: IQueryServiceService_IPrefixValue;
}

interface IQueryServiceService_IAppParameters extends grpc.MethodDefinition<penumbra_core_app_v1alpha1_app_pb.AppParametersRequest, penumbra_core_app_v1alpha1_app_pb.AppParametersResponse> {
    path: "/penumbra.core.app.v1alpha1.QueryService/AppParameters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_core_app_v1alpha1_app_pb.AppParametersRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_app_v1alpha1_app_pb.AppParametersRequest>;
    responseSerialize: grpc.serialize<penumbra_core_app_v1alpha1_app_pb.AppParametersResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_app_v1alpha1_app_pb.AppParametersResponse>;
}
interface IQueryServiceService_IKeyValue extends grpc.MethodDefinition<penumbra_core_app_v1alpha1_app_pb.KeyValueRequest, penumbra_core_app_v1alpha1_app_pb.KeyValueResponse> {
    path: "/penumbra.core.app.v1alpha1.QueryService/KeyValue";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_core_app_v1alpha1_app_pb.KeyValueRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_app_v1alpha1_app_pb.KeyValueRequest>;
    responseSerialize: grpc.serialize<penumbra_core_app_v1alpha1_app_pb.KeyValueResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_app_v1alpha1_app_pb.KeyValueResponse>;
}
interface IQueryServiceService_IPrefixValue extends grpc.MethodDefinition<penumbra_core_app_v1alpha1_app_pb.PrefixValueRequest, penumbra_core_app_v1alpha1_app_pb.PrefixValueResponse> {
    path: "/penumbra.core.app.v1alpha1.QueryService/PrefixValue";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_core_app_v1alpha1_app_pb.PrefixValueRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_app_v1alpha1_app_pb.PrefixValueRequest>;
    responseSerialize: grpc.serialize<penumbra_core_app_v1alpha1_app_pb.PrefixValueResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_app_v1alpha1_app_pb.PrefixValueResponse>;
}

export const QueryServiceService: IQueryServiceService;

export interface IQueryServiceServer {
    appParameters: grpc.handleUnaryCall<penumbra_core_app_v1alpha1_app_pb.AppParametersRequest, penumbra_core_app_v1alpha1_app_pb.AppParametersResponse>;
    keyValue: grpc.handleUnaryCall<penumbra_core_app_v1alpha1_app_pb.KeyValueRequest, penumbra_core_app_v1alpha1_app_pb.KeyValueResponse>;
    prefixValue: grpc.handleServerStreamingCall<penumbra_core_app_v1alpha1_app_pb.PrefixValueRequest, penumbra_core_app_v1alpha1_app_pb.PrefixValueResponse>;
}

export interface IQueryServiceClient {
    appParameters(request: penumbra_core_app_v1alpha1_app_pb.AppParametersRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_app_v1alpha1_app_pb.AppParametersResponse) => void): grpc.ClientUnaryCall;
    appParameters(request: penumbra_core_app_v1alpha1_app_pb.AppParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_app_v1alpha1_app_pb.AppParametersResponse) => void): grpc.ClientUnaryCall;
    appParameters(request: penumbra_core_app_v1alpha1_app_pb.AppParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_app_v1alpha1_app_pb.AppParametersResponse) => void): grpc.ClientUnaryCall;
    keyValue(request: penumbra_core_app_v1alpha1_app_pb.KeyValueRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_app_v1alpha1_app_pb.KeyValueResponse) => void): grpc.ClientUnaryCall;
    keyValue(request: penumbra_core_app_v1alpha1_app_pb.KeyValueRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_app_v1alpha1_app_pb.KeyValueResponse) => void): grpc.ClientUnaryCall;
    keyValue(request: penumbra_core_app_v1alpha1_app_pb.KeyValueRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_app_v1alpha1_app_pb.KeyValueResponse) => void): grpc.ClientUnaryCall;
    prefixValue(request: penumbra_core_app_v1alpha1_app_pb.PrefixValueRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_app_v1alpha1_app_pb.PrefixValueResponse>;
    prefixValue(request: penumbra_core_app_v1alpha1_app_pb.PrefixValueRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_app_v1alpha1_app_pb.PrefixValueResponse>;
}

export class QueryServiceClient extends grpc.Client implements IQueryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public appParameters(request: penumbra_core_app_v1alpha1_app_pb.AppParametersRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_app_v1alpha1_app_pb.AppParametersResponse) => void): grpc.ClientUnaryCall;
    public appParameters(request: penumbra_core_app_v1alpha1_app_pb.AppParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_app_v1alpha1_app_pb.AppParametersResponse) => void): grpc.ClientUnaryCall;
    public appParameters(request: penumbra_core_app_v1alpha1_app_pb.AppParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_app_v1alpha1_app_pb.AppParametersResponse) => void): grpc.ClientUnaryCall;
    public keyValue(request: penumbra_core_app_v1alpha1_app_pb.KeyValueRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_app_v1alpha1_app_pb.KeyValueResponse) => void): grpc.ClientUnaryCall;
    public keyValue(request: penumbra_core_app_v1alpha1_app_pb.KeyValueRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_app_v1alpha1_app_pb.KeyValueResponse) => void): grpc.ClientUnaryCall;
    public keyValue(request: penumbra_core_app_v1alpha1_app_pb.KeyValueRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_app_v1alpha1_app_pb.KeyValueResponse) => void): grpc.ClientUnaryCall;
    public prefixValue(request: penumbra_core_app_v1alpha1_app_pb.PrefixValueRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_app_v1alpha1_app_pb.PrefixValueResponse>;
    public prefixValue(request: penumbra_core_app_v1alpha1_app_pb.PrefixValueRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_app_v1alpha1_app_pb.PrefixValueResponse>;
}
