// source: penumbra/view/v1alpha1/view.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var penumbra_crypto_tct_v1alpha1_tct_pb = require('../../../penumbra/crypto/tct/v1alpha1/tct_pb.js');
goog.object.extend(proto, penumbra_crypto_tct_v1alpha1_tct_pb);
var penumbra_core_keys_v1alpha1_keys_pb = require('../../../penumbra/core/keys/v1alpha1/keys_pb.js');
goog.object.extend(proto, penumbra_core_keys_v1alpha1_keys_pb);
var penumbra_core_num_v1alpha1_num_pb = require('../../../penumbra/core/num/v1alpha1/num_pb.js');
goog.object.extend(proto, penumbra_core_num_v1alpha1_num_pb);
var penumbra_core_app_v1alpha1_app_pb = require('../../../penumbra/core/app/v1alpha1/app_pb.js');
goog.object.extend(proto, penumbra_core_app_v1alpha1_app_pb);
var penumbra_core_asset_v1alpha1_asset_pb = require('../../../penumbra/core/asset/v1alpha1/asset_pb.js');
goog.object.extend(proto, penumbra_core_asset_v1alpha1_asset_pb);
var penumbra_core_transaction_v1alpha1_transaction_pb = require('../../../penumbra/core/transaction/v1alpha1/transaction_pb.js');
goog.object.extend(proto, penumbra_core_transaction_v1alpha1_transaction_pb);
var penumbra_core_component_chain_v1alpha1_chain_pb = require('../../../penumbra/core/component/chain/v1alpha1/chain_pb.js');
goog.object.extend(proto, penumbra_core_component_chain_v1alpha1_chain_pb);
var penumbra_core_component_dex_v1alpha1_dex_pb = require('../../../penumbra/core/component/dex/v1alpha1/dex_pb.js');
goog.object.extend(proto, penumbra_core_component_dex_v1alpha1_dex_pb);
var penumbra_core_component_fee_v1alpha1_fee_pb = require('../../../penumbra/core/component/fee/v1alpha1/fee_pb.js');
goog.object.extend(proto, penumbra_core_component_fee_v1alpha1_fee_pb);
var penumbra_core_component_ibc_v1alpha1_ibc_pb = require('../../../penumbra/core/component/ibc/v1alpha1/ibc_pb.js');
goog.object.extend(proto, penumbra_core_component_ibc_v1alpha1_ibc_pb);
var penumbra_core_component_sct_v1alpha1_sct_pb = require('../../../penumbra/core/component/sct/v1alpha1/sct_pb.js');
goog.object.extend(proto, penumbra_core_component_sct_v1alpha1_sct_pb);
var penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb = require('../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb.js');
goog.object.extend(proto, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb);
var penumbra_core_component_stake_v1alpha1_stake_pb = require('../../../penumbra/core/component/stake/v1alpha1/stake_pb.js');
goog.object.extend(proto, penumbra_core_component_stake_v1alpha1_stake_pb);
goog.exportSymbol('proto.penumbra.view.v1alpha1.AddressByIndexRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.AddressByIndexResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.AppParametersRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.AppParametersResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.AssetsRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.AssetsResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.BalancesRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.BalancesResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.BroadcastTransactionRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.BroadcastTransactionResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.EphemeralAddressRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.EphemeralAddressResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.FMDParametersRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.FMDParametersResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.GasPricesRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.GasPricesResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.IndexByAddressRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.IndexByAddressResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.NoteByCommitmentRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.NoteByCommitmentResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.NotesForVotingRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.NotesForVotingResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.NotesRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.NotesResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.NullifierStatusRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.NullifierStatusResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.SpendableNoteRecord', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.StatusRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.StatusResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.StatusStreamRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.StatusStreamResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.SwapByCommitmentRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.SwapByCommitmentResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.SwapRecord', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.TransactionInfo', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.TransactionInfoRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.TransactionInfoResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.TransactionPlannerRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.TransactionPlannerResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.ViewAuthRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.ViewAuthResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.ViewAuthToken', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.WalletIdRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.WalletIdResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.WitnessAndBuildRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.WitnessAndBuildResponse', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.WitnessRequest', null, global);
goog.exportSymbol('proto.penumbra.view.v1alpha1.WitnessResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.displayName = 'proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse.displayName = 'proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.BroadcastTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.BroadcastTransactionRequest.displayName = 'proto.penumbra.view.v1alpha1.BroadcastTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.BroadcastTransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.BroadcastTransactionResponse.displayName = 'proto.penumbra.view.v1alpha1.BroadcastTransactionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.view.v1alpha1.TransactionPlannerRequest.repeatedFields_, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.TransactionPlannerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.displayName = 'proto.penumbra.view.v1alpha1.TransactionPlannerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.displayName = 'proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.displayName = 'proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim.displayName = 'proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.displayName = 'proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.displayName = 'proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen.displayName = 'proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose.displayName = 'proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.displayName = 'proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.TransactionPlannerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.TransactionPlannerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.TransactionPlannerResponse.displayName = 'proto.penumbra.view.v1alpha1.TransactionPlannerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.AddressByIndexRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.AddressByIndexRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.AddressByIndexRequest.displayName = 'proto.penumbra.view.v1alpha1.AddressByIndexRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.AddressByIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.AddressByIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.AddressByIndexResponse.displayName = 'proto.penumbra.view.v1alpha1.AddressByIndexResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.WalletIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.WalletIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.WalletIdRequest.displayName = 'proto.penumbra.view.v1alpha1.WalletIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.WalletIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.WalletIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.WalletIdResponse.displayName = 'proto.penumbra.view.v1alpha1.WalletIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.IndexByAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.IndexByAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.IndexByAddressRequest.displayName = 'proto.penumbra.view.v1alpha1.IndexByAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.IndexByAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.IndexByAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.IndexByAddressResponse.displayName = 'proto.penumbra.view.v1alpha1.IndexByAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.EphemeralAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.EphemeralAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.EphemeralAddressRequest.displayName = 'proto.penumbra.view.v1alpha1.EphemeralAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.EphemeralAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.EphemeralAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.EphemeralAddressResponse.displayName = 'proto.penumbra.view.v1alpha1.EphemeralAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.BalancesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.BalancesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.BalancesRequest.displayName = 'proto.penumbra.view.v1alpha1.BalancesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.BalancesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.BalancesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.BalancesResponse.displayName = 'proto.penumbra.view.v1alpha1.BalancesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.ViewAuthToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.ViewAuthToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.ViewAuthToken.displayName = 'proto.penumbra.view.v1alpha1.ViewAuthToken';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.ViewAuthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.ViewAuthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.ViewAuthRequest.displayName = 'proto.penumbra.view.v1alpha1.ViewAuthRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.ViewAuthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.ViewAuthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.ViewAuthResponse.displayName = 'proto.penumbra.view.v1alpha1.ViewAuthResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.StatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.StatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.StatusRequest.displayName = 'proto.penumbra.view.v1alpha1.StatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.StatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.StatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.StatusResponse.displayName = 'proto.penumbra.view.v1alpha1.StatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.StatusStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.StatusStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.StatusStreamRequest.displayName = 'proto.penumbra.view.v1alpha1.StatusStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.StatusStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.StatusStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.StatusStreamResponse.displayName = 'proto.penumbra.view.v1alpha1.StatusStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.NotesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.NotesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.NotesRequest.displayName = 'proto.penumbra.view.v1alpha1.NotesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.NotesForVotingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.NotesForVotingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.NotesForVotingRequest.displayName = 'proto.penumbra.view.v1alpha1.NotesForVotingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.WitnessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.view.v1alpha1.WitnessRequest.repeatedFields_, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.WitnessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.WitnessRequest.displayName = 'proto.penumbra.view.v1alpha1.WitnessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.WitnessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.WitnessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.WitnessResponse.displayName = 'proto.penumbra.view.v1alpha1.WitnessResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.WitnessAndBuildRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.displayName = 'proto.penumbra.view.v1alpha1.WitnessAndBuildRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.WitnessAndBuildResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.WitnessAndBuildResponse.displayName = 'proto.penumbra.view.v1alpha1.WitnessAndBuildResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.AssetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.view.v1alpha1.AssetsRequest.repeatedFields_, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.AssetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.AssetsRequest.displayName = 'proto.penumbra.view.v1alpha1.AssetsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.AssetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.AssetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.AssetsResponse.displayName = 'proto.penumbra.view.v1alpha1.AssetsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.AppParametersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.AppParametersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.AppParametersRequest.displayName = 'proto.penumbra.view.v1alpha1.AppParametersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.AppParametersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.AppParametersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.AppParametersResponse.displayName = 'proto.penumbra.view.v1alpha1.AppParametersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.GasPricesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.GasPricesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.GasPricesRequest.displayName = 'proto.penumbra.view.v1alpha1.GasPricesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.GasPricesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.GasPricesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.GasPricesResponse.displayName = 'proto.penumbra.view.v1alpha1.GasPricesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.FMDParametersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.FMDParametersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.FMDParametersRequest.displayName = 'proto.penumbra.view.v1alpha1.FMDParametersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.FMDParametersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.FMDParametersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.FMDParametersResponse.displayName = 'proto.penumbra.view.v1alpha1.FMDParametersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.NoteByCommitmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.displayName = 'proto.penumbra.view.v1alpha1.NoteByCommitmentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.NoteByCommitmentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.NoteByCommitmentResponse.displayName = 'proto.penumbra.view.v1alpha1.NoteByCommitmentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.SwapByCommitmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.displayName = 'proto.penumbra.view.v1alpha1.SwapByCommitmentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.SwapByCommitmentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.SwapByCommitmentResponse.displayName = 'proto.penumbra.view.v1alpha1.SwapByCommitmentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest.displayName = 'proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse.displayName = 'proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.NullifierStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.NullifierStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.NullifierStatusRequest.displayName = 'proto.penumbra.view.v1alpha1.NullifierStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.NullifierStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.NullifierStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.NullifierStatusResponse.displayName = 'proto.penumbra.view.v1alpha1.NullifierStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest.displayName = 'proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.TransactionInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.TransactionInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.TransactionInfoRequest.displayName = 'proto.penumbra.view.v1alpha1.TransactionInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.TransactionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.TransactionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.TransactionInfo.displayName = 'proto.penumbra.view.v1alpha1.TransactionInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.TransactionInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.TransactionInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.TransactionInfoResponse.displayName = 'proto.penumbra.view.v1alpha1.TransactionInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse.displayName = 'proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.NotesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.NotesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.NotesResponse.displayName = 'proto.penumbra.view.v1alpha1.NotesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.NotesForVotingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.NotesForVotingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.NotesForVotingResponse.displayName = 'proto.penumbra.view.v1alpha1.NotesForVotingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.SpendableNoteRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.SpendableNoteRecord.displayName = 'proto.penumbra.view.v1alpha1.SpendableNoteRecord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.SwapRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.SwapRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.SwapRecord.displayName = 'proto.penumbra.view.v1alpha1.SwapRecord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.displayName = 'proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse.displayName = 'proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionPlan: (f = msg.getTransactionPlan()) && penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan.toObject(includeInstance, f),
    authorizationData: (f = msg.getAuthorizationData()) && penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest}
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest;
  return proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest}
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan;
      reader.readMessage(value,penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan.deserializeBinaryFromReader);
      msg.setTransactionPlan(value);
      break;
    case 2:
      var value = new penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData;
      reader.readMessage(value,penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData.deserializeBinaryFromReader);
      msg.setAuthorizationData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.transaction.v1alpha1.TransactionPlan transaction_plan = 1;
 * @return {?proto.penumbra.core.transaction.v1alpha1.TransactionPlan}
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.prototype.getTransactionPlan = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.TransactionPlan} */ (
    jspb.Message.getWrapperField(this, penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan, 1));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.TransactionPlan|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest} returns this
*/
proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.prototype.setTransactionPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest} returns this
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.prototype.clearTransactionPlan = function() {
  return this.setTransactionPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.prototype.hasTransactionPlan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.transaction.v1alpha1.AuthorizationData authorization_data = 2;
 * @return {?proto.penumbra.core.transaction.v1alpha1.AuthorizationData}
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.prototype.getAuthorizationData = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.AuthorizationData} */ (
    jspb.Message.getWrapperField(this, penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData, 2));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.AuthorizationData|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest} returns this
*/
proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.prototype.setAuthorizationData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest} returns this
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.prototype.clearAuthorizationData = function() {
  return this.setAuthorizationData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildRequest.prototype.hasAuthorizationData = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && penumbra_core_transaction_v1alpha1_transaction_pb.Transaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse}
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse;
  return proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse}
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_transaction_v1alpha1_transaction_pb.Transaction;
      reader.readMessage(value,penumbra_core_transaction_v1alpha1_transaction_pb.Transaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_transaction_v1alpha1_transaction_pb.Transaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.transaction.v1alpha1.Transaction transaction = 1;
 * @return {?proto.penumbra.core.transaction.v1alpha1.Transaction}
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse.prototype.getTransaction = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.Transaction} */ (
    jspb.Message.getWrapperField(this, penumbra_core_transaction_v1alpha1_transaction_pb.Transaction, 1));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.Transaction|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse} returns this
*/
proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse} returns this
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.AuthorizeAndBuildResponse.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.BroadcastTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.BroadcastTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && penumbra_core_transaction_v1alpha1_transaction_pb.Transaction.toObject(includeInstance, f),
    awaitDetection: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.BroadcastTransactionRequest}
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.BroadcastTransactionRequest;
  return proto.penumbra.view.v1alpha1.BroadcastTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.BroadcastTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.BroadcastTransactionRequest}
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_transaction_v1alpha1_transaction_pb.Transaction;
      reader.readMessage(value,penumbra_core_transaction_v1alpha1_transaction_pb.Transaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAwaitDetection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.BroadcastTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.BroadcastTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_transaction_v1alpha1_transaction_pb.Transaction.serializeBinaryToWriter
    );
  }
  f = message.getAwaitDetection();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional penumbra.core.transaction.v1alpha1.Transaction transaction = 1;
 * @return {?proto.penumbra.core.transaction.v1alpha1.Transaction}
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionRequest.prototype.getTransaction = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.Transaction} */ (
    jspb.Message.getWrapperField(this, penumbra_core_transaction_v1alpha1_transaction_pb.Transaction, 1));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.Transaction|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.BroadcastTransactionRequest} returns this
*/
proto.penumbra.view.v1alpha1.BroadcastTransactionRequest.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.BroadcastTransactionRequest} returns this
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionRequest.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionRequest.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool await_detection = 2;
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionRequest.prototype.getAwaitDetection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.view.v1alpha1.BroadcastTransactionRequest} returns this
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionRequest.prototype.setAwaitDetection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.BroadcastTransactionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.BroadcastTransactionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && penumbra_core_transaction_v1alpha1_transaction_pb.Id.toObject(includeInstance, f),
    detectionHeight: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.BroadcastTransactionResponse}
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.BroadcastTransactionResponse;
  return proto.penumbra.view.v1alpha1.BroadcastTransactionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.BroadcastTransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.BroadcastTransactionResponse}
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_transaction_v1alpha1_transaction_pb.Id;
      reader.readMessage(value,penumbra_core_transaction_v1alpha1_transaction_pb.Id.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDetectionHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.BroadcastTransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.BroadcastTransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_transaction_v1alpha1_transaction_pb.Id.serializeBinaryToWriter
    );
  }
  f = message.getDetectionHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional penumbra.core.transaction.v1alpha1.Id id = 1;
 * @return {?proto.penumbra.core.transaction.v1alpha1.Id}
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionResponse.prototype.getId = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.Id} */ (
    jspb.Message.getWrapperField(this, penumbra_core_transaction_v1alpha1_transaction_pb.Id, 1));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.Id|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.BroadcastTransactionResponse} returns this
