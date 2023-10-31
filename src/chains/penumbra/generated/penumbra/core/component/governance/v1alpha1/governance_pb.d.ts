// package: penumbra.core.component.governance.v1alpha1
// file: penumbra/core/component/governance/v1alpha1/governance.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb from "../../../../../penumbra/crypto/decaf377_rdsa/v1alpha1/decaf377_rdsa_pb";
import * as penumbra_core_num_v1alpha1_num_pb from "../../../../../penumbra/core/num/v1alpha1/num_pb";
import * as penumbra_core_asset_v1alpha1_asset_pb from "../../../../../penumbra/core/asset/v1alpha1/asset_pb";
import * as penumbra_core_keys_v1alpha1_keys_pb from "../../../../../penumbra/core/keys/v1alpha1/keys_pb";
import * as penumbra_core_component_chain_v1alpha1_chain_pb from "../../../../../penumbra/core/component/chain/v1alpha1/chain_pb";
import * as penumbra_core_component_fee_v1alpha1_fee_pb from "../../../../../penumbra/core/component/fee/v1alpha1/fee_pb";
import * as penumbra_core_component_dao_v1alpha1_dao_pb from "../../../../../penumbra/core/component/dao/v1alpha1/dao_pb";
import * as penumbra_core_component_ibc_v1alpha1_ibc_pb from "../../../../../penumbra/core/component/ibc/v1alpha1/ibc_pb";
import * as penumbra_core_component_stake_v1alpha1_stake_pb from "../../../../../penumbra/core/component/stake/v1alpha1/stake_pb";
import * as penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb from "../../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb";

export class ZKDelegatorVoteProof extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): ZKDelegatorVoteProof;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZKDelegatorVoteProof.AsObject;
    static toObject(includeInstance: boolean, msg: ZKDelegatorVoteProof): ZKDelegatorVoteProof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZKDelegatorVoteProof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZKDelegatorVoteProof;
    static deserializeBinaryFromReader(message: ZKDelegatorVoteProof, reader: jspb.BinaryReader): ZKDelegatorVoteProof;
}

export namespace ZKDelegatorVoteProof {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class ProposalSubmit extends jspb.Message { 

    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): Proposal | undefined;
    setProposal(value?: Proposal): ProposalSubmit;

    hasDepositAmount(): boolean;
    clearDepositAmount(): void;
    getDepositAmount(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setDepositAmount(value?: penumbra_core_num_v1alpha1_num_pb.Amount): ProposalSubmit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProposalSubmit.AsObject;
    static toObject(includeInstance: boolean, msg: ProposalSubmit): ProposalSubmit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProposalSubmit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProposalSubmit;
    static deserializeBinaryFromReader(message: ProposalSubmit, reader: jspb.BinaryReader): ProposalSubmit;
}

export namespace ProposalSubmit {
    export type AsObject = {
        proposal?: Proposal.AsObject,
        depositAmount?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
    }
}

export class ProposalWithdraw extends jspb.Message { 
    getProposal(): number;
    setProposal(value: number): ProposalWithdraw;
    getReason(): string;
    setReason(value: string): ProposalWithdraw;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProposalWithdraw.AsObject;
    static toObject(includeInstance: boolean, msg: ProposalWithdraw): ProposalWithdraw.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProposalWithdraw, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProposalWithdraw;
    static deserializeBinaryFromReader(message: ProposalWithdraw, reader: jspb.BinaryReader): ProposalWithdraw;
}

export namespace ProposalWithdraw {
    export type AsObject = {
        proposal: number,
        reason: string,
    }
}

export class ProposalDepositClaim extends jspb.Message { 
    getProposal(): number;
    setProposal(value: number): ProposalDepositClaim;

    hasDepositAmount(): boolean;
    clearDepositAmount(): void;
    getDepositAmount(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setDepositAmount(value?: penumbra_core_num_v1alpha1_num_pb.Amount): ProposalDepositClaim;

    hasOutcome(): boolean;
    clearOutcome(): void;
    getOutcome(): ProposalOutcome | undefined;
    setOutcome(value?: ProposalOutcome): ProposalDepositClaim;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProposalDepositClaim.AsObject;
    static toObject(includeInstance: boolean, msg: ProposalDepositClaim): ProposalDepositClaim.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProposalDepositClaim, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProposalDepositClaim;
    static deserializeBinaryFromReader(message: ProposalDepositClaim, reader: jspb.BinaryReader): ProposalDepositClaim;
}

export namespace ProposalDepositClaim {
    export type AsObject = {
        proposal: number,
        depositAmount?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        outcome?: ProposalOutcome.AsObject,
    }
}

export class ValidatorVote extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): ValidatorVoteBody | undefined;
    setBody(value?: ValidatorVoteBody): ValidatorVote;

