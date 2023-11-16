// source: penumbra/core/component/dex/v1alpha1/dex.proto
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

var penumbra_crypto_tct_v1alpha1_tct_pb = require('../../../../../penumbra/crypto/tct/v1alpha1/tct_pb.js');
goog.object.extend(proto, penumbra_crypto_tct_v1alpha1_tct_pb);
var penumbra_core_num_v1alpha1_num_pb = require('../../../../../penumbra/core/num/v1alpha1/num_pb.js');
goog.object.extend(proto, penumbra_core_num_v1alpha1_num_pb);
var penumbra_core_asset_v1alpha1_asset_pb = require('../../../../../penumbra/core/asset/v1alpha1/asset_pb.js');
goog.object.extend(proto, penumbra_core_asset_v1alpha1_asset_pb);
var penumbra_core_keys_v1alpha1_keys_pb = require('../../../../../penumbra/core/keys/v1alpha1/keys_pb.js');
goog.object.extend(proto, penumbra_core_keys_v1alpha1_keys_pb);
var penumbra_core_component_sct_v1alpha1_sct_pb = require('../../../../../penumbra/core/component/sct/v1alpha1/sct_pb.js');
goog.object.extend(proto, penumbra_core_component_sct_v1alpha1_sct_pb);
var penumbra_core_component_fee_v1alpha1_fee_pb = require('../../../../../penumbra/core/component/fee/v1alpha1/fee_pb.js');
goog.object.extend(proto, penumbra_core_component_fee_v1alpha1_fee_pb);
var penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb = require('../../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb.js');
goog.object.extend(proto, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.LpNft', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.Position', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.PositionClose', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.PositionId', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.PositionOpen', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.PositionState', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.PositionState.PositionStateEnum', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.Reserves', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SettingCase', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SpreadRequest', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SpreadResponse', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.Swap', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapBody', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapClaim', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapClaimView', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.SwapClaimViewCase', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapExecution', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapPayload', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapPlan', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapView', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapView.SwapViewCase', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.TradingFunction', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.TradingPair', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof', null, global);
goog.exportSymbol('proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof', null, global);
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
proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof.displayName = 'proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof';
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
proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof.displayName = 'proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof';
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
proto.penumbra.core.component.dex.v1alpha1.Swap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.Swap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.Swap.displayName = 'proto.penumbra.core.component.dex.v1alpha1.Swap';
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaim = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapClaim, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapClaim.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapClaim';
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody';
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
proto.penumbra.core.component.dex.v1alpha1.SwapBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapBody.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapBody';
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
proto.penumbra.core.component.dex.v1alpha1.SwapPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapPayload.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapPayload';
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
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext';
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
proto.penumbra.core.component.dex.v1alpha1.SwapPlan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapPlan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapPlan.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapPlan';
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan';
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
proto.penumbra.core.component.dex.v1alpha1.SwapView = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.penumbra.core.component.dex.v1alpha1.SwapView.oneofGroups_);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapView, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapView.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapView';
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
proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible';
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
proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque';
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.oneofGroups_);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapClaimView, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapClaimView';
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible';
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque';
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
proto.penumbra.core.component.dex.v1alpha1.TradingPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.TradingPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.TradingPair.displayName = 'proto.penumbra.core.component.dex.v1alpha1.TradingPair';
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
proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.displayName = 'proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair';
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
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.displayName = 'proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData';
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
proto.penumbra.core.component.dex.v1alpha1.TradingFunction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.TradingFunction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.TradingFunction.displayName = 'proto.penumbra.core.component.dex.v1alpha1.TradingFunction';
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
proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.displayName = 'proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction';
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
proto.penumbra.core.component.dex.v1alpha1.Reserves = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.Reserves, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.Reserves.displayName = 'proto.penumbra.core.component.dex.v1alpha1.Reserves';
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
proto.penumbra.core.component.dex.v1alpha1.Position = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.Position, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.Position.displayName = 'proto.penumbra.core.component.dex.v1alpha1.Position';
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
proto.penumbra.core.component.dex.v1alpha1.PositionId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.PositionId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.PositionId.displayName = 'proto.penumbra.core.component.dex.v1alpha1.PositionId';
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
proto.penumbra.core.component.dex.v1alpha1.PositionState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.PositionState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.PositionState.displayName = 'proto.penumbra.core.component.dex.v1alpha1.PositionState';
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
proto.penumbra.core.component.dex.v1alpha1.LpNft = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.LpNft, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.LpNft.displayName = 'proto.penumbra.core.component.dex.v1alpha1.LpNft';
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
proto.penumbra.core.component.dex.v1alpha1.PositionOpen = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.PositionOpen, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.PositionOpen.displayName = 'proto.penumbra.core.component.dex.v1alpha1.PositionOpen';
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
proto.penumbra.core.component.dex.v1alpha1.PositionClose = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.PositionClose, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.PositionClose.displayName = 'proto.penumbra.core.component.dex.v1alpha1.PositionClose';
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
proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.displayName = 'proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw';
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
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.displayName = 'proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim';
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
proto.penumbra.core.component.dex.v1alpha1.SwapExecution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.core.component.dex.v1alpha1.SwapExecution.repeatedFields_, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapExecution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapExecution.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapExecution';
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
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.repeatedFields_, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace';
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
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.displayName = 'proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan';
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
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan.displayName = 'proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan';
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
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.displayName = 'proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest';
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
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse.displayName = 'proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse';
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
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest';
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
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse';
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
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest.displayName = 'proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest';
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
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse.displayName = 'proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse';
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
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest';
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
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse';
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
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest.displayName = 'proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest';
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
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse.displayName = 'proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse';
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest.displayName = 'proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest';
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse.displayName = 'proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse';
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest.displayName = 'proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest';
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse.displayName = 'proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse';
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.repeatedFields_, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.displayName = 'proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest';
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse.displayName = 'proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse';
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.displayName = 'proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest';
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse.displayName = 'proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse';
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
proto.penumbra.core.component.dex.v1alpha1.SpreadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SpreadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SpreadRequest.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SpreadRequest';
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
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SpreadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SpreadResponse';
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
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest';
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
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.oneofGroups_);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing';
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
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop';
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
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default';
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
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse.displayName = 'proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse';
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
proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof.toObject = function(includeInstance, msg) {
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof}
 */
proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof;
  return proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof}
 */
proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof.deserializeBinaryFromReader = function(msg, reader) {
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
proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof.serializeBinaryToWriter = function(message, writer) {
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
proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof.prototype.getInner = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes inner = 1;
 * This is a type-conversion wrapper around `getInner()`
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof.prototype.getInner_asB64 = function() {
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
proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof.prototype.getInner_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInner()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof.prototype.setInner = function(value) {
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
proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof.toObject = function(includeInstance, msg) {
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof}
 */
proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof;
  return proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof}
 */
proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof.deserializeBinaryFromReader = function(msg, reader) {
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
proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof.serializeBinaryToWriter = function(message, writer) {
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
proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof.prototype.getInner = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes inner = 1;
 * This is a type-conversion wrapper around `getInner()`
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof.prototype.getInner_asB64 = function() {
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
proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof.prototype.getInner_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInner()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof.prototype.setInner = function(value) {
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
proto.penumbra.core.component.dex.v1alpha1.Swap.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.Swap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.Swap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.Swap.toObject = function(includeInstance, msg) {
  var f, obj = {
    proof: (f = msg.getProof()) && proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof.toObject(includeInstance, f),
    body: (f = msg.getBody()) && proto.penumbra.core.component.dex.v1alpha1.SwapBody.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Swap}
 */
proto.penumbra.core.component.dex.v1alpha1.Swap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.Swap;
  return proto.penumbra.core.component.dex.v1alpha1.Swap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.Swap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Swap}
 */
proto.penumbra.core.component.dex.v1alpha1.Swap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof.deserializeBinaryFromReader);
      msg.setProof(value);
      break;
    case 4:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapBody;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapBody.deserializeBinaryFromReader);
      msg.setBody(value);
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
proto.penumbra.core.component.dex.v1alpha1.Swap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.Swap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.Swap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.Swap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProof();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof.serializeBinaryToWriter
    );
  }
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapBody.serializeBinaryToWriter
    );
  }
};


/**
 * optional ZKSwapProof proof = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof}
 */