*/
proto.penumbra.view.v1alpha1.BroadcastTransactionResponse.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.BroadcastTransactionResponse} returns this
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionResponse.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionResponse.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 detection_height = 2;
 * @return {number}
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionResponse.prototype.getDetectionHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.view.v1alpha1.BroadcastTransactionResponse} returns this
 */
proto.penumbra.view.v1alpha1.BroadcastTransactionResponse.prototype.setDetectionHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.repeatedFields_ = [20,30,31,40,50,60,61,70,71,72];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    expiryHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fee: (f = msg.getFee()) && penumbra_core_component_fee_v1alpha1_fee_pb.Fee.toObject(includeInstance, f),
    memo: (f = msg.getMemo()) && penumbra_core_transaction_v1alpha1_transaction_pb.MemoPlaintext.toObject(includeInstance, f),
    source: (f = msg.getSource()) && penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.toObject(includeInstance, f),
    walletId: (f = msg.getWalletId()) && penumbra_core_keys_v1alpha1_keys_pb.WalletId.toObject(includeInstance, f),
    outputsList: jspb.Message.toObjectList(msg.getOutputsList(),
    proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.toObject, includeInstance),
    swapsList: jspb.Message.toObjectList(msg.getSwapsList(),
    proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.toObject, includeInstance),
    swapClaimsList: jspb.Message.toObjectList(msg.getSwapClaimsList(),
    proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim.toObject, includeInstance),
    delegationsList: jspb.Message.toObjectList(msg.getDelegationsList(),
    proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.toObject, includeInstance),
    undelegationsList: jspb.Message.toObjectList(msg.getUndelegationsList(),
    proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.toObject, includeInstance),
    ibcActionsList: jspb.Message.toObjectList(msg.getIbcActionsList(),
    penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction.toObject, includeInstance),
    ics20WithdrawalsList: jspb.Message.toObjectList(msg.getIcs20WithdrawalsList(),
    penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal.toObject, includeInstance),
    positionOpensList: jspb.Message.toObjectList(msg.getPositionOpensList(),
    proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen.toObject, includeInstance),
    positionClosesList: jspb.Message.toObjectList(msg.getPositionClosesList(),
    proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose.toObject, includeInstance),
    positionWithdrawsList: jspb.Message.toObjectList(msg.getPositionWithdrawsList(),
    proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.TransactionPlannerRequest;
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExpiryHeight(value);
      break;
    case 2:
      var value = new penumbra_core_component_fee_v1alpha1_fee_pb.Fee;
      reader.readMessage(value,penumbra_core_component_fee_v1alpha1_fee_pb.Fee.deserializeBinaryFromReader);
      msg.setFee(value);
      break;
    case 3:
      var value = new penumbra_core_transaction_v1alpha1_transaction_pb.MemoPlaintext;
      reader.readMessage(value,penumbra_core_transaction_v1alpha1_transaction_pb.MemoPlaintext.deserializeBinaryFromReader);
      msg.setMemo(value);
      break;
    case 4:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.AddressIndex;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 14:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.WalletId;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.WalletId.deserializeBinaryFromReader);
      msg.setWalletId(value);
      break;
    case 20:
      var value = new proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output;
      reader.readMessage(value,proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.deserializeBinaryFromReader);
      msg.addOutputs(value);
      break;
    case 30:
      var value = new proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap;
      reader.readMessage(value,proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.deserializeBinaryFromReader);
      msg.addSwaps(value);
      break;
    case 31:
      var value = new proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim;
      reader.readMessage(value,proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim.deserializeBinaryFromReader);
      msg.addSwapClaims(value);
      break;
    case 40:
      var value = new proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate;
      reader.readMessage(value,proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.deserializeBinaryFromReader);
      msg.addDelegations(value);
      break;
    case 50:
      var value = new proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate;
      reader.readMessage(value,proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.deserializeBinaryFromReader);
      msg.addUndelegations(value);
      break;
    case 60:
      var value = new penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction;
      reader.readMessage(value,penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction.deserializeBinaryFromReader);
      msg.addIbcActions(value);
      break;
    case 61:
      var value = new penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal;
      reader.readMessage(value,penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal.deserializeBinaryFromReader);
      msg.addIcs20Withdrawals(value);
      break;
    case 70:
      var value = new proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen;
      reader.readMessage(value,proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen.deserializeBinaryFromReader);
      msg.addPositionOpens(value);
      break;
    case 71:
      var value = new proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose;
      reader.readMessage(value,proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose.deserializeBinaryFromReader);
      msg.addPositionCloses(value);
      break;
    case 72:
      var value = new proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw;
      reader.readMessage(value,proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.deserializeBinaryFromReader);
      msg.addPositionWithdraws(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExpiryHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getFee();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_component_fee_v1alpha1_fee_pb.Fee.serializeBinaryToWriter
    );
  }
  f = message.getMemo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_transaction_v1alpha1_transaction_pb.MemoPlaintext.serializeBinaryToWriter
    );
  }
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.serializeBinaryToWriter
    );
  }
  f = message.getWalletId();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.WalletId.serializeBinaryToWriter
    );
  }
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.serializeBinaryToWriter
    );
  }
  f = message.getSwapsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      30,
      f,
      proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.serializeBinaryToWriter
    );
  }
  f = message.getSwapClaimsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      31,
      f,
      proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim.serializeBinaryToWriter
    );
  }
  f = message.getDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      40,
      f,
      proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.serializeBinaryToWriter
    );
  }
  f = message.getUndelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      50,
      f,
      proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.serializeBinaryToWriter
    );
  }
  f = message.getIbcActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      60,
      f,
      penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction.serializeBinaryToWriter
    );
  }
  f = message.getIcs20WithdrawalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      61,
      f,
      penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal.serializeBinaryToWriter
    );
  }
  f = message.getPositionOpensList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      70,
      f,
      proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen.serializeBinaryToWriter
    );
  }
  f = message.getPositionClosesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      71,
      f,
      proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose.serializeBinaryToWriter
    );
  }
  f = message.getPositionWithdrawsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      72,
      f,
      proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && penumbra_core_asset_v1alpha1_asset_pb.Value.toObject(includeInstance, f),
    address: (f = msg.getAddress()) && penumbra_core_keys_v1alpha1_keys_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output;
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.Value;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.Value.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 2:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.Address;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.asset.v1alpha1.Value value = 1;
 * @return {?proto.penumbra.core.asset.v1alpha1.Value}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.prototype.getValue = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.Value} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.Value, 1));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.Value|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.keys.v1alpha1.Address address = 2;
 * @return {?proto.penumbra.core.keys.v1alpha1.Address}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.prototype.getAddress = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.Address} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.Address, 2));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.Address|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && penumbra_core_asset_v1alpha1_asset_pb.Value.toObject(includeInstance, f),
    targetAsset: (f = msg.getTargetAsset()) && penumbra_core_asset_v1alpha1_asset_pb.AssetId.toObject(includeInstance, f),
    fee: (f = msg.getFee()) && penumbra_core_component_fee_v1alpha1_fee_pb.Fee.toObject(includeInstance, f),
    claimAddress: (f = msg.getClaimAddress()) && penumbra_core_keys_v1alpha1_keys_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap;
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.Value;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.Value.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 2:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.AssetId;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.AssetId.deserializeBinaryFromReader);
      msg.setTargetAsset(value);
      break;
    case 3:
      var value = new penumbra_core_component_fee_v1alpha1_fee_pb.Fee;
      reader.readMessage(value,penumbra_core_component_fee_v1alpha1_fee_pb.Fee.deserializeBinaryFromReader);
      msg.setFee(value);
      break;
    case 4:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.Address;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.Address.deserializeBinaryFromReader);
      msg.setClaimAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getTargetAsset();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.AssetId.serializeBinaryToWriter
    );
  }
  f = message.getFee();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_component_fee_v1alpha1_fee_pb.Fee.serializeBinaryToWriter
    );
  }
  f = message.getClaimAddress();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.asset.v1alpha1.Value value = 1;
 * @return {?proto.penumbra.core.asset.v1alpha1.Value}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.getValue = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.Value} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.Value, 1));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.Value|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.asset.v1alpha1.AssetId target_asset = 2;
 * @return {?proto.penumbra.core.asset.v1alpha1.AssetId}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.getTargetAsset = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.AssetId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.AssetId, 2));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.AssetId|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.setTargetAsset = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.clearTargetAsset = function() {
  return this.setTargetAsset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.hasTargetAsset = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.component.fee.v1alpha1.Fee fee = 3;
 * @return {?proto.penumbra.core.component.fee.v1alpha1.Fee}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.getFee = function() {
  return /** @type{?proto.penumbra.core.component.fee.v1alpha1.Fee} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_fee_v1alpha1_fee_pb.Fee, 3));
};


/**
 * @param {?proto.penumbra.core.component.fee.v1alpha1.Fee|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.setFee = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.clearFee = function() {
  return this.setFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.hasFee = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.core.keys.v1alpha1.Address claim_address = 4;
 * @return {?proto.penumbra.core.keys.v1alpha1.Address}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.getClaimAddress = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.Address} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.Address, 4));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.Address|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.setClaimAddress = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.clearClaimAddress = function() {
  return this.setClaimAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap.prototype.hasClaimAddress = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim.toObject = function(includeInstance, msg) {
  var f, obj = {
    swapCommitment: (f = msg.getSwapCommitment()) && penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim;
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment;
      reader.readMessage(value,penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.deserializeBinaryFromReader);
      msg.setSwapCommitment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwapCommitment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.crypto.tct.v1alpha1.StateCommitment swap_commitment = 1;
 * @return {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim.prototype.getSwapCommitment = function() {
  return /** @type{?proto.penumbra.crypto.tct.v1alpha1.StateCommitment} */ (
    jspb.Message.getWrapperField(this, penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment, 1));
};


/**
 * @param {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim.prototype.setSwapCommitment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim.prototype.clearSwapCommitment = function() {
  return this.setSwapCommitment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim.prototype.hasSwapCommitment = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: (f = msg.getAmount()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    rateData: (f = msg.getRateData()) && penumbra_core_component_stake_v1alpha1_stake_pb.RateData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate;
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 3:
      var value = new penumbra_core_component_stake_v1alpha1_stake_pb.RateData;
      reader.readMessage(value,penumbra_core_component_stake_v1alpha1_stake_pb.RateData.deserializeBinaryFromReader);
      msg.setRateData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getRateData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_component_stake_v1alpha1_stake_pb.RateData.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.num.v1alpha1.Amount amount = 1;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.prototype.getAmount = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 1));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.component.stake.v1alpha1.RateData rate_data = 3;
 * @return {?proto.penumbra.core.component.stake.v1alpha1.RateData}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.prototype.getRateData = function() {
  return /** @type{?proto.penumbra.core.component.stake.v1alpha1.RateData} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_stake_v1alpha1_stake_pb.RateData, 3));
};


/**
 * @param {?proto.penumbra.core.component.stake.v1alpha1.RateData|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.prototype.setRateData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.prototype.clearRateData = function() {
  return this.setRateData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate.prototype.hasRateData = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && penumbra_core_asset_v1alpha1_asset_pb.Value.toObject(includeInstance, f),
    rateData: (f = msg.getRateData()) && penumbra_core_component_stake_v1alpha1_stake_pb.RateData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate;
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.Value;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.Value.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 2:
      var value = new penumbra_core_component_stake_v1alpha1_stake_pb.RateData;
      reader.readMessage(value,penumbra_core_component_stake_v1alpha1_stake_pb.RateData.deserializeBinaryFromReader);
      msg.setRateData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getRateData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_component_stake_v1alpha1_stake_pb.RateData.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.asset.v1alpha1.Value value = 1;
 * @return {?proto.penumbra.core.asset.v1alpha1.Value}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.prototype.getValue = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.Value} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.Value, 1));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.Value|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.component.stake.v1alpha1.RateData rate_data = 2;
 * @return {?proto.penumbra.core.component.stake.v1alpha1.RateData}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.prototype.getRateData = function() {
  return /** @type{?proto.penumbra.core.component.stake.v1alpha1.RateData} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_stake_v1alpha1_stake_pb.RateData, 2));
};


/**
 * @param {?proto.penumbra.core.component.stake.v1alpha1.RateData|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.prototype.setRateData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.prototype.clearRateData = function() {
  return this.setRateData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate.prototype.hasRateData = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && penumbra_core_component_dex_v1alpha1_dex_pb.Position.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen;
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.Position;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.Position.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.component.dex.v1alpha1.Position position = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.Position}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen.prototype.getPosition = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.Position} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.Position, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.Position|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionId: (f = msg.getPositionId()) && penumbra_core_component_dex_v1alpha1_dex_pb.PositionId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose;
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.PositionId;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.PositionId.deserializeBinaryFromReader);
      msg.setPositionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.PositionId.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.component.dex.v1alpha1.PositionId position_id = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionId}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose.prototype.getPositionId = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.PositionId, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionId|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose.prototype.setPositionId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose.prototype.clearPositionId = function() {
  return this.setPositionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose.prototype.hasPositionId = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionId: (f = msg.getPositionId()) && penumbra_core_component_dex_v1alpha1_dex_pb.PositionId.toObject(includeInstance, f),
    reserves: (f = msg.getReserves()) && penumbra_core_component_dex_v1alpha1_dex_pb.Reserves.toObject(includeInstance, f),
    tradingPair: (f = msg.getTradingPair()) && penumbra_core_component_dex_v1alpha1_dex_pb.TradingPair.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw;
  return proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.PositionId;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.PositionId.deserializeBinaryFromReader);
      msg.setPositionId(value);
      break;
    case 2:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.Reserves;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.Reserves.deserializeBinaryFromReader);
      msg.setReserves(value);
      break;
    case 3:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.TradingPair;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.TradingPair.deserializeBinaryFromReader);
      msg.setTradingPair(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.PositionId.serializeBinaryToWriter
    );
  }
  f = message.getReserves();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.Reserves.serializeBinaryToWriter
    );
  }
  f = message.getTradingPair();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.TradingPair.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.component.dex.v1alpha1.PositionId position_id = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionId}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.prototype.getPositionId = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.PositionId, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionId|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.prototype.setPositionId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.prototype.clearPositionId = function() {
  return this.setPositionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.prototype.hasPositionId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.Reserves reserves = 2;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.Reserves}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.prototype.getReserves = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.Reserves} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.Reserves, 2));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.Reserves|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.prototype.setReserves = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.prototype.clearReserves = function() {
  return this.setReserves(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.prototype.hasReserves = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.TradingPair trading_pair = 3;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.TradingPair}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.prototype.getTradingPair = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.TradingPair} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.TradingPair, 3));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.TradingPair|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.prototype.setTradingPair = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.prototype.clearTradingPair = function() {
  return this.setTradingPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw.prototype.hasTradingPair = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 expiry_height = 1;
 * @return {number}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.getExpiryHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.setExpiryHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional penumbra.core.component.fee.v1alpha1.Fee fee = 2;
 * @return {?proto.penumbra.core.component.fee.v1alpha1.Fee}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.getFee = function() {
  return /** @type{?proto.penumbra.core.component.fee.v1alpha1.Fee} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_fee_v1alpha1_fee_pb.Fee, 2));
};


/**
 * @param {?proto.penumbra.core.component.fee.v1alpha1.Fee|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.setFee = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.clearFee = function() {
  return this.setFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.hasFee = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.transaction.v1alpha1.MemoPlaintext memo = 3;
 * @return {?proto.penumbra.core.transaction.v1alpha1.MemoPlaintext}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.getMemo = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.MemoPlaintext} */ (
    jspb.Message.getWrapperField(this, penumbra_core_transaction_v1alpha1_transaction_pb.MemoPlaintext, 3));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.MemoPlaintext|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.setMemo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.clearMemo = function() {
  return this.setMemo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.hasMemo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.core.keys.v1alpha1.AddressIndex source = 4;
 * @return {?proto.penumbra.core.keys.v1alpha1.AddressIndex}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.getSource = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.AddressIndex} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.AddressIndex, 4));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.AddressIndex|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.hasSource = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional penumbra.core.keys.v1alpha1.WalletId wallet_id = 14;
 * @return {?proto.penumbra.core.keys.v1alpha1.WalletId}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.getWalletId = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.WalletId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.WalletId, 14));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.WalletId|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.setWalletId = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.clearWalletId = function() {
  return this.setWalletId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.hasWalletId = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * repeated Output outputs = 20;
 * @return {!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output>}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.getOutputsList = function() {
  return /** @type{!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output, 20));
};


/**
 * @param {!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output>} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.setOutputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.addOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Output, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.clearOutputsList = function() {
  return this.setOutputsList([]);
};


/**
 * repeated Swap swaps = 30;
 * @return {!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap>}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.getSwapsList = function() {
  return /** @type{!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap, 30));
};


/**
 * @param {!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap>} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.setSwapsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 30, value);
};


/**
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.addSwaps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 30, opt_value, proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Swap, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.clearSwapsList = function() {
  return this.setSwapsList([]);
};


/**
 * repeated SwapClaim swap_claims = 31;
 * @return {!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim>}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.getSwapClaimsList = function() {
  return /** @type{!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim, 31));
};


/**
 * @param {!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim>} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.setSwapClaimsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 31, value);
};


/**
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.addSwapClaims = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 31, opt_value, proto.penumbra.view.v1alpha1.TransactionPlannerRequest.SwapClaim, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.clearSwapClaimsList = function() {
  return this.setSwapClaimsList([]);
};


/**
 * repeated Delegate delegations = 40;
 * @return {!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate>}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.getDelegationsList = function() {
  return /** @type{!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate, 40));
};


/**
 * @param {!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate>} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.setDelegationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 40, value);
};


/**
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.addDelegations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 40, opt_value, proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Delegate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.clearDelegationsList = function() {
  return this.setDelegationsList([]);
};


/**
 * repeated Undelegate undelegations = 50;
 * @return {!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate>}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.getUndelegationsList = function() {
  return /** @type{!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate, 50));
};


/**
 * @param {!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate>} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.setUndelegationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 50, value);
};


/**
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.addUndelegations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 50, opt_value, proto.penumbra.view.v1alpha1.TransactionPlannerRequest.Undelegate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.clearUndelegationsList = function() {
  return this.setUndelegationsList([]);
};


/**
 * repeated penumbra.core.component.ibc.v1alpha1.IbcAction ibc_actions = 60;
 * @return {!Array<!proto.penumbra.core.component.ibc.v1alpha1.IbcAction>}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.getIbcActionsList = function() {
  return /** @type{!Array<!proto.penumbra.core.component.ibc.v1alpha1.IbcAction>} */ (
    jspb.Message.getRepeatedWrapperField(this, penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction, 60));
};


/**
 * @param {!Array<!proto.penumbra.core.component.ibc.v1alpha1.IbcAction>} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.setIbcActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 60, value);
};


/**
 * @param {!proto.penumbra.core.component.ibc.v1alpha1.IbcAction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.core.component.ibc.v1alpha1.IbcAction}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.addIbcActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 60, opt_value, proto.penumbra.core.component.ibc.v1alpha1.IbcAction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.clearIbcActionsList = function() {
  return this.setIbcActionsList([]);
};


/**
 * repeated penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal ics20_withdrawals = 61;
 * @return {!Array<!proto.penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal>}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.getIcs20WithdrawalsList = function() {
  return /** @type{!Array<!proto.penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal>} */ (
    jspb.Message.getRepeatedWrapperField(this, penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal, 61));
};


