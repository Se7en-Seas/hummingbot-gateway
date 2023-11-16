// package: penumbra.core.transaction.v1alpha1
// file: penumbra/core/transaction/v1alpha1/transaction.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as penumbra_crypto_tct_v1alpha1_tct_pb from "../../../../penumbra/crypto/tct/v1alpha1/tct_pb";
import * as penumbra_crypto_decaf377_fmd_v1alpha1_decaf377_fmd_pb from "../../../../penumbra/crypto/decaf377_fmd/v1alpha1/decaf377_fmd_pb";
import * as penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb from "../../../../penumbra/crypto/decaf377_rdsa/v1alpha1/decaf377_rdsa_pb";
import * as penumbra_core_asset_v1alpha1_asset_pb from "../../../../penumbra/core/asset/v1alpha1/asset_pb";
import * as penumbra_core_keys_v1alpha1_keys_pb from "../../../../penumbra/core/keys/v1alpha1/keys_pb";
import * as penumbra_core_component_sct_v1alpha1_sct_pb from "../../../../penumbra/core/component/sct/v1alpha1/sct_pb";
import * as penumbra_core_component_chain_v1alpha1_chain_pb from "../../../../penumbra/core/component/chain/v1alpha1/chain_pb";
import * as penumbra_core_component_fee_v1alpha1_fee_pb from "../../../../penumbra/core/component/fee/v1alpha1/fee_pb";
import * as penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb from "../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb";
import * as penumbra_core_component_dex_v1alpha1_dex_pb from "../../../../penumbra/core/component/dex/v1alpha1/dex_pb";
import * as penumbra_core_component_ibc_v1alpha1_ibc_pb from "../../../../penumbra/core/component/ibc/v1alpha1/ibc_pb";
import * as penumbra_core_component_stake_v1alpha1_stake_pb from "../../../../penumbra/core/component/stake/v1alpha1/stake_pb";
import * as penumbra_core_component_governance_v1alpha1_governance_pb from "../../../../penumbra/core/component/governance/v1alpha1/governance_pb";

export class Transaction extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): TransactionBody | undefined;
    setBody(value?: TransactionBody): Transaction;
    getBindingSig(): Uint8Array | string;
    getBindingSig_asU8(): Uint8Array;
    getBindingSig_asB64(): string;
    setBindingSig(value: Uint8Array | string): Transaction;

    hasAnchor(): boolean;
    clearAnchor(): void;
    getAnchor(): penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot | undefined;
    setAnchor(value?: penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot): Transaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transaction.AsObject;
    static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transaction;
    static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
    export type AsObject = {
        body?: TransactionBody.AsObject,
        bindingSig: Uint8Array | string,
        anchor?: penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot.AsObject,
    }
}

export class Id extends jspb.Message { 
    getHash(): Uint8Array | string;
    getHash_asU8(): Uint8Array;
    getHash_asB64(): string;
    setHash(value: Uint8Array | string): Id;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
}

export namespace Id {
    export type AsObject = {
        hash: Uint8Array | string,
    }
}

export class TransactionBody extends jspb.Message { 
    clearActionsList(): void;
    getActionsList(): Array<Action>;
    setActionsList(value: Array<Action>): TransactionBody;
    addActions(value?: Action, index?: number): Action;

    hasTransactionParameters(): boolean;
    clearTransactionParameters(): void;
    getTransactionParameters(): TransactionParameters | undefined;
    setTransactionParameters(value?: TransactionParameters): TransactionBody;

    hasFee(): boolean;
    clearFee(): void;
    getFee(): penumbra_core_component_fee_v1alpha1_fee_pb.Fee | undefined;
    setFee(value?: penumbra_core_component_fee_v1alpha1_fee_pb.Fee): TransactionBody;

    hasDetectionData(): boolean;
    clearDetectionData(): void;
    getDetectionData(): DetectionData | undefined;
    setDetectionData(value?: DetectionData): TransactionBody;

    hasMemoData(): boolean;
    clearMemoData(): void;
    getMemoData(): MemoData | undefined;
    setMemoData(value?: MemoData): TransactionBody;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionBody.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionBody): TransactionBody.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionBody, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionBody;
    static deserializeBinaryFromReader(message: TransactionBody, reader: jspb.BinaryReader): TransactionBody;
}

export namespace TransactionBody {
    export type AsObject = {
        actionsList: Array<Action.AsObject>,
        transactionParameters?: TransactionParameters.AsObject,
        fee?: penumbra_core_component_fee_v1alpha1_fee_pb.Fee.AsObject,
        detectionData?: DetectionData.AsObject,
        memoData?: MemoData.AsObject,
    }
}

export class MemoData extends jspb.Message { 
    getEncryptedMemo(): Uint8Array | string;
    getEncryptedMemo_asU8(): Uint8Array;
    getEncryptedMemo_asB64(): string;
    setEncryptedMemo(value: Uint8Array | string): MemoData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemoData.AsObject;
    static toObject(includeInstance: boolean, msg: MemoData): MemoData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemoData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemoData;
    static deserializeBinaryFromReader(message: MemoData, reader: jspb.BinaryReader): MemoData;
}

export namespace MemoData {
    export type AsObject = {
        encryptedMemo: Uint8Array | string,
    }
}

