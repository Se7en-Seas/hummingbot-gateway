// package: penumbra.view.v1alpha1
// file: penumbra/view/v1alpha1/view.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as penumbra_crypto_tct_v1alpha1_tct_pb from "../../../penumbra/crypto/tct/v1alpha1/tct_pb";
import * as penumbra_core_keys_v1alpha1_keys_pb from "../../../penumbra/core/keys/v1alpha1/keys_pb";
import * as penumbra_core_num_v1alpha1_num_pb from "../../../penumbra/core/num/v1alpha1/num_pb";
import * as penumbra_core_app_v1alpha1_app_pb from "../../../penumbra/core/app/v1alpha1/app_pb";
import * as penumbra_core_asset_v1alpha1_asset_pb from "../../../penumbra/core/asset/v1alpha1/asset_pb";
import * as penumbra_core_transaction_v1alpha1_transaction_pb from "../../../penumbra/core/transaction/v1alpha1/transaction_pb";
import * as penumbra_core_component_chain_v1alpha1_chain_pb from "../../../penumbra/core/component/chain/v1alpha1/chain_pb";
import * as penumbra_core_component_dex_v1alpha1_dex_pb from "../../../penumbra/core/component/dex/v1alpha1/dex_pb";
import * as penumbra_core_component_fee_v1alpha1_fee_pb from "../../../penumbra/core/component/fee/v1alpha1/fee_pb";
import * as penumbra_core_component_ibc_v1alpha1_ibc_pb from "../../../penumbra/core/component/ibc/v1alpha1/ibc_pb";
import * as penumbra_core_component_sct_v1alpha1_sct_pb from "../../../penumbra/core/component/sct/v1alpha1/sct_pb";
import * as penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb from "../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb";
import * as penumbra_core_component_stake_v1alpha1_stake_pb from "../../../penumbra/core/component/stake/v1alpha1/stake_pb";

export class AuthorizeAndBuildRequest extends jspb.Message { 

    hasTransactionPlan(): boolean;
    clearTransactionPlan(): void;
    getTransactionPlan(): penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan | undefined;
    setTransactionPlan(value?: penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan): AuthorizeAndBuildRequest;

    hasAuthorizationData(): boolean;
    clearAuthorizationData(): void;
    getAuthorizationData(): penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData | undefined;
    setAuthorizationData(value?: penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData): AuthorizeAndBuildRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizeAndBuildRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizeAndBuildRequest): AuthorizeAndBuildRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizeAndBuildRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizeAndBuildRequest;
    static deserializeBinaryFromReader(message: AuthorizeAndBuildRequest, reader: jspb.BinaryReader): AuthorizeAndBuildRequest;
}

export namespace AuthorizeAndBuildRequest {
    export type AsObject = {
        transactionPlan?: penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan.AsObject,
        authorizationData?: penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData.AsObject,
    }
}

export class AuthorizeAndBuildResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): penumbra_core_transaction_v1alpha1_transaction_pb.Transaction | undefined;
    setTransaction(value?: penumbra_core_transaction_v1alpha1_transaction_pb.Transaction): AuthorizeAndBuildResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizeAndBuildResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizeAndBuildResponse): AuthorizeAndBuildResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizeAndBuildResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizeAndBuildResponse;
    static deserializeBinaryFromReader(message: AuthorizeAndBuildResponse, reader: jspb.BinaryReader): AuthorizeAndBuildResponse;
}

export namespace AuthorizeAndBuildResponse {
    export type AsObject = {
        transaction?: penumbra_core_transaction_v1alpha1_transaction_pb.Transaction.AsObject,
    }
}

export class BroadcastTransactionRequest extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): penumbra_core_transaction_v1alpha1_transaction_pb.Transaction | undefined;
    setTransaction(value?: penumbra_core_transaction_v1alpha1_transaction_pb.Transaction): BroadcastTransactionRequest;
    getAwaitDetection(): boolean;
    setAwaitDetection(value: boolean): BroadcastTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BroadcastTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BroadcastTransactionRequest): BroadcastTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BroadcastTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BroadcastTransactionRequest;
    static deserializeBinaryFromReader(message: BroadcastTransactionRequest, reader: jspb.BinaryReader): BroadcastTransactionRequest;
}

export namespace BroadcastTransactionRequest {
    export type AsObject = {
        transaction?: penumbra_core_transaction_v1alpha1_transaction_pb.Transaction.AsObject,
        awaitDetection: boolean,
    }
}

export class BroadcastTransactionResponse extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): penumbra_core_transaction_v1alpha1_transaction_pb.Id | undefined;
    setId(value?: penumbra_core_transaction_v1alpha1_transaction_pb.Id): BroadcastTransactionResponse;
    getDetectionHeight(): number;
    setDetectionHeight(value: number): BroadcastTransactionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BroadcastTransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BroadcastTransactionResponse): BroadcastTransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BroadcastTransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BroadcastTransactionResponse;
    static deserializeBinaryFromReader(message: BroadcastTransactionResponse, reader: jspb.BinaryReader): BroadcastTransactionResponse;
}

export namespace BroadcastTransactionResponse {
    export type AsObject = {
        id?: penumbra_core_transaction_v1alpha1_transaction_pb.Id.AsObject,
        detectionHeight: number,
    }
}

export class TransactionPlannerRequest extends jspb.Message { 
    getExpiryHeight(): number;
    setExpiryHeight(value: number): TransactionPlannerRequest;

    hasFee(): boolean;
    clearFee(): void;
    getFee(): penumbra_core_component_fee_v1alpha1_fee_pb.Fee | undefined;
    setFee(value?: penumbra_core_component_fee_v1alpha1_fee_pb.Fee): TransactionPlannerRequest;

    hasMemo(): boolean;
    clearMemo(): void;
    getMemo(): penumbra_core_transaction_v1alpha1_transaction_pb.MemoPlaintext | undefined;
    setMemo(value?: penumbra_core_transaction_v1alpha1_transaction_pb.MemoPlaintext): TransactionPlannerRequest;

    hasSource(): boolean;
    clearSource(): void;
    getSource(): penumbra_core_keys_v1alpha1_keys_pb.AddressIndex | undefined;
    setSource(value?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex): TransactionPlannerRequest;

