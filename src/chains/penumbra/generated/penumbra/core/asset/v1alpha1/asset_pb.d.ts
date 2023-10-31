// package: penumbra.core.asset.v1alpha1
// file: penumbra/core/asset/v1alpha1/asset.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as penumbra_core_num_v1alpha1_num_pb from "../../../../penumbra/core/num/v1alpha1/num_pb";

export class BalanceCommitment extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): BalanceCommitment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BalanceCommitment.AsObject;
    static toObject(includeInstance: boolean, msg: BalanceCommitment): BalanceCommitment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BalanceCommitment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BalanceCommitment;
    static deserializeBinaryFromReader(message: BalanceCommitment, reader: jspb.BinaryReader): BalanceCommitment;
}

export namespace BalanceCommitment {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class AssetId extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): AssetId;
    getAltBech32m(): string;
    setAltBech32m(value: string): AssetId;
    getAltBaseDenom(): string;
    setAltBaseDenom(value: string): AssetId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetId.AsObject;
    static toObject(includeInstance: boolean, msg: AssetId): AssetId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetId;
    static deserializeBinaryFromReader(message: AssetId, reader: jspb.BinaryReader): AssetId;
}

export namespace AssetId {
    export type AsObject = {
        inner: Uint8Array | string,
        altBech32m: string,
        altBaseDenom: string,
    }
}

export class Denom extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): Denom;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Denom.AsObject;
    static toObject(includeInstance: boolean, msg: Denom): Denom.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Denom, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Denom;
    static deserializeBinaryFromReader(message: Denom, reader: jspb.BinaryReader): Denom;
}

export namespace Denom {
    export type AsObject = {
        denom: string,
    }
}

export class DenomMetadata extends jspb.Message { 
    getDescription(): string;
    setDescription(value: string): DenomMetadata;
    clearDenomUnitsList(): void;
    getDenomUnitsList(): Array<DenomUnit>;
    setDenomUnitsList(value: Array<DenomUnit>): DenomMetadata;
    addDenomUnits(value?: DenomUnit, index?: number): DenomUnit;
    getBase(): string;
    setBase(value: string): DenomMetadata;
    getDisplay(): string;
    setDisplay(value: string): DenomMetadata;
    getName(): string;
    setName(value: string): DenomMetadata;
    getSymbol(): string;
    setSymbol(value: string): DenomMetadata;
    getUri(): string;
    setUri(value: string): DenomMetadata;
    getUriHash(): string;
    setUriHash(value: string): DenomMetadata;

    hasPenumbraAssetId(): boolean;
    clearPenumbraAssetId(): void;
    getPenumbraAssetId(): AssetId | undefined;
    setPenumbraAssetId(value?: AssetId): DenomMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DenomMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DenomMetadata): DenomMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DenomMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DenomMetadata;
    static deserializeBinaryFromReader(message: DenomMetadata, reader: jspb.BinaryReader): DenomMetadata;
}

export namespace DenomMetadata {
    export type AsObject = {
        description: string,
        denomUnitsList: Array<DenomUnit.AsObject>,
        base: string,
        display: string,
        name: string,
        symbol: string,
        uri: string,
        uriHash: string,
        penumbraAssetId?: AssetId.AsObject,
    }
}

export class DenomUnit extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): DenomUnit;
    getExponent(): number;
    setExponent(value: number): DenomUnit;
    clearAliasesList(): void;
    getAliasesList(): Array<string>;
    setAliasesList(value: Array<string>): DenomUnit;
    addAliases(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DenomUnit.AsObject;
    static toObject(includeInstance: boolean, msg: DenomUnit): DenomUnit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DenomUnit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DenomUnit;
    static deserializeBinaryFromReader(message: DenomUnit, reader: jspb.BinaryReader): DenomUnit;
}

export namespace DenomUnit {
    export type AsObject = {
        denom: string,
        exponent: number,
        aliasesList: Array<string>,
    }
}

export class Value extends jspb.Message { 

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setAmount(value?: penumbra_core_num_v1alpha1_num_pb.Amount): Value;

    hasAssetId(): boolean;
    clearAssetId(): void;
    getAssetId(): AssetId | undefined;
    setAssetId(value?: AssetId): Value;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
    export type AsObject = {
        amount?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        assetId?: AssetId.AsObject,
    }
}

export class ValueView extends jspb.Message { 

    hasKnownDenom(): boolean;
    clearKnownDenom(): void;
    getKnownDenom(): ValueView.KnownDenom | undefined;
    setKnownDenom(value?: ValueView.KnownDenom): ValueView;

    hasUnknownDenom(): boolean;
    clearUnknownDenom(): void;
    getUnknownDenom(): ValueView.UnknownDenom | undefined;
    setUnknownDenom(value?: ValueView.UnknownDenom): ValueView;

    getValueViewCase(): ValueView.ValueViewCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueView.AsObject;
    static toObject(includeInstance: boolean, msg: ValueView): ValueView.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueView, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueView;
    static deserializeBinaryFromReader(message: ValueView, reader: jspb.BinaryReader): ValueView;
}

export namespace ValueView {
    export type AsObject = {
        knownDenom?: ValueView.KnownDenom.AsObject,
        unknownDenom?: ValueView.UnknownDenom.AsObject,
    }


    export class KnownDenom extends jspb.Message { 

        hasAmount(): boolean;
        clearAmount(): void;
        getAmount(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
        setAmount(value?: penumbra_core_num_v1alpha1_num_pb.Amount): KnownDenom;

        hasDenom(): boolean;
        clearDenom(): void;
        getDenom(): DenomMetadata | undefined;
        setDenom(value?: DenomMetadata): KnownDenom;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): KnownDenom.AsObject;
        static toObject(includeInstance: boolean, msg: KnownDenom): KnownDenom.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: KnownDenom, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): KnownDenom;
        static deserializeBinaryFromReader(message: KnownDenom, reader: jspb.BinaryReader): KnownDenom;
    }

    export namespace KnownDenom {
        export type AsObject = {
            amount?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
            denom?: DenomMetadata.AsObject,
        }
    }

    export class UnknownDenom extends jspb.Message { 

        hasAmount(): boolean;
        clearAmount(): void;
        getAmount(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
        setAmount(value?: penumbra_core_num_v1alpha1_num_pb.Amount): UnknownDenom;

        hasAssetId(): boolean;
        clearAssetId(): void;
        getAssetId(): AssetId | undefined;
        setAssetId(value?: AssetId): UnknownDenom;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UnknownDenom.AsObject;
        static toObject(includeInstance: boolean, msg: UnknownDenom): UnknownDenom.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UnknownDenom, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UnknownDenom;
        static deserializeBinaryFromReader(message: UnknownDenom, reader: jspb.BinaryReader): UnknownDenom;
    }

    export namespace UnknownDenom {
        export type AsObject = {
            amount?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
            assetId?: AssetId.AsObject,
        }
    }


    export enum ValueViewCase {
        VALUE_VIEW_NOT_SET = 0,
        KNOWN_DENOM = 1,
        UNKNOWN_DENOM = 2,
    }

}