export class TransactionParameters extends jspb.Message { 
    getExpiryHeight(): number;
    setExpiryHeight(value: number): TransactionParameters;
    getChainId(): string;
    setChainId(value: string): TransactionParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionParameters.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionParameters): TransactionParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionParameters;
    static deserializeBinaryFromReader(message: TransactionParameters, reader: jspb.BinaryReader): TransactionParameters;
}

export namespace TransactionParameters {
    export type AsObject = {
        expiryHeight: number,
        chainId: string,
    }
}

export class DetectionData extends jspb.Message { 
    clearFmdCluesList(): void;
    getFmdCluesList(): Array<penumbra_crypto_decaf377_fmd_v1alpha1_decaf377_fmd_pb.Clue>;
    setFmdCluesList(value: Array<penumbra_crypto_decaf377_fmd_v1alpha1_decaf377_fmd_pb.Clue>): DetectionData;
    addFmdClues(value?: penumbra_crypto_decaf377_fmd_v1alpha1_decaf377_fmd_pb.Clue, index?: number): penumbra_crypto_decaf377_fmd_v1alpha1_decaf377_fmd_pb.Clue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetectionData.AsObject;
    static toObject(includeInstance: boolean, msg: DetectionData): DetectionData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetectionData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetectionData;
    static deserializeBinaryFromReader(message: DetectionData, reader: jspb.BinaryReader): DetectionData;
}

export namespace DetectionData {
    export type AsObject = {
        fmdCluesList: Array<penumbra_crypto_decaf377_fmd_v1alpha1_decaf377_fmd_pb.Clue.AsObject>,
    }
}

export class Action extends jspb.Message { 

    hasSpend(): boolean;
    clearSpend(): void;
    getSpend(): penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Spend | undefined;
    setSpend(value?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Spend): Action;

    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Output | undefined;
    setOutput(value?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Output): Action;

    hasSwap(): boolean;
    clearSwap(): void;
    getSwap(): penumbra_core_component_dex_v1alpha1_dex_pb.Swap | undefined;
    setSwap(value?: penumbra_core_component_dex_v1alpha1_dex_pb.Swap): Action;

    hasSwapClaim(): boolean;
    clearSwapClaim(): void;
    getSwapClaim(): penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaim | undefined;
    setSwapClaim(value?: penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaim): Action;

    hasValidatorDefinition(): boolean;
    clearValidatorDefinition(): void;
    getValidatorDefinition(): penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition | undefined;
    setValidatorDefinition(value?: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition): Action;

    hasIbcAction(): boolean;
    clearIbcAction(): void;
    getIbcAction(): penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction | undefined;
    setIbcAction(value?: penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction): Action;

    hasProposalSubmit(): boolean;
    clearProposalSubmit(): void;
    getProposalSubmit(): penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit | undefined;
    setProposalSubmit(value?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit): Action;

    hasProposalWithdraw(): boolean;
    clearProposalWithdraw(): void;
    getProposalWithdraw(): penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw | undefined;
    setProposalWithdraw(value?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw): Action;

    hasValidatorVote(): boolean;
    clearValidatorVote(): void;
    getValidatorVote(): penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote | undefined;
    setValidatorVote(value?: penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote): Action;

    hasDelegatorVote(): boolean;
    clearDelegatorVote(): void;
    getDelegatorVote(): penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVote | undefined;
    setDelegatorVote(value?: penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVote): Action;

    hasProposalDepositClaim(): boolean;
    clearProposalDepositClaim(): void;
    getProposalDepositClaim(): penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim | undefined;
    setProposalDepositClaim(value?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim): Action;

    hasPositionOpen(): boolean;
    clearPositionOpen(): void;
    getPositionOpen(): penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen | undefined;
    setPositionOpen(value?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen): Action;

    hasPositionClose(): boolean;
    clearPositionClose(): void;
    getPositionClose(): penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose | undefined;
    setPositionClose(value?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose): Action;

    hasPositionWithdraw(): boolean;
    clearPositionWithdraw(): void;
    getPositionWithdraw(): penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdraw | undefined;
    setPositionWithdraw(value?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdraw): Action;

    hasPositionRewardClaim(): boolean;
    clearPositionRewardClaim(): void;
    getPositionRewardClaim(): penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaim | undefined;
    setPositionRewardClaim(value?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaim): Action;

    hasDelegate(): boolean;
    clearDelegate(): void;
    getDelegate(): penumbra_core_component_stake_v1alpha1_stake_pb.Delegate | undefined;
    setDelegate(value?: penumbra_core_component_stake_v1alpha1_stake_pb.Delegate): Action;

    hasUndelegate(): boolean;
    clearUndelegate(): void;
    getUndelegate(): penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate | undefined;
    setUndelegate(value?: penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate): Action;

    hasUndelegateClaim(): boolean;
    clearUndelegateClaim(): void;
    getUndelegateClaim(): penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaim | undefined;
    setUndelegateClaim(value?: penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaim): Action;

    hasDaoSpend(): boolean;
    clearDaoSpend(): void;
    getDaoSpend(): penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend | undefined;
    setDaoSpend(value?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend): Action;

    hasDaoOutput(): boolean;
    clearDaoOutput(): void;
    getDaoOutput(): penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput | undefined;
    setDaoOutput(value?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput): Action;

    hasDaoDeposit(): boolean;
    clearDaoDeposit(): void;
    getDaoDeposit(): penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit | undefined;
    setDaoDeposit(value?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit): Action;

