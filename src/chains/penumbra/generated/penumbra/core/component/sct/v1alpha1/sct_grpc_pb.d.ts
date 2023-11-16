// package: penumbra.core.component.sct.v1alpha1
// file: penumbra/core/component/sct/v1alpha1/sct.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as penumbra_core_component_sct_v1alpha1_sct_pb from "../../../../../penumbra/core/component/sct/v1alpha1/sct_pb";
import * as penumbra_crypto_tct_v1alpha1_tct_pb from "../../../../../penumbra/crypto/tct/v1alpha1/tct_pb";
import * as penumbra_core_component_chain_v1alpha1_chain_pb from "../../../../../penumbra/core/component/chain/v1alpha1/chain_pb";

interface IQueryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    transactionByNote: IQueryServiceService_ITransactionByNote;
}

interface IQueryServiceService_ITransactionByNote extends grpc.MethodDefinition<penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteRequest, penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteResponse> {
    path: "/penumbra.core.component.sct.v1alpha1.QueryService/TransactionByNote";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteResponse>;
}

export const QueryServiceService: IQueryServiceService;

export interface IQueryServiceServer {
    transactionByNote: grpc.handleUnaryCall<penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteRequest, penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteResponse>;
}

export interface IQueryServiceClient {
    transactionByNote(request: penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteResponse) => void): grpc.ClientUnaryCall;
    transactionByNote(request: penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteResponse) => void): grpc.ClientUnaryCall;
    transactionByNote(request: penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteResponse) => void): grpc.ClientUnaryCall;
}

export class QueryServiceClient extends grpc.Client implements IQueryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public transactionByNote(request: penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteResponse) => void): grpc.ClientUnaryCall;
    public transactionByNote(request: penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteResponse) => void): grpc.ClientUnaryCall;
    public transactionByNote(request: penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_sct_v1alpha1_sct_pb.TransactionByNoteResponse) => void): grpc.ClientUnaryCall;
}
