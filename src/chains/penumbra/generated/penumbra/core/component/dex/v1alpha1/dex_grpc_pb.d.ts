// package: penumbra.core.component.dex.v1alpha1
// file: penumbra/core/component/dex/v1alpha1/dex.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as penumbra_core_component_dex_v1alpha1_dex_pb from "../../../../../penumbra/core/component/dex/v1alpha1/dex_pb";
import * as penumbra_crypto_tct_v1alpha1_tct_pb from "../../../../../penumbra/crypto/tct/v1alpha1/tct_pb";
import * as penumbra_core_num_v1alpha1_num_pb from "../../../../../penumbra/core/num/v1alpha1/num_pb";
import * as penumbra_core_asset_v1alpha1_asset_pb from "../../../../../penumbra/core/asset/v1alpha1/asset_pb";
import * as penumbra_core_keys_v1alpha1_keys_pb from "../../../../../penumbra/core/keys/v1alpha1/keys_pb";
import * as penumbra_core_component_sct_v1alpha1_sct_pb from "../../../../../penumbra/core/component/sct/v1alpha1/sct_pb";
import * as penumbra_core_component_fee_v1alpha1_fee_pb from "../../../../../penumbra/core/component/fee/v1alpha1/fee_pb";
import * as penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb from "../../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb";

interface IQueryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    batchSwapOutputData: IQueryServiceService_IBatchSwapOutputData;
    swapExecution: IQueryServiceService_ISwapExecution;
    arbExecution: IQueryServiceService_IArbExecution;
    swapExecutions: IQueryServiceService_ISwapExecutions;
    arbExecutions: IQueryServiceService_IArbExecutions;
    liquidityPositions: IQueryServiceService_ILiquidityPositions;
    liquidityPositionById: IQueryServiceService_ILiquidityPositionById;
    liquidityPositionsById: IQueryServiceService_ILiquidityPositionsById;
    liquidityPositionsByPrice: IQueryServiceService_ILiquidityPositionsByPrice;
    spread: IQueryServiceService_ISpread;
}

interface IQueryServiceService_IBatchSwapOutputData extends grpc.MethodDefinition<penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataRequest, penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataResponse> {
    path: "/penumbra.core.component.dex.v1alpha1.QueryService/BatchSwapOutputData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataResponse>;
}
interface IQueryServiceService_ISwapExecution extends grpc.MethodDefinition<penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionRequest, penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionResponse> {
    path: "/penumbra.core.component.dex.v1alpha1.QueryService/SwapExecution";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionResponse>;
}
interface IQueryServiceService_IArbExecution extends grpc.MethodDefinition<penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionRequest, penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionResponse> {
    path: "/penumbra.core.component.dex.v1alpha1.QueryService/ArbExecution";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionResponse>;
}
interface IQueryServiceService_ISwapExecutions extends grpc.MethodDefinition<penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsRequest, penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsResponse> {
    path: "/penumbra.core.component.dex.v1alpha1.QueryService/SwapExecutions";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsResponse>;
}
interface IQueryServiceService_IArbExecutions extends grpc.MethodDefinition<penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsRequest, penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsResponse> {
    path: "/penumbra.core.component.dex.v1alpha1.QueryService/ArbExecutions";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsResponse>;
}
interface IQueryServiceService_ILiquidityPositions extends grpc.MethodDefinition<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsRequest, penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsResponse> {
    path: "/penumbra.core.component.dex.v1alpha1.QueryService/LiquidityPositions";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsResponse>;
}
interface IQueryServiceService_ILiquidityPositionById extends grpc.MethodDefinition<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdRequest, penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdResponse> {
    path: "/penumbra.core.component.dex.v1alpha1.QueryService/LiquidityPositionById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdResponse>;
}
interface IQueryServiceService_ILiquidityPositionsById extends grpc.MethodDefinition<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdRequest, penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdResponse> {
    path: "/penumbra.core.component.dex.v1alpha1.QueryService/LiquidityPositionsById";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdResponse>;
}
interface IQueryServiceService_ILiquidityPositionsByPrice extends grpc.MethodDefinition<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceRequest, penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceResponse> {
    path: "/penumbra.core.component.dex.v1alpha1.QueryService/LiquidityPositionsByPrice";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceResponse>;
}
interface IQueryServiceService_ISpread extends grpc.MethodDefinition<penumbra_core_component_dex_v1alpha1_dex_pb.SpreadRequest, penumbra_core_component_dex_v1alpha1_dex_pb.SpreadResponse> {
    path: "/penumbra.core.component.dex.v1alpha1.QueryService/Spread";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.SpreadRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.SpreadRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.SpreadResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.SpreadResponse>;
}

export const QueryServiceService: IQueryServiceService;

export interface IQueryServiceServer {
    batchSwapOutputData: grpc.handleUnaryCall<penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataRequest, penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataResponse>;
    swapExecution: grpc.handleUnaryCall<penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionRequest, penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionResponse>;
    arbExecution: grpc.handleUnaryCall<penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionRequest, penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionResponse>;
    swapExecutions: grpc.handleServerStreamingCall<penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsRequest, penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsResponse>;
    arbExecutions: grpc.handleServerStreamingCall<penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsRequest, penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsResponse>;
    liquidityPositions: grpc.handleServerStreamingCall<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsRequest, penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsResponse>;
    liquidityPositionById: grpc.handleUnaryCall<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdRequest, penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdResponse>;
    liquidityPositionsById: grpc.handleServerStreamingCall<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdRequest, penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdResponse>;
    liquidityPositionsByPrice: grpc.handleServerStreamingCall<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceRequest, penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceResponse>;
    spread: grpc.handleUnaryCall<penumbra_core_component_dex_v1alpha1_dex_pb.SpreadRequest, penumbra_core_component_dex_v1alpha1_dex_pb.SpreadResponse>;
}