    hasAuthSig(): boolean;
    clearAuthSig(): void;
    getAuthSig(): penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature | undefined;
    setAuthSig(value?: penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature): ValidatorVote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorVote.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorVote): ValidatorVote.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorVote, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorVote;
    static deserializeBinaryFromReader(message: ValidatorVote, reader: jspb.BinaryReader): ValidatorVote;
}

export namespace ValidatorVote {
    export type AsObject = {
        body?: ValidatorVoteBody.AsObject,
        authSig?: penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature.AsObject,
    }
}

export class ValidatorVoteReason extends jspb.Message { 
    getReason(): string;
    setReason(value: string): ValidatorVoteReason;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorVoteReason.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorVoteReason): ValidatorVoteReason.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorVoteReason, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorVoteReason;
    static deserializeBinaryFromReader(message: ValidatorVoteReason, reader: jspb.BinaryReader): ValidatorVoteReason;
}

export namespace ValidatorVoteReason {
    export type AsObject = {
        reason: string,
    }
}

export class ValidatorVoteBody extends jspb.Message { 
    getProposal(): number;
    setProposal(value: number): ValidatorVoteBody;

    hasVote(): boolean;
    clearVote(): void;
    getVote(): Vote | undefined;
    setVote(value?: Vote): ValidatorVoteBody;

    hasIdentityKey(): boolean;
    clearIdentityKey(): void;
    getIdentityKey(): penumbra_core_keys_v1alpha1_keys_pb.IdentityKey | undefined;
    setIdentityKey(value?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey): ValidatorVoteBody;

    hasGovernanceKey(): boolean;
    clearGovernanceKey(): void;
    getGovernanceKey(): penumbra_core_keys_v1alpha1_keys_pb.GovernanceKey | undefined;
    setGovernanceKey(value?: penumbra_core_keys_v1alpha1_keys_pb.GovernanceKey): ValidatorVoteBody;

    hasReason(): boolean;
    clearReason(): void;
    getReason(): ValidatorVoteReason | undefined;
    setReason(value?: ValidatorVoteReason): ValidatorVoteBody;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorVoteBody.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorVoteBody): ValidatorVoteBody.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorVoteBody, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorVoteBody;
    static deserializeBinaryFromReader(message: ValidatorVoteBody, reader: jspb.BinaryReader): ValidatorVoteBody;
}

export namespace ValidatorVoteBody {
    export type AsObject = {
        proposal: number,
        vote?: Vote.AsObject,
        identityKey?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.AsObject,
        governanceKey?: penumbra_core_keys_v1alpha1_keys_pb.GovernanceKey.AsObject,
        reason?: ValidatorVoteReason.AsObject,
    }
}

export class DelegatorVote extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): DelegatorVoteBody | undefined;
    setBody(value?: DelegatorVoteBody): DelegatorVote;

    hasAuthSig(): boolean;
    clearAuthSig(): void;
    getAuthSig(): penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature | undefined;
    setAuthSig(value?: penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature): DelegatorVote;

    hasProof(): boolean;
    clearProof(): void;
    getProof(): ZKDelegatorVoteProof | undefined;
    setProof(value?: ZKDelegatorVoteProof): DelegatorVote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelegatorVote.AsObject;
    static toObject(includeInstance: boolean, msg: DelegatorVote): DelegatorVote.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelegatorVote, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelegatorVote;
    static deserializeBinaryFromReader(message: DelegatorVote, reader: jspb.BinaryReader): DelegatorVote;
}

export namespace DelegatorVote {
    export type AsObject = {
        body?: DelegatorVoteBody.AsObject,
        authSig?: penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature.AsObject,
        proof?: ZKDelegatorVoteProof.AsObject,
    }
}

export class DelegatorVoteBody extends jspb.Message { 
    getProposal(): number;
    setProposal(value: number): DelegatorVoteBody;
    getStartPosition(): number;
    setStartPosition(value: number): DelegatorVoteBody;

    hasVote(): boolean;
    clearVote(): void;
    getVote(): Vote | undefined;
    setVote(value?: Vote): DelegatorVoteBody;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): penumbra_core_asset_v1alpha1_asset_pb.Value | undefined;
    setValue(value?: penumbra_core_asset_v1alpha1_asset_pb.Value): DelegatorVoteBody;

    hasUnbondedAmount(): boolean;
    clearUnbondedAmount(): void;
    getUnbondedAmount(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setUnbondedAmount(value?: penumbra_core_num_v1alpha1_num_pb.Amount): DelegatorVoteBody;
    getNullifier(): Uint8Array | string;
    getNullifier_asU8(): Uint8Array;
    getNullifier_asB64(): string;
    setNullifier(value: Uint8Array | string): DelegatorVoteBody;
    getRk(): Uint8Array | string;
    getRk_asU8(): Uint8Array;
    getRk_asB64(): string;
    setRk(value: Uint8Array | string): DelegatorVoteBody;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelegatorVoteBody.AsObject;
    static toObject(includeInstance: boolean, msg: DelegatorVoteBody): DelegatorVoteBody.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelegatorVoteBody, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelegatorVoteBody;
    static deserializeBinaryFromReader(message: DelegatorVoteBody, reader: jspb.BinaryReader): DelegatorVoteBody;
}

