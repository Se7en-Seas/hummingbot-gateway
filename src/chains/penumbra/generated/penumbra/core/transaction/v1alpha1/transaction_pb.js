// source: penumbra/core/transaction/v1alpha1/transaction.proto
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

var penumbra_crypto_tct_v1alpha1_tct_pb = require('../../../../penumbra/crypto/tct/v1alpha1/tct_pb.js');
goog.object.extend(proto, penumbra_crypto_tct_v1alpha1_tct_pb);
var penumbra_crypto_decaf377_fmd_v1alpha1_decaf377_fmd_pb = require('../../../../penumbra/crypto/decaf377_fmd/v1alpha1/decaf377_fmd_pb.js');
goog.object.extend(proto, penumbra_crypto_decaf377_fmd_v1alpha1_decaf377_fmd_pb);
var penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb = require('../../../../penumbra/crypto/decaf377_rdsa/v1alpha1/decaf377_rdsa_pb.js');
goog.object.extend(proto, penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb);
var penumbra_core_asset_v1alpha1_asset_pb = require('../../../../penumbra/core/asset/v1alpha1/asset_pb.js');
goog.object.extend(proto, penumbra_core_asset_v1alpha1_asset_pb);
var penumbra_core_keys_v1alpha1_keys_pb = require('../../../../penumbra/core/keys/v1alpha1/keys_pb.js');
goog.object.extend(proto, penumbra_core_keys_v1alpha1_keys_pb);
var penumbra_core_component_sct_v1alpha1_sct_pb = require('../../../../penumbra/core/component/sct/v1alpha1/sct_pb.js');
goog.object.extend(proto, penumbra_core_component_sct_v1alpha1_sct_pb);
var penumbra_core_component_chain_v1alpha1_chain_pb = require('../../../../penumbra/core/component/chain/v1alpha1/chain_pb.js');
goog.object.extend(proto, penumbra_core_component_chain_v1alpha1_chain_pb);
var penumbra_core_component_fee_v1alpha1_fee_pb = require('../../../../penumbra/core/component/fee/v1alpha1/fee_pb.js');
goog.object.extend(proto, penumbra_core_component_fee_v1alpha1_fee_pb);
var penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb = require('../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb.js');
goog.object.extend(proto, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb);
var penumbra_core_component_dex_v1alpha1_dex_pb = require('../../../../penumbra/core/component/dex/v1alpha1/dex_pb.js');
goog.object.extend(proto, penumbra_core_component_dex_v1alpha1_dex_pb);
var penumbra_core_component_ibc_v1alpha1_ibc_pb = require('../../../../penumbra/core/component/ibc/v1alpha1/ibc_pb.js');
goog.object.extend(proto, penumbra_core_component_ibc_v1alpha1_ibc_pb);
var penumbra_core_component_stake_v1alpha1_stake_pb = require('../../../../penumbra/core/component/stake/v1alpha1/stake_pb.js');
goog.object.extend(proto, penumbra_core_component_stake_v1alpha1_stake_pb);
var penumbra_core_component_governance_v1alpha1_governance_pb = require('../../../../penumbra/core/component/governance/v1alpha1/governance_pb.js');
goog.object.extend(proto, penumbra_core_component_governance_v1alpha1_governance_pb);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.Action', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.Action.ActionCase', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.ActionPlan', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.ActionPlan.ActionCase', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.ActionView', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.ActionView.ActionViewCase', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.AuthorizationData', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.CluePlan', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.DetectionData', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.Id', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.MemoCiphertext', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.MemoData', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.MemoPlaintext', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.MemoPlan', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.MemoView', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.MemoView.MemoViewCase', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.MemoView.Visible', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.NullifierWithNote', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.Transaction', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.TransactionBody', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.TransactionBodyView', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.TransactionParameters', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.TransactionPerspective', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.TransactionPlan', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.TransactionView', null, global);
goog.exportSymbol('proto.penumbra.core.transaction.v1alpha1.WitnessData', null, global);
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
proto.penumbra.core.transaction.v1alpha1.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.Transaction.displayName = 'proto.penumbra.core.transaction.v1alpha1.Transaction';
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
proto.penumbra.core.transaction.v1alpha1.Id = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.Id, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.Id.displayName = 'proto.penumbra.core.transaction.v1alpha1.Id';
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
proto.penumbra.core.transaction.v1alpha1.TransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.core.transaction.v1alpha1.TransactionBody.repeatedFields_, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.TransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.TransactionBody.displayName = 'proto.penumbra.core.transaction.v1alpha1.TransactionBody';
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
proto.penumbra.core.transaction.v1alpha1.MemoData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.MemoData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.MemoData.displayName = 'proto.penumbra.core.transaction.v1alpha1.MemoData';
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
proto.penumbra.core.transaction.v1alpha1.TransactionParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.TransactionParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.TransactionParameters.displayName = 'proto.penumbra.core.transaction.v1alpha1.TransactionParameters';
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
proto.penumbra.core.transaction.v1alpha1.DetectionData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.core.transaction.v1alpha1.DetectionData.repeatedFields_, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.DetectionData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.DetectionData.displayName = 'proto.penumbra.core.transaction.v1alpha1.DetectionData';
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
proto.penumbra.core.transaction.v1alpha1.Action = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.Action, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.Action.displayName = 'proto.penumbra.core.transaction.v1alpha1.Action';
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
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.repeatedFields_, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.TransactionPerspective, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.displayName = 'proto.penumbra.core.transaction.v1alpha1.TransactionPerspective';
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
proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.displayName = 'proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment';
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
proto.penumbra.core.transaction.v1alpha1.NullifierWithNote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.NullifierWithNote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.displayName = 'proto.penumbra.core.transaction.v1alpha1.NullifierWithNote';
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
proto.penumbra.core.transaction.v1alpha1.TransactionView = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.TransactionView, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.TransactionView.displayName = 'proto.penumbra.core.transaction.v1alpha1.TransactionView';
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
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.repeatedFields_, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.TransactionBodyView, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.displayName = 'proto.penumbra.core.transaction.v1alpha1.TransactionBodyView';
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
proto.penumbra.core.transaction.v1alpha1.ActionView = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.ActionView, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.ActionView.displayName = 'proto.penumbra.core.transaction.v1alpha1.ActionView';
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
proto.penumbra.core.transaction.v1alpha1.AuthorizationData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.core.transaction.v1alpha1.AuthorizationData.repeatedFields_, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.AuthorizationData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.AuthorizationData.displayName = 'proto.penumbra.core.transaction.v1alpha1.AuthorizationData';
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
proto.penumbra.core.transaction.v1alpha1.WitnessData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.core.transaction.v1alpha1.WitnessData.repeatedFields_, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.WitnessData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.WitnessData.displayName = 'proto.penumbra.core.transaction.v1alpha1.WitnessData';
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
proto.penumbra.core.transaction.v1alpha1.TransactionPlan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.core.transaction.v1alpha1.TransactionPlan.repeatedFields_, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.TransactionPlan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.TransactionPlan.displayName = 'proto.penumbra.core.transaction.v1alpha1.TransactionPlan';
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
proto.penumbra.core.transaction.v1alpha1.ActionPlan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.ActionPlan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.ActionPlan.displayName = 'proto.penumbra.core.transaction.v1alpha1.ActionPlan';
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
proto.penumbra.core.transaction.v1alpha1.CluePlan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.CluePlan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.CluePlan.displayName = 'proto.penumbra.core.transaction.v1alpha1.CluePlan';
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
proto.penumbra.core.transaction.v1alpha1.MemoPlan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.MemoPlan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.MemoPlan.displayName = 'proto.penumbra.core.transaction.v1alpha1.MemoPlan';
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
proto.penumbra.core.transaction.v1alpha1.MemoCiphertext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.MemoCiphertext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.displayName = 'proto.penumbra.core.transaction.v1alpha1.MemoCiphertext';
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
proto.penumbra.core.transaction.v1alpha1.MemoPlaintext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.MemoPlaintext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.displayName = 'proto.penumbra.core.transaction.v1alpha1.MemoPlaintext';
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
proto.penumbra.core.transaction.v1alpha1.MemoView = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.penumbra.core.transaction.v1alpha1.MemoView.oneofGroups_);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.MemoView, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.MemoView.displayName = 'proto.penumbra.core.transaction.v1alpha1.MemoView';
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
proto.penumbra.core.transaction.v1alpha1.MemoView.Visible = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.MemoView.Visible, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.displayName = 'proto.penumbra.core.transaction.v1alpha1.MemoView.Visible';
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
proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque.displayName = 'proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque';
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
proto.penumbra.core.transaction.v1alpha1.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    body: (f = msg.getBody()) && proto.penumbra.core.transaction.v1alpha1.TransactionBody.toObject(includeInstance, f),
    bindingSig: msg.getBindingSig_asB64(),
    anchor: (f = msg.getAnchor()) && penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.Transaction}
 */
proto.penumbra.core.transaction.v1alpha1.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.Transaction;
  return proto.penumbra.core.transaction.v1alpha1.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Transaction}
 */
proto.penumbra.core.transaction.v1alpha1.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.transaction.v1alpha1.TransactionBody;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.TransactionBody.deserializeBinaryFromReader);
      msg.setBody(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBindingSig(value);
      break;
    case 3:
      var value = new penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot;
      reader.readMessage(value,penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot.deserializeBinaryFromReader);
      msg.setAnchor(value);
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
proto.penumbra.core.transaction.v1alpha1.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.transaction.v1alpha1.TransactionBody.serializeBinaryToWriter
    );
  }
  f = message.getBindingSig_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAnchor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransactionBody body = 1;
 * @return {?proto.penumbra.core.transaction.v1alpha1.TransactionBody}
 */
proto.penumbra.core.transaction.v1alpha1.Transaction.prototype.getBody = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.TransactionBody} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.transaction.v1alpha1.TransactionBody, 1));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.TransactionBody|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Transaction} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Transaction.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Transaction} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Transaction.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Transaction.prototype.hasBody = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes binding_sig = 2;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.transaction.v1alpha1.Transaction.prototype.getBindingSig = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes binding_sig = 2;
 * This is a type-conversion wrapper around `getBindingSig()`
 * @return {string}
 */
proto.penumbra.core.transaction.v1alpha1.Transaction.prototype.getBindingSig_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBindingSig()));
};


/**
 * optional bytes binding_sig = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBindingSig()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.transaction.v1alpha1.Transaction.prototype.getBindingSig_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBindingSig()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Transaction} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Transaction.prototype.setBindingSig = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional penumbra.crypto.tct.v1alpha1.MerkleRoot anchor = 3;
 * @return {?proto.penumbra.crypto.tct.v1alpha1.MerkleRoot}
 */
proto.penumbra.core.transaction.v1alpha1.Transaction.prototype.getAnchor = function() {
  return /** @type{?proto.penumbra.crypto.tct.v1alpha1.MerkleRoot} */ (
    jspb.Message.getWrapperField(this, penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot, 3));
};


/**
 * @param {?proto.penumbra.crypto.tct.v1alpha1.MerkleRoot|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Transaction} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Transaction.prototype.setAnchor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Transaction} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Transaction.prototype.clearAnchor = function() {
  return this.setAnchor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Transaction.prototype.hasAnchor = function() {
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
proto.penumbra.core.transaction.v1alpha1.Id.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.Id.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.Id} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.Id.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: msg.getHash_asB64()
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.Id}
 */
proto.penumbra.core.transaction.v1alpha1.Id.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.Id;
  return proto.penumbra.core.transaction.v1alpha1.Id.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.Id} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Id}
 */
proto.penumbra.core.transaction.v1alpha1.Id.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
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
proto.penumbra.core.transaction.v1alpha1.Id.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.Id.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.Id} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.Id.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.transaction.v1alpha1.Id.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes hash = 1;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.penumbra.core.transaction.v1alpha1.Id.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.transaction.v1alpha1.Id.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Id} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Id.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.repeatedFields_ = [1];



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
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.TransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.penumbra.core.transaction.v1alpha1.Action.toObject, includeInstance),
    transactionParameters: (f = msg.getTransactionParameters()) && proto.penumbra.core.transaction.v1alpha1.TransactionParameters.toObject(includeInstance, f),
    fee: (f = msg.getFee()) && penumbra_core_component_fee_v1alpha1_fee_pb.Fee.toObject(includeInstance, f),
    detectionData: (f = msg.getDetectionData()) && proto.penumbra.core.transaction.v1alpha1.DetectionData.toObject(includeInstance, f),
    memoData: (f = msg.getMemoData()) && proto.penumbra.core.transaction.v1alpha1.MemoData.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBody}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.TransactionBody;
  return proto.penumbra.core.transaction.v1alpha1.TransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBody}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.transaction.v1alpha1.Action;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    case 2:
      var value = new proto.penumbra.core.transaction.v1alpha1.TransactionParameters;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.TransactionParameters.deserializeBinaryFromReader);
      msg.setTransactionParameters(value);
      break;
    case 3:
      var value = new penumbra_core_component_fee_v1alpha1_fee_pb.Fee;
      reader.readMessage(value,penumbra_core_component_fee_v1alpha1_fee_pb.Fee.deserializeBinaryFromReader);
      msg.setFee(value);
      break;
    case 4:
      var value = new proto.penumbra.core.transaction.v1alpha1.DetectionData;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.DetectionData.deserializeBinaryFromReader);
      msg.setDetectionData(value);
      break;
    case 5:
      var value = new proto.penumbra.core.transaction.v1alpha1.MemoData;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.MemoData.deserializeBinaryFromReader);
      msg.setMemoData(value);
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
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.TransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.penumbra.core.transaction.v1alpha1.Action.serializeBinaryToWriter
    );
  }
  f = message.getTransactionParameters();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.transaction.v1alpha1.TransactionParameters.serializeBinaryToWriter
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
  f = message.getDetectionData();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.penumbra.core.transaction.v1alpha1.DetectionData.serializeBinaryToWriter
    );
  }
  f = message.getMemoData();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.penumbra.core.transaction.v1alpha1.MemoData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Action actions = 1;
 * @return {!Array<!proto.penumbra.core.transaction.v1alpha1.Action>}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.penumbra.core.transaction.v1alpha1.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.core.transaction.v1alpha1.Action, 1));
};


