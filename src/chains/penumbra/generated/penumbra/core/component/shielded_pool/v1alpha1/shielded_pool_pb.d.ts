// package: penumbra.core.component.shielded_pool.v1alpha1
// file: penumbra/core/component/shielded_pool/v1alpha1/shielded_pool.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as penumbra_crypto_tct_v1alpha1_tct_pb from "../../../../../penumbra/crypto/tct/v1alpha1/tct_pb";
import * as penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb from "../../../../../penumbra/crypto/decaf377_rdsa/v1alpha1/decaf377_rdsa_pb";
import * as penumbra_core_asset_v1alpha1_asset_pb from "../../../../../penumbra/core/asset/v1alpha1/asset_pb";
import * as penumbra_core_keys_v1alpha1_keys_pb from "../../../../../penumbra/core/keys/v1alpha1/keys_pb";
import * as penumbra_core_num_v1alpha1_num_pb from "../../../../../penumbra/core/num/v1alpha1/num_pb";

export class Note extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): penumbra_core_asset_v1alpha1_asset_pb.Value | undefined;
    setValue(value?: penumbra_core_asset_v1alpha1_asset_pb.Value): Note;
    getRseed(): Uint8Array | string;
    getRseed_asU8(): Uint8Array;
    getRseed_asB64(): string;
    setRseed(value: Uint8Array | string): Note;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): penumbra_core_keys_v1alpha1_keys_pb.Address | undefined;
    setAddress(value?: penumbra_core_keys_v1alpha1_keys_pb.Address): Note;

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
        value?: penumbra_core_asset_v1alpha1_asset_pb.Value.AsObject,
        rseed: Uint8Array | string,
        address?: penumbra_core_keys_v1alpha1_keys_pb.Address.AsObject,
    }
}

export class NoteView extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): penumbra_core_asset_v1alpha1_asset_pb.ValueView | undefined;
    setValue(value?: penumbra_core_asset_v1alpha1_asset_pb.ValueView): NoteView;
    getRseed(): Uint8Array | string;
    getRseed_asU8(): Uint8Array;
    getRseed_asB64(): string;
    setRseed(value: Uint8Array | string): NoteView;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): penumbra_core_keys_v1alpha1_keys_pb.AddressView | undefined;
    setAddress(value?: penumbra_core_keys_v1alpha1_keys_pb.AddressView): NoteView;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NoteView.AsObject;
    static toObject(includeInstance: boolean, msg: NoteView): NoteView.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NoteView, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NoteView;
    static deserializeBinaryFromReader(message: NoteView, reader: jspb.BinaryReader): NoteView;
}

export namespace NoteView {
    export type AsObject = {
        value?: penumbra_core_asset_v1alpha1_asset_pb.ValueView.AsObject,
        rseed: Uint8Array | string,
        address?: penumbra_core_keys_v1alpha1_keys_pb.AddressView.AsObject,
    }
}

export class NoteCiphertext extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): NoteCiphertext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NoteCiphertext.AsObject;
    static toObject(includeInstance: boolean, msg: NoteCiphertext): NoteCiphertext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NoteCiphertext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NoteCiphertext;
    static deserializeBinaryFromReader(message: NoteCiphertext, reader: jspb.BinaryReader): NoteCiphertext;
}

export namespace NoteCiphertext {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class NotePayload extends jspb.Message { 

    hasNoteCommitment(): boolean;
    clearNoteCommitment(): void;
    getNoteCommitment(): penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment | undefined;
    setNoteCommitment(value?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment): NotePayload;
    getEphemeralKey(): Uint8Array | string;
    getEphemeralKey_asU8(): Uint8Array;
    getEphemeralKey_asB64(): string;
    setEphemeralKey(value: Uint8Array | string): NotePayload;

