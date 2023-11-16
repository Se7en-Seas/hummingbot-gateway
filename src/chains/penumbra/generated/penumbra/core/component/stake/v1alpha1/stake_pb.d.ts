// package: penumbra.core.component.stake.v1alpha1
// file: penumbra/core/component/stake/v1alpha1/stake.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as penumbra_core_keys_v1alpha1_keys_pb from "../../../../../penumbra/core/keys/v1alpha1/keys_pb";
import * as penumbra_core_num_v1alpha1_num_pb from "../../../../../penumbra/core/num/v1alpha1/num_pb";
import * as penumbra_core_asset_v1alpha1_asset_pb from "../../../../../penumbra/core/asset/v1alpha1/asset_pb";

export class ZKUndelegateClaimProof extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): ZKUndelegateClaimProof;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZKUndelegateClaimProof.AsObject;
    static toObject(includeInstance: boolean, msg: ZKUndelegateClaimProof): ZKUndelegateClaimProof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZKUndelegateClaimProof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZKUndelegateClaimProof;
    static deserializeBinaryFromReader(message: ZKUndelegateClaimProof, reader: jspb.BinaryReader): ZKUndelegateClaimProof;
}

export namespace ZKUndelegateClaimProof {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class Validator extends jspb.Message { 

    hasIdentityKey(): boolean;
    clearIdentityKey(): void;
    getIdentityKey(): penumbra_core_keys_v1alpha1_keys_pb.IdentityKey | undefined;
    setIdentityKey(value?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey): Validator;
    getConsensusKey(): Uint8Array | string;
    getConsensusKey_asU8(): Uint8Array;
    getConsensusKey_asB64(): string;
    setConsensusKey(value: Uint8Array | string): Validator;
    getName(): string;
    setName(value: string): Validator;
    getWebsite(): string;
    setWebsite(value: string): Validator;
    getDescription(): string;
    setDescription(value: string): Validator;
    getEnabled(): boolean;
    setEnabled(value: boolean): Validator;
    clearFundingStreamsList(): void;
    getFundingStreamsList(): Array<FundingStream>;
    setFundingStreamsList(value: Array<FundingStream>): Validator;
    addFundingStreams(value?: FundingStream, index?: number): FundingStream;
    getSequenceNumber(): number;
    setSequenceNumber(value: number): Validator;

    hasGovernanceKey(): boolean;
    clearGovernanceKey(): void;
    getGovernanceKey(): penumbra_core_keys_v1alpha1_keys_pb.GovernanceKey | undefined;
    setGovernanceKey(value?: penumbra_core_keys_v1alpha1_keys_pb.GovernanceKey): Validator;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Validator.AsObject;
    static toObject(includeInstance: boolean, msg: Validator): Validator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Validator, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Validator;
    static deserializeBinaryFromReader(message: Validator, reader: jspb.BinaryReader): Validator;
}

export namespace Validator {
    export type AsObject = {
        identityKey?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.AsObject,
        consensusKey: Uint8Array | string,
        name: string,
        website: string,
        description: string,
        enabled: boolean,
        fundingStreamsList: Array<FundingStream.AsObject>,
        sequenceNumber: number,
        governanceKey?: penumbra_core_keys_v1alpha1_keys_pb.GovernanceKey.AsObject,
    }
}

export class ValidatorList extends jspb.Message { 
    clearValidatorKeysList(): void;
    getValidatorKeysList(): Array<penumbra_core_keys_v1alpha1_keys_pb.IdentityKey>;
    setValidatorKeysList(value: Array<penumbra_core_keys_v1alpha1_keys_pb.IdentityKey>): ValidatorList;
    addValidatorKeys(value?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey, index?: number): penumbra_core_keys_v1alpha1_keys_pb.IdentityKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorList.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorList): ValidatorList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorList;
    static deserializeBinaryFromReader(message: ValidatorList, reader: jspb.BinaryReader): ValidatorList;
}

