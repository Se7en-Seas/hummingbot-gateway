// package: penumbra.core.app.v1alpha1
// file: penumbra/core/app/v1alpha1/app.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as penumbra_core_component_chain_v1alpha1_chain_pb from "../../../../penumbra/core/component/chain/v1alpha1/chain_pb";
import * as penumbra_core_component_stake_v1alpha1_stake_pb from "../../../../penumbra/core/component/stake/v1alpha1/stake_pb";
import * as penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb from "../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb";
import * as penumbra_core_component_governance_v1alpha1_governance_pb from "../../../../penumbra/core/component/governance/v1alpha1/governance_pb";
import * as penumbra_core_component_ibc_v1alpha1_ibc_pb from "../../../../penumbra/core/component/ibc/v1alpha1/ibc_pb";
import * as penumbra_core_component_fee_v1alpha1_fee_pb from "../../../../penumbra/core/component/fee/v1alpha1/fee_pb";
import * as penumbra_core_component_dao_v1alpha1_dao_pb from "../../../../penumbra/core/component/dao/v1alpha1/dao_pb";
import * as ibc_core_commitment_v1_commitment_pb from "../../../../ibc/core/commitment/v1/commitment_pb";

export class KeyValueRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): KeyValueRequest;
    getKey(): string;
    setKey(value: string): KeyValueRequest;
    getProof(): boolean;
    setProof(value: boolean): KeyValueRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyValueRequest.AsObject;
    static toObject(includeInstance: boolean, msg: KeyValueRequest): KeyValueRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyValueRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyValueRequest;
    static deserializeBinaryFromReader(message: KeyValueRequest, reader: jspb.BinaryReader): KeyValueRequest;
}

export namespace KeyValueRequest {
    export type AsObject = {
        chainId: string,
        key: string,
        proof: boolean,
    }
}

export class KeyValueResponse extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): KeyValueResponse.Value | undefined;
    setValue(value?: KeyValueResponse.Value): KeyValueResponse;

    hasProof(): boolean;
    clearProof(): void;
    getProof(): ibc_core_commitment_v1_commitment_pb.MerkleProof | undefined;
    setProof(value?: ibc_core_commitment_v1_commitment_pb.MerkleProof): KeyValueResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyValueResponse.AsObject;
    static toObject(includeInstance: boolean, msg: KeyValueResponse): KeyValueResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyValueResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyValueResponse;
    static deserializeBinaryFromReader(message: KeyValueResponse, reader: jspb.BinaryReader): KeyValueResponse;
}

export namespace KeyValueResponse {
    export type AsObject = {
        value?: KeyValueResponse.Value.AsObject,
        proof?: ibc_core_commitment_v1_commitment_pb.MerkleProof.AsObject,
    }


    export class Value extends jspb.Message { 
        getValue(): Uint8Array | string;
        getValue_asU8(): Uint8Array;
        getValue_asB64(): string;
        setValue(value: Uint8Array | string): Value;

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
            value: Uint8Array | string,
        }
    }

}

export class PrefixValueRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): PrefixValueRequest;
    getPrefix(): string;
    setPrefix(value: string): PrefixValueRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrefixValueRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PrefixValueRequest): PrefixValueRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrefixValueRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrefixValueRequest;
    static deserializeBinaryFromReader(message: PrefixValueRequest, reader: jspb.BinaryReader): PrefixValueRequest;
}

export namespace PrefixValueRequest {
    export type AsObject = {
        chainId: string,
        prefix: string,
    }
}

export class PrefixValueResponse extends jspb.Message { 
    getKey(): string;
    setKey(value: string): PrefixValueResponse;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): PrefixValueResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrefixValueResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PrefixValueResponse): PrefixValueResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrefixValueResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrefixValueResponse;
    static deserializeBinaryFromReader(message: PrefixValueResponse, reader: jspb.BinaryReader): PrefixValueResponse;
}

export namespace PrefixValueResponse {
    export type AsObject = {
        key: string,
        value: Uint8Array | string,
    }
}