proto.penumbra.core.component.dex.v1alpha1.Swap.prototype.getProof = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.ZKSwapProof|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Swap} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.Swap.prototype.setProof = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Swap} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.Swap.prototype.clearProof = function() {
  return this.setProof(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.Swap.prototype.hasProof = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SwapBody body = 4;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapBody}
 */
proto.penumbra.core.component.dex.v1alpha1.Swap.prototype.getBody = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapBody} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapBody, 4));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapBody|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Swap} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.Swap.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Swap} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.Swap.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.Swap.prototype.hasBody = function() {
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaim.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapClaim.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaim} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaim.toObject = function(includeInstance, msg) {
  var f, obj = {
    proof: (f = msg.getProof()) && proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof.toObject(includeInstance, f),
    body: (f = msg.getBody()) && proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.toObject(includeInstance, f),
    epochDuration: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaim}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaim.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapClaim;
  return proto.penumbra.core.component.dex.v1alpha1.SwapClaim.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaim} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaim}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaim.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof.deserializeBinaryFromReader);
      msg.setProof(value);
      break;
    case 2:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.deserializeBinaryFromReader);
      msg.setBody(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEpochDuration(value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaim.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapClaim.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaim} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaim.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProof();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof.serializeBinaryToWriter
    );
  }
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.serializeBinaryToWriter
    );
  }
  f = message.getEpochDuration();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional ZKSwapClaimProof proof = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaim.prototype.getProof = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.ZKSwapClaimProof|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaim} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapClaim.prototype.setProof = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaim} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaim.prototype.clearProof = function() {
  return this.setProof(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaim.prototype.hasProof = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SwapClaimBody body = 2;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaim.prototype.getBody = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody, 2));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaim} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapClaim.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaim} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaim.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaim.prototype.hasBody = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 epoch_duration = 7;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaim.prototype.getEpochDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaim} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaim.prototype.setEpochDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    nullifier: (f = msg.getNullifier()) && penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.toObject(includeInstance, f),
    fee: (f = msg.getFee()) && penumbra_core_component_fee_v1alpha1_fee_pb.Fee.toObject(includeInstance, f),
    output1Commitment: (f = msg.getOutput1Commitment()) && penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.toObject(includeInstance, f),
    output2Commitment: (f = msg.getOutput2Commitment()) && penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.toObject(includeInstance, f),
    outputData: (f = msg.getOutputData()) && proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody;
  return proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier;
      reader.readMessage(value,penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.deserializeBinaryFromReader);
      msg.setNullifier(value);
      break;
    case 2:
      var value = new penumbra_core_component_fee_v1alpha1_fee_pb.Fee;
      reader.readMessage(value,penumbra_core_component_fee_v1alpha1_fee_pb.Fee.deserializeBinaryFromReader);
      msg.setFee(value);
      break;
    case 3:
      var value = new penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment;
      reader.readMessage(value,penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.deserializeBinaryFromReader);
      msg.setOutput1Commitment(value);
      break;
    case 4:
      var value = new penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment;
      reader.readMessage(value,penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.deserializeBinaryFromReader);
      msg.setOutput2Commitment(value);
      break;
    case 6:
      var value = new proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.deserializeBinaryFromReader);
      msg.setOutputData(value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNullifier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.serializeBinaryToWriter
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
  f = message.getOutput1Commitment();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.serializeBinaryToWriter
    );
  }
  f = message.getOutput2Commitment();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.serializeBinaryToWriter
    );
  }
  f = message.getOutputData();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.component.sct.v1alpha1.Nullifier nullifier = 1;
 * @return {?proto.penumbra.core.component.sct.v1alpha1.Nullifier}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.getNullifier = function() {
  return /** @type{?proto.penumbra.core.component.sct.v1alpha1.Nullifier} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier, 1));
};


/**
 * @param {?proto.penumbra.core.component.sct.v1alpha1.Nullifier|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.setNullifier = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.clearNullifier = function() {
  return this.setNullifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.hasNullifier = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.component.fee.v1alpha1.Fee fee = 2;
 * @return {?proto.penumbra.core.component.fee.v1alpha1.Fee}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.getFee = function() {
  return /** @type{?proto.penumbra.core.component.fee.v1alpha1.Fee} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_fee_v1alpha1_fee_pb.Fee, 2));
};


/**
 * @param {?proto.penumbra.core.component.fee.v1alpha1.Fee|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.setFee = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.clearFee = function() {
  return this.setFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.hasFee = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.crypto.tct.v1alpha1.StateCommitment output_1_commitment = 3;
 * @return {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.getOutput1Commitment = function() {
  return /** @type{?proto.penumbra.crypto.tct.v1alpha1.StateCommitment} */ (
    jspb.Message.getWrapperField(this, penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment, 3));
};


/**
 * @param {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.setOutput1Commitment = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.clearOutput1Commitment = function() {
  return this.setOutput1Commitment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.hasOutput1Commitment = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.crypto.tct.v1alpha1.StateCommitment output_2_commitment = 4;
 * @return {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.getOutput2Commitment = function() {
  return /** @type{?proto.penumbra.crypto.tct.v1alpha1.StateCommitment} */ (
    jspb.Message.getWrapperField(this, penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment, 4));
};


/**
 * @param {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.setOutput2Commitment = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.clearOutput2Commitment = function() {
  return this.setOutput2Commitment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.hasOutput2Commitment = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional BatchSwapOutputData output_data = 6;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.getOutputData = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData, 6));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.setOutputData = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.clearOutputData = function() {
  return this.setOutputData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimBody.prototype.hasOutputData = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradingPair: (f = msg.getTradingPair()) && proto.penumbra.core.component.dex.v1alpha1.TradingPair.toObject(includeInstance, f),
    delta1I: (f = msg.getDelta1I()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    delta2I: (f = msg.getDelta2I()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    feeCommitment: (f = msg.getFeeCommitment()) && penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment.toObject(includeInstance, f),
    payload: (f = msg.getPayload()) && proto.penumbra.core.component.dex.v1alpha1.SwapPayload.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapBody}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapBody;
  return proto.penumbra.core.component.dex.v1alpha1.SwapBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapBody}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.TradingPair;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.TradingPair.deserializeBinaryFromReader);
      msg.setTradingPair(value);
      break;
    case 2:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setDelta1I(value);
      break;
    case 3:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setDelta2I(value);
      break;
    case 4:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment.deserializeBinaryFromReader);
      msg.setFeeCommitment(value);
      break;
    case 5:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapPayload;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapPayload.deserializeBinaryFromReader);
      msg.setPayload(value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradingPair();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.TradingPair.serializeBinaryToWriter
    );
  }
  f = message.getDelta1I();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getDelta2I();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getFeeCommitment();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment.serializeBinaryToWriter
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapPayload.serializeBinaryToWriter
    );
  }
};


/**
 * optional TradingPair trading_pair = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.TradingPair}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.getTradingPair = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.TradingPair} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.TradingPair, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.TradingPair|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapBody} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.setTradingPair = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapBody} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.clearTradingPair = function() {
  return this.setTradingPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.hasTradingPair = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.num.v1alpha1.Amount delta_1_i = 2;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.getDelta1I = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 2));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapBody} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.setDelta1I = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapBody} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.clearDelta1I = function() {
  return this.setDelta1I(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.hasDelta1I = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.num.v1alpha1.Amount delta_2_i = 3;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.getDelta2I = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 3));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapBody} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.setDelta2I = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapBody} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.clearDelta2I = function() {
  return this.setDelta2I(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.hasDelta2I = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.core.asset.v1alpha1.BalanceCommitment fee_commitment = 4;
 * @return {?proto.penumbra.core.asset.v1alpha1.BalanceCommitment}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.getFeeCommitment = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.BalanceCommitment} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment, 4));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.BalanceCommitment|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapBody} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.setFeeCommitment = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapBody} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.clearFeeCommitment = function() {
  return this.setFeeCommitment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.hasFeeCommitment = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SwapPayload payload = 5;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapPayload}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.getPayload = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapPayload} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapPayload, 5));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapPayload|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapBody} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapBody} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapBody.prototype.hasPayload = function() {
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
proto.penumbra.core.component.dex.v1alpha1.SwapPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    commitment: (f = msg.getCommitment()) && penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.toObject(includeInstance, f),
    encryptedSwap: msg.getEncryptedSwap_asB64()
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPayload}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapPayload;
  return proto.penumbra.core.component.dex.v1alpha1.SwapPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPayload}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment;
      reader.readMessage(value,penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.deserializeBinaryFromReader);
      msg.setCommitment(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEncryptedSwap(value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommitment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.serializeBinaryToWriter
    );
  }
  f = message.getEncryptedSwap_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional penumbra.crypto.tct.v1alpha1.StateCommitment commitment = 1;
 * @return {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPayload.prototype.getCommitment = function() {
  return /** @type{?proto.penumbra.crypto.tct.v1alpha1.StateCommitment} */ (
    jspb.Message.getWrapperField(this, penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment, 1));
};


