// package: penumbra.crypto.decaf377_rdsa.v1alpha1
// file: penumbra/crypto/decaf377_rdsa/v1alpha1/decaf377_rdsa.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SpendAuthSignature extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): SpendAuthSignature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpendAuthSignature.AsObject;
    static toObject(includeInstance: boolean, msg: SpendAuthSignature): SpendAuthSignature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpendAuthSignature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpendAuthSignature;
    static deserializeBinaryFromReader(message: SpendAuthSignature, reader: jspb.BinaryReader): SpendAuthSignature;
}

export namespace SpendAuthSignature {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class BindingSignature extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): BindingSignature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BindingSignature.AsObject;
    static toObject(includeInstance: boolean, msg: BindingSignature): BindingSignature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BindingSignature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BindingSignature;
    static deserializeBinaryFromReader(message: BindingSignature, reader: jspb.BinaryReader): BindingSignature;
}

export namespace BindingSignature {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}
