// package: penumbra.util.tendermint_proxy.v1alpha1
// file: penumbra/util/tendermint_proxy/v1alpha1/tendermint_proxy.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as tendermint_crypto_proof_pb from "../../../../tendermint/crypto/proof_pb";
import * as tendermint_p2p_types_pb from "../../../../tendermint/p2p/types_pb";
import * as tendermint_types_block_pb from "../../../../tendermint/types/block_pb";
import * as tendermint_types_types_pb from "../../../../tendermint/types/types_pb";
import * as tendermint_types_validator_pb from "../../../../tendermint/types/validator_pb";

export class GetTxRequest extends jspb.Message { 
    getHash(): Uint8Array | string;
    getHash_asU8(): Uint8Array;
    getHash_asB64(): string;
    setHash(value: Uint8Array | string): GetTxRequest;
    getProve(): boolean;
    setProve(value: boolean): GetTxRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTxRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTxRequest): GetTxRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTxRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTxRequest;
    static deserializeBinaryFromReader(message: GetTxRequest, reader: jspb.BinaryReader): GetTxRequest;
}

export namespace GetTxRequest {
    export type AsObject = {
        hash: Uint8Array | string,
        prove: boolean,
    }
}

export class GetTxResponse extends jspb.Message { 
    getHash(): Uint8Array | string;
    getHash_asU8(): Uint8Array;
    getHash_asB64(): string;
    setHash(value: Uint8Array | string): GetTxResponse;
    getHeight(): number;
    setHeight(value: number): GetTxResponse;
    getIndex(): number;
    setIndex(value: number): GetTxResponse;

    hasTxResult(): boolean;
    clearTxResult(): void;
    getTxResult(): TxResult | undefined;
    setTxResult(value?: TxResult): GetTxResponse;
    getTx(): Uint8Array | string;
    getTx_asU8(): Uint8Array;
    getTx_asB64(): string;
    setTx(value: Uint8Array | string): GetTxResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTxResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTxResponse): GetTxResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTxResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTxResponse;
    static deserializeBinaryFromReader(message: GetTxResponse, reader: jspb.BinaryReader): GetTxResponse;
}

export namespace GetTxResponse {
    export type AsObject = {
        hash: Uint8Array | string,
        height: number,
        index: number,
        txResult?: TxResult.AsObject,
        tx: Uint8Array | string,
    }
}

export class TxResult extends jspb.Message { 
    getLog(): string;
    setLog(value: string): TxResult;
    getGasWanted(): number;
    setGasWanted(value: number): TxResult;
    getGasUsed(): number;
    setGasUsed(value: number): TxResult;
    clearTagsList(): void;
    getTagsList(): Array<Tag>;
    setTagsList(value: Array<Tag>): TxResult;
    addTags(value?: Tag, index?: number): Tag;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxResult.AsObject;
    static toObject(includeInstance: boolean, msg: TxResult): TxResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxResult;
    static deserializeBinaryFromReader(message: TxResult, reader: jspb.BinaryReader): TxResult;
}

export namespace TxResult {
    export type AsObject = {
        log: string,
        gasWanted: number,
        gasUsed: number,
        tagsList: Array<Tag.AsObject>,
    }
}

export class Tag extends jspb.Message { 
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): Tag;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): Tag;
    getIndex(): boolean;
    setIndex(value: boolean): Tag;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tag.AsObject;
    static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tag;
    static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
    export type AsObject = {
        key: Uint8Array | string,
        value: Uint8Array | string,
        index: boolean,
    }
}

export class BroadcastTxAsyncRequest extends jspb.Message { 
    getParams(): Uint8Array | string;
    getParams_asU8(): Uint8Array;
    getParams_asB64(): string;
    setParams(value: Uint8Array | string): BroadcastTxAsyncRequest;
    getReqId(): number;
    setReqId(value: number): BroadcastTxAsyncRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BroadcastTxAsyncRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BroadcastTxAsyncRequest): BroadcastTxAsyncRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BroadcastTxAsyncRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BroadcastTxAsyncRequest;
    static deserializeBinaryFromReader(message: BroadcastTxAsyncRequest, reader: jspb.BinaryReader): BroadcastTxAsyncRequest;
}

export namespace BroadcastTxAsyncRequest {
    export type AsObject = {
        params: Uint8Array | string,
        reqId: number,
    }
}

