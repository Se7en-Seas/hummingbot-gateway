// package: penumbra.core.component.ibc.v1alpha1
// file: penumbra/core/component/ibc/v1alpha1/ibc.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as ibc_core_client_v1_client_pb from "../../../../../ibc/core/client/v1/client_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as penumbra_core_keys_v1alpha1_keys_pb from "../../../../../penumbra/core/keys/v1alpha1/keys_pb";
import * as penumbra_core_num_v1alpha1_num_pb from "../../../../../penumbra/core/num/v1alpha1/num_pb";
import * as penumbra_core_asset_v1alpha1_asset_pb from "../../../../../penumbra/core/asset/v1alpha1/asset_pb";

export class IbcAction extends jspb.Message { 

    hasRawAction(): boolean;
    clearRawAction(): void;
    getRawAction(): google_protobuf_any_pb.Any | undefined;
    setRawAction(value?: google_protobuf_any_pb.Any): IbcAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IbcAction.AsObject;
    static toObject(includeInstance: boolean, msg: IbcAction): IbcAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IbcAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IbcAction;
    static deserializeBinaryFromReader(message: IbcAction, reader: jspb.BinaryReader): IbcAction;
}

export namespace IbcAction {
    export type AsObject = {
        rawAction?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class FungibleTokenPacketData extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): FungibleTokenPacketData;
    getAmount(): string;
    setAmount(value: string): FungibleTokenPacketData;
    getSender(): string;
    setSender(value: string): FungibleTokenPacketData;
    getReceiver(): string;
    setReceiver(value: string): FungibleTokenPacketData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FungibleTokenPacketData.AsObject;
    static toObject(includeInstance: boolean, msg: FungibleTokenPacketData): FungibleTokenPacketData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FungibleTokenPacketData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FungibleTokenPacketData;
    static deserializeBinaryFromReader(message: FungibleTokenPacketData, reader: jspb.BinaryReader): FungibleTokenPacketData;
}

export namespace FungibleTokenPacketData {
    export type AsObject = {
        denom: string,
        amount: string,
        sender: string,
        receiver: string,
    }
}

export class Ics20Withdrawal extends jspb.Message { 

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
    setAmount(value?: penumbra_core_num_v1alpha1_num_pb.Amount): Ics20Withdrawal;

    hasDenom(): boolean;
    clearDenom(): void;
    getDenom(): penumbra_core_asset_v1alpha1_asset_pb.Denom | undefined;
    setDenom(value?: penumbra_core_asset_v1alpha1_asset_pb.Denom): Ics20Withdrawal;
    getDestinationChainAddress(): string;
    setDestinationChainAddress(value: string): Ics20Withdrawal;

    hasReturnAddress(): boolean;
    clearReturnAddress(): void;
    getReturnAddress(): penumbra_core_keys_v1alpha1_keys_pb.Address | undefined;
    setReturnAddress(value?: penumbra_core_keys_v1alpha1_keys_pb.Address): Ics20Withdrawal;

    hasTimeoutHeight(): boolean;
    clearTimeoutHeight(): void;
    getTimeoutHeight(): ibc_core_client_v1_client_pb.Height | undefined;
    setTimeoutHeight(value?: ibc_core_client_v1_client_pb.Height): Ics20Withdrawal;
    getTimeoutTime(): number;
    setTimeoutTime(value: number): Ics20Withdrawal;
    getSourceChannel(): string;
    setSourceChannel(value: string): Ics20Withdrawal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ics20Withdrawal.AsObject;
    static toObject(includeInstance: boolean, msg: Ics20Withdrawal): Ics20Withdrawal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ics20Withdrawal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ics20Withdrawal;
    static deserializeBinaryFromReader(message: Ics20Withdrawal, reader: jspb.BinaryReader): Ics20Withdrawal;
}

export namespace Ics20Withdrawal {
    export type AsObject = {
        amount?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        denom?: penumbra_core_asset_v1alpha1_asset_pb.Denom.AsObject,
        destinationChainAddress: string,
        returnAddress?: penumbra_core_keys_v1alpha1_keys_pb.Address.AsObject,
        timeoutHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
        timeoutTime: number,
        sourceChannel: string,
    }
}

export class ClientData extends jspb.Message { 
    getClientId(): string;
    setClientId(value: string): ClientData;

    hasClientState(): boolean;
    clearClientState(): void;
    getClientState(): google_protobuf_any_pb.Any | undefined;
    setClientState(value?: google_protobuf_any_pb.Any): ClientData;
    getProcessedTime(): string;
    setProcessedTime(value: string): ClientData;
    getProcessedHeight(): number;
    setProcessedHeight(value: number): ClientData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientData.AsObject;
    static toObject(includeInstance: boolean, msg: ClientData): ClientData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientData;
    static deserializeBinaryFromReader(message: ClientData, reader: jspb.BinaryReader): ClientData;
}

