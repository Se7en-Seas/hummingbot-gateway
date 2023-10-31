// package: penumbra.core.component.chain.v1alpha1
// file: penumbra/core/component/chain/v1alpha1/chain.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as penumbra_core_asset_v1alpha1_asset_pb from "../../../../../penumbra/core/asset/v1alpha1/asset_pb";

export class EffectHash extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): EffectHash;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EffectHash.AsObject;
    static toObject(includeInstance: boolean, msg: EffectHash): EffectHash.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EffectHash, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EffectHash;
    static deserializeBinaryFromReader(message: EffectHash, reader: jspb.BinaryReader): EffectHash;
}

export namespace EffectHash {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class ChainParameters extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): ChainParameters;
    getEpochDuration(): number;
    setEpochDuration(value: number): ChainParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChainParameters.AsObject;
    static toObject(includeInstance: boolean, msg: ChainParameters): ChainParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChainParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChainParameters;
    static deserializeBinaryFromReader(message: ChainParameters, reader: jspb.BinaryReader): ChainParameters;
}

export namespace ChainParameters {
    export type AsObject = {
        chainId: string,
        epochDuration: number,
    }
}

export class Ratio extends jspb.Message { 
    getNumerator(): number;
    setNumerator(value: number): Ratio;
    getDenominator(): number;
    setDenominator(value: number): Ratio;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ratio.AsObject;
    static toObject(includeInstance: boolean, msg: Ratio): Ratio.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ratio, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ratio;
    static deserializeBinaryFromReader(message: Ratio, reader: jspb.BinaryReader): Ratio;
}

export namespace Ratio {
    export type AsObject = {
        numerator: number,
        denominator: number,
    }
}

export class FmdParameters extends jspb.Message { 
    getPrecisionBits(): number;
    setPrecisionBits(value: number): FmdParameters;
    getAsOfBlockHeight(): number;
    setAsOfBlockHeight(value: number): FmdParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FmdParameters.AsObject;
    static toObject(includeInstance: boolean, msg: FmdParameters): FmdParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FmdParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FmdParameters;
    static deserializeBinaryFromReader(message: FmdParameters, reader: jspb.BinaryReader): FmdParameters;
}

export namespace FmdParameters {
    export type AsObject = {
        precisionBits: number,
        asOfBlockHeight: number,
    }
}

export class KnownAssets extends jspb.Message { 
    clearAssetsList(): void;
    getAssetsList(): Array<penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata>;
    setAssetsList(value: Array<penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata>): KnownAssets;
    addAssets(value?: penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata, index?: number): penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KnownAssets.AsObject;
    static toObject(includeInstance: boolean, msg: KnownAssets): KnownAssets.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KnownAssets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KnownAssets;
    static deserializeBinaryFromReader(message: KnownAssets, reader: jspb.BinaryReader): KnownAssets;
}

export namespace KnownAssets {
    export type AsObject = {
        assetsList: Array<penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata.AsObject>,
    }
}

export class NoteSource extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): NoteSource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NoteSource.AsObject;
    static toObject(includeInstance: boolean, msg: NoteSource): NoteSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NoteSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NoteSource;
    static deserializeBinaryFromReader(message: NoteSource, reader: jspb.BinaryReader): NoteSource;
}

export namespace NoteSource {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class SpendInfo extends jspb.Message { 

    hasNoteSource(): boolean;
    clearNoteSource(): void;
    getNoteSource(): NoteSource | undefined;
    setNoteSource(value?: NoteSource): SpendInfo;
    getSpendHeight(): number;
    setSpendHeight(value: number): SpendInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpendInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SpendInfo): SpendInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpendInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpendInfo;
    static deserializeBinaryFromReader(message: SpendInfo, reader: jspb.BinaryReader): SpendInfo;
}

export namespace SpendInfo {
    export type AsObject = {
        noteSource?: NoteSource.AsObject,
        spendHeight: number,
    }
}

export class GenesisContent extends jspb.Message { 

    hasChainParams(): boolean;
    clearChainParams(): void;
    getChainParams(): ChainParameters | undefined;
    setChainParams(value?: ChainParameters): GenesisContent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenesisContent.AsObject;
    static toObject(includeInstance: boolean, msg: GenesisContent): GenesisContent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenesisContent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenesisContent;
    static deserializeBinaryFromReader(message: GenesisContent, reader: jspb.BinaryReader): GenesisContent;
}

export namespace GenesisContent {
    export type AsObject = {
        chainParams?: ChainParameters.AsObject,
    }
}

export class Epoch extends jspb.Message { 
    getIndex(): number;
    setIndex(value: number): Epoch;
    getStartHeight(): number;
    setStartHeight(value: number): Epoch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Epoch.AsObject;
    static toObject(includeInstance: boolean, msg: Epoch): Epoch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Epoch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Epoch;
    static deserializeBinaryFromReader(message: Epoch, reader: jspb.BinaryReader): Epoch;
}

export namespace Epoch {
    export type AsObject = {
        index: number,
        startHeight: number,
    }
}

export class EpochByHeightRequest extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): EpochByHeightRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EpochByHeightRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EpochByHeightRequest): EpochByHeightRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EpochByHeightRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EpochByHeightRequest;
    static deserializeBinaryFromReader(message: EpochByHeightRequest, reader: jspb.BinaryReader): EpochByHeightRequest;
}

export namespace EpochByHeightRequest {
    export type AsObject = {
        height: number,
    }
}

export class EpochByHeightResponse extends jspb.Message { 

    hasEpoch(): boolean;
    clearEpoch(): void;
    getEpoch(): Epoch | undefined;
    setEpoch(value?: Epoch): EpochByHeightResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EpochByHeightResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EpochByHeightResponse): EpochByHeightResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EpochByHeightResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EpochByHeightResponse;
    static deserializeBinaryFromReader(message: EpochByHeightResponse, reader: jspb.BinaryReader): EpochByHeightResponse;
}

export namespace EpochByHeightResponse {
    export type AsObject = {
        epoch?: Epoch.AsObject,
    }
}