    hasWalletId(): boolean;
    clearWalletId(): void;
    getWalletId(): penumbra_core_keys_v1alpha1_keys_pb.WalletId | undefined;
    setWalletId(value?: penumbra_core_keys_v1alpha1_keys_pb.WalletId): TransactionPlannerRequest;
    clearOutputsList(): void;
    getOutputsList(): Array<TransactionPlannerRequest.Output>;
    setOutputsList(value: Array<TransactionPlannerRequest.Output>): TransactionPlannerRequest;
    addOutputs(value?: TransactionPlannerRequest.Output, index?: number): TransactionPlannerRequest.Output;
    clearSwapsList(): void;
    getSwapsList(): Array<TransactionPlannerRequest.Swap>;
    setSwapsList(value: Array<TransactionPlannerRequest.Swap>): TransactionPlannerRequest;
    addSwaps(value?: TransactionPlannerRequest.Swap, index?: number): TransactionPlannerRequest.Swap;
    clearSwapClaimsList(): void;
    getSwapClaimsList(): Array<TransactionPlannerRequest.SwapClaim>;
    setSwapClaimsList(value: Array<TransactionPlannerRequest.SwapClaim>): TransactionPlannerRequest;
    addSwapClaims(value?: TransactionPlannerRequest.SwapClaim, index?: number): TransactionPlannerRequest.SwapClaim;
    clearDelegationsList(): void;
    getDelegationsList(): Array<TransactionPlannerRequest.Delegate>;
    setDelegationsList(value: Array<TransactionPlannerRequest.Delegate>): TransactionPlannerRequest;
    addDelegations(value?: TransactionPlannerRequest.Delegate, index?: number): TransactionPlannerRequest.Delegate;
    clearUndelegationsList(): void;
    getUndelegationsList(): Array<TransactionPlannerRequest.Undelegate>;
    setUndelegationsList(value: Array<TransactionPlannerRequest.Undelegate>): TransactionPlannerRequest;
    addUndelegations(value?: TransactionPlannerRequest.Undelegate, index?: number): TransactionPlannerRequest.Undelegate;
    clearIbcActionsList(): void;
    getIbcActionsList(): Array<penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction>;
    setIbcActionsList(value: Array<penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction>): TransactionPlannerRequest;
    addIbcActions(value?: penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction, index?: number): penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction;
    clearIcs20WithdrawalsList(): void;
    getIcs20WithdrawalsList(): Array<penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal>;
    setIcs20WithdrawalsList(value: Array<penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal>): TransactionPlannerRequest;
    addIcs20Withdrawals(value?: penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal, index?: number): penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal;
    clearPositionOpensList(): void;
    getPositionOpensList(): Array<TransactionPlannerRequest.PositionOpen>;
    setPositionOpensList(value: Array<TransactionPlannerRequest.PositionOpen>): TransactionPlannerRequest;
    addPositionOpens(value?: TransactionPlannerRequest.PositionOpen, index?: number): TransactionPlannerRequest.PositionOpen;
    clearPositionClosesList(): void;
    getPositionClosesList(): Array<TransactionPlannerRequest.PositionClose>;
    setPositionClosesList(value: Array<TransactionPlannerRequest.PositionClose>): TransactionPlannerRequest;
    addPositionCloses(value?: TransactionPlannerRequest.PositionClose, index?: number): TransactionPlannerRequest.PositionClose;
    clearPositionWithdrawsList(): void;
    getPositionWithdrawsList(): Array<TransactionPlannerRequest.PositionWithdraw>;
    setPositionWithdrawsList(value: Array<TransactionPlannerRequest.PositionWithdraw>): TransactionPlannerRequest;
    addPositionWithdraws(value?: TransactionPlannerRequest.PositionWithdraw, index?: number): TransactionPlannerRequest.PositionWithdraw;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionPlannerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionPlannerRequest): TransactionPlannerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionPlannerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionPlannerRequest;
    static deserializeBinaryFromReader(message: TransactionPlannerRequest, reader: jspb.BinaryReader): TransactionPlannerRequest;
}

export namespace TransactionPlannerRequest {
    export type AsObject = {
        expiryHeight: number,
        fee?: penumbra_core_component_fee_v1alpha1_fee_pb.Fee.AsObject,
        memo?: penumbra_core_transaction_v1alpha1_transaction_pb.MemoPlaintext.AsObject,
        source?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.AsObject,
        walletId?: penumbra_core_keys_v1alpha1_keys_pb.WalletId.AsObject,
        outputsList: Array<TransactionPlannerRequest.Output.AsObject>,
        swapsList: Array<TransactionPlannerRequest.Swap.AsObject>,
        swapClaimsList: Array<TransactionPlannerRequest.SwapClaim.AsObject>,
        delegationsList: Array<TransactionPlannerRequest.Delegate.AsObject>,
        undelegationsList: Array<TransactionPlannerRequest.Undelegate.AsObject>,
        ibcActionsList: Array<penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction.AsObject>,
        ics20WithdrawalsList: Array<penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal.AsObject>,
        positionOpensList: Array<TransactionPlannerRequest.PositionOpen.AsObject>,
        positionClosesList: Array<TransactionPlannerRequest.PositionClose.AsObject>,
        positionWithdrawsList: Array<TransactionPlannerRequest.PositionWithdraw.AsObject>,
    }


    export class Output extends jspb.Message { 

        hasValue(): boolean;
        clearValue(): void;
        getValue(): penumbra_core_asset_v1alpha1_asset_pb.Value | undefined;
        setValue(value?: penumbra_core_asset_v1alpha1_asset_pb.Value): Output;

        hasAddress(): boolean;
        clearAddress(): void;
        getAddress(): penumbra_core_keys_v1alpha1_keys_pb.Address | undefined;
        setAddress(value?: penumbra_core_keys_v1alpha1_keys_pb.Address): Output;

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
            value?: penumbra_core_asset_v1alpha1_asset_pb.Value.AsObject,
            address?: penumbra_core_keys_v1alpha1_keys_pb.Address.AsObject,
        }
    }

    export class Swap extends jspb.Message { 

        hasValue(): boolean;
        clearValue(): void;
        getValue(): penumbra_core_asset_v1alpha1_asset_pb.Value | undefined;
        setValue(value?: penumbra_core_asset_v1alpha1_asset_pb.Value): Swap;

        hasTargetAsset(): boolean;
        clearTargetAsset(): void;
        getTargetAsset(): penumbra_core_asset_v1alpha1_asset_pb.AssetId | undefined;
        setTargetAsset(value?: penumbra_core_asset_v1alpha1_asset_pb.AssetId): Swap;

        hasFee(): boolean;
        clearFee(): void;
        getFee(): penumbra_core_component_fee_v1alpha1_fee_pb.Fee | undefined;
        setFee(value?: penumbra_core_component_fee_v1alpha1_fee_pb.Fee): Swap;

        hasClaimAddress(): boolean;
        clearClaimAddress(): void;
        getClaimAddress(): penumbra_core_keys_v1alpha1_keys_pb.Address | undefined;
        setClaimAddress(value?: penumbra_core_keys_v1alpha1_keys_pb.Address): Swap;

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
            value?: penumbra_core_asset_v1alpha1_asset_pb.Value.AsObject,
            targetAsset?: penumbra_core_asset_v1alpha1_asset_pb.AssetId.AsObject,
            fee?: penumbra_core_component_fee_v1alpha1_fee_pb.Fee.AsObject,
            claimAddress?: penumbra_core_keys_v1alpha1_keys_pb.Address.AsObject,
        }
    }

    export class SwapClaim extends jspb.Message { 

        hasSwapCommitment(): boolean;
        clearSwapCommitment(): void;
        getSwapCommitment(): penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment | undefined;
        setSwapCommitment(value?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment): SwapClaim;

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
            swapCommitment?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.AsObject,
        }
    }

    export class Delegate extends jspb.Message { 

        hasAmount(): boolean;
        clearAmount(): void;
        getAmount(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
        setAmount(value?: penumbra_core_num_v1alpha1_num_pb.Amount): Delegate;

        hasRateData(): boolean;
        clearRateData(): void;
        getRateData(): penumbra_core_component_stake_v1alpha1_stake_pb.RateData | undefined;
        setRateData(value?: penumbra_core_component_stake_v1alpha1_stake_pb.RateData): Delegate;

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
            amount?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
            rateData?: penumbra_core_component_stake_v1alpha1_stake_pb.RateData.AsObject,
        }
    }

    export class Undelegate extends jspb.Message { 

        hasValue(): boolean;
        clearValue(): void;
        getValue(): penumbra_core_asset_v1alpha1_asset_pb.Value | undefined;
        setValue(value?: penumbra_core_asset_v1alpha1_asset_pb.Value): Undelegate;

        hasRateData(): boolean;
        clearRateData(): void;
        getRateData(): penumbra_core_component_stake_v1alpha1_stake_pb.RateData | undefined;
        setRateData(value?: penumbra_core_component_stake_v1alpha1_stake_pb.RateData): Undelegate;

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
            value?: penumbra_core_asset_v1alpha1_asset_pb.Value.AsObject,
            rateData?: penumbra_core_component_stake_v1alpha1_stake_pb.RateData.AsObject,
        }
    }

    export class PositionOpen extends jspb.Message { 

        hasPosition(): boolean;
        clearPosition(): void;
        getPosition(): penumbra_core_component_dex_v1alpha1_dex_pb.Position | undefined;
        setPosition(value?: penumbra_core_component_dex_v1alpha1_dex_pb.Position): PositionOpen;

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
            position?: penumbra_core_component_dex_v1alpha1_dex_pb.Position.AsObject,
        }
    }

    export class PositionClose extends jspb.Message { 

        hasPositionId(): boolean;
        clearPositionId(): void;
        getPositionId(): penumbra_core_component_dex_v1alpha1_dex_pb.PositionId | undefined;
        setPositionId(value?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionId): PositionClose;

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
            positionId?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionId.AsObject,
        }
    }

    export class PositionWithdraw extends jspb.Message { 

        hasPositionId(): boolean;
        clearPositionId(): void;
        getPositionId(): penumbra_core_component_dex_v1alpha1_dex_pb.PositionId | undefined;
        setPositionId(value?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionId): PositionWithdraw;

        hasReserves(): boolean;
        clearReserves(): void;
        getReserves(): penumbra_core_component_dex_v1alpha1_dex_pb.Reserves | undefined;
        setReserves(value?: penumbra_core_component_dex_v1alpha1_dex_pb.Reserves): PositionWithdraw;

        hasTradingPair(): boolean;
        clearTradingPair(): void;
        getTradingPair(): penumbra_core_component_dex_v1alpha1_dex_pb.TradingPair | undefined;
        setTradingPair(value?: penumbra_core_component_dex_v1alpha1_dex_pb.TradingPair): PositionWithdraw;

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
            positionId?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionId.AsObject,
            reserves?: penumbra_core_component_dex_v1alpha1_dex_pb.Reserves.AsObject,
            tradingPair?: penumbra_core_component_dex_v1alpha1_dex_pb.TradingPair.AsObject,
        }
    }

}