/**
 * @param {!Array<!proto.penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal>} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.setIcs20WithdrawalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 61, value);
};


/**
 * @param {!proto.penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.addIcs20Withdrawals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 61, opt_value, proto.penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.clearIcs20WithdrawalsList = function() {
  return this.setIcs20WithdrawalsList([]);
};


/**
 * repeated PositionOpen position_opens = 70;
 * @return {!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen>}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.getPositionOpensList = function() {
  return /** @type{!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen, 70));
};


/**
 * @param {!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen>} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.setPositionOpensList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 70, value);
};


/**
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.addPositionOpens = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 70, opt_value, proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionOpen, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.clearPositionOpensList = function() {
  return this.setPositionOpensList([]);
};


/**
 * repeated PositionClose position_closes = 71;
 * @return {!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose>}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.getPositionClosesList = function() {
  return /** @type{!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose, 71));
};


/**
 * @param {!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose>} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.setPositionClosesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 71, value);
};


/**
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.addPositionCloses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 71, opt_value, proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionClose, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.clearPositionClosesList = function() {
  return this.setPositionClosesList([]);
};


/**
 * repeated PositionWithdraw position_withdraws = 72;
 * @return {!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw>}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.getPositionWithdrawsList = function() {
  return /** @type{!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw, 72));
};


/**
 * @param {!Array<!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw>} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.setPositionWithdrawsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 72, value);
};


/**
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.addPositionWithdraws = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 72, opt_value, proto.penumbra.view.v1alpha1.TransactionPlannerRequest.PositionWithdraw, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerRequest.prototype.clearPositionWithdrawsList = function() {
  return this.setPositionWithdrawsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.TransactionPlannerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    plan: (f = msg.getPlan()) && penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerResponse}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.TransactionPlannerResponse;
  return proto.penumbra.view.v1alpha1.TransactionPlannerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerResponse}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan;
      reader.readMessage(value,penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan.deserializeBinaryFromReader);
      msg.setPlan(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.TransactionPlannerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.TransactionPlannerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionPlannerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.transaction.v1alpha1.TransactionPlan plan = 1;
 * @return {?proto.penumbra.core.transaction.v1alpha1.TransactionPlan}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerResponse.prototype.getPlan = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.TransactionPlan} */ (
    jspb.Message.getWrapperField(this, penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan, 1));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.TransactionPlan|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerResponse} returns this
*/
proto.penumbra.view.v1alpha1.TransactionPlannerResponse.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionPlannerResponse} returns this
 */
proto.penumbra.view.v1alpha1.TransactionPlannerResponse.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionPlannerResponse.prototype.hasPlan = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.AddressByIndexRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.AddressByIndexRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.AddressByIndexRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.AddressByIndexRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressIndex: (f = msg.getAddressIndex()) && penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.toObject(includeInstance, f),
    displayConfirm: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.AddressByIndexRequest}
 */
proto.penumbra.view.v1alpha1.AddressByIndexRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.AddressByIndexRequest;
  return proto.penumbra.view.v1alpha1.AddressByIndexRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.AddressByIndexRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.AddressByIndexRequest}
 */
proto.penumbra.view.v1alpha1.AddressByIndexRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.AddressIndex;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.deserializeBinaryFromReader);
      msg.setAddressIndex(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayConfirm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.AddressByIndexRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.AddressByIndexRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.AddressByIndexRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.AddressByIndexRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressIndex();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.serializeBinaryToWriter
    );
  }
  f = message.getDisplayConfirm();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional penumbra.core.keys.v1alpha1.AddressIndex address_index = 1;
 * @return {?proto.penumbra.core.keys.v1alpha1.AddressIndex}
 */
proto.penumbra.view.v1alpha1.AddressByIndexRequest.prototype.getAddressIndex = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.AddressIndex} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.AddressIndex, 1));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.AddressIndex|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.AddressByIndexRequest} returns this
*/
proto.penumbra.view.v1alpha1.AddressByIndexRequest.prototype.setAddressIndex = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.AddressByIndexRequest} returns this
 */
proto.penumbra.view.v1alpha1.AddressByIndexRequest.prototype.clearAddressIndex = function() {
  return this.setAddressIndex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.AddressByIndexRequest.prototype.hasAddressIndex = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool display_confirm = 2;
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.AddressByIndexRequest.prototype.getDisplayConfirm = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.view.v1alpha1.AddressByIndexRequest} returns this
 */
proto.penumbra.view.v1alpha1.AddressByIndexRequest.prototype.setDisplayConfirm = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.AddressByIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.AddressByIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.AddressByIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.AddressByIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: (f = msg.getAddress()) && penumbra_core_keys_v1alpha1_keys_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.AddressByIndexResponse}
 */
proto.penumbra.view.v1alpha1.AddressByIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.AddressByIndexResponse;
  return proto.penumbra.view.v1alpha1.AddressByIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.AddressByIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.AddressByIndexResponse}
 */
proto.penumbra.view.v1alpha1.AddressByIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.Address;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.AddressByIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.AddressByIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.AddressByIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.AddressByIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.keys.v1alpha1.Address address = 1;
 * @return {?proto.penumbra.core.keys.v1alpha1.Address}
 */
proto.penumbra.view.v1alpha1.AddressByIndexResponse.prototype.getAddress = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.Address} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.Address, 1));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.Address|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.AddressByIndexResponse} returns this
*/
proto.penumbra.view.v1alpha1.AddressByIndexResponse.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.AddressByIndexResponse} returns this
 */
proto.penumbra.view.v1alpha1.AddressByIndexResponse.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.AddressByIndexResponse.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.WalletIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.WalletIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.WalletIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.WalletIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.WalletIdRequest}
 */
proto.penumbra.view.v1alpha1.WalletIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.WalletIdRequest;
  return proto.penumbra.view.v1alpha1.WalletIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.WalletIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.WalletIdRequest}
 */
proto.penumbra.view.v1alpha1.WalletIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.WalletIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.WalletIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.WalletIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.WalletIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.WalletIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.WalletIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.WalletIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.WalletIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: (f = msg.getWalletId()) && penumbra_core_keys_v1alpha1_keys_pb.WalletId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.WalletIdResponse}
 */
proto.penumbra.view.v1alpha1.WalletIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.WalletIdResponse;
  return proto.penumbra.view.v1alpha1.WalletIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.WalletIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.WalletIdResponse}
 */
proto.penumbra.view.v1alpha1.WalletIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.WalletId;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.WalletId.deserializeBinaryFromReader);
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.WalletIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.WalletIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.WalletIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.WalletIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.WalletId.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.keys.v1alpha1.WalletId wallet_id = 1;
 * @return {?proto.penumbra.core.keys.v1alpha1.WalletId}
 */
proto.penumbra.view.v1alpha1.WalletIdResponse.prototype.getWalletId = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.WalletId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.WalletId, 1));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.WalletId|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.WalletIdResponse} returns this
*/
proto.penumbra.view.v1alpha1.WalletIdResponse.prototype.setWalletId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.WalletIdResponse} returns this
 */
proto.penumbra.view.v1alpha1.WalletIdResponse.prototype.clearWalletId = function() {
  return this.setWalletId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.WalletIdResponse.prototype.hasWalletId = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.IndexByAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.IndexByAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.IndexByAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.IndexByAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: (f = msg.getAddress()) && penumbra_core_keys_v1alpha1_keys_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.IndexByAddressRequest}
 */
proto.penumbra.view.v1alpha1.IndexByAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.IndexByAddressRequest;
  return proto.penumbra.view.v1alpha1.IndexByAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.IndexByAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.IndexByAddressRequest}
 */
proto.penumbra.view.v1alpha1.IndexByAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.Address;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.IndexByAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.IndexByAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.IndexByAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.IndexByAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.keys.v1alpha1.Address address = 1;
 * @return {?proto.penumbra.core.keys.v1alpha1.Address}
 */
proto.penumbra.view.v1alpha1.IndexByAddressRequest.prototype.getAddress = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.Address} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.Address, 1));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.Address|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.IndexByAddressRequest} returns this
*/
proto.penumbra.view.v1alpha1.IndexByAddressRequest.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.IndexByAddressRequest} returns this
 */
proto.penumbra.view.v1alpha1.IndexByAddressRequest.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.IndexByAddressRequest.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.IndexByAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.IndexByAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.IndexByAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.IndexByAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressIndex: (f = msg.getAddressIndex()) && penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.IndexByAddressResponse}
 */
proto.penumbra.view.v1alpha1.IndexByAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.IndexByAddressResponse;
  return proto.penumbra.view.v1alpha1.IndexByAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.IndexByAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.IndexByAddressResponse}
 */
proto.penumbra.view.v1alpha1.IndexByAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.AddressIndex;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.deserializeBinaryFromReader);
      msg.setAddressIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.IndexByAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.IndexByAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.IndexByAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.IndexByAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressIndex();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.keys.v1alpha1.AddressIndex address_index = 1;
 * @return {?proto.penumbra.core.keys.v1alpha1.AddressIndex}
 */
proto.penumbra.view.v1alpha1.IndexByAddressResponse.prototype.getAddressIndex = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.AddressIndex} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.AddressIndex, 1));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.AddressIndex|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.IndexByAddressResponse} returns this
*/
proto.penumbra.view.v1alpha1.IndexByAddressResponse.prototype.setAddressIndex = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.IndexByAddressResponse} returns this
 */
proto.penumbra.view.v1alpha1.IndexByAddressResponse.prototype.clearAddressIndex = function() {
  return this.setAddressIndex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.IndexByAddressResponse.prototype.hasAddressIndex = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.EphemeralAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.EphemeralAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.EphemeralAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.EphemeralAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressIndex: (f = msg.getAddressIndex()) && penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.toObject(includeInstance, f),
    displayConfirm: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.EphemeralAddressRequest}
 */
proto.penumbra.view.v1alpha1.EphemeralAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.EphemeralAddressRequest;
  return proto.penumbra.view.v1alpha1.EphemeralAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.EphemeralAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.EphemeralAddressRequest}
 */
proto.penumbra.view.v1alpha1.EphemeralAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.AddressIndex;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.deserializeBinaryFromReader);
      msg.setAddressIndex(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayConfirm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.EphemeralAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.EphemeralAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.EphemeralAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.EphemeralAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressIndex();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.serializeBinaryToWriter
    );
  }
  f = message.getDisplayConfirm();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional penumbra.core.keys.v1alpha1.AddressIndex address_index = 1;
 * @return {?proto.penumbra.core.keys.v1alpha1.AddressIndex}
 */
proto.penumbra.view.v1alpha1.EphemeralAddressRequest.prototype.getAddressIndex = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.AddressIndex} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.AddressIndex, 1));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.AddressIndex|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.EphemeralAddressRequest} returns this
*/
proto.penumbra.view.v1alpha1.EphemeralAddressRequest.prototype.setAddressIndex = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.EphemeralAddressRequest} returns this
 */
