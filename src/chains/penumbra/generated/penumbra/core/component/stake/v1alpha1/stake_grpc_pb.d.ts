// package: penumbra.core.component.stake.v1alpha1
// file: penumbra/core/component/stake/v1alpha1/stake.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as penumbra_core_component_stake_v1alpha1_stake_pb from "../../../../../penumbra/core/component/stake/v1alpha1/stake_pb";
import * as penumbra_core_keys_v1alpha1_keys_pb from "../../../../../penumbra/core/keys/v1alpha1/keys_pb";
import * as penumbra_core_num_v1alpha1_num_pb from "../../../../../penumbra/core/num/v1alpha1/num_pb";
import * as penumbra_core_asset_v1alpha1_asset_pb from "../../../../../penumbra/core/asset/v1alpha1/asset_pb";

interface IQueryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    validatorInfo: IQueryServiceService_IValidatorInfo;
    validatorStatus: IQueryServiceService_IValidatorStatus;
    validatorPenalty: IQueryServiceService_IValidatorPenalty;
    currentValidatorRate: IQueryServiceService_ICurrentValidatorRate;
    nextValidatorRate: IQueryServiceService_INextValidatorRate;
}

interface IQueryServiceService_IValidatorInfo extends grpc.MethodDefinition<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoRequest, penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoResponse> {
    path: "/penumbra.core.component.stake.v1alpha1.QueryService/ValidatorInfo";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoResponse>;
}
interface IQueryServiceService_IValidatorStatus extends grpc.MethodDefinition<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusRequest, penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusResponse> {
    path: "/penumbra.core.component.stake.v1alpha1.QueryService/ValidatorStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusResponse>;
}
interface IQueryServiceService_IValidatorPenalty extends grpc.MethodDefinition<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyRequest, penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyResponse> {
    path: "/penumbra.core.component.stake.v1alpha1.QueryService/ValidatorPenalty";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyResponse>;
}
interface IQueryServiceService_ICurrentValidatorRate extends grpc.MethodDefinition<penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateRequest, penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateResponse> {
    path: "/penumbra.core.component.stake.v1alpha1.QueryService/CurrentValidatorRate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateResponse>;
}
interface IQueryServiceService_INextValidatorRate extends grpc.MethodDefinition<penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateRequest, penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateResponse> {
    path: "/penumbra.core.component.stake.v1alpha1.QueryService/NextValidatorRate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateRequest>;
    requestDeserialize: grpc.deserialize<penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateRequest>;
    responseSerialize: grpc.serialize<penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateResponse>;
    responseDeserialize: grpc.deserialize<penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateResponse>;
}

export const QueryServiceService: IQueryServiceService;

export interface IQueryServiceServer {
    validatorInfo: grpc.handleServerStreamingCall<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoRequest, penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoResponse>;
    validatorStatus: grpc.handleUnaryCall<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusRequest, penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusResponse>;
    validatorPenalty: grpc.handleUnaryCall<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyRequest, penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyResponse>;
    currentValidatorRate: grpc.handleUnaryCall<penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateRequest, penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateResponse>;
    nextValidatorRate: grpc.handleUnaryCall<penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateRequest, penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateResponse>;
}

export interface IQueryServiceClient {
    validatorInfo(request: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoResponse>;
    validatorInfo(request: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoResponse>;
    validatorStatus(request: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusResponse) => void): grpc.ClientUnaryCall;
    validatorStatus(request: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusResponse) => void): grpc.ClientUnaryCall;
    validatorStatus(request: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusResponse) => void): grpc.ClientUnaryCall;
    validatorPenalty(request: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyResponse) => void): grpc.ClientUnaryCall;
    validatorPenalty(request: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyResponse) => void): grpc.ClientUnaryCall;
    validatorPenalty(request: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyResponse) => void): grpc.ClientUnaryCall;
    currentValidatorRate(request: penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateResponse) => void): grpc.ClientUnaryCall;
    currentValidatorRate(request: penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateResponse) => void): grpc.ClientUnaryCall;
    currentValidatorRate(request: penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateResponse) => void): grpc.ClientUnaryCall;
    nextValidatorRate(request: penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateResponse) => void): grpc.ClientUnaryCall;
    nextValidatorRate(request: penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateResponse) => void): grpc.ClientUnaryCall;
    nextValidatorRate(request: penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateResponse) => void): grpc.ClientUnaryCall;
}

export class QueryServiceClient extends grpc.Client implements IQueryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public validatorInfo(request: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoResponse>;
    public validatorInfo(request: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorInfoResponse>;
    public validatorStatus(request: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusResponse) => void): grpc.ClientUnaryCall;
    public validatorStatus(request: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusResponse) => void): grpc.ClientUnaryCall;
    public validatorStatus(request: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorStatusResponse) => void): grpc.ClientUnaryCall;
    public validatorPenalty(request: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyResponse) => void): grpc.ClientUnaryCall;
    public validatorPenalty(request: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyResponse) => void): grpc.ClientUnaryCall;
    public validatorPenalty(request: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorPenaltyResponse) => void): grpc.ClientUnaryCall;
    public currentValidatorRate(request: penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateResponse) => void): grpc.ClientUnaryCall;
    public currentValidatorRate(request: penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateResponse) => void): grpc.ClientUnaryCall;
    public currentValidatorRate(request: penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.CurrentValidatorRateResponse) => void): grpc.ClientUnaryCall;
    public nextValidatorRate(request: penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateRequest, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateResponse) => void): grpc.ClientUnaryCall;
    public nextValidatorRate(request: penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateResponse) => void): grpc.ClientUnaryCall;
    public nextValidatorRate(request: penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: penumbra_core_component_stake_v1alpha1_stake_pb.NextValidatorRateResponse) => void): grpc.ClientUnaryCall;
}