    hasIcs20Withdrawal(): boolean;
    clearIcs20Withdrawal(): void;
    getIcs20Withdrawal(): penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal | undefined;
    setIcs20Withdrawal(value?: penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal): Action;

    getActionCase(): Action.ActionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Action.AsObject;
    static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Action;
    static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
}

export namespace Action {
    export type AsObject = {
        spend?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Spend.AsObject,
        output?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Output.AsObject,
        swap?: penumbra_core_component_dex_v1alpha1_dex_pb.Swap.AsObject,
        swapClaim?: penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaim.AsObject,
        validatorDefinition?: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition.AsObject,
        ibcAction?: penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction.AsObject,
        proposalSubmit?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit.AsObject,
        proposalWithdraw?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw.AsObject,
        validatorVote?: penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote.AsObject,
        delegatorVote?: penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVote.AsObject,
        proposalDepositClaim?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim.AsObject,
        positionOpen?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen.AsObject,
        positionClose?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose.AsObject,
        positionWithdraw?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdraw.AsObject,
        positionRewardClaim?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaim.AsObject,
        delegate?: penumbra_core_component_stake_v1alpha1_stake_pb.Delegate.AsObject,
        undelegate?: penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate.AsObject,
        undelegateClaim?: penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaim.AsObject,
        daoSpend?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend.AsObject,
        daoOutput?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput.AsObject,
        daoDeposit?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit.AsObject,
        ics20Withdrawal?: penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal.AsObject,
    }

    export enum ActionCase {
        ACTION_NOT_SET = 0,
        SPEND = 1,
        OUTPUT = 2,
        SWAP = 3,
        SWAP_CLAIM = 4,
        VALIDATOR_DEFINITION = 16,
        IBC_ACTION = 17,
        PROPOSAL_SUBMIT = 18,
        PROPOSAL_WITHDRAW = 19,
        VALIDATOR_VOTE = 20,
        DELEGATOR_VOTE = 21,
        PROPOSAL_DEPOSIT_CLAIM = 22,
        POSITION_OPEN = 30,
        POSITION_CLOSE = 31,
        POSITION_WITHDRAW = 32,
        POSITION_REWARD_CLAIM = 34,
        DELEGATE = 40,
        UNDELEGATE = 41,
        UNDELEGATE_CLAIM = 42,
        DAO_SPEND = 50,
        DAO_OUTPUT = 51,
        DAO_DEPOSIT = 52,
        ICS20_WITHDRAWAL = 200,
    }

}

export class TransactionPerspective extends jspb.Message { 
    clearPayloadKeysList(): void;
    getPayloadKeysList(): Array<PayloadKeyWithCommitment>;
    setPayloadKeysList(value: Array<PayloadKeyWithCommitment>): TransactionPerspective;
    addPayloadKeys(value?: PayloadKeyWithCommitment, index?: number): PayloadKeyWithCommitment;
    clearSpendNullifiersList(): void;
    getSpendNullifiersList(): Array<NullifierWithNote>;
    setSpendNullifiersList(value: Array<NullifierWithNote>): TransactionPerspective;
    addSpendNullifiers(value?: NullifierWithNote, index?: number): NullifierWithNote;
    clearAdviceNotesList(): void;
    getAdviceNotesList(): Array<penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note>;
    setAdviceNotesList(value: Array<penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note>): TransactionPerspective;
    addAdviceNotes(value?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note, index?: number): penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note;
    clearAddressViewsList(): void;
    getAddressViewsList(): Array<penumbra_core_keys_v1alpha1_keys_pb.AddressView>;
    setAddressViewsList(value: Array<penumbra_core_keys_v1alpha1_keys_pb.AddressView>): TransactionPerspective;
    addAddressViews(value?: penumbra_core_keys_v1alpha1_keys_pb.AddressView, index?: number): penumbra_core_keys_v1alpha1_keys_pb.AddressView;
    clearDenomsList(): void;
    getDenomsList(): Array<penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata>;
    setDenomsList(value: Array<penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata>): TransactionPerspective;
    addDenoms(value?: penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata, index?: number): penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata;

    hasTransactionId(): boolean;
    clearTransactionId(): void;
    getTransactionId(): Id | undefined;
    setTransactionId(value?: Id): TransactionPerspective;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionPerspective.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionPerspective): TransactionPerspective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionPerspective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionPerspective;
    static deserializeBinaryFromReader(message: TransactionPerspective, reader: jspb.BinaryReader): TransactionPerspective;
}

export namespace TransactionPerspective {
    export type AsObject = {
        payloadKeysList: Array<PayloadKeyWithCommitment.AsObject>,
        spendNullifiersList: Array<NullifierWithNote.AsObject>,
        adviceNotesList: Array<penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note.AsObject>,
        addressViewsList: Array<penumbra_core_keys_v1alpha1_keys_pb.AddressView.AsObject>,
        denomsList: Array<penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata.AsObject>,
        transactionId?: Id.AsObject,
    }
}

export class PayloadKeyWithCommitment extends jspb.Message { 

    hasPayloadKey(): boolean;
    clearPayloadKey(): void;
    getPayloadKey(): penumbra_core_keys_v1alpha1_keys_pb.PayloadKey | undefined;
    setPayloadKey(value?: penumbra_core_keys_v1alpha1_keys_pb.PayloadKey): PayloadKeyWithCommitment;