export class TransactionPlannerResponse extends jspb.Message { 

    hasPlan(): boolean;
    clearPlan(): void;
    getPlan(): penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan | undefined;
    setPlan(value?: penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan): TransactionPlannerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionPlannerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionPlannerResponse): TransactionPlannerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionPlannerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionPlannerResponse;
    static deserializeBinaryFromReader(message: TransactionPlannerResponse, reader: jspb.BinaryReader): TransactionPlannerResponse;
}

export namespace TransactionPlannerResponse {
    export type AsObject = {
        plan?: penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan.AsObject,
    }
}

export class AddressByIndexRequest extends jspb.Message { 

    hasAddressIndex(): boolean;
    clearAddressIndex(): void;
    getAddressIndex(): penumbra_core_keys_v1alpha1_keys_pb.AddressIndex | undefined;
    setAddressIndex(value?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex): AddressByIndexRequest;
    getDisplayConfirm(): boolean;
    setDisplayConfirm(value: boolean): AddressByIndexRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddressByIndexRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddressByIndexRequest): AddressByIndexRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddressByIndexRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddressByIndexRequest;
    static deserializeBinaryFromReader(message: AddressByIndexRequest, reader: jspb.BinaryReader): AddressByIndexRequest;
}

export namespace AddressByIndexRequest {
    export type AsObject = {
        addressIndex?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.AsObject,
        displayConfirm: boolean,
    }
}

export class AddressByIndexResponse extends jspb.Message { 

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): penumbra_core_keys_v1alpha1_keys_pb.Address | undefined;
    setAddress(value?: penumbra_core_keys_v1alpha1_keys_pb.Address): AddressByIndexResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddressByIndexResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddressByIndexResponse): AddressByIndexResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddressByIndexResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddressByIndexResponse;
    static deserializeBinaryFromReader(message: AddressByIndexResponse, reader: jspb.BinaryReader): AddressByIndexResponse;
}

export namespace AddressByIndexResponse {
    export type AsObject = {
        address?: penumbra_core_keys_v1alpha1_keys_pb.Address.AsObject,
    }
}

export class WalletIdRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WalletIdRequest): WalletIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletIdRequest;
    static deserializeBinaryFromReader(message: WalletIdRequest, reader: jspb.BinaryReader): WalletIdRequest;
}

export namespace WalletIdRequest {
    export type AsObject = {
    }
}

export class WalletIdResponse extends jspb.Message { 

    hasWalletId(): boolean;
    clearWalletId(): void;
    getWalletId(): penumbra_core_keys_v1alpha1_keys_pb.WalletId | undefined;
    setWalletId(value?: penumbra_core_keys_v1alpha1_keys_pb.WalletId): WalletIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WalletIdResponse): WalletIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletIdResponse;
    static deserializeBinaryFromReader(message: WalletIdResponse, reader: jspb.BinaryReader): WalletIdResponse;
}

export namespace WalletIdResponse {
    export type AsObject = {
        walletId?: penumbra_core_keys_v1alpha1_keys_pb.WalletId.AsObject,
    }
}

export class IndexByAddressRequest extends jspb.Message { 

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): penumbra_core_keys_v1alpha1_keys_pb.Address | undefined;
    setAddress(value?: penumbra_core_keys_v1alpha1_keys_pb.Address): IndexByAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndexByAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: IndexByAddressRequest): IndexByAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IndexByAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndexByAddressRequest;
    static deserializeBinaryFromReader(message: IndexByAddressRequest, reader: jspb.BinaryReader): IndexByAddressRequest;
}

export namespace IndexByAddressRequest {
    export type AsObject = {
        address?: penumbra_core_keys_v1alpha1_keys_pb.Address.AsObject,
    }
}

export class IndexByAddressResponse extends jspb.Message { 

    hasAddressIndex(): boolean;
    clearAddressIndex(): void;
    getAddressIndex(): penumbra_core_keys_v1alpha1_keys_pb.AddressIndex | undefined;
    setAddressIndex(value?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex): IndexByAddressResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndexByAddressResponse.AsObject;
    static toObject(includeInstance: boolean, msg: IndexByAddressResponse): IndexByAddressResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IndexByAddressResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndexByAddressResponse;
    static deserializeBinaryFromReader(message: IndexByAddressResponse, reader: jspb.BinaryReader): IndexByAddressResponse;
}

export namespace IndexByAddressResponse {
    export type AsObject = {
        addressIndex?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.AsObject,
    }
}

export class EphemeralAddressRequest extends jspb.Message { 

    hasAddressIndex(): boolean;
    clearAddressIndex(): void;
    getAddressIndex(): penumbra_core_keys_v1alpha1_keys_pb.AddressIndex | undefined;
    setAddressIndex(value?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex): EphemeralAddressRequest;
    getDisplayConfirm(): boolean;
    setDisplayConfirm(value: boolean): EphemeralAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EphemeralAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EphemeralAddressRequest): EphemeralAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EphemeralAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EphemeralAddressRequest;
    static deserializeBinaryFromReader(message: EphemeralAddressRequest, reader: jspb.BinaryReader): EphemeralAddressRequest;
}