/**
 * @param {!Array<!proto.penumbra.core.transaction.v1alpha1.Action>} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBody} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.penumbra.core.transaction.v1alpha1.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.penumbra.core.transaction.v1alpha1.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBody} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};


/**
 * optional TransactionParameters transaction_parameters = 2;
 * @return {?proto.penumbra.core.transaction.v1alpha1.TransactionParameters}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.getTransactionParameters = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.TransactionParameters} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.transaction.v1alpha1.TransactionParameters, 2));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.TransactionParameters|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBody} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.setTransactionParameters = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBody} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.clearTransactionParameters = function() {
  return this.setTransactionParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.hasTransactionParameters = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.component.fee.v1alpha1.Fee fee = 3;
 * @return {?proto.penumbra.core.component.fee.v1alpha1.Fee}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.getFee = function() {
  return /** @type{?proto.penumbra.core.component.fee.v1alpha1.Fee} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_fee_v1alpha1_fee_pb.Fee, 3));
};


/**
 * @param {?proto.penumbra.core.component.fee.v1alpha1.Fee|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBody} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.setFee = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBody} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.clearFee = function() {
  return this.setFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.hasFee = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DetectionData detection_data = 4;
 * @return {?proto.penumbra.core.transaction.v1alpha1.DetectionData}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.getDetectionData = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.DetectionData} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.transaction.v1alpha1.DetectionData, 4));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.DetectionData|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBody} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.setDetectionData = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBody} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.clearDetectionData = function() {
  return this.setDetectionData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.hasDetectionData = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MemoData memo_data = 5;
 * @return {?proto.penumbra.core.transaction.v1alpha1.MemoData}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.getMemoData = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.MemoData} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.transaction.v1alpha1.MemoData, 5));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.MemoData|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBody} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.setMemoData = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBody} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.clearMemoData = function() {
  return this.setMemoData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBody.prototype.hasMemoData = function() {
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
proto.penumbra.core.transaction.v1alpha1.MemoData.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.MemoData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.MemoData.toObject = function(includeInstance, msg) {
  var f, obj = {
    encryptedMemo: msg.getEncryptedMemo_asB64()
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoData}
 */
proto.penumbra.core.transaction.v1alpha1.MemoData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.MemoData;
  return proto.penumbra.core.transaction.v1alpha1.MemoData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoData}
 */
proto.penumbra.core.transaction.v1alpha1.MemoData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEncryptedMemo(value);
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
proto.penumbra.core.transaction.v1alpha1.MemoData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.MemoData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.MemoData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEncryptedMemo_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes encrypted_memo = 1;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.transaction.v1alpha1.MemoData.prototype.getEncryptedMemo = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes encrypted_memo = 1;
 * This is a type-conversion wrapper around `getEncryptedMemo()`
 * @return {string}
 */
proto.penumbra.core.transaction.v1alpha1.MemoData.prototype.getEncryptedMemo_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEncryptedMemo()));
};


/**
 * optional bytes encrypted_memo = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEncryptedMemo()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.transaction.v1alpha1.MemoData.prototype.getEncryptedMemo_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEncryptedMemo()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoData} returns this
 */
proto.penumbra.core.transaction.v1alpha1.MemoData.prototype.setEncryptedMemo = function(value) {
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
proto.penumbra.core.transaction.v1alpha1.TransactionParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.TransactionParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.TransactionParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    expiryHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    chainId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionParameters}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.TransactionParameters;
  return proto.penumbra.core.transaction.v1alpha1.TransactionParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionParameters}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionParameters.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
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
proto.penumbra.core.transaction.v1alpha1.TransactionParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.TransactionParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.TransactionParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExpiryHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 expiry_height = 1;
 * @return {number}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionParameters.prototype.getExpiryHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionParameters} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionParameters.prototype.setExpiryHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string chain_id = 2;
 * @return {string}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionParameters.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionParameters} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionParameters.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.core.transaction.v1alpha1.DetectionData.repeatedFields_ = [4];



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
proto.penumbra.core.transaction.v1alpha1.DetectionData.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.DetectionData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.DetectionData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.DetectionData.toObject = function(includeInstance, msg) {
  var f, obj = {
    fmdCluesList: jspb.Message.toObjectList(msg.getFmdCluesList(),
    penumbra_crypto_decaf377_fmd_v1alpha1_decaf377_fmd_pb.Clue.toObject, includeInstance)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.DetectionData}
 */
proto.penumbra.core.transaction.v1alpha1.DetectionData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.DetectionData;
  return proto.penumbra.core.transaction.v1alpha1.DetectionData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.DetectionData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.DetectionData}
 */
proto.penumbra.core.transaction.v1alpha1.DetectionData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new penumbra_crypto_decaf377_fmd_v1alpha1_decaf377_fmd_pb.Clue;
      reader.readMessage(value,penumbra_crypto_decaf377_fmd_v1alpha1_decaf377_fmd_pb.Clue.deserializeBinaryFromReader);
      msg.addFmdClues(value);
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
proto.penumbra.core.transaction.v1alpha1.DetectionData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.DetectionData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.DetectionData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.DetectionData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFmdCluesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      penumbra_crypto_decaf377_fmd_v1alpha1_decaf377_fmd_pb.Clue.serializeBinaryToWriter
    );
  }
};


/**
 * repeated penumbra.crypto.decaf377_fmd.v1alpha1.Clue fmd_clues = 4;
 * @return {!Array<!proto.penumbra.crypto.decaf377_fmd.v1alpha1.Clue>}
 */
proto.penumbra.core.transaction.v1alpha1.DetectionData.prototype.getFmdCluesList = function() {
  return /** @type{!Array<!proto.penumbra.crypto.decaf377_fmd.v1alpha1.Clue>} */ (
    jspb.Message.getRepeatedWrapperField(this, penumbra_crypto_decaf377_fmd_v1alpha1_decaf377_fmd_pb.Clue, 4));
};


/**
 * @param {!Array<!proto.penumbra.crypto.decaf377_fmd.v1alpha1.Clue>} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.DetectionData} returns this
*/
proto.penumbra.core.transaction.v1alpha1.DetectionData.prototype.setFmdCluesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.penumbra.crypto.decaf377_fmd.v1alpha1.Clue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.crypto.decaf377_fmd.v1alpha1.Clue}
 */
proto.penumbra.core.transaction.v1alpha1.DetectionData.prototype.addFmdClues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.penumbra.crypto.decaf377_fmd.v1alpha1.Clue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.core.transaction.v1alpha1.DetectionData} returns this
 */
proto.penumbra.core.transaction.v1alpha1.DetectionData.prototype.clearFmdCluesList = function() {
  return this.setFmdCluesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_ = [[1,2,3,4,16,17,18,19,20,21,22,30,31,32,34,40,41,42,50,51,52,200]];

/**
 * @enum {number}
 */
proto.penumbra.core.transaction.v1alpha1.Action.ActionCase = {
  ACTION_NOT_SET: 0,
  SPEND: 1,
  OUTPUT: 2,
  SWAP: 3,
  SWAP_CLAIM: 4,
  VALIDATOR_DEFINITION: 16,
  IBC_ACTION: 17,
  PROPOSAL_SUBMIT: 18,
  PROPOSAL_WITHDRAW: 19,
  VALIDATOR_VOTE: 20,
  DELEGATOR_VOTE: 21,
  PROPOSAL_DEPOSIT_CLAIM: 22,
  POSITION_OPEN: 30,
  POSITION_CLOSE: 31,
  POSITION_WITHDRAW: 32,
  POSITION_REWARD_CLAIM: 34,
  DELEGATE: 40,
  UNDELEGATE: 41,
  UNDELEGATE_CLAIM: 42,
  DAO_SPEND: 50,
  DAO_OUTPUT: 51,
  DAO_DEPOSIT: 52,
  ICS20_WITHDRAWAL: 200
};

/**
 * @return {proto.penumbra.core.transaction.v1alpha1.Action.ActionCase}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getActionCase = function() {
  return /** @type {proto.penumbra.core.transaction.v1alpha1.Action.ActionCase} */(jspb.Message.computeOneofCase(this, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0]));
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
proto.penumbra.core.transaction.v1alpha1.Action.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.Action.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.Action} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.Action.toObject = function(includeInstance, msg) {
  var f, obj = {
    spend: (f = msg.getSpend()) && penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Spend.toObject(includeInstance, f),
    output: (f = msg.getOutput()) && penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Output.toObject(includeInstance, f),
    swap: (f = msg.getSwap()) && penumbra_core_component_dex_v1alpha1_dex_pb.Swap.toObject(includeInstance, f),
    swapClaim: (f = msg.getSwapClaim()) && penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaim.toObject(includeInstance, f),
    validatorDefinition: (f = msg.getValidatorDefinition()) && penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition.toObject(includeInstance, f),
    ibcAction: (f = msg.getIbcAction()) && penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction.toObject(includeInstance, f),
    proposalSubmit: (f = msg.getProposalSubmit()) && penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit.toObject(includeInstance, f),
    proposalWithdraw: (f = msg.getProposalWithdraw()) && penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw.toObject(includeInstance, f),
    validatorVote: (f = msg.getValidatorVote()) && penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote.toObject(includeInstance, f),
    delegatorVote: (f = msg.getDelegatorVote()) && penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVote.toObject(includeInstance, f),
    proposalDepositClaim: (f = msg.getProposalDepositClaim()) && penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim.toObject(includeInstance, f),
    positionOpen: (f = msg.getPositionOpen()) && penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen.toObject(includeInstance, f),
    positionClose: (f = msg.getPositionClose()) && penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose.toObject(includeInstance, f),
    positionWithdraw: (f = msg.getPositionWithdraw()) && penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdraw.toObject(includeInstance, f),
    positionRewardClaim: (f = msg.getPositionRewardClaim()) && penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaim.toObject(includeInstance, f),
    delegate: (f = msg.getDelegate()) && penumbra_core_component_stake_v1alpha1_stake_pb.Delegate.toObject(includeInstance, f),
    undelegate: (f = msg.getUndelegate()) && penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate.toObject(includeInstance, f),
    undelegateClaim: (f = msg.getUndelegateClaim()) && penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaim.toObject(includeInstance, f),
    daoSpend: (f = msg.getDaoSpend()) && penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend.toObject(includeInstance, f),
    daoOutput: (f = msg.getDaoOutput()) && penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput.toObject(includeInstance, f),
    daoDeposit: (f = msg.getDaoDeposit()) && penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit.toObject(includeInstance, f),
    ics20Withdrawal: (f = msg.getIcs20Withdrawal()) && penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action}
 */
proto.penumbra.core.transaction.v1alpha1.Action.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.Action;
  return proto.penumbra.core.transaction.v1alpha1.Action.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.Action} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action}
 */
