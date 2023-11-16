// package: penumbra.core.component.dex.v1alpha1
// file: penumbra/core/component/dex/v1alpha1/dex.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as penumbra_crypto_tct_v1alpha1_tct_pb from "../../../../../penumbra/crypto/tct/v1alpha1/tct_pb";
import * as penumbra_core_num_v1alpha1_num_pb from "../../../../../penumbra/core/num/v1alpha1/num_pb";
import * as penumbra_core_asset_v1alpha1_asset_pb from "../../../../../penumbra/core/asset/v1alpha1/asset_pb";
import * as penumbra_core_keys_v1alpha1_keys_pb from "../../../../../penumbra/core/keys/v1alpha1/keys_pb";
import * as penumbra_core_component_sct_v1alpha1_sct_pb from "../../../../../penumbra/core/component/sct/v1alpha1/sct_pb";
import * as penumbra_core_component_fee_v1alpha1_fee_pb from "../../../../../penumbra/core/component/fee/v1alpha1/fee_pb";
import * as penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb from "../../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb";

export class ZKSwapProof extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): ZKSwapProof;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZKSwapProof.AsObject;
    static toObject(includeInstance: boolean, msg: ZKSwapProof): ZKSwapProof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZKSwapProof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZKSwapProof;
    static deserializeBinaryFromReader(message: ZKSwapProof, reader: jspb.BinaryReader): ZKSwapProof;
}

export namespace ZKSwapProof {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class ZKSwapClaimProof extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): ZKSwapClaimProof;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZKSwapClaimProof.AsObject;
    static toObject(includeInstance: boolean, msg: ZKSwapClaimProof): ZKSwapClaimProof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZKSwapClaimProof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZKSwapClaimProof;
    static deserializeBinaryFromReader(message: ZKSwapClaimProof, reader: jspb.BinaryReader): ZKSwapClaimProof;
}

export namespace ZKSwapClaimProof {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class Swap extends jspb.Message { 

    hasProof(): boolean;
    clearProof(): void;
    getProof(): ZKSwapProof | undefined;
    setProof(value?: ZKSwapProof): Swap;

    hasBody(): boolean;
    clearBody(): void;
    getBody(): SwapBody | undefined;
    setBody(value?: SwapBody): Swap;

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
        proof?: ZKSwapProof.AsObject,
        body?: SwapBody.AsObject,
    }
}

export class SwapClaim extends jspb.Message { 

    hasProof(): boolean;
    clearProof(): void;
    getProof(): ZKSwapClaimProof | undefined;
    setProof(value?: ZKSwapClaimProof): SwapClaim;

    hasBody(): boolean;
    clearBody(): void;
    getBody(): SwapClaimBody | undefined;
    setBody(value?: SwapClaimBody): SwapClaim;
    getEpochDuration(): number;
    setEpochDuration(value: number): SwapClaim;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapClaim.AsObject;
    static toObject(includeInstance: boolean, msg: SwapClaim): SwapClaim.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapClaim, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapClaim;
    static deserializeBinaryFromReader(message: SwapClaim, reader: jspb.BinaryReader): SwapClaim;
}

export namespace SwapClaim {
    export type AsObject = {
        proof?: ZKSwapClaimProof.AsObject,
        body?: SwapClaimBody.AsObject,
        epochDuration: number,
    }
}

export class SwapClaimBody extends jspb.Message { 

    hasNullifier(): boolean;
    clearNullifier(): void;
    getNullifier(): penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier | undefined;
    setNullifier(value?: penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier): SwapClaimBody;

    hasFee(): boolean;
    clearFee(): void;
    getFee(): penumbra_core_component_fee_v1alpha1_fee_pb.Fee | undefined;
    setFee(value?: penumbra_core_component_fee_v1alpha1_fee_pb.Fee): SwapClaimBody;

    hasOutput1Commitment(): boolean;
    clearOutput1Commitment(): void;
    getOutput1Commitment(): penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment | undefined;
    setOutput1Commitment(value?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment): SwapClaimBody;

    hasOutput2Commitment(): boolean;
    clearOutput2Commitment(): void;
    getOutput2Commitment(): penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment | undefined;
    setOutput2Commitment(value?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment): SwapClaimBody;

    hasOutputData(): boolean;
    clearOutputData(): void;
    getOutputData(): BatchSwapOutputData | undefined;
    setOutputData(value?: BatchSwapOutputData): SwapClaimBody;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapClaimBody.AsObject;
    static toObject(includeInstance: boolean, msg: SwapClaimBody): SwapClaimBody.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapClaimBody, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapClaimBody;
    static deserializeBinaryFromReader(message: SwapClaimBody, reader: jspb.BinaryReader): SwapClaimBody;
}

export namespace SwapClaimBody {
    export type AsObject = {
        nullifier?: penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.AsObject,
        fee?: penumbra_core_component_fee_v1alpha1_fee_pb.Fee.AsObject,
        output1Commitment?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.AsObject,
        output2Commitment?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.AsObject,
        outputData?: BatchSwapOutputData.AsObject,
    }
}

export class SwapBody extends jspb.Message { 

    hasTradingPair(): boolean;
    clearTradingPair(): void;
    getTradingPair(): TradingPair | undefined;
    setTradingPair(value?: TradingPair): SwapBody;

    hasDelta1I(): boolean;
    clearDelta1I(): void;
    getDelta1I(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setDelta1I(value?: penumbra_core_num_v1alpha1_num_pb.Amount): SwapBody;

    hasDelta2I(): boolean;
    clearDelta2I(): void;
    getDelta2I(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setDelta2I(value?: penumbra_core_num_v1alpha1_num_pb.Amount): SwapBody;

    hasFeeCommitment(): boolean;
    clearFeeCommitment(): void;
    getFeeCommitment(): penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment | undefined;
    setFeeCommitment(value?: penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment): SwapBody;

    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): SwapPayload | undefined;
    setPayload(value?: SwapPayload): SwapBody;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapBody.AsObject;
    static toObject(includeInstance: boolean, msg: SwapBody): SwapBody.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapBody, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapBody;
    static deserializeBinaryFromReader(message: SwapBody, reader: jspb.BinaryReader): SwapBody;
}

export namespace SwapBody {
    export type AsObject = {
        tradingPair?: TradingPair.AsObject,
        delta1I?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        delta2I?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        feeCommitment?: penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment.AsObject,
        payload?: SwapPayload.AsObject,
    }
}

export class SwapPayload extends jspb.Message { 