export namespace DelegatorVoteBody {
    export type AsObject = {
        proposal: number,
        startPosition: number,
        vote?: Vote.AsObject,
        value?: penumbra_core_asset_v1alpha1_asset_pb.Value.AsObject,
        unbondedAmount?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        nullifier: Uint8Array | string,
        rk: Uint8Array | string,
    }
}

export class DelegatorVoteView extends jspb.Message { 

    hasVisible(): boolean;
    clearVisible(): void;
    getVisible(): DelegatorVoteView.Visible | undefined;
    setVisible(value?: DelegatorVoteView.Visible): DelegatorVoteView;

    hasOpaque(): boolean;
    clearOpaque(): void;
    getOpaque(): DelegatorVoteView.Opaque | undefined;
    setOpaque(value?: DelegatorVoteView.Opaque): DelegatorVoteView;

    getDelegatorVoteCase(): DelegatorVoteView.DelegatorVoteCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelegatorVoteView.AsObject;
    static toObject(includeInstance: boolean, msg: DelegatorVoteView): DelegatorVoteView.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelegatorVoteView, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelegatorVoteView;
    static deserializeBinaryFromReader(message: DelegatorVoteView, reader: jspb.BinaryReader): DelegatorVoteView;
}

export namespace DelegatorVoteView {
    export type AsObject = {
        visible?: DelegatorVoteView.Visible.AsObject,
        opaque?: DelegatorVoteView.Opaque.AsObject,
    }


    export class Visible extends jspb.Message { 

        hasDelegatorVote(): boolean;
        clearDelegatorVote(): void;
        getDelegatorVote(): DelegatorVote | undefined;
        setDelegatorVote(value?: DelegatorVote): Visible;

        hasNote(): boolean;
        clearNote(): void;
        getNote(): penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView | undefined;
        setNote(value?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView): Visible;

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
            delegatorVote?: DelegatorVote.AsObject,
            note?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView.AsObject,
        }
    }

    export class Opaque extends jspb.Message { 

        hasDelegatorVote(): boolean;
        clearDelegatorVote(): void;
        getDelegatorVote(): DelegatorVote | undefined;
        setDelegatorVote(value?: DelegatorVote): Opaque;

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
            delegatorVote?: DelegatorVote.AsObject,
        }
    }


    export enum DelegatorVoteCase {
        DELEGATOR_VOTE_NOT_SET = 0,
        VISIBLE = 1,
        OPAQUE = 2,
    }

}

export class DelegatorVotePlan extends jspb.Message { 
    getProposal(): number;
    setProposal(value: number): DelegatorVotePlan;
    getStartPosition(): number;
    setStartPosition(value: number): DelegatorVotePlan;

    hasVote(): boolean;
    clearVote(): void;
    getVote(): Vote | undefined;
    setVote(value?: Vote): DelegatorVotePlan;

    hasStakedNote(): boolean;
    clearStakedNote(): void;
    getStakedNote(): penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note | undefined;
    setStakedNote(value?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note): DelegatorVotePlan;
    getStakedNotePosition(): number;
    setStakedNotePosition(value: number): DelegatorVotePlan;

    hasUnbondedAmount(): boolean;
    clearUnbondedAmount(): void;
    getUnbondedAmount(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setUnbondedAmount(value?: penumbra_core_num_v1alpha1_num_pb.Amount): DelegatorVotePlan;
    getRandomizer(): Uint8Array | string;
    getRandomizer_asU8(): Uint8Array;
    getRandomizer_asB64(): string;
    setRandomizer(value: Uint8Array | string): DelegatorVotePlan;
    getProofBlindingR(): Uint8Array | string;
    getProofBlindingR_asU8(): Uint8Array;
    getProofBlindingR_asB64(): string;
    setProofBlindingR(value: Uint8Array | string): DelegatorVotePlan;
    getProofBlindingS(): Uint8Array | string;
    getProofBlindingS_asU8(): Uint8Array;
    getProofBlindingS_asB64(): string;
    setProofBlindingS(value: Uint8Array | string): DelegatorVotePlan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelegatorVotePlan.AsObject;
    static toObject(includeInstance: boolean, msg: DelegatorVotePlan): DelegatorVotePlan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelegatorVotePlan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelegatorVotePlan;
    static deserializeBinaryFromReader(message: DelegatorVotePlan, reader: jspb.BinaryReader): DelegatorVotePlan;
}

export namespace DelegatorVotePlan {
    export type AsObject = {
        proposal: number,
        startPosition: number,
        vote?: Vote.AsObject,
        stakedNote?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note.AsObject,
        stakedNotePosition: number,
        unbondedAmount?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        randomizer: Uint8Array | string,
        proofBlindingR: Uint8Array | string,
        proofBlindingS: Uint8Array | string,
    }
}

export class DaoDeposit extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): penumbra_core_asset_v1alpha1_asset_pb.Value | undefined;
    setValue(value?: penumbra_core_asset_v1alpha1_asset_pb.Value): DaoDeposit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DaoDeposit.AsObject;
    static toObject(includeInstance: boolean, msg: DaoDeposit): DaoDeposit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DaoDeposit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DaoDeposit;
    static deserializeBinaryFromReader(message: DaoDeposit, reader: jspb.BinaryReader): DaoDeposit;
}

