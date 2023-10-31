// package: penumbra.core.num.v1alpha1
// file: penumbra/core/num/v1alpha1/num.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Amount extends jspb.Message { 
    getLo(): number;
    setLo(value: number): Amount;
    getHi(): number;
    setHi(value: number): Amount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Amount.AsObject;
    static toObject(includeInstance: boolean, msg: Amount): Amount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Amount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Amount;
    static deserializeBinaryFromReader(message: Amount, reader: jspb.BinaryReader): Amount;
}

export namespace Amount {
    export type AsObject = {
        lo: number,
        hi: number,
    }
}