/**
 * @param {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPayload} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapPayload.prototype.setCommitment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPayload} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPayload.prototype.clearCommitment = function() {
  return this.setCommitment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPayload.prototype.hasCommitment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes encrypted_swap = 2;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPayload.prototype.getEncryptedSwap = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes encrypted_swap = 2;
 * This is a type-conversion wrapper around `getEncryptedSwap()`
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPayload.prototype.getEncryptedSwap_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEncryptedSwap()));
};


/**
 * optional bytes encrypted_swap = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEncryptedSwap()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPayload.prototype.getEncryptedSwap_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEncryptedSwap()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPayload} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPayload.prototype.setEncryptedSwap = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradingPair: (f = msg.getTradingPair()) && proto.penumbra.core.component.dex.v1alpha1.TradingPair.toObject(includeInstance, f),
    delta1I: (f = msg.getDelta1I()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    delta2I: (f = msg.getDelta2I()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    claimFee: (f = msg.getClaimFee()) && penumbra_core_component_fee_v1alpha1_fee_pb.Fee.toObject(includeInstance, f),
    claimAddress: (f = msg.getClaimAddress()) && penumbra_core_keys_v1alpha1_keys_pb.Address.toObject(includeInstance, f),
    rseed: msg.getRseed_asB64()
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext;
  return proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.TradingPair;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.TradingPair.deserializeBinaryFromReader);
      msg.setTradingPair(value);
      break;
    case 2:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setDelta1I(value);
      break;
    case 3:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setDelta2I(value);
      break;
    case 4:
      var value = new penumbra_core_component_fee_v1alpha1_fee_pb.Fee;
      reader.readMessage(value,penumbra_core_component_fee_v1alpha1_fee_pb.Fee.deserializeBinaryFromReader);
      msg.setClaimFee(value);
      break;
    case 5:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.Address;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.Address.deserializeBinaryFromReader);
      msg.setClaimAddress(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRseed(value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradingPair();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.TradingPair.serializeBinaryToWriter
    );
  }
  f = message.getDelta1I();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getDelta2I();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getClaimFee();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_core_component_fee_v1alpha1_fee_pb.Fee.serializeBinaryToWriter
    );
  }
  f = message.getClaimAddress();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getRseed_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
};


/**
 * optional TradingPair trading_pair = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.TradingPair}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.getTradingPair = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.TradingPair} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.TradingPair, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.TradingPair|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.setTradingPair = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.clearTradingPair = function() {
  return this.setTradingPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.hasTradingPair = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.num.v1alpha1.Amount delta_1_i = 2;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.getDelta1I = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 2));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.setDelta1I = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.clearDelta1I = function() {
  return this.setDelta1I(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.hasDelta1I = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.num.v1alpha1.Amount delta_2_i = 3;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.getDelta2I = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 3));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.setDelta2I = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.clearDelta2I = function() {
  return this.setDelta2I(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.hasDelta2I = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.core.component.fee.v1alpha1.Fee claim_fee = 4;
 * @return {?proto.penumbra.core.component.fee.v1alpha1.Fee}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.getClaimFee = function() {
  return /** @type{?proto.penumbra.core.component.fee.v1alpha1.Fee} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_fee_v1alpha1_fee_pb.Fee, 4));
};


/**
 * @param {?proto.penumbra.core.component.fee.v1alpha1.Fee|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.setClaimFee = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.clearClaimFee = function() {
  return this.setClaimFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.hasClaimFee = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional penumbra.core.keys.v1alpha1.Address claim_address = 5;
 * @return {?proto.penumbra.core.keys.v1alpha1.Address}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.getClaimAddress = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.Address} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.Address, 5));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.Address|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.setClaimAddress = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.clearClaimAddress = function() {
  return this.setClaimAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.hasClaimAddress = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bytes rseed = 6;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.getRseed = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes rseed = 6;
 * This is a type-conversion wrapper around `getRseed()`
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.getRseed_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRseed()));
};


/**
 * optional bytes rseed = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRseed()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.getRseed_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRseed()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.prototype.setRseed = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapPlan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapPlan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.toObject = function(includeInstance, msg) {
  var f, obj = {
    swapPlaintext: (f = msg.getSwapPlaintext()) && proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.toObject(includeInstance, f),
    feeBlinding: msg.getFeeBlinding_asB64(),
    proofBlindingR: msg.getProofBlindingR_asB64(),
    proofBlindingS: msg.getProofBlindingS_asB64()
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlan}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapPlan;
  return proto.penumbra.core.component.dex.v1alpha1.SwapPlan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapPlan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlan}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.deserializeBinaryFromReader);
      msg.setSwapPlaintext(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFeeBlinding(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProofBlindingR(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProofBlindingS(value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapPlan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapPlan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwapPlaintext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.serializeBinaryToWriter
    );
  }
  f = message.getFeeBlinding_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getProofBlindingR_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getProofBlindingS_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional SwapPlaintext swap_plaintext = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.getSwapPlaintext = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlan} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.setSwapPlaintext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlan} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.clearSwapPlaintext = function() {
  return this.setSwapPlaintext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.hasSwapPlaintext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes fee_blinding = 2;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.getFeeBlinding = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes fee_blinding = 2;
 * This is a type-conversion wrapper around `getFeeBlinding()`
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.getFeeBlinding_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFeeBlinding()));
};


/**
 * optional bytes fee_blinding = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFeeBlinding()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.getFeeBlinding_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFeeBlinding()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlan} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.setFeeBlinding = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes proof_blinding_r = 3;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.getProofBlindingR = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes proof_blinding_r = 3;
 * This is a type-conversion wrapper around `getProofBlindingR()`
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.getProofBlindingR_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProofBlindingR()));
};


/**
 * optional bytes proof_blinding_r = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProofBlindingR()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.getProofBlindingR_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProofBlindingR()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlan} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.setProofBlindingR = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes proof_blinding_s = 4;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.getProofBlindingS = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes proof_blinding_s = 4;
 * This is a type-conversion wrapper around `getProofBlindingS()`
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.getProofBlindingS_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProofBlindingS()));
};


/**
 * optional bytes proof_blinding_s = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProofBlindingS()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.getProofBlindingS_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProofBlindingS()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapPlan} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapPlan.prototype.setProofBlindingS = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.toObject = function(includeInstance, msg) {
  var f, obj = {
    swapPlaintext: (f = msg.getSwapPlaintext()) && proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.toObject(includeInstance, f),
    position: jspb.Message.getFieldWithDefault(msg, 2, 0),
    outputData: (f = msg.getOutputData()) && proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.toObject(includeInstance, f),
    epochDuration: jspb.Message.getFieldWithDefault(msg, 4, 0),
    proofBlindingR: msg.getProofBlindingR_asB64(),
    proofBlindingS: msg.getProofBlindingS_asB64()
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan;
  return proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.deserializeBinaryFromReader);
      msg.setSwapPlaintext(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPosition(value);
      break;
    case 3:
      var value = new proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.deserializeBinaryFromReader);
      msg.setOutputData(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEpochDuration(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProofBlindingR(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProofBlindingS(value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwapPlaintext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.serializeBinaryToWriter
    );
  }
  f = message.getPosition();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getOutputData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.serializeBinaryToWriter
    );
  }
  f = message.getEpochDuration();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getProofBlindingR_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getProofBlindingS_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
};


/**
 * optional SwapPlaintext swap_plaintext = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.getSwapPlaintext = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.setSwapPlaintext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.clearSwapPlaintext = function() {
  return this.setSwapPlaintext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.hasSwapPlaintext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 position = 2;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.setPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional BatchSwapOutputData output_data = 3;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.getOutputData = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData, 3));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.setOutputData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.clearOutputData = function() {
  return this.setOutputData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.hasOutputData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 epoch_duration = 4;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.getEpochDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.setEpochDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bytes proof_blinding_r = 5;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.getProofBlindingR = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes proof_blinding_r = 5;
 * This is a type-conversion wrapper around `getProofBlindingR()`
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.getProofBlindingR_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProofBlindingR()));
};


/**
 * optional bytes proof_blinding_r = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProofBlindingR()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.getProofBlindingR_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProofBlindingR()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.setProofBlindingR = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional bytes proof_blinding_s = 6;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.getProofBlindingS = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes proof_blinding_s = 6;
 * This is a type-conversion wrapper around `getProofBlindingS()`
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.getProofBlindingS_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProofBlindingS()));
};


/**
 * optional bytes proof_blinding_s = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProofBlindingS()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.getProofBlindingS_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProofBlindingS()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan.prototype.setProofBlindingS = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.SwapViewCase = {
  SWAP_VIEW_NOT_SET: 0,
  VISIBLE: 1,
  OPAQUE: 2
};

/**
 * @return {proto.penumbra.core.component.dex.v1alpha1.SwapView.SwapViewCase}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.prototype.getSwapViewCase = function() {
  return /** @type {proto.penumbra.core.component.dex.v1alpha1.SwapView.SwapViewCase} */(jspb.Message.computeOneofCase(this, proto.penumbra.core.component.dex.v1alpha1.SwapView.oneofGroups_[0]));
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
proto.penumbra.core.component.dex.v1alpha1.SwapView.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapView.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapView} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.toObject = function(includeInstance, msg) {
  var f, obj = {
    visible: (f = msg.getVisible()) && proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapView}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapView;
  return proto.penumbra.core.component.dex.v1alpha1.SwapView.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapView} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapView}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.deserializeBinaryFromReader);
      msg.setVisible(value);
      break;
    case 2:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapView.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapView.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapView} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVisible();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque.serializeBinaryToWriter
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
proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.toObject = function(includeInstance, msg) {
  var f, obj = {
    swap: (f = msg.getSwap()) && proto.penumbra.core.component.dex.v1alpha1.Swap.toObject(includeInstance, f),
    swapPlaintext: (f = msg.getSwapPlaintext()) && proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible;
  return proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.Swap;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.Swap.deserializeBinaryFromReader);
      msg.setSwap(value);
      break;
    case 3:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.deserializeBinaryFromReader);
      msg.setSwapPlaintext(value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwap();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.Swap.serializeBinaryToWriter
    );
  }
  f = message.getSwapPlaintext();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext.serializeBinaryToWriter
    );
  }
};