export namespace ValidatorList {
    export type AsObject = {
        validatorKeysList: Array<penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.AsObject>,
    }
}

export class FundingStream extends jspb.Message { 

    hasToAddress(): boolean;
    clearToAddress(): void;
    getToAddress(): FundingStream.ToAddress | undefined;
    setToAddress(value?: FundingStream.ToAddress): FundingStream;

    hasToDao(): boolean;
    clearToDao(): void;
    getToDao(): FundingStream.ToDao | undefined;
    setToDao(value?: FundingStream.ToDao): FundingStream;

    getRecipientCase(): FundingStream.RecipientCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FundingStream.AsObject;
    static toObject(includeInstance: boolean, msg: FundingStream): FundingStream.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FundingStream, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FundingStream;
    static deserializeBinaryFromReader(message: FundingStream, reader: jspb.BinaryReader): FundingStream;
}

export namespace FundingStream {
    export type AsObject = {
        toAddress?: FundingStream.ToAddress.AsObject,
        toDao?: FundingStream.ToDao.AsObject,
    }


    export class ToAddress extends jspb.Message { 
        getAddress(): string;
        setAddress(value: string): ToAddress;
        getRateBps(): number;
        setRateBps(value: number): ToAddress;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ToAddress.AsObject;
        static toObject(includeInstance: boolean, msg: ToAddress): ToAddress.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ToAddress, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ToAddress;
        static deserializeBinaryFromReader(message: ToAddress, reader: jspb.BinaryReader): ToAddress;
    }

    export namespace ToAddress {
        export type AsObject = {
            address: string,
            rateBps: number,
        }
    }

    export class ToDao extends jspb.Message { 
        getRateBps(): number;
        setRateBps(value: number): ToDao;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ToDao.AsObject;
        static toObject(includeInstance: boolean, msg: ToDao): ToDao.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ToDao, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ToDao;
        static deserializeBinaryFromReader(message: ToDao, reader: jspb.BinaryReader): ToDao;
    }

    export namespace ToDao {
        export type AsObject = {
            rateBps: number,
        }
    }


    export enum RecipientCase {
        RECIPIENT_NOT_SET = 0,
        TO_ADDRESS = 1,
        TO_DAO = 2,
    }

}

export class RateData extends jspb.Message { 

    hasIdentityKey(): boolean;
    clearIdentityKey(): void;
    getIdentityKey(): penumbra_core_keys_v1alpha1_keys_pb.IdentityKey | undefined;
    setIdentityKey(value?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey): RateData;
    getEpochIndex(): number;
    setEpochIndex(value: number): RateData;
    getValidatorRewardRate(): number;
    setValidatorRewardRate(value: number): RateData;
    getValidatorExchangeRate(): number;
    setValidatorExchangeRate(value: number): RateData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RateData.AsObject;
    static toObject(includeInstance: boolean, msg: RateData): RateData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RateData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RateData;
    static deserializeBinaryFromReader(message: RateData, reader: jspb.BinaryReader): RateData;
}

export namespace RateData {
    export type AsObject = {
        identityKey?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.AsObject,
        epochIndex: number,
        validatorRewardRate: number,
        validatorExchangeRate: number,
    }
}

export class BaseRateData extends jspb.Message { 
    getEpochIndex(): number;
    setEpochIndex(value: number): BaseRateData;
    getBaseRewardRate(): number;
    setBaseRewardRate(value: number): BaseRateData;
    getBaseExchangeRate(): number;
    setBaseExchangeRate(value: number): BaseRateData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BaseRateData.AsObject;
    static toObject(includeInstance: boolean, msg: BaseRateData): BaseRateData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BaseRateData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BaseRateData;
    static deserializeBinaryFromReader(message: BaseRateData, reader: jspb.BinaryReader): BaseRateData;
}

export namespace BaseRateData {
    export type AsObject = {
        epochIndex: number,
        baseRewardRate: number,
        baseExchangeRate: number,
    }
}