    hasCommitment(): boolean;
    clearCommitment(): void;
    getCommitment(): penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment | undefined;
    setCommitment(value?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment): PayloadKeyWithCommitment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayloadKeyWithCommitment.AsObject;
    static toObject(includeInstance: boolean, msg: PayloadKeyWithCommitment): PayloadKeyWithCommitment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayloadKeyWithCommitment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayloadKeyWithCommitment;
    static deserializeBinaryFromReader(message: PayloadKeyWithCommitment, reader: jspb.BinaryReader): PayloadKeyWithCommitment;
}

export namespace PayloadKeyWithCommitment {
    export type AsObject = {
        payloadKey?: penumbra_core_keys_v1alpha1_keys_pb.PayloadKey.AsObject,
        commitment?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.AsObject,
    }
}

export class NullifierWithNote extends jspb.Message { 

    hasNullifier(): boolean;
    clearNullifier(): void;
    getNullifier(): penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier | undefined;
    setNullifier(value?: penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier): NullifierWithNote;

    hasNote(): boolean;
    clearNote(): void;
    getNote(): penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note | undefined;
    setNote(value?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note): NullifierWithNote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NullifierWithNote.AsObject;
    static toObject(includeInstance: boolean, msg: NullifierWithNote): NullifierWithNote.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NullifierWithNote, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NullifierWithNote;
    static deserializeBinaryFromReader(message: NullifierWithNote, reader: jspb.BinaryReader): NullifierWithNote;
}

export namespace NullifierWithNote {
    export type AsObject = {
        nullifier?: penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.AsObject,
        note?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note.AsObject,
    }
}

export class TransactionView extends jspb.Message { 

    hasBodyView(): boolean;
    clearBodyView(): void;
    getBodyView(): TransactionBodyView | undefined;
    setBodyView(value?: TransactionBodyView): TransactionView;
    getBindingSig(): Uint8Array | string;
    getBindingSig_asU8(): Uint8Array;
    getBindingSig_asB64(): string;
    setBindingSig(value: Uint8Array | string): TransactionView;

    hasAnchor(): boolean;
    clearAnchor(): void;
    getAnchor(): penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot | undefined;
    setAnchor(value?: penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot): TransactionView;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionView.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionView): TransactionView.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionView, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionView;
    static deserializeBinaryFromReader(message: TransactionView, reader: jspb.BinaryReader): TransactionView;
}

export namespace TransactionView {
    export type AsObject = {
        bodyView?: TransactionBodyView.AsObject,
        bindingSig: Uint8Array | string,
        anchor?: penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot.AsObject,
    }
}

export class TransactionBodyView extends jspb.Message { 
    clearActionViewsList(): void;
    getActionViewsList(): Array<ActionView>;
    setActionViewsList(value: Array<ActionView>): TransactionBodyView;
    addActionViews(value?: ActionView, index?: number): ActionView;

    hasTransactionParameters(): boolean;
    clearTransactionParameters(): void;
    getTransactionParameters(): TransactionParameters | undefined;
    setTransactionParameters(value?: TransactionParameters): TransactionBodyView;

    hasFee(): boolean;
    clearFee(): void;
    getFee(): penumbra_core_component_fee_v1alpha1_fee_pb.Fee | undefined;
    setFee(value?: penumbra_core_component_fee_v1alpha1_fee_pb.Fee): TransactionBodyView;

    hasDetectionData(): boolean;
    clearDetectionData(): void;
    getDetectionData(): DetectionData | undefined;
    setDetectionData(value?: DetectionData): TransactionBodyView;

    hasMemoView(): boolean;
    clearMemoView(): void;
    getMemoView(): MemoView | undefined;
    setMemoView(value?: MemoView): TransactionBodyView;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionBodyView.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionBodyView): TransactionBodyView.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionBodyView, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionBodyView;
    static deserializeBinaryFromReader(message: TransactionBodyView, reader: jspb.BinaryReader): TransactionBodyView;
}

export namespace TransactionBodyView {
    export type AsObject = {
        actionViewsList: Array<ActionView.AsObject>,
        transactionParameters?: TransactionParameters.AsObject,
        fee?: penumbra_core_component_fee_v1alpha1_fee_pb.Fee.AsObject,
        detectionData?: DetectionData.AsObject,
        memoView?: MemoView.AsObject,
    }
}

export class ActionView extends jspb.Message { 

    hasSpend(): boolean;
    clearSpend(): void;
    getSpend(): penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.SpendView | undefined;
    setSpend(value?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.SpendView): ActionView;

    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.OutputView | undefined;
    setOutput(value?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.OutputView): ActionView;

    hasSwap(): boolean;
    clearSwap(): void;
    getSwap(): penumbra_core_component_dex_v1alpha1_dex_pb.SwapView | undefined;
    setSwap(value?: penumbra_core_component_dex_v1alpha1_dex_pb.SwapView): ActionView;

    hasSwapClaim(): boolean;
    clearSwapClaim(): void;
    getSwapClaim(): penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaimView | undefined;
    setSwapClaim(value?: penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaimView): ActionView;

    hasValidatorDefinition(): boolean;
    clearValidatorDefinition(): void;
    getValidatorDefinition(): penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition | undefined;
    setValidatorDefinition(value?: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition): ActionView;

    hasIbcAction(): boolean;
    clearIbcAction(): void;
    getIbcAction(): penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction | undefined;
    setIbcAction(value?: penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction): ActionView;