/**
 * optional Swap swap = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.Swap}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.prototype.getSwap = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.Swap} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.Swap, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.Swap|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.prototype.setSwap = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.prototype.clearSwap = function() {
  return this.setSwap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.prototype.hasSwap = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SwapPlaintext swap_plaintext = 3;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.prototype.getSwapPlaintext = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext, 3));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapPlaintext|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.prototype.setSwapPlaintext = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.prototype.clearSwapPlaintext = function() {
  return this.setSwapPlaintext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible.prototype.hasSwapPlaintext = function() {
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
proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque.toObject = function(includeInstance, msg) {
  var f, obj = {
    swap: (f = msg.getSwap()) && proto.penumbra.core.component.dex.v1alpha1.Swap.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque;
  return proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.Swap;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.Swap.deserializeBinaryFromReader);
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
proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwap();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.Swap.serializeBinaryToWriter
    );
  }
};


/**
 * optional Swap swap = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.Swap}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque.prototype.getSwap = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.Swap} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.Swap, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.Swap|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque.prototype.setSwap = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque.prototype.clearSwap = function() {
  return this.setSwap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque.prototype.hasSwap = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Visible visible = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.prototype.getVisible = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapView.Visible|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapView} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapView.prototype.setVisible = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.penumbra.core.component.dex.v1alpha1.SwapView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapView} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.prototype.clearVisible = function() {
  return this.setVisible(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.prototype.hasVisible = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Opaque opaque = 2;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.prototype.getOpaque = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque, 2));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapView.Opaque|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapView} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapView.prototype.setOpaque = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.penumbra.core.component.dex.v1alpha1.SwapView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapView} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapView.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.SwapClaimViewCase = {
  SWAP_CLAIM_VIEW_NOT_SET: 0,
  VISIBLE: 1,
  OPAQUE: 2
};

/**
 * @return {proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.SwapClaimViewCase}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.prototype.getSwapClaimViewCase = function() {
  return /** @type {proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.SwapClaimViewCase} */(jspb.Message.computeOneofCase(this, proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.oneofGroups_[0]));
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.toObject = function(includeInstance, msg) {
  var f, obj = {
    visible: (f = msg.getVisible()) && proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapClaimView;
  return proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.deserializeBinaryFromReader);
      msg.setVisible(value);
      break;
    case 2:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVisible();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque.serializeBinaryToWriter
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.toObject = function(includeInstance, msg) {
  var f, obj = {
    swapClaim: (f = msg.getSwapClaim()) && proto.penumbra.core.component.dex.v1alpha1.SwapClaim.toObject(includeInstance, f),
    output1: (f = msg.getOutput1()) && penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView.toObject(includeInstance, f),
    output2: (f = msg.getOutput2()) && penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible;
  return proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapClaim;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapClaim.deserializeBinaryFromReader);
      msg.setSwapClaim(value);
      break;
    case 2:
      var value = new penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView;
      reader.readMessage(value,penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView.deserializeBinaryFromReader);
      msg.setOutput1(value);
      break;
    case 3:
      var value = new penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView;
      reader.readMessage(value,penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView.deserializeBinaryFromReader);
      msg.setOutput2(value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwapClaim();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapClaim.serializeBinaryToWriter
    );
  }
  f = message.getOutput1();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView.serializeBinaryToWriter
    );
  }
  f = message.getOutput2();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView.serializeBinaryToWriter
    );
  }
};


/**
 * optional SwapClaim swap_claim = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapClaim}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.prototype.getSwapClaim = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapClaim} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapClaim, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapClaim|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.prototype.setSwapClaim = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.prototype.clearSwapClaim = function() {
  return this.setSwapClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.prototype.hasSwapClaim = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.component.shielded_pool.v1alpha1.NoteView output_1 = 2;
 * @return {?proto.penumbra.core.component.shielded_pool.v1alpha1.NoteView}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.prototype.getOutput1 = function() {
  return /** @type{?proto.penumbra.core.component.shielded_pool.v1alpha1.NoteView} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView, 2));
};


/**
 * @param {?proto.penumbra.core.component.shielded_pool.v1alpha1.NoteView|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.prototype.setOutput1 = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.prototype.clearOutput1 = function() {
  return this.setOutput1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.prototype.hasOutput1 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.component.shielded_pool.v1alpha1.NoteView output_2 = 3;
 * @return {?proto.penumbra.core.component.shielded_pool.v1alpha1.NoteView}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.prototype.getOutput2 = function() {
  return /** @type{?proto.penumbra.core.component.shielded_pool.v1alpha1.NoteView} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView, 3));
};


/**
 * @param {?proto.penumbra.core.component.shielded_pool.v1alpha1.NoteView|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.prototype.setOutput2 = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.prototype.clearOutput2 = function() {
  return this.setOutput2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible.prototype.hasOutput2 = function() {
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque.toObject = function(includeInstance, msg) {
  var f, obj = {
    swapClaim: (f = msg.getSwapClaim()) && proto.penumbra.core.component.dex.v1alpha1.SwapClaim.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque;
  return proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapClaim;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapClaim.deserializeBinaryFromReader);
      msg.setSwapClaim(value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwapClaim();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapClaim.serializeBinaryToWriter
    );
  }
};


/**
 * optional SwapClaim swap_claim = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapClaim}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque.prototype.getSwapClaim = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapClaim} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapClaim, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapClaim|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque.prototype.setSwapClaim = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque.prototype.clearSwapClaim = function() {
  return this.setSwapClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque.prototype.hasSwapClaim = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Visible visible = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.prototype.getVisible = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Visible|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.prototype.setVisible = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.prototype.clearVisible = function() {
  return this.setVisible(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.prototype.hasVisible = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Opaque opaque = 2;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.prototype.getOpaque = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque, 2));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.Opaque|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.prototype.setOpaque = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapClaimView} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapClaimView.prototype.hasOpaque = function() {
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
proto.penumbra.core.component.dex.v1alpha1.TradingPair.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.TradingPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.TradingPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.TradingPair.toObject = function(includeInstance, msg) {
  var f, obj = {
    asset1: (f = msg.getAsset1()) && penumbra_core_asset_v1alpha1_asset_pb.AssetId.toObject(includeInstance, f),
    asset2: (f = msg.getAsset2()) && penumbra_core_asset_v1alpha1_asset_pb.AssetId.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.TradingPair}
 */
proto.penumbra.core.component.dex.v1alpha1.TradingPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.TradingPair;
  return proto.penumbra.core.component.dex.v1alpha1.TradingPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.TradingPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.TradingPair}
 */
proto.penumbra.core.component.dex.v1alpha1.TradingPair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.AssetId;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.AssetId.deserializeBinaryFromReader);
      msg.setAsset1(value);
      break;
    case 2:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.AssetId;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.AssetId.deserializeBinaryFromReader);
      msg.setAsset2(value);
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
proto.penumbra.core.component.dex.v1alpha1.TradingPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.TradingPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.TradingPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.TradingPair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsset1();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.AssetId.serializeBinaryToWriter
    );
  }
  f = message.getAsset2();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.AssetId.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.asset.v1alpha1.AssetId asset_1 = 1;
 * @return {?proto.penumbra.core.asset.v1alpha1.AssetId}
 */
proto.penumbra.core.component.dex.v1alpha1.TradingPair.prototype.getAsset1 = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.AssetId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.AssetId, 1));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.AssetId|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.TradingPair} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.TradingPair.prototype.setAsset1 = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.TradingPair} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.TradingPair.prototype.clearAsset1 = function() {
  return this.setAsset1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.TradingPair.prototype.hasAsset1 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.asset.v1alpha1.AssetId asset_2 = 2;
 * @return {?proto.penumbra.core.asset.v1alpha1.AssetId}
 */
proto.penumbra.core.component.dex.v1alpha1.TradingPair.prototype.getAsset2 = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.AssetId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.AssetId, 2));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.AssetId|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.TradingPair} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.TradingPair.prototype.setAsset2 = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.TradingPair} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.TradingPair.prototype.clearAsset2 = function() {
  return this.setAsset2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.TradingPair.prototype.hasAsset2 = function() {
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
proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && penumbra_core_asset_v1alpha1_asset_pb.AssetId.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && penumbra_core_asset_v1alpha1_asset_pb.AssetId.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair}
 */
proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair;
  return proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair}
 */
proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.AssetId;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.AssetId.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.AssetId;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.AssetId.deserializeBinaryFromReader);
      msg.setEnd(value);
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
proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.AssetId.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.AssetId.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.asset.v1alpha1.AssetId start = 1;
 * @return {?proto.penumbra.core.asset.v1alpha1.AssetId}
 */
proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.prototype.getStart = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.AssetId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.AssetId, 1));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.AssetId|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.asset.v1alpha1.AssetId end = 2;
 * @return {?proto.penumbra.core.asset.v1alpha1.AssetId}
 */
proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.prototype.getEnd = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.AssetId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.AssetId, 2));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.AssetId|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.prototype.setEnd = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.prototype.clearEnd = function() {
  return this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.prototype.hasEnd = function() {
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
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.toObject = function(includeInstance, msg) {
  var f, obj = {
    delta1: (f = msg.getDelta1()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    delta2: (f = msg.getDelta2()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    lambda1: (f = msg.getLambda1()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    lambda2: (f = msg.getLambda2()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    unfilled1: (f = msg.getUnfilled1()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    unfilled2: (f = msg.getUnfilled2()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    height: jspb.Message.getFieldWithDefault(msg, 7, 0),
    tradingPair: (f = msg.getTradingPair()) && proto.penumbra.core.component.dex.v1alpha1.TradingPair.toObject(includeInstance, f),
    epochStartingHeight: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData;
  return proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setDelta1(value);
      break;
    case 2:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setDelta2(value);
      break;
    case 3:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setLambda1(value);
      break;
    case 4:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setLambda2(value);
      break;
    case 5:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setUnfilled1(value);
      break;
    case 6:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setUnfilled2(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 8:
      var value = new proto.penumbra.core.component.dex.v1alpha1.TradingPair;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.TradingPair.deserializeBinaryFromReader);
      msg.setTradingPair(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEpochStartingHeight(value);
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
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelta1();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getDelta2();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getLambda1();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getLambda2();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getUnfilled1();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getUnfilled2();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getTradingPair();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.penumbra.core.component.dex.v1alpha1.TradingPair.serializeBinaryToWriter
    );
  }
  f = message.getEpochStartingHeight();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
};


/**
 * optional penumbra.core.num.v1alpha1.Amount delta_1 = 1;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.getDelta1 = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 1));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.setDelta1 = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.clearDelta1 = function() {
  return this.setDelta1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.hasDelta1 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.num.v1alpha1.Amount delta_2 = 2;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.getDelta2 = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 2));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.setDelta2 = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.clearDelta2 = function() {
  return this.setDelta2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.hasDelta2 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.num.v1alpha1.Amount lambda_1 = 3;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.getLambda1 = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 3));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.setLambda1 = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.clearLambda1 = function() {
  return this.setLambda1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.hasLambda1 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.core.num.v1alpha1.Amount lambda_2 = 4;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.getLambda2 = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 4));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.setLambda2 = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.clearLambda2 = function() {
  return this.setLambda2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.hasLambda2 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional penumbra.core.num.v1alpha1.Amount unfilled_1 = 5;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.getUnfilled1 = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 5));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.setUnfilled1 = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.clearUnfilled1 = function() {
  return this.setUnfilled1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.hasUnfilled1 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional penumbra.core.num.v1alpha1.Amount unfilled_2 = 6;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.getUnfilled2 = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 6));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.setUnfilled2 = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.clearUnfilled2 = function() {
  return this.setUnfilled2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.hasUnfilled2 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint64 height = 7;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional TradingPair trading_pair = 8;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.TradingPair}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.getTradingPair = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.TradingPair} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.TradingPair, 8));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.TradingPair|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.setTradingPair = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.clearTradingPair = function() {
  return this.setTradingPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.hasTradingPair = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 epoch_starting_height = 9;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.getEpochStartingHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.prototype.setEpochStartingHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
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
proto.penumbra.core.component.dex.v1alpha1.TradingFunction.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.TradingFunction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.TradingFunction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.TradingFunction.toObject = function(includeInstance, msg) {
  var f, obj = {
    component: (f = msg.getComponent()) && proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.toObject(includeInstance, f),
    pair: (f = msg.getPair()) && proto.penumbra.core.component.dex.v1alpha1.TradingPair.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.TradingFunction}
 */
proto.penumbra.core.component.dex.v1alpha1.TradingFunction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.TradingFunction;
  return proto.penumbra.core.component.dex.v1alpha1.TradingFunction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.TradingFunction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.TradingFunction}
 */
proto.penumbra.core.component.dex.v1alpha1.TradingFunction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.deserializeBinaryFromReader);
      msg.setComponent(value);
      break;
    case 2:
      var value = new proto.penumbra.core.component.dex.v1alpha1.TradingPair;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.TradingPair.deserializeBinaryFromReader);
      msg.setPair(value);
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
proto.penumbra.core.component.dex.v1alpha1.TradingFunction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.TradingFunction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.TradingFunction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.TradingFunction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComponent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.serializeBinaryToWriter
    );
  }
  f = message.getPair();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.component.dex.v1alpha1.TradingPair.serializeBinaryToWriter
    );
  }
};