export namespace EphemeralAddressRequest {
    export type AsObject = {
        addressIndex?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.AsObject,
        displayConfirm: boolean,
    }
}

export class EphemeralAddressResponse extends jspb.Message { 

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): penumbra_core_keys_v1alpha1_keys_pb.Address | undefined;
    setAddress(value?: penumbra_core_keys_v1alpha1_keys_pb.Address): EphemeralAddressResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EphemeralAddressResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EphemeralAddressResponse): EphemeralAddressResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EphemeralAddressResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EphemeralAddressResponse;
    static deserializeBinaryFromReader(message: EphemeralAddressResponse, reader: jspb.BinaryReader): EphemeralAddressResponse;
}

export namespace EphemeralAddressResponse {
    export type AsObject = {
        address?: penumbra_core_keys_v1alpha1_keys_pb.Address.AsObject,
    }
}

export class BalancesRequest extends jspb.Message { 

    hasAccountFilter(): boolean;
    clearAccountFilter(): void;
    getAccountFilter(): penumbra_core_keys_v1alpha1_keys_pb.AddressIndex | undefined;
    setAccountFilter(value?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex): BalancesRequest;

    hasAssetIdFilter(): boolean;
    clearAssetIdFilter(): void;
    getAssetIdFilter(): penumbra_core_asset_v1alpha1_asset_pb.AssetId | undefined;
    setAssetIdFilter(value?: penumbra_core_asset_v1alpha1_asset_pb.AssetId): BalancesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BalancesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BalancesRequest): BalancesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BalancesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BalancesRequest;
    static deserializeBinaryFromReader(message: BalancesRequest, reader: jspb.BinaryReader): BalancesRequest;
}

export namespace BalancesRequest {
    export type AsObject = {
        accountFilter?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.AsObject,
        assetIdFilter?: penumbra_core_asset_v1alpha1_asset_pb.AssetId.AsObject,
    }
}

export class BalancesResponse extends jspb.Message { 

    hasAccount(): boolean;
    clearAccount(): void;
    getAccount(): penumbra_core_keys_v1alpha1_keys_pb.AddressIndex | undefined;
    setAccount(value?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex): BalancesResponse;

    hasBalance(): boolean;
    clearBalance(): void;
    getBalance(): penumbra_core_asset_v1alpha1_asset_pb.Value | undefined;
    setBalance(value?: penumbra_core_asset_v1alpha1_asset_pb.Value): BalancesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BalancesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BalancesResponse): BalancesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BalancesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BalancesResponse;
    static deserializeBinaryFromReader(message: BalancesResponse, reader: jspb.BinaryReader): BalancesResponse;
}

export namespace BalancesResponse {
    export type AsObject = {
        account?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.AsObject,
        balance?: penumbra_core_asset_v1alpha1_asset_pb.Value.AsObject,
    }
}

export class ViewAuthToken extends jspb.Message { 
    getInner(): Uint8Array | string;
    getInner_asU8(): Uint8Array;
    getInner_asB64(): string;
    setInner(value: Uint8Array | string): ViewAuthToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ViewAuthToken.AsObject;
    static toObject(includeInstance: boolean, msg: ViewAuthToken): ViewAuthToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ViewAuthToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ViewAuthToken;
    static deserializeBinaryFromReader(message: ViewAuthToken, reader: jspb.BinaryReader): ViewAuthToken;
}

export namespace ViewAuthToken {
    export type AsObject = {
        inner: Uint8Array | string,
    }
}

export class ViewAuthRequest extends jspb.Message { 

    hasFvk(): boolean;
    clearFvk(): void;
    getFvk(): penumbra_core_keys_v1alpha1_keys_pb.FullViewingKey | undefined;
    setFvk(value?: penumbra_core_keys_v1alpha1_keys_pb.FullViewingKey): ViewAuthRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ViewAuthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ViewAuthRequest): ViewAuthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ViewAuthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ViewAuthRequest;
    static deserializeBinaryFromReader(message: ViewAuthRequest, reader: jspb.BinaryReader): ViewAuthRequest;
}

export namespace ViewAuthRequest {
    export type AsObject = {
        fvk?: penumbra_core_keys_v1alpha1_keys_pb.FullViewingKey.AsObject,
    }
}

export class ViewAuthResponse extends jspb.Message { 

    hasToken(): boolean;
    clearToken(): void;
    getToken(): ViewAuthToken | undefined;
    setToken(value?: ViewAuthToken): ViewAuthResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ViewAuthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ViewAuthResponse): ViewAuthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ViewAuthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ViewAuthResponse;
    static deserializeBinaryFromReader(message: ViewAuthResponse, reader: jspb.BinaryReader): ViewAuthResponse;
}

export namespace ViewAuthResponse {
    export type AsObject = {
        token?: ViewAuthToken.AsObject,
    }
}

export class StatusRequest extends jspb.Message { 

    hasWalletId(): boolean;
    clearWalletId(): void;
    getWalletId(): penumbra_core_keys_v1alpha1_keys_pb.WalletId | undefined;
    setWalletId(value?: penumbra_core_keys_v1alpha1_keys_pb.WalletId): StatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StatusRequest): StatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusRequest;
    static deserializeBinaryFromReader(message: StatusRequest, reader: jspb.BinaryReader): StatusRequest;
}

export namespace StatusRequest {
    export type AsObject = {
        walletId?: penumbra_core_keys_v1alpha1_keys_pb.WalletId.AsObject,
    }
}

export class StatusResponse extends jspb.Message { 
    getSyncHeight(): number;
    setSyncHeight(value: number): StatusResponse;
    getCatchingUp(): boolean;
    setCatchingUp(value: boolean): StatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StatusResponse): StatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusResponse;
    static deserializeBinaryFromReader(message: StatusResponse, reader: jspb.BinaryReader): StatusResponse;
}

export namespace StatusResponse {
    export type AsObject = {
        syncHeight: number,
        catchingUp: boolean,
    }
}

export class StatusStreamRequest extends jspb.Message { 

    hasWalletId(): boolean;
    clearWalletId(): void;
    getWalletId(): penumbra_core_keys_v1alpha1_keys_pb.WalletId | undefined;
    setWalletId(value?: penumbra_core_keys_v1alpha1_keys_pb.WalletId): StatusStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StatusStreamRequest): StatusStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusStreamRequest;
    static deserializeBinaryFromReader(message: StatusStreamRequest, reader: jspb.BinaryReader): StatusStreamRequest;
}

export namespace StatusStreamRequest {
    export type AsObject = {
        walletId?: penumbra_core_keys_v1alpha1_keys_pb.WalletId.AsObject,
    }
}

export class StatusStreamResponse extends jspb.Message { 
    getLatestKnownBlockHeight(): number;
    setLatestKnownBlockHeight(value: number): StatusStreamResponse;
    getSyncHeight(): number;
    setSyncHeight(value: number): StatusStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StatusStreamResponse): StatusStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusStreamResponse;
    static deserializeBinaryFromReader(message: StatusStreamResponse, reader: jspb.BinaryReader): StatusStreamResponse;
}

export namespace StatusStreamResponse {
    export type AsObject = {
        latestKnownBlockHeight: number,
        syncHeight: number,
    }
}