proto.penumbra.view.v1alpha1.EphemeralAddressRequest.prototype.clearAddressIndex = function() {
  return this.setAddressIndex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.EphemeralAddressRequest.prototype.hasAddressIndex = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool display_confirm = 2;
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.EphemeralAddressRequest.prototype.getDisplayConfirm = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.view.v1alpha1.EphemeralAddressRequest} returns this
 */
proto.penumbra.view.v1alpha1.EphemeralAddressRequest.prototype.setDisplayConfirm = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.EphemeralAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.EphemeralAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.EphemeralAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.EphemeralAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: (f = msg.getAddress()) && penumbra_core_keys_v1alpha1_keys_pb.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.EphemeralAddressResponse}
 */
proto.penumbra.view.v1alpha1.EphemeralAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.EphemeralAddressResponse;
  return proto.penumbra.view.v1alpha1.EphemeralAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.EphemeralAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.EphemeralAddressResponse}
 */
proto.penumbra.view.v1alpha1.EphemeralAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.Address;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.EphemeralAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.EphemeralAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.EphemeralAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.EphemeralAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.keys.v1alpha1.Address address = 1;
 * @return {?proto.penumbra.core.keys.v1alpha1.Address}
 */
proto.penumbra.view.v1alpha1.EphemeralAddressResponse.prototype.getAddress = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.Address} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.Address, 1));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.Address|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.EphemeralAddressResponse} returns this
*/
proto.penumbra.view.v1alpha1.EphemeralAddressResponse.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.EphemeralAddressResponse} returns this
 */
proto.penumbra.view.v1alpha1.EphemeralAddressResponse.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.EphemeralAddressResponse.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.BalancesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.BalancesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.BalancesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.BalancesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountFilter: (f = msg.getAccountFilter()) && penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.toObject(includeInstance, f),
    assetIdFilter: (f = msg.getAssetIdFilter()) && penumbra_core_asset_v1alpha1_asset_pb.AssetId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.BalancesRequest}
 */
proto.penumbra.view.v1alpha1.BalancesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.BalancesRequest;
  return proto.penumbra.view.v1alpha1.BalancesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.BalancesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.BalancesRequest}
 */
proto.penumbra.view.v1alpha1.BalancesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.AddressIndex;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.deserializeBinaryFromReader);
      msg.setAccountFilter(value);
      break;
    case 2:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.AssetId;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.AssetId.deserializeBinaryFromReader);
      msg.setAssetIdFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.BalancesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.BalancesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.BalancesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.BalancesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.serializeBinaryToWriter
    );
  }
  f = message.getAssetIdFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.AssetId.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.keys.v1alpha1.AddressIndex account_filter = 1;
 * @return {?proto.penumbra.core.keys.v1alpha1.AddressIndex}
 */
proto.penumbra.view.v1alpha1.BalancesRequest.prototype.getAccountFilter = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.AddressIndex} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.AddressIndex, 1));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.AddressIndex|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.BalancesRequest} returns this
*/
proto.penumbra.view.v1alpha1.BalancesRequest.prototype.setAccountFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.BalancesRequest} returns this
 */
proto.penumbra.view.v1alpha1.BalancesRequest.prototype.clearAccountFilter = function() {
  return this.setAccountFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.BalancesRequest.prototype.hasAccountFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.asset.v1alpha1.AssetId asset_id_filter = 2;
 * @return {?proto.penumbra.core.asset.v1alpha1.AssetId}
 */
proto.penumbra.view.v1alpha1.BalancesRequest.prototype.getAssetIdFilter = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.AssetId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.AssetId, 2));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.AssetId|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.BalancesRequest} returns this
*/
proto.penumbra.view.v1alpha1.BalancesRequest.prototype.setAssetIdFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.BalancesRequest} returns this
 */
proto.penumbra.view.v1alpha1.BalancesRequest.prototype.clearAssetIdFilter = function() {
  return this.setAssetIdFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.BalancesRequest.prototype.hasAssetIdFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.BalancesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.BalancesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.BalancesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.BalancesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.toObject(includeInstance, f),
    balance: (f = msg.getBalance()) && penumbra_core_asset_v1alpha1_asset_pb.Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.BalancesResponse}
 */
proto.penumbra.view.v1alpha1.BalancesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.BalancesResponse;
  return proto.penumbra.view.v1alpha1.BalancesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.BalancesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.BalancesResponse}
 */
proto.penumbra.view.v1alpha1.BalancesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.AddressIndex;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.Value;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.Value.deserializeBinaryFromReader);
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.BalancesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.BalancesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.BalancesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.BalancesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.serializeBinaryToWriter
    );
  }
  f = message.getBalance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.keys.v1alpha1.AddressIndex account = 1;
 * @return {?proto.penumbra.core.keys.v1alpha1.AddressIndex}
 */
proto.penumbra.view.v1alpha1.BalancesResponse.prototype.getAccount = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.AddressIndex} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.AddressIndex, 1));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.AddressIndex|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.BalancesResponse} returns this
*/
proto.penumbra.view.v1alpha1.BalancesResponse.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.BalancesResponse} returns this
 */
proto.penumbra.view.v1alpha1.BalancesResponse.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.BalancesResponse.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.asset.v1alpha1.Value balance = 2;
 * @return {?proto.penumbra.core.asset.v1alpha1.Value}
 */
proto.penumbra.view.v1alpha1.BalancesResponse.prototype.getBalance = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.Value} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.Value, 2));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.Value|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.BalancesResponse} returns this
*/
proto.penumbra.view.v1alpha1.BalancesResponse.prototype.setBalance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.BalancesResponse} returns this
 */
proto.penumbra.view.v1alpha1.BalancesResponse.prototype.clearBalance = function() {
  return this.setBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.BalancesResponse.prototype.hasBalance = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.ViewAuthToken.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.ViewAuthToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.ViewAuthToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.ViewAuthToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    inner: msg.getInner_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.ViewAuthToken}
 */
proto.penumbra.view.v1alpha1.ViewAuthToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.ViewAuthToken;
  return proto.penumbra.view.v1alpha1.ViewAuthToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.ViewAuthToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.ViewAuthToken}
 */
proto.penumbra.view.v1alpha1.ViewAuthToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setInner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.ViewAuthToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.ViewAuthToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.ViewAuthToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.ViewAuthToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInner_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes inner = 1;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.view.v1alpha1.ViewAuthToken.prototype.getInner = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes inner = 1;
 * This is a type-conversion wrapper around `getInner()`
 * @return {string}
 */
proto.penumbra.view.v1alpha1.ViewAuthToken.prototype.getInner_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getInner()));
};


/**
 * optional bytes inner = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getInner()`
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.ViewAuthToken.prototype.getInner_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInner()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.view.v1alpha1.ViewAuthToken} returns this
 */
proto.penumbra.view.v1alpha1.ViewAuthToken.prototype.setInner = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.ViewAuthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.ViewAuthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.ViewAuthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.ViewAuthRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fvk: (f = msg.getFvk()) && penumbra_core_keys_v1alpha1_keys_pb.FullViewingKey.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.ViewAuthRequest}
 */
proto.penumbra.view.v1alpha1.ViewAuthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.ViewAuthRequest;
  return proto.penumbra.view.v1alpha1.ViewAuthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.ViewAuthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.ViewAuthRequest}
 */
proto.penumbra.view.v1alpha1.ViewAuthRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.FullViewingKey;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.FullViewingKey.deserializeBinaryFromReader);
      msg.setFvk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.ViewAuthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.ViewAuthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.ViewAuthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.ViewAuthRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFvk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.FullViewingKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.keys.v1alpha1.FullViewingKey fvk = 1;
 * @return {?proto.penumbra.core.keys.v1alpha1.FullViewingKey}
 */
proto.penumbra.view.v1alpha1.ViewAuthRequest.prototype.getFvk = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.FullViewingKey} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.FullViewingKey, 1));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.FullViewingKey|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.ViewAuthRequest} returns this
*/
proto.penumbra.view.v1alpha1.ViewAuthRequest.prototype.setFvk = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.ViewAuthRequest} returns this
 */
proto.penumbra.view.v1alpha1.ViewAuthRequest.prototype.clearFvk = function() {
  return this.setFvk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.ViewAuthRequest.prototype.hasFvk = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.ViewAuthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.ViewAuthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.ViewAuthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.ViewAuthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: (f = msg.getToken()) && proto.penumbra.view.v1alpha1.ViewAuthToken.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.ViewAuthResponse}
 */
proto.penumbra.view.v1alpha1.ViewAuthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.ViewAuthResponse;
  return proto.penumbra.view.v1alpha1.ViewAuthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.ViewAuthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.ViewAuthResponse}
 */
proto.penumbra.view.v1alpha1.ViewAuthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.view.v1alpha1.ViewAuthToken;
      reader.readMessage(value,proto.penumbra.view.v1alpha1.ViewAuthToken.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.ViewAuthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.ViewAuthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.ViewAuthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.ViewAuthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.view.v1alpha1.ViewAuthToken.serializeBinaryToWriter
    );
  }
};


/**
 * optional ViewAuthToken token = 1;
 * @return {?proto.penumbra.view.v1alpha1.ViewAuthToken}
 */
proto.penumbra.view.v1alpha1.ViewAuthResponse.prototype.getToken = function() {
  return /** @type{?proto.penumbra.view.v1alpha1.ViewAuthToken} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.view.v1alpha1.ViewAuthToken, 1));
};


/**
 * @param {?proto.penumbra.view.v1alpha1.ViewAuthToken|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.ViewAuthResponse} returns this
*/
proto.penumbra.view.v1alpha1.ViewAuthResponse.prototype.setToken = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.ViewAuthResponse} returns this
 */
proto.penumbra.view.v1alpha1.ViewAuthResponse.prototype.clearToken = function() {
  return this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.ViewAuthResponse.prototype.hasToken = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.StatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.StatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.StatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.StatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: (f = msg.getWalletId()) && penumbra_core_keys_v1alpha1_keys_pb.WalletId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.StatusRequest}
 */
proto.penumbra.view.v1alpha1.StatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.StatusRequest;
  return proto.penumbra.view.v1alpha1.StatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.StatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.StatusRequest}
 */
proto.penumbra.view.v1alpha1.StatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 14:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.WalletId;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.WalletId.deserializeBinaryFromReader);
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.StatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.StatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.StatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.StatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.WalletId.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.keys.v1alpha1.WalletId wallet_id = 14;
 * @return {?proto.penumbra.core.keys.v1alpha1.WalletId}
 */
proto.penumbra.view.v1alpha1.StatusRequest.prototype.getWalletId = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.WalletId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.WalletId, 14));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.WalletId|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.StatusRequest} returns this
*/
proto.penumbra.view.v1alpha1.StatusRequest.prototype.setWalletId = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.StatusRequest} returns this
 */
proto.penumbra.view.v1alpha1.StatusRequest.prototype.clearWalletId = function() {
  return this.setWalletId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.StatusRequest.prototype.hasWalletId = function() {
  return jspb.Message.getField(this, 14) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.StatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.StatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.StatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.StatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    syncHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    catchingUp: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.StatusResponse}
 */
proto.penumbra.view.v1alpha1.StatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.StatusResponse;
  return proto.penumbra.view.v1alpha1.StatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.StatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.StatusResponse}
 */
proto.penumbra.view.v1alpha1.StatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSyncHeight(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCatchingUp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.StatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.StatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.StatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.StatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSyncHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCatchingUp();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional uint64 sync_height = 1;
 * @return {number}
 */
proto.penumbra.view.v1alpha1.StatusResponse.prototype.getSyncHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.view.v1alpha1.StatusResponse} returns this
 */
proto.penumbra.view.v1alpha1.StatusResponse.prototype.setSyncHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool catching_up = 2;
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.StatusResponse.prototype.getCatchingUp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.view.v1alpha1.StatusResponse} returns this
 */
proto.penumbra.view.v1alpha1.StatusResponse.prototype.setCatchingUp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.StatusStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.StatusStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.StatusStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.StatusStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: (f = msg.getWalletId()) && penumbra_core_keys_v1alpha1_keys_pb.WalletId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.StatusStreamRequest}
 */
proto.penumbra.view.v1alpha1.StatusStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.StatusStreamRequest;
  return proto.penumbra.view.v1alpha1.StatusStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.StatusStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.StatusStreamRequest}
 */
proto.penumbra.view.v1alpha1.StatusStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 14:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.WalletId;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.WalletId.deserializeBinaryFromReader);
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.StatusStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.StatusStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.StatusStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.StatusStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.WalletId.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.keys.v1alpha1.WalletId wallet_id = 14;
 * @return {?proto.penumbra.core.keys.v1alpha1.WalletId}
 */
proto.penumbra.view.v1alpha1.StatusStreamRequest.prototype.getWalletId = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.WalletId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.WalletId, 14));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.WalletId|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.StatusStreamRequest} returns this
*/
proto.penumbra.view.v1alpha1.StatusStreamRequest.prototype.setWalletId = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.StatusStreamRequest} returns this
 */
proto.penumbra.view.v1alpha1.StatusStreamRequest.prototype.clearWalletId = function() {
  return this.setWalletId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.StatusStreamRequest.prototype.hasWalletId = function() {
  return jspb.Message.getField(this, 14) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.StatusStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.StatusStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.StatusStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.StatusStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    latestKnownBlockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    syncHeight: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.StatusStreamResponse}
 */
proto.penumbra.view.v1alpha1.StatusStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.StatusStreamResponse;
  return proto.penumbra.view.v1alpha1.StatusStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.StatusStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.StatusStreamResponse}
 */
proto.penumbra.view.v1alpha1.StatusStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLatestKnownBlockHeight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSyncHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.StatusStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.StatusStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.StatusStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.StatusStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatestKnownBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSyncHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 latest_known_block_height = 1;
 * @return {number}
 */
proto.penumbra.view.v1alpha1.StatusStreamResponse.prototype.getLatestKnownBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.view.v1alpha1.StatusStreamResponse} returns this
 */
proto.penumbra.view.v1alpha1.StatusStreamResponse.prototype.setLatestKnownBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 sync_height = 2;
 * @return {number}
 */
proto.penumbra.view.v1alpha1.StatusStreamResponse.prototype.getSyncHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.view.v1alpha1.StatusStreamResponse} returns this
 */
proto.penumbra.view.v1alpha1.StatusStreamResponse.prototype.setSyncHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.NotesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.NotesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.NotesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.NotesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    includeSpent: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    assetId: (f = msg.getAssetId()) && penumbra_core_asset_v1alpha1_asset_pb.AssetId.toObject(includeInstance, f),
    addressIndex: (f = msg.getAddressIndex()) && penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.toObject(includeInstance, f),
    amountToSpend: (f = msg.getAmountToSpend()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    walletId: (f = msg.getWalletId()) && penumbra_core_keys_v1alpha1_keys_pb.WalletId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.NotesRequest}
 */
proto.penumbra.view.v1alpha1.NotesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.NotesRequest;
  return proto.penumbra.view.v1alpha1.NotesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.NotesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.NotesRequest}
 */
proto.penumbra.view.v1alpha1.NotesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeSpent(value);
      break;
    case 3:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.AssetId;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.AssetId.deserializeBinaryFromReader);
      msg.setAssetId(value);
      break;
    case 4:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.AddressIndex;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.deserializeBinaryFromReader);
      msg.setAddressIndex(value);
      break;
    case 6:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setAmountToSpend(value);
      break;
    case 14:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.WalletId;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.WalletId.deserializeBinaryFromReader);
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.NotesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.NotesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.NotesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.NotesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncludeSpent();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getAssetId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.AssetId.serializeBinaryToWriter
    );
  }
  f = message.getAddressIndex();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.serializeBinaryToWriter
    );
  }
  f = message.getAmountToSpend();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getWalletId();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.WalletId.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool include_spent = 2;
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NotesRequest.prototype.getIncludeSpent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.view.v1alpha1.NotesRequest} returns this
 */