/**
 * optional BareTradingFunction component = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction}
 */
proto.penumbra.core.component.dex.v1alpha1.TradingFunction.prototype.getComponent = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.TradingFunction} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.TradingFunction.prototype.setComponent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.TradingFunction} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.TradingFunction.prototype.clearComponent = function() {
  return this.setComponent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.TradingFunction.prototype.hasComponent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TradingPair pair = 2;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.TradingPair}
 */
proto.penumbra.core.component.dex.v1alpha1.TradingFunction.prototype.getPair = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.TradingPair} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.TradingPair, 2));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.TradingPair|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.TradingFunction} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.TradingFunction.prototype.setPair = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.TradingFunction} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.TradingFunction.prototype.clearPair = function() {
  return this.setPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.TradingFunction.prototype.hasPair = function() {
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
proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.toObject = function(includeInstance, msg) {
  var f, obj = {
    fee: jspb.Message.getFieldWithDefault(msg, 1, 0),
    p: (f = msg.getP()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    q: (f = msg.getQ()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction}
 */
proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction;
  return proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction}
 */
proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFee(value);
      break;
    case 2:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setP(value);
      break;
    case 3:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setQ(value);
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
proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFee();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getP();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getQ();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 fee = 1;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.prototype.setFee = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional penumbra.core.num.v1alpha1.Amount p = 2;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.prototype.getP = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 2));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.prototype.setP = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.prototype.clearP = function() {
  return this.setP(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.prototype.hasP = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.num.v1alpha1.Amount q = 3;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.prototype.getQ = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 3));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.prototype.setQ = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.prototype.clearQ = function() {
  return this.setQ(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.BareTradingFunction.prototype.hasQ = function() {
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
proto.penumbra.core.component.dex.v1alpha1.Reserves.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.Reserves.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.Reserves} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.Reserves.toObject = function(includeInstance, msg) {
  var f, obj = {
    r1: (f = msg.getR1()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    r2: (f = msg.getR2()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Reserves}
 */
proto.penumbra.core.component.dex.v1alpha1.Reserves.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.Reserves;
  return proto.penumbra.core.component.dex.v1alpha1.Reserves.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.Reserves} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Reserves}
 */
proto.penumbra.core.component.dex.v1alpha1.Reserves.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setR1(value);
      break;
    case 2:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setR2(value);
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
proto.penumbra.core.component.dex.v1alpha1.Reserves.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.Reserves.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.Reserves} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.Reserves.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getR1();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getR2();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.num.v1alpha1.Amount r1 = 1;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.dex.v1alpha1.Reserves.prototype.getR1 = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 1));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Reserves} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.Reserves.prototype.setR1 = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Reserves} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.Reserves.prototype.clearR1 = function() {
  return this.setR1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.Reserves.prototype.hasR1 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.num.v1alpha1.Amount r2 = 2;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.dex.v1alpha1.Reserves.prototype.getR2 = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 2));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Reserves} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.Reserves.prototype.setR2 = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Reserves} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.Reserves.prototype.clearR2 = function() {
  return this.setR2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.Reserves.prototype.hasR2 = function() {
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
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.Position.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.Position} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.Position.toObject = function(includeInstance, msg) {
  var f, obj = {
    phi: (f = msg.getPhi()) && proto.penumbra.core.component.dex.v1alpha1.TradingFunction.toObject(includeInstance, f),
    nonce: msg.getNonce_asB64(),
    state: (f = msg.getState()) && proto.penumbra.core.component.dex.v1alpha1.PositionState.toObject(includeInstance, f),
    reserves: (f = msg.getReserves()) && proto.penumbra.core.component.dex.v1alpha1.Reserves.toObject(includeInstance, f),
    closeOnFill: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Position}
 */
proto.penumbra.core.component.dex.v1alpha1.Position.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.Position;
  return proto.penumbra.core.component.dex.v1alpha1.Position.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.Position} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Position}
 */
proto.penumbra.core.component.dex.v1alpha1.Position.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.TradingFunction;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.TradingFunction.deserializeBinaryFromReader);
      msg.setPhi(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNonce(value);
      break;
    case 3:
      var value = new proto.penumbra.core.component.dex.v1alpha1.PositionState;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.PositionState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 4:
      var value = new proto.penumbra.core.component.dex.v1alpha1.Reserves;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.Reserves.deserializeBinaryFromReader);
      msg.setReserves(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCloseOnFill(value);
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
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.Position.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.Position} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.Position.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhi();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.TradingFunction.serializeBinaryToWriter
    );
  }
  f = message.getNonce_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.core.component.dex.v1alpha1.PositionState.serializeBinaryToWriter
    );
  }
  f = message.getReserves();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.penumbra.core.component.dex.v1alpha1.Reserves.serializeBinaryToWriter
    );
  }
  f = message.getCloseOnFill();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional TradingFunction phi = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.TradingFunction}
 */
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.getPhi = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.TradingFunction} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.TradingFunction, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.TradingFunction|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Position} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.setPhi = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Position} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.clearPhi = function() {
  return this.setPhi(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.hasPhi = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes nonce = 2;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.getNonce = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes nonce = 2;
 * This is a type-conversion wrapper around `getNonce()`
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.getNonce_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNonce()));
};


/**
 * optional bytes nonce = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNonce()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.getNonce_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNonce()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Position} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.setNonce = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional PositionState state = 3;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionState}
 */
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.getState = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionState} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.PositionState, 3));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionState|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Position} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Position} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.hasState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Reserves reserves = 4;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.Reserves}
 */
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.getReserves = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.Reserves} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.Reserves, 4));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.Reserves|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Position} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.setReserves = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Position} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.clearReserves = function() {
  return this.setReserves(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.hasReserves = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool close_on_fill = 5;
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.getCloseOnFill = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.Position} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.Position.prototype.setCloseOnFill = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.penumbra.core.component.dex.v1alpha1.PositionId.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.PositionId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.PositionId.toObject = function(includeInstance, msg) {
  var f, obj = {
    inner: msg.getInner_asB64(),
    altBech32m: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionId}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.PositionId;
  return proto.penumbra.core.component.dex.v1alpha1.PositionId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionId}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionId.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAltBech32m(value);
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
proto.penumbra.core.component.dex.v1alpha1.PositionId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.PositionId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.PositionId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInner_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAltBech32m();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes inner = 1;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionId.prototype.getInner = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes inner = 1;
 * This is a type-conversion wrapper around `getInner()`
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionId.prototype.getInner_asB64 = function() {
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
proto.penumbra.core.component.dex.v1alpha1.PositionId.prototype.getInner_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInner()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionId} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.PositionId.prototype.setInner = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string alt_bech32m = 2;
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionId.prototype.getAltBech32m = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionId} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.PositionId.prototype.setAltBech32m = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.penumbra.core.component.dex.v1alpha1.PositionState.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.PositionState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.PositionState.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionState}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.PositionState;
  return proto.penumbra.core.component.dex.v1alpha1.PositionState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionState}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.penumbra.core.component.dex.v1alpha1.PositionState.PositionStateEnum} */ (reader.readEnum());
      msg.setState(value);
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
proto.penumbra.core.component.dex.v1alpha1.PositionState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.PositionState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.PositionState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionState.PositionStateEnum = {
  POSITION_STATE_ENUM_UNSPECIFIED: 0,
  POSITION_STATE_ENUM_OPENED: 1,
  POSITION_STATE_ENUM_CLOSED: 2,
  POSITION_STATE_ENUM_WITHDRAWN: 3,
  POSITION_STATE_ENUM_CLAIMED: 4
};