export class ValidatorStatus extends jspb.Message { 

    hasIdentityKey(): boolean;
    clearIdentityKey(): void;
    getIdentityKey(): penumbra_core_keys_v1alpha1_keys_pb.IdentityKey | undefined;
    setIdentityKey(value?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey): ValidatorStatus;

    hasState(): boolean;
    clearState(): void;
    getState(): ValidatorState | undefined;
    setState(value?: ValidatorState): ValidatorStatus;
    getVotingPower(): number;
    setVotingPower(value: number): ValidatorStatus;

    hasBondingState(): boolean;
    clearBondingState(): void;
    getBondingState(): BondingState | undefined;
    setBondingState(value?: BondingState): ValidatorStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorStatus.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorStatus): ValidatorStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorStatus;
    static deserializeBinaryFromReader(message: ValidatorStatus, reader: jspb.BinaryReader): ValidatorStatus;
}

export namespace ValidatorStatus {
    export type AsObject = {
        identityKey?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.AsObject,
        state?: ValidatorState.AsObject,
        votingPower: number,
        bondingState?: BondingState.AsObject,
    }
}

export class BondingState extends jspb.Message { 
    getState(): BondingState.BondingStateEnum;
    setState(value: BondingState.BondingStateEnum): BondingState;
    getUnbondingEpoch(): number;
    setUnbondingEpoch(value: number): BondingState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BondingState.AsObject;
    static toObject(includeInstance: boolean, msg: BondingState): BondingState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BondingState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BondingState;
    static deserializeBinaryFromReader(message: BondingState, reader: jspb.BinaryReader): BondingState;
}

export namespace BondingState {
    export type AsObject = {
        state: BondingState.BondingStateEnum,
        unbondingEpoch: number,
    }

    export enum BondingStateEnum {
    BONDING_STATE_ENUM_UNSPECIFIED = 0,
    BONDING_STATE_ENUM_BONDED = 1,
    BONDING_STATE_ENUM_UNBONDING = 2,
    BONDING_STATE_ENUM_UNBONDED = 3,
    }

}

export class ValidatorState extends jspb.Message { 
    getState(): ValidatorState.ValidatorStateEnum;
    setState(value: ValidatorState.ValidatorStateEnum): ValidatorState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorState.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorState): ValidatorState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorState;
    static deserializeBinaryFromReader(message: ValidatorState, reader: jspb.BinaryReader): ValidatorState;
}

export namespace ValidatorState {
    export type AsObject = {
        state: ValidatorState.ValidatorStateEnum,
    }

    export enum ValidatorStateEnum {
    VALIDATOR_STATE_ENUM_UNSPECIFIED = 0,
    VALIDATOR_STATE_ENUM_INACTIVE = 1,
    VALIDATOR_STATE_ENUM_ACTIVE = 2,
    VALIDATOR_STATE_ENUM_JAILED = 3,
    VALIDATOR_STATE_ENUM_TOMBSTONED = 4,
    VALIDATOR_STATE_ENUM_DISABLED = 5,
    }

}

export class ValidatorInfo extends jspb.Message { 

    hasValidator(): boolean;
    clearValidator(): void;
    getValidator(): Validator | undefined;
    setValidator(value?: Validator): ValidatorInfo;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): ValidatorStatus | undefined;
    setStatus(value?: ValidatorStatus): ValidatorInfo;

    hasRateData(): boolean;
    clearRateData(): void;
    getRateData(): RateData | undefined;
    setRateData(value?: RateData): ValidatorInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorInfo): ValidatorInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorInfo;
    static deserializeBinaryFromReader(message: ValidatorInfo, reader: jspb.BinaryReader): ValidatorInfo;
}

export namespace ValidatorInfo {
    export type AsObject = {
        validator?: Validator.AsObject,
        status?: ValidatorStatus.AsObject,
        rateData?: RateData.AsObject,
    }
}

export class ValidatorDefinition extends jspb.Message { 