export class BroadcastTxAsyncResponse extends jspb.Message { 
    getCode(): number;
    setCode(value: number): BroadcastTxAsyncResponse;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): BroadcastTxAsyncResponse;
    getLog(): string;
    setLog(value: string): BroadcastTxAsyncResponse;
    getHash(): Uint8Array | string;
    getHash_asU8(): Uint8Array;
    getHash_asB64(): string;
    setHash(value: Uint8Array | string): BroadcastTxAsyncResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BroadcastTxAsyncResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BroadcastTxAsyncResponse): BroadcastTxAsyncResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BroadcastTxAsyncResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BroadcastTxAsyncResponse;
    static deserializeBinaryFromReader(message: BroadcastTxAsyncResponse, reader: jspb.BinaryReader): BroadcastTxAsyncResponse;
}

export namespace BroadcastTxAsyncResponse {
    export type AsObject = {
        code: number,
        data: Uint8Array | string,
        log: string,
        hash: Uint8Array | string,
    }
}

export class BroadcastTxSyncRequest extends jspb.Message { 
    getParams(): Uint8Array | string;
    getParams_asU8(): Uint8Array;
    getParams_asB64(): string;
    setParams(value: Uint8Array | string): BroadcastTxSyncRequest;
    getReqId(): number;
    setReqId(value: number): BroadcastTxSyncRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BroadcastTxSyncRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BroadcastTxSyncRequest): BroadcastTxSyncRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BroadcastTxSyncRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BroadcastTxSyncRequest;
    static deserializeBinaryFromReader(message: BroadcastTxSyncRequest, reader: jspb.BinaryReader): BroadcastTxSyncRequest;
}

export namespace BroadcastTxSyncRequest {
    export type AsObject = {
        params: Uint8Array | string,
        reqId: number,
    }
}

export class BroadcastTxSyncResponse extends jspb.Message { 
    getCode(): number;
    setCode(value: number): BroadcastTxSyncResponse;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): BroadcastTxSyncResponse;
    getLog(): string;
    setLog(value: string): BroadcastTxSyncResponse;
    getHash(): Uint8Array | string;
    getHash_asU8(): Uint8Array;
    getHash_asB64(): string;
    setHash(value: Uint8Array | string): BroadcastTxSyncResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BroadcastTxSyncResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BroadcastTxSyncResponse): BroadcastTxSyncResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BroadcastTxSyncResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BroadcastTxSyncResponse;
    static deserializeBinaryFromReader(message: BroadcastTxSyncResponse, reader: jspb.BinaryReader): BroadcastTxSyncResponse;
}

export namespace BroadcastTxSyncResponse {
    export type AsObject = {
        code: number,
        data: Uint8Array | string,
        log: string,
        hash: Uint8Array | string,
    }
}

export class GetStatusRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStatusRequest): GetStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStatusRequest;
    static deserializeBinaryFromReader(message: GetStatusRequest, reader: jspb.BinaryReader): GetStatusRequest;
}

export namespace GetStatusRequest {
    export type AsObject = {
    }
}

export class GetStatusResponse extends jspb.Message { 

    hasNodeInfo(): boolean;
    clearNodeInfo(): void;
    getNodeInfo(): tendermint_p2p_types_pb.DefaultNodeInfo | undefined;
    setNodeInfo(value?: tendermint_p2p_types_pb.DefaultNodeInfo): GetStatusResponse;

    hasSyncInfo(): boolean;
    clearSyncInfo(): void;
    getSyncInfo(): SyncInfo | undefined;
    setSyncInfo(value?: SyncInfo): GetStatusResponse;

    hasValidatorInfo(): boolean;
    clearValidatorInfo(): void;
    getValidatorInfo(): tendermint_types_validator_pb.Validator | undefined;
    setValidatorInfo(value?: tendermint_types_validator_pb.Validator): GetStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetStatusResponse): GetStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStatusResponse;
    static deserializeBinaryFromReader(message: GetStatusResponse, reader: jspb.BinaryReader): GetStatusResponse;
}

export namespace GetStatusResponse {
    export type AsObject = {
        nodeInfo?: tendermint_p2p_types_pb.DefaultNodeInfo.AsObject,
        syncInfo?: SyncInfo.AsObject,
        validatorInfo?: tendermint_types_validator_pb.Validator.AsObject,
    }
}

export class SyncInfo extends jspb.Message { 
    getLatestBlockHash(): Uint8Array | string;
    getLatestBlockHash_asU8(): Uint8Array;
    getLatestBlockHash_asB64(): string;
    setLatestBlockHash(value: Uint8Array | string): SyncInfo;
    getLatestAppHash(): Uint8Array | string;
    getLatestAppHash_asU8(): Uint8Array;
    getLatestAppHash_asB64(): string;
    setLatestAppHash(value: Uint8Array | string): SyncInfo;
    getLatestBlockHeight(): number;
    setLatestBlockHeight(value: number): SyncInfo;