proto.penumbra.core.transaction.v1alpha1.Action.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Spend;
      reader.readMessage(value,penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Spend.deserializeBinaryFromReader);
      msg.setSpend(value);
      break;
    case 2:
      var value = new penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Output;
      reader.readMessage(value,penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Output.deserializeBinaryFromReader);
      msg.setOutput(value);
      break;
    case 3:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.Swap;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.Swap.deserializeBinaryFromReader);
      msg.setSwap(value);
      break;
    case 4:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaim;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaim.deserializeBinaryFromReader);
      msg.setSwapClaim(value);
      break;
    case 16:
      var value = new penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition;
      reader.readMessage(value,penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition.deserializeBinaryFromReader);
      msg.setValidatorDefinition(value);
      break;
    case 17:
      var value = new penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction;
      reader.readMessage(value,penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction.deserializeBinaryFromReader);
      msg.setIbcAction(value);
      break;
    case 18:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit.deserializeBinaryFromReader);
      msg.setProposalSubmit(value);
      break;
    case 19:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw.deserializeBinaryFromReader);
      msg.setProposalWithdraw(value);
      break;
    case 20:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote.deserializeBinaryFromReader);
      msg.setValidatorVote(value);
      break;
    case 21:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVote;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVote.deserializeBinaryFromReader);
      msg.setDelegatorVote(value);
      break;
    case 22:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim.deserializeBinaryFromReader);
      msg.setProposalDepositClaim(value);
      break;
    case 30:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen.deserializeBinaryFromReader);
      msg.setPositionOpen(value);
      break;
    case 31:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose.deserializeBinaryFromReader);
      msg.setPositionClose(value);
      break;
    case 32:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdraw;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdraw.deserializeBinaryFromReader);
      msg.setPositionWithdraw(value);
      break;
    case 34:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaim;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaim.deserializeBinaryFromReader);
      msg.setPositionRewardClaim(value);
      break;
    case 40:
      var value = new penumbra_core_component_stake_v1alpha1_stake_pb.Delegate;
      reader.readMessage(value,penumbra_core_component_stake_v1alpha1_stake_pb.Delegate.deserializeBinaryFromReader);
      msg.setDelegate(value);
      break;
    case 41:
      var value = new penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate;
      reader.readMessage(value,penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate.deserializeBinaryFromReader);
      msg.setUndelegate(value);
      break;
    case 42:
      var value = new penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaim;
      reader.readMessage(value,penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaim.deserializeBinaryFromReader);
      msg.setUndelegateClaim(value);
      break;
    case 50:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend.deserializeBinaryFromReader);
      msg.setDaoSpend(value);
      break;
    case 51:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput.deserializeBinaryFromReader);
      msg.setDaoOutput(value);
      break;
    case 52:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit.deserializeBinaryFromReader);
      msg.setDaoDeposit(value);
      break;
    case 200:
      var value = new penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal;
      reader.readMessage(value,penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal.deserializeBinaryFromReader);
      msg.setIcs20Withdrawal(value);
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
proto.penumbra.core.transaction.v1alpha1.Action.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.Action.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.Action} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.Action.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpend();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Spend.serializeBinaryToWriter
    );
  }
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Output.serializeBinaryToWriter
    );
  }
  f = message.getSwap();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.Swap.serializeBinaryToWriter
    );
  }
  f = message.getSwapClaim();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaim.serializeBinaryToWriter
    );
  }
  f = message.getValidatorDefinition();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition.serializeBinaryToWriter
    );
  }
  f = message.getIbcAction();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction.serializeBinaryToWriter
    );
  }
  f = message.getProposalSubmit();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit.serializeBinaryToWriter
    );
  }
  f = message.getProposalWithdraw();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw.serializeBinaryToWriter
    );
  }
  f = message.getValidatorVote();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote.serializeBinaryToWriter
    );
  }
  f = message.getDelegatorVote();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVote.serializeBinaryToWriter
    );
  }
  f = message.getProposalDepositClaim();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim.serializeBinaryToWriter
    );
  }
  f = message.getPositionOpen();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen.serializeBinaryToWriter
    );
  }
  f = message.getPositionClose();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose.serializeBinaryToWriter
    );
  }
  f = message.getPositionWithdraw();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdraw.serializeBinaryToWriter
    );
  }
  f = message.getPositionRewardClaim();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaim.serializeBinaryToWriter
    );
  }
  f = message.getDelegate();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      penumbra_core_component_stake_v1alpha1_stake_pb.Delegate.serializeBinaryToWriter
    );
  }
  f = message.getUndelegate();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate.serializeBinaryToWriter
    );
  }
  f = message.getUndelegateClaim();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaim.serializeBinaryToWriter
    );
  }
  f = message.getDaoSpend();
  if (f != null) {
    writer.writeMessage(
      50,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend.serializeBinaryToWriter
    );
  }
  f = message.getDaoOutput();
  if (f != null) {
    writer.writeMessage(
      51,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput.serializeBinaryToWriter
    );
  }
  f = message.getDaoDeposit();
  if (f != null) {
    writer.writeMessage(
      52,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit.serializeBinaryToWriter
    );
  }
  f = message.getIcs20Withdrawal();
  if (f != null) {
    writer.writeMessage(
      200,
      f,
      penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.component.shielded_pool.v1alpha1.Spend spend = 1;
 * @return {?proto.penumbra.core.component.shielded_pool.v1alpha1.Spend}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getSpend = function() {
  return /** @type{?proto.penumbra.core.component.shielded_pool.v1alpha1.Spend} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Spend, 1));
};


/**
 * @param {?proto.penumbra.core.component.shielded_pool.v1alpha1.Spend|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setSpend = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearSpend = function() {
  return this.setSpend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasSpend = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.component.shielded_pool.v1alpha1.Output output = 2;
 * @return {?proto.penumbra.core.component.shielded_pool.v1alpha1.Output}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getOutput = function() {
  return /** @type{?proto.penumbra.core.component.shielded_pool.v1alpha1.Output} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Output, 2));
};


/**
 * @param {?proto.penumbra.core.component.shielded_pool.v1alpha1.Output|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setOutput = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.Swap swap = 3;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.Swap}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getSwap = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.Swap} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.Swap, 3));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.Swap|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setSwap = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearSwap = function() {
  return this.setSwap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasSwap = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.SwapClaim swap_claim = 4;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapClaim}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getSwapClaim = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapClaim} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaim, 4));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapClaim|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setSwapClaim = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearSwapClaim = function() {
  return this.setSwapClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasSwapClaim = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional penumbra.core.component.stake.v1alpha1.ValidatorDefinition validator_definition = 16;
 * @return {?proto.penumbra.core.component.stake.v1alpha1.ValidatorDefinition}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getValidatorDefinition = function() {
  return /** @type{?proto.penumbra.core.component.stake.v1alpha1.ValidatorDefinition} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition, 16));
};


/**
 * @param {?proto.penumbra.core.component.stake.v1alpha1.ValidatorDefinition|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setValidatorDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearValidatorDefinition = function() {
  return this.setValidatorDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasValidatorDefinition = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional penumbra.core.component.ibc.v1alpha1.IbcAction ibc_action = 17;
 * @return {?proto.penumbra.core.component.ibc.v1alpha1.IbcAction}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getIbcAction = function() {
  return /** @type{?proto.penumbra.core.component.ibc.v1alpha1.IbcAction} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction, 17));
};


/**
 * @param {?proto.penumbra.core.component.ibc.v1alpha1.IbcAction|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setIbcAction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearIbcAction = function() {
  return this.setIbcAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasIbcAction = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.ProposalSubmit proposal_submit = 18;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getProposalSubmit = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit, 18));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setProposalSubmit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearProposalSubmit = function() {
  return this.setProposalSubmit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasProposalSubmit = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.ProposalWithdraw proposal_withdraw = 19;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getProposalWithdraw = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw, 19));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setProposalWithdraw = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearProposalWithdraw = function() {
  return this.setProposalWithdraw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasProposalWithdraw = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.ValidatorVote validator_vote = 20;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ValidatorVote}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getValidatorVote = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ValidatorVote} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote, 20));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ValidatorVote|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setValidatorVote = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearValidatorVote = function() {
  return this.setValidatorVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasValidatorVote = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.DelegatorVote delegator_vote = 21;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.DelegatorVote}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getDelegatorVote = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.DelegatorVote} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVote, 21));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.DelegatorVote|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setDelegatorVote = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearDelegatorVote = function() {
  return this.setDelegatorVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasDelegatorVote = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.ProposalDepositClaim proposal_deposit_claim = 22;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getProposalDepositClaim = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim, 22));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setProposalDepositClaim = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearProposalDepositClaim = function() {
  return this.setProposalDepositClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasProposalDepositClaim = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.PositionOpen position_open = 30;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionOpen}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getPositionOpen = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionOpen} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen, 30));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionOpen|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setPositionOpen = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearPositionOpen = function() {
  return this.setPositionOpen(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasPositionOpen = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.PositionClose position_close = 31;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionClose}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getPositionClose = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionClose} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose, 31));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionClose|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setPositionClose = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearPositionClose = function() {
  return this.setPositionClose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasPositionClose = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.PositionWithdraw position_withdraw = 32;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getPositionWithdraw = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdraw, 32));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setPositionWithdraw = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearPositionWithdraw = function() {
  return this.setPositionWithdraw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasPositionWithdraw = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.PositionRewardClaim position_reward_claim = 34;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getPositionRewardClaim = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaim, 34));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setPositionRewardClaim = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearPositionRewardClaim = function() {
  return this.setPositionRewardClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasPositionRewardClaim = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional penumbra.core.component.stake.v1alpha1.Delegate delegate = 40;
 * @return {?proto.penumbra.core.component.stake.v1alpha1.Delegate}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getDelegate = function() {
  return /** @type{?proto.penumbra.core.component.stake.v1alpha1.Delegate} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_stake_v1alpha1_stake_pb.Delegate, 40));
};


/**
 * @param {?proto.penumbra.core.component.stake.v1alpha1.Delegate|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setDelegate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 40, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearDelegate = function() {
  return this.setDelegate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasDelegate = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional penumbra.core.component.stake.v1alpha1.Undelegate undelegate = 41;
 * @return {?proto.penumbra.core.component.stake.v1alpha1.Undelegate}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getUndelegate = function() {
  return /** @type{?proto.penumbra.core.component.stake.v1alpha1.Undelegate} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate, 41));
};


/**
 * @param {?proto.penumbra.core.component.stake.v1alpha1.Undelegate|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setUndelegate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 41, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearUndelegate = function() {
  return this.setUndelegate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasUndelegate = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional penumbra.core.component.stake.v1alpha1.UndelegateClaim undelegate_claim = 42;
 * @return {?proto.penumbra.core.component.stake.v1alpha1.UndelegateClaim}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getUndelegateClaim = function() {
  return /** @type{?proto.penumbra.core.component.stake.v1alpha1.UndelegateClaim} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaim, 42));
};


/**
 * @param {?proto.penumbra.core.component.stake.v1alpha1.UndelegateClaim|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setUndelegateClaim = function(value) {
  return jspb.Message.setOneofWrapperField(this, 42, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearUndelegateClaim = function() {
  return this.setUndelegateClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasUndelegateClaim = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.DaoSpend dao_spend = 50;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.DaoSpend}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getDaoSpend = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.DaoSpend} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend, 50));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.DaoSpend|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setDaoSpend = function(value) {
  return jspb.Message.setOneofWrapperField(this, 50, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearDaoSpend = function() {
  return this.setDaoSpend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasDaoSpend = function() {
  return jspb.Message.getField(this, 50) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.DaoOutput dao_output = 51;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.DaoOutput}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getDaoOutput = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.DaoOutput} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput, 51));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.DaoOutput|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setDaoOutput = function(value) {
  return jspb.Message.setOneofWrapperField(this, 51, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearDaoOutput = function() {
  return this.setDaoOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasDaoOutput = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.DaoDeposit dao_deposit = 52;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.DaoDeposit}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getDaoDeposit = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.DaoDeposit} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit, 52));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.DaoDeposit|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setDaoDeposit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 52, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearDaoDeposit = function() {
  return this.setDaoDeposit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasDaoDeposit = function() {
  return jspb.Message.getField(this, 52) != null;
};


/**
 * optional penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal ics20_withdrawal = 200;
 * @return {?proto.penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.getIcs20Withdrawal = function() {
  return /** @type{?proto.penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal, 200));
};


/**
 * @param {?proto.penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
*/
proto.penumbra.core.transaction.v1alpha1.Action.prototype.setIcs20Withdrawal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 200, proto.penumbra.core.transaction.v1alpha1.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.Action} returns this
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.clearIcs20Withdrawal = function() {
  return this.setIcs20Withdrawal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.Action.prototype.hasIcs20Withdrawal = function() {
  return jspb.Message.getField(this, 200) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.repeatedFields_ = [1,2,3,4,5];



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
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionPerspective} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadKeysList: jspb.Message.toObjectList(msg.getPayloadKeysList(),
    proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.toObject, includeInstance),
    spendNullifiersList: jspb.Message.toObjectList(msg.getSpendNullifiersList(),
    proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.toObject, includeInstance),
    adviceNotesList: jspb.Message.toObjectList(msg.getAdviceNotesList(),
    penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note.toObject, includeInstance),
    addressViewsList: jspb.Message.toObjectList(msg.getAddressViewsList(),
    penumbra_core_keys_v1alpha1_keys_pb.AddressView.toObject, includeInstance),
    denomsList: jspb.Message.toObjectList(msg.getDenomsList(),
    penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata.toObject, includeInstance),
    transactionId: (f = msg.getTransactionId()) && proto.penumbra.core.transaction.v1alpha1.Id.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPerspective}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.TransactionPerspective;
  return proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionPerspective} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPerspective}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.deserializeBinaryFromReader);
      msg.addPayloadKeys(value);
      break;
    case 2:
      var value = new proto.penumbra.core.transaction.v1alpha1.NullifierWithNote;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.deserializeBinaryFromReader);
      msg.addSpendNullifiers(value);
      break;
    case 3:
      var value = new penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note;
      reader.readMessage(value,penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note.deserializeBinaryFromReader);
      msg.addAdviceNotes(value);
      break;
    case 4:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.AddressView;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.AddressView.deserializeBinaryFromReader);
      msg.addAddressViews(value);
      break;
    case 5:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata.deserializeBinaryFromReader);
      msg.addDenoms(value);
      break;
    case 6:
      var value = new proto.penumbra.core.transaction.v1alpha1.Id;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.Id.deserializeBinaryFromReader);
      msg.setTransactionId(value);
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
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionPerspective} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayloadKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.serializeBinaryToWriter
    );
  }
  f = message.getSpendNullifiersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.serializeBinaryToWriter
    );
  }
  f = message.getAdviceNotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note.serializeBinaryToWriter
    );
  }
  f = message.getAddressViewsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.AddressView.serializeBinaryToWriter
    );
  }
  f = message.getDenomsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata.serializeBinaryToWriter
    );
  }
  f = message.getTransactionId();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.penumbra.core.transaction.v1alpha1.Id.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PayloadKeyWithCommitment payload_keys = 1;
 * @return {!Array<!proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment>}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.getPayloadKeysList = function() {
  return /** @type{!Array<!proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment, 1));
};


/**
 * @param {!Array<!proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment>} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPerspective} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.setPayloadKeysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.addPayloadKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPerspective} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.clearPayloadKeysList = function() {
  return this.setPayloadKeysList([]);
};


/**
 * repeated NullifierWithNote spend_nullifiers = 2;
 * @return {!Array<!proto.penumbra.core.transaction.v1alpha1.NullifierWithNote>}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.getSpendNullifiersList = function() {
  return /** @type{!Array<!proto.penumbra.core.transaction.v1alpha1.NullifierWithNote>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.core.transaction.v1alpha1.NullifierWithNote, 2));
};


/**
 * @param {!Array<!proto.penumbra.core.transaction.v1alpha1.NullifierWithNote>} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPerspective} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.setSpendNullifiersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.penumbra.core.transaction.v1alpha1.NullifierWithNote=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.core.transaction.v1alpha1.NullifierWithNote}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.addSpendNullifiers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.penumbra.core.transaction.v1alpha1.NullifierWithNote, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPerspective} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.clearSpendNullifiersList = function() {
  return this.setSpendNullifiersList([]);
};


/**
 * repeated penumbra.core.component.shielded_pool.v1alpha1.Note advice_notes = 3;
 * @return {!Array<!proto.penumbra.core.component.shielded_pool.v1alpha1.Note>}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.getAdviceNotesList = function() {
  return /** @type{!Array<!proto.penumbra.core.component.shielded_pool.v1alpha1.Note>} */ (
    jspb.Message.getRepeatedWrapperField(this, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note, 3));
};