    hasValidator(): boolean;
    clearValidator(): void;
    getValidator(): Validator | undefined;
    setValidator(value?: Validator): ValidatorDefinition;
    getAuthSig(): Uint8Array | string;
    getAuthSig_asU8(): Uint8Array;
    getAuthSig_asB64(): string;
    setAuthSig(value: Uint8Array | string): ValidatorDefinition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorDefinition.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorDefinition): ValidatorDefinition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorDefinition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorDefinition;
    static deserializeBinaryFromReader(message: ValidatorDefinition, reader: jspb.BinaryReader): ValidatorDefinition;
}

export namespace ValidatorDefinition {
    export type AsObject = {
        validator?: Validator.AsObject,
        authSig: Uint8Array | string,
    }
}

export class Delegate extends jspb.Message { 

    hasValidatorIdentity(): boolean;
    clearValidatorIdentity(): void;
    getValidatorIdentity(): penumbra_core_keys_v1alpha1_keys_pb.IdentityKey | undefined;
    setValidatorIdentity(value?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey): Delegate;
    getEpochIndex(): number;
    setEpochIndex(value: number): Delegate;

    hasUnbondedAmount(): boolean;
    clearUnbondedAmount(): void;
    getUnbondedAmount(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setUnbondedAmount(value?: penumbra_core_num_v1alpha1_num_pb.Amount): Delegate;

    hasDelegationAmount(): boolean;
    clearDelegationAmount(): void;
    getDelegationAmount(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setDelegationAmount(value?: penumbra_core_num_v1alpha1_num_pb.Amount): Delegate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Delegate.AsObject;
    static toObject(includeInstance: boolean, msg: Delegate): Delegate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Delegate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Delegate;
    static deserializeBinaryFromReader(message: Delegate, reader: jspb.BinaryReader): Delegate;
}

export namespace Delegate {
    export type AsObject = {
        validatorIdentity?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.AsObject,
        epochIndex: number,
        unbondedAmount?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        delegationAmount?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
    }
}

export class Undelegate extends jspb.Message { 

    hasValidatorIdentity(): boolean;
    clearValidatorIdentity(): void;
    getValidatorIdentity(): penumbra_core_keys_v1alpha1_keys_pb.IdentityKey | undefined;
    setValidatorIdentity(value?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey): Undelegate;
    getStartEpochIndex(): number;
    setStartEpochIndex(value: number): Undelegate;

    hasUnbondedAmount(): boolean;
    clearUnbondedAmount(): void;
    getUnbondedAmount(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setUnbondedAmount(value?: penumbra_core_num_v1alpha1_num_pb.Amount): Undelegate;

    hasDelegationAmount(): boolean;
    clearDelegationAmount(): void;
    getDelegationAmount(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setDelegationAmount(value?: penumbra_core_num_v1alpha1_num_pb.Amount): Undelegate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Undelegate.AsObject;
    static toObject(includeInstance: boolean, msg: Undelegate): Undelegate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Undelegate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Undelegate;
    static deserializeBinaryFromReader(message: Undelegate, reader: jspb.BinaryReader): Undelegate;
}

export namespace Undelegate {
    export type AsObject = {
        validatorIdentity?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.AsObject,
        startEpochIndex: number,
        unbondedAmount?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        delegationAmount?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
    }
}

export class UndelegateClaim extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): UndelegateClaimBody | undefined;
    setBody(value?: UndelegateClaimBody): UndelegateClaim;
    getProof(): Uint8Array | string;
    getProof_asU8(): Uint8Array;
    getProof_asB64(): string;
    setProof(value: Uint8Array | string): UndelegateClaim;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UndelegateClaim.AsObject;
    static toObject(includeInstance: boolean, msg: UndelegateClaim): UndelegateClaim.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UndelegateClaim, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UndelegateClaim;
    static deserializeBinaryFromReader(message: UndelegateClaim, reader: jspb.BinaryReader): UndelegateClaim;
}

export namespace UndelegateClaim {
    export type AsObject = {
        body?: UndelegateClaimBody.AsObject,
        proof: Uint8Array | string,
    }
}

export class UndelegateClaimBody extends jspb.Message { 

    hasValidatorIdentity(): boolean;
    clearValidatorIdentity(): void;
    getValidatorIdentity(): penumbra_core_keys_v1alpha1_keys_pb.IdentityKey | undefined;
    setValidatorIdentity(value?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey): UndelegateClaimBody;
    getStartEpochIndex(): number;
    setStartEpochIndex(value: number): UndelegateClaimBody;

    hasPenalty(): boolean;
    clearPenalty(): void;
    getPenalty(): Penalty | undefined;
    setPenalty(value?: Penalty): UndelegateClaimBody;

    hasBalanceCommitment(): boolean;
    clearBalanceCommitment(): void;
    getBalanceCommitment(): penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment | undefined;
    setBalanceCommitment(value?: penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment): UndelegateClaimBody;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UndelegateClaimBody.AsObject;
    static toObject(includeInstance: boolean, msg: UndelegateClaimBody): UndelegateClaimBody.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UndelegateClaimBody, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UndelegateClaimBody;
    static deserializeBinaryFromReader(message: UndelegateClaimBody, reader: jspb.BinaryReader): UndelegateClaimBody;
}

export namespace UndelegateClaimBody {
    export type AsObject = {
        validatorIdentity?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.AsObject,
        startEpochIndex: number,
        penalty?: Penalty.AsObject,
        balanceCommitment?: penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment.AsObject,
    }
}

export class UndelegateClaimPlan extends jspb.Message { 

    hasValidatorIdentity(): boolean;
    clearValidatorIdentity(): void;
    getValidatorIdentity(): penumbra_core_keys_v1alpha1_keys_pb.IdentityKey | undefined;
    setValidatorIdentity(value?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey): UndelegateClaimPlan;
    getStartEpochIndex(): number;
    setStartEpochIndex(value: number): UndelegateClaimPlan;

    hasPenalty(): boolean;
    clearPenalty(): void;
    getPenalty(): Penalty | undefined;
    setPenalty(value?: Penalty): UndelegateClaimPlan;

    hasUnbondingAmount(): boolean;
    clearUnbondingAmount(): void;
    getUnbondingAmount(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setUnbondingAmount(value?: penumbra_core_num_v1alpha1_num_pb.Amount): UndelegateClaimPlan;
    getBalanceBlinding(): Uint8Array | string;
    getBalanceBlinding_asU8(): Uint8Array;
    getBalanceBlinding_asB64(): string;
    setBalanceBlinding(value: Uint8Array | string): UndelegateClaimPlan;
    getProofBlindingR(): Uint8Array | string;
    getProofBlindingR_asU8(): Uint8Array;
    getProofBlindingR_asB64(): string;
    setProofBlindingR(value: Uint8Array | string): UndelegateClaimPlan;
    getProofBlindingS(): Uint8Array | string;
    getProofBlindingS_asU8(): Uint8Array;
    getProofBlindingS_asB64(): string;
    setProofBlindingS(value: Uint8Array | string): UndelegateClaimPlan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UndelegateClaimPlan.AsObject;
    static toObject(includeInstance: boolean, msg: UndelegateClaimPlan): UndelegateClaimPlan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UndelegateClaimPlan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UndelegateClaimPlan;
    static deserializeBinaryFromReader(message: UndelegateClaimPlan, reader: jspb.BinaryReader): UndelegateClaimPlan;
}

export namespace UndelegateClaimPlan {
    export type AsObject = {
        validatorIdentity?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.AsObject,
        startEpochIndex: number,
        penalty?: Penalty.AsObject,
        unbondingAmount?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        balanceBlinding: Uint8Array | string,
        proofBlindingR: Uint8Array | string,
        proofBlindingS: Uint8Array | string,
    }
}

export class DelegationChanges extends jspb.Message { 
    clearDelegationsList(): void;
    getDelegationsList(): Array<Delegate>;
    setDelegationsList(value: Array<Delegate>): DelegationChanges;
    addDelegations(value?: Delegate, index?: number): Delegate;
    clearUndelegationsList(): void;
    getUndelegationsList(): Array<Undelegate>;
    setUndelegationsList(value: Array<Undelegate>): DelegationChanges;
    addUndelegations(value?: Undelegate, index?: number): Undelegate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelegationChanges.AsObject;
    static toObject(includeInstance: boolean, msg: DelegationChanges): DelegationChanges.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelegationChanges, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelegationChanges;
    static deserializeBinaryFromReader(message: DelegationChanges, reader: jspb.BinaryReader): DelegationChanges;
}

export namespace DelegationChanges {
    export type AsObject = {
        delegationsList: Array<Delegate.AsObject>,
        undelegationsList: Array<Undelegate.AsObject>,
    }
}

export class Uptime extends jspb.Message { 
    getAsOfBlockHeight(): number;
    setAsOfBlockHeight(value: number): Uptime;
    getWindowLen(): number;
    setWindowLen(value: number): Uptime;
    getBitvec(): Uint8Array | string;
    getBitvec_asU8(): Uint8Array;
    getBitvec_asB64(): string;
    setBitvec(value: Uint8Array | string): Uptime;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Uptime.AsObject;
    static toObject(includeInstance: boolean, msg: Uptime): Uptime.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Uptime, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Uptime;
    static deserializeBinaryFromReader(message: Uptime, reader: jspb.BinaryReader): Uptime;
}

export namespace Uptime {
    export type AsObject = {
        asOfBlockHeight: number,
        windowLen: number,
        bitvec: Uint8Array | string,
    }
}

export class CurrentConsensusKeys extends jspb.Message { 
    clearConsensusKeysList(): void;
    getConsensusKeysList(): Array<penumbra_core_keys_v1alpha1_keys_pb.ConsensusKey>;
    setConsensusKeysList(value: Array<penumbra_core_keys_v1alpha1_keys_pb.ConsensusKey>): CurrentConsensusKeys;
    addConsensusKeys(value?: penumbra_core_keys_v1alpha1_keys_pb.ConsensusKey, index?: number): penumbra_core_keys_v1alpha1_keys_pb.ConsensusKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CurrentConsensusKeys.AsObject;
    static toObject(includeInstance: boolean, msg: CurrentConsensusKeys): CurrentConsensusKeys.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CurrentConsensusKeys, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CurrentConsensusKeys;
    static deserializeBinaryFromReader(message: CurrentConsensusKeys, reader: jspb.BinaryReader): CurrentConsensusKeys;
}

export namespace CurrentConsensusKeys {
    export type AsObject = {
        consensusKeysList: Array<penumbra_core_keys_v1alpha1_keys_pb.ConsensusKey.AsObject>,
    }
}

export class Penalty extends jspb.Message { 
    getInner(): number;
    setInner(value: number): Penalty;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Penalty.AsObject;
    static toObject(includeInstance: boolean, msg: Penalty): Penalty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Penalty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Penalty;
    static deserializeBinaryFromReader(message: Penalty, reader: jspb.BinaryReader): Penalty;
}

export namespace Penalty {
    export type AsObject = {
        inner: number,
    }
}

export class ValidatorInfoRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): ValidatorInfoRequest;
    getShowInactive(): boolean;
    setShowInactive(value: boolean): ValidatorInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorInfoRequest): ValidatorInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorInfoRequest;
    static deserializeBinaryFromReader(message: ValidatorInfoRequest, reader: jspb.BinaryReader): ValidatorInfoRequest;
}

