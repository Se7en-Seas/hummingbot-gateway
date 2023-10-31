// package: penumbra.core.component.compact_block.v1alpha1
// file: penumbra/core/component/compact_block/v1alpha1/compact_block.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as penumbra_crypto_tct_v1alpha1_tct_pb from "../../../../../penumbra/crypto/tct/v1alpha1/tct_pb";
import * as penumbra_core_component_sct_v1alpha1_sct_pb from "../../../../../penumbra/core/component/sct/v1alpha1/sct_pb";
import * as penumbra_core_component_chain_v1alpha1_chain_pb from "../../../../../penumbra/core/component/chain/v1alpha1/chain_pb";
import * as penumbra_core_component_dex_v1alpha1_dex_pb from "../../../../../penumbra/core/component/dex/v1alpha1/dex_pb";
import * as penumbra_core_component_fee_v1alpha1_fee_pb from "../../../../../penumbra/core/component/fee/v1alpha1/fee_pb";
import * as penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb from "../../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb";

export class CompactBlock extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): CompactBlock;
    clearStatePayloadsList(): void;
    getStatePayloadsList(): Array<StatePayload>;
    setStatePayloadsList(value: Array<StatePayload>): CompactBlock;
    addStatePayloads(value?: StatePayload, index?: number): StatePayload;
    clearNullifiersList(): void;
    getNullifiersList(): Array<penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier>;
    setNullifiersList(value: Array<penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier>): CompactBlock;
    addNullifiers(value?: penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier, index?: number): penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier;

    hasBlockRoot(): boolean;
    clearBlockRoot(): void;
    getBlockRoot(): penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot | undefined;
    setBlockRoot(value?: penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot): CompactBlock;

    hasEpochRoot(): boolean;
    clearEpochRoot(): void;
    getEpochRoot(): penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot | undefined;
    setEpochRoot(value?: penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot): CompactBlock;
    getProposalStarted(): boolean;
    setProposalStarted(value: boolean): CompactBlock;

    hasFmdParameters(): boolean;
    clearFmdParameters(): void;
    getFmdParameters(): penumbra_core_component_chain_v1alpha1_chain_pb.FmdParameters | undefined;
    setFmdParameters(value?: penumbra_core_component_chain_v1alpha1_chain_pb.FmdParameters): CompactBlock;
    clearSwapOutputsList(): void;
    getSwapOutputsList(): Array<penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputData>;
    setSwapOutputsList(value: Array<penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputData>): CompactBlock;
    addSwapOutputs(value?: penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputData, index?: number): penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputData;
    getAppParametersUpdated(): boolean;
    setAppParametersUpdated(value: boolean): CompactBlock;

    hasGasPrices(): boolean;
    clearGasPrices(): void;
    getGasPrices(): penumbra_core_component_fee_v1alpha1_fee_pb.GasPrices | undefined;
    setGasPrices(value?: penumbra_core_component_fee_v1alpha1_fee_pb.GasPrices): CompactBlock;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompactBlock.AsObject;
    static toObject(includeInstance: boolean, msg: CompactBlock): CompactBlock.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompactBlock, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompactBlock;
    static deserializeBinaryFromReader(message: CompactBlock, reader: jspb.BinaryReader): CompactBlock;
}

export namespace CompactBlock {
    export type AsObject = {
        height: number,
        statePayloadsList: Array<StatePayload.AsObject>,
        nullifiersList: Array<penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.AsObject>,
        blockRoot?: penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot.AsObject,
        epochRoot?: penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot.AsObject,
        proposalStarted: boolean,
        fmdParameters?: penumbra_core_component_chain_v1alpha1_chain_pb.FmdParameters.AsObject,
        swapOutputsList: Array<penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputData.AsObject>,
        appParametersUpdated: boolean,
        gasPrices?: penumbra_core_component_fee_v1alpha1_fee_pb.GasPrices.AsObject,
    }
}

export class StatePayload extends jspb.Message { 

    hasRolledUp(): boolean;
    clearRolledUp(): void;
    getRolledUp(): StatePayload.RolledUp | undefined;
    setRolledUp(value?: StatePayload.RolledUp): StatePayload;

    hasNote(): boolean;
    clearNote(): void;
    getNote(): StatePayload.Note | undefined;
    setNote(value?: StatePayload.Note): StatePayload;

    hasSwap(): boolean;
    clearSwap(): void;
    getSwap(): StatePayload.Swap | undefined;
    setSwap(value?: StatePayload.Swap): StatePayload;