    hasLatestBlockTime(): boolean;
    clearLatestBlockTime(): void;
    getLatestBlockTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLatestBlockTime(value?: google_protobuf_timestamp_pb.Timestamp): SyncInfo;
    getCatchingUp(): boolean;
    setCatchingUp(value: boolean): SyncInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SyncInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SyncInfo): SyncInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SyncInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SyncInfo;
    static deserializeBinaryFromReader(message: SyncInfo, reader: jspb.BinaryReader): SyncInfo;
}

export namespace SyncInfo {
    export type AsObject = {
        latestBlockHash: Uint8Array | string,
        latestAppHash: Uint8Array | string,
        latestBlockHeight: number,
        latestBlockTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        catchingUp: boolean,
    }
}

export class ABCIQueryRequest extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): ABCIQueryRequest;
    getPath(): string;
    setPath(value: string): ABCIQueryRequest;
    getHeight(): number;
    setHeight(value: number): ABCIQueryRequest;
    getProve(): boolean;
    setProve(value: boolean): ABCIQueryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ABCIQueryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ABCIQueryRequest): ABCIQueryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ABCIQueryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ABCIQueryRequest;
    static deserializeBinaryFromReader(message: ABCIQueryRequest, reader: jspb.BinaryReader): ABCIQueryRequest;
}

export namespace ABCIQueryRequest {
    export type AsObject = {
        data: Uint8Array | string,
        path: string,
        height: number,
        prove: boolean,
    }
}

export class ABCIQueryResponse extends jspb.Message { 
    getCode(): number;
    setCode(value: number): ABCIQueryResponse;
    getLog(): string;
    setLog(value: string): ABCIQueryResponse;
    getInfo(): string;
    setInfo(value: string): ABCIQueryResponse;
    getIndex(): number;
    setIndex(value: number): ABCIQueryResponse;
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): ABCIQueryResponse;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): ABCIQueryResponse;

    hasProofOps(): boolean;
    clearProofOps(): void;
    getProofOps(): tendermint_crypto_proof_pb.ProofOps | undefined;
    setProofOps(value?: tendermint_crypto_proof_pb.ProofOps): ABCIQueryResponse;
    getHeight(): number;
    setHeight(value: number): ABCIQueryResponse;
    getCodespace(): string;
    setCodespace(value: string): ABCIQueryResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ABCIQueryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ABCIQueryResponse): ABCIQueryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ABCIQueryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ABCIQueryResponse;
    static deserializeBinaryFromReader(message: ABCIQueryResponse, reader: jspb.BinaryReader): ABCIQueryResponse;
}

export namespace ABCIQueryResponse {
    export type AsObject = {
        code: number,
        log: string,
        info: string,
        index: number,
        key: Uint8Array | string,
        value: Uint8Array | string,
        proofOps?: tendermint_crypto_proof_pb.ProofOps.AsObject,
        height: number,
        codespace: string,
    }
}

export class GetBlockByHeightRequest extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): GetBlockByHeightRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlockByHeightRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlockByHeightRequest): GetBlockByHeightRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlockByHeightRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlockByHeightRequest;
    static deserializeBinaryFromReader(message: GetBlockByHeightRequest, reader: jspb.BinaryReader): GetBlockByHeightRequest;
}

export namespace GetBlockByHeightRequest {
    export type AsObject = {
        height: number,
    }
}

export class GetBlockByHeightResponse extends jspb.Message { 

    hasBlockId(): boolean;
    clearBlockId(): void;
    getBlockId(): tendermint_types_types_pb.BlockID | undefined;
    setBlockId(value?: tendermint_types_types_pb.BlockID): GetBlockByHeightResponse;

    hasBlock(): boolean;
    clearBlock(): void;
    getBlock(): tendermint_types_block_pb.Block | undefined;
    setBlock(value?: tendermint_types_block_pb.Block): GetBlockByHeightResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlockByHeightResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlockByHeightResponse): GetBlockByHeightResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlockByHeightResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlockByHeightResponse;
    static deserializeBinaryFromReader(message: GetBlockByHeightResponse, reader: jspb.BinaryReader): GetBlockByHeightResponse;
}

export namespace GetBlockByHeightResponse {
    export type AsObject = {
        blockId?: tendermint_types_types_pb.BlockID.AsObject,
        block?: tendermint_types_block_pb.Block.AsObject,
    }
}