/**
 * @param {!Array<!proto.penumbra.core.component.shielded_pool.v1alpha1.Note>} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPerspective} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.setAdviceNotesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.penumbra.core.component.shielded_pool.v1alpha1.Note=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.core.component.shielded_pool.v1alpha1.Note}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.addAdviceNotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.penumbra.core.component.shielded_pool.v1alpha1.Note, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPerspective} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.clearAdviceNotesList = function() {
  return this.setAdviceNotesList([]);
};


/**
 * repeated penumbra.core.keys.v1alpha1.AddressView address_views = 4;
 * @return {!Array<!proto.penumbra.core.keys.v1alpha1.AddressView>}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.getAddressViewsList = function() {
  return /** @type{!Array<!proto.penumbra.core.keys.v1alpha1.AddressView>} */ (
    jspb.Message.getRepeatedWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.AddressView, 4));
};


/**
 * @param {!Array<!proto.penumbra.core.keys.v1alpha1.AddressView>} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPerspective} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.setAddressViewsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.penumbra.core.keys.v1alpha1.AddressView=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.core.keys.v1alpha1.AddressView}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.addAddressViews = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.penumbra.core.keys.v1alpha1.AddressView, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPerspective} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.clearAddressViewsList = function() {
  return this.setAddressViewsList([]);
};


/**
 * repeated penumbra.core.asset.v1alpha1.DenomMetadata denoms = 5;
 * @return {!Array<!proto.penumbra.core.asset.v1alpha1.DenomMetadata>}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.getDenomsList = function() {
  return /** @type{!Array<!proto.penumbra.core.asset.v1alpha1.DenomMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.DenomMetadata, 5));
};


/**
 * @param {!Array<!proto.penumbra.core.asset.v1alpha1.DenomMetadata>} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPerspective} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.setDenomsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.penumbra.core.asset.v1alpha1.DenomMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.core.asset.v1alpha1.DenomMetadata}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.addDenoms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.penumbra.core.asset.v1alpha1.DenomMetadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPerspective} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.clearDenomsList = function() {
  return this.setDenomsList([]);
};


/**
 * optional Id transaction_id = 6;
 * @return {?proto.penumbra.core.transaction.v1alpha1.Id}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.getTransactionId = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.Id} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.transaction.v1alpha1.Id, 6));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.Id|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPerspective} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.setTransactionId = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPerspective} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.clearTransactionId = function() {
  return this.setTransactionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPerspective.prototype.hasTransactionId = function() {
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
proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadKey: (f = msg.getPayloadKey()) && penumbra_core_keys_v1alpha1_keys_pb.PayloadKey.toObject(includeInstance, f),
    commitment: (f = msg.getCommitment()) && penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment}
 */
proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment;
  return proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment}
 */
proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.PayloadKey;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.PayloadKey.deserializeBinaryFromReader);
      msg.setPayloadKey(value);
      break;
    case 2:
      var value = new penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment;
      reader.readMessage(value,penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.deserializeBinaryFromReader);
      msg.setCommitment(value);
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
proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayloadKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.PayloadKey.serializeBinaryToWriter
    );
  }
  f = message.getCommitment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.keys.v1alpha1.PayloadKey payload_key = 1;
 * @return {?proto.penumbra.core.keys.v1alpha1.PayloadKey}
 */
proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.prototype.getPayloadKey = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.PayloadKey} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.PayloadKey, 1));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.PayloadKey|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment} returns this
*/
proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.prototype.setPayloadKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment} returns this
 */
proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.prototype.clearPayloadKey = function() {
  return this.setPayloadKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.prototype.hasPayloadKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.crypto.tct.v1alpha1.StateCommitment commitment = 2;
 * @return {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment}
 */
proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.prototype.getCommitment = function() {
  return /** @type{?proto.penumbra.crypto.tct.v1alpha1.StateCommitment} */ (
    jspb.Message.getWrapperField(this, penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitment, 2));
};


/**
 * @param {?proto.penumbra.crypto.tct.v1alpha1.StateCommitment|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment} returns this
*/
proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.prototype.setCommitment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment} returns this
 */
proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.prototype.clearCommitment = function() {
  return this.setCommitment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.PayloadKeyWithCommitment.prototype.hasCommitment = function() {
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
proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.NullifierWithNote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.toObject = function(includeInstance, msg) {
  var f, obj = {
    nullifier: (f = msg.getNullifier()) && penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.toObject(includeInstance, f),
    note: (f = msg.getNote()) && penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.NullifierWithNote}
 */
proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.NullifierWithNote;
  return proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.NullifierWithNote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.NullifierWithNote}
 */
proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note;
      reader.readMessage(value,penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note.deserializeBinaryFromReader);
      msg.setNote(value);
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
proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.NullifierWithNote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNullifier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier.serializeBinaryToWriter
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
};


/**
 * optional penumbra.core.component.sct.v1alpha1.Nullifier nullifier = 1;
 * @return {?proto.penumbra.core.component.sct.v1alpha1.Nullifier}
 */
proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.prototype.getNullifier = function() {
  return /** @type{?proto.penumbra.core.component.sct.v1alpha1.Nullifier} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_sct_v1alpha1_sct_pb.Nullifier, 1));
};


/**
 * @param {?proto.penumbra.core.component.sct.v1alpha1.Nullifier|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.NullifierWithNote} returns this
*/
proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.prototype.setNullifier = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.NullifierWithNote} returns this
 */
proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.prototype.clearNullifier = function() {
  return this.setNullifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.prototype.hasNullifier = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.component.shielded_pool.v1alpha1.Note note = 2;
 * @return {?proto.penumbra.core.component.shielded_pool.v1alpha1.Note}
 */
proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.prototype.getNote = function() {
  return /** @type{?proto.penumbra.core.component.shielded_pool.v1alpha1.Note} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note, 2));
};


/**
 * @param {?proto.penumbra.core.component.shielded_pool.v1alpha1.Note|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.NullifierWithNote} returns this
*/
proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.prototype.setNote = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.NullifierWithNote} returns this
 */
proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.prototype.clearNote = function() {
  return this.setNote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.NullifierWithNote.prototype.hasNote = function() {
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
proto.penumbra.core.transaction.v1alpha1.TransactionView.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.TransactionView.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionView} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.TransactionView.toObject = function(includeInstance, msg) {
  var f, obj = {
    bodyView: (f = msg.getBodyView()) && proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.toObject(includeInstance, f),
    bindingSig: msg.getBindingSig_asB64(),
    anchor: (f = msg.getAnchor()) && penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionView}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionView.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.TransactionView;
  return proto.penumbra.core.transaction.v1alpha1.TransactionView.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionView} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionView}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionView.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.transaction.v1alpha1.TransactionBodyView;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.deserializeBinaryFromReader);
      msg.setBodyView(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBindingSig(value);
      break;
    case 3:
      var value = new penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot;
      reader.readMessage(value,penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot.deserializeBinaryFromReader);
      msg.setAnchor(value);
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
proto.penumbra.core.transaction.v1alpha1.TransactionView.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.TransactionView.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionView} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.TransactionView.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBodyView();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.serializeBinaryToWriter
    );
  }
  f = message.getBindingSig_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAnchor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransactionBodyView body_view = 1;
 * @return {?proto.penumbra.core.transaction.v1alpha1.TransactionBodyView}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionView.prototype.getBodyView = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.TransactionBodyView} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.transaction.v1alpha1.TransactionBodyView, 1));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.TransactionBodyView|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionView.prototype.setBodyView = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionView.prototype.clearBodyView = function() {
  return this.setBodyView(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionView.prototype.hasBodyView = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes binding_sig = 2;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionView.prototype.getBindingSig = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes binding_sig = 2;
 * This is a type-conversion wrapper around `getBindingSig()`
 * @return {string}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionView.prototype.getBindingSig_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBindingSig()));
};


/**
 * optional bytes binding_sig = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBindingSig()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionView.prototype.getBindingSig_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBindingSig()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionView.prototype.setBindingSig = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional penumbra.crypto.tct.v1alpha1.MerkleRoot anchor = 3;
 * @return {?proto.penumbra.crypto.tct.v1alpha1.MerkleRoot}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionView.prototype.getAnchor = function() {
  return /** @type{?proto.penumbra.crypto.tct.v1alpha1.MerkleRoot} */ (
    jspb.Message.getWrapperField(this, penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot, 3));
};


