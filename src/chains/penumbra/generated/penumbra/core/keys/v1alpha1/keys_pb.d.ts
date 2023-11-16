// package: penumbra.core.keys.v1alpha1
// file: penumbra/core/keys/v1alpha1/keys.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Address extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): Address;
    getAltBech32m(): string;
    setAltBech32m(value: string): Address;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Address.AsObject;
    static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Address;
    static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
    export type AsObject = {
        inner: Uint8Array | string,
        altBech32m: string,
    }
}

export class AddressView extends jspb.Message { 

    hasVisible(): boolean;
    clearVisible(): void;
    getVisible(): AddressView.Visible | undefined;
    setVisible(value?: AddressView.Visible): AddressView;

    hasOpaque(): boolean;
    clearOpaque(): void;
    getOpaque(): AddressView.Opaque | undefined;
    setOpaque(value?: AddressView.Opaque): AddressView;

    getAddressViewCase(): AddressView.AddressViewCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddressView.AsObject;
    static toObject(includeInstance: boolean, msg: AddressView): AddressView.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddressView, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddressView;
    static deserializeBinaryFromReader(message: AddressView, reader: jspb.BinaryReader): AddressView;
}

export namespace AddressView {
    export type AsObject = {
        visible?: AddressView.Visible.AsObject,
        opaque?: AddressView.Opaque.AsObject,
    }


    export class Visible extends jspb.Message { 

        hasAddress(): boolean;
        clearAddress(): void;
        getAddress(): Address | undefined;
        setAddress(value?: Address): Visible;

        hasIndex(): boolean;
        clearIndex(): void;
        getIndex(): AddressIndex | undefined;
        setIndex(value?: AddressIndex): Visible;

        hasWalletId(): boolean;
        clearWalletId(): void;
        getWalletId(): WalletId | undefined;
        setWalletId(value?: WalletId): Visible;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Visible.AsObject;
        static toObject(includeInstance: boolean, msg: Visible): Visible.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Visible, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Visible;
        static deserializeBinaryFromReader(message: Visible, reader: jspb.BinaryReader): Visible;
    }

    export namespace Visible {
        export type AsObject = {
            address?: Address.AsObject,
            index?: AddressIndex.AsObject,
            walletId?: WalletId.AsObject,
        }
    }

    export class Opaque extends jspb.Message { 

        hasAddress(): boolean;
        clearAddress(): void;
        getAddress(): Address | undefined;
        setAddress(value?: Address): Opaque;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Opaque.AsObject;
        static toObject(includeInstance: boolean, msg: Opaque): Opaque.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Opaque, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Opaque;
        static deserializeBinaryFromReader(message: Opaque, reader: jspb.BinaryReader): Opaque;
    }

    export namespace Opaque {
        export type AsObject = {
            address?: Address.AsObject,
        }
    }


    export enum AddressViewCase {
        ADDRESS_VIEW_NOT_SET = 0,
        VISIBLE = 1,
        OPAQUE = 2,
    }

}

export class PayloadKey extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): PayloadKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayloadKey.AsObject;
    static toObject(includeInstance: boolean, msg: PayloadKey): PayloadKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayloadKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayloadKey;
    static deserializeBinaryFromReader(message: PayloadKey, reader: jspb.BinaryReader): PayloadKey;
}

export namespace PayloadKey {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class SpendKey extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): SpendKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpendKey.AsObject;
    static toObject(includeInstance: boolean, msg: SpendKey): SpendKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpendKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpendKey;
    static deserializeBinaryFromReader(message: SpendKey, reader: jspb.BinaryReader): SpendKey;
}

export namespace SpendKey {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class SpendVerificationKey extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): SpendVerificationKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpendVerificationKey.AsObject;
    static toObject(includeInstance: boolean, msg: SpendVerificationKey): SpendVerificationKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpendVerificationKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpendVerificationKey;
    static deserializeBinaryFromReader(message: SpendVerificationKey, reader: jspb.BinaryReader): SpendVerificationKey;
}

export namespace SpendVerificationKey {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class FullViewingKey extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): FullViewingKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FullViewingKey.AsObject;
    static toObject(includeInstance: boolean, msg: FullViewingKey): FullViewingKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FullViewingKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FullViewingKey;
    static deserializeBinaryFromReader(message: FullViewingKey, reader: jspb.BinaryReader): FullViewingKey;
}

export namespace FullViewingKey {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class WalletId extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): WalletId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletId.AsObject;
    static toObject(includeInstance: boolean, msg: WalletId): WalletId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletId;
    static deserializeBinaryFromReader(message: WalletId, reader: jspb.BinaryReader): WalletId;
}

export namespace WalletId {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class Diversifier extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): Diversifier;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Diversifier.AsObject;
    static toObject(includeInstance: boolean, msg: Diversifier): Diversifier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Diversifier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Diversifier;
    static deserializeBinaryFromReader(message: Diversifier, reader: jspb.BinaryReader): Diversifier;
}

export namespace Diversifier {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class AddressIndex extends jspb.Message { 
    getAccount(): number;
    setAccount(value: number): AddressIndex;
    getRandomizer(): Uint8Array | string;
    getRandomizer_asU8(): Uint8Array;
    getRandomizer_asB64(): string;
    setRandomizer(value: Uint8Array | string): AddressIndex;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddressIndex.AsObject;
    static toObject(includeInstance: boolean, msg: AddressIndex): AddressIndex.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddressIndex, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddressIndex;
    static deserializeBinaryFromReader(message: AddressIndex, reader: jspb.BinaryReader): AddressIndex;
}

export namespace AddressIndex {
    export type AsObject = {
        account: number,
        randomizer: Uint8Array | string,
    }
}

export class IdentityKey extends jspb.Message { 
    getIk(): Uint8Array | string;
    getIk_asU8(): Uint8Array;
    getIk_asB64(): string;
    setIk(value: Uint8Array | string): IdentityKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IdentityKey.AsObject;
    static toObject(includeInstance: boolean, msg: IdentityKey): IdentityKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IdentityKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IdentityKey;
    static deserializeBinaryFromReader(message: IdentityKey, reader: jspb.BinaryReader): IdentityKey;
}

export namespace IdentityKey {
    export type AsObject = {
        ik: Uint8Array | string,
    }
}

export class GovernanceKey extends jspb.Message { 
    getGk(): Uint8Array | string;
    getGk_asU8(): Uint8Array;
    getGk_asB64(): string;
    setGk(value: Uint8Array | string): GovernanceKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GovernanceKey.AsObject;
    static toObject(includeInstance: boolean, msg: GovernanceKey): GovernanceKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GovernanceKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GovernanceKey;
    static deserializeBinaryFromReader(message: GovernanceKey, reader: jspb.BinaryReader): GovernanceKey;
}

export namespace GovernanceKey {
    export type AsObject = {
        gk: Uint8Array | string,
    }
}

export class ConsensusKey extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): ConsensusKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsensusKey.AsObject;
    static toObject(includeInstance: boolean, msg: ConsensusKey): ConsensusKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsensusKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsensusKey;
    static deserializeBinaryFromReader(message: ConsensusKey, reader: jspb.BinaryReader): ConsensusKey;
}

export namespace ConsensusKey {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}
