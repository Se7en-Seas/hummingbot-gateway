// package: penumbra.tools.summoning.v1alpha1
// file: penumbra/tools/summoning/v1alpha1/summoning.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as penumbra_core_keys_v1alpha1_keys_pb from "../../../../penumbra/core/keys/v1alpha1/keys_pb";
import * as penumbra_core_num_v1alpha1_num_pb from "../../../../penumbra/core/num/v1alpha1/num_pb";

export class ParticipateRequest extends jspb.Message { 

    hasIdentify(): boolean;
    clearIdentify(): void;
    getIdentify(): ParticipateRequest.Identify | undefined;
    setIdentify(value?: ParticipateRequest.Identify): ParticipateRequest;

    hasContribution(): boolean;
    clearContribution(): void;
    getContribution(): ParticipateRequest.Contribution | undefined;
    setContribution(value?: ParticipateRequest.Contribution): ParticipateRequest;

    getMsgCase(): ParticipateRequest.MsgCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ParticipateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ParticipateRequest): ParticipateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ParticipateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ParticipateRequest;
    static deserializeBinaryFromReader(message: ParticipateRequest, reader: jspb.BinaryReader): ParticipateRequest;
}

export namespace ParticipateRequest {
    export type AsObject = {
        identify?: ParticipateRequest.Identify.AsObject,
        contribution?: ParticipateRequest.Contribution.AsObject,
    }


    export class Identify extends jspb.Message { 

        hasAddress(): boolean;
        clearAddress(): void;
        getAddress(): penumbra_core_keys_v1alpha1_keys_pb.Address | undefined;
        setAddress(value?: penumbra_core_keys_v1alpha1_keys_pb.Address): Identify;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Identify.AsObject;
        static toObject(includeInstance: boolean, msg: Identify): Identify.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Identify, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Identify;
        static deserializeBinaryFromReader(message: Identify, reader: jspb.BinaryReader): Identify;
    }

    export namespace Identify {
        export type AsObject = {
            address?: penumbra_core_keys_v1alpha1_keys_pb.Address.AsObject,
        }
    }

    export class Contribution extends jspb.Message { 

        hasUpdated(): boolean;
        clearUpdated(): void;
        getUpdated(): CeremonyCrs | undefined;
        setUpdated(value?: CeremonyCrs): Contribution;

        hasUpdateProofs(): boolean;
        clearUpdateProofs(): void;
        getUpdateProofs(): CeremonyLinkingProof | undefined;
        setUpdateProofs(value?: CeremonyLinkingProof): Contribution;

        hasParentHashes(): boolean;
        clearParentHashes(): void;
        getParentHashes(): CeremonyParentHashes | undefined;
        setParentHashes(value?: CeremonyParentHashes): Contribution;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Contribution.AsObject;
        static toObject(includeInstance: boolean, msg: Contribution): Contribution.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Contribution, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Contribution;
        static deserializeBinaryFromReader(message: Contribution, reader: jspb.BinaryReader): Contribution;
    }

    export namespace Contribution {
        export type AsObject = {
            updated?: CeremonyCrs.AsObject,
            updateProofs?: CeremonyLinkingProof.AsObject,
            parentHashes?: CeremonyParentHashes.AsObject,
        }
    }


    export enum MsgCase {
        MSG_NOT_SET = 0,
        IDENTIFY = 1,
        CONTRIBUTION = 2,
    }

}

export class CeremonyCrs extends jspb.Message { 
    getSpend(): Uint8Array | string;
    getSpend_asU8(): Uint8Array;
    getSpend_asB64(): string;
    setSpend(value: Uint8Array | string): CeremonyCrs;
    getOutput(): Uint8Array | string;
    getOutput_asU8(): Uint8Array;
    getOutput_asB64(): string;
    setOutput(value: Uint8Array | string): CeremonyCrs;
    getDelegatorVote(): Uint8Array | string;
    getDelegatorVote_asU8(): Uint8Array;
    getDelegatorVote_asB64(): string;
    setDelegatorVote(value: Uint8Array | string): CeremonyCrs;
    getUndelegateClaim(): Uint8Array | string;
    getUndelegateClaim_asU8(): Uint8Array;
    getUndelegateClaim_asB64(): string;
    setUndelegateClaim(value: Uint8Array | string): CeremonyCrs;
    getSwap(): Uint8Array | string;
    getSwap_asU8(): Uint8Array;
    getSwap_asB64(): string;
    setSwap(value: Uint8Array | string): CeremonyCrs;
    getSwapClaim(): Uint8Array | string;
    getSwapClaim_asU8(): Uint8Array;
    getSwapClaim_asB64(): string;
    setSwapClaim(value: Uint8Array | string): CeremonyCrs;
    getNulliferDerivationCrs(): Uint8Array | string;
    getNulliferDerivationCrs_asU8(): Uint8Array;
    getNulliferDerivationCrs_asB64(): string;
    setNulliferDerivationCrs(value: Uint8Array | string): CeremonyCrs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CeremonyCrs.AsObject;
    static toObject(includeInstance: boolean, msg: CeremonyCrs): CeremonyCrs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CeremonyCrs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CeremonyCrs;
    static deserializeBinaryFromReader(message: CeremonyCrs, reader: jspb.BinaryReader): CeremonyCrs;
}