    hasCommitment(): boolean;
    clearCommitment(): void;
    getCommitment(): penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment | undefined;
    setCommitment(value?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment): SwapPayload;
    getEncryptedSwap(): Uint8Array | string;
    getEncryptedSwap_asU8(): Uint8Array;
    getEncryptedSwap_asB64(): string;
    setEncryptedSwap(value: Uint8Array | string): SwapPayload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapPayload.AsObject;
    static toObject(includeInstance: boolean, msg: SwapPayload): SwapPayload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapPayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapPayload;
    static deserializeBinaryFromReader(message: SwapPayload, reader: jspb.BinaryReader): SwapPayload;
}

export namespace SwapPayload {
    export type AsObject = {
        commitment?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.AsObject,
        encryptedSwap: Uint8Array | string,
    }
}

export class SwapPlaintext extends jspb.Message { 

    hasTradingPair(): boolean;
    clearTradingPair(): void;
    getTradingPair(): TradingPair | undefined;
    setTradingPair(value?: TradingPair): SwapPlaintext;

    hasDelta1I(): boolean;
    clearDelta1I(): void;
    getDelta1I(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setDelta1I(value?: penumbra_core_num_v1alpha1_num_pb.Amount): SwapPlaintext;

    hasDelta2I(): boolean;
    clearDelta2I(): void;
    getDelta2I(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setDelta2I(value?: penumbra_core_num_v1alpha1_num_pb.Amount): SwapPlaintext;

    hasClaimFee(): boolean;
    clearClaimFee(): void;
    getClaimFee(): penumbra_core_component_fee_v1alpha1_fee_pb.Fee | undefined;
    setClaimFee(value?: penumbra_core_component_fee_v1alpha1_fee_pb.Fee): SwapPlaintext;

    hasClaimAddress(): boolean;
    clearClaimAddress(): void;
    getClaimAddress(): penumbra_core_keys_v1alpha1_keys_pb.Address | undefined;
    setClaimAddress(value?: penumbra_core_keys_v1alpha1_keys_pb.Address): SwapPlaintext;
    getRseed(): Uint8Array | string;
    getRseed_asU8(): Uint8Array;
    getRseed_asB64(): string;
    setRseed(value: Uint8Array | string): SwapPlaintext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapPlaintext.AsObject;
    static toObject(includeInstance: boolean, msg: SwapPlaintext): SwapPlaintext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapPlaintext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapPlaintext;
    static deserializeBinaryFromReader(message: SwapPlaintext, reader: jspb.BinaryReader): SwapPlaintext;
}

export namespace SwapPlaintext {
    export type AsObject = {
        tradingPair?: TradingPair.AsObject,
        delta1I?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        delta2I?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        claimFee?: penumbra_core_component_fee_v1alpha1_fee_pb.Fee.AsObject,
        claimAddress?: penumbra_core_keys_v1alpha1_keys_pb.Address.AsObject,
        rseed: Uint8Array | string,
    }
}

export class SwapPlan extends jspb.Message { 

    hasSwapPlaintext(): boolean;
    clearSwapPlaintext(): void;
    getSwapPlaintext(): SwapPlaintext | undefined;
    setSwapPlaintext(value?: SwapPlaintext): SwapPlan;
    getFeeBlinding(): Uint8Array | string;
    getFeeBlinding_asU8(): Uint8Array;
    getFeeBlinding_asB64(): string;
    setFeeBlinding(value: Uint8Array | string): SwapPlan;
    getProofBlindingR(): Uint8Array | string;
    getProofBlindingR_asU8(): Uint8Array;
    getProofBlindingR_asB64(): string;
    setProofBlindingR(value: Uint8Array | string): SwapPlan;
    getProofBlindingS(): Uint8Array | string;
    getProofBlindingS_asU8(): Uint8Array;
    getProofBlindingS_asB64(): string;
    setProofBlindingS(value: Uint8Array | string): SwapPlan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapPlan.AsObject;
    static toObject(includeInstance: boolean, msg: SwapPlan): SwapPlan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapPlan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapPlan;
    static deserializeBinaryFromReader(message: SwapPlan, reader: jspb.BinaryReader): SwapPlan;
}

export namespace SwapPlan {
    export type AsObject = {
        swapPlaintext?: SwapPlaintext.AsObject,
        feeBlinding: Uint8Array | string,
        proofBlindingR: Uint8Array | string,
        proofBlindingS: Uint8Array | string,
    }
}

export class SwapClaimPlan extends jspb.Message { 

    hasSwapPlaintext(): boolean;
    clearSwapPlaintext(): void;
    getSwapPlaintext(): SwapPlaintext | undefined;
    setSwapPlaintext(value?: SwapPlaintext): SwapClaimPlan;
    getPosition(): number;
    setPosition(value: number): SwapClaimPlan;

    hasOutputData(): boolean;
    clearOutputData(): void;
    getOutputData(): BatchSwapOutputData | undefined;
    setOutputData(value?: BatchSwapOutputData): SwapClaimPlan;
    getEpochDuration(): number;
    setEpochDuration(value: number): SwapClaimPlan;
    getProofBlindingR(): Uint8Array | string;
    getProofBlindingR_asU8(): Uint8Array;
    getProofBlindingR_asB64(): string;
    setProofBlindingR(value: Uint8Array | string): SwapClaimPlan;
    getProofBlindingS(): Uint8Array | string;
    getProofBlindingS_asU8(): Uint8Array;
    getProofBlindingS_asB64(): string;
    setProofBlindingS(value: Uint8Array | string): SwapClaimPlan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapClaimPlan.AsObject;
    static toObject(includeInstance: boolean, msg: SwapClaimPlan): SwapClaimPlan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapClaimPlan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapClaimPlan;
    static deserializeBinaryFromReader(message: SwapClaimPlan, reader: jspb.BinaryReader): SwapClaimPlan;
}

export namespace SwapClaimPlan {
    export type AsObject = {
        swapPlaintext?: SwapPlaintext.AsObject,
        position: number,
        outputData?: BatchSwapOutputData.AsObject,
        epochDuration: number,
        proofBlindingR: Uint8Array | string,
        proofBlindingS: Uint8Array | string,
    }
}

export class SwapView extends jspb.Message { 

    hasVisible(): boolean;
    clearVisible(): void;
    getVisible(): SwapView.Visible | undefined;
    setVisible(value?: SwapView.Visible): SwapView;

    hasOpaque(): boolean;
    clearOpaque(): void;
    getOpaque(): SwapView.Opaque | undefined;
    setOpaque(value?: SwapView.Opaque): SwapView;

    getSwapViewCase(): SwapView.SwapViewCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapView.AsObject;
    static toObject(includeInstance: boolean, msg: SwapView): SwapView.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapView, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapView;
    static deserializeBinaryFromReader(message: SwapView, reader: jspb.BinaryReader): SwapView;
}

export namespace SwapView {
    export type AsObject = {
        visible?: SwapView.Visible.AsObject,
        opaque?: SwapView.Opaque.AsObject,
    }


    export class Visible extends jspb.Message { 

        hasSwap(): boolean;
        clearSwap(): void;
        getSwap(): Swap | undefined;
        setSwap(value?: Swap): Visible;

        hasSwapPlaintext(): boolean;
        clearSwapPlaintext(): void;
        getSwapPlaintext(): SwapPlaintext | undefined;
        setSwapPlaintext(value?: SwapPlaintext): Visible;

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
            swap?: Swap.AsObject,
            swapPlaintext?: SwapPlaintext.AsObject,
        }
    }

    export class Opaque extends jspb.Message { 

        hasSwap(): boolean;
        clearSwap(): void;
        getSwap(): Swap | undefined;
        setSwap(value?: Swap): Opaque;

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
            swap?: Swap.AsObject,
        }
    }