proto.penumbra.view.v1alpha1.NotesRequest.prototype.setIncludeSpent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional penumbra.core.asset.v1alpha1.AssetId asset_id = 3;
 * @return {?proto.penumbra.core.asset.v1alpha1.AssetId}
 */
proto.penumbra.view.v1alpha1.NotesRequest.prototype.getAssetId = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.AssetId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.AssetId, 3));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.AssetId|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.NotesRequest} returns this
*/
proto.penumbra.view.v1alpha1.NotesRequest.prototype.setAssetId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.NotesRequest} returns this
 */
proto.penumbra.view.v1alpha1.NotesRequest.prototype.clearAssetId = function() {
  return this.setAssetId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NotesRequest.prototype.hasAssetId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.core.keys.v1alpha1.AddressIndex address_index = 4;
 * @return {?proto.penumbra.core.keys.v1alpha1.AddressIndex}
 */
proto.penumbra.view.v1alpha1.NotesRequest.prototype.getAddressIndex = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.AddressIndex} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.AddressIndex, 4));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.AddressIndex|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.NotesRequest} returns this
*/
proto.penumbra.view.v1alpha1.NotesRequest.prototype.setAddressIndex = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.NotesRequest} returns this
 */
proto.penumbra.view.v1alpha1.NotesRequest.prototype.clearAddressIndex = function() {
  return this.setAddressIndex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NotesRequest.prototype.hasAddressIndex = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional penumbra.core.num.v1alpha1.Amount amount_to_spend = 6;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.view.v1alpha1.NotesRequest.prototype.getAmountToSpend = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 6));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.NotesRequest} returns this
*/
proto.penumbra.view.v1alpha1.NotesRequest.prototype.setAmountToSpend = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.NotesRequest} returns this
 */
proto.penumbra.view.v1alpha1.NotesRequest.prototype.clearAmountToSpend = function() {
  return this.setAmountToSpend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NotesRequest.prototype.hasAmountToSpend = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional penumbra.core.keys.v1alpha1.WalletId wallet_id = 14;
 * @return {?proto.penumbra.core.keys.v1alpha1.WalletId}
 */
proto.penumbra.view.v1alpha1.NotesRequest.prototype.getWalletId = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.WalletId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.WalletId, 14));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.WalletId|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.NotesRequest} returns this
*/
proto.penumbra.view.v1alpha1.NotesRequest.prototype.setWalletId = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.NotesRequest} returns this
 */
proto.penumbra.view.v1alpha1.NotesRequest.prototype.clearWalletId = function() {
  return this.setWalletId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NotesRequest.prototype.hasWalletId = function() {
  return jspb.Message.getField(this, 14) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.NotesForVotingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.NotesForVotingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.NotesForVotingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.NotesForVotingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    votableAtHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    addressIndex: (f = msg.getAddressIndex()) && penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.toObject(includeInstance, f),
    walletId: (f = msg.getWalletId()) && penumbra_core_keys_v1alpha1_keys_pb.WalletId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.NotesForVotingRequest}
 */
proto.penumbra.view.v1alpha1.NotesForVotingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.NotesForVotingRequest;
  return proto.penumbra.view.v1alpha1.NotesForVotingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.NotesForVotingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.NotesForVotingRequest}
 */
proto.penumbra.view.v1alpha1.NotesForVotingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVotableAtHeight(value);
      break;
    case 3:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.AddressIndex;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.deserializeBinaryFromReader);
      msg.setAddressIndex(value);
      break;
    case 14:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.WalletId;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.WalletId.deserializeBinaryFromReader);
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.NotesForVotingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.NotesForVotingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.NotesForVotingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.NotesForVotingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVotableAtHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAddressIndex();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.serializeBinaryToWriter
    );
  }
  f = message.getWalletId();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.WalletId.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 votable_at_height = 1;
 * @return {number}
 */
proto.penumbra.view.v1alpha1.NotesForVotingRequest.prototype.getVotableAtHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.view.v1alpha1.NotesForVotingRequest} returns this
 */
proto.penumbra.view.v1alpha1.NotesForVotingRequest.prototype.setVotableAtHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional penumbra.core.keys.v1alpha1.AddressIndex address_index = 3;
 * @return {?proto.penumbra.core.keys.v1alpha1.AddressIndex}
 */
proto.penumbra.view.v1alpha1.NotesForVotingRequest.prototype.getAddressIndex = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.AddressIndex} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.AddressIndex, 3));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.AddressIndex|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.NotesForVotingRequest} returns this
*/
proto.penumbra.view.v1alpha1.NotesForVotingRequest.prototype.setAddressIndex = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.NotesForVotingRequest} returns this
 */
proto.penumbra.view.v1alpha1.NotesForVotingRequest.prototype.clearAddressIndex = function() {
  return this.setAddressIndex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NotesForVotingRequest.prototype.hasAddressIndex = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.core.keys.v1alpha1.WalletId wallet_id = 14;
 * @return {?proto.penumbra.core.keys.v1alpha1.WalletId}
 */
proto.penumbra.view.v1alpha1.NotesForVotingRequest.prototype.getWalletId = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.WalletId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.WalletId, 14));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.WalletId|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.NotesForVotingRequest} returns this
*/
proto.penumbra.view.v1alpha1.NotesForVotingRequest.prototype.setWalletId = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.NotesForVotingRequest} returns this
 */
proto.penumbra.view.v1alpha1.NotesForVotingRequest.prototype.clearWalletId = function() {
  return this.setWalletId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NotesForVotingRequest.prototype.hasWalletId = function() {
  return jspb.Message.getField(this, 14) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.view.v1alpha1.WitnessRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.WitnessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.WitnessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.WitnessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.WitnessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    noteCommitmentsList: jspb.Message.toObjectList(msg.getNoteCommitmentsList(),
    penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.toObject, includeInstance),
    transactionPlan: (f = msg.getTransactionPlan()) && penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan.toObject(includeInstance, f),
    walletId: (f = msg.getWalletId()) && penumbra_core_keys_v1alpha1_keys_pb.WalletId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.WitnessRequest}
 */
proto.penumbra.view.v1alpha1.WitnessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.WitnessRequest;
  return proto.penumbra.view.v1alpha1.WitnessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.WitnessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.WitnessRequest}
 */
proto.penumbra.view.v1alpha1.WitnessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment;
      reader.readMessage(value,penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.deserializeBinaryFromReader);
      msg.addNoteCommitments(value);
      break;
    case 3:
      var value = new penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan;
      reader.readMessage(value,penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan.deserializeBinaryFromReader);
      msg.setTransactionPlan(value);
      break;
    case 14:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.WalletId;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.WalletId.deserializeBinaryFromReader);
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.WitnessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.WitnessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.WitnessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.WitnessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNoteCommitmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.serializeBinaryToWriter
    );
  }
  f = message.getTransactionPlan();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan.serializeBinaryToWriter
    );
  }
  f = message.getWalletId();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.WalletId.serializeBinaryToWriter
    );
  }
};


/**
 * repeated penumbra.crypto.tct.v1alpha1.StateCommitment note_commitments = 2;
 * @return {!Array<!proto.penumbra.crypto.tct.v1alpha1.StateCommitment>}
 */
proto.penumbra.view.v1alpha1.WitnessRequest.prototype.getNoteCommitmentsList = function() {
  return /** @type{!Array<!proto.penumbra.crypto.tct.v1alpha1.StateCommitment>} */ (
    jspb.Message.getRepeatedWrapperField(this, penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment, 2));
};


/**
 * @param {!Array<!proto.penumbra.crypto.tct.v1alpha1.StateCommitment>} value
 * @return {!proto.penumbra.view.v1alpha1.WitnessRequest} returns this
*/
proto.penumbra.view.v1alpha1.WitnessRequest.prototype.setNoteCommitmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.penumbra.crypto.tct.v1alpha1.StateCommitment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.crypto.tct.v1alpha1.StateCommitment}
 */
proto.penumbra.view.v1alpha1.WitnessRequest.prototype.addNoteCommitments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.penumbra.crypto.tct.v1alpha1.StateCommitment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.view.v1alpha1.WitnessRequest} returns this
 */
proto.penumbra.view.v1alpha1.WitnessRequest.prototype.clearNoteCommitmentsList = function() {
  return this.setNoteCommitmentsList([]);
};


/**
 * optional penumbra.core.transaction.v1alpha1.TransactionPlan transaction_plan = 3;
 * @return {?proto.penumbra.core.transaction.v1alpha1.TransactionPlan}
 */
proto.penumbra.view.v1alpha1.WitnessRequest.prototype.getTransactionPlan = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.TransactionPlan} */ (
    jspb.Message.getWrapperField(this, penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan, 3));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.TransactionPlan|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.WitnessRequest} returns this
*/
proto.penumbra.view.v1alpha1.WitnessRequest.prototype.setTransactionPlan = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.WitnessRequest} returns this
 */
proto.penumbra.view.v1alpha1.WitnessRequest.prototype.clearTransactionPlan = function() {
  return this.setTransactionPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.WitnessRequest.prototype.hasTransactionPlan = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.core.keys.v1alpha1.WalletId wallet_id = 14;
 * @return {?proto.penumbra.core.keys.v1alpha1.WalletId}
 */
proto.penumbra.view.v1alpha1.WitnessRequest.prototype.getWalletId = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.WalletId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.WalletId, 14));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.WalletId|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.WitnessRequest} returns this
*/
proto.penumbra.view.v1alpha1.WitnessRequest.prototype.setWalletId = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.WitnessRequest} returns this
 */
proto.penumbra.view.v1alpha1.WitnessRequest.prototype.clearWalletId = function() {
  return this.setWalletId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.WitnessRequest.prototype.hasWalletId = function() {
  return jspb.Message.getField(this, 14) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.WitnessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.WitnessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.WitnessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.WitnessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    witnessData: (f = msg.getWitnessData()) && penumbra_core_transaction_v1alpha1_transaction_pb.WitnessData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.WitnessResponse}
 */
proto.penumbra.view.v1alpha1.WitnessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.WitnessResponse;
  return proto.penumbra.view.v1alpha1.WitnessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.WitnessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.WitnessResponse}
 */
proto.penumbra.view.v1alpha1.WitnessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_transaction_v1alpha1_transaction_pb.WitnessData;
      reader.readMessage(value,penumbra_core_transaction_v1alpha1_transaction_pb.WitnessData.deserializeBinaryFromReader);
      msg.setWitnessData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.WitnessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.WitnessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.WitnessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.WitnessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWitnessData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_transaction_v1alpha1_transaction_pb.WitnessData.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.transaction.v1alpha1.WitnessData witness_data = 1;
 * @return {?proto.penumbra.core.transaction.v1alpha1.WitnessData}
 */
proto.penumbra.view.v1alpha1.WitnessResponse.prototype.getWitnessData = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.WitnessData} */ (
    jspb.Message.getWrapperField(this, penumbra_core_transaction_v1alpha1_transaction_pb.WitnessData, 1));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.WitnessData|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.WitnessResponse} returns this
*/
proto.penumbra.view.v1alpha1.WitnessResponse.prototype.setWitnessData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.WitnessResponse} returns this
 */
proto.penumbra.view.v1alpha1.WitnessResponse.prototype.clearWitnessData = function() {
  return this.setWitnessData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.WitnessResponse.prototype.hasWitnessData = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.WitnessAndBuildRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionPlan: (f = msg.getTransactionPlan()) && penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan.toObject(includeInstance, f),
    authorizationData: (f = msg.getAuthorizationData()) && penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.WitnessAndBuildRequest}
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.WitnessAndBuildRequest;
  return proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.WitnessAndBuildRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.WitnessAndBuildRequest}
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan;
      reader.readMessage(value,penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan.deserializeBinaryFromReader);
      msg.setTransactionPlan(value);
      break;
    case 2:
      var value = new penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData;
      reader.readMessage(value,penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData.deserializeBinaryFromReader);
      msg.setAuthorizationData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.WitnessAndBuildRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.transaction.v1alpha1.TransactionPlan transaction_plan = 1;
 * @return {?proto.penumbra.core.transaction.v1alpha1.TransactionPlan}
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.prototype.getTransactionPlan = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.TransactionPlan} */ (
    jspb.Message.getWrapperField(this, penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPlan, 1));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.TransactionPlan|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.WitnessAndBuildRequest} returns this
*/
proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.prototype.setTransactionPlan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.WitnessAndBuildRequest} returns this
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.prototype.clearTransactionPlan = function() {
  return this.setTransactionPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.prototype.hasTransactionPlan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.transaction.v1alpha1.AuthorizationData authorization_data = 2;
 * @return {?proto.penumbra.core.transaction.v1alpha1.AuthorizationData}
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.prototype.getAuthorizationData = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.AuthorizationData} */ (
    jspb.Message.getWrapperField(this, penumbra_core_transaction_v1alpha1_transaction_pb.AuthorizationData, 2));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.AuthorizationData|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.WitnessAndBuildRequest} returns this
*/
proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.prototype.setAuthorizationData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.WitnessAndBuildRequest} returns this
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.prototype.clearAuthorizationData = function() {
  return this.setAuthorizationData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildRequest.prototype.hasAuthorizationData = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.WitnessAndBuildResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.WitnessAndBuildResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && penumbra_core_transaction_v1alpha1_transaction_pb.Transaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.WitnessAndBuildResponse}
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.WitnessAndBuildResponse;
  return proto.penumbra.view.v1alpha1.WitnessAndBuildResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.WitnessAndBuildResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.WitnessAndBuildResponse}
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_transaction_v1alpha1_transaction_pb.Transaction;
      reader.readMessage(value,penumbra_core_transaction_v1alpha1_transaction_pb.Transaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.WitnessAndBuildResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.WitnessAndBuildResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_transaction_v1alpha1_transaction_pb.Transaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.transaction.v1alpha1.Transaction transaction = 1;
 * @return {?proto.penumbra.core.transaction.v1alpha1.Transaction}
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildResponse.prototype.getTransaction = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.Transaction} */ (
    jspb.Message.getWrapperField(this, penumbra_core_transaction_v1alpha1_transaction_pb.Transaction, 1));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.Transaction|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.WitnessAndBuildResponse} returns this
*/
proto.penumbra.view.v1alpha1.WitnessAndBuildResponse.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.WitnessAndBuildResponse} returns this
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildResponse.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.WitnessAndBuildResponse.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.view.v1alpha1.AssetsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.AssetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.AssetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.AssetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filtered: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    includeSpecificDenominationsList: jspb.Message.toObjectList(msg.getIncludeSpecificDenominationsList(),
    penumbra_core_asset_v1alpha1_asset_pb.Denom.toObject, includeInstance),
    includeDelegationTokens: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    includeUnbondingTokens: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    includeLpNfts: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    includeProposalNfts: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    includeVotingReceiptTokens: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.AssetsRequest}
 */
proto.penumbra.view.v1alpha1.AssetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.AssetsRequest;
  return proto.penumbra.view.v1alpha1.AssetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.AssetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.AssetsRequest}
 */