export namespace DaoDeposit {
    export type AsObject = {
        value?: penumbra_core_asset_v1alpha1_asset_pb.Value.AsObject,
    }
}

export class DaoSpend extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): penumbra_core_asset_v1alpha1_asset_pb.Value | undefined;
    setValue(value?: penumbra_core_asset_v1alpha1_asset_pb.Value): DaoSpend;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DaoSpend.AsObject;
    static toObject(includeInstance: boolean, msg: DaoSpend): DaoSpend.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DaoSpend, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DaoSpend;
    static deserializeBinaryFromReader(message: DaoSpend, reader: jspb.BinaryReader): DaoSpend;
}

export namespace DaoSpend {
    export type AsObject = {
        value?: penumbra_core_asset_v1alpha1_asset_pb.Value.AsObject,
    }
}

export class DaoOutput extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): penumbra_core_asset_v1alpha1_asset_pb.Value | undefined;
    setValue(value?: penumbra_core_asset_v1alpha1_asset_pb.Value): DaoOutput;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): penumbra_core_keys_v1alpha1_keys_pb.Address | undefined;
    setAddress(value?: penumbra_core_keys_v1alpha1_keys_pb.Address): DaoOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DaoOutput.AsObject;
    static toObject(includeInstance: boolean, msg: DaoOutput): DaoOutput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DaoOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DaoOutput;
    static deserializeBinaryFromReader(message: DaoOutput, reader: jspb.BinaryReader): DaoOutput;
}

export namespace DaoOutput {
    export type AsObject = {
        value?: penumbra_core_asset_v1alpha1_asset_pb.Value.AsObject,
        address?: penumbra_core_keys_v1alpha1_keys_pb.Address.AsObject,
    }
}

export class Vote extends jspb.Message { 
    getVote(): Vote.Vote;
    setVote(value: Vote.Vote): Vote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Vote.AsObject;
    static toObject(includeInstance: boolean, msg: Vote): Vote.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Vote, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Vote;
    static deserializeBinaryFromReader(message: Vote, reader: jspb.BinaryReader): Vote;
}

export namespace Vote {
    export type AsObject = {
        vote: Vote.Vote,
    }

    export enum Vote {
    VOTE_UNSPECIFIED = 0,
    VOTE_ABSTAIN = 1,
    VOTE_YES = 2,
    VOTE_NO = 3,
    }

}

export class ProposalState extends jspb.Message { 

    hasVoting(): boolean;
    clearVoting(): void;
    getVoting(): ProposalState.Voting | undefined;
    setVoting(value?: ProposalState.Voting): ProposalState;

    hasWithdrawn(): boolean;
    clearWithdrawn(): void;
    getWithdrawn(): ProposalState.Withdrawn | undefined;
    setWithdrawn(value?: ProposalState.Withdrawn): ProposalState;

    hasFinished(): boolean;
    clearFinished(): void;
    getFinished(): ProposalState.Finished | undefined;
    setFinished(value?: ProposalState.Finished): ProposalState;

    hasClaimed(): boolean;
    clearClaimed(): void;
    getClaimed(): ProposalState.Claimed | undefined;
    setClaimed(value?: ProposalState.Claimed): ProposalState;

    getStateCase(): ProposalState.StateCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProposalState.AsObject;
    static toObject(includeInstance: boolean, msg: ProposalState): ProposalState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProposalState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProposalState;
    static deserializeBinaryFromReader(message: ProposalState, reader: jspb.BinaryReader): ProposalState;
}

export namespace ProposalState {
    export type AsObject = {
        voting?: ProposalState.Voting.AsObject,
        withdrawn?: ProposalState.Withdrawn.AsObject,
        finished?: ProposalState.Finished.AsObject,
        claimed?: ProposalState.Claimed.AsObject,
    }


