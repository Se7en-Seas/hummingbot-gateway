// package: penumbra.crypto.tct.v1alpha1
// file: penumbra/crypto/tct/v1alpha1/tct.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class StateCommitment extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): StateCommitment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StateCommitment.AsObject;
    static toObject(includeInstance: boolean, msg: StateCommitment): StateCommitment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StateCommitment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StateCommitment;
    static deserializeBinaryFromReader(message: StateCommitment, reader: jspb.BinaryReader): StateCommitment;
}

export namespace StateCommitment {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class MerkleRoot extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): MerkleRoot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MerkleRoot.AsObject;
    static toObject(includeInstance: boolean, msg: MerkleRoot): MerkleRoot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MerkleRoot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MerkleRoot;
    static deserializeBinaryFromReader(message: MerkleRoot, reader: jspb.BinaryReader): MerkleRoot;
}

export namespace MerkleRoot {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class StateCommitmentProof extends jspb.Message { 

    hasNoteCommitment(): boolean;
    clearNoteCommitment(): void;
    getNoteCommitment(): StateCommitment | undefined;
    setNoteCommitment(value?: StateCommitment): StateCommitmentProof;
    getPosition(): number;
    setPosition(value: number): StateCommitmentProof;
    clearAuthPathList(): void;
    getAuthPathList(): Array<MerklePathChunk>;
    setAuthPathList(value: Array<MerklePathChunk>): StateCommitmentProof;
    addAuthPath(value?: MerklePathChunk, index?: number): MerklePathChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StateCommitmentProof.AsObject;
    static toObject(includeInstance: boolean, msg: StateCommitmentProof): StateCommitmentProof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StateCommitmentProof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StateCommitmentProof;
    static deserializeBinaryFromReader(message: StateCommitmentProof, reader: jspb.BinaryReader): StateCommitmentProof;
}

export namespace StateCommitmentProof {
    export type AsObject = {
        noteCommitment?: StateCommitment.AsObject,
        position: number,
        authPathList: Array<MerklePathChunk.AsObject>,
    }
}

export class MerklePathChunk extends jspb.Message { 
    getSibling1(): Uint8Array | string;
    getSibling1_asU8(): Uint8Array;
    getSibling1_asB64(): string;
    setSibling1(value: Uint8Array | string): MerklePathChunk;
    getSibling2(): Uint8Array | string;
    getSibling2_asU8(): Uint8Array;
    getSibling2_asB64(): string;
    setSibling2(value: Uint8Array | string): MerklePathChunk;
    getSibling3(): Uint8Array | string;
    getSibling3_asU8(): Uint8Array;
    getSibling3_asB64(): string;
    setSibling3(value: Uint8Array | string): MerklePathChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MerklePathChunk.AsObject;
    static toObject(includeInstance: boolean, msg: MerklePathChunk): MerklePathChunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MerklePathChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MerklePathChunk;
    static deserializeBinaryFromReader(message: MerklePathChunk, reader: jspb.BinaryReader): MerklePathChunk;
}

export namespace MerklePathChunk {
    export type AsObject = {
        sibling1: Uint8Array | string,
        sibling2: Uint8Array | string,
        sibling3: Uint8Array | string,
    }
}