export class AppParameters extends jspb.Message { 

    hasChainParams(): boolean;
    clearChainParams(): void;
    getChainParams(): penumbra_core_component_chain_v1alpha1_chain_pb.ChainParameters | undefined;
    setChainParams(value?: penumbra_core_component_chain_v1alpha1_chain_pb.ChainParameters): AppParameters;

    hasDaoParams(): boolean;
    clearDaoParams(): void;
    getDaoParams(): penumbra_core_component_dao_v1alpha1_dao_pb.DaoParameters | undefined;
    setDaoParams(value?: penumbra_core_component_dao_v1alpha1_dao_pb.DaoParameters): AppParameters;

    hasGovernanceParams(): boolean;
    clearGovernanceParams(): void;
    getGovernanceParams(): penumbra_core_component_governance_v1alpha1_governance_pb.GovernanceParameters | undefined;
    setGovernanceParams(value?: penumbra_core_component_governance_v1alpha1_governance_pb.GovernanceParameters): AppParameters;

    hasIbcParams(): boolean;
    clearIbcParams(): void;
    getIbcParams(): penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcParameters | undefined;
    setIbcParams(value?: penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcParameters): AppParameters;

    hasStakeParams(): boolean;
    clearStakeParams(): void;
    getStakeParams(): penumbra_core_component_stake_v1alpha1_stake_pb.StakeParameters | undefined;
    setStakeParams(value?: penumbra_core_component_stake_v1alpha1_stake_pb.StakeParameters): AppParameters;

    hasFeeParams(): boolean;
    clearFeeParams(): void;
    getFeeParams(): penumbra_core_component_fee_v1alpha1_fee_pb.FeeParameters | undefined;
    setFeeParams(value?: penumbra_core_component_fee_v1alpha1_fee_pb.FeeParameters): AppParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppParameters.AsObject;
    static toObject(includeInstance: boolean, msg: AppParameters): AppParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppParameters;
    static deserializeBinaryFromReader(message: AppParameters, reader: jspb.BinaryReader): AppParameters;
}

export namespace AppParameters {
    export type AsObject = {
        chainParams?: penumbra_core_component_chain_v1alpha1_chain_pb.ChainParameters.AsObject,
        daoParams?: penumbra_core_component_dao_v1alpha1_dao_pb.DaoParameters.AsObject,
        governanceParams?: penumbra_core_component_governance_v1alpha1_governance_pb.GovernanceParameters.AsObject,
        ibcParams?: penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcParameters.AsObject,
        stakeParams?: penumbra_core_component_stake_v1alpha1_stake_pb.StakeParameters.AsObject,
        feeParams?: penumbra_core_component_fee_v1alpha1_fee_pb.FeeParameters.AsObject,
    }
}

export class AppParametersRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): AppParametersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppParametersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AppParametersRequest): AppParametersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppParametersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppParametersRequest;
    static deserializeBinaryFromReader(message: AppParametersRequest, reader: jspb.BinaryReader): AppParametersRequest;
}

export namespace AppParametersRequest {
    export type AsObject = {
        chainId: string,
    }
}

export class AppParametersResponse extends jspb.Message { 

    hasAppParameters(): boolean;
    clearAppParameters(): void;
    getAppParameters(): AppParameters | undefined;
    setAppParameters(value?: AppParameters): AppParametersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppParametersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AppParametersResponse): AppParametersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppParametersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppParametersResponse;
    static deserializeBinaryFromReader(message: AppParametersResponse, reader: jspb.BinaryReader): AppParametersResponse;
}

export namespace AppParametersResponse {
    export type AsObject = {
        appParameters?: AppParameters.AsObject,
    }
}

export class GenesisAppState extends jspb.Message { 

    hasGenesisContent(): boolean;
    clearGenesisContent(): void;
    getGenesisContent(): GenesisContent | undefined;
    setGenesisContent(value?: GenesisContent): GenesisAppState;