    export class Voting extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Voting.AsObject;
        static toObject(includeInstance: boolean, msg: Voting): Voting.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Voting, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Voting;
        static deserializeBinaryFromReader(message: Voting, reader: jspb.BinaryReader): Voting;
    }

    export namespace Voting {
        export type AsObject = {
        }
    }

    export class Withdrawn extends jspb.Message { 
        getReason(): string;
        setReason(value: string): Withdrawn;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Withdrawn.AsObject;
        static toObject(includeInstance: boolean, msg: Withdrawn): Withdrawn.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Withdrawn, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Withdrawn;
        static deserializeBinaryFromReader(message: Withdrawn, reader: jspb.BinaryReader): Withdrawn;
    }

    export namespace Withdrawn {
        export type AsObject = {
            reason: string,
        }
    }

    export class Finished extends jspb.Message { 

        hasOutcome(): boolean;
        clearOutcome(): void;
        getOutcome(): ProposalOutcome | undefined;
        setOutcome(value?: ProposalOutcome): Finished;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Finished.AsObject;
        static toObject(includeInstance: boolean, msg: Finished): Finished.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Finished, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Finished;
        static deserializeBinaryFromReader(message: Finished, reader: jspb.BinaryReader): Finished;
    }

    export namespace Finished {
        export type AsObject = {
            outcome?: ProposalOutcome.AsObject,
        }
    }

    export class Claimed extends jspb.Message { 

        hasOutcome(): boolean;
        clearOutcome(): void;
        getOutcome(): ProposalOutcome | undefined;
        setOutcome(value?: ProposalOutcome): Claimed;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Claimed.AsObject;
        static toObject(includeInstance: boolean, msg: Claimed): Claimed.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Claimed, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Claimed;
        static deserializeBinaryFromReader(message: Claimed, reader: jspb.BinaryReader): Claimed;
    }

    export namespace Claimed {
        export type AsObject = {
            outcome?: ProposalOutcome.AsObject,
        }
    }


    export enum StateCase {
        STATE_NOT_SET = 0,
        VOTING = 2,
        WITHDRAWN = 3,
        FINISHED = 4,
        CLAIMED = 5,
    }

}

export class ProposalOutcome extends jspb.Message { 

    hasPassed(): boolean;
    clearPassed(): void;
    getPassed(): ProposalOutcome.Passed | undefined;
    setPassed(value?: ProposalOutcome.Passed): ProposalOutcome;

    hasFailed(): boolean;
    clearFailed(): void;
    getFailed(): ProposalOutcome.Failed | undefined;
    setFailed(value?: ProposalOutcome.Failed): ProposalOutcome;

    hasSlashed(): boolean;
    clearSlashed(): void;
    getSlashed(): ProposalOutcome.Slashed | undefined;
    setSlashed(value?: ProposalOutcome.Slashed): ProposalOutcome;

    getOutcomeCase(): ProposalOutcome.OutcomeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProposalOutcome.AsObject;
    static toObject(includeInstance: boolean, msg: ProposalOutcome): ProposalOutcome.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProposalOutcome, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProposalOutcome;
    static deserializeBinaryFromReader(message: ProposalOutcome, reader: jspb.BinaryReader): ProposalOutcome;
}

export namespace ProposalOutcome {
    export type AsObject = {
        passed?: ProposalOutcome.Passed.AsObject,
        failed?: ProposalOutcome.Failed.AsObject,
        slashed?: ProposalOutcome.Slashed.AsObject,
    }


    export class Withdrawn extends jspb.Message { 
        getReason(): string;
        setReason(value: string): Withdrawn;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Withdrawn.AsObject;
        static toObject(includeInstance: boolean, msg: Withdrawn): Withdrawn.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Withdrawn, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Withdrawn;
        static deserializeBinaryFromReader(message: Withdrawn, reader: jspb.BinaryReader): Withdrawn;
    }

    export namespace Withdrawn {
        export type AsObject = {
            reason: string,
        }
    }