    hasProposalSubmit(): boolean;
    clearProposalSubmit(): void;
    getProposalSubmit(): penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit | undefined;
    setProposalSubmit(value?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit): ActionView;

    hasProposalWithdraw(): boolean;
    clearProposalWithdraw(): void;
    getProposalWithdraw(): penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw | undefined;
    setProposalWithdraw(value?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw): ActionView;

    hasValidatorVote(): boolean;
    clearValidatorVote(): void;
    getValidatorVote(): penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote | undefined;
    setValidatorVote(value?: penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote): ActionView;

    hasDelegatorVote(): boolean;
    clearDelegatorVote(): void;
    getDelegatorVote(): penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVoteView | undefined;
    setDelegatorVote(value?: penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVoteView): ActionView;

    hasProposalDepositClaim(): boolean;
    clearProposalDepositClaim(): void;
    getProposalDepositClaim(): penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim | undefined;
    setProposalDepositClaim(value?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim): ActionView;

    hasPositionOpen(): boolean;
    clearPositionOpen(): void;
    getPositionOpen(): penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen | undefined;
    setPositionOpen(value?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen): ActionView;

    hasPositionClose(): boolean;
    clearPositionClose(): void;
    getPositionClose(): penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose | undefined;
    setPositionClose(value?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose): ActionView;

    hasPositionWithdraw(): boolean;
    clearPositionWithdraw(): void;
    getPositionWithdraw(): penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdraw | undefined;
    setPositionWithdraw(value?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdraw): ActionView;

    hasPositionRewardClaim(): boolean;
    clearPositionRewardClaim(): void;
    getPositionRewardClaim(): penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaim | undefined;
    setPositionRewardClaim(value?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaim): ActionView;

    hasDelegate(): boolean;
    clearDelegate(): void;
    getDelegate(): penumbra_core_component_stake_v1alpha1_stake_pb.Delegate | undefined;
    setDelegate(value?: penumbra_core_component_stake_v1alpha1_stake_pb.Delegate): ActionView;

    hasUndelegate(): boolean;
    clearUndelegate(): void;
    getUndelegate(): penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate | undefined;
    setUndelegate(value?: penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate): ActionView;

    hasDaoSpend(): boolean;
    clearDaoSpend(): void;
    getDaoSpend(): penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend | undefined;
    setDaoSpend(value?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend): ActionView;

    hasDaoOutput(): boolean;
    clearDaoOutput(): void;
    getDaoOutput(): penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput | undefined;
    setDaoOutput(value?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput): ActionView;

    hasDaoDeposit(): boolean;
    clearDaoDeposit(): void;
    getDaoDeposit(): penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit | undefined;
    setDaoDeposit(value?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit): ActionView;

    hasUndelegateClaim(): boolean;
    clearUndelegateClaim(): void;
    getUndelegateClaim(): penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaim | undefined;
    setUndelegateClaim(value?: penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaim): ActionView;

    hasIcs20Withdrawal(): boolean;
    clearIcs20Withdrawal(): void;
    getIcs20Withdrawal(): penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal | undefined;
    setIcs20Withdrawal(value?: penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal): ActionView;

    getActionViewCase(): ActionView.ActionViewCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActionView.AsObject;
    static toObject(includeInstance: boolean, msg: ActionView): ActionView.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActionView, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActionView;
    static deserializeBinaryFromReader(message: ActionView, reader: jspb.BinaryReader): ActionView;
}

export namespace ActionView {
    export type AsObject = {
        spend?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.SpendView.AsObject,
        output?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.OutputView.AsObject,
        swap?: penumbra_core_component_dex_v1alpha1_dex_pb.SwapView.AsObject,
        swapClaim?: penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaimView.AsObject,
        validatorDefinition?: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition.AsObject,
        ibcAction?: penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction.AsObject,
        proposalSubmit?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit.AsObject,
        proposalWithdraw?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw.AsObject,
        validatorVote?: penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote.AsObject,
        delegatorVote?: penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVoteView.AsObject,
        proposalDepositClaim?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim.AsObject,
        positionOpen?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen.AsObject,
        positionClose?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose.AsObject,
        positionWithdraw?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdraw.AsObject,
        positionRewardClaim?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaim.AsObject,
        delegate?: penumbra_core_component_stake_v1alpha1_stake_pb.Delegate.AsObject,
        undelegate?: penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate.AsObject,
        daoSpend?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend.AsObject,
        daoOutput?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput.AsObject,
        daoDeposit?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit.AsObject,
        undelegateClaim?: penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaim.AsObject,
        ics20Withdrawal?: penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal.AsObject,
    }

    export enum ActionViewCase {
        ACTION_VIEW_NOT_SET = 0,
        SPEND = 1,
        OUTPUT = 2,
        SWAP = 3,
        SWAP_CLAIM = 4,
        VALIDATOR_DEFINITION = 16,
        IBC_ACTION = 17,
        PROPOSAL_SUBMIT = 18,
        PROPOSAL_WITHDRAW = 19,
        VALIDATOR_VOTE = 20,
        DELEGATOR_VOTE = 21,
        PROPOSAL_DEPOSIT_CLAIM = 22,
        POSITION_OPEN = 30,
        POSITION_CLOSE = 31,
        POSITION_WITHDRAW = 32,
        POSITION_REWARD_CLAIM = 34,
        DELEGATE = 41,
        UNDELEGATE = 42,
        DAO_SPEND = 50,
        DAO_OUTPUT = 51,
        DAO_DEPOSIT = 52,
        UNDELEGATE_CLAIM = 43,
        ICS20_WITHDRAWAL = 200,
    }

}

