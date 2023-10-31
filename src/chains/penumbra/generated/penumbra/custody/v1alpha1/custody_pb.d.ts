// package: penumbra.custody.v1alpha1
// file: penumbra/custody/v1alpha1/custody.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as penumbra_core_keys_v1alpha1_keys_pb from "../../../penumbra/core/keys/v1alpha1/keys_pb";
import * as penumbra_core_transaction_v1alpha1_transaction_pb from "../../../penumbra/core/transaction/v1alpha1/transaction_pb";

export class AuthorizeRequest extends jspb.Message { 

    hasPlan(): boolean;
    clearPlan(): void;
    getPlan(): penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan | undefined;
    setPlan(value?: penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan): AuthorizeRequest;

    hasWalletId(): boolean;
    clearWalletId(): void;
    getWalletId(): penumbra_core_keys_v1alpha1_keys_pb.WalletId | undefined;
    setWalletId(value?: penumbra_core_keys_v1alpha1_keys_pb.WalletId): AuthorizeRequest;
    clearPreAuthorizationsList(): void;
    getPreAuthorizationsList(): Array<PreAuthorization>;
    setPreAuthorizationsList(value: Array<PreAuthorization>): AuthorizeRequest;
    addPreAuthorizations(value?: PreAuthorization, index?: number): PreAuthorization;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizeRequest): AuthorizeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizeRequest;
    static deserializeBinaryFromReader(message: AuthorizeRequest, reader: jspb.BinaryReader): AuthorizeRequest;
}

export namespace AuthorizeRequest {
    export type AsObject = {
        plan?: penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan.AsObject,
        walletId?: penumbra_core_keys_v1alpha1_keys_pb.WalletId.AsObject,
        preAuthorizationsList: Array<PreAuthorization.AsObject>,
    }
}

export class AuthorizeResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData | undefined;
    setData(value?: penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData): AuthorizeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizeResponse): AuthorizeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizeResponse;
    static deserializeBinaryFromReader(message: AuthorizeResponse, reader: jspb.BinaryReader): AuthorizeResponse;
}

export namespace AuthorizeResponse {
    export type AsObject = {
        data?: penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData.AsObject,
    }
}

export class PreAuthorization extends jspb.Message { 

    hasEd25519(): boolean;
    clearEd25519(): void;
    getEd25519(): PreAuthorization.Ed25519 | undefined;
    setEd25519(value?: PreAuthorization.Ed25519): PreAuthorization;

    getPreAuthorizationCase(): PreAuthorization.PreAuthorizationCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreAuthorization.AsObject;
    static toObject(includeInstance: boolean, msg: PreAuthorization): PreAuthorization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreAuthorization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreAuthorization;
    static deserializeBinaryFromReader(message: PreAuthorization, reader: jspb.BinaryReader): PreAuthorization;
}

export namespace PreAuthorization {
    export type AsObject = {
        ed25519?: PreAuthorization.Ed25519.AsObject,
    }


    export class Ed25519 extends jspb.Message { 
        getVk(): Uint8Array | string;
        getVk_asU8(): Uint8Array;
        getVk_asB64(): string;
        setVk(value: Uint8Array | string): Ed25519;
        getSig(): Uint8Array | string;
        getSig_asU8(): Uint8Array;
        getSig_asB64(): string;
        setSig(value: Uint8Array | string): Ed25519;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Ed25519.AsObject;
        static toObject(includeInstance: boolean, msg: Ed25519): Ed25519.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Ed25519, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Ed25519;
        static deserializeBinaryFromReader(message: Ed25519, reader: jspb.BinaryReader): Ed25519;
    }

    export namespace Ed25519 {
        export type AsObject = {
            vk: Uint8Array | string,
            sig: Uint8Array | string,
        }
    }


    export enum PreAuthorizationCase {
        PRE_AUTHORIZATION_NOT_SET = 0,
        ED25519 = 1,
    }

}