    hasEncryptedNote(): boolean;
    clearEncryptedNote(): void;
    getEncryptedNote(): NoteCiphertext | undefined;
    setEncryptedNote(value?: NoteCiphertext): NotePayload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotePayload.AsObject;
    static toObject(includeInstance: boolean, msg: NotePayload): NotePayload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotePayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotePayload;
    static deserializeBinaryFromReader(message: NotePayload, reader: jspb.BinaryReader): NotePayload;
}

export namespace NotePayload {
    export type AsObject = {
        noteCommitment?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.AsObject,
        ephemeralKey: Uint8Array | string,
        encryptedNote?: NoteCiphertext.AsObject,
    }
}

export class ZKOutputProof extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): ZKOutputProof;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZKOutputProof.AsObject;
    static toObject(includeInstance: boolean, msg: ZKOutputProof): ZKOutputProof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZKOutputProof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZKOutputProof;
    static deserializeBinaryFromReader(message: ZKOutputProof, reader: jspb.BinaryReader): ZKOutputProof;
}

export namespace ZKOutputProof {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class ZKSpendProof extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): ZKSpendProof;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZKSpendProof.AsObject;
    static toObject(includeInstance: boolean, msg: ZKSpendProof): ZKSpendProof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZKSpendProof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZKSpendProof;
    static deserializeBinaryFromReader(message: ZKSpendProof, reader: jspb.BinaryReader): ZKSpendProof;
}

export namespace ZKSpendProof {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class ZKNullifierDerivationProof extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): ZKNullifierDerivationProof;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZKNullifierDerivationProof.AsObject;
    static toObject(includeInstance: boolean, msg: ZKNullifierDerivationProof): ZKNullifierDerivationProof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZKNullifierDerivationProof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZKNullifierDerivationProof;
    static deserializeBinaryFromReader(message: ZKNullifierDerivationProof, reader: jspb.BinaryReader): ZKNullifierDerivationProof;
}

export namespace ZKNullifierDerivationProof {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class Spend extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): SpendBody | undefined;
    setBody(value?: SpendBody): Spend;

    hasAuthSig(): boolean;
    clearAuthSig(): void;
    getAuthSig(): penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature | undefined;
    setAuthSig(value?: penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature): Spend;

    hasProof(): boolean;
    clearProof(): void;
    getProof(): ZKSpendProof | undefined;
    setProof(value?: ZKSpendProof): Spend;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Spend.AsObject;
    static toObject(includeInstance: boolean, msg: Spend): Spend.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Spend, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Spend;
    static deserializeBinaryFromReader(message: Spend, reader: jspb.BinaryReader): Spend;
}

export namespace Spend {
    export type AsObject = {
        body?: SpendBody.AsObject,
        authSig?: penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature.AsObject,
        proof?: ZKSpendProof.AsObject,
    }
}

export class SpendBody extends jspb.Message { 

    hasBalanceCommitment(): boolean;
    clearBalanceCommitment(): void;
    getBalanceCommitment(): penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment | undefined;
    setBalanceCommitment(value?: penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment): SpendBody;
    getNullifier(): Uint8Array | string;
    getNullifier_asU8(): Uint8Array;
    getNullifier_asB64(): string;
    setNullifier(value: Uint8Array | string): SpendBody;
    getRk(): Uint8Array | string;
    getRk_asU8(): Uint8Array;
    getRk_asB64(): string;
    setRk(value: Uint8Array | string): SpendBody;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpendBody.AsObject;
    static toObject(includeInstance: boolean, msg: SpendBody): SpendBody.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpendBody, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpendBody;
    static deserializeBinaryFromReader(message: SpendBody, reader: jspb.BinaryReader): SpendBody;
}

export namespace SpendBody {
    export type AsObject = {
        balanceCommitment?: penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment.AsObject,
        nullifier: Uint8Array | string,
        rk: Uint8Array | string,
    }
}

export class SpendView extends jspb.Message { 

    hasVisible(): boolean;
    clearVisible(): void;
    getVisible(): SpendView.Visible | undefined;
    setVisible(value?: SpendView.Visible): SpendView;

    hasOpaque(): boolean;
    clearOpaque(): void;
    getOpaque(): SpendView.Opaque | undefined;
    setOpaque(value?: SpendView.Opaque): SpendView;