/**
 * optional PositionStateEnum state = 1;
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionState.PositionStateEnum}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionState.prototype.getState = function() {
  return /** @type {!proto.penumbra.core.component.dex.v1alpha1.PositionState.PositionStateEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionState.PositionStateEnum} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionState} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.PositionState.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.penumbra.core.component.dex.v1alpha1.LpNft.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.LpNft.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LpNft} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LpNft.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionId: (f = msg.getPositionId()) && proto.penumbra.core.component.dex.v1alpha1.PositionId.toObject(includeInstance, f),
    state: (f = msg.getState()) && proto.penumbra.core.component.dex.v1alpha1.PositionState.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LpNft}
 */
proto.penumbra.core.component.dex.v1alpha1.LpNft.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.LpNft;
  return proto.penumbra.core.component.dex.v1alpha1.LpNft.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LpNft} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LpNft}
 */
proto.penumbra.core.component.dex.v1alpha1.LpNft.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.PositionId;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.PositionId.deserializeBinaryFromReader);
      msg.setPositionId(value);
      break;
    case 2:
      var value = new proto.penumbra.core.component.dex.v1alpha1.PositionState;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.PositionState.deserializeBinaryFromReader);
      msg.setState(value);
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
proto.penumbra.core.component.dex.v1alpha1.LpNft.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.LpNft.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LpNft} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LpNft.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.PositionId.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.component.dex.v1alpha1.PositionState.serializeBinaryToWriter
    );
  }
};


/**
 * optional PositionId position_id = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionId}
 */
proto.penumbra.core.component.dex.v1alpha1.LpNft.prototype.getPositionId = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionId} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.PositionId, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionId|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LpNft} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.LpNft.prototype.setPositionId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LpNft} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.LpNft.prototype.clearPositionId = function() {
  return this.setPositionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.LpNft.prototype.hasPositionId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PositionState state = 2;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionState}
 */
proto.penumbra.core.component.dex.v1alpha1.LpNft.prototype.getState = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionState} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.PositionState, 2));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionState|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LpNft} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.LpNft.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LpNft} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.LpNft.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.LpNft.prototype.hasState = function() {
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
proto.penumbra.core.component.dex.v1alpha1.PositionOpen.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.PositionOpen.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionOpen} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.PositionOpen.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.penumbra.core.component.dex.v1alpha1.Position.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionOpen}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionOpen.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.PositionOpen;
  return proto.penumbra.core.component.dex.v1alpha1.PositionOpen.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionOpen} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionOpen}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionOpen.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.Position;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.Position.deserializeBinaryFromReader);
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
proto.penumbra.core.component.dex.v1alpha1.PositionOpen.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.PositionOpen.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionOpen} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.PositionOpen.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional Position position = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.Position}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionOpen.prototype.getPosition = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.Position} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.Position, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.Position|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionOpen} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.PositionOpen.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionOpen} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.PositionOpen.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionOpen.prototype.hasPosition = function() {
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
proto.penumbra.core.component.dex.v1alpha1.PositionClose.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.PositionClose.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionClose} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.PositionClose.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionId: (f = msg.getPositionId()) && proto.penumbra.core.component.dex.v1alpha1.PositionId.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionClose}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionClose.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.PositionClose;
  return proto.penumbra.core.component.dex.v1alpha1.PositionClose.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionClose} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionClose}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionClose.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.PositionId;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.PositionId.deserializeBinaryFromReader);
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
proto.penumbra.core.component.dex.v1alpha1.PositionClose.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.PositionClose.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionClose} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.PositionClose.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.PositionId.serializeBinaryToWriter
    );
  }
};


/**
 * optional PositionId position_id = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionId}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionClose.prototype.getPositionId = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionId} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.PositionId, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionId|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionClose} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.PositionClose.prototype.setPositionId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionClose} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.PositionClose.prototype.clearPositionId = function() {
  return this.setPositionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionClose.prototype.hasPositionId = function() {
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
proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionId: (f = msg.getPositionId()) && proto.penumbra.core.component.dex.v1alpha1.PositionId.toObject(includeInstance, f),
    reservesCommitment: (f = msg.getReservesCommitment()) && penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw;
  return proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.PositionId;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.PositionId.deserializeBinaryFromReader);
      msg.setPositionId(value);
      break;
    case 2:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment.deserializeBinaryFromReader);
      msg.setReservesCommitment(value);
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
proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.PositionId.serializeBinaryToWriter
    );
  }
  f = message.getReservesCommitment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment.serializeBinaryToWriter
    );
  }
};


/**
 * optional PositionId position_id = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionId}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.prototype.getPositionId = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionId} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.PositionId, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionId|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.prototype.setPositionId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.prototype.clearPositionId = function() {
  return this.setPositionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.prototype.hasPositionId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.asset.v1alpha1.BalanceCommitment reserves_commitment = 2;
 * @return {?proto.penumbra.core.asset.v1alpha1.BalanceCommitment}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.prototype.getReservesCommitment = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.BalanceCommitment} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment, 2));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.BalanceCommitment|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.prototype.setReservesCommitment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.prototype.clearReservesCommitment = function() {
  return this.setReservesCommitment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw.prototype.hasReservesCommitment = function() {
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
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionId: (f = msg.getPositionId()) && proto.penumbra.core.component.dex.v1alpha1.PositionId.toObject(includeInstance, f),
    rewardsCommitment: (f = msg.getRewardsCommitment()) && penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim;
  return proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.PositionId;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.PositionId.deserializeBinaryFromReader);
      msg.setPositionId(value);
      break;
    case 2:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment.deserializeBinaryFromReader);
      msg.setRewardsCommitment(value);
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
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.PositionId.serializeBinaryToWriter
    );
  }
  f = message.getRewardsCommitment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment.serializeBinaryToWriter
    );
  }
};


/**
 * optional PositionId position_id = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionId}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.prototype.getPositionId = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionId} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.PositionId, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionId|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.prototype.setPositionId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.prototype.clearPositionId = function() {
  return this.setPositionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.prototype.hasPositionId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.asset.v1alpha1.BalanceCommitment rewards_commitment = 2;
 * @return {?proto.penumbra.core.asset.v1alpha1.BalanceCommitment}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.prototype.getRewardsCommitment = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.BalanceCommitment} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.BalanceCommitment, 2));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.BalanceCommitment|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.prototype.setRewardsCommitment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.prototype.clearRewardsCommitment = function() {
  return this.setRewardsCommitment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim.prototype.hasRewardsCommitment = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.repeatedFields_ = [1];



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
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapExecution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.toObject = function(includeInstance, msg) {
  var f, obj = {
    tracesList: jspb.Message.toObjectList(msg.getTracesList(),
    proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.toObject, includeInstance),
    input: (f = msg.getInput()) && penumbra_core_asset_v1alpha1_asset_pb.Value.toObject(includeInstance, f),
    output: (f = msg.getOutput()) && penumbra_core_asset_v1alpha1_asset_pb.Value.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapExecution;
  return proto.penumbra.core.component.dex.v1alpha1.SwapExecution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.deserializeBinaryFromReader);
      msg.addTraces(value);
      break;
    case 2:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.Value;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.Value.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 3:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.Value;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.Value.deserializeBinaryFromReader);
      msg.setOutput(value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapExecution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTracesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.serializeBinaryToWriter
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.Value.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.repeatedFields_ = [1];



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
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueList: jspb.Message.toObjectList(msg.getValueList(),
    penumbra_core_asset_v1alpha1_asset_pb.Value.toObject, includeInstance)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace;
  return proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.Value;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.Value.deserializeBinaryFromReader);
      msg.addValue(value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.Value.serializeBinaryToWriter
    );
  }
};


/**
 * repeated penumbra.core.asset.v1alpha1.Value value = 1;
 * @return {!Array<!proto.penumbra.core.asset.v1alpha1.Value>}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.prototype.getValueList = function() {
  return /** @type{!Array<!proto.penumbra.core.asset.v1alpha1.Value>} */ (
    jspb.Message.getRepeatedWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.Value, 1));
};