export class NotesRequest extends jspb.Message { 
    getIncludeSpent(): boolean;
    setIncludeSpent(value: boolean): NotesRequest;

    hasAssetId(): boolean;
    clearAssetId(): void;
    getAssetId(): penumbra_core_asset_v1alpha1_asset_pb.AssetId | undefined;
    setAssetId(value?: penumbra_core_asset_v1alpha1_asset_pb.AssetId): NotesRequest;

    hasAddressIndex(): boolean;
    clearAddressIndex(): void;
    getAddressIndex(): penumbra_core_keys_v1alpha1_keys_pb.AddressIndex | undefined;
    setAddressIndex(value?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex): NotesRequest;

    hasAmountToSpend(): boolean;
    clearAmountToSpend(): void;
    getAmountToSpend(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setAmountToSpend(value?: penumbra_core_num_v1alpha1_num_pb.Amount): NotesRequest;

    hasWalletId(): boolean;
    clearWalletId(): void;
    getWalletId(): penumbra_core_keys_v1alpha1_keys_pb.WalletId | undefined;
    setWalletId(value?: penumbra_core_keys_v1alpha1_keys_pb.WalletId): NotesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NotesRequest): NotesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotesRequest;
    static deserializeBinaryFromReader(message: NotesRequest, reader: jspb.BinaryReader): NotesRequest;
}

export namespace NotesRequest {
    export type AsObject = {
        includeSpent: boolean,
        assetId?: penumbra_core_asset_v1alpha1_asset_pb.AssetId.AsObject,
        addressIndex?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.AsObject,
        amountToSpend?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        walletId?: penumbra_core_keys_v1alpha1_keys_pb.WalletId.AsObject,
    }
}

export class NotesForVotingRequest extends jspb.Message { 
    getVotableAtHeight(): number;
    setVotableAtHeight(value: number): NotesForVotingRequest;

    hasAddressIndex(): boolean;
    clearAddressIndex(): void;
    getAddressIndex(): penumbra_core_keys_v1alpha1_keys_pb.AddressIndex | undefined;
    setAddressIndex(value?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex): NotesForVotingRequest;

    hasWalletId(): boolean;
    clearWalletId(): void;
    getWalletId(): penumbra_core_keys_v1alpha1_keys_pb.WalletId | undefined;
    setWalletId(value?: penumbra_core_keys_v1alpha1_keys_pb.WalletId): NotesForVotingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotesForVotingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NotesForVotingRequest): NotesForVotingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotesForVotingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotesForVotingRequest;
    static deserializeBinaryFromReader(message: NotesForVotingRequest, reader: jspb.BinaryReader): NotesForVotingRequest;
}

export namespace NotesForVotingRequest {
    export type AsObject = {
        votableAtHeight: number,
        addressIndex?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.AsObject,
        walletId?: penumbra_core_keys_v1alpha1_keys_pb.WalletId.AsObject,
    }
}

export class WitnessRequest extends jspb.Message { 
    clearNoteCommitmentsList(): void;
    getNoteCommitmentsList(): Array<penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment>;
    setNoteCommitmentsList(value: Array<penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment>): WitnessRequest;
    addNoteCommitments(value?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment, index?: number): penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment;

    hasTransactionPlan(): boolean;
    clearTransactionPlan(): void;
    getTransactionPlan(): penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan | undefined;
    setTransactionPlan(value?: penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan): WitnessRequest;

    hasWalletId(): boolean;
    clearWalletId(): void;
    getWalletId(): penumbra_core_keys_v1alpha1_keys_pb.WalletId | undefined;
    setWalletId(value?: penumbra_core_keys_v1alpha1_keys_pb.WalletId): WitnessRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WitnessRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WitnessRequest): WitnessRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WitnessRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WitnessRequest;
    static deserializeBinaryFromReader(message: WitnessRequest, reader: jspb.BinaryReader): WitnessRequest;
}

export namespace WitnessRequest {
    export type AsObject = {
        noteCommitmentsList: Array<penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.AsObject>,
        transactionPlan?: penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan.AsObject,
        walletId?: penumbra_core_keys_v1alpha1_keys_pb.WalletId.AsObject,
    }
}

export class WitnessResponse extends jspb.Message { 

    hasWitnessData(): boolean;
    clearWitnessData(): void;
    getWitnessData(): penumbra_core_transaction_v1alpha1_transaction_pb.WitnessData | undefined;
    setWitnessData(value?: penumbra_core_transaction_v1alpha1_transaction_pb.WitnessData): WitnessResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WitnessResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WitnessResponse): WitnessResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WitnessResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WitnessResponse;
    static deserializeBinaryFromReader(message: WitnessResponse, reader: jspb.BinaryReader): WitnessResponse;
}

export namespace WitnessResponse {
    export type AsObject = {
        witnessData?: penumbra_core_transaction_v1alpha1_transaction_pb.WitnessData.AsObject,
    }
}

export class WitnessAndBuildRequest extends jspb.Message { 

    hasTransactionPlan(): boolean;
    clearTransactionPlan(): void;
    getTransactionPlan(): penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan | undefined;
    setTransactionPlan(value?: penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan): WitnessAndBuildRequest;

    hasAuthorizationData(): boolean;
    clearAuthorizationData(): void;
    getAuthorizationData(): penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData | undefined;
    setAuthorizationData(value?: penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData): WitnessAndBuildRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WitnessAndBuildRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WitnessAndBuildRequest): WitnessAndBuildRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WitnessAndBuildRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WitnessAndBuildRequest;
    static deserializeBinaryFromReader(message: WitnessAndBuildRequest, reader: jspb.BinaryReader): WitnessAndBuildRequest;
}

export namespace WitnessAndBuildRequest {
    export type AsObject = {
        transactionPlan?: penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan.AsObject,
        authorizationData?: penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData.AsObject,
    }
}

export class WitnessAndBuildResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): penumbra_core_transaction_v1alpha1_transaction_pb.Transaction | undefined;
    setTransaction(value?: penumbra_core_transaction_v1alpha1_transaction_pb.Transaction): WitnessAndBuildResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WitnessAndBuildResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WitnessAndBuildResponse): WitnessAndBuildResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WitnessAndBuildResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WitnessAndBuildResponse;
    static deserializeBinaryFromReader(message: WitnessAndBuildResponse, reader: jspb.BinaryReader): WitnessAndBuildResponse;
}

export namespace WitnessAndBuildResponse {
    export type AsObject = {
        transaction?: penumbra_core_transaction_v1alpha1_transaction_pb.Transaction.AsObject,
    }
}

export class AssetsRequest extends jspb.Message { 
    getFiltered(): boolean;
    setFiltered(value: boolean): AssetsRequest;
    clearIncludeSpecificDenominationsList(): void;
    getIncludeSpecificDenominationsList(): Array<penumbra_core_asset_v1alpha1_asset_pb.Denom>;
    setIncludeSpecificDenominationsList(value: Array<penumbra_core_asset_v1alpha1_asset_pb.Denom>): AssetsRequest;
    addIncludeSpecificDenominations(value?: penumbra_core_asset_v1alpha1_asset_pb.Denom, index?: number): penumbra_core_asset_v1alpha1_asset_pb.Denom;
    getIncludeDelegationTokens(): boolean;
    setIncludeDelegationTokens(value: boolean): AssetsRequest;
    getIncludeUnbondingTokens(): boolean;
    setIncludeUnbondingTokens(value: boolean): AssetsRequest;
    getIncludeLpNfts(): boolean;
    setIncludeLpNfts(value: boolean): AssetsRequest;
    getIncludeProposalNfts(): boolean;
    setIncludeProposalNfts(value: boolean): AssetsRequest;
    getIncludeVotingReceiptTokens(): boolean;
    setIncludeVotingReceiptTokens(value: boolean): AssetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AssetsRequest): AssetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetsRequest;
    static deserializeBinaryFromReader(message: AssetsRequest, reader: jspb.BinaryReader): AssetsRequest;
}