    hasGenesisCheckpoint(): boolean;
    clearGenesisCheckpoint(): void;
    getGenesisCheckpoint(): Uint8Array | string;
    getGenesisCheckpoint_asU8(): Uint8Array;
    getGenesisCheckpoint_asB64(): string;
    setGenesisCheckpoint(value: Uint8Array | string): GenesisAppState;

    getGenesisAppStateCase(): GenesisAppState.GenesisAppStateCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenesisAppState.AsObject;
    static toObject(includeInstance: boolean, msg: GenesisAppState): GenesisAppState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenesisAppState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenesisAppState;
    static deserializeBinaryFromReader(message: GenesisAppState, reader: jspb.BinaryReader): GenesisAppState;
}

export namespace GenesisAppState {
    export type AsObject = {
        genesisContent?: GenesisContent.AsObject,
        genesisCheckpoint: Uint8Array | string,
    }

    export enum GenesisAppStateCase {
        GENESIS_APP_STATE_NOT_SET = 0,
        GENESIS_CONTENT = 1,
        GENESIS_CHECKPOINT = 2,
    }

}

export class GenesisContent extends jspb.Message { 

    hasStakeContent(): boolean;
    clearStakeContent(): void;
    getStakeContent(): penumbra_core_component_stake_v1alpha1_stake_pb.GenesisContent | undefined;
    setStakeContent(value?: penumbra_core_component_stake_v1alpha1_stake_pb.GenesisContent): GenesisContent;

    hasShieldedPoolContent(): boolean;
    clearShieldedPoolContent(): void;
    getShieldedPoolContent(): penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.GenesisContent | undefined;
    setShieldedPoolContent(value?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.GenesisContent): GenesisContent;

    hasGovernanceContent(): boolean;
    clearGovernanceContent(): void;
    getGovernanceContent(): penumbra_core_component_governance_v1alpha1_governance_pb.GenesisContent | undefined;
    setGovernanceContent(value?: penumbra_core_component_governance_v1alpha1_governance_pb.GenesisContent): GenesisContent;

    hasIbcContent(): boolean;
    clearIbcContent(): void;
    getIbcContent(): penumbra_core_component_ibc_v1alpha1_ibc_pb.GenesisContent | undefined;
    setIbcContent(value?: penumbra_core_component_ibc_v1alpha1_ibc_pb.GenesisContent): GenesisContent;

    hasChainContent(): boolean;
    clearChainContent(): void;
    getChainContent(): penumbra_core_component_chain_v1alpha1_chain_pb.GenesisContent | undefined;
    setChainContent(value?: penumbra_core_component_chain_v1alpha1_chain_pb.GenesisContent): GenesisContent;

    hasDaoContent(): boolean;
    clearDaoContent(): void;
    getDaoContent(): penumbra_core_component_dao_v1alpha1_dao_pb.GenesisContent | undefined;
    setDaoContent(value?: penumbra_core_component_dao_v1alpha1_dao_pb.GenesisContent): GenesisContent;

    hasFeeContent(): boolean;
    clearFeeContent(): void;
    getFeeContent(): penumbra_core_component_fee_v1alpha1_fee_pb.GenesisContent | undefined;
    setFeeContent(value?: penumbra_core_component_fee_v1alpha1_fee_pb.GenesisContent): GenesisContent;

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
        stakeContent?: penumbra_core_component_stake_v1alpha1_stake_pb.GenesisContent.AsObject,
        shieldedPoolContent?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.GenesisContent.AsObject,
        governanceContent?: penumbra_core_component_governance_v1alpha1_governance_pb.GenesisContent.AsObject,
        ibcContent?: penumbra_core_component_ibc_v1alpha1_ibc_pb.GenesisContent.AsObject,
        chainContent?: penumbra_core_component_chain_v1alpha1_chain_pb.GenesisContent.AsObject,
        daoContent?: penumbra_core_component_dao_v1alpha1_dao_pb.GenesisContent.AsObject,
        feeContent?: penumbra_core_component_fee_v1alpha1_fee_pb.GenesisContent.AsObject,
    }
}