export class AuthorizationData extends jspb.Message { 

    hasEffectHash(): boolean;
    clearEffectHash(): void;
    getEffectHash(): penumbra_core_component_chain_v1alpha1_chain_pb.EffectHash | undefined;
    setEffectHash(value?: penumbra_core_component_chain_v1alpha1_chain_pb.EffectHash): AuthorizationData;
    clearSpendAuthsList(): void;
    getSpendAuthsList(): Array<penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature>;
    setSpendAuthsList(value: Array<penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature>): AuthorizationData;
    addSpendAuths(value?: penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature, index?: number): penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature;
    clearDelegatorVoteAuthsList(): void;
    getDelegatorVoteAuthsList(): Array<penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature>;
    setDelegatorVoteAuthsList(value: Array<penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature>): AuthorizationData;
    addDelegatorVoteAuths(value?: penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature, index?: number): penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizationData.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizationData): AuthorizationData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizationData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizationData;
    static deserializeBinaryFromReader(message: AuthorizationData, reader: jspb.BinaryReader): AuthorizationData;
}

export namespace AuthorizationData {
    export type AsObject = {
        effectHash?: penumbra_core_component_chain_v1alpha1_chain_pb.EffectHash.AsObject,
        spendAuthsList: Array<penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature.AsObject>,
        delegatorVoteAuthsList: Array<penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature.AsObject>,
    }
}

export class WitnessData extends jspb.Message { 

    hasAnchor(): boolean;
    clearAnchor(): void;
    getAnchor(): penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot | undefined;
    setAnchor(value?: penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot): WitnessData;
    clearStateCommitmentProofsList(): void;
    getStateCommitmentProofsList(): Array<penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitmentProof>;
    setStateCommitmentProofsList(value: Array<penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitmentProof>): WitnessData;
    addStateCommitmentProofs(value?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitmentProof, index?: number): penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitmentProof;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WitnessData.AsObject;
    static toObject(includeInstance: boolean, msg: WitnessData): WitnessData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WitnessData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WitnessData;
    static deserializeBinaryFromReader(message: WitnessData, reader: jspb.BinaryReader): WitnessData;
}

export namespace WitnessData {
    export type AsObject = {
        anchor?: penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot.AsObject,
        stateCommitmentProofsList: Array<penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitmentProof.AsObject>,
    }
}

export class TransactionPlan extends jspb.Message { 
    clearActionsList(): void;
    getActionsList(): Array<ActionPlan>;
    setActionsList(value: Array<ActionPlan>): TransactionPlan;
    addActions(value?: ActionPlan, index?: number): ActionPlan;
    getExpiryHeight(): number;
    setExpiryHeight(value: number): TransactionPlan;
    getChainId(): string;
    setChainId(value: string): TransactionPlan;

    hasFee(): boolean;
    clearFee(): void;
    getFee(): penumbra_core_component_fee_v1alpha1_fee_pb.Fee | undefined;
    setFee(value?: penumbra_core_component_fee_v1alpha1_fee_pb.Fee): TransactionPlan;
    clearCluePlansList(): void;
    getCluePlansList(): Array<CluePlan>;
    setCluePlansList(value: Array<CluePlan>): TransactionPlan;
    addCluePlans(value?: CluePlan, index?: number): CluePlan;

    hasMemoPlan(): boolean;
    clearMemoPlan(): void;
    getMemoPlan(): MemoPlan | undefined;
    setMemoPlan(value?: MemoPlan): TransactionPlan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionPlan.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionPlan): TransactionPlan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionPlan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionPlan;
    static deserializeBinaryFromReader(message: TransactionPlan, reader: jspb.BinaryReader): TransactionPlan;
}

export namespace TransactionPlan {
    export type AsObject = {
        actionsList: Array<ActionPlan.AsObject>,
        expiryHeight: number,
        chainId: string,
        fee?: penumbra_core_component_fee_v1alpha1_fee_pb.Fee.AsObject,
        cluePlansList: Array<CluePlan.AsObject>,
        memoPlan?: MemoPlan.AsObject,
    }
}

export class ActionPlan extends jspb.Message { 

    hasSpend(): boolean;
    clearSpend(): void;
    getSpend(): penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.SpendPlan | undefined;
    setSpend(value?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.SpendPlan): ActionPlan;

    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.OutputPlan | undefined;
    setOutput(value?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.OutputPlan): ActionPlan;

    hasSwap(): boolean;
    clearSwap(): void;
    getSwap(): penumbra_core_component_dex_v1alpha1_dex_pb.SwapPlan | undefined;
    setSwap(value?: penumbra_core_component_dex_v1alpha1_dex_pb.SwapPlan): ActionPlan;

    hasSwapClaim(): boolean;
    clearSwapClaim(): void;
    getSwapClaim(): penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaimPlan | undefined;
    setSwapClaim(value?: penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaimPlan): ActionPlan;

    hasValidatorDefinition(): boolean;
    clearValidatorDefinition(): void;
    getValidatorDefinition(): penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition | undefined;
    setValidatorDefinition(value?: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition): ActionPlan;