/**
 * @param {?proto.penumbra.crypto.tct.v1alpha1.MerkleRoot|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionView.prototype.setAnchor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionView.prototype.clearAnchor = function() {
  return this.setAnchor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionView.prototype.hasAnchor = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.repeatedFields_ = [1];



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
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionBodyView} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionViewsList: jspb.Message.toObjectList(msg.getActionViewsList(),
    proto.penumbra.core.transaction.v1alpha1.ActionView.toObject, includeInstance),
    transactionParameters: (f = msg.getTransactionParameters()) && proto.penumbra.core.transaction.v1alpha1.TransactionParameters.toObject(includeInstance, f),
    fee: (f = msg.getFee()) && penumbra_core_component_fee_v1alpha1_fee_pb.Fee.toObject(includeInstance, f),
    detectionData: (f = msg.getDetectionData()) && proto.penumbra.core.transaction.v1alpha1.DetectionData.toObject(includeInstance, f),
    memoView: (f = msg.getMemoView()) && proto.penumbra.core.transaction.v1alpha1.MemoView.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBodyView}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.TransactionBodyView;
  return proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionBodyView} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBodyView}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.transaction.v1alpha1.ActionView;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.ActionView.deserializeBinaryFromReader);
      msg.addActionViews(value);
      break;
    case 2:
      var value = new proto.penumbra.core.transaction.v1alpha1.TransactionParameters;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.TransactionParameters.deserializeBinaryFromReader);
      msg.setTransactionParameters(value);
      break;
    case 3:
      var value = new penumbra_core_component_fee_v1alpha1_fee_pb.Fee;
      reader.readMessage(value,penumbra_core_component_fee_v1alpha1_fee_pb.Fee.deserializeBinaryFromReader);
      msg.setFee(value);
      break;
    case 4:
      var value = new proto.penumbra.core.transaction.v1alpha1.DetectionData;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.DetectionData.deserializeBinaryFromReader);
      msg.setDetectionData(value);
      break;
    case 5:
      var value = new proto.penumbra.core.transaction.v1alpha1.MemoView;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.MemoView.deserializeBinaryFromReader);
      msg.setMemoView(value);
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
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionBodyView} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionViewsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.penumbra.core.transaction.v1alpha1.ActionView.serializeBinaryToWriter
    );
  }
  f = message.getTransactionParameters();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.transaction.v1alpha1.TransactionParameters.serializeBinaryToWriter
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
  f = message.getDetectionData();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.penumbra.core.transaction.v1alpha1.DetectionData.serializeBinaryToWriter
    );
  }
  f = message.getMemoView();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.penumbra.core.transaction.v1alpha1.MemoView.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ActionView action_views = 1;
 * @return {!Array<!proto.penumbra.core.transaction.v1alpha1.ActionView>}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.getActionViewsList = function() {
  return /** @type{!Array<!proto.penumbra.core.transaction.v1alpha1.ActionView>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.core.transaction.v1alpha1.ActionView, 1));
};


/**
 * @param {!Array<!proto.penumbra.core.transaction.v1alpha1.ActionView>} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBodyView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.setActionViewsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.penumbra.core.transaction.v1alpha1.ActionView=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.addActionViews = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.penumbra.core.transaction.v1alpha1.ActionView, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBodyView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.clearActionViewsList = function() {
  return this.setActionViewsList([]);
};


/**
 * optional TransactionParameters transaction_parameters = 2;
 * @return {?proto.penumbra.core.transaction.v1alpha1.TransactionParameters}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.getTransactionParameters = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.TransactionParameters} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.transaction.v1alpha1.TransactionParameters, 2));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.TransactionParameters|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBodyView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.setTransactionParameters = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBodyView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.clearTransactionParameters = function() {
  return this.setTransactionParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.hasTransactionParameters = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.component.fee.v1alpha1.Fee fee = 3;
 * @return {?proto.penumbra.core.component.fee.v1alpha1.Fee}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.getFee = function() {
  return /** @type{?proto.penumbra.core.component.fee.v1alpha1.Fee} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_fee_v1alpha1_fee_pb.Fee, 3));
};


/**
 * @param {?proto.penumbra.core.component.fee.v1alpha1.Fee|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBodyView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.setFee = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBodyView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.clearFee = function() {
  return this.setFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.hasFee = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DetectionData detection_data = 4;
 * @return {?proto.penumbra.core.transaction.v1alpha1.DetectionData}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.getDetectionData = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.DetectionData} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.transaction.v1alpha1.DetectionData, 4));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.DetectionData|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBodyView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.setDetectionData = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBodyView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.clearDetectionData = function() {
  return this.setDetectionData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.hasDetectionData = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MemoView memo_view = 5;
 * @return {?proto.penumbra.core.transaction.v1alpha1.MemoView}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.getMemoView = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.MemoView} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.transaction.v1alpha1.MemoView, 5));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.MemoView|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBodyView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.setMemoView = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionBodyView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.clearMemoView = function() {
  return this.setMemoView(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionBodyView.prototype.hasMemoView = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_ = [[1,2,3,4,16,17,18,19,20,21,22,30,31,32,34,41,42,50,51,52,43,200]];

/**
 * @enum {number}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.ActionViewCase = {
  ACTION_VIEW_NOT_SET: 0,
  SPEND: 1,
  OUTPUT: 2,
  SWAP: 3,
  SWAP_CLAIM: 4,
  VALIDATOR_DEFINITION: 16,
  IBC_ACTION: 17,
  PROPOSAL_SUBMIT: 18,
  PROPOSAL_WITHDRAW: 19,
  VALIDATOR_VOTE: 20,
  DELEGATOR_VOTE: 21,
  PROPOSAL_DEPOSIT_CLAIM: 22,
  POSITION_OPEN: 30,
  POSITION_CLOSE: 31,
  POSITION_WITHDRAW: 32,
  POSITION_REWARD_CLAIM: 34,
  DELEGATE: 41,
  UNDELEGATE: 42,
  DAO_SPEND: 50,
  DAO_OUTPUT: 51,
  DAO_DEPOSIT: 52,
  UNDELEGATE_CLAIM: 43,
  ICS20_WITHDRAWAL: 200
};

/**
 * @return {proto.penumbra.core.transaction.v1alpha1.ActionView.ActionViewCase}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getActionViewCase = function() {
  return /** @type {proto.penumbra.core.transaction.v1alpha1.ActionView.ActionViewCase} */(jspb.Message.computeOneofCase(this, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0]));
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
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.ActionView.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.ActionView} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.toObject = function(includeInstance, msg) {
  var f, obj = {
    spend: (f = msg.getSpend()) && penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.SpendView.toObject(includeInstance, f),
    output: (f = msg.getOutput()) && penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.OutputView.toObject(includeInstance, f),
    swap: (f = msg.getSwap()) && penumbra_core_component_dex_v1alpha1_dex_pb.SwapView.toObject(includeInstance, f),
    swapClaim: (f = msg.getSwapClaim()) && penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaimView.toObject(includeInstance, f),
    validatorDefinition: (f = msg.getValidatorDefinition()) && penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition.toObject(includeInstance, f),
    ibcAction: (f = msg.getIbcAction()) && penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction.toObject(includeInstance, f),
    proposalSubmit: (f = msg.getProposalSubmit()) && penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit.toObject(includeInstance, f),
    proposalWithdraw: (f = msg.getProposalWithdraw()) && penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw.toObject(includeInstance, f),
    validatorVote: (f = msg.getValidatorVote()) && penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote.toObject(includeInstance, f),
    delegatorVote: (f = msg.getDelegatorVote()) && penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVoteView.toObject(includeInstance, f),
    proposalDepositClaim: (f = msg.getProposalDepositClaim()) && penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim.toObject(includeInstance, f),
    positionOpen: (f = msg.getPositionOpen()) && penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen.toObject(includeInstance, f),
    positionClose: (f = msg.getPositionClose()) && penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose.toObject(includeInstance, f),
    positionWithdraw: (f = msg.getPositionWithdraw()) && penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdraw.toObject(includeInstance, f),
    positionRewardClaim: (f = msg.getPositionRewardClaim()) && penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaim.toObject(includeInstance, f),
    delegate: (f = msg.getDelegate()) && penumbra_core_component_stake_v1alpha1_stake_pb.Delegate.toObject(includeInstance, f),
    undelegate: (f = msg.getUndelegate()) && penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate.toObject(includeInstance, f),
    daoSpend: (f = msg.getDaoSpend()) && penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend.toObject(includeInstance, f),
    daoOutput: (f = msg.getDaoOutput()) && penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput.toObject(includeInstance, f),
    daoDeposit: (f = msg.getDaoDeposit()) && penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit.toObject(includeInstance, f),
    undelegateClaim: (f = msg.getUndelegateClaim()) && penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaim.toObject(includeInstance, f),
    ics20Withdrawal: (f = msg.getIcs20Withdrawal()) && penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.ActionView;
  return proto.penumbra.core.transaction.v1alpha1.ActionView.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.ActionView} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.SpendView;
      reader.readMessage(value,penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.SpendView.deserializeBinaryFromReader);
      msg.setSpend(value);
      break;
    case 2:
      var value = new penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.OutputView;
      reader.readMessage(value,penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.OutputView.deserializeBinaryFromReader);
      msg.setOutput(value);
      break;
    case 3:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.SwapView;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.SwapView.deserializeBinaryFromReader);
      msg.setSwap(value);
      break;
    case 4:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaimView;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaimView.deserializeBinaryFromReader);
      msg.setSwapClaim(value);
      break;
    case 16:
      var value = new penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition;
      reader.readMessage(value,penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition.deserializeBinaryFromReader);
      msg.setValidatorDefinition(value);
      break;
    case 17:
      var value = new penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction;
      reader.readMessage(value,penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction.deserializeBinaryFromReader);
      msg.setIbcAction(value);
      break;
    case 18:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit.deserializeBinaryFromReader);
      msg.setProposalSubmit(value);
      break;
    case 19:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw.deserializeBinaryFromReader);
      msg.setProposalWithdraw(value);
      break;
    case 20:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote.deserializeBinaryFromReader);
      msg.setValidatorVote(value);
      break;
    case 21:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVoteView;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVoteView.deserializeBinaryFromReader);
      msg.setDelegatorVote(value);
      break;
    case 22:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim.deserializeBinaryFromReader);
      msg.setProposalDepositClaim(value);
      break;
    case 30:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen.deserializeBinaryFromReader);
      msg.setPositionOpen(value);
      break;
    case 31:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose.deserializeBinaryFromReader);
      msg.setPositionClose(value);
      break;
    case 32:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdraw;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdraw.deserializeBinaryFromReader);
      msg.setPositionWithdraw(value);
      break;
    case 34:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaim;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaim.deserializeBinaryFromReader);
      msg.setPositionRewardClaim(value);
      break;
    case 41:
      var value = new penumbra_core_component_stake_v1alpha1_stake_pb.Delegate;
      reader.readMessage(value,penumbra_core_component_stake_v1alpha1_stake_pb.Delegate.deserializeBinaryFromReader);
      msg.setDelegate(value);
      break;
    case 42:
      var value = new penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate;
      reader.readMessage(value,penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate.deserializeBinaryFromReader);
      msg.setUndelegate(value);
      break;
    case 50:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend.deserializeBinaryFromReader);
      msg.setDaoSpend(value);
      break;
    case 51:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput.deserializeBinaryFromReader);
      msg.setDaoOutput(value);
      break;
    case 52:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit.deserializeBinaryFromReader);
      msg.setDaoDeposit(value);
      break;
    case 43:
      var value = new penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaim;
      reader.readMessage(value,penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaim.deserializeBinaryFromReader);
      msg.setUndelegateClaim(value);
      break;
    case 200:
      var value = new penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal;
      reader.readMessage(value,penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal.deserializeBinaryFromReader);
      msg.setIcs20Withdrawal(value);
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
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.ActionView.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.ActionView} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpend();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.SpendView.serializeBinaryToWriter
    );
  }
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.OutputView.serializeBinaryToWriter
    );
  }
  f = message.getSwap();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.SwapView.serializeBinaryToWriter
    );
  }
  f = message.getSwapClaim();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaimView.serializeBinaryToWriter
    );
  }
  f = message.getValidatorDefinition();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition.serializeBinaryToWriter
    );
  }
  f = message.getIbcAction();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction.serializeBinaryToWriter
    );
  }
  f = message.getProposalSubmit();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit.serializeBinaryToWriter
    );
  }
  f = message.getProposalWithdraw();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw.serializeBinaryToWriter
    );
  }
  f = message.getValidatorVote();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote.serializeBinaryToWriter
    );
  }
  f = message.getDelegatorVote();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVoteView.serializeBinaryToWriter
    );
  }
  f = message.getProposalDepositClaim();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim.serializeBinaryToWriter
    );
  }
  f = message.getPositionOpen();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen.serializeBinaryToWriter
    );
  }
  f = message.getPositionClose();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose.serializeBinaryToWriter
    );
  }
  f = message.getPositionWithdraw();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdraw.serializeBinaryToWriter
    );
  }
  f = message.getPositionRewardClaim();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaim.serializeBinaryToWriter
    );
  }
  f = message.getDelegate();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      penumbra_core_component_stake_v1alpha1_stake_pb.Delegate.serializeBinaryToWriter
    );
  }
  f = message.getUndelegate();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate.serializeBinaryToWriter
    );
  }
  f = message.getDaoSpend();
  if (f != null) {
    writer.writeMessage(
      50,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend.serializeBinaryToWriter
    );
  }
  f = message.getDaoOutput();
  if (f != null) {
    writer.writeMessage(
      51,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput.serializeBinaryToWriter
    );
  }
  f = message.getDaoDeposit();
  if (f != null) {
    writer.writeMessage(
      52,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit.serializeBinaryToWriter
    );
  }
  f = message.getUndelegateClaim();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaim.serializeBinaryToWriter
    );
  }
  f = message.getIcs20Withdrawal();
  if (f != null) {
    writer.writeMessage(
      200,
      f,
      penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.component.shielded_pool.v1alpha1.SpendView spend = 1;
 * @return {?proto.penumbra.core.component.shielded_pool.v1alpha1.SpendView}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getSpend = function() {
  return /** @type{?proto.penumbra.core.component.shielded_pool.v1alpha1.SpendView} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.SpendView, 1));
};


/**
 * @param {?proto.penumbra.core.component.shielded_pool.v1alpha1.SpendView|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setSpend = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearSpend = function() {
  return this.setSpend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasSpend = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.component.shielded_pool.v1alpha1.OutputView output = 2;
 * @return {?proto.penumbra.core.component.shielded_pool.v1alpha1.OutputView}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getOutput = function() {
  return /** @type{?proto.penumbra.core.component.shielded_pool.v1alpha1.OutputView} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.OutputView, 2));
};


/**
 * @param {?proto.penumbra.core.component.shielded_pool.v1alpha1.OutputView|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setOutput = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.SwapView swap = 3;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapView}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getSwap = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapView} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.SwapView, 3));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapView|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setSwap = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearSwap = function() {
  return this.setSwap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasSwap = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.SwapClaimView swap_claim = 4;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapClaimView}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getSwapClaim = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapClaimView} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaimView, 4));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapClaimView|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setSwapClaim = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearSwapClaim = function() {
  return this.setSwapClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasSwapClaim = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional penumbra.core.component.stake.v1alpha1.ValidatorDefinition validator_definition = 16;
 * @return {?proto.penumbra.core.component.stake.v1alpha1.ValidatorDefinition}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getValidatorDefinition = function() {
  return /** @type{?proto.penumbra.core.component.stake.v1alpha1.ValidatorDefinition} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition, 16));
};


/**
 * @param {?proto.penumbra.core.component.stake.v1alpha1.ValidatorDefinition|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setValidatorDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearValidatorDefinition = function() {
  return this.setValidatorDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasValidatorDefinition = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional penumbra.core.component.ibc.v1alpha1.IbcAction ibc_action = 17;
 * @return {?proto.penumbra.core.component.ibc.v1alpha1.IbcAction}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getIbcAction = function() {
  return /** @type{?proto.penumbra.core.component.ibc.v1alpha1.IbcAction} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction, 17));
};


/**
 * @param {?proto.penumbra.core.component.ibc.v1alpha1.IbcAction|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setIbcAction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearIbcAction = function() {
  return this.setIbcAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasIbcAction = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.ProposalSubmit proposal_submit = 18;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getProposalSubmit = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit, 18));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setProposalSubmit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearProposalSubmit = function() {
  return this.setProposalSubmit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasProposalSubmit = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.ProposalWithdraw proposal_withdraw = 19;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getProposalWithdraw = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw, 19));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setProposalWithdraw = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearProposalWithdraw = function() {
  return this.setProposalWithdraw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasProposalWithdraw = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.ValidatorVote validator_vote = 20;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ValidatorVote}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getValidatorVote = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ValidatorVote} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote, 20));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ValidatorVote|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setValidatorVote = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearValidatorVote = function() {
  return this.setValidatorVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasValidatorVote = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.DelegatorVoteView delegator_vote = 21;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getDelegatorVote = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVoteView, 21));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setDelegatorVote = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearDelegatorVote = function() {
  return this.setDelegatorVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasDelegatorVote = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.ProposalDepositClaim proposal_deposit_claim = 22;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getProposalDepositClaim = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim, 22));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setProposalDepositClaim = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearProposalDepositClaim = function() {
  return this.setProposalDepositClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasProposalDepositClaim = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.PositionOpen position_open = 30;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionOpen}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getPositionOpen = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionOpen} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen, 30));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionOpen|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setPositionOpen = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearPositionOpen = function() {
  return this.setPositionOpen(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasPositionOpen = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.PositionClose position_close = 31;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionClose}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getPositionClose = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionClose} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose, 31));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionClose|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setPositionClose = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearPositionClose = function() {
  return this.setPositionClose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasPositionClose = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.PositionWithdraw position_withdraw = 32;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getPositionWithdraw = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdraw, 32));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionWithdraw|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setPositionWithdraw = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearPositionWithdraw = function() {
  return this.setPositionWithdraw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasPositionWithdraw = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.PositionRewardClaim position_reward_claim = 34;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getPositionRewardClaim = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaim, 34));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaim|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setPositionRewardClaim = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearPositionRewardClaim = function() {
  return this.setPositionRewardClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasPositionRewardClaim = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional penumbra.core.component.stake.v1alpha1.Delegate delegate = 41;
 * @return {?proto.penumbra.core.component.stake.v1alpha1.Delegate}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getDelegate = function() {
  return /** @type{?proto.penumbra.core.component.stake.v1alpha1.Delegate} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_stake_v1alpha1_stake_pb.Delegate, 41));
};


/**
 * @param {?proto.penumbra.core.component.stake.v1alpha1.Delegate|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setDelegate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 41, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearDelegate = function() {
  return this.setDelegate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasDelegate = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional penumbra.core.component.stake.v1alpha1.Undelegate undelegate = 42;
 * @return {?proto.penumbra.core.component.stake.v1alpha1.Undelegate}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getUndelegate = function() {
  return /** @type{?proto.penumbra.core.component.stake.v1alpha1.Undelegate} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate, 42));
};


/**
 * @param {?proto.penumbra.core.component.stake.v1alpha1.Undelegate|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setUndelegate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 42, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearUndelegate = function() {
  return this.setUndelegate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasUndelegate = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.DaoSpend dao_spend = 50;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.DaoSpend}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getDaoSpend = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.DaoSpend} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend, 50));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.DaoSpend|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setDaoSpend = function(value) {
  return jspb.Message.setOneofWrapperField(this, 50, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearDaoSpend = function() {
  return this.setDaoSpend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasDaoSpend = function() {
  return jspb.Message.getField(this, 50) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.DaoOutput dao_output = 51;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.DaoOutput}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getDaoOutput = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.DaoOutput} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput, 51));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.DaoOutput|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setDaoOutput = function(value) {
  return jspb.Message.setOneofWrapperField(this, 51, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearDaoOutput = function() {
  return this.setDaoOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasDaoOutput = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.DaoDeposit dao_deposit = 52;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.DaoDeposit}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getDaoDeposit = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.DaoDeposit} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit, 52));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.DaoDeposit|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setDaoDeposit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 52, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearDaoDeposit = function() {
  return this.setDaoDeposit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasDaoDeposit = function() {
  return jspb.Message.getField(this, 52) != null;
};


/**
 * optional penumbra.core.component.stake.v1alpha1.UndelegateClaim undelegate_claim = 43;
 * @return {?proto.penumbra.core.component.stake.v1alpha1.UndelegateClaim}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getUndelegateClaim = function() {
  return /** @type{?proto.penumbra.core.component.stake.v1alpha1.UndelegateClaim} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaim, 43));
};


/**
 * @param {?proto.penumbra.core.component.stake.v1alpha1.UndelegateClaim|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setUndelegateClaim = function(value) {
  return jspb.Message.setOneofWrapperField(this, 43, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearUndelegateClaim = function() {
  return this.setUndelegateClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasUndelegateClaim = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal ics20_withdrawal = 200;
 * @return {?proto.penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.getIcs20Withdrawal = function() {
  return /** @type{?proto.penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal, 200));
};


/**
 * @param {?proto.penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.setIcs20Withdrawal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 200, proto.penumbra.core.transaction.v1alpha1.ActionView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.clearIcs20Withdrawal = function() {
  return this.setIcs20Withdrawal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionView.prototype.hasIcs20Withdrawal = function() {
  return jspb.Message.getField(this, 200) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.repeatedFields_ = [2,3];



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
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.AuthorizationData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.AuthorizationData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.toObject = function(includeInstance, msg) {
  var f, obj = {
    effectHash: (f = msg.getEffectHash()) && penumbra_core_component_chain_v1alpha1_chain_pb.EffectHash.toObject(includeInstance, f),
    spendAuthsList: jspb.Message.toObjectList(msg.getSpendAuthsList(),
    penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature.toObject, includeInstance),
    delegatorVoteAuthsList: jspb.Message.toObjectList(msg.getDelegatorVoteAuthsList(),
    penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature.toObject, includeInstance)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.AuthorizationData}
 */
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.AuthorizationData;
  return proto.penumbra.core.transaction.v1alpha1.AuthorizationData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.AuthorizationData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.AuthorizationData}
 */
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_component_chain_v1alpha1_chain_pb.EffectHash;
      reader.readMessage(value,penumbra_core_component_chain_v1alpha1_chain_pb.EffectHash.deserializeBinaryFromReader);
      msg.setEffectHash(value);
      break;
    case 2:
      var value = new penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature;
      reader.readMessage(value,penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature.deserializeBinaryFromReader);
      msg.addSpendAuths(value);
      break;
    case 3:
      var value = new penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature;
      reader.readMessage(value,penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature.deserializeBinaryFromReader);
      msg.addDelegatorVoteAuths(value);
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
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.AuthorizationData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.AuthorizationData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEffectHash();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_component_chain_v1alpha1_chain_pb.EffectHash.serializeBinaryToWriter
    );
  }
  f = message.getSpendAuthsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature.serializeBinaryToWriter
    );
  }
  f = message.getDelegatorVoteAuthsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.component.chain.v1alpha1.EffectHash effect_hash = 1;
 * @return {?proto.penumbra.core.component.chain.v1alpha1.EffectHash}
 */
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.prototype.getEffectHash = function() {
  return /** @type{?proto.penumbra.core.component.chain.v1alpha1.EffectHash} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_chain_v1alpha1_chain_pb.EffectHash, 1));
};


/**
 * @param {?proto.penumbra.core.component.chain.v1alpha1.EffectHash|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.AuthorizationData} returns this
*/
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.prototype.setEffectHash = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.AuthorizationData} returns this
 */
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.prototype.clearEffectHash = function() {
  return this.setEffectHash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.prototype.hasEffectHash = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature spend_auths = 2;
 * @return {!Array<!proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature>}
 */
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.prototype.getSpendAuthsList = function() {
  return /** @type{!Array<!proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature>} */ (
    jspb.Message.getRepeatedWrapperField(this, penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature, 2));
};


/**
 * @param {!Array<!proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature>} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.AuthorizationData} returns this
*/
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.prototype.setSpendAuthsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature}
 */
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.prototype.addSpendAuths = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.core.transaction.v1alpha1.AuthorizationData} returns this
 */
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.prototype.clearSpendAuthsList = function() {
  return this.setSpendAuthsList([]);
};