proto.penumbra.view.v1alpha1.AssetsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFiltered(value);
      break;
    case 2:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.Denom;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.Denom.deserializeBinaryFromReader);
      msg.addIncludeSpecificDenominations(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeDelegationTokens(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeUnbondingTokens(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeLpNfts(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeProposalNfts(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeVotingReceiptTokens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.AssetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.AssetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.AssetsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFiltered();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getIncludeSpecificDenominationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.Denom.serializeBinaryToWriter
    );
  }
  f = message.getIncludeDelegationTokens();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIncludeUnbondingTokens();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIncludeLpNfts();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIncludeProposalNfts();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIncludeVotingReceiptTokens();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional bool filtered = 1;
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.getFiltered = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.view.v1alpha1.AssetsRequest} returns this
 */
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.setFiltered = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated penumbra.core.asset.v1alpha1.Denom include_specific_denominations = 2;
 * @return {!Array<!proto.penumbra.core.asset.v1alpha1.Denom>}
 */
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.getIncludeSpecificDenominationsList = function() {
  return /** @type{!Array<!proto.penumbra.core.asset.v1alpha1.Denom>} */ (
    jspb.Message.getRepeatedWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.Denom, 2));
};


/**
 * @param {!Array<!proto.penumbra.core.asset.v1alpha1.Denom>} value
 * @return {!proto.penumbra.view.v1alpha1.AssetsRequest} returns this
*/
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.setIncludeSpecificDenominationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.penumbra.core.asset.v1alpha1.Denom=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.core.asset.v1alpha1.Denom}
 */
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.addIncludeSpecificDenominations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.penumbra.core.asset.v1alpha1.Denom, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.view.v1alpha1.AssetsRequest} returns this
 */
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.clearIncludeSpecificDenominationsList = function() {
  return this.setIncludeSpecificDenominationsList([]);
};


/**
 * optional bool include_delegation_tokens = 3;
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.getIncludeDelegationTokens = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.view.v1alpha1.AssetsRequest} returns this
 */
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.setIncludeDelegationTokens = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool include_unbonding_tokens = 4;
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.getIncludeUnbondingTokens = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.view.v1alpha1.AssetsRequest} returns this
 */
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.setIncludeUnbondingTokens = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool include_lp_nfts = 5;
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.getIncludeLpNfts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.view.v1alpha1.AssetsRequest} returns this
 */
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.setIncludeLpNfts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool include_proposal_nfts = 6;
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.getIncludeProposalNfts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.view.v1alpha1.AssetsRequest} returns this
 */
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.setIncludeProposalNfts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool include_voting_receipt_tokens = 7;
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.getIncludeVotingReceiptTokens = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.view.v1alpha1.AssetsRequest} returns this
 */
proto.penumbra.view.v1alpha1.AssetsRequest.prototype.setIncludeVotingReceiptTokens = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.AssetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.AssetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.AssetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.AssetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    denomMetadata: (f = msg.getDenomMetadata()) && penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.AssetsResponse}
 */
proto.penumbra.view.v1alpha1.AssetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.AssetsResponse;
  return proto.penumbra.view.v1alpha1.AssetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.AssetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.AssetsResponse}
 */
proto.penumbra.view.v1alpha1.AssetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata.deserializeBinaryFromReader);
      msg.setDenomMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.AssetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.AssetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.AssetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.AssetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDenomMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.asset.v1alpha1.DenomMetadata denom_metadata = 2;
 * @return {?proto.penumbra.core.asset.v1alpha1.DenomMetadata}
 */
proto.penumbra.view.v1alpha1.AssetsResponse.prototype.getDenomMetadata = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.DenomMetadata} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata, 2));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.DenomMetadata|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.AssetsResponse} returns this
*/
proto.penumbra.view.v1alpha1.AssetsResponse.prototype.setDenomMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.AssetsResponse} returns this
 */
proto.penumbra.view.v1alpha1.AssetsResponse.prototype.clearDenomMetadata = function() {
  return this.setDenomMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.AssetsResponse.prototype.hasDenomMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.AppParametersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.AppParametersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.AppParametersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.AppParametersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.AppParametersRequest}
 */
proto.penumbra.view.v1alpha1.AppParametersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.AppParametersRequest;
  return proto.penumbra.view.v1alpha1.AppParametersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.AppParametersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.AppParametersRequest}
 */
proto.penumbra.view.v1alpha1.AppParametersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.AppParametersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.AppParametersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.AppParametersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.AppParametersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.AppParametersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.AppParametersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.AppParametersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.AppParametersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    parameters: (f = msg.getParameters()) && penumbra_core_app_v1alpha1_app_pb.AppParameters.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.AppParametersResponse}
 */
proto.penumbra.view.v1alpha1.AppParametersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.AppParametersResponse;
  return proto.penumbra.view.v1alpha1.AppParametersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.AppParametersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.AppParametersResponse}
 */
proto.penumbra.view.v1alpha1.AppParametersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_app_v1alpha1_app_pb.AppParameters;
      reader.readMessage(value,penumbra_core_app_v1alpha1_app_pb.AppParameters.deserializeBinaryFromReader);
      msg.setParameters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.AppParametersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.AppParametersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.AppParametersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.AppParametersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParameters();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_app_v1alpha1_app_pb.AppParameters.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.app.v1alpha1.AppParameters parameters = 1;
 * @return {?proto.penumbra.core.app.v1alpha1.AppParameters}
 */
proto.penumbra.view.v1alpha1.AppParametersResponse.prototype.getParameters = function() {
  return /** @type{?proto.penumbra.core.app.v1alpha1.AppParameters} */ (
    jspb.Message.getWrapperField(this, penumbra_core_app_v1alpha1_app_pb.AppParameters, 1));
};


/**
 * @param {?proto.penumbra.core.app.v1alpha1.AppParameters|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.AppParametersResponse} returns this
*/
proto.penumbra.view.v1alpha1.AppParametersResponse.prototype.setParameters = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.AppParametersResponse} returns this
 */
proto.penumbra.view.v1alpha1.AppParametersResponse.prototype.clearParameters = function() {
  return this.setParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.AppParametersResponse.prototype.hasParameters = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.GasPricesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.GasPricesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.GasPricesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.GasPricesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.GasPricesRequest}
 */
proto.penumbra.view.v1alpha1.GasPricesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.GasPricesRequest;
  return proto.penumbra.view.v1alpha1.GasPricesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.GasPricesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.GasPricesRequest}
 */
proto.penumbra.view.v1alpha1.GasPricesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.GasPricesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.GasPricesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.GasPricesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.GasPricesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.GasPricesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.GasPricesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.GasPricesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.GasPricesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    gasPrices: (f = msg.getGasPrices()) && penumbra_core_component_fee_v1alpha1_fee_pb.GasPrices.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.GasPricesResponse}
 */
proto.penumbra.view.v1alpha1.GasPricesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.GasPricesResponse;
  return proto.penumbra.view.v1alpha1.GasPricesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.GasPricesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.GasPricesResponse}
 */
proto.penumbra.view.v1alpha1.GasPricesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_component_fee_v1alpha1_fee_pb.GasPrices;
      reader.readMessage(value,penumbra_core_component_fee_v1alpha1_fee_pb.GasPrices.deserializeBinaryFromReader);
      msg.setGasPrices(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.GasPricesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.GasPricesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.GasPricesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.GasPricesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGasPrices();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_component_fee_v1alpha1_fee_pb.GasPrices.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.component.fee.v1alpha1.GasPrices gas_prices = 1;
 * @return {?proto.penumbra.core.component.fee.v1alpha1.GasPrices}
 */
proto.penumbra.view.v1alpha1.GasPricesResponse.prototype.getGasPrices = function() {
  return /** @type{?proto.penumbra.core.component.fee.v1alpha1.GasPrices} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_fee_v1alpha1_fee_pb.GasPrices, 1));
};


/**
 * @param {?proto.penumbra.core.component.fee.v1alpha1.GasPrices|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.GasPricesResponse} returns this
*/
proto.penumbra.view.v1alpha1.GasPricesResponse.prototype.setGasPrices = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.GasPricesResponse} returns this
 */
proto.penumbra.view.v1alpha1.GasPricesResponse.prototype.clearGasPrices = function() {
  return this.setGasPrices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.GasPricesResponse.prototype.hasGasPrices = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.FMDParametersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.FMDParametersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.FMDParametersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.FMDParametersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.FMDParametersRequest}
 */
proto.penumbra.view.v1alpha1.FMDParametersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.FMDParametersRequest;
  return proto.penumbra.view.v1alpha1.FMDParametersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.FMDParametersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.FMDParametersRequest}
 */
proto.penumbra.view.v1alpha1.FMDParametersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.FMDParametersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.FMDParametersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.FMDParametersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.FMDParametersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.FMDParametersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.FMDParametersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.FMDParametersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.FMDParametersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    parameters: (f = msg.getParameters()) && penumbra_core_component_chain_v1alpha1_chain_pb.FmdParameters.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.FMDParametersResponse}
 */
proto.penumbra.view.v1alpha1.FMDParametersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.FMDParametersResponse;
  return proto.penumbra.view.v1alpha1.FMDParametersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.FMDParametersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.FMDParametersResponse}
 */
proto.penumbra.view.v1alpha1.FMDParametersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_component_chain_v1alpha1_chain_pb.FmdParameters;
      reader.readMessage(value,penumbra_core_component_chain_v1alpha1_chain_pb.FmdParameters.deserializeBinaryFromReader);
      msg.setParameters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.FMDParametersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.FMDParametersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.FMDParametersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.FMDParametersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParameters();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_component_chain_v1alpha1_chain_pb.FmdParameters.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.component.chain.v1alpha1.FmdParameters parameters = 1;
 * @return {?proto.penumbra.core.component.chain.v1alpha1.FmdParameters}
 */
proto.penumbra.view.v1alpha1.FMDParametersResponse.prototype.getParameters = function() {
  return /** @type{?proto.penumbra.core.component.chain.v1alpha1.FmdParameters} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_chain_v1alpha1_chain_pb.FmdParameters, 1));
};


/**
 * @param {?proto.penumbra.core.component.chain.v1alpha1.FmdParameters|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.FMDParametersResponse} returns this
*/
proto.penumbra.view.v1alpha1.FMDParametersResponse.prototype.setParameters = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.FMDParametersResponse} returns this
 */
proto.penumbra.view.v1alpha1.FMDParametersResponse.prototype.clearParameters = function() {
  return this.setParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.FMDParametersResponse.prototype.hasParameters = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.NoteByCommitmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    noteCommitment: (f = msg.getNoteCommitment()) && penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.toObject(includeInstance, f),
    awaitDetection: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    walletId: (f = msg.getWalletId()) && penumbra_core_keys_v1alpha1_keys_pb.WalletId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.NoteByCommitmentRequest}
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.NoteByCommitmentRequest;
  return proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.NoteByCommitmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.NoteByCommitmentRequest}
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment;
      reader.readMessage(value,penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.deserializeBinaryFromReader);
      msg.setNoteCommitment(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAwaitDetection(value);
      break;
    case 14:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.WalletId;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.WalletId.deserializeBinaryFromReader);
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.NoteByCommitmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNoteCommitment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.serializeBinaryToWriter
    );
  }
  f = message.getAwaitDetection();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getWalletId();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.WalletId.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.crypto.tct.v1alpha1.StateCommitment note_commitment = 2;
 * @return {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment}
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.prototype.getNoteCommitment = function() {
  return /** @type{?proto.penumbra.crypto.tct.v1alpha1.StateCommitment} */ (
    jspb.Message.getWrapperField(this, penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment, 2));
};


/**
 * @param {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.NoteByCommitmentRequest} returns this
*/
proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.prototype.setNoteCommitment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.NoteByCommitmentRequest} returns this
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.prototype.clearNoteCommitment = function() {
  return this.setNoteCommitment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.prototype.hasNoteCommitment = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool await_detection = 3;
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.prototype.getAwaitDetection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.view.v1alpha1.NoteByCommitmentRequest} returns this
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.prototype.setAwaitDetection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional penumbra.core.keys.v1alpha1.WalletId wallet_id = 14;
 * @return {?proto.penumbra.core.keys.v1alpha1.WalletId}
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.prototype.getWalletId = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.WalletId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.WalletId, 14));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.WalletId|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.NoteByCommitmentRequest} returns this
*/
proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.prototype.setWalletId = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.NoteByCommitmentRequest} returns this
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.prototype.clearWalletId = function() {
  return this.setWalletId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentRequest.prototype.hasWalletId = function() {
  return jspb.Message.getField(this, 14) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.NoteByCommitmentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.NoteByCommitmentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    spendableNote: (f = msg.getSpendableNote()) && proto.penumbra.view.v1alpha1.SpendableNoteRecord.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.NoteByCommitmentResponse}
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.NoteByCommitmentResponse;
  return proto.penumbra.view.v1alpha1.NoteByCommitmentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.NoteByCommitmentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.NoteByCommitmentResponse}
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.view.v1alpha1.SpendableNoteRecord;
      reader.readMessage(value,proto.penumbra.view.v1alpha1.SpendableNoteRecord.deserializeBinaryFromReader);
      msg.setSpendableNote(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.NoteByCommitmentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.NoteByCommitmentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpendableNote();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.view.v1alpha1.SpendableNoteRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional SpendableNoteRecord spendable_note = 1;
 * @return {?proto.penumbra.view.v1alpha1.SpendableNoteRecord}
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentResponse.prototype.getSpendableNote = function() {
  return /** @type{?proto.penumbra.view.v1alpha1.SpendableNoteRecord} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.view.v1alpha1.SpendableNoteRecord, 1));
};


/**
 * @param {?proto.penumbra.view.v1alpha1.SpendableNoteRecord|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.NoteByCommitmentResponse} returns this
*/
proto.penumbra.view.v1alpha1.NoteByCommitmentResponse.prototype.setSpendableNote = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.NoteByCommitmentResponse} returns this
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentResponse.prototype.clearSpendableNote = function() {
  return this.setSpendableNote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NoteByCommitmentResponse.prototype.hasSpendableNote = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.SwapByCommitmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    swapCommitment: (f = msg.getSwapCommitment()) && penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.toObject(includeInstance, f),
    awaitDetection: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    walletId: (f = msg.getWalletId()) && penumbra_core_keys_v1alpha1_keys_pb.WalletId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.SwapByCommitmentRequest}
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.SwapByCommitmentRequest;
  return proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.SwapByCommitmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.SwapByCommitmentRequest}
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment;
      reader.readMessage(value,penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.deserializeBinaryFromReader);
      msg.setSwapCommitment(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAwaitDetection(value);
      break;
    case 14:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.WalletId;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.WalletId.deserializeBinaryFromReader);
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.SwapByCommitmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwapCommitment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.serializeBinaryToWriter
    );
  }
  f = message.getAwaitDetection();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getWalletId();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.WalletId.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.crypto.tct.v1alpha1.StateCommitment swap_commitment = 2;
 * @return {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment}
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.prototype.getSwapCommitment = function() {
  return /** @type{?proto.penumbra.crypto.tct.v1alpha1.StateCommitment} */ (
    jspb.Message.getWrapperField(this, penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment, 2));
};