    export enum SwapViewCase {
        SWAP_VIEW_NOT_SET = 0,
        VISIBLE = 1,
        OPAQUE = 2,
    }

}

export class SwapClaimView extends jspb.Message { 

    hasVisible(): boolean;
    clearVisible(): void;
    getVisible(): SwapClaimView.Visible | undefined;
    setVisible(value?: SwapClaimView.Visible): SwapClaimView;

    hasOpaque(): boolean;
    clearOpaque(): void;
    getOpaque(): SwapClaimView.Opaque | undefined;
    setOpaque(value?: SwapClaimView.Opaque): SwapClaimView;

    getSwapClaimViewCase(): SwapClaimView.SwapClaimViewCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapClaimView.AsObject;
    static toObject(includeInstance: boolean, msg: SwapClaimView): SwapClaimView.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapClaimView, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapClaimView;
    static deserializeBinaryFromReader(message: SwapClaimView, reader: jspb.BinaryReader): SwapClaimView;
}

export namespace SwapClaimView {
    export type AsObject = {
        visible?: SwapClaimView.Visible.AsObject,
        opaque?: SwapClaimView.Opaque.AsObject,
    }


    export class Visible extends jspb.Message { 

        hasSwapClaim(): boolean;
        clearSwapClaim(): void;
        getSwapClaim(): SwapClaim | undefined;
        setSwapClaim(value?: SwapClaim): Visible;

        hasOutput1(): boolean;
        clearOutput1(): void;
        getOutput1(): penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView | undefined;
        setOutput1(value?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView): Visible;

        hasOutput2(): boolean;
        clearOutput2(): void;
        getOutput2(): penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView | undefined;
        setOutput2(value?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView): Visible;

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
            swapClaim?: SwapClaim.AsObject,
            output1?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView.AsObject,
            output2?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView.AsObject,
        }
    }

    export class Opaque extends jspb.Message { 

        hasSwapClaim(): boolean;
        clearSwapClaim(): void;
        getSwapClaim(): SwapClaim | undefined;
        setSwapClaim(value?: SwapClaim): Opaque;

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
            swapClaim?: SwapClaim.AsObject,
        }
    }


    export enum SwapClaimViewCase {
        SWAP_CLAIM_VIEW_NOT_SET = 0,
        VISIBLE = 1,
        OPAQUE = 2,
    }

}

export class TradingPair extends jspb.Message { 

    hasAsset1(): boolean;
    clearAsset1(): void;
    getAsset1(): penumbra_core_asset_v1alpha1_asset_pb.AssetId | undefined;
    setAsset1(value?: penumbra_core_asset_v1alpha1_asset_pb.AssetId): TradingPair;

    hasAsset2(): boolean;
    clearAsset2(): void;
    getAsset2(): penumbra_core_asset_v1alpha1_asset_pb.AssetId | undefined;
    setAsset2(value?: penumbra_core_asset_v1alpha1_asset_pb.AssetId): TradingPair;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradingPair.AsObject;
    static toObject(includeInstance: boolean, msg: TradingPair): TradingPair.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradingPair, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradingPair;
    static deserializeBinaryFromReader(message: TradingPair, reader: jspb.BinaryReader): TradingPair;
}

export namespace TradingPair {
    export type AsObject = {
        asset1?: penumbra_core_asset_v1alpha1_asset_pb.AssetId.AsObject,
        asset2?: penumbra_core_asset_v1alpha1_asset_pb.AssetId.AsObject,
    }
}

export class DirectedTradingPair extends jspb.Message { 

    hasStart(): boolean;
    clearStart(): void;
    getStart(): penumbra_core_asset_v1alpha1_asset_pb.AssetId | undefined;
    setStart(value?: penumbra_core_asset_v1alpha1_asset_pb.AssetId): DirectedTradingPair;

    hasEnd(): boolean;
    clearEnd(): void;
    getEnd(): penumbra_core_asset_v1alpha1_asset_pb.AssetId | undefined;
    setEnd(value?: penumbra_core_asset_v1alpha1_asset_pb.AssetId): DirectedTradingPair;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DirectedTradingPair.AsObject;
    static toObject(includeInstance: boolean, msg: DirectedTradingPair): DirectedTradingPair.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DirectedTradingPair, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DirectedTradingPair;
    static deserializeBinaryFromReader(message: DirectedTradingPair, reader: jspb.BinaryReader): DirectedTradingPair;
}

export namespace DirectedTradingPair {
    export type AsObject = {
        start?: penumbra_core_asset_v1alpha1_asset_pb.AssetId.AsObject,
        end?: penumbra_core_asset_v1alpha1_asset_pb.AssetId.AsObject,
    }
}

export class BatchSwapOutputData extends jspb.Message { 