/**
 * repeated penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature delegator_vote_auths = 3;
 * @return {!Array<!proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature>}
 */
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.prototype.getDelegatorVoteAuthsList = function() {
  return /** @type{!Array<!proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature>} */ (
    jspb.Message.getRepeatedWrapperField(this, penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature, 3));
};


/**
 * @param {!Array<!proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature>} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.AuthorizationData} returns this
*/
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.prototype.setDelegatorVoteAuthsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature}
 */
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.prototype.addDelegatorVoteAuths = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.core.transaction.v1alpha1.AuthorizationData} returns this
 */
proto.penumbra.core.transaction.v1alpha1.AuthorizationData.prototype.clearDelegatorVoteAuthsList = function() {
  return this.setDelegatorVoteAuthsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.core.transaction.v1alpha1.WitnessData.repeatedFields_ = [2];



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
proto.penumbra.core.transaction.v1alpha1.WitnessData.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.WitnessData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.WitnessData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.WitnessData.toObject = function(includeInstance, msg) {
  var f, obj = {
    anchor: (f = msg.getAnchor()) && penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot.toObject(includeInstance, f),
    stateCommitmentProofsList: jspb.Message.toObjectList(msg.getStateCommitmentProofsList(),
    penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitmentProof.toObject, includeInstance)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.WitnessData}
 */
proto.penumbra.core.transaction.v1alpha1.WitnessData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.WitnessData;
  return proto.penumbra.core.transaction.v1alpha1.WitnessData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.WitnessData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.WitnessData}
 */
proto.penumbra.core.transaction.v1alpha1.WitnessData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot;
      reader.readMessage(value,penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot.deserializeBinaryFromReader);
      msg.setAnchor(value);
      break;
    case 2:
      var value = new penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitmentProof;
      reader.readMessage(value,penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitmentProof.deserializeBinaryFromReader);
      msg.addStateCommitmentProofs(value);
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
proto.penumbra.core.transaction.v1alpha1.WitnessData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.WitnessData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.WitnessData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.WitnessData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnchor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot.serializeBinaryToWriter
    );
  }
  f = message.getStateCommitmentProofsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitmentProof.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.crypto.tct.v1alpha1.MerkleRoot anchor = 1;
 * @return {?proto.penumbra.crypto.tct.v1alpha1.MerkleRoot}
 */
proto.penumbra.core.transaction.v1alpha1.WitnessData.prototype.getAnchor = function() {
  return /** @type{?proto.penumbra.crypto.tct.v1alpha1.MerkleRoot} */ (
    jspb.Message.getWrapperField(this, penumbra_crypto_tct_v1alpha1_tct_pb.MerkleRoot, 1));
};


/**
 * @param {?proto.penumbra.crypto.tct.v1alpha1.MerkleRoot|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.WitnessData} returns this
*/
proto.penumbra.core.transaction.v1alpha1.WitnessData.prototype.setAnchor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.WitnessData} returns this
 */
proto.penumbra.core.transaction.v1alpha1.WitnessData.prototype.clearAnchor = function() {
  return this.setAnchor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.WitnessData.prototype.hasAnchor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated penumbra.crypto.tct.v1alpha1.StateCommitmentProof state_commitment_proofs = 2;
 * @return {!Array<!proto.penumbra.crypto.tct.v1alpha1.StateCommitmentProof>}
 */
proto.penumbra.core.transaction.v1alpha1.WitnessData.prototype.getStateCommitmentProofsList = function() {
  return /** @type{!Array<!proto.penumbra.crypto.tct.v1alpha1.StateCommitmentProof>} */ (
    jspb.Message.getRepeatedWrapperField(this, penumbra_crypto_tct_v1alpha1_tct_pb.StateCommitmentProof, 2));
};


/**
 * @param {!Array<!proto.penumbra.crypto.tct.v1alpha1.StateCommitmentProof>} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.WitnessData} returns this
*/
proto.penumbra.core.transaction.v1alpha1.WitnessData.prototype.setStateCommitmentProofsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.penumbra.crypto.tct.v1alpha1.StateCommitmentProof=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.crypto.tct.v1alpha1.StateCommitmentProof}
 */
proto.penumbra.core.transaction.v1alpha1.WitnessData.prototype.addStateCommitmentProofs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.penumbra.crypto.tct.v1alpha1.StateCommitmentProof, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.core.transaction.v1alpha1.WitnessData} returns this
 */
proto.penumbra.core.transaction.v1alpha1.WitnessData.prototype.clearStateCommitmentProofsList = function() {
  return this.setStateCommitmentProofsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.repeatedFields_ = [1,5];



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
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.TransactionPlan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionPlan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.penumbra.core.transaction.v1alpha1.ActionPlan.toObject, includeInstance),
    expiryHeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
    chainId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fee: (f = msg.getFee()) && penumbra_core_component_fee_v1alpha1_fee_pb.Fee.toObject(includeInstance, f),
    cluePlansList: jspb.Message.toObjectList(msg.getCluePlansList(),
    proto.penumbra.core.transaction.v1alpha1.CluePlan.toObject, includeInstance),
    memoPlan: (f = msg.getMemoPlan()) && proto.penumbra.core.transaction.v1alpha1.MemoPlan.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPlan}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.TransactionPlan;
  return proto.penumbra.core.transaction.v1alpha1.TransactionPlan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionPlan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPlan}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.transaction.v1alpha1.ActionPlan;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.ActionPlan.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExpiryHeight(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
      break;
    case 4:
      var value = new penumbra_core_component_fee_v1alpha1_fee_pb.Fee;
      reader.readMessage(value,penumbra_core_component_fee_v1alpha1_fee_pb.Fee.deserializeBinaryFromReader);
      msg.setFee(value);
      break;
    case 5:
      var value = new proto.penumbra.core.transaction.v1alpha1.CluePlan;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.CluePlan.deserializeBinaryFromReader);
      msg.addCluePlans(value);
      break;
    case 6:
      var value = new proto.penumbra.core.transaction.v1alpha1.MemoPlan;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.MemoPlan.deserializeBinaryFromReader);
      msg.setMemoPlan(value);
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
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.TransactionPlan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.TransactionPlan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.penumbra.core.transaction.v1alpha1.ActionPlan.serializeBinaryToWriter
    );
  }
  f = message.getExpiryHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFee();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_core_component_fee_v1alpha1_fee_pb.Fee.serializeBinaryToWriter
    );
  }
  f = message.getCluePlansList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.penumbra.core.transaction.v1alpha1.CluePlan.serializeBinaryToWriter
    );
  }
  f = message.getMemoPlan();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.penumbra.core.transaction.v1alpha1.MemoPlan.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ActionPlan actions = 1;
 * @return {!Array<!proto.penumbra.core.transaction.v1alpha1.ActionPlan>}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.penumbra.core.transaction.v1alpha1.ActionPlan>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.core.transaction.v1alpha1.ActionPlan, 1));
};