/**
 * @param {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.SwapByCommitmentRequest} returns this
*/
proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.prototype.setSwapCommitment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.SwapByCommitmentRequest} returns this
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.prototype.clearSwapCommitment = function() {
  return this.setSwapCommitment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.prototype.hasSwapCommitment = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool await_detection = 3;
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.prototype.getAwaitDetection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.view.v1alpha1.SwapByCommitmentRequest} returns this
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.prototype.setAwaitDetection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional penumbra.core.keys.v1alpha1.WalletId wallet_id = 14;
 * @return {?proto.penumbra.core.keys.v1alpha1.WalletId}
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.prototype.getWalletId = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.WalletId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.WalletId, 14));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.WalletId|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.SwapByCommitmentRequest} returns this
*/
proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.prototype.setWalletId = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.SwapByCommitmentRequest} returns this
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.prototype.clearWalletId = function() {
  return this.setWalletId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentRequest.prototype.hasWalletId = function() {
  return jspb.Message.getField(this, 14) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.SwapByCommitmentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.SwapByCommitmentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    swap: (f = msg.getSwap()) && proto.penumbra.view.v1alpha1.SwapRecord.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.SwapByCommitmentResponse}
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.SwapByCommitmentResponse;
  return proto.penumbra.view.v1alpha1.SwapByCommitmentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.SwapByCommitmentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.SwapByCommitmentResponse}
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.view.v1alpha1.SwapRecord;
      reader.readMessage(value,proto.penumbra.view.v1alpha1.SwapRecord.deserializeBinaryFromReader);
      msg.setSwap(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.SwapByCommitmentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.SwapByCommitmentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwap();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.view.v1alpha1.SwapRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional SwapRecord swap = 1;
 * @return {?proto.penumbra.view.v1alpha1.SwapRecord}
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentResponse.prototype.getSwap = function() {
  return /** @type{?proto.penumbra.view.v1alpha1.SwapRecord} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.view.v1alpha1.SwapRecord, 1));
};


/**
 * @param {?proto.penumbra.view.v1alpha1.SwapRecord|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.SwapByCommitmentResponse} returns this
*/
proto.penumbra.view.v1alpha1.SwapByCommitmentResponse.prototype.setSwap = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.SwapByCommitmentResponse} returns this
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentResponse.prototype.clearSwap = function() {
  return this.setSwap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.SwapByCommitmentResponse.prototype.hasSwap = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: (f = msg.getWalletId()) && penumbra_core_keys_v1alpha1_keys_pb.WalletId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest}
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest;
  return proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest}
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.WalletId;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.WalletId.deserializeBinaryFromReader);
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.WalletId.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.keys.v1alpha1.WalletId wallet_id = 1;
 * @return {?proto.penumbra.core.keys.v1alpha1.WalletId}
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest.prototype.getWalletId = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.WalletId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.WalletId, 1));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.WalletId|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest} returns this
*/
proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest.prototype.setWalletId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest} returns this
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest.prototype.clearWalletId = function() {
  return this.setWalletId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsRequest.prototype.hasWalletId = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    swap: (f = msg.getSwap()) && proto.penumbra.view.v1alpha1.SwapRecord.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse}
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse;
  return proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse}
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.view.v1alpha1.SwapRecord;
      reader.readMessage(value,proto.penumbra.view.v1alpha1.SwapRecord.deserializeBinaryFromReader);
      msg.setSwap(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwap();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.view.v1alpha1.SwapRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional SwapRecord swap = 1;
 * @return {?proto.penumbra.view.v1alpha1.SwapRecord}
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse.prototype.getSwap = function() {
  return /** @type{?proto.penumbra.view.v1alpha1.SwapRecord} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.view.v1alpha1.SwapRecord, 1));
};


/**
 * @param {?proto.penumbra.view.v1alpha1.SwapRecord|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse} returns this
*/
proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse.prototype.setSwap = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse} returns this
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse.prototype.clearSwap = function() {
  return this.setSwap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.UnclaimedSwapsResponse.prototype.hasSwap = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.NullifierStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.NullifierStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.NullifierStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.NullifierStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nullifier: (f = msg.getNullifier()) && penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.toObject(includeInstance, f),
    awaitDetection: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    walletId: (f = msg.getWalletId()) && penumbra_core_keys_v1alpha1_keys_pb.WalletId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.NullifierStatusRequest}
 */
proto.penumbra.view.v1alpha1.NullifierStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.NullifierStatusRequest;
  return proto.penumbra.view.v1alpha1.NullifierStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.NullifierStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.NullifierStatusRequest}
 */
proto.penumbra.view.v1alpha1.NullifierStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier;
      reader.readMessage(value,penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.deserializeBinaryFromReader);
      msg.setNullifier(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAwaitDetection(value);
      break;
    case 14:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.WalletId;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.WalletId.deserializeBinaryFromReader);
      msg.setWalletId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.NullifierStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.NullifierStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.NullifierStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.NullifierStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNullifier();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.serializeBinaryToWriter
    );
  }
  f = message.getAwaitDetection();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getWalletId();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.WalletId.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.component.sct.v1alpha1.Nullifier nullifier = 2;
 * @return {?proto.penumbra.core.component.sct.v1alpha1.Nullifier}
 */
proto.penumbra.view.v1alpha1.NullifierStatusRequest.prototype.getNullifier = function() {
  return /** @type{?proto.penumbra.core.component.sct.v1alpha1.Nullifier} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier, 2));
};


/**
 * @param {?proto.penumbra.core.component.sct.v1alpha1.Nullifier|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.NullifierStatusRequest} returns this
*/
proto.penumbra.view.v1alpha1.NullifierStatusRequest.prototype.setNullifier = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.NullifierStatusRequest} returns this
 */
proto.penumbra.view.v1alpha1.NullifierStatusRequest.prototype.clearNullifier = function() {
  return this.setNullifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NullifierStatusRequest.prototype.hasNullifier = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool await_detection = 3;
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NullifierStatusRequest.prototype.getAwaitDetection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.view.v1alpha1.NullifierStatusRequest} returns this
 */
proto.penumbra.view.v1alpha1.NullifierStatusRequest.prototype.setAwaitDetection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional penumbra.core.keys.v1alpha1.WalletId wallet_id = 14;
 * @return {?proto.penumbra.core.keys.v1alpha1.WalletId}
 */
proto.penumbra.view.v1alpha1.NullifierStatusRequest.prototype.getWalletId = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.WalletId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.WalletId, 14));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.WalletId|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.NullifierStatusRequest} returns this
*/
proto.penumbra.view.v1alpha1.NullifierStatusRequest.prototype.setWalletId = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.NullifierStatusRequest} returns this
 */
proto.penumbra.view.v1alpha1.NullifierStatusRequest.prototype.clearWalletId = function() {
  return this.setWalletId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NullifierStatusRequest.prototype.hasWalletId = function() {
  return jspb.Message.getField(this, 14) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.NullifierStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.NullifierStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.NullifierStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.NullifierStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    spent: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.NullifierStatusResponse}
 */
proto.penumbra.view.v1alpha1.NullifierStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.NullifierStatusResponse;
  return proto.penumbra.view.v1alpha1.NullifierStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.NullifierStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.NullifierStatusResponse}
 */
proto.penumbra.view.v1alpha1.NullifierStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSpent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.NullifierStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.NullifierStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.NullifierStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.NullifierStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpent();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool spent = 1;
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NullifierStatusResponse.prototype.getSpent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.view.v1alpha1.NullifierStatusResponse} returns this
 */
proto.penumbra.view.v1alpha1.NullifierStatusResponse.prototype.setSpent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && penumbra_core_transaction_v1alpha1_transaction_pb.Id.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest}
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest;
  return proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest}
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new penumbra_core_transaction_v1alpha1_transaction_pb.Id;
      reader.readMessage(value,penumbra_core_transaction_v1alpha1_transaction_pb.Id.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_transaction_v1alpha1_transaction_pb.Id.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.transaction.v1alpha1.Id id = 2;
 * @return {?proto.penumbra.core.transaction.v1alpha1.Id}
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest.prototype.getId = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.Id} */ (
    jspb.Message.getWrapperField(this, penumbra_core_transaction_v1alpha1_transaction_pb.Id, 2));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.Id|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest} returns this
*/
proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.TransactionInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.TransactionInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.TransactionInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    startHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    endHeight: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfoRequest}
 */
proto.penumbra.view.v1alpha1.TransactionInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.TransactionInfoRequest;
  return proto.penumbra.view.v1alpha1.TransactionInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.TransactionInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfoRequest}
 */
proto.penumbra.view.v1alpha1.TransactionInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartHeight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEndHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.TransactionInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.TransactionInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.TransactionInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEndHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 start_height = 1;
 * @return {number}
 */
proto.penumbra.view.v1alpha1.TransactionInfoRequest.prototype.getStartHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfoRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionInfoRequest.prototype.setStartHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 end_height = 2;
 * @return {number}
 */
proto.penumbra.view.v1alpha1.TransactionInfoRequest.prototype.getEndHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfoRequest} returns this
 */
proto.penumbra.view.v1alpha1.TransactionInfoRequest.prototype.setEndHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.TransactionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.TransactionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: (f = msg.getId()) && penumbra_core_transaction_v1alpha1_transaction_pb.Id.toObject(includeInstance, f),
    transaction: (f = msg.getTransaction()) && penumbra_core_transaction_v1alpha1_transaction_pb.Transaction.toObject(includeInstance, f),
    perspective: (f = msg.getPerspective()) && penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPerspective.toObject(includeInstance, f),
    view: (f = msg.getView()) && penumbra_core_transaction_v1alpha1_transaction_pb.TransactionView.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfo}
 */
proto.penumbra.view.v1alpha1.TransactionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.TransactionInfo;
  return proto.penumbra.view.v1alpha1.TransactionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.TransactionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfo}
 */
proto.penumbra.view.v1alpha1.TransactionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 2:
      var value = new penumbra_core_transaction_v1alpha1_transaction_pb.Id;
      reader.readMessage(value,penumbra_core_transaction_v1alpha1_transaction_pb.Id.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 3:
      var value = new penumbra_core_transaction_v1alpha1_transaction_pb.Transaction;
      reader.readMessage(value,penumbra_core_transaction_v1alpha1_transaction_pb.Transaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    case 4:
      var value = new penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPerspective;
      reader.readMessage(value,penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPerspective.deserializeBinaryFromReader);
      msg.setPerspective(value);
      break;
    case 5:
      var value = new penumbra_core_transaction_v1alpha1_transaction_pb.TransactionView;
      reader.readMessage(value,penumbra_core_transaction_v1alpha1_transaction_pb.TransactionView.deserializeBinaryFromReader);
      msg.setView(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.TransactionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.TransactionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_transaction_v1alpha1_transaction_pb.Id.serializeBinaryToWriter
    );
  }
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_transaction_v1alpha1_transaction_pb.Transaction.serializeBinaryToWriter
    );
  }
  f = message.getPerspective();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPerspective.serializeBinaryToWriter
    );
  }
  f = message.getView();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      penumbra_core_transaction_v1alpha1_transaction_pb.TransactionView.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfo} returns this
 */
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional penumbra.core.transaction.v1alpha1.Id id = 2;
 * @return {?proto.penumbra.core.transaction.v1alpha1.Id}
 */
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.getId = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.Id} */ (
    jspb.Message.getWrapperField(this, penumbra_core_transaction_v1alpha1_transaction_pb.Id, 2));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.Id|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfo} returns this
*/
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfo} returns this
 */
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.transaction.v1alpha1.Transaction transaction = 3;
 * @return {?proto.penumbra.core.transaction.v1alpha1.Transaction}
 */
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.getTransaction = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.Transaction} */ (
    jspb.Message.getWrapperField(this, penumbra_core_transaction_v1alpha1_transaction_pb.Transaction, 3));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.Transaction|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfo} returns this
*/
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfo} returns this
 */
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.core.transaction.v1alpha1.TransactionPerspective perspective = 4;
 * @return {?proto.penumbra.core.transaction.v1alpha1.TransactionPerspective}
 */
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.getPerspective = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.TransactionPerspective} */ (
    jspb.Message.getWrapperField(this, penumbra_core_transaction_v1alpha1_transaction_pb.TransactionPerspective, 4));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.TransactionPerspective|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfo} returns this
*/
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.setPerspective = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfo} returns this
 */
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.clearPerspective = function() {
  return this.setPerspective(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.hasPerspective = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional penumbra.core.transaction.v1alpha1.TransactionView view = 5;
 * @return {?proto.penumbra.core.transaction.v1alpha1.TransactionView}
 */
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.getView = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.TransactionView} */ (
    jspb.Message.getWrapperField(this, penumbra_core_transaction_v1alpha1_transaction_pb.TransactionView, 5));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.TransactionView|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfo} returns this
*/
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.setView = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfo} returns this
 */
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.clearView = function() {
  return this.setView(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionInfo.prototype.hasView = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.TransactionInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.TransactionInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.TransactionInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    txInfo: (f = msg.getTxInfo()) && proto.penumbra.view.v1alpha1.TransactionInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfoResponse}
 */
proto.penumbra.view.v1alpha1.TransactionInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.TransactionInfoResponse;
  return proto.penumbra.view.v1alpha1.TransactionInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.TransactionInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfoResponse}
 */
proto.penumbra.view.v1alpha1.TransactionInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.view.v1alpha1.TransactionInfo;
      reader.readMessage(value,proto.penumbra.view.v1alpha1.TransactionInfo.deserializeBinaryFromReader);
      msg.setTxInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.TransactionInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.TransactionInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.TransactionInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.view.v1alpha1.TransactionInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransactionInfo tx_info = 1;
 * @return {?proto.penumbra.view.v1alpha1.TransactionInfo}
 */
proto.penumbra.view.v1alpha1.TransactionInfoResponse.prototype.getTxInfo = function() {
  return /** @type{?proto.penumbra.view.v1alpha1.TransactionInfo} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.view.v1alpha1.TransactionInfo, 1));
};


/**
 * @param {?proto.penumbra.view.v1alpha1.TransactionInfo|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfoResponse} returns this
*/
proto.penumbra.view.v1alpha1.TransactionInfoResponse.prototype.setTxInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfoResponse} returns this
 */
proto.penumbra.view.v1alpha1.TransactionInfoResponse.prototype.clearTxInfo = function() {
  return this.setTxInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionInfoResponse.prototype.hasTxInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    txInfo: (f = msg.getTxInfo()) && proto.penumbra.view.v1alpha1.TransactionInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse}
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse;
  return proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse}
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.view.v1alpha1.TransactionInfo;
      reader.readMessage(value,proto.penumbra.view.v1alpha1.TransactionInfo.deserializeBinaryFromReader);
      msg.setTxInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.view.v1alpha1.TransactionInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransactionInfo tx_info = 1;
 * @return {?proto.penumbra.view.v1alpha1.TransactionInfo}
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse.prototype.getTxInfo = function() {
  return /** @type{?proto.penumbra.view.v1alpha1.TransactionInfo} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.view.v1alpha1.TransactionInfo, 1));
};


/**
 * @param {?proto.penumbra.view.v1alpha1.TransactionInfo|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse} returns this
*/
proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse.prototype.setTxInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse} returns this
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse.prototype.clearTxInfo = function() {
  return this.setTxInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.TransactionInfoByHashResponse.prototype.hasTxInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.NotesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.NotesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.NotesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.NotesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    noteRecord: (f = msg.getNoteRecord()) && proto.penumbra.view.v1alpha1.SpendableNoteRecord.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.NotesResponse}
 */
proto.penumbra.view.v1alpha1.NotesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.NotesResponse;
  return proto.penumbra.view.v1alpha1.NotesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.NotesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.NotesResponse}
 */
