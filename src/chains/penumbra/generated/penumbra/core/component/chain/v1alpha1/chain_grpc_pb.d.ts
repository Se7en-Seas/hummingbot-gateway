// package: penumbra.core.component.chain.v1alpha1
// file: penumbra/core/component/chain/v1alpha1/chain.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as penumbra_core_component_chain_v1alpha1_chain_pb from "../../../../../penumbra/core/component/chain/v1alpha1/chain_pb";
import * as penumbra_core_asset_v1alpha1_asset_pb from "../../../../../penumbra/core/asset/v1alpha1/asset_pb";

interface IQueryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    epochByHeight: IQueryServiceService_IEpochByHeight;
}

interface IQueryServiceService_IEpochByHeight extends grpc.MethodDefinition<penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightRequest, penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightResponse> {
    path: "/penumbra.core.component.chain.v1alpha1.QueryService/EpochByHeight";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightResponse>;
}

export const QueryServiceService: IQueryServiceService;

export interface IQueryServiceServer {
    epochByHeight: grpc.handleUnaryCall<penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightRequest, penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightResponse>;
}

export interface IQueryServiceClient {
    epochByHeight(request: penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightResponse) => void): grpc.ClientUnaryCall;
    epochByHeight(request: penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightResponse) => void): grpc.ClientUnaryCall;
    epochByHeight(request: penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightResponse) => void): grpc.ClientUnaryCall;
}

export class QueryServiceClient extends grpc.Client implements IQueryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public epochByHeight(request: penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightResponse) => void): grpc.ClientUnaryCall;
    public epochByHeight(request: penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightResponse) => void): grpc.ClientUnaryCall;
    public epochByHeight(request: penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_chain_v1alpha1_chain_pb.EpochByHeightResponse) => void): grpc.ClientUnaryCall;
}