/**
 * @param {!Array<!proto.penumbra.core.transaction.v1alpha1.ActionPlan>} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.penumbra.core.transaction.v1alpha1.ActionPlan=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.penumbra.core.transaction.v1alpha1.ActionPlan, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};


/**
 * optional uint64 expiry_height = 2;
 * @return {number}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.getExpiryHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.setExpiryHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string chain_id = 3;
 * @return {string}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional penumbra.core.component.fee.v1alpha1.Fee fee = 4;
 * @return {?proto.penumbra.core.component.fee.v1alpha1.Fee}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.getFee = function() {
  return /** @type{?proto.penumbra.core.component.fee.v1alpha1.Fee} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_fee_v1alpha1_fee_pb.Fee, 4));
};


/**
 * @param {?proto.penumbra.core.component.fee.v1alpha1.Fee|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.setFee = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.clearFee = function() {
  return this.setFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.hasFee = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated CluePlan clue_plans = 5;
 * @return {!Array<!proto.penumbra.core.transaction.v1alpha1.CluePlan>}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.getCluePlansList = function() {
  return /** @type{!Array<!proto.penumbra.core.transaction.v1alpha1.CluePlan>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.core.transaction.v1alpha1.CluePlan, 5));
};


/**
 * @param {!Array<!proto.penumbra.core.transaction.v1alpha1.CluePlan>} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.setCluePlansList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.penumbra.core.transaction.v1alpha1.CluePlan=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.core.transaction.v1alpha1.CluePlan}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.addCluePlans = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.penumbra.core.transaction.v1alpha1.CluePlan, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.clearCluePlansList = function() {
  return this.setCluePlansList([]);
};


/**
 * optional MemoPlan memo_plan = 6;
 * @return {?proto.penumbra.core.transaction.v1alpha1.MemoPlan}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.getMemoPlan = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.MemoPlan} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.transaction.v1alpha1.MemoPlan, 6));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.MemoPlan|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.setMemoPlan = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.TransactionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.clearMemoPlan = function() {
  return this.setMemoPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.TransactionPlan.prototype.hasMemoPlan = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_ = [[1,2,3,4,16,17,18,19,20,21,22,23,30,31,32,34,40,41,42,50,51,52]];

/**
 * @enum {number}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.ActionCase = {
  ACTION_NOT_SET: 0,
  SPEND: 1,
  OUTPUT: 2,
  SWAP: 3,
  SWAP_CLAIM: 4,
  VALIDATOR_DEFINITION: 16,
  IBC_ACTION: 17,
  PROPOSAL_SUBMIT: 18,
  PROPOSAL_WITHDRAW: 19,
  VALIDATOR_VOTE: 20,
  DELEGATOR_VOTE: 21,
  PROPOSAL_DEPOSIT_CLAIM: 22,
  WITHDRAWAL: 23,
  POSITION_OPEN: 30,
  POSITION_CLOSE: 31,
  POSITION_WITHDRAW: 32,
  POSITION_REWARD_CLAIM: 34,
  DELEGATE: 40,
  UNDELEGATE: 41,
  UNDELEGATE_CLAIM: 42,
  DAO_SPEND: 50,
  DAO_OUTPUT: 51,
  DAO_DEPOSIT: 52
};

/**
 * @return {proto.penumbra.core.transaction.v1alpha1.ActionPlan.ActionCase}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getActionCase = function() {
  return /** @type {proto.penumbra.core.transaction.v1alpha1.ActionPlan.ActionCase} */(jspb.Message.computeOneofCase(this, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0]));
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
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.ActionPlan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.toObject = function(includeInstance, msg) {
  var f, obj = {
    spend: (f = msg.getSpend()) && penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.SpendPlan.toObject(includeInstance, f),
    output: (f = msg.getOutput()) && penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.OutputPlan.toObject(includeInstance, f),
    swap: (f = msg.getSwap()) && penumbra_core_component_dex_v1alpha1_dex_pb.SwapPlan.toObject(includeInstance, f),
    swapClaim: (f = msg.getSwapClaim()) && penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaimPlan.toObject(includeInstance, f),
    validatorDefinition: (f = msg.getValidatorDefinition()) && penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition.toObject(includeInstance, f),
    ibcAction: (f = msg.getIbcAction()) && penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction.toObject(includeInstance, f),
    proposalSubmit: (f = msg.getProposalSubmit()) && penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit.toObject(includeInstance, f),
    proposalWithdraw: (f = msg.getProposalWithdraw()) && penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw.toObject(includeInstance, f),
    validatorVote: (f = msg.getValidatorVote()) && penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote.toObject(includeInstance, f),
    delegatorVote: (f = msg.getDelegatorVote()) && penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVotePlan.toObject(includeInstance, f),
    proposalDepositClaim: (f = msg.getProposalDepositClaim()) && penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim.toObject(includeInstance, f),
    withdrawal: (f = msg.getWithdrawal()) && penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal.toObject(includeInstance, f),
    positionOpen: (f = msg.getPositionOpen()) && penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen.toObject(includeInstance, f),
    positionClose: (f = msg.getPositionClose()) && penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose.toObject(includeInstance, f),
    positionWithdraw: (f = msg.getPositionWithdraw()) && penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdrawPlan.toObject(includeInstance, f),
    positionRewardClaim: (f = msg.getPositionRewardClaim()) && penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaimPlan.toObject(includeInstance, f),
    delegate: (f = msg.getDelegate()) && penumbra_core_component_stake_v1alpha1_stake_pb.Delegate.toObject(includeInstance, f),
    undelegate: (f = msg.getUndelegate()) && penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate.toObject(includeInstance, f),
    undelegateClaim: (f = msg.getUndelegateClaim()) && penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaimPlan.toObject(includeInstance, f),
    daoSpend: (f = msg.getDaoSpend()) && penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend.toObject(includeInstance, f),
    daoOutput: (f = msg.getDaoOutput()) && penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput.toObject(includeInstance, f),
    daoDeposit: (f = msg.getDaoDeposit()) && penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.ActionPlan;
  return proto.penumbra.core.transaction.v1alpha1.ActionPlan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.SpendPlan;
      reader.readMessage(value,penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.SpendPlan.deserializeBinaryFromReader);
      msg.setSpend(value);
      break;
    case 2:
      var value = new penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.OutputPlan;
      reader.readMessage(value,penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.OutputPlan.deserializeBinaryFromReader);
      msg.setOutput(value);
      break;
    case 3:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.SwapPlan;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.SwapPlan.deserializeBinaryFromReader);
      msg.setSwap(value);
      break;
    case 4:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaimPlan;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaimPlan.deserializeBinaryFromReader);
      msg.setSwapClaim(value);
      break;
    case 16:
      var value = new penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition;
      reader.readMessage(value,penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition.deserializeBinaryFromReader);
      msg.setValidatorDefinition(value);
      break;
    case 17:
      var value = new penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction;
      reader.readMessage(value,penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction.deserializeBinaryFromReader);
      msg.setIbcAction(value);
      break;
    case 18:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit.deserializeBinaryFromReader);
      msg.setProposalSubmit(value);
      break;
    case 19:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw.deserializeBinaryFromReader);
      msg.setProposalWithdraw(value);
      break;
    case 20:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote.deserializeBinaryFromReader);
      msg.setValidatorVote(value);
      break;
    case 21:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVotePlan;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVotePlan.deserializeBinaryFromReader);
      msg.setDelegatorVote(value);
      break;
    case 22:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim.deserializeBinaryFromReader);
      msg.setProposalDepositClaim(value);
      break;
    case 23:
      var value = new penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal;
      reader.readMessage(value,penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal.deserializeBinaryFromReader);
      msg.setWithdrawal(value);
      break;
    case 30:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen.deserializeBinaryFromReader);
      msg.setPositionOpen(value);
      break;
    case 31:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose.deserializeBinaryFromReader);
      msg.setPositionClose(value);
      break;
    case 32:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdrawPlan;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdrawPlan.deserializeBinaryFromReader);
      msg.setPositionWithdraw(value);
      break;
    case 34:
      var value = new penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaimPlan;
      reader.readMessage(value,penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaimPlan.deserializeBinaryFromReader);
      msg.setPositionRewardClaim(value);
      break;
    case 40:
      var value = new penumbra_core_component_stake_v1alpha1_stake_pb.Delegate;
      reader.readMessage(value,penumbra_core_component_stake_v1alpha1_stake_pb.Delegate.deserializeBinaryFromReader);
      msg.setDelegate(value);
      break;
    case 41:
      var value = new penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate;
      reader.readMessage(value,penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate.deserializeBinaryFromReader);
      msg.setUndelegate(value);
      break;
    case 42:
      var value = new penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaimPlan;
      reader.readMessage(value,penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaimPlan.deserializeBinaryFromReader);
      msg.setUndelegateClaim(value);
      break;
    case 50:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend.deserializeBinaryFromReader);
      msg.setDaoSpend(value);
      break;
    case 51:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput.deserializeBinaryFromReader);
      msg.setDaoOutput(value);
      break;
    case 52:
      var value = new penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit;
      reader.readMessage(value,penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit.deserializeBinaryFromReader);
      msg.setDaoDeposit(value);
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
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.ActionPlan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpend();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.SpendPlan.serializeBinaryToWriter
    );
  }
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.OutputPlan.serializeBinaryToWriter
    );
  }
  f = message.getSwap();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.SwapPlan.serializeBinaryToWriter
    );
  }
  f = message.getSwapClaim();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaimPlan.serializeBinaryToWriter
    );
  }
  f = message.getValidatorDefinition();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition.serializeBinaryToWriter
    );
  }
  f = message.getIbcAction();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction.serializeBinaryToWriter
    );
  }
  f = message.getProposalSubmit();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit.serializeBinaryToWriter
    );
  }
  f = message.getProposalWithdraw();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw.serializeBinaryToWriter
    );
  }
  f = message.getValidatorVote();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote.serializeBinaryToWriter
    );
  }
  f = message.getDelegatorVote();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVotePlan.serializeBinaryToWriter
    );
  }
  f = message.getProposalDepositClaim();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim.serializeBinaryToWriter
    );
  }
  f = message.getWithdrawal();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal.serializeBinaryToWriter
    );
  }
  f = message.getPositionOpen();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen.serializeBinaryToWriter
    );
  }
  f = message.getPositionClose();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose.serializeBinaryToWriter
    );
  }
  f = message.getPositionWithdraw();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdrawPlan.serializeBinaryToWriter
    );
  }
  f = message.getPositionRewardClaim();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaimPlan.serializeBinaryToWriter
    );
  }
  f = message.getDelegate();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      penumbra_core_component_stake_v1alpha1_stake_pb.Delegate.serializeBinaryToWriter
    );
  }
  f = message.getUndelegate();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate.serializeBinaryToWriter
    );
  }
  f = message.getUndelegateClaim();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaimPlan.serializeBinaryToWriter
    );
  }
  f = message.getDaoSpend();
  if (f != null) {
    writer.writeMessage(
      50,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend.serializeBinaryToWriter
    );
  }
  f = message.getDaoOutput();
  if (f != null) {
    writer.writeMessage(
      51,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput.serializeBinaryToWriter
    );
  }
  f = message.getDaoDeposit();
  if (f != null) {
    writer.writeMessage(
      52,
      f,
      penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.component.shielded_pool.v1alpha1.SpendPlan spend = 1;
 * @return {?proto.penumbra.core.component.shielded_pool.v1alpha1.SpendPlan}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getSpend = function() {
  return /** @type{?proto.penumbra.core.component.shielded_pool.v1alpha1.SpendPlan} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.SpendPlan, 1));
};


/**
 * @param {?proto.penumbra.core.component.shielded_pool.v1alpha1.SpendPlan|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setSpend = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearSpend = function() {
  return this.setSpend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasSpend = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.component.shielded_pool.v1alpha1.OutputPlan output = 2;
 * @return {?proto.penumbra.core.component.shielded_pool.v1alpha1.OutputPlan}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getOutput = function() {
  return /** @type{?proto.penumbra.core.component.shielded_pool.v1alpha1.OutputPlan} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.OutputPlan, 2));
};


/**
 * @param {?proto.penumbra.core.component.shielded_pool.v1alpha1.OutputPlan|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setOutput = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.SwapPlan swap = 3;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapPlan}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getSwap = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapPlan} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.SwapPlan, 3));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapPlan|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setSwap = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearSwap = function() {
  return this.setSwap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasSwap = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.SwapClaimPlan swap_claim = 4;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getSwapClaim = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.SwapClaimPlan, 4));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.SwapClaimPlan|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setSwapClaim = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearSwapClaim = function() {
  return this.setSwapClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasSwapClaim = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional penumbra.core.component.stake.v1alpha1.ValidatorDefinition validator_definition = 16;
 * @return {?proto.penumbra.core.component.stake.v1alpha1.ValidatorDefinition}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getValidatorDefinition = function() {
  return /** @type{?proto.penumbra.core.component.stake.v1alpha1.ValidatorDefinition} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_stake_v1alpha1_stake_pb.ValidatorDefinition, 16));
};


/**
 * @param {?proto.penumbra.core.component.stake.v1alpha1.ValidatorDefinition|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setValidatorDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearValidatorDefinition = function() {
  return this.setValidatorDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasValidatorDefinition = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional penumbra.core.component.ibc.v1alpha1.IbcAction ibc_action = 17;
 * @return {?proto.penumbra.core.component.ibc.v1alpha1.IbcAction}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getIbcAction = function() {
  return /** @type{?proto.penumbra.core.component.ibc.v1alpha1.IbcAction} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcAction, 17));
};


/**
 * @param {?proto.penumbra.core.component.ibc.v1alpha1.IbcAction|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setIbcAction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearIbcAction = function() {
  return this.setIbcAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasIbcAction = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.ProposalSubmit proposal_submit = 18;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getProposalSubmit = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.ProposalSubmit, 18));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setProposalSubmit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearProposalSubmit = function() {
  return this.setProposalSubmit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasProposalSubmit = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.ProposalWithdraw proposal_withdraw = 19;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getProposalWithdraw = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.ProposalWithdraw, 19));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setProposalWithdraw = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearProposalWithdraw = function() {
  return this.setProposalWithdraw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasProposalWithdraw = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.ValidatorVote validator_vote = 20;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ValidatorVote}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getValidatorVote = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ValidatorVote} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.ValidatorVote, 20));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ValidatorVote|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setValidatorVote = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearValidatorVote = function() {
  return this.setValidatorVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasValidatorVote = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.DelegatorVotePlan delegator_vote = 21;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getDelegatorVote = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.DelegatorVotePlan, 21));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setDelegatorVote = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearDelegatorVote = function() {
  return this.setDelegatorVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasDelegatorVote = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.ProposalDepositClaim proposal_deposit_claim = 22;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getProposalDepositClaim = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.ProposalDepositClaim, 22));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setProposalDepositClaim = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearProposalDepositClaim = function() {
  return this.setProposalDepositClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasProposalDepositClaim = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal withdrawal = 23;
 * @return {?proto.penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getWithdrawal = function() {
  return /** @type{?proto.penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_ibc_v1alpha1_ibc_pb.Ics20Withdrawal, 23));
};


/**
 * @param {?proto.penumbra.core.component.ibc.v1alpha1.Ics20Withdrawal|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setWithdrawal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearWithdrawal = function() {
  return this.setWithdrawal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasWithdrawal = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.PositionOpen position_open = 30;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionOpen}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getPositionOpen = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionOpen} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.PositionOpen, 30));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionOpen|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setPositionOpen = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearPositionOpen = function() {
  return this.setPositionOpen(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasPositionOpen = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.PositionClose position_close = 31;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionClose}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getPositionClose = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionClose} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.PositionClose, 31));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionClose|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setPositionClose = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearPositionClose = function() {
  return this.setPositionClose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasPositionClose = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan position_withdraw = 32;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getPositionWithdraw = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.PositionWithdrawPlan, 32));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionWithdrawPlan|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setPositionWithdraw = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearPositionWithdraw = function() {
  return this.setPositionWithdraw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasPositionWithdraw = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan position_reward_claim = 34;
 * @return {?proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getPositionRewardClaim = function() {
  return /** @type{?proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dex_v1alpha1_dex_pb.PositionRewardClaimPlan, 34));
};


/**
 * @param {?proto.penumbra.core.component.dex.v1alpha1.PositionRewardClaimPlan|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setPositionRewardClaim = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearPositionRewardClaim = function() {
  return this.setPositionRewardClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasPositionRewardClaim = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional penumbra.core.component.stake.v1alpha1.Delegate delegate = 40;
 * @return {?proto.penumbra.core.component.stake.v1alpha1.Delegate}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getDelegate = function() {
  return /** @type{?proto.penumbra.core.component.stake.v1alpha1.Delegate} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_stake_v1alpha1_stake_pb.Delegate, 40));
};


/**
 * @param {?proto.penumbra.core.component.stake.v1alpha1.Delegate|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setDelegate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 40, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearDelegate = function() {
  return this.setDelegate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasDelegate = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional penumbra.core.component.stake.v1alpha1.Undelegate undelegate = 41;
 * @return {?proto.penumbra.core.component.stake.v1alpha1.Undelegate}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getUndelegate = function() {
  return /** @type{?proto.penumbra.core.component.stake.v1alpha1.Undelegate} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_stake_v1alpha1_stake_pb.Undelegate, 41));
};


/**
 * @param {?proto.penumbra.core.component.stake.v1alpha1.Undelegate|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setUndelegate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 41, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearUndelegate = function() {
  return this.setUndelegate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasUndelegate = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional penumbra.core.component.stake.v1alpha1.UndelegateClaimPlan undelegate_claim = 42;
 * @return {?proto.penumbra.core.component.stake.v1alpha1.UndelegateClaimPlan}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getUndelegateClaim = function() {
  return /** @type{?proto.penumbra.core.component.stake.v1alpha1.UndelegateClaimPlan} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_stake_v1alpha1_stake_pb.UndelegateClaimPlan, 42));
};


/**
 * @param {?proto.penumbra.core.component.stake.v1alpha1.UndelegateClaimPlan|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setUndelegateClaim = function(value) {
  return jspb.Message.setOneofWrapperField(this, 42, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearUndelegateClaim = function() {
  return this.setUndelegateClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasUndelegateClaim = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.DaoSpend dao_spend = 50;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.DaoSpend}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getDaoSpend = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.DaoSpend} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.DaoSpend, 50));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.DaoSpend|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setDaoSpend = function(value) {
  return jspb.Message.setOneofWrapperField(this, 50, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearDaoSpend = function() {
  return this.setDaoSpend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasDaoSpend = function() {
  return jspb.Message.getField(this, 50) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.DaoOutput dao_output = 51;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.DaoOutput}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getDaoOutput = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.DaoOutput} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.DaoOutput, 51));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.DaoOutput|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setDaoOutput = function(value) {
  return jspb.Message.setOneofWrapperField(this, 51, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearDaoOutput = function() {
  return this.setDaoOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasDaoOutput = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * optional penumbra.core.component.governance.v1alpha1.DaoDeposit dao_deposit = 52;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.DaoDeposit}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.getDaoDeposit = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.DaoDeposit} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_governance_v1alpha1_governance_pb.DaoDeposit, 52));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.DaoDeposit|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.setDaoDeposit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 52, proto.penumbra.core.transaction.v1alpha1.ActionPlan.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.ActionPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.clearDaoDeposit = function() {
  return this.setDaoDeposit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.ActionPlan.prototype.hasDaoDeposit = function() {
  return jspb.Message.getField(this, 52) != null;
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
proto.penumbra.core.transaction.v1alpha1.CluePlan.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.CluePlan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.CluePlan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.CluePlan.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: (f = msg.getAddress()) && penumbra_core_keys_v1alpha1_keys_pb.Address.toObject(includeInstance, f),
    rseed: msg.getRseed_asB64(),
    precisionBits: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.CluePlan}
 */
proto.penumbra.core.transaction.v1alpha1.CluePlan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.CluePlan;
  return proto.penumbra.core.transaction.v1alpha1.CluePlan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.CluePlan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.CluePlan}
 */
proto.penumbra.core.transaction.v1alpha1.CluePlan.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRseed(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPrecisionBits(value);
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
proto.penumbra.core.transaction.v1alpha1.CluePlan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.CluePlan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.CluePlan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.CluePlan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getRseed_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getPrecisionBits();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional penumbra.core.keys.v1alpha1.Address address = 1;
 * @return {?proto.penumbra.core.keys.v1alpha1.Address}
 */
proto.penumbra.core.transaction.v1alpha1.CluePlan.prototype.getAddress = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.Address} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.Address, 1));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.Address|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.CluePlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.CluePlan.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.CluePlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.CluePlan.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.CluePlan.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes rseed = 2;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.transaction.v1alpha1.CluePlan.prototype.getRseed = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes rseed = 2;
 * This is a type-conversion wrapper around `getRseed()`
 * @return {string}
 */