export namespace CeremonyCrs {
    export type AsObject = {
        spend: Uint8Array | string,
        output: Uint8Array | string,
        delegatorVote: Uint8Array | string,
        undelegateClaim: Uint8Array | string,
        swap: Uint8Array | string,
        swapClaim: Uint8Array | string,
        nulliferDerivationCrs: Uint8Array | string,
    }
}

export class CeremonyLinkingProof extends jspb.Message { 
    getSpend(): Uint8Array | string;
    getSpend_asU8(): Uint8Array;
    getSpend_asB64(): string;
    setSpend(value: Uint8Array | string): CeremonyLinkingProof;
    getOutput(): Uint8Array | string;
    getOutput_asU8(): Uint8Array;
    getOutput_asB64(): string;
    setOutput(value: Uint8Array | string): CeremonyLinkingProof;
    getDelegatorVote(): Uint8Array | string;
    getDelegatorVote_asU8(): Uint8Array;
    getDelegatorVote_asB64(): string;
    setDelegatorVote(value: Uint8Array | string): CeremonyLinkingProof;
    getUndelegateClaim(): Uint8Array | string;
    getUndelegateClaim_asU8(): Uint8Array;
    getUndelegateClaim_asB64(): string;
    setUndelegateClaim(value: Uint8Array | string): CeremonyLinkingProof;
    getSwap(): Uint8Array | string;
    getSwap_asU8(): Uint8Array;
    getSwap_asB64(): string;
    setSwap(value: Uint8Array | string): CeremonyLinkingProof;
    getSwapClaim(): Uint8Array | string;
    getSwapClaim_asU8(): Uint8Array;
    getSwapClaim_asB64(): string;
    setSwapClaim(value: Uint8Array | string): CeremonyLinkingProof;
    getNulliferDerivationCrs(): Uint8Array | string;
    getNulliferDerivationCrs_asU8(): Uint8Array;
    getNulliferDerivationCrs_asB64(): string;
    setNulliferDerivationCrs(value: Uint8Array | string): CeremonyLinkingProof;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CeremonyLinkingProof.AsObject;
    static toObject(includeInstance: boolean, msg: CeremonyLinkingProof): CeremonyLinkingProof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CeremonyLinkingProof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CeremonyLinkingProof;
    static deserializeBinaryFromReader(message: CeremonyLinkingProof, reader: jspb.BinaryReader): CeremonyLinkingProof;
}

export namespace CeremonyLinkingProof {
    export type AsObject = {
        spend: Uint8Array | string,
        output: Uint8Array | string,
        delegatorVote: Uint8Array | string,
        undelegateClaim: Uint8Array | string,
        swap: Uint8Array | string,
        swapClaim: Uint8Array | string,
        nulliferDerivationCrs: Uint8Array | string,
    }
}

export class CeremonyParentHashes extends jspb.Message { 
    getSpend(): Uint8Array | string;
    getSpend_asU8(): Uint8Array;
    getSpend_asB64(): string;
    setSpend(value: Uint8Array | string): CeremonyParentHashes;
    getOutput(): Uint8Array | string;
    getOutput_asU8(): Uint8Array;
    getOutput_asB64(): string;
    setOutput(value: Uint8Array | string): CeremonyParentHashes;
    getDelegatorVote(): Uint8Array | string;
    getDelegatorVote_asU8(): Uint8Array;
    getDelegatorVote_asB64(): string;
    setDelegatorVote(value: Uint8Array | string): CeremonyParentHashes;
    getUndelegateClaim(): Uint8Array | string;
    getUndelegateClaim_asU8(): Uint8Array;
    getUndelegateClaim_asB64(): string;
    setUndelegateClaim(value: Uint8Array | string): CeremonyParentHashes;
    getSwap(): Uint8Array | string;
    getSwap_asU8(): Uint8Array;
    getSwap_asB64(): string;
    setSwap(value: Uint8Array | string): CeremonyParentHashes;
    getSwapClaim(): Uint8Array | string;
    getSwapClaim_asU8(): Uint8Array;
    getSwapClaim_asB64(): string;
    setSwapClaim(value: Uint8Array | string): CeremonyParentHashes;
    getNulliferDerivationCrs(): Uint8Array | string;
    getNulliferDerivationCrs_asU8(): Uint8Array;
    getNulliferDerivationCrs_asB64(): string;
    setNulliferDerivationCrs(value: Uint8Array | string): CeremonyParentHashes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CeremonyParentHashes.AsObject;
    static toObject(includeInstance: boolean, msg: CeremonyParentHashes): CeremonyParentHashes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CeremonyParentHashes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CeremonyParentHashes;
    static deserializeBinaryFromReader(message: CeremonyParentHashes, reader: jspb.BinaryReader): CeremonyParentHashes;
}