    getSpendViewCase(): SpendView.SpendViewCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpendView.AsObject;
    static toObject(includeInstance: boolean, msg: SpendView): SpendView.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpendView, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpendView;
    static deserializeBinaryFromReader(message: SpendView, reader: jspb.BinaryReader): SpendView;
}

export namespace SpendView {
    export type AsObject = {
        visible?: SpendView.Visible.AsObject,
        opaque?: SpendView.Opaque.AsObject,
    }


    export class Visible extends jspb.Message { 

        hasSpend(): boolean;
        clearSpend(): void;
        getSpend(): Spend | undefined;
        setSpend(value?: Spend): Visible;

        hasNote(): boolean;
        clearNote(): void;
        getNote(): NoteView | undefined;
        setNote(value?: NoteView): Visible;

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
            spend?: Spend.AsObject,
            note?: NoteView.AsObject,
        }
    }

    export class Opaque extends jspb.Message { 

        hasSpend(): boolean;
        clearSpend(): void;
        getSpend(): Spend | undefined;
        setSpend(value?: Spend): Opaque;

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
            spend?: Spend.AsObject,
        }
    }


    export enum SpendViewCase {
        SPEND_VIEW_NOT_SET = 0,
        VISIBLE = 1,
        OPAQUE = 2,
    }

}

export class SpendPlan extends jspb.Message { 

    hasNote(): boolean;
    clearNote(): void;
    getNote(): Note | undefined;
    setNote(value?: Note): SpendPlan;
    getPosition(): number;
    setPosition(value: number): SpendPlan;
    getRandomizer(): Uint8Array | string;
    getRandomizer_asU8(): Uint8Array;
    getRandomizer_asB64(): string;
    setRandomizer(value: Uint8Array | string): SpendPlan;
    getValueBlinding(): Uint8Array | string;
    getValueBlinding_asU8(): Uint8Array;
    getValueBlinding_asB64(): string;
    setValueBlinding(value: Uint8Array | string): SpendPlan;
    getProofBlindingR(): Uint8Array | string;
    getProofBlindingR_asU8(): Uint8Array;
    getProofBlindingR_asB64(): string;
    setProofBlindingR(value: Uint8Array | string): SpendPlan;
    getProofBlindingS(): Uint8Array | string;
    getProofBlindingS_asU8(): Uint8Array;
    getProofBlindingS_asB64(): string;
    setProofBlindingS(value: Uint8Array | string): SpendPlan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpendPlan.AsObject;
    static toObject(includeInstance: boolean, msg: SpendPlan): SpendPlan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpendPlan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpendPlan;
    static deserializeBinaryFromReader(message: SpendPlan, reader: jspb.BinaryReader): SpendPlan;
}

export namespace SpendPlan {
    export type AsObject = {
        note?: Note.AsObject,
        position: number,
        randomizer: Uint8Array | string,
        valueBlinding: Uint8Array | string,
        proofBlindingR: Uint8Array | string,
        proofBlindingS: Uint8Array | string,
    }
}

export class Output extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): OutputBody | undefined;
    setBody(value?: OutputBody): Output;

    hasProof(): boolean;
    clearProof(): void;
    getProof(): ZKOutputProof | undefined;
    setProof(value?: ZKOutputProof): Output;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Output.AsObject;
    static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Output;
    static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
}

export namespace Output {
    export type AsObject = {
        body?: OutputBody.AsObject,
        proof?: ZKOutputProof.AsObject,
    }
}

export class OutputBody extends jspb.Message { 

    hasNotePayload(): boolean;
    clearNotePayload(): void;
    getNotePayload(): NotePayload | undefined;
    setNotePayload(value?: NotePayload): OutputBody;

