// package: penumbra.tools.summoning.v1alpha1
// file: penumbra/tools/summoning/v1alpha1/summoning.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as penumbra_tools_summoning_v1alpha1_summoning_pb from "../../../../penumbra/tools/summoning/v1alpha1/summoning_pb";
import * as penumbra_core_keys_v1alpha1_keys_pb from "../../../../penumbra/core/keys/v1alpha1/keys_pb";
import * as penumbra_core_num_v1alpha1_num_pb from "../../../../penumbra/core/num/v1alpha1/num_pb";

interface ICeremonyCoordinatorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    participate: ICeremonyCoordinatorServiceService_IParticipate;
}

interface ICeremonyCoordinatorServiceService_IParticipate extends grpc.MethodDefinition<penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateRequest, penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateResponse> {
    path: "/penumbra.tools.summoning.v1alpha1.CeremonyCoordinatorService/Participate";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateRequest>;
    requestDeserialize: grpc.deserialize<penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateRequest>;
    responseSerialize: grpc.serialize<penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateResponse>;
    responseDeserialize: grpc.deserialize<penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateResponse>;
}

export const CeremonyCoordinatorServiceService: ICeremonyCoordinatorServiceService;

export interface ICeremonyCoordinatorServiceServer {
    participate: grpc.handleBidiStreamingCall<penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateRequest, penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateResponse>;
}

export interface ICeremonyCoordinatorServiceClient {
    participate(): grpc.ClientDuplexStream<penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateRequest, penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateResponse>;
    participate(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateRequest, penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateResponse>;
    participate(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateRequest, penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateResponse>;
}

export class CeremonyCoordinatorServiceClient extends grpc.Client implements ICeremonyCoordinatorServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public participate(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateRequest, penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateResponse>;
    public participate(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateRequest, penumbra_tools_summoning_v1alpha1_summoning_pb.ParticipateResponse>;
}