    hasDelta1(): boolean;
    clearDelta1(): void;
    getDelta1(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setDelta1(value?: penumbra_core_num_v1alpha1_num_pb.Amount): BatchSwapOutputData;

    hasDelta2(): boolean;
    clearDelta2(): void;
    getDelta2(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setDelta2(value?: penumbra_core_num_v1alpha1_num_pb.Amount): BatchSwapOutputData;

    hasLambda1(): boolean;
    clearLambda1(): void;
    getLambda1(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setLambda1(value?: penumbra_core_num_v1alpha1_num_pb.Amount): BatchSwapOutputData;

    hasLambda2(): boolean;
    clearLambda2(): void;
    getLambda2(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setLambda2(value?: penumbra_core_num_v1alpha1_num_pb.Amount): BatchSwapOutputData;

    hasUnfilled1(): boolean;
    clearUnfilled1(): void;
    getUnfilled1(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setUnfilled1(value?: penumbra_core_num_v1alpha1_num_pb.Amount): BatchSwapOutputData;

    hasUnfilled2(): boolean;
    clearUnfilled2(): void;
    getUnfilled2(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setUnfilled2(value?: penumbra_core_num_v1alpha1_num_pb.Amount): BatchSwapOutputData;
    getHeight(): number;
    setHeight(value: number): BatchSwapOutputData;

    hasTradingPair(): boolean;
    clearTradingPair(): void;
    getTradingPair(): TradingPair | undefined;
    setTradingPair(value?: TradingPair): BatchSwapOutputData;
    getEpochStartingHeight(): number;
    setEpochStartingHeight(value: number): BatchSwapOutputData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchSwapOutputData.AsObject;
    static toObject(includeInstance: boolean, msg: BatchSwapOutputData): BatchSwapOutputData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchSwapOutputData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchSwapOutputData;
    static deserializeBinaryFromReader(message: BatchSwapOutputData, reader: jspb.BinaryReader): BatchSwapOutputData;
}

export namespace BatchSwapOutputData {
    export type AsObject = {
        delta1?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        delta2?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        lambda1?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        lambda2?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        unfilled1?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        unfilled2?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        height: number,
        tradingPair?: TradingPair.AsObject,
        epochStartingHeight: number,
    }
}

export class TradingFunction extends jspb.Message { 

    hasComponent(): boolean;
    clearComponent(): void;
    getComponent(): BareTradingFunction | undefined;
    setComponent(value?: BareTradingFunction): TradingFunction;

    hasPair(): boolean;
    clearPair(): void;
    getPair(): TradingPair | undefined;
    setPair(value?: TradingPair): TradingFunction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradingFunction.AsObject;
    static toObject(includeInstance: boolean, msg: TradingFunction): TradingFunction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradingFunction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradingFunction;
    static deserializeBinaryFromReader(message: TradingFunction, reader: jspb.BinaryReader): TradingFunction;
}

export namespace TradingFunction {
    export type AsObject = {
        component?: BareTradingFunction.AsObject,
        pair?: TradingPair.AsObject,
    }
}

export class BareTradingFunction extends jspb.Message { 
    getFee(): number;
    setFee(value: number): BareTradingFunction;

    hasP(): boolean;
    clearP(): void;
    getP(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setP(value?: penumbra_core_num_v1alpha1_num_pb.Amount): BareTradingFunction;

    hasQ(): boolean;
    clearQ(): void;
    getQ(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setQ(value?: penumbra_core_num_v1alpha1_num_pb.Amount): BareTradingFunction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BareTradingFunction.AsObject;
    static toObject(includeInstance: boolean, msg: BareTradingFunction): BareTradingFunction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BareTradingFunction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BareTradingFunction;
    static deserializeBinaryFromReader(message: BareTradingFunction, reader: jspb.BinaryReader): BareTradingFunction;
}

export namespace BareTradingFunction {
    export type AsObject = {
        fee: number,
        p?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        q?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
    }
}

export class Reserves extends jspb.Message { 

    hasR1(): boolean;
    clearR1(): void;
    getR1(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setR1(value?: penumbra_core_num_v1alpha1_num_pb.Amount): Reserves;

    hasR2(): boolean;
    clearR2(): void;
    getR2(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setR2(value?: penumbra_core_num_v1alpha1_num_pb.Amount): Reserves;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reserves.AsObject;
    static toObject(includeInstance: boolean, msg: Reserves): Reserves.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Reserves, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reserves;
    static deserializeBinaryFromReader(message: Reserves, reader: jspb.BinaryReader): Reserves;
}

export namespace Reserves {
    export type AsObject = {
        r1?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        r2?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
    }
}

export class Position extends jspb.Message { 

    hasPhi(): boolean;
    clearPhi(): void;
    getPhi(): TradingFunction | undefined;
    setPhi(value?: TradingFunction): Position;
    getNonce(): Uint8Array | string;
    getNonce_asU8(): Uint8Array;
    getNonce_asB64(): string;
    setNonce(value: Uint8Array | string): Position;

    hasState(): boolean;
    clearState(): void;
    getState(): PositionState | undefined;
    setState(value?: PositionState): Position;

    hasReserves(): boolean;
    clearReserves(): void;
    getReserves(): Reserves | undefined;
    setReserves(value?: Reserves): Position;
    getCloseOnFill(): boolean;
    setCloseOnFill(value: boolean): Position;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Position.AsObject;
    static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Position;
    static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
    export type AsObject = {
        phi?: TradingFunction.AsObject,
        nonce: Uint8Array | string,
        state?: PositionState.AsObject,
        reserves?: Reserves.AsObject,
        closeOnFill: boolean,
    }
}

export class PositionId extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): PositionId;
    getAltBech32m(): string;
    setAltBech32m(value: string): PositionId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionId.AsObject;
    static toObject(includeInstance: boolean, msg: PositionId): PositionId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionId;
    static deserializeBinaryFromReader(message: PositionId, reader: jspb.BinaryReader): PositionId;
}

export namespace PositionId {
    export type AsObject = {
        inner: Uint8Array | string,
        altBech32m: string,
    }
}

export class PositionState extends jspb.Message { 
    getState(): PositionState.PositionStateEnum;
    setState(value: PositionState.PositionStateEnum): PositionState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionState.AsObject;
    static toObject(includeInstance: boolean, msg: PositionState): PositionState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionState;
    static deserializeBinaryFromReader(message: PositionState, reader: jspb.BinaryReader): PositionState;
}

export namespace PositionState {
    export type AsObject = {
        state: PositionState.PositionStateEnum,
    }

    export enum PositionStateEnum {
    POSITION_STATE_ENUM_UNSPECIFIED = 0,
    POSITION_STATE_ENUM_OPENED = 1,
    POSITION_STATE_ENUM_CLOSED = 2,
    POSITION_STATE_ENUM_WITHDRAWN = 3,
    POSITION_STATE_ENUM_CLAIMED = 4,
    }

}

export class LpNft extends jspb.Message { 

    hasPositionId(): boolean;
    clearPositionId(): void;
    getPositionId(): PositionId | undefined;
    setPositionId(value?: PositionId): LpNft;

    hasState(): boolean;
    clearState(): void;
    getState(): PositionState | undefined;
    setState(value?: PositionState): LpNft;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LpNft.AsObject;
    static toObject(includeInstance: boolean, msg: LpNft): LpNft.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LpNft, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LpNft;
    static deserializeBinaryFromReader(message: LpNft, reader: jspb.BinaryReader): LpNft;
}

export namespace LpNft {
    export type AsObject = {
        positionId?: PositionId.AsObject,
        state?: PositionState.AsObject,
    }
}

export class PositionOpen extends jspb.Message { 

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): Position | undefined;
    setPosition(value?: Position): PositionOpen;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionOpen.AsObject;
    static toObject(includeInstance: boolean, msg: PositionOpen): PositionOpen.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionOpen, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionOpen;
    static deserializeBinaryFromReader(message: PositionOpen, reader: jspb.BinaryReader): PositionOpen;
}

export namespace PositionOpen {
    export type AsObject = {
        position?: Position.AsObject,
    }
}

export class PositionClose extends jspb.Message { 

    hasPositionId(): boolean;
    clearPositionId(): void;
    getPositionId(): PositionId | undefined;
    setPositionId(value?: PositionId): PositionClose;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionClose.AsObject;
    static toObject(includeInstance: boolean, msg: PositionClose): PositionClose.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionClose, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionClose;
    static deserializeBinaryFromReader(message: PositionClose, reader: jspb.BinaryReader): PositionClose;
}

export namespace PositionClose {
    export type AsObject = {
        positionId?: PositionId.AsObject,
    }
}

export class PositionWithdraw extends jspb.Message { 

    hasPositionId(): boolean;
    clearPositionId(): void;
    getPositionId(): PositionId | undefined;
    setPositionId(value?: PositionId): PositionWithdraw;

    hasReservesCommitment(): boolean;
    clearReservesCommitment(): void;
    getReservesCommitment(): penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment | undefined;
    setReservesCommitment(value?: penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment): PositionWithdraw;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionWithdraw.AsObject;
    static toObject(includeInstance: boolean, msg: PositionWithdraw): PositionWithdraw.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionWithdraw, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionWithdraw;
    static deserializeBinaryFromReader(message: PositionWithdraw, reader: jspb.BinaryReader): PositionWithdraw;
}

export namespace PositionWithdraw {
    export type AsObject = {
        positionId?: PositionId.AsObject,
        reservesCommitment?: penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment.AsObject,
    }
}

export class PositionRewardClaim extends jspb.Message { 

    hasPositionId(): boolean;
    clearPositionId(): void;
    getPositionId(): PositionId | undefined;
    setPositionId(value?: PositionId): PositionRewardClaim;

    hasRewardsCommitment(): boolean;
    clearRewardsCommitment(): void;
    getRewardsCommitment(): penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment | undefined;
    setRewardsCommitment(value?: penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment): PositionRewardClaim;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionRewardClaim.AsObject;
    static toObject(includeInstance: boolean, msg: PositionRewardClaim): PositionRewardClaim.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionRewardClaim, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionRewardClaim;
    static deserializeBinaryFromReader(message: PositionRewardClaim, reader: jspb.BinaryReader): PositionRewardClaim;
}

export namespace PositionRewardClaim {
    export type AsObject = {
        positionId?: PositionId.AsObject,
        rewardsCommitment?: penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment.AsObject,
    }
}

export class SwapExecution extends jspb.Message { 
    clearTracesList(): void;
    getTracesList(): Array<SwapExecution.Trace>;
    setTracesList(value: Array<SwapExecution.Trace>): SwapExecution;
    addTraces(value?: SwapExecution.Trace, index?: number): SwapExecution.Trace;

    hasInput(): boolean;
    clearInput(): void;
    getInput(): penumbra_core_asset_v1alpha1_asset_pb.Value | undefined;
    setInput(value?: penumbra_core_asset_v1alpha1_asset_pb.Value): SwapExecution;

    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): penumbra_core_asset_v1alpha1_asset_pb.Value | undefined;
    setOutput(value?: penumbra_core_asset_v1alpha1_asset_pb.Value): SwapExecution;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapExecution.AsObject;
    static toObject(includeInstance: boolean, msg: SwapExecution): SwapExecution.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapExecution, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapExecution;
    static deserializeBinaryFromReader(message: SwapExecution, reader: jspb.BinaryReader): SwapExecution;
}

export namespace SwapExecution {
    export type AsObject = {
        tracesList: Array<SwapExecution.Trace.AsObject>,
        input?: penumbra_core_asset_v1alpha1_asset_pb.Value.AsObject,
        output?: penumbra_core_asset_v1alpha1_asset_pb.Value.AsObject,
    }


    export class Trace extends jspb.Message { 
        clearValueList(): void;
        getValueList(): Array<penumbra_core_asset_v1alpha1_asset_pb.Value>;
        setValueList(value: Array<penumbra_core_asset_v1alpha1_asset_pb.Value>): Trace;
        addValue(value?: penumbra_core_asset_v1alpha1_asset_pb.Value, index?: number): penumbra_core_asset_v1alpha1_asset_pb.Value;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Trace.AsObject;
        static toObject(includeInstance: boolean, msg: Trace): Trace.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Trace, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Trace;
        static deserializeBinaryFromReader(message: Trace, reader: jspb.BinaryReader): Trace;
    }

    export namespace Trace {
        export type AsObject = {
            valueList: Array<penumbra_core_asset_v1alpha1_asset_pb.Value.AsObject>,
        }
    }

}

export class PositionWithdrawPlan extends jspb.Message { 

    hasReserves(): boolean;
    clearReserves(): void;
    getReserves(): Reserves | undefined;
    setReserves(value?: Reserves): PositionWithdrawPlan;

    hasPositionId(): boolean;
    clearPositionId(): void;
    getPositionId(): PositionId | undefined;
    setPositionId(value?: PositionId): PositionWithdrawPlan;

    hasPair(): boolean;
    clearPair(): void;
    getPair(): TradingPair | undefined;
    setPair(value?: TradingPair): PositionWithdrawPlan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionWithdrawPlan.AsObject;
    static toObject(includeInstance: boolean, msg: PositionWithdrawPlan): PositionWithdrawPlan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionWithdrawPlan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionWithdrawPlan;
    static deserializeBinaryFromReader(message: PositionWithdrawPlan, reader: jspb.BinaryReader): PositionWithdrawPlan;
}

export namespace PositionWithdrawPlan {
    export type AsObject = {
        reserves?: Reserves.AsObject,
        positionId?: PositionId.AsObject,
        pair?: TradingPair.AsObject,
    }
}

export class PositionRewardClaimPlan extends jspb.Message { 

    hasReserves(): boolean;
    clearReserves(): void;
    getReserves(): Reserves | undefined;
    setReserves(value?: Reserves): PositionRewardClaimPlan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionRewardClaimPlan.AsObject;
    static toObject(includeInstance: boolean, msg: PositionRewardClaimPlan): PositionRewardClaimPlan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionRewardClaimPlan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionRewardClaimPlan;
    static deserializeBinaryFromReader(message: PositionRewardClaimPlan, reader: jspb.BinaryReader): PositionRewardClaimPlan;
}

export namespace PositionRewardClaimPlan {
    export type AsObject = {
        reserves?: Reserves.AsObject,
    }
}

export class BatchSwapOutputDataRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): BatchSwapOutputDataRequest;
    getHeight(): number;
    setHeight(value: number): BatchSwapOutputDataRequest;

    hasTradingPair(): boolean;
    clearTradingPair(): void;
    getTradingPair(): TradingPair | undefined;
    setTradingPair(value?: TradingPair): BatchSwapOutputDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchSwapOutputDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchSwapOutputDataRequest): BatchSwapOutputDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchSwapOutputDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchSwapOutputDataRequest;
    static deserializeBinaryFromReader(message: BatchSwapOutputDataRequest, reader: jspb.BinaryReader): BatchSwapOutputDataRequest;
}

export namespace BatchSwapOutputDataRequest {
    export type AsObject = {
        chainId: string,
        height: number,
        tradingPair?: TradingPair.AsObject,
    }
}

export class BatchSwapOutputDataResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): BatchSwapOutputData | undefined;
    setData(value?: BatchSwapOutputData): BatchSwapOutputDataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchSwapOutputDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BatchSwapOutputDataResponse): BatchSwapOutputDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchSwapOutputDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchSwapOutputDataResponse;
    static deserializeBinaryFromReader(message: BatchSwapOutputDataResponse, reader: jspb.BinaryReader): BatchSwapOutputDataResponse;
}

