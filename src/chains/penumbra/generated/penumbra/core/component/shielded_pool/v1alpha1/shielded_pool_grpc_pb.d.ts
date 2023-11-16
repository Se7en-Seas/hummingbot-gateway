// package: penumbra.core.component.shielded_pool.v1alpha1
// file: penumbra/core/component/shielded_pool/v1alpha1/shielded_pool.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb from "../../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb";
import * as penumbra_crypto_tct_v1alpha1_tct_pb from "../../../../../penumbra/crypto/tct/v1alpha1/tct_pb";
import * as penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb from "../../../../../penumbra/crypto/decaf377_rdsa/v1alpha1/decaf377_rdsa_pb";
import * as penumbra_core_asset_v1alpha1_asset_pb from "../../../../../penumbra/core/asset/v1alpha1/asset_pb";
import * as penumbra_core_keys_v1alpha1_keys_pb from "../../../../../penumbra/core/keys/v1alpha1/keys_pb";
import * as penumbra_core_num_v1alpha1_num_pb from "../../../../../penumbra/core/num/v1alpha1/num_pb";

interface IQueryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    denomMetadataById: IQueryServiceService_IDenomMetadataById;
}

interface IQueryServiceService_IDenomMetadataById extends grpc.MethodDefinition<penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdRequest, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdResponse> {
    path: "/penumbra.core.component.shielded_pool.v1alpha1.QueryService/DenomMetadataById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdResponse>;
}

export const QueryServiceService: IQueryServiceService;

export interface IQueryServiceServer {
    denomMetadataById: grpc.handleUnaryCall<penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdRequest, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdResponse>;
}

export interface IQueryServiceClient {
    denomMetadataById(request: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdResponse) => void): grpc.ClientUnaryCall;
    denomMetadataById(request: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdResponse) => void): grpc.ClientUnaryCall;
    denomMetadataById(request: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdResponse) => void): grpc.ClientUnaryCall;
}

export class QueryServiceClient extends grpc.Client implements IQueryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public denomMetadataById(request: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdResponse) => void): grpc.ClientUnaryCall;
    public denomMetadataById(request: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdResponse) => void): grpc.ClientUnaryCall;
    public denomMetadataById(request: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.DenomMetadataByIdResponse) => void): grpc.ClientUnaryCall;
}
