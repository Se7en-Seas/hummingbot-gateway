// package: penumbra.crypto.decaf377_fmd.v1alpha1
// file: penumbra/crypto/decaf377_fmd/v1alpha1/decaf377_fmd.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Clue extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): Clue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Clue.AsObject;
    static toObject(includeInstance: boolean, msg: Clue): Clue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Clue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Clue;
    static deserializeBinaryFromReader(message: Clue, reader: jspb.BinaryReader): Clue;
}

export namespace Clue {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}
