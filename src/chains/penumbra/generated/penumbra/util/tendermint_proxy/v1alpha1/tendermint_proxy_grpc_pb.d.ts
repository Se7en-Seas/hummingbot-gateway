// package: penumbra.util.tendermint_proxy.v1alpha1
// file: penumbra/util/tendermint_proxy/v1alpha1/tendermint_proxy.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb from "../../../../penumbra/util/tendermint_proxy/v1alpha1/tendermint_proxy_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as tendermint_crypto_proof_pb from "../../../../tendermint/crypto/proof_pb";
import * as tendermint_p2p_types_pb from "../../../../tendermint/p2p/types_pb";
import * as tendermint_types_block_pb from "../../../../tendermint/types/block_pb";
import * as tendermint_types_types_pb from "../../../../tendermint/types/types_pb";
import * as tendermint_types_validator_pb from "../../../../tendermint/types/validator_pb";

interface ITendermintProxyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getStatus: ITendermintProxyServiceService_IGetStatus;
    broadcastTxAsync: ITendermintProxyServiceService_IBroadcastTxAsync;
    broadcastTxSync: ITendermintProxyServiceService_IBroadcastTxSync;
    getTx: ITendermintProxyServiceService_IGetTx;
    aBCIQuery: ITendermintProxyServiceService_IABCIQuery;
    getBlockByHeight: ITendermintProxyServiceService_IGetBlockByHeight;
}

interface ITendermintProxyServiceService_IGetStatus extends grpc.MethodDefinition<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusRequest, penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusResponse> {
    path: "/penumbra.util.tendermint_proxy.v1alpha1.TendermintProxyService/GetStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusRequest>;
    requestDeserialize: grpc.deserialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusRequest>;
    responseSerialize: grpc.serialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusResponse>;
    responseDeserialize: grpc.deserialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusResponse>;
}
interface ITendermintProxyServiceService_IBroadcastTxAsync extends grpc.MethodDefinition<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncRequest, penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncResponse> {
    path: "/penumbra.util.tendermint_proxy.v1alpha1.TendermintProxyService/BroadcastTxAsync";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncRequest>;
    requestDeserialize: grpc.deserialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncRequest>;
    responseSerialize: grpc.serialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncResponse>;
    responseDeserialize: grpc.deserialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncResponse>;
}
interface ITendermintProxyServiceService_IBroadcastTxSync extends grpc.MethodDefinition<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncRequest, penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncResponse> {
    path: "/penumbra.util.tendermint_proxy.v1alpha1.TendermintProxyService/BroadcastTxSync";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncRequest>;
    requestDeserialize: grpc.deserialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncRequest>;
    responseSerialize: grpc.serialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncResponse>;
    responseDeserialize: grpc.deserialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncResponse>;
}
interface ITendermintProxyServiceService_IGetTx extends grpc.MethodDefinition<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxRequest, penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxResponse> {
    path: "/penumbra.util.tendermint_proxy.v1alpha1.TendermintProxyService/GetTx";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxRequest>;
    requestDeserialize: grpc.deserialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxRequest>;
    responseSerialize: grpc.serialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxResponse>;
    responseDeserialize: grpc.deserialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxResponse>;
}
interface ITendermintProxyServiceService_IABCIQuery extends grpc.MethodDefinition<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryRequest, penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryResponse> {
    path: "/penumbra.util.tendermint_proxy.v1alpha1.TendermintProxyService/ABCIQuery";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryRequest>;
    requestDeserialize: grpc.deserialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryRequest>;
    responseSerialize: grpc.serialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryResponse>;
    responseDeserialize: grpc.deserialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryResponse>;
}
interface ITendermintProxyServiceService_IGetBlockByHeight extends grpc.MethodDefinition<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightRequest, penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightResponse> {
    path: "/penumbra.util.tendermint_proxy.v1alpha1.TendermintProxyService/GetBlockByHeight";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightRequest>;
    requestDeserialize: grpc.deserialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightRequest>;
    responseSerialize: grpc.serialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightResponse>;
    responseDeserialize: grpc.deserialize<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightResponse>;
}

export const TendermintProxyServiceService: ITendermintProxyServiceService;

export interface ITendermintProxyServiceServer {
    getStatus: grpc.handleUnaryCall<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusRequest, penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusResponse>;
    broadcastTxAsync: grpc.handleUnaryCall<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncRequest, penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncResponse>;
    broadcastTxSync: grpc.handleUnaryCall<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncRequest, penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncResponse>;
    getTx: grpc.handleUnaryCall<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxRequest, penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxResponse>;
    aBCIQuery: grpc.handleUnaryCall<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryRequest, penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryResponse>;
    getBlockByHeight: grpc.handleUnaryCall<penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightRequest, penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightResponse>;
}

export interface ITendermintProxyServiceClient {
    getStatus(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusRequest, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    getStatus(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    getStatus(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    broadcastTxAsync(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncRequest, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncResponse) => void): grpc.ClientUnaryCall;
    broadcastTxAsync(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncResponse) => void): grpc.ClientUnaryCall;
    broadcastTxAsync(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncResponse) => void): grpc.ClientUnaryCall;
    broadcastTxSync(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncRequest, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncResponse) => void): grpc.ClientUnaryCall;
    broadcastTxSync(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncResponse) => void): grpc.ClientUnaryCall;
    broadcastTxSync(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncResponse) => void): grpc.ClientUnaryCall;
    getTx(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxRequest, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    getTx(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    getTx(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    aBCIQuery(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryRequest, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryResponse) => void): grpc.ClientUnaryCall;
    aBCIQuery(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryResponse) => void): grpc.ClientUnaryCall;
    aBCIQuery(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryResponse) => void): grpc.ClientUnaryCall;
    getBlockByHeight(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightRequest, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightResponse) => void): grpc.ClientUnaryCall;
    getBlockByHeight(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightResponse) => void): grpc.ClientUnaryCall;
    getBlockByHeight(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightResponse) => void): grpc.ClientUnaryCall;
}

export class TendermintProxyServiceClient extends grpc.Client implements ITendermintProxyServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getStatus(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusRequest, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    public getStatus(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    public getStatus(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetStatusResponse) => void): grpc.ClientUnaryCall;
    public broadcastTxAsync(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncRequest, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncResponse) => void): grpc.ClientUnaryCall;
    public broadcastTxAsync(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncResponse) => void): grpc.ClientUnaryCall;
    public broadcastTxAsync(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxAsyncResponse) => void): grpc.ClientUnaryCall;
    public broadcastTxSync(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncRequest, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncResponse) => void): grpc.ClientUnaryCall;
    public broadcastTxSync(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncResponse) => void): grpc.ClientUnaryCall;
    public broadcastTxSync(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.BroadcastTxSyncResponse) => void): grpc.ClientUnaryCall;
    public getTx(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxRequest, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    public getTx(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    public getTx(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    public aBCIQuery(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryRequest, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryResponse) => void): grpc.ClientUnaryCall;
    public aBCIQuery(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryResponse) => void): grpc.ClientUnaryCall;
    public aBCIQuery(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.ABCIQueryResponse) => void): grpc.ClientUnaryCall;
    public getBlockByHeight(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightRequest, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightResponse) => void): grpc.ClientUnaryCall;
    public getBlockByHeight(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightResponse) => void): grpc.ClientUnaryCall;
    public getBlockByHeight(request: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_util_tendermint_proxy_v1alpha1_tendermint_proxy_pb.GetBlockByHeightResponse) => void): grpc.ClientUnaryCall;
}
