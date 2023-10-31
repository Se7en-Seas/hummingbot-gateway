// package: penumbra.core.component.dao.v1alpha1
// file: penumbra/core/component/dao/v1alpha1/dao.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class DaoParameters extends jspb.Message { 
    getDaoSpendProposalsEnabled(): boolean;
    setDaoSpendProposalsEnabled(value: boolean): DaoParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DaoParameters.AsObject;
    static toObject(includeInstance: boolean, msg: DaoParameters): DaoParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DaoParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DaoParameters;
    static deserializeBinaryFromReader(message: DaoParameters, reader: jspb.BinaryReader): DaoParameters;
}

export namespace DaoParameters {
    export type AsObject = {
        daoSpendProposalsEnabled: boolean,
    }
}

export class GenesisContent extends jspb.Message { 

    hasDaoParams(): boolean;
    clearDaoParams(): void;
    getDaoParams(): DaoParameters | undefined;
    setDaoParams(value?: DaoParameters): GenesisContent;

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
        daoParams?: DaoParameters.AsObject,
    }
}