    export class Passed extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Passed.AsObject;
        static toObject(includeInstance: boolean, msg: Passed): Passed.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Passed, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Passed;
        static deserializeBinaryFromReader(message: Passed, reader: jspb.BinaryReader): Passed;
    }

    export namespace Passed {
        export type AsObject = {
        }
    }

    export class Failed extends jspb.Message { 

        hasWithdrawn(): boolean;
        clearWithdrawn(): void;
        getWithdrawn(): ProposalOutcome.Withdrawn | undefined;
        setWithdrawn(value?: ProposalOutcome.Withdrawn): Failed;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Failed.AsObject;
        static toObject(includeInstance: boolean, msg: Failed): Failed.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Failed, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Failed;
        static deserializeBinaryFromReader(message: Failed, reader: jspb.BinaryReader): Failed;
    }

    export namespace Failed {
        export type AsObject = {
            withdrawn?: ProposalOutcome.Withdrawn.AsObject,
        }
    }

    export class Slashed extends jspb.Message { 

        hasWithdrawn(): boolean;
        clearWithdrawn(): void;
        getWithdrawn(): ProposalOutcome.Withdrawn | undefined;
        setWithdrawn(value?: ProposalOutcome.Withdrawn): Slashed;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Slashed.AsObject;
        static toObject(includeInstance: boolean, msg: Slashed): Slashed.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Slashed, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Slashed;
        static deserializeBinaryFromReader(message: Slashed, reader: jspb.BinaryReader): Slashed;
    }

    export namespace Slashed {
        export type AsObject = {
            withdrawn?: ProposalOutcome.Withdrawn.AsObject,
        }
    }


    export enum OutcomeCase {
        OUTCOME_NOT_SET = 0,
        PASSED = 1,
        FAILED = 2,
        SLASHED = 3,
    }

}

export class Tally extends jspb.Message { 
    getYes(): number;
    setYes(value: number): Tally;
    getNo(): number;
    setNo(value: number): Tally;
    getAbstain(): number;
    setAbstain(value: number): Tally;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tally.AsObject;
    static toObject(includeInstance: boolean, msg: Tally): Tally.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tally, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tally;
    static deserializeBinaryFromReader(message: Tally, reader: jspb.BinaryReader): Tally;
}

export namespace Tally {
    export type AsObject = {
        yes: number,
        no: number,
        abstain: number,
    }
}

export class Proposal extends jspb.Message { 
    getId(): number;
    setId(value: number): Proposal;
    getTitle(): string;
    setTitle(value: string): Proposal;
    getDescription(): string;
    setDescription(value: string): Proposal;

    hasSignaling(): boolean;
    clearSignaling(): void;
    getSignaling(): Proposal.Signaling | undefined;
    setSignaling(value?: Proposal.Signaling): Proposal;

    hasEmergency(): boolean;
    clearEmergency(): void;
    getEmergency(): Proposal.Emergency | undefined;
    setEmergency(value?: Proposal.Emergency): Proposal;

    hasParameterChange(): boolean;
    clearParameterChange(): void;
    getParameterChange(): Proposal.ParameterChange | undefined;
    setParameterChange(value?: Proposal.ParameterChange): Proposal;

    hasDaoSpend(): boolean;
    clearDaoSpend(): void;
    getDaoSpend(): Proposal.DaoSpend | undefined;
    setDaoSpend(value?: Proposal.DaoSpend): Proposal;

    hasUpgradePlan(): boolean;
    clearUpgradePlan(): void;
    getUpgradePlan(): Proposal.UpgradePlan | undefined;
    setUpgradePlan(value?: Proposal.UpgradePlan): Proposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Proposal.AsObject;
    static toObject(includeInstance: boolean, msg: Proposal): Proposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Proposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Proposal;
    static deserializeBinaryFromReader(message: Proposal, reader: jspb.BinaryReader): Proposal;
}

export namespace Proposal {
    export type AsObject = {
        id: number,
        title: string,
        description: string,
        signaling?: Proposal.Signaling.AsObject,
        emergency?: Proposal.Emergency.AsObject,
        parameterChange?: Proposal.ParameterChange.AsObject,
        daoSpend?: Proposal.DaoSpend.AsObject,
        upgradePlan?: Proposal.UpgradePlan.AsObject,
    }


    export class Signaling extends jspb.Message { 
        getCommit(): string;
        setCommit(value: string): Signaling;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Signaling.AsObject;
        static toObject(includeInstance: boolean, msg: Signaling): Signaling.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Signaling, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Signaling;
        static deserializeBinaryFromReader(message: Signaling, reader: jspb.BinaryReader): Signaling;
    }

    export namespace Signaling {
        export type AsObject = {
            commit: string,
        }
    }

    export class Emergency extends jspb.Message { 
        getHaltChain(): boolean;
        setHaltChain(value: boolean): Emergency;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Emergency.AsObject;
        static toObject(includeInstance: boolean, msg: Emergency): Emergency.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Emergency, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Emergency;
        static deserializeBinaryFromReader(message: Emergency, reader: jspb.BinaryReader): Emergency;
    }

    export namespace Emergency {
        export type AsObject = {
            haltChain: boolean,
        }
    }

    export class ParameterChange extends jspb.Message { 

        hasOldParameters(): boolean;
        clearOldParameters(): void;
        getOldParameters(): ChangedAppParameters | undefined;
        setOldParameters(value?: ChangedAppParameters): ParameterChange;