export namespace AssetsRequest {
    export type AsObject = {
        filtered: boolean,
        includeSpecificDenominationsList: Array<penumbra_core_asset_v1alpha1_asset_pb.Denom.AsObject>,
        includeDelegationTokens: boolean,
        includeUnbondingTokens: boolean,
        includeLpNfts: boolean,
        includeProposalNfts: boolean,
        includeVotingReceiptTokens: boolean,
    }
}

export class AssetsResponse extends jspb.Message { 

    hasDenomMetadata(): boolean;
    clearDenomMetadata(): void;
    getDenomMetadata(): penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata | undefined;
    setDenomMetadata(value?: penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata): AssetsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AssetsResponse): AssetsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetsResponse;
    static deserializeBinaryFromReader(message: AssetsResponse, reader: jspb.BinaryReader): AssetsResponse;
}

export namespace AssetsResponse {
    export type AsObject = {
        denomMetadata?: penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata.AsObject,
    }
}

export class AppParametersRequest extends jspb.Message { 

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
    }
}

export class AppParametersResponse extends jspb.Message { 

    hasParameters(): boolean;
    clearParameters(): void;
    getParameters(): penumbra_core_app_v1alpha1_app_pb.AppParameters | undefined;
    setParameters(value?: penumbra_core_app_v1alpha1_app_pb.AppParameters): AppParametersResponse;

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
        parameters?: penumbra_core_app_v1alpha1_app_pb.AppParameters.AsObject,
    }
}

export class GasPricesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GasPricesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GasPricesRequest): GasPricesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GasPricesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GasPricesRequest;
    static deserializeBinaryFromReader(message: GasPricesRequest, reader: jspb.BinaryReader): GasPricesRequest;
}

export namespace GasPricesRequest {
    export type AsObject = {
    }
}

export class GasPricesResponse extends jspb.Message { 

    hasGasPrices(): boolean;
    clearGasPrices(): void;
    getGasPrices(): penumbra_core_component_fee_v1alpha1_fee_pb.GasPrices | undefined;
    setGasPrices(value?: penumbra_core_component_fee_v1alpha1_fee_pb.GasPrices): GasPricesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GasPricesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GasPricesResponse): GasPricesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GasPricesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GasPricesResponse;
    static deserializeBinaryFromReader(message: GasPricesResponse, reader: jspb.BinaryReader): GasPricesResponse;
}

export namespace GasPricesResponse {
    export type AsObject = {
        gasPrices?: penumbra_core_component_fee_v1alpha1_fee_pb.GasPrices.AsObject,
    }
}

export class FMDParametersRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FMDParametersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FMDParametersRequest): FMDParametersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FMDParametersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FMDParametersRequest;
    static deserializeBinaryFromReader(message: FMDParametersRequest, reader: jspb.BinaryReader): FMDParametersRequest;
}

export namespace FMDParametersRequest {
    export type AsObject = {
    }
}

export class FMDParametersResponse extends jspb.Message { 

    hasParameters(): boolean;
    clearParameters(): void;
    getParameters(): penumbra_core_component_chain_v1alpha1_chain_pb.FmdParameters | undefined;
    setParameters(value?: penumbra_core_component_chain_v1alpha1_chain_pb.FmdParameters): FMDParametersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FMDParametersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FMDParametersResponse): FMDParametersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FMDParametersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FMDParametersResponse;
    static deserializeBinaryFromReader(message: FMDParametersResponse, reader: jspb.BinaryReader): FMDParametersResponse;
}

export namespace FMDParametersResponse {
    export type AsObject = {
        parameters?: penumbra_core_component_chain_v1alpha1_chain_pb.FmdParameters.AsObject,
    }
}

export class NoteByCommitmentRequest extends jspb.Message { 

    hasNoteCommitment(): boolean;
    clearNoteCommitment(): void;
    getNoteCommitment(): penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment | undefined;
    setNoteCommitment(value?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment): NoteByCommitmentRequest;
    getAwaitDetection(): boolean;
    setAwaitDetection(value: boolean): NoteByCommitmentRequest;

    hasWalletId(): boolean;
    clearWalletId(): void;
    getWalletId(): penumbra_core_keys_v1alpha1_keys_pb.WalletId | undefined;
    setWalletId(value?: penumbra_core_keys_v1alpha1_keys_pb.WalletId): NoteByCommitmentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NoteByCommitmentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NoteByCommitmentRequest): NoteByCommitmentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NoteByCommitmentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NoteByCommitmentRequest;
    static deserializeBinaryFromReader(message: NoteByCommitmentRequest, reader: jspb.BinaryReader): NoteByCommitmentRequest;
}

export namespace NoteByCommitmentRequest {
    export type AsObject = {
        noteCommitment?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.AsObject,
        awaitDetection: boolean,
        walletId?: penumbra_core_keys_v1alpha1_keys_pb.WalletId.AsObject,
    }
}

export class NoteByCommitmentResponse extends jspb.Message { 

    hasSpendableNote(): boolean;
    clearSpendableNote(): void;
    getSpendableNote(): SpendableNoteRecord | undefined;
    setSpendableNote(value?: SpendableNoteRecord): NoteByCommitmentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NoteByCommitmentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NoteByCommitmentResponse): NoteByCommitmentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NoteByCommitmentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NoteByCommitmentResponse;
    static deserializeBinaryFromReader(message: NoteByCommitmentResponse, reader: jspb.BinaryReader): NoteByCommitmentResponse;
}

export namespace NoteByCommitmentResponse {
    export type AsObject = {
        spendableNote?: SpendableNoteRecord.AsObject,
    }
}

export class SwapByCommitmentRequest extends jspb.Message { 

    hasSwapCommitment(): boolean;
    clearSwapCommitment(): void;
    getSwapCommitment(): penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment | undefined;
    setSwapCommitment(value?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment): SwapByCommitmentRequest;
    getAwaitDetection(): boolean;
    setAwaitDetection(value: boolean): SwapByCommitmentRequest;

    hasWalletId(): boolean;
    clearWalletId(): void;
    getWalletId(): penumbra_core_keys_v1alpha1_keys_pb.WalletId | undefined;
    setWalletId(value?: penumbra_core_keys_v1alpha1_keys_pb.WalletId): SwapByCommitmentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapByCommitmentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SwapByCommitmentRequest): SwapByCommitmentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapByCommitmentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapByCommitmentRequest;
    static deserializeBinaryFromReader(message: SwapByCommitmentRequest, reader: jspb.BinaryReader): SwapByCommitmentRequest;
}

export namespace SwapByCommitmentRequest {
    export type AsObject = {
        swapCommitment?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.AsObject,
        awaitDetection: boolean,
        walletId?: penumbra_core_keys_v1alpha1_keys_pb.WalletId.AsObject,
    }
}

export class SwapByCommitmentResponse extends jspb.Message { 

