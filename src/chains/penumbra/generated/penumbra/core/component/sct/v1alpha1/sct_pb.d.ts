// package: penumbra.core.component.sct.v1alpha1
// file: penumbra/core/component/sct/v1alpha1/sct.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as penumbra_crypto_tct_v1alpha1_tct_pb from "../../../../../penumbra/crypto/tct/v1alpha1/tct_pb";
import * as penumbra_core_component_chain_v1alpha1_chain_pb from "../../../../../penumbra/core/component/chain/v1alpha1/chain_pb";

export class Nullifier extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): Nullifier;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Nullifier.AsObject;
    static toObject(includeInstance: boolean, msg: Nullifier): Nullifier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Nullifier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Nullifier;
    static deserializeBinaryFromReader(message: Nullifier, reader: jspb.BinaryReader): Nullifier;
}

export namespace Nullifier {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class TransactionByNoteRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): TransactionByNoteRequest;

    hasNoteCommitment(): boolean;
    clearNoteCommitment(): void;
    getNoteCommitment(): penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment | undefined;
    setNoteCommitment(value?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment): TransactionByNoteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionByNoteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionByNoteRequest): TransactionByNoteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionByNoteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionByNoteRequest;
    static deserializeBinaryFromReader(message: TransactionByNoteRequest, reader: jspb.BinaryReader): TransactionByNoteRequest;
}

export namespace TransactionByNoteRequest {
    export type AsObject = {
        chainId: string,
        noteCommitment?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.AsObject,
    }
}

export class TransactionByNoteResponse extends jspb.Message { 

    hasNoteSource(): boolean;
    clearNoteSource(): void;
    getNoteSource(): penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource | undefined;
    setNoteSource(value?: penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource): TransactionByNoteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionByNoteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionByNoteResponse): TransactionByNoteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionByNoteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionByNoteResponse;
    static deserializeBinaryFromReader(message: TransactionByNoteResponse, reader: jspb.BinaryReader): TransactionByNoteResponse;
}

export namespace TransactionByNoteResponse {
    export type AsObject = {
        noteSource?: penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource.AsObject,
    }
}