export namespace BatchSwapOutputDataResponse {
    export type AsObject = {
        data?: BatchSwapOutputData.AsObject,
    }
}

export class SwapExecutionRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): SwapExecutionRequest;
    getHeight(): number;
    setHeight(value: number): SwapExecutionRequest;

    hasTradingPair(): boolean;
    clearTradingPair(): void;
    getTradingPair(): DirectedTradingPair | undefined;
    setTradingPair(value?: DirectedTradingPair): SwapExecutionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapExecutionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SwapExecutionRequest): SwapExecutionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapExecutionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapExecutionRequest;
    static deserializeBinaryFromReader(message: SwapExecutionRequest, reader: jspb.BinaryReader): SwapExecutionRequest;
}

export namespace SwapExecutionRequest {
    export type AsObject = {
        chainId: string,
        height: number,
        tradingPair?: DirectedTradingPair.AsObject,
    }
}

export class SwapExecutionResponse extends jspb.Message { 

    hasSwapExecution(): boolean;
    clearSwapExecution(): void;
    getSwapExecution(): SwapExecution | undefined;
    setSwapExecution(value?: SwapExecution): SwapExecutionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapExecutionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SwapExecutionResponse): SwapExecutionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapExecutionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapExecutionResponse;
    static deserializeBinaryFromReader(message: SwapExecutionResponse, reader: jspb.BinaryReader): SwapExecutionResponse;
}