export namespace ValidatorInfoRequest {
    export type AsObject = {
        chainId: string,
        showInactive: boolean,
    }
}

export class ValidatorInfoResponse extends jspb.Message { 

    hasValidatorInfo(): boolean;
    clearValidatorInfo(): void;
    getValidatorInfo(): ValidatorInfo | undefined;
    setValidatorInfo(value?: ValidatorInfo): ValidatorInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorInfoResponse): ValidatorInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorInfoResponse;
    static deserializeBinaryFromReader(message: ValidatorInfoResponse, reader: jspb.BinaryReader): ValidatorInfoResponse;
}

export namespace ValidatorInfoResponse {
    export type AsObject = {
        validatorInfo?: ValidatorInfo.AsObject,
    }
}

export class ValidatorStatusRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): ValidatorStatusRequest;

    hasIdentityKey(): boolean;
    clearIdentityKey(): void;
    getIdentityKey(): penumbra_core_keys_v1alpha1_keys_pb.IdentityKey | undefined;
    setIdentityKey(value?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey): ValidatorStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorStatusRequest): ValidatorStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorStatusRequest;
    static deserializeBinaryFromReader(message: ValidatorStatusRequest, reader: jspb.BinaryReader): ValidatorStatusRequest;
}

export namespace ValidatorStatusRequest {
    export type AsObject = {
        chainId: string,
        identityKey?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.AsObject,
    }
}