proto.penumbra.core.transaction.v1alpha1.CluePlan.prototype.getRseed_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRseed()));
};


/**
 * optional bytes rseed = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRseed()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.transaction.v1alpha1.CluePlan.prototype.getRseed_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRseed()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.CluePlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.CluePlan.prototype.setRseed = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint64 precision_bits = 3;
 * @return {number}
 */
proto.penumbra.core.transaction.v1alpha1.CluePlan.prototype.getPrecisionBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.CluePlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.CluePlan.prototype.setPrecisionBits = function(value) {
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
proto.penumbra.core.transaction.v1alpha1.MemoPlan.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.MemoPlan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoPlan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlan.toObject = function(includeInstance, msg) {
  var f, obj = {
    plaintext: (f = msg.getPlaintext()) && proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.toObject(includeInstance, f),
    key: msg.getKey_asB64()
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoPlan}
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.MemoPlan;
  return proto.penumbra.core.transaction.v1alpha1.MemoPlan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoPlan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoPlan}
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.transaction.v1alpha1.MemoPlaintext;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.deserializeBinaryFromReader);
      msg.setPlaintext(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
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
proto.penumbra.core.transaction.v1alpha1.MemoPlan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.MemoPlan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoPlan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaintext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.serializeBinaryToWriter
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional MemoPlaintext plaintext = 1;
 * @return {?proto.penumbra.core.transaction.v1alpha1.MemoPlaintext}
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlan.prototype.getPlaintext = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.MemoPlaintext} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.transaction.v1alpha1.MemoPlaintext, 1));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.MemoPlaintext|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoPlan} returns this
*/
proto.penumbra.core.transaction.v1alpha1.MemoPlan.prototype.setPlaintext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlan.prototype.clearPlaintext = function() {
  return this.setPlaintext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlan.prototype.hasPlaintext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlan.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes key = 2;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlan.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlan.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoPlan} returns this
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlan.prototype.setKey = function(value) {
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
proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoCiphertext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.toObject = function(includeInstance, msg) {
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoCiphertext}
 */
proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.MemoCiphertext;
  return proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoCiphertext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoCiphertext}
 */
proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.deserializeBinaryFromReader = function(msg, reader) {
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
proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoCiphertext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.serializeBinaryToWriter = function(message, writer) {
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
proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.prototype.getInner = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes inner = 1;
 * This is a type-conversion wrapper around `getInner()`
 * @return {string}
 */
proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.prototype.getInner_asB64 = function() {
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
proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.prototype.getInner_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInner()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoCiphertext} returns this
 */
proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.prototype.setInner = function(value) {
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
proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoPlaintext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: (f = msg.getSender()) && penumbra_core_keys_v1alpha1_keys_pb.Address.toObject(includeInstance, f),
    text: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoPlaintext}
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.MemoPlaintext;
  return proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoPlaintext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoPlaintext}
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.Address;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.Address.deserializeBinaryFromReader);
      msg.setSender(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
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
proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoPlaintext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional penumbra.core.keys.v1alpha1.Address sender = 1;
 * @return {?proto.penumbra.core.keys.v1alpha1.Address}
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.prototype.getSender = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.Address} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.Address, 1));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.Address|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoPlaintext} returns this
*/
proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.prototype.setSender = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoPlaintext} returns this
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.prototype.clearSender = function() {
  return this.setSender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.prototype.hasSender = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoPlaintext} returns this
 */
proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.MemoViewCase = {
  MEMO_VIEW_NOT_SET: 0,
  VISIBLE: 1,
  OPAQUE: 2
};

/**
 * @return {proto.penumbra.core.transaction.v1alpha1.MemoView.MemoViewCase}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.prototype.getMemoViewCase = function() {
  return /** @type {proto.penumbra.core.transaction.v1alpha1.MemoView.MemoViewCase} */(jspb.Message.computeOneofCase(this, proto.penumbra.core.transaction.v1alpha1.MemoView.oneofGroups_[0]));
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
proto.penumbra.core.transaction.v1alpha1.MemoView.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.MemoView.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoView} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.toObject = function(includeInstance, msg) {
  var f, obj = {
    visible: (f = msg.getVisible()) && proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoView}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.MemoView;
  return proto.penumbra.core.transaction.v1alpha1.MemoView.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoView} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoView}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.transaction.v1alpha1.MemoView.Visible;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.deserializeBinaryFromReader);
      msg.setVisible(value);
      break;
    case 2:
      var value = new proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque.deserializeBinaryFromReader);
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
proto.penumbra.core.transaction.v1alpha1.MemoView.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.MemoView.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoView} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVisible();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque.serializeBinaryToWriter
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
proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoView.Visible} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.toObject = function(includeInstance, msg) {
  var f, obj = {
    ciphertext: (f = msg.getCiphertext()) && proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.toObject(includeInstance, f),
    plaintext: (f = msg.getPlaintext()) && proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoView.Visible}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.MemoView.Visible;
  return proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoView.Visible} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoView.Visible}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.transaction.v1alpha1.MemoCiphertext;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.deserializeBinaryFromReader);
      msg.setCiphertext(value);
      break;
    case 2:
      var value = new proto.penumbra.core.transaction.v1alpha1.MemoPlaintext;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.deserializeBinaryFromReader);
      msg.setPlaintext(value);
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
proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoView.Visible} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCiphertext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.serializeBinaryToWriter
    );
  }
  f = message.getPlaintext();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.transaction.v1alpha1.MemoPlaintext.serializeBinaryToWriter
    );
  }
};


/**
 * optional MemoCiphertext ciphertext = 1;
 * @return {?proto.penumbra.core.transaction.v1alpha1.MemoCiphertext}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.prototype.getCiphertext = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.MemoCiphertext} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.transaction.v1alpha1.MemoCiphertext, 1));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.MemoCiphertext|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoView.Visible} returns this
*/
proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.prototype.setCiphertext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoView.Visible} returns this
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.prototype.clearCiphertext = function() {
  return this.setCiphertext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.prototype.hasCiphertext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MemoPlaintext plaintext = 2;
 * @return {?proto.penumbra.core.transaction.v1alpha1.MemoPlaintext}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.prototype.getPlaintext = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.MemoPlaintext} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.transaction.v1alpha1.MemoPlaintext, 2));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.MemoPlaintext|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoView.Visible} returns this
*/
proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.prototype.setPlaintext = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoView.Visible} returns this
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.prototype.clearPlaintext = function() {
  return this.setPlaintext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.Visible.prototype.hasPlaintext = function() {
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
proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque.toObject = function(includeInstance, msg) {
  var f, obj = {
    ciphertext: (f = msg.getCiphertext()) && proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque;
  return proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.transaction.v1alpha1.MemoCiphertext;
      reader.readMessage(value,proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.deserializeBinaryFromReader);
      msg.setCiphertext(value);
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
proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCiphertext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.transaction.v1alpha1.MemoCiphertext.serializeBinaryToWriter
    );
  }
};


/**
 * optional MemoCiphertext ciphertext = 1;
 * @return {?proto.penumbra.core.transaction.v1alpha1.MemoCiphertext}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque.prototype.getCiphertext = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.MemoCiphertext} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.transaction.v1alpha1.MemoCiphertext, 1));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.MemoCiphertext|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque} returns this
*/
proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque.prototype.setCiphertext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque} returns this
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque.prototype.clearCiphertext = function() {
  return this.setCiphertext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque.prototype.hasCiphertext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Visible visible = 1;
 * @return {?proto.penumbra.core.transaction.v1alpha1.MemoView.Visible}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.prototype.getVisible = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.MemoView.Visible} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.transaction.v1alpha1.MemoView.Visible, 1));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.MemoView.Visible|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.MemoView.prototype.setVisible = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.penumbra.core.transaction.v1alpha1.MemoView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.prototype.clearVisible = function() {
  return this.setVisible(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.prototype.hasVisible = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Opaque opaque = 2;
 * @return {?proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.prototype.getOpaque = function() {
  return /** @type{?proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque, 2));
};


/**
 * @param {?proto.penumbra.core.transaction.v1alpha1.MemoView.Opaque|undefined} value
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoView} returns this
*/
proto.penumbra.core.transaction.v1alpha1.MemoView.prototype.setOpaque = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.penumbra.core.transaction.v1alpha1.MemoView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.transaction.v1alpha1.MemoView} returns this
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.transaction.v1alpha1.MemoView.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.penumbra.core.transaction.v1alpha1);