proto.penumbra.view.v1alpha1.NotesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.view.v1alpha1.SpendableNoteRecord;
      reader.readMessage(value,proto.penumbra.view.v1alpha1.SpendableNoteRecord.deserializeBinaryFromReader);
      msg.setNoteRecord(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.NotesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.NotesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.NotesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.NotesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNoteRecord();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.view.v1alpha1.SpendableNoteRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional SpendableNoteRecord note_record = 1;
 * @return {?proto.penumbra.view.v1alpha1.SpendableNoteRecord}
 */
proto.penumbra.view.v1alpha1.NotesResponse.prototype.getNoteRecord = function() {
  return /** @type{?proto.penumbra.view.v1alpha1.SpendableNoteRecord} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.view.v1alpha1.SpendableNoteRecord, 1));
};


/**
 * @param {?proto.penumbra.view.v1alpha1.SpendableNoteRecord|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.NotesResponse} returns this
*/
proto.penumbra.view.v1alpha1.NotesResponse.prototype.setNoteRecord = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.NotesResponse} returns this
 */
proto.penumbra.view.v1alpha1.NotesResponse.prototype.clearNoteRecord = function() {
  return this.setNoteRecord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NotesResponse.prototype.hasNoteRecord = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.NotesForVotingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.NotesForVotingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.NotesForVotingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.NotesForVotingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    noteRecord: (f = msg.getNoteRecord()) && proto.penumbra.view.v1alpha1.SpendableNoteRecord.toObject(includeInstance, f),
    identityKey: (f = msg.getIdentityKey()) && penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.NotesForVotingResponse}
 */
proto.penumbra.view.v1alpha1.NotesForVotingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.NotesForVotingResponse;
  return proto.penumbra.view.v1alpha1.NotesForVotingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.NotesForVotingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.NotesForVotingResponse}
 */
proto.penumbra.view.v1alpha1.NotesForVotingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.view.v1alpha1.SpendableNoteRecord;
      reader.readMessage(value,proto.penumbra.view.v1alpha1.SpendableNoteRecord.deserializeBinaryFromReader);
      msg.setNoteRecord(value);
      break;
    case 2:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.IdentityKey;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.deserializeBinaryFromReader);
      msg.setIdentityKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.NotesForVotingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.NotesForVotingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.NotesForVotingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.NotesForVotingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNoteRecord();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.view.v1alpha1.SpendableNoteRecord.serializeBinaryToWriter
    );
  }
  f = message.getIdentityKey();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional SpendableNoteRecord note_record = 1;
 * @return {?proto.penumbra.view.v1alpha1.SpendableNoteRecord}
 */
proto.penumbra.view.v1alpha1.NotesForVotingResponse.prototype.getNoteRecord = function() {
  return /** @type{?proto.penumbra.view.v1alpha1.SpendableNoteRecord} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.view.v1alpha1.SpendableNoteRecord, 1));
};


/**
 * @param {?proto.penumbra.view.v1alpha1.SpendableNoteRecord|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.NotesForVotingResponse} returns this
*/
proto.penumbra.view.v1alpha1.NotesForVotingResponse.prototype.setNoteRecord = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.NotesForVotingResponse} returns this
 */
proto.penumbra.view.v1alpha1.NotesForVotingResponse.prototype.clearNoteRecord = function() {
  return this.setNoteRecord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NotesForVotingResponse.prototype.hasNoteRecord = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.keys.v1alpha1.IdentityKey identity_key = 2;
 * @return {?proto.penumbra.core.keys.v1alpha1.IdentityKey}
 */
proto.penumbra.view.v1alpha1.NotesForVotingResponse.prototype.getIdentityKey = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.IdentityKey} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.IdentityKey, 2));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.IdentityKey|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.NotesForVotingResponse} returns this
*/
proto.penumbra.view.v1alpha1.NotesForVotingResponse.prototype.setIdentityKey = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.NotesForVotingResponse} returns this
 */
proto.penumbra.view.v1alpha1.NotesForVotingResponse.prototype.clearIdentityKey = function() {
  return this.setIdentityKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.NotesForVotingResponse.prototype.hasIdentityKey = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.SpendableNoteRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.SpendableNoteRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    noteCommitment: (f = msg.getNoteCommitment()) && penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.toObject(includeInstance, f),
    note: (f = msg.getNote()) && penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note.toObject(includeInstance, f),
    addressIndex: (f = msg.getAddressIndex()) && penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.toObject(includeInstance, f),
    nullifier: (f = msg.getNullifier()) && penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.toObject(includeInstance, f),
    heightCreated: jspb.Message.getFieldWithDefault(msg, 5, 0),
    heightSpent: jspb.Message.getFieldWithDefault(msg, 6, 0),
    position: jspb.Message.getFieldWithDefault(msg, 7, 0),
    source: (f = msg.getSource()) && penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.SpendableNoteRecord}
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.SpendableNoteRecord;
  return proto.penumbra.view.v1alpha1.SpendableNoteRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.SpendableNoteRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.SpendableNoteRecord}
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment;
      reader.readMessage(value,penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.deserializeBinaryFromReader);
      msg.setNoteCommitment(value);
      break;
    case 2:
      var value = new penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note;
      reader.readMessage(value,penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note.deserializeBinaryFromReader);
      msg.setNote(value);
      break;
    case 3:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.AddressIndex;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.deserializeBinaryFromReader);
      msg.setAddressIndex(value);
      break;
    case 4:
      var value = new penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier;
      reader.readMessage(value,penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.deserializeBinaryFromReader);
      msg.setNullifier(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeightCreated(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeightSpent(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPosition(value);
      break;
    case 8:
      var value = new penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource;
      reader.readMessage(value,penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.SpendableNoteRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.SpendableNoteRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNoteCommitment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.serializeBinaryToWriter
    );
  }
  f = message.getNote();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note.serializeBinaryToWriter
    );
  }
  f = message.getAddressIndex();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.AddressIndex.serializeBinaryToWriter
    );
  }
  f = message.getNullifier();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.serializeBinaryToWriter
    );
  }
  f = message.getHeightCreated();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getHeightSpent();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.crypto.tct.v1alpha1.StateCommitment note_commitment = 1;
 * @return {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment}
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.getNoteCommitment = function() {
  return /** @type{?proto.penumbra.crypto.tct.v1alpha1.StateCommitment} */ (
    jspb.Message.getWrapperField(this, penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment, 1));
};


/**
 * @param {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.SpendableNoteRecord} returns this
*/
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.setNoteCommitment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.SpendableNoteRecord} returns this
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.clearNoteCommitment = function() {
  return this.setNoteCommitment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.hasNoteCommitment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.component.shielded_pool.v1alpha1.Note note = 2;
 * @return {?proto.penumbra.core.component.shielded_pool.v1alpha1.Note}
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.getNote = function() {
  return /** @type{?proto.penumbra.core.component.shielded_pool.v1alpha1.Note} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note, 2));
};


/**
 * @param {?proto.penumbra.core.component.shielded_pool.v1alpha1.Note|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.SpendableNoteRecord} returns this
*/
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.setNote = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.SpendableNoteRecord} returns this
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.clearNote = function() {
  return this.setNote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.hasNote = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.keys.v1alpha1.AddressIndex address_index = 3;
 * @return {?proto.penumbra.core.keys.v1alpha1.AddressIndex}
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.getAddressIndex = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.AddressIndex} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.AddressIndex, 3));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.AddressIndex|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.SpendableNoteRecord} returns this
*/
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.setAddressIndex = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.SpendableNoteRecord} returns this
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.clearAddressIndex = function() {
  return this.setAddressIndex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.hasAddressIndex = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.core.component.sct.v1alpha1.Nullifier nullifier = 4;
 * @return {?proto.penumbra.core.component.sct.v1alpha1.Nullifier}
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.getNullifier = function() {
  return /** @type{?proto.penumbra.core.component.sct.v1alpha1.Nullifier} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier, 4));
};


/**
 * @param {?proto.penumbra.core.component.sct.v1alpha1.Nullifier|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.SpendableNoteRecord} returns this
*/
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.setNullifier = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.SpendableNoteRecord} returns this
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.clearNullifier = function() {
  return this.setNullifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.hasNullifier = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 height_created = 5;
 * @return {number}
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.getHeightCreated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.view.v1alpha1.SpendableNoteRecord} returns this
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.setHeightCreated = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 height_spent = 6;
 * @return {number}
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.getHeightSpent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.view.v1alpha1.SpendableNoteRecord} returns this
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.setHeightSpent = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 position = 7;
 * @return {number}
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.view.v1alpha1.SpendableNoteRecord} returns this
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.setPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional penumbra.core.component.chain.v1alpha1.NoteSource source = 8;
 * @return {?proto.penumbra.core.component.chain.v1alpha1.NoteSource}
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.getSource = function() {
  return /** @type{?proto.penumbra.core.component.chain.v1alpha1.NoteSource} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource, 8));
};


/**
 * @param {?proto.penumbra.core.component.chain.v1alpha1.NoteSource|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.SpendableNoteRecord} returns this
*/
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.SpendableNoteRecord} returns this
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.SpendableNoteRecord.prototype.hasSource = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.SwapRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.SwapRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.SwapRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    swapCommitment: (f = msg.getSwapCommitment()) && penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.toObject(includeInstance, f),
    swap: (f = msg.getSwap()) && penumbra_core_component_dex_v1alpha1_dex_pb.SwapPlaintext.toObject(includeInstance, f),
    position: jspb.Message.getFieldWithDefault(msg, 3, 0),
    nullifier: (f = msg.getNullifier()) && penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.toObject(includeInstance, f),
    outputData: (f = msg.getOutputData()) && penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputData.toObject(includeInstance, f),
    heightClaimed: jspb.Message.getFieldWithDefault(msg, 6, 0),
    source: (f = msg.getSource()) && penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.SwapRecord}
 */
proto.penumbra.view.v1alpha1.SwapRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.SwapRecord;
  return proto.penumbra.view.v1alpha1.SwapRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.SwapRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.SwapRecord}
 */
proto.penumbra.view.v1alpha1.SwapRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment;
      reader.readMessage(value,penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.deserializeBinaryFromReader);
      msg.setSwapCommitment(value);
      break;
    case 2:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.SwapPlaintext;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.SwapPlaintext.deserializeBinaryFromReader);
      msg.setSwap(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPosition(value);
      break;
    case 4:
      var value = new penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier;
      reader.readMessage(value,penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.deserializeBinaryFromReader);
      msg.setNullifier(value);
      break;
    case 5:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputData;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputData.deserializeBinaryFromReader);
      msg.setOutputData(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeightClaimed(value);
      break;
    case 7:
      var value = new penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource;
      reader.readMessage(value,penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.SwapRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.SwapRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.SwapRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwapCommitment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.serializeBinaryToWriter
    );
  }
  f = message.getSwap();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.SwapPlaintext.serializeBinaryToWriter
    );
  }
  f = message.getPosition();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getNullifier();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.serializeBinaryToWriter
    );
  }
  f = message.getOutputData();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputData.serializeBinaryToWriter
    );
  }
  f = message.getHeightClaimed();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.crypto.tct.v1alpha1.StateCommitment swap_commitment = 1;
 * @return {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment}
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.getSwapCommitment = function() {
  return /** @type{?proto.penumbra.crypto.tct.v1alpha1.StateCommitment} */ (
    jspb.Message.getWrapperField(this, penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment, 1));
};


/**
 * @param {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.SwapRecord} returns this
*/
proto.penumbra.view.v1alpha1.SwapRecord.prototype.setSwapCommitment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.SwapRecord} returns this
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.clearSwapCommitment = function() {
  return this.setSwapCommitment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.hasSwapCommitment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.SwapPlaintext swap = 2;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext}
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.getSwap = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.SwapPlaintext, 2));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.SwapRecord} returns this
*/
proto.penumbra.view.v1alpha1.SwapRecord.prototype.setSwap = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.SwapRecord} returns this
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.clearSwap = function() {
  return this.setSwap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.hasSwap = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 position = 3;
 * @return {number}
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.view.v1alpha1.SwapRecord} returns this
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.setPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional penumbra.core.component.sct.v1alpha1.Nullifier nullifier = 4;
 * @return {?proto.penumbra.core.component.sct.v1alpha1.Nullifier}
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.getNullifier = function() {
  return /** @type{?proto.penumbra.core.component.sct.v1alpha1.Nullifier} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier, 4));
};


/**
 * @param {?proto.penumbra.core.component.sct.v1alpha1.Nullifier|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.SwapRecord} returns this
*/
proto.penumbra.view.v1alpha1.SwapRecord.prototype.setNullifier = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.SwapRecord} returns this
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.clearNullifier = function() {
  return this.setNullifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.hasNullifier = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.BatchSwapOutputData output_data = 5;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData}
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.getOutputData = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.BatchSwapOutputData, 5));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.SwapRecord} returns this
*/
proto.penumbra.view.v1alpha1.SwapRecord.prototype.setOutputData = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.SwapRecord} returns this
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.clearOutputData = function() {
  return this.setOutputData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.hasOutputData = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint64 height_claimed = 6;
 * @return {number}
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.getHeightClaimed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.view.v1alpha1.SwapRecord} returns this
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.setHeightClaimed = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional penumbra.core.component.chain.v1alpha1.NoteSource source = 7;
 * @return {?proto.penumbra.core.component.chain.v1alpha1.NoteSource}
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.getSource = function() {
  return /** @type{?proto.penumbra.core.component.chain.v1alpha1.NoteSource} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_chain_v1alpha1_chain_pb.NoteSource, 7));
};


/**
 * @param {?proto.penumbra.core.component.chain.v1alpha1.NoteSource|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.SwapRecord} returns this
*/
proto.penumbra.view.v1alpha1.SwapRecord.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.SwapRecord} returns this
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.SwapRecord.prototype.hasSource = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionState: (f = msg.getPositionState()) && penumbra_core_component_dex_v1alpha1_dex_pb.PositionState.toObject(includeInstance, f),
    tradingPair: (f = msg.getTradingPair()) && penumbra_core_component_dex_v1alpha1_dex_pb.TradingPair.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest}
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest;
  return proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest}
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.PositionState;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.PositionState.deserializeBinaryFromReader);
      msg.setPositionState(value);
      break;
    case 2:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.TradingPair;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.TradingPair.deserializeBinaryFromReader);
      msg.setTradingPair(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.PositionState.serializeBinaryToWriter
    );
  }
  f = message.getTradingPair();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.TradingPair.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.component.dex.v1alpha1.PositionState position_state = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionState}
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.prototype.getPositionState = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionState} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.PositionState, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionState|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest} returns this
*/
proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.prototype.setPositionState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest} returns this
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.prototype.clearPositionState = function() {
  return this.setPositionState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.prototype.hasPositionState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.TradingPair trading_pair = 2;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.TradingPair}
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.prototype.getTradingPair = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.TradingPair} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.TradingPair, 2));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.TradingPair|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest} returns this
*/
proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.prototype.setTradingPair = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest} returns this
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.prototype.clearTradingPair = function() {
  return this.setTradingPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsRequest.prototype.hasTradingPair = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionId: (f = msg.getPositionId()) && penumbra_core_component_dex_v1alpha1_dex_pb.PositionId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse}
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse;
  return proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse}
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.PositionId;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.PositionId.deserializeBinaryFromReader);
      msg.setPositionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.PositionId.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.component.dex.v1alpha1.PositionId position_id = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionId}
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse.prototype.getPositionId = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.PositionId, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionId|undefined} value
 * @return {!proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse} returns this
*/
proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse.prototype.setPositionId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse} returns this
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse.prototype.clearPositionId = function() {
  return this.setPositionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.v1alpha1.OwnedPositionIdsResponse.prototype.hasPositionId = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.penumbra.view.v1alpha1);