export class ValidatorStatusResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): ValidatorStatus | undefined;
    setStatus(value?: ValidatorStatus): ValidatorStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorStatusResponse): ValidatorStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorStatusResponse;
    static deserializeBinaryFromReader(message: ValidatorStatusResponse, reader: jspb.BinaryReader): ValidatorStatusResponse;
}

export namespace ValidatorStatusResponse {
    export type AsObject = {
        status?: ValidatorStatus.AsObject,
    }
}

export class ValidatorPenaltyRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): ValidatorPenaltyRequest;

    hasIdentityKey(): boolean;
    clearIdentityKey(): void;
    getIdentityKey(): penumbra_core_keys_v1alpha1_keys_pb.IdentityKey | undefined;
    setIdentityKey(value?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey): ValidatorPenaltyRequest;
    getStartEpochIndex(): number;
    setStartEpochIndex(value: number): ValidatorPenaltyRequest;
    getEndEpochIndex(): number;
    setEndEpochIndex(value: number): ValidatorPenaltyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorPenaltyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorPenaltyRequest): ValidatorPenaltyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorPenaltyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorPenaltyRequest;
    static deserializeBinaryFromReader(message: ValidatorPenaltyRequest, reader: jspb.BinaryReader): ValidatorPenaltyRequest;
}