    hasSwap(): boolean;
    clearSwap(): void;
    getSwap(): SwapRecord | undefined;
    setSwap(value?: SwapRecord): SwapByCommitmentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapByCommitmentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SwapByCommitmentResponse): SwapByCommitmentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapByCommitmentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapByCommitmentResponse;
    static deserializeBinaryFromReader(message: SwapByCommitmentResponse, reader: jspb.BinaryReader): SwapByCommitmentResponse;
}

export namespace SwapByCommitmentResponse {
    export type AsObject = {
        swap?: SwapRecord.AsObject,
    }
}

export class UnclaimedSwapsRequest extends jspb.Message { 

    hasWalletId(): boolean;
    clearWalletId(): void;
    getWalletId(): penumbra_core_keys_v1alpha1_keys_pb.WalletId | undefined;
    setWalletId(value?: penumbra_core_keys_v1alpha1_keys_pb.WalletId): UnclaimedSwapsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnclaimedSwapsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UnclaimedSwapsRequest): UnclaimedSwapsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnclaimedSwapsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnclaimedSwapsRequest;
    static deserializeBinaryFromReader(message: UnclaimedSwapsRequest, reader: jspb.BinaryReader): UnclaimedSwapsRequest;
}

export namespace UnclaimedSwapsRequest {
    export type AsObject = {
        walletId?: penumbra_core_keys_v1alpha1_keys_pb.WalletId.AsObject,
    }
}

export class UnclaimedSwapsResponse extends jspb.Message { 

    hasSwap(): boolean;
    clearSwap(): void;
    getSwap(): SwapRecord | undefined;
    setSwap(value?: SwapRecord): UnclaimedSwapsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnclaimedSwapsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UnclaimedSwapsResponse): UnclaimedSwapsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnclaimedSwapsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnclaimedSwapsResponse;
    static deserializeBinaryFromReader(message: UnclaimedSwapsResponse, reader: jspb.BinaryReader): UnclaimedSwapsResponse;
}

export namespace UnclaimedSwapsResponse {
    export type AsObject = {
        swap?: SwapRecord.AsObject,
    }
}

export class NullifierStatusRequest extends jspb.Message { 

    hasNullifier(): boolean;
    clearNullifier(): void;
    getNullifier(): penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier | undefined;
    setNullifier(value?: penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier): NullifierStatusRequest;
    getAwaitDetection(): boolean;
    setAwaitDetection(value: boolean): NullifierStatusRequest;

    hasWalletId(): boolean;
    clearWalletId(): void;
    getWalletId(): penumbra_core_keys_v1alpha1_keys_pb.WalletId | undefined;
    setWalletId(value?: penumbra_core_keys_v1alpha1_keys_pb.WalletId): NullifierStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NullifierStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NullifierStatusRequest): NullifierStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NullifierStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NullifierStatusRequest;
    static deserializeBinaryFromReader(message: NullifierStatusRequest, reader: jspb.BinaryReader): NullifierStatusRequest;
}

export namespace NullifierStatusRequest {
    export type AsObject = {
        nullifier?: penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.AsObject,
        awaitDetection: boolean,
        walletId?: penumbra_core_keys_v1alpha1_keys_pb.WalletId.AsObject,
    }
}

export class NullifierStatusResponse extends jspb.Message { 
    getSpent(): boolean;
    setSpent(value: boolean): NullifierStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NullifierStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NullifierStatusResponse): NullifierStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NullifierStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NullifierStatusResponse;
    static deserializeBinaryFromReader(message: NullifierStatusResponse, reader: jspb.BinaryReader): NullifierStatusResponse;
}

export namespace NullifierStatusResponse {
    export type AsObject = {
        spent: boolean,
    }
}

export class TransactionInfoByHashRequest extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): penumbra_core_transaction_v1alpha1_transaction_pb.Id | undefined;
    setId(value?: penumbra_core_transaction_v1alpha1_transaction_pb.Id): TransactionInfoByHashRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionInfoByHashRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionInfoByHashRequest): TransactionInfoByHashRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionInfoByHashRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionInfoByHashRequest;
    static deserializeBinaryFromReader(message: TransactionInfoByHashRequest, reader: jspb.BinaryReader): TransactionInfoByHashRequest;
}

export namespace TransactionInfoByHashRequest {
    export type AsObject = {
        id?: penumbra_core_transaction_v1alpha1_transaction_pb.Id.AsObject,
    }
}

export class TransactionInfoRequest extends jspb.Message { 
    getStartHeight(): number;
    setStartHeight(value: number): TransactionInfoRequest;
    getEndHeight(): number;
    setEndHeight(value: number): TransactionInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionInfoRequest): TransactionInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionInfoRequest;
    static deserializeBinaryFromReader(message: TransactionInfoRequest, reader: jspb.BinaryReader): TransactionInfoRequest;
}

export namespace TransactionInfoRequest {
    export type AsObject = {
        startHeight: number,
        endHeight: number,
    }
}

export class TransactionInfo extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): TransactionInfo;

    hasId(): boolean;
    clearId(): void;
    getId(): penumbra_core_transaction_v1alpha1_transaction_pb.Id | undefined;
    setId(value?: penumbra_core_transaction_v1alpha1_transaction_pb.Id): TransactionInfo;

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): penumbra_core_transaction_v1alpha1_transaction_pb.Transaction | undefined;
    setTransaction(value?: penumbra_core_transaction_v1alpha1_transaction_pb.Transaction): TransactionInfo;

    hasPerspective(): boolean;
    clearPerspective(): void;
    getPerspective(): penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPerspective | undefined;
    setPerspective(value?: penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPerspective): TransactionInfo;

    hasView(): boolean;
    clearView(): void;
    getView(): penumbra_core_transaction_v1alpha1_transaction_pb.TransactionView | undefined;
    setView(value?: penumbra_core_transaction_v1alpha1_transaction_pb.TransactionView): TransactionInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionInfo.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionInfo): TransactionInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionInfo;
    static deserializeBinaryFromReader(message: TransactionInfo, reader: jspb.BinaryReader): TransactionInfo;
}

export namespace TransactionInfo {
    export type AsObject = {
        height: number,
        id?: penumbra_core_transaction_v1alpha1_transaction_pb.Id.AsObject,
        transaction?: penumbra_core_transaction_v1alpha1_transaction_pb.Transaction.AsObject,
        perspective?: penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPerspective.AsObject,
        view?: penumbra_core_transaction_v1alpha1_transaction_pb.TransactionView.AsObject,
    }
}

export class TransactionInfoResponse extends jspb.Message { 

    hasTxInfo(): boolean;
    clearTxInfo(): void;
    getTxInfo(): TransactionInfo | undefined;
    setTxInfo(value?: TransactionInfo): TransactionInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionInfoResponse): TransactionInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionInfoResponse;
    static deserializeBinaryFromReader(message: TransactionInfoResponse, reader: jspb.BinaryReader): TransactionInfoResponse;
}

export namespace TransactionInfoResponse {
    export type AsObject = {
        txInfo?: TransactionInfo.AsObject,
    }
}

export class TransactionInfoByHashResponse extends jspb.Message { 

    hasTxInfo(): boolean;
    clearTxInfo(): void;
    getTxInfo(): TransactionInfo | undefined;
    setTxInfo(value?: TransactionInfo): TransactionInfoByHashResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionInfoByHashResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionInfoByHashResponse): TransactionInfoByHashResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionInfoByHashResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionInfoByHashResponse;
    static deserializeBinaryFromReader(message: TransactionInfoByHashResponse, reader: jspb.BinaryReader): TransactionInfoByHashResponse;
}

