// package: penumbra.core.component.fee.v1alpha1
// file: penumbra/core/component/fee/v1alpha1/fee.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as penumbra_core_num_v1alpha1_num_pb from "../../../../../penumbra/core/num/v1alpha1/num_pb";
import * as penumbra_core_asset_v1alpha1_asset_pb from "../../../../../penumbra/core/asset/v1alpha1/asset_pb";

export class Fee extends jspb.Message { 

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setAmount(value?: penumbra_core_num_v1alpha1_num_pb.Amount): Fee;

    hasAssetId(): boolean;
    clearAssetId(): void;
    getAssetId(): penumbra_core_asset_v1alpha1_asset_pb.AssetId | undefined;
    setAssetId(value?: penumbra_core_asset_v1alpha1_asset_pb.AssetId): Fee;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Fee.AsObject;
    static toObject(includeInstance: boolean, msg: Fee): Fee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Fee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Fee;
    static deserializeBinaryFromReader(message: Fee, reader: jspb.BinaryReader): Fee;
}

export namespace Fee {
    export type AsObject = {
        amount?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        assetId?: penumbra_core_asset_v1alpha1_asset_pb.AssetId.AsObject,
    }
}

export class GasPrices extends jspb.Message { 
    getBlockSpacePrice(): number;
    setBlockSpacePrice(value: number): GasPrices;
    getCompactBlockSpacePrice(): number;
    setCompactBlockSpacePrice(value: number): GasPrices;
    getVerificationPrice(): number;
    setVerificationPrice(value: number): GasPrices;
    getExecutionPrice(): number;
    setExecutionPrice(value: number): GasPrices;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GasPrices.AsObject;
    static toObject(includeInstance: boolean, msg: GasPrices): GasPrices.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GasPrices, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GasPrices;
    static deserializeBinaryFromReader(message: GasPrices, reader: jspb.BinaryReader): GasPrices;
}

export namespace GasPrices {
    export type AsObject = {
        blockSpacePrice: number,
        compactBlockSpacePrice: number,
        verificationPrice: number,
        executionPrice: number,
    }
}

export class FeeParameters extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeeParameters.AsObject;
    static toObject(includeInstance: boolean, msg: FeeParameters): FeeParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeeParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeeParameters;
    static deserializeBinaryFromReader(message: FeeParameters, reader: jspb.BinaryReader): FeeParameters;
}

export namespace FeeParameters {
    export type AsObject = {
    }
}

export class GenesisContent extends jspb.Message { 

    hasFeeParams(): boolean;
    clearFeeParams(): void;
    getFeeParams(): FeeParameters | undefined;
    setFeeParams(value?: FeeParameters): GenesisContent;

    hasGasPrices(): boolean;
    clearGasPrices(): void;
    getGasPrices(): GasPrices | undefined;
    setGasPrices(value?: GasPrices): GenesisContent;

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
        feeParams?: FeeParameters.AsObject,
        gasPrices?: GasPrices.AsObject,
    }
}