export interface IQueryServiceClient {
    batchSwapOutputData(request: penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataResponse) => void): grpc.ClientUnaryCall;
    batchSwapOutputData(request: penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataResponse) => void): grpc.ClientUnaryCall;
    batchSwapOutputData(request: penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataResponse) => void): grpc.ClientUnaryCall;
    swapExecution(request: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionResponse) => void): grpc.ClientUnaryCall;
    swapExecution(request: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionResponse) => void): grpc.ClientUnaryCall;
    swapExecution(request: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionResponse) => void): grpc.ClientUnaryCall;
    arbExecution(request: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionResponse) => void): grpc.ClientUnaryCall;
    arbExecution(request: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionResponse) => void): grpc.ClientUnaryCall;
    arbExecution(request: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionResponse) => void): grpc.ClientUnaryCall;
    swapExecutions(request: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsResponse>;
    swapExecutions(request: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsResponse>;
    arbExecutions(request: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsResponse>;
    arbExecutions(request: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsResponse>;
    liquidityPositions(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsResponse>;
    liquidityPositions(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsResponse>;
    liquidityPositionById(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdResponse) => void): grpc.ClientUnaryCall;
    liquidityPositionById(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdResponse) => void): grpc.ClientUnaryCall;
    liquidityPositionById(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdResponse) => void): grpc.ClientUnaryCall;
    liquidityPositionsById(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdResponse>;
    liquidityPositionsById(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdResponse>;
    liquidityPositionsByPrice(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceResponse>;
    liquidityPositionsByPrice(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceResponse>;
    spread(request: penumbra_core_component_dex_v1alpha1_dex_pb.SpreadRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SpreadResponse) => void): grpc.ClientUnaryCall;
    spread(request: penumbra_core_component_dex_v1alpha1_dex_pb.SpreadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SpreadResponse) => void): grpc.ClientUnaryCall;
    spread(request: penumbra_core_component_dex_v1alpha1_dex_pb.SpreadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SpreadResponse) => void): grpc.ClientUnaryCall;
}

export class QueryServiceClient extends grpc.Client implements IQueryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public batchSwapOutputData(request: penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataResponse) => void): grpc.ClientUnaryCall;
    public batchSwapOutputData(request: penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataResponse) => void): grpc.ClientUnaryCall;
    public batchSwapOutputData(request: penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputDataResponse) => void): grpc.ClientUnaryCall;
    public swapExecution(request: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionResponse) => void): grpc.ClientUnaryCall;
    public swapExecution(request: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionResponse) => void): grpc.ClientUnaryCall;
    public swapExecution(request: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionResponse) => void): grpc.ClientUnaryCall;
    public arbExecution(request: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionResponse) => void): grpc.ClientUnaryCall;
    public arbExecution(request: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionResponse) => void): grpc.ClientUnaryCall;
    public arbExecution(request: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionResponse) => void): grpc.ClientUnaryCall;
    public swapExecutions(request: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsResponse>;
    public swapExecutions(request: penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.SwapExecutionsResponse>;
    public arbExecutions(request: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsResponse>;
    public arbExecutions(request: penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.ArbExecutionsResponse>;
    public liquidityPositions(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsResponse>;
    public liquidityPositions(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsResponse>;
    public liquidityPositionById(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdResponse) => void): grpc.ClientUnaryCall;
    public liquidityPositionById(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdResponse) => void): grpc.ClientUnaryCall;
    public liquidityPositionById(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionByIdResponse) => void): grpc.ClientUnaryCall;
    public liquidityPositionsById(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdResponse>;
    public liquidityPositionsById(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByIdResponse>;
    public liquidityPositionsByPrice(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceResponse>;
    public liquidityPositionsByPrice(request: penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_dex_v1alpha1_dex_pb.LiquidityPositionsByPriceResponse>;
    public spread(request: penumbra_core_component_dex_v1alpha1_dex_pb.SpreadRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SpreadResponse) => void): grpc.ClientUnaryCall;
    public spread(request: penumbra_core_component_dex_v1alpha1_dex_pb.SpreadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SpreadResponse) => void): grpc.ClientUnaryCall;
    public spread(request: penumbra_core_component_dex_v1alpha1_dex_pb.SpreadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SpreadResponse) => void): grpc.ClientUnaryCall;
}

interface ISimulationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    simulateTrade: ISimulationServiceService_ISimulateTrade;
}

interface ISimulationServiceService_ISimulateTrade extends grpc.MethodDefinition<penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeRequest, penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeResponse> {
    path: "/penumbra.core.component.dex.v1alpha1.SimulationService/SimulateTrade";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeResponse>;
}

export const SimulationServiceService: ISimulationServiceService;

export interface ISimulationServiceServer {
    simulateTrade: grpc.handleUnaryCall<penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeRequest, penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeResponse>;
}

export interface ISimulationServiceClient {
    simulateTrade(request: penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeResponse) => void): grpc.ClientUnaryCall;
    simulateTrade(request: penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeResponse) => void): grpc.ClientUnaryCall;
    simulateTrade(request: penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeResponse) => void): grpc.ClientUnaryCall;
}

export class SimulationServiceClient extends grpc.Client implements ISimulationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public simulateTrade(request: penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeResponse) => void): grpc.ClientUnaryCall;
    public simulateTrade(request: penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeResponse) => void): grpc.ClientUnaryCall;
    public simulateTrade(request: penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_dex_v1alpha1_dex_pb.SimulateTradeResponse) => void): grpc.ClientUnaryCall;
}