export namespace SwapExecutionResponse {
    export type AsObject = {
        swapExecution?: SwapExecution.AsObject,
    }
}

export class ArbExecutionRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): ArbExecutionRequest;
    getHeight(): number;
    setHeight(value: number): ArbExecutionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArbExecutionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ArbExecutionRequest): ArbExecutionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArbExecutionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArbExecutionRequest;
    static deserializeBinaryFromReader(message: ArbExecutionRequest, reader: jspb.BinaryReader): ArbExecutionRequest;
}

export namespace ArbExecutionRequest {
    export type AsObject = {
        chainId: string,
        height: number,
    }
}

export class ArbExecutionResponse extends jspb.Message { 

    hasSwapExecution(): boolean;
    clearSwapExecution(): void;
    getSwapExecution(): SwapExecution | undefined;
    setSwapExecution(value?: SwapExecution): ArbExecutionResponse;
    getHeight(): number;
    setHeight(value: number): ArbExecutionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArbExecutionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ArbExecutionResponse): ArbExecutionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArbExecutionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArbExecutionResponse;
    static deserializeBinaryFromReader(message: ArbExecutionResponse, reader: jspb.BinaryReader): ArbExecutionResponse;
}

export namespace ArbExecutionResponse {
    export type AsObject = {
        swapExecution?: SwapExecution.AsObject,
        height: number,
    }
}

export class SwapExecutionsRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): SwapExecutionsRequest;
    getStartHeight(): number;
    setStartHeight(value: number): SwapExecutionsRequest;
    getEndHeight(): number;
    setEndHeight(value: number): SwapExecutionsRequest;

    hasTradingPair(): boolean;
    clearTradingPair(): void;
    getTradingPair(): DirectedTradingPair | undefined;
    setTradingPair(value?: DirectedTradingPair): SwapExecutionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapExecutionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SwapExecutionsRequest): SwapExecutionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapExecutionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapExecutionsRequest;
    static deserializeBinaryFromReader(message: SwapExecutionsRequest, reader: jspb.BinaryReader): SwapExecutionsRequest;
}

export namespace SwapExecutionsRequest {
    export type AsObject = {
        chainId: string,
        startHeight: number,
        endHeight: number,
        tradingPair?: DirectedTradingPair.AsObject,
    }
}