    getStatePayloadCase(): StatePayload.StatePayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatePayload.AsObject;
    static toObject(includeInstance: boolean, msg: StatePayload): StatePayload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatePayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatePayload;
    static deserializeBinaryFromReader(message: StatePayload, reader: jspb.BinaryReader): StatePayload;
}

export namespace StatePayload {
    export type AsObject = {
        rolledUp?: StatePayload.RolledUp.AsObject,
        note?: StatePayload.Note.AsObject,
        swap?: StatePayload.Swap.AsObject,
    }


    export class RolledUp extends jspb.Message { 

        hasCommitment(): boolean;
        clearCommitment(): void;
        getCommitment(): penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment | undefined;
        setCommitment(value?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment): RolledUp;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RolledUp.AsObject;
        static toObject(includeInstance: boolean, msg: RolledUp): RolledUp.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RolledUp, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RolledUp;
        static deserializeBinaryFromReader(message: RolledUp, reader: jspb.BinaryReader): RolledUp;
    }

    export namespace RolledUp {
        export type AsObject = {
            commitment?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.AsObject,
        }
    }

    export class Note extends jspb.Message { 

        hasSource(): boolean;
        clearSource(): void;
        getSource(): penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource | undefined;
        setSource(value?: penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource): Note;

        hasNote(): boolean;
        clearNote(): void;
        getNote(): penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NotePayload | undefined;
        setNote(value?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NotePayload): Note;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Note.AsObject;
        static toObject(includeInstance: boolean, msg: Note): Note.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Note, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Note;
        static deserializeBinaryFromReader(message: Note, reader: jspb.BinaryReader): Note;
    }

    export namespace Note {
        export type AsObject = {
            source?: penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource.AsObject,
            note?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NotePayload.AsObject,
        }
    }

    export class Swap extends jspb.Message { 

        hasSource(): boolean;
        clearSource(): void;
        getSource(): penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource | undefined;
        setSource(value?: penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource): Swap;

        hasSwap(): boolean;
        clearSwap(): void;
        getSwap(): penumbra_core_component_dex_v1alpha1_dex_pb.SwapPayload | undefined;
        setSwap(value?: penumbra_core_component_dex_v1alpha1_dex_pb.SwapPayload): Swap;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Swap.AsObject;
        static toObject(includeInstance: boolean, msg: Swap): Swap.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Swap, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Swap;
        static deserializeBinaryFromReader(message: Swap, reader: jspb.BinaryReader): Swap;
    }

    export namespace Swap {
        export type AsObject = {
            source?: penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource.AsObject,
            swap?: penumbra_core_component_dex_v1alpha1_dex_pb.SwapPayload.AsObject,
        }
    }


    export enum StatePayloadCase {
        STATE_PAYLOAD_NOT_SET = 0,
        ROLLED_UP = 1,
        NOTE = 2,
        SWAP = 3,
    }

}

export class CompactBlockRangeRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): CompactBlockRangeRequest;
    getStartHeight(): number;
    setStartHeight(value: number): CompactBlockRangeRequest;
    getEndHeight(): number;
    setEndHeight(value: number): CompactBlockRangeRequest;
    getKeepAlive(): boolean;
    setKeepAlive(value: boolean): CompactBlockRangeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompactBlockRangeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CompactBlockRangeRequest): CompactBlockRangeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompactBlockRangeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompactBlockRangeRequest;
    static deserializeBinaryFromReader(message: CompactBlockRangeRequest, reader: jspb.BinaryReader): CompactBlockRangeRequest;
}

export namespace CompactBlockRangeRequest {
    export type AsObject = {
        chainId: string,
        startHeight: number,
        endHeight: number,
        keepAlive: boolean,
    }
}

export class CompactBlockRangeResponse extends jspb.Message { 

    hasCompactBlock(): boolean;
    clearCompactBlock(): void;
    getCompactBlock(): CompactBlock | undefined;
    setCompactBlock(value?: CompactBlock): CompactBlockRangeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompactBlockRangeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CompactBlockRangeResponse): CompactBlockRangeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompactBlockRangeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompactBlockRangeResponse;
    static deserializeBinaryFromReader(message: CompactBlockRangeResponse, reader: jspb.BinaryReader): CompactBlockRangeResponse;
}

export namespace CompactBlockRangeResponse {
    export type AsObject = {
        compactBlock?: CompactBlock.AsObject,
    }
}