    hasIbcAction(): boolean;
    clearIbcAction(): void;
    getIbcAction(): penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction | undefined;
    setIbcAction(value?: penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction): ActionPlan;

    hasProposalSubmit(): boolean;
    clearProposalSubmit(): void;
    getProposalSubmit(): penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit | undefined;
    setProposalSubmit(value?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit): ActionPlan;

    hasProposalWithdraw(): boolean;
    clearProposalWithdraw(): void;
    getProposalWithdraw(): penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw | undefined;
    setProposalWithdraw(value?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw): ActionPlan;

    hasValidatorVote(): boolean;
    clearValidatorVote(): void;
    getValidatorVote(): penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote | undefined;
    setValidatorVote(value?: penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote): ActionPlan;

    hasDelegatorVote(): boolean;
    clearDelegatorVote(): void;
    getDelegatorVote(): penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVotePlan | undefined;
    setDelegatorVote(value?: penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVotePlan): ActionPlan;

    hasProposalDepositClaim(): boolean;
    clearProposalDepositClaim(): void;
    getProposalDepositClaim(): penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim | undefined;
    setProposalDepositClaim(value?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim): ActionPlan;

    hasWithdrawal(): boolean;
    clearWithdrawal(): void;
    getWithdrawal(): penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal | undefined;
    setWithdrawal(value?: penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal): ActionPlan;

    hasPositionOpen(): boolean;
    clearPositionOpen(): void;
    getPositionOpen(): penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen | undefined;
    setPositionOpen(value?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen): ActionPlan;

    hasPositionClose(): boolean;
    clearPositionClose(): void;
    getPositionClose(): penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose | undefined;
    setPositionClose(value?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose): ActionPlan;

    hasPositionWithdraw(): boolean;
    clearPositionWithdraw(): void;
    getPositionWithdraw(): penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdrawPlan | undefined;
    setPositionWithdraw(value?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdrawPlan): ActionPlan;

    hasPositionRewardClaim(): boolean;
    clearPositionRewardClaim(): void;
    getPositionRewardClaim(): penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaimPlan | undefined;
    setPositionRewardClaim(value?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaimPlan): ActionPlan;

    hasDelegate(): boolean;
    clearDelegate(): void;
    getDelegate(): penumbra_core_component_stake_v1alpha1_stake_pb.Delegate | undefined;
    setDelegate(value?: penumbra_core_component_stake_v1alpha1_stake_pb.Delegate): ActionPlan;

    hasUndelegate(): boolean;
    clearUndelegate(): void;
    getUndelegate(): penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate | undefined;
    setUndelegate(value?: penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate): ActionPlan;

    hasUndelegateClaim(): boolean;
    clearUndelegateClaim(): void;
    getUndelegateClaim(): penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaimPlan | undefined;
    setUndelegateClaim(value?: penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaimPlan): ActionPlan;

    hasDaoSpend(): boolean;
    clearDaoSpend(): void;
    getDaoSpend(): penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend | undefined;
    setDaoSpend(value?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend): ActionPlan;

    hasDaoOutput(): boolean;
    clearDaoOutput(): void;
    getDaoOutput(): penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput | undefined;
    setDaoOutput(value?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput): ActionPlan;

    hasDaoDeposit(): boolean;
    clearDaoDeposit(): void;
    getDaoDeposit(): penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit | undefined;
    setDaoDeposit(value?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit): ActionPlan;

    getActionCase(): ActionPlan.ActionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActionPlan.AsObject;
    static toObject(includeInstance: boolean, msg: ActionPlan): ActionPlan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActionPlan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActionPlan;
    static deserializeBinaryFromReader(message: ActionPlan, reader: jspb.BinaryReader): ActionPlan;
}

export namespace ActionPlan {
    export type AsObject = {
        spend?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.SpendPlan.AsObject,
        output?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.OutputPlan.AsObject,
        swap?: penumbra_core_component_dex_v1alpha1_dex_pb.SwapPlan.AsObject,
        swapClaim?: penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaimPlan.AsObject,
        validatorDefinition?: penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition.AsObject,
        ibcAction?: penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction.AsObject,
        proposalSubmit?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit.AsObject,
        proposalWithdraw?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw.AsObject,
        validatorVote?: penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote.AsObject,
        delegatorVote?: penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVotePlan.AsObject,
        proposalDepositClaim?: penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim.AsObject,
        withdrawal?: penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal.AsObject,
        positionOpen?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen.AsObject,
        positionClose?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose.AsObject,
        positionWithdraw?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdrawPlan.AsObject,
        positionRewardClaim?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaimPlan.AsObject,
        delegate?: penumbra_core_component_stake_v1alpha1_stake_pb.Delegate.AsObject,
        undelegate?: penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate.AsObject,
        undelegateClaim?: penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaimPlan.AsObject,
        daoSpend?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend.AsObject,
        daoOutput?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput.AsObject,
        daoDeposit?: penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit.AsObject,
    }