export namespace ClientData {
    export type AsObject = {
        clientId: string,
        clientState?: google_protobuf_any_pb.Any.AsObject,
        processedTime: string,
        processedHeight: number,
    }
}

export class ClientCounter extends jspb.Message { 
    getCounter(): number;
    setCounter(value: number): ClientCounter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientCounter.AsObject;
    static toObject(includeInstance: boolean, msg: ClientCounter): ClientCounter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientCounter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientCounter;
    static deserializeBinaryFromReader(message: ClientCounter, reader: jspb.BinaryReader): ClientCounter;
}

export namespace ClientCounter {
    export type AsObject = {
        counter: number,
    }
}

export class ConsensusState extends jspb.Message { 

    hasConsensusState(): boolean;
    clearConsensusState(): void;
    getConsensusState(): google_protobuf_any_pb.Any | undefined;
    setConsensusState(value?: google_protobuf_any_pb.Any): ConsensusState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsensusState.AsObject;
    static toObject(includeInstance: boolean, msg: ConsensusState): ConsensusState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsensusState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsensusState;
    static deserializeBinaryFromReader(message: ConsensusState, reader: jspb.BinaryReader): ConsensusState;
}

export namespace ConsensusState {
    export type AsObject = {
        consensusState?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class VerifiedHeights extends jspb.Message { 
    clearHeightsList(): void;
    getHeightsList(): Array<ibc_core_client_v1_client_pb.Height>;
    setHeightsList(value: Array<ibc_core_client_v1_client_pb.Height>): VerifiedHeights;
    addHeights(value?: ibc_core_client_v1_client_pb.Height, index?: number): ibc_core_client_v1_client_pb.Height;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifiedHeights.AsObject;
    static toObject(includeInstance: boolean, msg: VerifiedHeights): VerifiedHeights.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifiedHeights, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifiedHeights;
    static deserializeBinaryFromReader(message: VerifiedHeights, reader: jspb.BinaryReader): VerifiedHeights;
}

export namespace VerifiedHeights {
    export type AsObject = {
        heightsList: Array<ibc_core_client_v1_client_pb.Height.AsObject>,
    }
}

export class ConnectionCounter extends jspb.Message { 
    getCounter(): number;
    setCounter(value: number): ConnectionCounter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectionCounter.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectionCounter): ConnectionCounter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectionCounter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectionCounter;
    static deserializeBinaryFromReader(message: ConnectionCounter, reader: jspb.BinaryReader): ConnectionCounter;
}

export namespace ConnectionCounter {
    export type AsObject = {
        counter: number,
    }
}

export class ClientConnections extends jspb.Message { 
    clearConnectionsList(): void;
    getConnectionsList(): Array<string>;
    setConnectionsList(value: Array<string>): ClientConnections;
    addConnections(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientConnections.AsObject;
    static toObject(includeInstance: boolean, msg: ClientConnections): ClientConnections.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientConnections, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientConnections;
    static deserializeBinaryFromReader(message: ClientConnections, reader: jspb.BinaryReader): ClientConnections;
}

export namespace ClientConnections {
    export type AsObject = {
        connectionsList: Array<string>,
    }
}

export class IbcParameters extends jspb.Message { 
    getIbcEnabled(): boolean;
    setIbcEnabled(value: boolean): IbcParameters;
    getInboundIcs20TransfersEnabled(): boolean;
    setInboundIcs20TransfersEnabled(value: boolean): IbcParameters;
    getOutboundIcs20TransfersEnabled(): boolean;
    setOutboundIcs20TransfersEnabled(value: boolean): IbcParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IbcParameters.AsObject;
    static toObject(includeInstance: boolean, msg: IbcParameters): IbcParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IbcParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IbcParameters;
    static deserializeBinaryFromReader(message: IbcParameters, reader: jspb.BinaryReader): IbcParameters;
}

export namespace IbcParameters {
    export type AsObject = {
        ibcEnabled: boolean,
        inboundIcs20TransfersEnabled: boolean,
        outboundIcs20TransfersEnabled: boolean,
    }
}

export class GenesisContent extends jspb.Message { 

    hasIbcParams(): boolean;
    clearIbcParams(): void;
    getIbcParams(): IbcParameters | undefined;
    setIbcParams(value?: IbcParameters): GenesisContent;

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
        ibcParams?: IbcParameters.AsObject,
    }
}
