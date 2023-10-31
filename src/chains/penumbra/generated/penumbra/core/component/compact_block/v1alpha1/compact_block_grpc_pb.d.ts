// package: penumbra.core.component.compact_block.v1alpha1
// file: penumbra/core/component/compact_block/v1alpha1/compact_block.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as penumbra_core_component_compact_block_v1alpha1_compact_block_pb from "../../../../../penumbra/core/component/compact_block/v1alpha1/compact_block_pb";
import * as penumbra_crypto_tct_v1alpha1_tct_pb from "../../../../../penumbra/crypto/tct/v1alpha1/tct_pb";
import * as penumbra_core_component_sct_v1alpha1_sct_pb from "../../../../../penumbra/core/component/sct/v1alpha1/sct_pb";
import * as penumbra_core_component_chain_v1alpha1_chain_pb from "../../../../../penumbra/core/component/chain/v1alpha1/chain_pb";
import * as penumbra_core_component_dex_v1alpha1_dex_pb from "../../../../../penumbra/core/component/dex/v1alpha1/dex_pb";
import * as penumbra_core_component_fee_v1alpha1_fee_pb from "../../../../../penumbra/core/component/fee/v1alpha1/fee_pb";
import * as penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb from "../../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb";

interface IQueryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    compactBlockRange: IQueryServiceService_ICompactBlockRange;
}

interface IQueryServiceService_ICompactBlockRange extends grpc.MethodDefinition<penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeRequest, penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeResponse> {
    path: "/penumbra.core.component.compact_block.v1alpha1.QueryService/CompactBlockRange";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeResponse>;
}

export const QueryServiceService: IQueryServiceService;

export interface IQueryServiceServer {
    compactBlockRange: grpc.handleServerStreamingCall<penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeRequest, penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeResponse>;
}

export interface IQueryServiceClient {
    compactBlockRange(request: penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeResponse>;
    compactBlockRange(request: penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeResponse>;
}

export class QueryServiceClient extends grpc.Client implements IQueryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public compactBlockRange(request: penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeResponse>;
    public compactBlockRange(request: penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_compact_block_v1alpha1_compact_block_pb.CompactBlockRangeResponse>;
}