    hasBalanceCommitment(): boolean;
    clearBalanceCommitment(): void;
    getBalanceCommitment(): penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment | undefined;
    setBalanceCommitment(value?: penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment): OutputBody;
    getWrappedMemoKey(): Uint8Array | string;
    getWrappedMemoKey_asU8(): Uint8Array;
    getWrappedMemoKey_asB64(): string;
    setWrappedMemoKey(value: Uint8Array | string): OutputBody;
    getOvkWrappedKey(): Uint8Array | string;
    getOvkWrappedKey_asU8(): Uint8Array;
    getOvkWrappedKey_asB64(): string;
    setOvkWrappedKey(value: Uint8Array | string): OutputBody;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputBody.AsObject;
    static toObject(includeInstance: boolean, msg: OutputBody): OutputBody.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputBody, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputBody;
    static deserializeBinaryFromReader(message: OutputBody, reader: jspb.BinaryReader): OutputBody;
}

export namespace OutputBody {
    export type AsObject = {
        notePayload?: NotePayload.AsObject,
        balanceCommitment?: penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment.AsObject,
        wrappedMemoKey: Uint8Array | string,
        ovkWrappedKey: Uint8Array | string,
    }
}

export class OutputView extends jspb.Message { 

    hasVisible(): boolean;
    clearVisible(): void;
    getVisible(): OutputView.Visible | undefined;
    setVisible(value?: OutputView.Visible): OutputView;

    hasOpaque(): boolean;
    clearOpaque(): void;
    getOpaque(): OutputView.Opaque | undefined;
    setOpaque(value?: OutputView.Opaque): OutputView;

    getOutputViewCase(): OutputView.OutputViewCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputView.AsObject;
    static toObject(includeInstance: boolean, msg: OutputView): OutputView.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputView, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputView;
    static deserializeBinaryFromReader(message: OutputView, reader: jspb.BinaryReader): OutputView;
}

export namespace OutputView {
    export type AsObject = {
        visible?: OutputView.Visible.AsObject,
        opaque?: OutputView.Opaque.AsObject,
    }


    export class Visible extends jspb.Message { 

        hasOutput(): boolean;
        clearOutput(): void;
        getOutput(): Output | undefined;
        setOutput(value?: Output): Visible;

        hasNote(): boolean;
        clearNote(): void;
        getNote(): NoteView | undefined;
        setNote(value?: NoteView): Visible;

        hasPayloadKey(): boolean;
        clearPayloadKey(): void;
        getPayloadKey(): penumbra_core_keys_v1alpha1_keys_pb.PayloadKey | undefined;
        setPayloadKey(value?: penumbra_core_keys_v1alpha1_keys_pb.PayloadKey): Visible;

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
            output?: Output.AsObject,
            note?: NoteView.AsObject,
            payloadKey?: penumbra_core_keys_v1alpha1_keys_pb.PayloadKey.AsObject,
        }
    }

    export class Opaque extends jspb.Message { 

        hasOutput(): boolean;
        clearOutput(): void;
        getOutput(): Output | undefined;
        setOutput(value?: Output): Opaque;

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
            output?: Output.AsObject,
        }
    }


    export enum OutputViewCase {
        OUTPUT_VIEW_NOT_SET = 0,
        VISIBLE = 1,
        OPAQUE = 2,
    }

}

export class OutputPlan extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): penumbra_core_asset_v1alpha1_asset_pb.Value | undefined;
    setValue(value?: penumbra_core_asset_v1alpha1_asset_pb.Value): OutputPlan;

    hasDestAddress(): boolean;
    clearDestAddress(): void;
    getDestAddress(): penumbra_core_keys_v1alpha1_keys_pb.Address | undefined;
    setDestAddress(value?: penumbra_core_keys_v1alpha1_keys_pb.Address): OutputPlan;
    getRseed(): Uint8Array | string;
    getRseed_asU8(): Uint8Array;
    getRseed_asB64(): string;
    setRseed(value: Uint8Array | string): OutputPlan;
    getValueBlinding(): Uint8Array | string;
    getValueBlinding_asU8(): Uint8Array;
    getValueBlinding_asB64(): string;
    setValueBlinding(value: Uint8Array | string): OutputPlan;
    getProofBlindingR(): Uint8Array | string;
    getProofBlindingR_asU8(): Uint8Array;
    getProofBlindingR_asB64(): string;
    setProofBlindingR(value: Uint8Array | string): OutputPlan;
    getProofBlindingS(): Uint8Array | string;
    getProofBlindingS_asU8(): Uint8Array;
    getProofBlindingS_asB64(): string;
    setProofBlindingS(value: Uint8Array | string): OutputPlan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputPlan.AsObject;
    static toObject(includeInstance: boolean, msg: OutputPlan): OutputPlan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputPlan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputPlan;
    static deserializeBinaryFromReader(message: OutputPlan, reader: jspb.BinaryReader): OutputPlan;
}