/**
 * @param {!Array<!proto.penumbra.core.asset.v1alpha1.Value>} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.prototype.setValueList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.penumbra.core.asset.v1alpha1.Value=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.core.asset.v1alpha1.Value}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.prototype.addValue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.penumbra.core.asset.v1alpha1.Value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace.prototype.clearValueList = function() {
  return this.setValueList([]);
};


/**
 * repeated Trace traces = 1;
 * @return {!Array<!proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace>}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.prototype.getTracesList = function() {
  return /** @type{!Array<!proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace, 1));
};


/**
 * @param {!Array<!proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace>} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.prototype.setTracesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.prototype.addTraces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.penumbra.core.component.dex.v1alpha1.SwapExecution.Trace, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.prototype.clearTracesList = function() {
  return this.setTracesList([]);
};


/**
 * optional penumbra.core.asset.v1alpha1.Value input = 2;
 * @return {?proto.penumbra.core.asset.v1alpha1.Value}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.prototype.getInput = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.Value} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.Value, 2));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.Value|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.prototype.hasInput = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.asset.v1alpha1.Value output = 3;
 * @return {?proto.penumbra.core.asset.v1alpha1.Value}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.prototype.getOutput = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.Value} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.Value, 3));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.Value|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.prototype.setOutput = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecution} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecution.prototype.hasOutput = function() {
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
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.toObject = function(includeInstance, msg) {
  var f, obj = {
    reserves: (f = msg.getReserves()) && proto.penumbra.core.component.dex.v1alpha1.Reserves.toObject(includeInstance, f),
    positionId: (f = msg.getPositionId()) && proto.penumbra.core.component.dex.v1alpha1.PositionId.toObject(includeInstance, f),
    pair: (f = msg.getPair()) && proto.penumbra.core.component.dex.v1alpha1.TradingPair.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan;
  return proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.Reserves;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.Reserves.deserializeBinaryFromReader);
      msg.setReserves(value);
      break;
    case 2:
      var value = new proto.penumbra.core.component.dex.v1alpha1.PositionId;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.PositionId.deserializeBinaryFromReader);
      msg.setPositionId(value);
      break;
    case 3:
      var value = new proto.penumbra.core.component.dex.v1alpha1.TradingPair;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.TradingPair.deserializeBinaryFromReader);
      msg.setPair(value);
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
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReserves();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.Reserves.serializeBinaryToWriter
    );
  }
  f = message.getPositionId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.component.dex.v1alpha1.PositionId.serializeBinaryToWriter
    );
  }
  f = message.getPair();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.core.component.dex.v1alpha1.TradingPair.serializeBinaryToWriter
    );
  }
};


/**
 * optional Reserves reserves = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.Reserves}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.prototype.getReserves = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.Reserves} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.Reserves, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.Reserves|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.prototype.setReserves = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.prototype.clearReserves = function() {
  return this.setReserves(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.prototype.hasReserves = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PositionId position_id = 2;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionId}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.prototype.getPositionId = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionId} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.PositionId, 2));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionId|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.prototype.setPositionId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.prototype.clearPositionId = function() {
  return this.setPositionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.prototype.hasPositionId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TradingPair pair = 3;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.TradingPair}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.prototype.getPair = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.TradingPair} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.TradingPair, 3));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.TradingPair|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.prototype.setPair = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.prototype.clearPair = function() {
  return this.setPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan.prototype.hasPair = function() {
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
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan.toObject = function(includeInstance, msg) {
  var f, obj = {
    reserves: (f = msg.getReserves()) && proto.penumbra.core.component.dex.v1alpha1.Reserves.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan;
  return proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.Reserves;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.Reserves.deserializeBinaryFromReader);
      msg.setReserves(value);
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
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReserves();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.Reserves.serializeBinaryToWriter
    );
  }
};


/**
 * optional Reserves reserves = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.Reserves}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan.prototype.getReserves = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.Reserves} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.Reserves, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.Reserves|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan.prototype.setReserves = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan.prototype.clearReserves = function() {
  return this.setReserves(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan.prototype.hasReserves = function() {
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
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tradingPair: (f = msg.getTradingPair()) && proto.penumbra.core.component.dex.v1alpha1.TradingPair.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest;
  return proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 3:
      var value = new proto.penumbra.core.component.dex.v1alpha1.TradingPair;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.TradingPair.deserializeBinaryFromReader);
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
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTradingPair();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.core.component.dex.v1alpha1.TradingPair.serializeBinaryToWriter
    );
  }
};


/**
 * optional string chain_id = 1;
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 height = 2;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional TradingPair trading_pair = 3;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.TradingPair}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.prototype.getTradingPair = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.TradingPair} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.TradingPair, 3));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.TradingPair|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.prototype.setTradingPair = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.prototype.clearTradingPair = function() {
  return this.setTradingPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataRequest.prototype.hasTradingPair = function() {
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
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse;
  return proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.deserializeBinaryFromReader);
      msg.setData(value);
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
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData.serializeBinaryToWriter
    );
  }
};


/**
 * optional BatchSwapOutputData data = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse.prototype.getData = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputData|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.BatchSwapOutputDataResponse.prototype.hasData = function() {
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
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tradingPair: (f = msg.getTradingPair()) && proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest;
  return proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 3:
      var value = new proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.deserializeBinaryFromReader);
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
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTradingPair();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.serializeBinaryToWriter
    );
  }
};


/**
 * optional string chain_id = 1;
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 height = 2;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional DirectedTradingPair trading_pair = 3;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.prototype.getTradingPair = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair, 3));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.prototype.setTradingPair = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.prototype.clearTradingPair = function() {
  return this.setTradingPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionRequest.prototype.hasTradingPair = function() {
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
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    swapExecution: (f = msg.getSwapExecution()) && proto.penumbra.core.component.dex.v1alpha1.SwapExecution.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse;
  return proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapExecution;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapExecution.deserializeBinaryFromReader);
      msg.setSwapExecution(value);
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
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwapExecution();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapExecution.serializeBinaryToWriter
    );
  }
};


/**
 * optional SwapExecution swap_execution = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapExecution}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse.prototype.getSwapExecution = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapExecution} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapExecution, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapExecution|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse.prototype.setSwapExecution = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse.prototype.clearSwapExecution = function() {
  return this.setSwapExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionResponse.prototype.hasSwapExecution = function() {
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
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest;
  return proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
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
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string chain_id = 1;
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 height = 2;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionRequest.prototype.setHeight = function(value) {
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
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    swapExecution: (f = msg.getSwapExecution()) && proto.penumbra.core.component.dex.v1alpha1.SwapExecution.toObject(includeInstance, f),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse;
  return proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapExecution;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapExecution.deserializeBinaryFromReader);
      msg.setSwapExecution(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
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
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwapExecution();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapExecution.serializeBinaryToWriter
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional SwapExecution swap_execution = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapExecution}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse.prototype.getSwapExecution = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapExecution} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapExecution, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapExecution|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse.prototype.setSwapExecution = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse.prototype.clearSwapExecution = function() {
  return this.setSwapExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse.prototype.hasSwapExecution = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 height = 2;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionResponse.prototype.setHeight = function(value) {
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
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startHeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endHeight: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tradingPair: (f = msg.getTradingPair()) && proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest;
  return proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartHeight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEndHeight(value);
      break;
    case 4:
      var value = new proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.deserializeBinaryFromReader);
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
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getEndHeight();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getTradingPair();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.serializeBinaryToWriter
    );
  }
};


/**
 * optional string chain_id = 1;
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 start_height = 2;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.prototype.getStartHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.prototype.setStartHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 end_height = 3;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.prototype.getEndHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.prototype.setEndHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional DirectedTradingPair trading_pair = 4;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.prototype.getTradingPair = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair, 4));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.prototype.setTradingPair = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.prototype.clearTradingPair = function() {
  return this.setTradingPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsRequest.prototype.hasTradingPair = function() {
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
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    swapExecution: (f = msg.getSwapExecution()) && proto.penumbra.core.component.dex.v1alpha1.SwapExecution.toObject(includeInstance, f),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tradingPair: (f = msg.getTradingPair()) && proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse;
  return proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapExecution;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapExecution.deserializeBinaryFromReader);
      msg.setSwapExecution(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 3:
      var value = new proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.deserializeBinaryFromReader);
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
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwapExecution();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapExecution.serializeBinaryToWriter
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTradingPair();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.serializeBinaryToWriter
    );
  }
};


/**
 * optional SwapExecution swap_execution = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapExecution}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.prototype.getSwapExecution = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapExecution} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapExecution, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapExecution|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.prototype.setSwapExecution = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.prototype.clearSwapExecution = function() {
  return this.setSwapExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.prototype.hasSwapExecution = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 height = 2;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional DirectedTradingPair trading_pair = 3;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.prototype.getTradingPair = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair, 3));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.prototype.setTradingPair = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.prototype.clearTradingPair = function() {
  return this.setTradingPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SwapExecutionsResponse.prototype.hasTradingPair = function() {
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
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startHeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endHeight: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest;
  return proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartHeight(value);
      break;
    case 3:
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
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getEndHeight();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string chain_id = 1;
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 start_height = 2;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest.prototype.getStartHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest.prototype.setStartHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 end_height = 3;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest.prototype.getEndHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsRequest.prototype.setEndHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    swapExecution: (f = msg.getSwapExecution()) && proto.penumbra.core.component.dex.v1alpha1.SwapExecution.toObject(includeInstance, f),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse;
  return proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapExecution;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapExecution.deserializeBinaryFromReader);
      msg.setSwapExecution(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
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
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwapExecution();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapExecution.serializeBinaryToWriter
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional SwapExecution swap_execution = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapExecution}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse.prototype.getSwapExecution = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapExecution} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapExecution, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapExecution|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse.prototype.setSwapExecution = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse.prototype.clearSwapExecution = function() {
  return this.setSwapExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse.prototype.hasSwapExecution = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 height = 2;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.ArbExecutionsResponse.prototype.setHeight = function(value) {
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    includeClosed: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest;
  return proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeClosed(value);
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIncludeClosed();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string chain_id = 1;
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool include_closed = 4;
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest.prototype.getIncludeClosed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsRequest.prototype.setIncludeClosed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.penumbra.core.component.dex.v1alpha1.Position.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse;
  return proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.Position;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.Position.deserializeBinaryFromReader);
      msg.setData(value);
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional Position data = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.Position}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse.prototype.getData = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.Position} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.Position, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.Position|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsResponse.prototype.hasData = function() {
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    positionId: (f = msg.getPositionId()) && proto.penumbra.core.component.dex.v1alpha1.PositionId.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest;
  return proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
      break;
    case 2:
      var value = new proto.penumbra.core.component.dex.v1alpha1.PositionId;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.PositionId.deserializeBinaryFromReader);
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPositionId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.component.dex.v1alpha1.PositionId.serializeBinaryToWriter
    );
  }
};


/**
 * optional string chain_id = 1;
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PositionId position_id = 2;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionId}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest.prototype.getPositionId = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionId} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.PositionId, 2));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionId|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest.prototype.setPositionId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest.prototype.clearPositionId = function() {
  return this.setPositionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdRequest.prototype.hasPositionId = function() {
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.penumbra.core.component.dex.v1alpha1.Position.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse;
  return proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.Position;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.Position.deserializeBinaryFromReader);
      msg.setData(value);
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional Position data = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.Position}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse.prototype.getData = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.Position} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.Position, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.Position|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionByIdResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.repeatedFields_ = [2];



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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    positionIdList: jspb.Message.toObjectList(msg.getPositionIdList(),
    proto.penumbra.core.component.dex.v1alpha1.PositionId.toObject, includeInstance)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest;
  return proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
      break;
    case 2:
      var value = new proto.penumbra.core.component.dex.v1alpha1.PositionId;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.PositionId.deserializeBinaryFromReader);
      msg.addPositionId(value);
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPositionIdList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.penumbra.core.component.dex.v1alpha1.PositionId.serializeBinaryToWriter
    );
  }
};


/**
 * optional string chain_id = 1;
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated PositionId position_id = 2;
 * @return {!Array<!proto.penumbra.core.component.dex.v1alpha1.PositionId>}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.prototype.getPositionIdList = function() {
  return /** @type{!Array<!proto.penumbra.core.component.dex.v1alpha1.PositionId>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.PositionId, 2));
};


/**
 * @param {!Array<!proto.penumbra.core.component.dex.v1alpha1.PositionId>} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.prototype.setPositionIdList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.penumbra.core.component.dex.v1alpha1.PositionId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.core.component.dex.v1alpha1.PositionId}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.prototype.addPositionId = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.penumbra.core.component.dex.v1alpha1.PositionId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdRequest.prototype.clearPositionIdList = function() {
  return this.setPositionIdList([]);
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.penumbra.core.component.dex.v1alpha1.Position.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse;
  return proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.Position;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.Position.deserializeBinaryFromReader);
      msg.setData(value);
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional Position data = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.Position}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse.prototype.getData = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.Position} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.Position, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.Position|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByIdResponse.prototype.hasData = function() {
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tradingPair: (f = msg.getTradingPair()) && proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest;
  return proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
      break;
    case 2:
      var value = new proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.deserializeBinaryFromReader);
      msg.setTradingPair(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTradingPair();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional string chain_id = 1;
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DirectedTradingPair trading_pair = 2;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.prototype.getTradingPair = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair, 2));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.DirectedTradingPair|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.prototype.setTradingPair = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.prototype.clearTradingPair = function() {
  return this.setTradingPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.prototype.hasTradingPair = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 limit = 5;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.penumbra.core.component.dex.v1alpha1.Position.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse;
  return proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.Position;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.Position.deserializeBinaryFromReader);
      msg.setData(value);
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
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional Position data = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.Position}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse.prototype.getData = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.Position} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.Position, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.Position|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.LiquidityPositionsByPriceResponse.prototype.hasData = function() {
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
proto.penumbra.core.component.dex.v1alpha1.SpreadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SpreadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SpreadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tradingPair: (f = msg.getTradingPair()) && proto.penumbra.core.component.dex.v1alpha1.TradingPair.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SpreadRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SpreadRequest;
  return proto.penumbra.core.component.dex.v1alpha1.SpreadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SpreadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SpreadRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
      break;
    case 2:
      var value = new proto.penumbra.core.component.dex.v1alpha1.TradingPair;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.TradingPair.deserializeBinaryFromReader);
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
proto.penumbra.core.component.dex.v1alpha1.SpreadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SpreadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SpreadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTradingPair();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.component.dex.v1alpha1.TradingPair.serializeBinaryToWriter
    );
  }
};


/**
 * optional string chain_id = 1;
 * @return {string}
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadRequest.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SpreadRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TradingPair trading_pair = 2;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.TradingPair}
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadRequest.prototype.getTradingPair = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.TradingPair} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.TradingPair, 2));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.TradingPair|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SpreadRequest} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SpreadRequest.prototype.setTradingPair = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SpreadRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadRequest.prototype.clearTradingPair = function() {
  return this.setTradingPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadRequest.prototype.hasTradingPair = function() {
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
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SpreadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    best1To2Position: (f = msg.getBest1To2Position()) && proto.penumbra.core.component.dex.v1alpha1.Position.toObject(includeInstance, f),
    best2To1Position: (f = msg.getBest2To1Position()) && proto.penumbra.core.component.dex.v1alpha1.Position.toObject(includeInstance, f),
    approxEffectivePrice1To2: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    approxEffectivePrice2To1: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SpreadResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SpreadResponse;
  return proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SpreadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SpreadResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.Position;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.Position.deserializeBinaryFromReader);
      msg.setBest1To2Position(value);
      break;
    case 2:
      var value = new proto.penumbra.core.component.dex.v1alpha1.Position;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.Position.deserializeBinaryFromReader);
      msg.setBest2To1Position(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setApproxEffectivePrice1To2(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setApproxEffectivePrice2To1(value);
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
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SpreadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBest1To2Position();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.Position.serializeBinaryToWriter
    );
  }
  f = message.getBest2To1Position();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.component.dex.v1alpha1.Position.serializeBinaryToWriter
    );
  }
  f = message.getApproxEffectivePrice1To2();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getApproxEffectivePrice2To1();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional Position best_1_to_2_position = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.Position}
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.prototype.getBest1To2Position = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.Position} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.Position, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.Position|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SpreadResponse} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.prototype.setBest1To2Position = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SpreadResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.prototype.clearBest1To2Position = function() {
  return this.setBest1To2Position(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.prototype.hasBest1To2Position = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Position best_2_to_1_position = 2;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.Position}
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.prototype.getBest2To1Position = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.Position} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.Position, 2));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.Position|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SpreadResponse} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.prototype.setBest2To1Position = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SpreadResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.prototype.clearBest2To1Position = function() {
  return this.setBest2To1Position(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.prototype.hasBest2To1Position = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double approx_effective_price_1_to_2 = 3;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.prototype.getApproxEffectivePrice1To2 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SpreadResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.prototype.setApproxEffectivePrice1To2 = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double approx_effective_price_2_to_1 = 4;
 * @return {number}
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.prototype.getApproxEffectivePrice2To1 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SpreadResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SpreadResponse.prototype.setApproxEffectivePrice2To1 = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
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
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    input: (f = msg.getInput()) && penumbra_core_asset_v1alpha1_asset_pb.Value.toObject(includeInstance, f),
    output: (f = msg.getOutput()) && penumbra_core_asset_v1alpha1_asset_pb.AssetId.toObject(includeInstance, f),
    routing: (f = msg.getRouting()) && proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest;
  return proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.Value;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.Value.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 2:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.AssetId;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.AssetId.deserializeBinaryFromReader);
      msg.setOutput(value);
      break;
    case 3:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.deserializeBinaryFromReader);
      msg.setRouting(value);
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
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.AssetId.serializeBinaryToWriter
    );
  }
  f = message.getRouting();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SettingCase = {
  SETTING_NOT_SET: 0,
  DEFAULT: 1,
  SINGLE_HOP: 2
};

/**
 * @return {proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SettingCase}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.prototype.getSettingCase = function() {
  return /** @type {proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SettingCase} */(jspb.Message.computeOneofCase(this, proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.oneofGroups_[0]));
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
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_default: (f = msg.getDefault()) && proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default.toObject(includeInstance, f),
    singleHop: (f = msg.getSingleHop()) && proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing;
  return proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default.deserializeBinaryFromReader);
      msg.setDefault(value);
      break;
    case 2:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop.deserializeBinaryFromReader);
      msg.setSingleHop(value);
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
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefault();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default.serializeBinaryToWriter
    );
  }
  f = message.getSingleHop();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop.serializeBinaryToWriter
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
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop.toObject = function(includeInstance, msg) {
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop;
  return proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop.deserializeBinaryFromReader = function(msg, reader) {
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
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop.serializeBinaryToWriter = function(message, writer) {
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
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default.toObject = function(includeInstance, msg) {
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default;
  return proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default.deserializeBinaryFromReader = function(msg, reader) {
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
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional Default default = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.prototype.getDefault = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.Default|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.prototype.setDefault = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.prototype.clearDefault = function() {
  return this.setDefault(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.prototype.hasDefault = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SingleHop single_hop = 2;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.prototype.getSingleHop = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop, 2));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.SingleHop|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.prototype.setSingleHop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.prototype.clearSingleHop = function() {
  return this.setSingleHop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing.prototype.hasSingleHop = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.asset.v1alpha1.Value input = 1;
 * @return {?proto.penumbra.core.asset.v1alpha1.Value}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.prototype.getInput = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.Value} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.Value, 1));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.Value|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.prototype.hasInput = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.asset.v1alpha1.AssetId output = 2;
 * @return {?proto.penumbra.core.asset.v1alpha1.AssetId}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.prototype.getOutput = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.AssetId} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.AssetId, 2));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.AssetId|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.prototype.setOutput = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Routing routing = 3;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.prototype.getRouting = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing, 3));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.Routing|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.prototype.setRouting = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.prototype.clearRouting = function() {
  return this.setRouting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeRequest.prototype.hasRouting = function() {
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
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    output: (f = msg.getOutput()) && proto.penumbra.core.component.dex.v1alpha1.SwapExecution.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse;
  return proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.dex.v1alpha1.SwapExecution;
      reader.readMessage(value,proto.penumbra.core.component.dex.v1alpha1.SwapExecution.deserializeBinaryFromReader);
      msg.setOutput(value);
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
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.dex.v1alpha1.SwapExecution.serializeBinaryToWriter
    );
  }
};


/**
 * optional SwapExecution output = 1;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapExecution}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse.prototype.getOutput = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapExecution} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.dex.v1alpha1.SwapExecution, 1));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapExecution|undefined} value
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse} returns this
*/
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse.prototype.setOutput = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse} returns this
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.dex.v1alpha1.SimulateTradeResponse.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.penumbra.core.component.dex.v1alpha1);