export class SwapExecutionsResponse extends jspb.Message { 

    hasSwapExecution(): boolean;
    clearSwapExecution(): void;
    getSwapExecution(): SwapExecution | undefined;
    setSwapExecution(value?: SwapExecution): SwapExecutionsResponse;
    getHeight(): number;
    setHeight(value: number): SwapExecutionsResponse;

    hasTradingPair(): boolean;
    clearTradingPair(): void;
    getTradingPair(): DirectedTradingPair | undefined;
    setTradingPair(value?: DirectedTradingPair): SwapExecutionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapExecutionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SwapExecutionsResponse): SwapExecutionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapExecutionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapExecutionsResponse;
    static deserializeBinaryFromReader(message: SwapExecutionsResponse, reader: jspb.BinaryReader): SwapExecutionsResponse;
}

export namespace SwapExecutionsResponse {
    export type AsObject = {
        swapExecution?: SwapExecution.AsObject,
        height: number,
        tradingPair?: DirectedTradingPair.AsObject,
    }
}

export class ArbExecutionsRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): ArbExecutionsRequest;
    getStartHeight(): number;
    setStartHeight(value: number): ArbExecutionsRequest;
    getEndHeight(): number;
    setEndHeight(value: number): ArbExecutionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArbExecutionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ArbExecutionsRequest): ArbExecutionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArbExecutionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArbExecutionsRequest;
    static deserializeBinaryFromReader(message: ArbExecutionsRequest, reader: jspb.BinaryReader): ArbExecutionsRequest;
}

export namespace ArbExecutionsRequest {
    export type AsObject = {
        chainId: string,
        startHeight: number,
        endHeight: number,
    }
}

export class ArbExecutionsResponse extends jspb.Message { 

    hasSwapExecution(): boolean;
    clearSwapExecution(): void;
    getSwapExecution(): SwapExecution | undefined;
    setSwapExecution(value?: SwapExecution): ArbExecutionsResponse;
    getHeight(): number;
    setHeight(value: number): ArbExecutionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArbExecutionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ArbExecutionsResponse): ArbExecutionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArbExecutionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArbExecutionsResponse;
    static deserializeBinaryFromReader(message: ArbExecutionsResponse, reader: jspb.BinaryReader): ArbExecutionsResponse;
}

export namespace ArbExecutionsResponse {
    export type AsObject = {
        swapExecution?: SwapExecution.AsObject,
        height: number,
    }
}

export class LiquidityPositionsRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): LiquidityPositionsRequest;
    getIncludeClosed(): boolean;
    setIncludeClosed(value: boolean): LiquidityPositionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityPositionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityPositionsRequest): LiquidityPositionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityPositionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityPositionsRequest;
    static deserializeBinaryFromReader(message: LiquidityPositionsRequest, reader: jspb.BinaryReader): LiquidityPositionsRequest;
}

export namespace LiquidityPositionsRequest {
    export type AsObject = {
        chainId: string,
        includeClosed: boolean,
    }
}

export class LiquidityPositionsResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Position | undefined;
    setData(value?: Position): LiquidityPositionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityPositionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityPositionsResponse): LiquidityPositionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityPositionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityPositionsResponse;
    static deserializeBinaryFromReader(message: LiquidityPositionsResponse, reader: jspb.BinaryReader): LiquidityPositionsResponse;
}

export namespace LiquidityPositionsResponse {
    export type AsObject = {
        data?: Position.AsObject,
    }
}

export class LiquidityPositionByIdRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): LiquidityPositionByIdRequest;

    hasPositionId(): boolean;
    clearPositionId(): void;
    getPositionId(): PositionId | undefined;
    setPositionId(value?: PositionId): LiquidityPositionByIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityPositionByIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityPositionByIdRequest): LiquidityPositionByIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityPositionByIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityPositionByIdRequest;
    static deserializeBinaryFromReader(message: LiquidityPositionByIdRequest, reader: jspb.BinaryReader): LiquidityPositionByIdRequest;
}

export namespace LiquidityPositionByIdRequest {
    export type AsObject = {
        chainId: string,
        positionId?: PositionId.AsObject,
    }
}

export class LiquidityPositionByIdResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Position | undefined;
    setData(value?: Position): LiquidityPositionByIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityPositionByIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityPositionByIdResponse): LiquidityPositionByIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityPositionByIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityPositionByIdResponse;
    static deserializeBinaryFromReader(message: LiquidityPositionByIdResponse, reader: jspb.BinaryReader): LiquidityPositionByIdResponse;
}

export namespace LiquidityPositionByIdResponse {
    export type AsObject = {
        data?: Position.AsObject,
    }
}

export class LiquidityPositionsByIdRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): LiquidityPositionsByIdRequest;
    clearPositionIdList(): void;
    getPositionIdList(): Array<PositionId>;
    setPositionIdList(value: Array<PositionId>): LiquidityPositionsByIdRequest;
    addPositionId(value?: PositionId, index?: number): PositionId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityPositionsByIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityPositionsByIdRequest): LiquidityPositionsByIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityPositionsByIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityPositionsByIdRequest;
    static deserializeBinaryFromReader(message: LiquidityPositionsByIdRequest, reader: jspb.BinaryReader): LiquidityPositionsByIdRequest;
}

export namespace LiquidityPositionsByIdRequest {
    export type AsObject = {
        chainId: string,
        positionIdList: Array<PositionId.AsObject>,
    }
}

export class LiquidityPositionsByIdResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Position | undefined;
    setData(value?: Position): LiquidityPositionsByIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityPositionsByIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityPositionsByIdResponse): LiquidityPositionsByIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityPositionsByIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityPositionsByIdResponse;
    static deserializeBinaryFromReader(message: LiquidityPositionsByIdResponse, reader: jspb.BinaryReader): LiquidityPositionsByIdResponse;
}

export namespace LiquidityPositionsByIdResponse {
    export type AsObject = {
        data?: Position.AsObject,
    }
}

export class LiquidityPositionsByPriceRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): LiquidityPositionsByPriceRequest;

    hasTradingPair(): boolean;
    clearTradingPair(): void;
    getTradingPair(): DirectedTradingPair | undefined;
    setTradingPair(value?: DirectedTradingPair): LiquidityPositionsByPriceRequest;
    getLimit(): number;
    setLimit(value: number): LiquidityPositionsByPriceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityPositionsByPriceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityPositionsByPriceRequest): LiquidityPositionsByPriceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityPositionsByPriceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityPositionsByPriceRequest;
    static deserializeBinaryFromReader(message: LiquidityPositionsByPriceRequest, reader: jspb.BinaryReader): LiquidityPositionsByPriceRequest;
}