    export enum ActionCase {
        ACTION_NOT_SET = 0,
        SPEND = 1,
        OUTPUT = 2,
        SWAP = 3,
        SWAP_CLAIM = 4,
        VALIDATOR_DEFINITION = 16,
        IBC_ACTION = 17,
        PROPOSAL_SUBMIT = 18,
        PROPOSAL_WITHDRAW = 19,
        VALIDATOR_VOTE = 20,
        DELEGATOR_VOTE = 21,
        PROPOSAL_DEPOSIT_CLAIM = 22,
        WITHDRAWAL = 23,
        POSITION_OPEN = 30,
        POSITION_CLOSE = 31,
        POSITION_WITHDRAW = 32,
        POSITION_REWARD_CLAIM = 34,
        DELEGATE = 40,
        UNDELEGATE = 41,
        UNDELEGATE_CLAIM = 42,
        DAO_SPEND = 50,
        DAO_OUTPUT = 51,
        DAO_DEPOSIT = 52,
    }

}

export class CluePlan extends jspb.Message { 

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): penumbra_core_keys_v1alpha1_keys_pb.Address | undefined;
    setAddress(value?: penumbra_core_keys_v1alpha1_keys_pb.Address): CluePlan;
    getRseed(): Uint8Array | string;
    getRseed_asU8(): Uint8Array;
    getRseed_asB64(): string;
    setRseed(value: Uint8Array | string): CluePlan;
    getPrecisionBits(): number;
    setPrecisionBits(value: number): CluePlan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CluePlan.AsObject;
    static toObject(includeInstance: boolean, msg: CluePlan): CluePlan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CluePlan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CluePlan;
    static deserializeBinaryFromReader(message: CluePlan, reader: jspb.BinaryReader): CluePlan;
}

export namespace CluePlan {
    export type AsObject = {
        address?: penumbra_core_keys_v1alpha1_keys_pb.Address.AsObject,
        rseed: Uint8Array | string,
        precisionBits: number,
    }
}

export class MemoPlan extends jspb.Message { 

    hasPlaintext(): boolean;
    clearPlaintext(): void;
    getPlaintext(): MemoPlaintext | undefined;
    setPlaintext(value?: MemoPlaintext): MemoPlan;
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): MemoPlan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemoPlan.AsObject;
    static toObject(includeInstance: boolean, msg: MemoPlan): MemoPlan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemoPlan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemoPlan;
    static deserializeBinaryFromReader(message: MemoPlan, reader: jspb.BinaryReader): MemoPlan;
}

export namespace MemoPlan {
    export type AsObject = {
        plaintext?: MemoPlaintext.AsObject,
        key: Uint8Array | string,
    }
}

export class MemoCiphertext extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): MemoCiphertext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemoCiphertext.AsObject;
    static toObject(includeInstance: boolean, msg: MemoCiphertext): MemoCiphertext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemoCiphertext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemoCiphertext;
    static deserializeBinaryFromReader(message: MemoCiphertext, reader: jspb.BinaryReader): MemoCiphertext;
}

export namespace MemoCiphertext {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class MemoPlaintext extends jspb.Message { 

    hasSender(): boolean;
    clearSender(): void;
    getSender(): penumbra_core_keys_v1alpha1_keys_pb.Address | undefined;
    setSender(value?: penumbra_core_keys_v1alpha1_keys_pb.Address): MemoPlaintext;
    getText(): string;
    setText(value: string): MemoPlaintext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemoPlaintext.AsObject;
    static toObject(includeInstance: boolean, msg: MemoPlaintext): MemoPlaintext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemoPlaintext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemoPlaintext;
    static deserializeBinaryFromReader(message: MemoPlaintext, reader: jspb.BinaryReader): MemoPlaintext;
}

export namespace MemoPlaintext {
    export type AsObject = {
        sender?: penumbra_core_keys_v1alpha1_keys_pb.Address.AsObject,
        text: string,
    }
}

export class MemoView extends jspb.Message { 

    hasVisible(): boolean;
    clearVisible(): void;
    getVisible(): MemoView.Visible | undefined;
    setVisible(value?: MemoView.Visible): MemoView;

    hasOpaque(): boolean;
    clearOpaque(): void;
    getOpaque(): MemoView.Opaque | undefined;
    setOpaque(value?: MemoView.Opaque): MemoView;

    getMemoViewCase(): MemoView.MemoViewCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemoView.AsObject;
    static toObject(includeInstance: boolean, msg: MemoView): MemoView.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemoView, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemoView;
    static deserializeBinaryFromReader(message: MemoView, reader: jspb.BinaryReader): MemoView;
}

export namespace MemoView {
    export type AsObject = {
        visible?: MemoView.Visible.AsObject,
        opaque?: MemoView.Opaque.AsObject,
    }


    export class Visible extends jspb.Message { 

        hasCiphertext(): boolean;
        clearCiphertext(): void;
        getCiphertext(): MemoCiphertext | undefined;
        setCiphertext(value?: MemoCiphertext): Visible;

        hasPlaintext(): boolean;
        clearPlaintext(): void;
        getPlaintext(): MemoPlaintext | undefined;
        setPlaintext(value?: MemoPlaintext): Visible;

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
            ciphertext?: MemoCiphertext.AsObject,
            plaintext?: MemoPlaintext.AsObject,
        }
    }

    export class Opaque extends jspb.Message { 

        hasCiphertext(): boolean;
        clearCiphertext(): void;
        getCiphertext(): MemoCiphertext | undefined;
        setCiphertext(value?: MemoCiphertext): Opaque;

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
            ciphertext?: MemoCiphertext.AsObject,
        }
    }


    export enum MemoViewCase {
        MEMO_VIEW_NOT_SET = 0,
        VISIBLE = 1,
        OPAQUE = 2,
    }

}
