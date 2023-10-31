// package: penumbra.custody.v1alpha1
// file: penumbra/custody/v1alpha1/custody.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as penumbra_custody_v1alpha1_custody_pb from "../../../penumbra/custody/v1alpha1/custody_pb";
import * as penumbra_core_keys_v1alpha1_keys_pb from "../../../penumbra/core/keys/v1alpha1/keys_pb";
import * as penumbra_core_transaction_v1alpha1_transaction_pb from "../../../penumbra/core/transaction/v1alpha1/transaction_pb";

interface ICustodyProtocolServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    authorize: ICustodyProtocolServiceService_IAuthorize;
}

interface ICustodyProtocolServiceService_IAuthorize extends grpc.MethodDefinition<penumbra_custody_v1alpha1_custody_pb.AuthorizeRequest, penumbra_custody_v1alpha1_custody_pb.AuthorizeResponse> {
    path: "/penumbra.custody.v1alpha1.CustodyProtocolService/Authorize";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_custody_v1alpha1_custody_pb.AuthorizeRequest>;
    requestDeserialize: grpc.deserialize<penumbra_custody_v1alpha1_custody_pb.AuthorizeRequest>;
    responseSerialize: grpc.serialize<penumbra_custody_v1alpha1_custody_pb.AuthorizeResponse>;
    responseDeserialize: grpc.deserialize<penumbra_custody_v1alpha1_custody_pb.AuthorizeResponse>;
}

export const CustodyProtocolServiceService: ICustodyProtocolServiceService;

export interface ICustodyProtocolServiceServer {
    authorize: grpc.handleUnaryCall<penumbra_custody_v1alpha1_custody_pb.AuthorizeRequest, penumbra_custody_v1alpha1_custody_pb.AuthorizeResponse>;
}

export interface ICustodyProtocolServiceClient {
    authorize(request: penumbra_custody_v1alpha1_custody_pb.AuthorizeRequest, callback: (error: grpc.ServiceError | null, response: penumbra_custody_v1alpha1_custody_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
    authorize(request: penumbra_custody_v1alpha1_custody_pb.AuthorizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_custody_v1alpha1_custody_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
    authorize(request: penumbra_custody_v1alpha1_custody_pb.AuthorizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_custody_v1alpha1_custody_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
}

export class CustodyProtocolServiceClient extends grpc.Client implements ICustodyProtocolServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public authorize(request: penumbra_custody_v1alpha1_custody_pb.AuthorizeRequest, callback: (error: grpc.ServiceError | null, response: penumbra_custody_v1alpha1_custody_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
    public authorize(request: penumbra_custody_v1alpha1_custody_pb.AuthorizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_custody_v1alpha1_custody_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
    public authorize(request: penumbra_custody_v1alpha1_custody_pb.AuthorizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_custody_v1alpha1_custody_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
}