export namespace OutputPlan {
    export type AsObject = {
        value?: penumbra_core_asset_v1alpha1_asset_pb.Value.AsObject,
        destAddress?: penumbra_core_keys_v1alpha1_keys_pb.Address.AsObject,
        rseed: Uint8Array | string,
        valueBlinding: Uint8Array | string,
        proofBlindingR: Uint8Array | string,
        proofBlindingS: Uint8Array | string,
    }
}

export class DenomMetadataByIdRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): DenomMetadataByIdRequest;

    hasAssetId(): boolean;
    clearAssetId(): void;
    getAssetId(): penumbra_core_asset_v1alpha1_asset_pb.AssetId | undefined;
    setAssetId(value?: penumbra_core_asset_v1alpha1_asset_pb.AssetId): DenomMetadataByIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DenomMetadataByIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DenomMetadataByIdRequest): DenomMetadataByIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DenomMetadataByIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DenomMetadataByIdRequest;
    static deserializeBinaryFromReader(message: DenomMetadataByIdRequest, reader: jspb.BinaryReader): DenomMetadataByIdRequest;
}

export namespace DenomMetadataByIdRequest {
    export type AsObject = {
        chainId: string,
        assetId?: penumbra_core_asset_v1alpha1_asset_pb.AssetId.AsObject,
    }
}

export class DenomMetadataByIdResponse extends jspb.Message { 

    hasDenomMetadata(): boolean;
    clearDenomMetadata(): void;
    getDenomMetadata(): penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata | undefined;
    setDenomMetadata(value?: penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata): DenomMetadataByIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DenomMetadataByIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DenomMetadataByIdResponse): DenomMetadataByIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DenomMetadataByIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DenomMetadataByIdResponse;
    static deserializeBinaryFromReader(message: DenomMetadataByIdResponse, reader: jspb.BinaryReader): DenomMetadataByIdResponse;
}

export namespace DenomMetadataByIdResponse {
    export type AsObject = {
        denomMetadata?: penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata.AsObject,
    }
}

export class GenesisContent extends jspb.Message { 
    clearAllocationsList(): void;
    getAllocationsList(): Array<GenesisContent.Allocation>;
    setAllocationsList(value: Array<GenesisContent.Allocation>): GenesisContent;
    addAllocations(value?: GenesisContent.Allocation, index?: number): GenesisContent.Allocation;

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
        allocationsList: Array<GenesisContent.Allocation.AsObject>,
    }


    export class Allocation extends jspb.Message { 

        hasAmount(): boolean;
        clearAmount(): void;
        getAmount(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
        setAmount(value?: penumbra_core_num_v1alpha1_num_pb.Amount): Allocation;
        getDenom(): string;
        setDenom(value: string): Allocation;

        hasAddress(): boolean;
        clearAddress(): void;
        getAddress(): penumbra_core_keys_v1alpha1_keys_pb.Address | undefined;
        setAddress(value?: penumbra_core_keys_v1alpha1_keys_pb.Address): Allocation;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Allocation.AsObject;
        static toObject(includeInstance: boolean, msg: Allocation): Allocation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Allocation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Allocation;
        static deserializeBinaryFromReader(message: Allocation, reader: jspb.BinaryReader): Allocation;
    }

    export namespace Allocation {
        export type AsObject = {
            amount?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
            denom: string,
            address?: penumbra_core_keys_v1alpha1_keys_pb.Address.AsObject,
        }
    }

}