        hasNewParameters(): boolean;
        clearNewParameters(): void;
        getNewParameters(): ChangedAppParameters | undefined;
        setNewParameters(value?: ChangedAppParameters): ParameterChange;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ParameterChange.AsObject;
        static toObject(includeInstance: boolean, msg: ParameterChange): ParameterChange.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ParameterChange, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ParameterChange;
        static deserializeBinaryFromReader(message: ParameterChange, reader: jspb.BinaryReader): ParameterChange;
    }

    export namespace ParameterChange {
        export type AsObject = {
            oldParameters?: ChangedAppParameters.AsObject,
            newParameters?: ChangedAppParameters.AsObject,
        }
    }

    export class DaoSpend extends jspb.Message { 

        hasTransactionPlan(): boolean;
        clearTransactionPlan(): void;
        getTransactionPlan(): google_protobuf_any_pb.Any | undefined;
        setTransactionPlan(value?: google_protobuf_any_pb.Any): DaoSpend;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DaoSpend.AsObject;
        static toObject(includeInstance: boolean, msg: DaoSpend): DaoSpend.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DaoSpend, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DaoSpend;
        static deserializeBinaryFromReader(message: DaoSpend, reader: jspb.BinaryReader): DaoSpend;
    }

    export namespace DaoSpend {
        export type AsObject = {
            transactionPlan?: google_protobuf_any_pb.Any.AsObject,
        }
    }

    export class UpgradePlan extends jspb.Message { 
        getHeight(): number;
        setHeight(value: number): UpgradePlan;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UpgradePlan.AsObject;
        static toObject(includeInstance: boolean, msg: UpgradePlan): UpgradePlan.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UpgradePlan, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UpgradePlan;
        static deserializeBinaryFromReader(message: UpgradePlan, reader: jspb.BinaryReader): UpgradePlan;
    }

    export namespace UpgradePlan {
        export type AsObject = {
            height: number,
        }
    }

}

export class ProposalInfoRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): ProposalInfoRequest;
    getProposalId(): number;
    setProposalId(value: number): ProposalInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProposalInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProposalInfoRequest): ProposalInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProposalInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProposalInfoRequest;
    static deserializeBinaryFromReader(message: ProposalInfoRequest, reader: jspb.BinaryReader): ProposalInfoRequest;
}

export namespace ProposalInfoRequest {
    export type AsObject = {
        chainId: string,
        proposalId: number,
    }
}

export class ProposalInfoResponse extends jspb.Message { 
    getStartBlockHeight(): number;
    setStartBlockHeight(value: number): ProposalInfoResponse;
    getStartPosition(): number;
    setStartPosition(value: number): ProposalInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProposalInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProposalInfoResponse): ProposalInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProposalInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProposalInfoResponse;
    static deserializeBinaryFromReader(message: ProposalInfoResponse, reader: jspb.BinaryReader): ProposalInfoResponse;
}

export namespace ProposalInfoResponse {
    export type AsObject = {
        startBlockHeight: number,
        startPosition: number,
    }
}

export class ProposalRateDataRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): ProposalRateDataRequest;
    getProposalId(): number;
    setProposalId(value: number): ProposalRateDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProposalRateDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProposalRateDataRequest): ProposalRateDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProposalRateDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProposalRateDataRequest;
    static deserializeBinaryFromReader(message: ProposalRateDataRequest, reader: jspb.BinaryReader): ProposalRateDataRequest;
}

export namespace ProposalRateDataRequest {
    export type AsObject = {
        chainId: string,
        proposalId: number,
    }
}

export class ProposalRateDataResponse extends jspb.Message { 

    hasRateData(): boolean;
    clearRateData(): void;
    getRateData(): penumbra_core_component_stake_v1alpha1_stake_pb.RateData | undefined;
    setRateData(value?: penumbra_core_component_stake_v1alpha1_stake_pb.RateData): ProposalRateDataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProposalRateDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProposalRateDataResponse): ProposalRateDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProposalRateDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProposalRateDataResponse;
    static deserializeBinaryFromReader(message: ProposalRateDataResponse, reader: jspb.BinaryReader): ProposalRateDataResponse;
}

export namespace ProposalRateDataResponse {
    export type AsObject = {
        rateData?: penumbra_core_component_stake_v1alpha1_stake_pb.RateData.AsObject,
    }
}

export class GovernanceParameters extends jspb.Message { 
    getProposalVotingBlocks(): number;
    setProposalVotingBlocks(value: number): GovernanceParameters;