export namespace ValidatorPenaltyRequest {
    export type AsObject = {
        chainId: string,
        identityKey?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.AsObject,
        startEpochIndex: number,
        endEpochIndex: number,
    }
}

export class ValidatorPenaltyResponse extends jspb.Message { 

    hasPenalty(): boolean;
    clearPenalty(): void;
    getPenalty(): Penalty | undefined;
    setPenalty(value?: Penalty): ValidatorPenaltyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorPenaltyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorPenaltyResponse): ValidatorPenaltyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorPenaltyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorPenaltyResponse;
    static deserializeBinaryFromReader(message: ValidatorPenaltyResponse, reader: jspb.BinaryReader): ValidatorPenaltyResponse;
}

export namespace ValidatorPenaltyResponse {
    export type AsObject = {
        penalty?: Penalty.AsObject,
    }
}

export class CurrentValidatorRateRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): CurrentValidatorRateRequest;

    hasIdentityKey(): boolean;
    clearIdentityKey(): void;
    getIdentityKey(): penumbra_core_keys_v1alpha1_keys_pb.IdentityKey | undefined;
    setIdentityKey(value?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey): CurrentValidatorRateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CurrentValidatorRateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CurrentValidatorRateRequest): CurrentValidatorRateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CurrentValidatorRateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CurrentValidatorRateRequest;
    static deserializeBinaryFromReader(message: CurrentValidatorRateRequest, reader: jspb.BinaryReader): CurrentValidatorRateRequest;
}