export namespace TransactionInfoByHashResponse {
    export type AsObject = {
        txInfo?: TransactionInfo.AsObject,
    }
}

export class NotesResponse extends jspb.Message { 

    hasNoteRecord(): boolean;
    clearNoteRecord(): void;
    getNoteRecord(): SpendableNoteRecord | undefined;
    setNoteRecord(value?: SpendableNoteRecord): NotesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NotesResponse): NotesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotesResponse;
    static deserializeBinaryFromReader(message: NotesResponse, reader: jspb.BinaryReader): NotesResponse;
}

export namespace NotesResponse {
    export type AsObject = {
        noteRecord?: SpendableNoteRecord.AsObject,
    }
}

export class NotesForVotingResponse extends jspb.Message { 

    hasNoteRecord(): boolean;
    clearNoteRecord(): void;
    getNoteRecord(): SpendableNoteRecord | undefined;
    setNoteRecord(value?: SpendableNoteRecord): NotesForVotingResponse;

    hasIdentityKey(): boolean;
    clearIdentityKey(): void;
    getIdentityKey(): penumbra_core_keys_v1alpha1_keys_pb.IdentityKey | undefined;
    setIdentityKey(value?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey): NotesForVotingResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotesForVotingResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NotesForVotingResponse): NotesForVotingResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotesForVotingResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotesForVotingResponse;
    static deserializeBinaryFromReader(message: NotesForVotingResponse, reader: jspb.BinaryReader): NotesForVotingResponse;
}

export namespace NotesForVotingResponse {
    export type AsObject = {
        noteRecord?: SpendableNoteRecord.AsObject,
        identityKey?: penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.AsObject,
    }
}

export class SpendableNoteRecord extends jspb.Message { 

    hasNoteCommitment(): boolean;
    clearNoteCommitment(): void;
    getNoteCommitment(): penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment | undefined;
    setNoteCommitment(value?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment): SpendableNoteRecord;

    hasNote(): boolean;
    clearNote(): void;
    getNote(): penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note | undefined;
    setNote(value?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note): SpendableNoteRecord;

    hasAddressIndex(): boolean;
    clearAddressIndex(): void;
    getAddressIndex(): penumbra_core_keys_v1alpha1_keys_pb.AddressIndex | undefined;
    setAddressIndex(value?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex): SpendableNoteRecord;

    hasNullifier(): boolean;
    clearNullifier(): void;
    getNullifier(): penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier | undefined;
    setNullifier(value?: penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier): SpendableNoteRecord;
    getHeightCreated(): number;
    setHeightCreated(value: number): SpendableNoteRecord;
    getHeightSpent(): number;
    setHeightSpent(value: number): SpendableNoteRecord;
    getPosition(): number;
    setPosition(value: number): SpendableNoteRecord;

    hasSource(): boolean;
    clearSource(): void;
    getSource(): penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource | undefined;
    setSource(value?: penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource): SpendableNoteRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpendableNoteRecord.AsObject;
    static toObject(includeInstance: boolean, msg: SpendableNoteRecord): SpendableNoteRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpendableNoteRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpendableNoteRecord;
    static deserializeBinaryFromReader(message: SpendableNoteRecord, reader: jspb.BinaryReader): SpendableNoteRecord;
}

export namespace SpendableNoteRecord {
    export type AsObject = {
        noteCommitment?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.AsObject,
        note?: penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note.AsObject,
        addressIndex?: penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.AsObject,
        nullifier?: penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.AsObject,
        heightCreated: number,
        heightSpent: number,
        position: number,
        source?: penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource.AsObject,
    }
}

export class SwapRecord extends jspb.Message { 

    hasSwapCommitment(): boolean;
    clearSwapCommitment(): void;
    getSwapCommitment(): penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment | undefined;
    setSwapCommitment(value?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment): SwapRecord;

    hasSwap(): boolean;
    clearSwap(): void;
    getSwap(): penumbra_core_component_dex_v1alpha1_dex_pb.SwapPlaintext | undefined;
    setSwap(value?: penumbra_core_component_dex_v1alpha1_dex_pb.SwapPlaintext): SwapRecord;
    getPosition(): number;
    setPosition(value: number): SwapRecord;

    hasNullifier(): boolean;
    clearNullifier(): void;
    getNullifier(): penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier | undefined;
    setNullifier(value?: penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier): SwapRecord;

    hasOutputData(): boolean;
    clearOutputData(): void;
    getOutputData(): penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputData | undefined;
    setOutputData(value?: penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputData): SwapRecord;
    getHeightClaimed(): number;
    setHeightClaimed(value: number): SwapRecord;

    hasSource(): boolean;
    clearSource(): void;
    getSource(): penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource | undefined;
    setSource(value?: penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource): SwapRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapRecord.AsObject;
    static toObject(includeInstance: boolean, msg: SwapRecord): SwapRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapRecord;
    static deserializeBinaryFromReader(message: SwapRecord, reader: jspb.BinaryReader): SwapRecord;
}

export namespace SwapRecord {
    export type AsObject = {
        swapCommitment?: penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.AsObject,
        swap?: penumbra_core_component_dex_v1alpha1_dex_pb.SwapPlaintext.AsObject,
        position: number,
        nullifier?: penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.AsObject,
        outputData?: penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputData.AsObject,
        heightClaimed: number,
        source?: penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource.AsObject,
    }
}

export class OwnedPositionIdsRequest extends jspb.Message { 

    hasPositionState(): boolean;
    clearPositionState(): void;
    getPositionState(): penumbra_core_component_dex_v1alpha1_dex_pb.PositionState | undefined;
    setPositionState(value?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionState): OwnedPositionIdsRequest;

    hasTradingPair(): boolean;
    clearTradingPair(): void;
    getTradingPair(): penumbra_core_component_dex_v1alpha1_dex_pb.TradingPair | undefined;
    setTradingPair(value?: penumbra_core_component_dex_v1alpha1_dex_pb.TradingPair): OwnedPositionIdsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OwnedPositionIdsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OwnedPositionIdsRequest): OwnedPositionIdsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OwnedPositionIdsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OwnedPositionIdsRequest;
    static deserializeBinaryFromReader(message: OwnedPositionIdsRequest, reader: jspb.BinaryReader): OwnedPositionIdsRequest;
}

export namespace OwnedPositionIdsRequest {
    export type AsObject = {
        positionState?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionState.AsObject,
        tradingPair?: penumbra_core_component_dex_v1alpha1_dex_pb.TradingPair.AsObject,
    }
}

export class OwnedPositionIdsResponse extends jspb.Message { 

    hasPositionId(): boolean;
    clearPositionId(): void;
    getPositionId(): penumbra_core_component_dex_v1alpha1_dex_pb.PositionId | undefined;
    setPositionId(value?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionId): OwnedPositionIdsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OwnedPositionIdsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OwnedPositionIdsResponse): OwnedPositionIdsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OwnedPositionIdsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OwnedPositionIdsResponse;
    static deserializeBinaryFromReader(message: OwnedPositionIdsResponse, reader: jspb.BinaryReader): OwnedPositionIdsResponse;
}

export namespace OwnedPositionIdsResponse {
    export type AsObject = {
        positionId?: penumbra_core_component_dex_v1alpha1_dex_pb.PositionId.AsObject,
    }
}