export namespace LiquidityPositionsByPriceRequest {
    export type AsObject = {
        chainId: string,
        tradingPair?: DirectedTradingPair.AsObject,
        limit: number,
    }
}

export class LiquidityPositionsByPriceResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Position | undefined;
    setData(value?: Position): LiquidityPositionsByPriceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityPositionsByPriceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityPositionsByPriceResponse): LiquidityPositionsByPriceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityPositionsByPriceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityPositionsByPriceResponse;
    static deserializeBinaryFromReader(message: LiquidityPositionsByPriceResponse, reader: jspb.BinaryReader): LiquidityPositionsByPriceResponse;
}

export namespace LiquidityPositionsByPriceResponse {
    export type AsObject = {
        data?: Position.AsObject,
    }
}

export class SpreadRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): SpreadRequest;

    hasTradingPair(): boolean;
    clearTradingPair(): void;
    getTradingPair(): TradingPair | undefined;
    setTradingPair(value?: TradingPair): SpreadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpreadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SpreadRequest): SpreadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpreadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpreadRequest;
    static deserializeBinaryFromReader(message: SpreadRequest, reader: jspb.BinaryReader): SpreadRequest;
}

export namespace SpreadRequest {
    export type AsObject = {
        chainId: string,
        tradingPair?: TradingPair.AsObject,
    }
}

export class SpreadResponse extends jspb.Message { 

    hasBest1To2Position(): boolean;
    clearBest1To2Position(): void;
    getBest1To2Position(): Position | undefined;
    setBest1To2Position(value?: Position): SpreadResponse;

    hasBest2To1Position(): boolean;
    clearBest2To1Position(): void;
    getBest2To1Position(): Position | undefined;
    setBest2To1Position(value?: Position): SpreadResponse;
    getApproxEffectivePrice1To2(): number;
    setApproxEffectivePrice1To2(value: number): SpreadResponse;
    getApproxEffectivePrice2To1(): number;
    setApproxEffectivePrice2To1(value: number): SpreadResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpreadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SpreadResponse): SpreadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpreadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpreadResponse;
    static deserializeBinaryFromReader(message: SpreadResponse, reader: jspb.BinaryReader): SpreadResponse;
}

export namespace SpreadResponse {
    export type AsObject = {
        best1To2Position?: Position.AsObject,
        best2To1Position?: Position.AsObject,
        approxEffectivePrice1To2: number,
        approxEffectivePrice2To1: number,
    }
}

export class SimulateTradeRequest extends jspb.Message { 

    hasInput(): boolean;
    clearInput(): void;
    getInput(): penumbra_core_asset_v1alpha1_asset_pb.Value | undefined;
    setInput(value?: penumbra_core_asset_v1alpha1_asset_pb.Value): SimulateTradeRequest;

    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): penumbra_core_asset_v1alpha1_asset_pb.AssetId | undefined;
    setOutput(value?: penumbra_core_asset_v1alpha1_asset_pb.AssetId): SimulateTradeRequest;

    hasRouting(): boolean;
    clearRouting(): void;
    getRouting(): SimulateTradeRequest.Routing | undefined;
    setRouting(value?: SimulateTradeRequest.Routing): SimulateTradeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SimulateTradeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SimulateTradeRequest): SimulateTradeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SimulateTradeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SimulateTradeRequest;
    static deserializeBinaryFromReader(message: SimulateTradeRequest, reader: jspb.BinaryReader): SimulateTradeRequest;
}

export namespace SimulateTradeRequest {
    export type AsObject = {
        input?: penumbra_core_asset_v1alpha1_asset_pb.Value.AsObject,
        output?: penumbra_core_asset_v1alpha1_asset_pb.AssetId.AsObject,
        routing?: SimulateTradeRequest.Routing.AsObject,
    }


    export class Routing extends jspb.Message { 

        hasDefault(): boolean;
        clearDefault(): void;
        getDefault(): SimulateTradeRequest.Routing.Default | undefined;
        setDefault(value?: SimulateTradeRequest.Routing.Default): Routing;

        hasSingleHop(): boolean;
        clearSingleHop(): void;
        getSingleHop(): SimulateTradeRequest.Routing.SingleHop | undefined;
        setSingleHop(value?: SimulateTradeRequest.Routing.SingleHop): Routing;

        getSettingCase(): Routing.SettingCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Routing.AsObject;
        static toObject(includeInstance: boolean, msg: Routing): Routing.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Routing, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Routing;
        static deserializeBinaryFromReader(message: Routing, reader: jspb.BinaryReader): Routing;
    }

    export namespace Routing {
        export type AsObject = {
            pb_default?: SimulateTradeRequest.Routing.Default.AsObject,
            singleHop?: SimulateTradeRequest.Routing.SingleHop.AsObject,
        }


        export class SingleHop extends jspb.Message { 

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): SingleHop.AsObject;
            static toObject(includeInstance: boolean, msg: SingleHop): SingleHop.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: SingleHop, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): SingleHop;
            static deserializeBinaryFromReader(message: SingleHop, reader: jspb.BinaryReader): SingleHop;
        }

        export namespace SingleHop {
            export type AsObject = {
            }
        }

        export class Default extends jspb.Message { 

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Default.AsObject;
            static toObject(includeInstance: boolean, msg: Default): Default.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Default, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Default;
            static deserializeBinaryFromReader(message: Default, reader: jspb.BinaryReader): Default;
        }

        export namespace Default {
            export type AsObject = {
            }
        }


        export enum SettingCase {
            SETTING_NOT_SET = 0,
            DEFAULT = 1,
            SINGLE_HOP = 2,
        }

    }

}

export class SimulateTradeResponse extends jspb.Message { 

    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): SwapExecution | undefined;
    setOutput(value?: SwapExecution): SimulateTradeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SimulateTradeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SimulateTradeResponse): SimulateTradeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SimulateTradeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SimulateTradeResponse;
    static deserializeBinaryFromReader(message: SimulateTradeResponse, reader: jspb.BinaryReader): SimulateTradeResponse;
}

export namespace SimulateTradeResponse {
    export type AsObject = {
        output?: SwapExecution.AsObject,
    }
}