    hasProposalDepositAmount(): boolean;
    clearProposalDepositAmount(): void;
    getProposalDepositAmount(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setProposalDepositAmount(value?: penumbra_core_num_v1alpha1_num_pb.Amount): GovernanceParameters;
    getProposalValidQuorum(): string;
    setProposalValidQuorum(value: string): GovernanceParameters;
    getProposalPassThreshold(): string;
    setProposalPassThreshold(value: string): GovernanceParameters;
    getProposalSlashThreshold(): string;
    setProposalSlashThreshold(value: string): GovernanceParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GovernanceParameters.AsObject;
    static toObject(includeInstance: boolean, msg: GovernanceParameters): GovernanceParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GovernanceParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GovernanceParameters;
    static deserializeBinaryFromReader(message: GovernanceParameters, reader: jspb.BinaryReader): GovernanceParameters;
}

export namespace GovernanceParameters {
    export type AsObject = {
        proposalVotingBlocks: number,
        proposalDepositAmount?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        proposalValidQuorum: string,
        proposalPassThreshold: string,
        proposalSlashThreshold: string,
    }
}

export class GenesisContent extends jspb.Message { 

    hasGovernanceParams(): boolean;
    clearGovernanceParams(): void;
    getGovernanceParams(): GovernanceParameters | undefined;
    setGovernanceParams(value?: GovernanceParameters): GenesisContent;

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
        governanceParams?: GovernanceParameters.AsObject,
    }
}

export class ChangedAppParameters extends jspb.Message { 

    hasChainParams(): boolean;
    clearChainParams(): void;
    getChainParams(): penumbra_core_component_chain_v1alpha1_chain_pb.ChainParameters | undefined;
    setChainParams(value?: penumbra_core_component_chain_v1alpha1_chain_pb.ChainParameters): ChangedAppParameters;

    hasDaoParams(): boolean;
    clearDaoParams(): void;
    getDaoParams(): penumbra_core_component_dao_v1alpha1_dao_pb.DaoParameters | undefined;
    setDaoParams(value?: penumbra_core_component_dao_v1alpha1_dao_pb.DaoParameters): ChangedAppParameters;

    hasGovernanceParams(): boolean;
    clearGovernanceParams(): void;
    getGovernanceParams(): GovernanceParameters | undefined;
    setGovernanceParams(value?: GovernanceParameters): ChangedAppParameters;

    hasIbcParams(): boolean;
    clearIbcParams(): void;
    getIbcParams(): penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcParameters | undefined;
    setIbcParams(value?: penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcParameters): ChangedAppParameters;

    hasStakeParams(): boolean;
    clearStakeParams(): void;
    getStakeParams(): penumbra_core_component_stake_v1alpha1_stake_pb.StakeParameters | undefined;
    setStakeParams(value?: penumbra_core_component_stake_v1alpha1_stake_pb.StakeParameters): ChangedAppParameters;

    hasFeeParams(): boolean;
    clearFeeParams(): void;
    getFeeParams(): penumbra_core_component_fee_v1alpha1_fee_pb.FeeParameters | undefined;
    setFeeParams(value?: penumbra_core_component_fee_v1alpha1_fee_pb.FeeParameters): ChangedAppParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangedAppParameters.AsObject;
    static toObject(includeInstance: boolean, msg: ChangedAppParameters): ChangedAppParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangedAppParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangedAppParameters;
    static deserializeBinaryFromReader(message: ChangedAppParameters, reader: jspb.BinaryReader): ChangedAppParameters;
}

export namespace ChangedAppParameters {
    export type AsObject = {
        chainParams?: penumbra_core_component_chain_v1alpha1_chain_pb.ChainParameters.AsObject,
        daoParams?: penumbra_core_component_dao_v1alpha1_dao_pb.DaoParameters.AsObject,
        governanceParams?: GovernanceParameters.AsObject,
        ibcParams?: penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcParameters.AsObject,
        stakeParams?: penumbra_core_component_stake_v1alpha1_stake_pb.StakeParameters.AsObject,
        feeParams?: penumbra_core_component_fee_v1alpha1_fee_pb.FeeParameters.AsObject,
    }
}

export class ChangedAppParametersSet extends jspb.Message { 

    hasOld(): boolean;
    clearOld(): void;
    getOld(): ChangedAppParameters | undefined;
    setOld(value?: ChangedAppParameters): ChangedAppParametersSet;

    hasNew(): boolean;
    clearNew(): void;
    getNew(): ChangedAppParameters | undefined;
    setNew(value?: ChangedAppParameters): ChangedAppParametersSet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangedAppParametersSet.AsObject;
    static toObject(includeInstance: boolean, msg: ChangedAppParametersSet): ChangedAppParametersSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangedAppParametersSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangedAppParametersSet;
    static deserializeBinaryFromReader(message: ChangedAppParametersSet, reader: jspb.BinaryReader): ChangedAppParametersSet;
}

export namespace ChangedAppParametersSet {
    export type AsObject = {
        old?: ChangedAppParameters.AsObject,
        pb_new?: ChangedAppParameters.AsObject,
    }
}