export namespace CurrentValidatorRateRequest {
    export type AsObject = {
        chainId: string,
        identityKey?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.AsObject,
    }
}

export class CurrentValidatorRateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): RateData | undefined;
    setData(value?: RateData): CurrentValidatorRateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CurrentValidatorRateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CurrentValidatorRateResponse): CurrentValidatorRateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CurrentValidatorRateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CurrentValidatorRateResponse;
    static deserializeBinaryFromReader(message: CurrentValidatorRateResponse, reader: jspb.BinaryReader): CurrentValidatorRateResponse;
}

export namespace CurrentValidatorRateResponse {
    export type AsObject = {
        data?: RateData.AsObject,
    }
}

export class NextValidatorRateRequest extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): NextValidatorRateRequest;

    hasIdentityKey(): boolean;
    clearIdentityKey(): void;
    getIdentityKey(): penumbra_core_keys_v1alpha1_keys_pb.IdentityKey | undefined;
    setIdentityKey(value?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey): NextValidatorRateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NextValidatorRateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NextValidatorRateRequest): NextValidatorRateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NextValidatorRateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NextValidatorRateRequest;
    static deserializeBinaryFromReader(message: NextValidatorRateRequest, reader: jspb.BinaryReader): NextValidatorRateRequest;
}

export namespace NextValidatorRateRequest {
    export type AsObject = {
        chainId: string,
        identityKey?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.AsObject,
    }
}

export class NextValidatorRateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): RateData | undefined;
    setData(value?: RateData): NextValidatorRateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NextValidatorRateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NextValidatorRateResponse): NextValidatorRateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NextValidatorRateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NextValidatorRateResponse;
    static deserializeBinaryFromReader(message: NextValidatorRateResponse, reader: jspb.BinaryReader): NextValidatorRateResponse;
}

export namespace NextValidatorRateResponse {
    export type AsObject = {
        data?: RateData.AsObject,
    }
}

export class StakeParameters extends jspb.Message { 
    getUnbondingEpochs(): number;
    setUnbondingEpochs(value: number): StakeParameters;
    getActiveValidatorLimit(): number;
    setActiveValidatorLimit(value: number): StakeParameters;
    getBaseRewardRate(): number;
    setBaseRewardRate(value: number): StakeParameters;
    getSlashingPenaltyMisbehavior(): number;
    setSlashingPenaltyMisbehavior(value: number): StakeParameters;
    getSlashingPenaltyDowntime(): number;
    setSlashingPenaltyDowntime(value: number): StakeParameters;
    getSignedBlocksWindowLen(): number;
    setSignedBlocksWindowLen(value: number): StakeParameters;
    getMissedBlocksMaximum(): number;
    setMissedBlocksMaximum(value: number): StakeParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakeParameters.AsObject;
    static toObject(includeInstance: boolean, msg: StakeParameters): StakeParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakeParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakeParameters;
    static deserializeBinaryFromReader(message: StakeParameters, reader: jspb.BinaryReader): StakeParameters;
}

export namespace StakeParameters {
    export type AsObject = {
        unbondingEpochs: number,
        activeValidatorLimit: number,
        baseRewardRate: number,
        slashingPenaltyMisbehavior: number,
        slashingPenaltyDowntime: number,
        signedBlocksWindowLen: number,
        missedBlocksMaximum: number,
    }
}

export class GenesisContent extends jspb.Message { 

    hasStakeParams(): boolean;
    clearStakeParams(): void;
    getStakeParams(): StakeParameters | undefined;
    setStakeParams(value?: StakeParameters): GenesisContent;
    clearValidatorsList(): void;
    getValidatorsList(): Array<Validator>;
    setValidatorsList(value: Array<Validator>): GenesisContent;
    addValidators(value?: Validator, index?: number): Validator;

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
        stakeParams?: StakeParameters.AsObject,
        validatorsList: Array<Validator.AsObject>,
    }
}