export namespace CeremonyParentHashes {
    export type AsObject = {
        spend: Uint8Array | string,
        output: Uint8Array | string,
        delegatorVote: Uint8Array | string,
        undelegateClaim: Uint8Array | string,
        swap: Uint8Array | string,
        swapClaim: Uint8Array | string,
        nulliferDerivationCrs: Uint8Array | string,
    }
}

export class ParticipateResponse extends jspb.Message { 

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): ParticipateResponse.Position | undefined;
    setPosition(value?: ParticipateResponse.Position): ParticipateResponse;

    hasContributeNow(): boolean;
    clearContributeNow(): void;
    getContributeNow(): ParticipateResponse.ContributeNow | undefined;
    setContributeNow(value?: ParticipateResponse.ContributeNow): ParticipateResponse;

    hasConfirm(): boolean;
    clearConfirm(): void;
    getConfirm(): ParticipateResponse.Confirm | undefined;
    setConfirm(value?: ParticipateResponse.Confirm): ParticipateResponse;

    getMsgCase(): ParticipateResponse.MsgCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ParticipateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ParticipateResponse): ParticipateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ParticipateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ParticipateResponse;
    static deserializeBinaryFromReader(message: ParticipateResponse, reader: jspb.BinaryReader): ParticipateResponse;
}

export namespace ParticipateResponse {
    export type AsObject = {
        position?: ParticipateResponse.Position.AsObject,
        contributeNow?: ParticipateResponse.ContributeNow.AsObject,
        confirm?: ParticipateResponse.Confirm.AsObject,
    }


    export class Position extends jspb.Message { 
        getPosition(): number;
        setPosition(value: number): Position;
        getConnectedParticipants(): number;
        setConnectedParticipants(value: number): Position;

        hasLastSlotBid(): boolean;
        clearLastSlotBid(): void;
        getLastSlotBid(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
        setLastSlotBid(value?: penumbra_core_num_v1alpha1_num_pb.Amount): Position;

        hasYourBid(): boolean;
        clearYourBid(): void;
        getYourBid(): penumbra_core_num_v1alpha1_num_pb.Amount | undefined;
        setYourBid(value?: penumbra_core_num_v1alpha1_num_pb.Amount): Position;

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
            position: number,
            connectedParticipants: number,
            lastSlotBid?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
            yourBid?: penumbra_core_num_v1alpha1_num_pb.Amount.AsObject,
        }
    }

    export class ContributeNow extends jspb.Message { 

        hasParent(): boolean;
        clearParent(): void;
        getParent(): CeremonyCrs | undefined;
        setParent(value?: CeremonyCrs): ContributeNow;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ContributeNow.AsObject;
        static toObject(includeInstance: boolean, msg: ContributeNow): ContributeNow.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ContributeNow, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ContributeNow;
        static deserializeBinaryFromReader(message: ContributeNow, reader: jspb.BinaryReader): ContributeNow;
    }

    export namespace ContributeNow {
        export type AsObject = {
            parent?: CeremonyCrs.AsObject,
        }
    }

    export class Confirm extends jspb.Message { 
        getSlot(): number;
        setSlot(value: number): Confirm;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Confirm.AsObject;
        static toObject(includeInstance: boolean, msg: Confirm): Confirm.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Confirm, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Confirm;
        static deserializeBinaryFromReader(message: Confirm, reader: jspb.BinaryReader): Confirm;
    }

    export namespace Confirm {
        export type AsObject = {
            slot: number,
        }
    }


    export enum MsgCase {
        MSG_NOT_SET = 0,
        POSITION = 1,
        CONTRIBUTE_NOW = 2,
        CONFIRM = 3,
    }

}
