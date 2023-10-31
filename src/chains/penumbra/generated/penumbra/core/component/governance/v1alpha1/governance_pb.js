// source: penumbra/core/component/governance/v1alpha1/governance.proto
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

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb = require('../../../../../penumbra/crypto/decaf377_rdsa/v1alpha1/decaf377_rdsa_pb.js');
goog.object.extend(proto, penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb);
var penumbra_core_num_v1alpha1_num_pb = require('../../../../../penumbra/core/num/v1alpha1/num_pb.js');
goog.object.extend(proto, penumbra_core_num_v1alpha1_num_pb);
var penumbra_core_asset_v1alpha1_asset_pb = require('../../../../../penumbra/core/asset/v1alpha1/asset_pb.js');
goog.object.extend(proto, penumbra_core_asset_v1alpha1_asset_pb);
var penumbra_core_keys_v1alpha1_keys_pb = require('../../../../../penumbra/core/keys/v1alpha1/keys_pb.js');
goog.object.extend(proto, penumbra_core_keys_v1alpha1_keys_pb);
var penumbra_core_component_chain_v1alpha1_chain_pb = require('../../../../../penumbra/core/component/chain/v1alpha1/chain_pb.js');
goog.object.extend(proto, penumbra_core_component_chain_v1alpha1_chain_pb);
var penumbra_core_component_fee_v1alpha1_fee_pb = require('../../../../../penumbra/core/component/fee/v1alpha1/fee_pb.js');
goog.object.extend(proto, penumbra_core_component_fee_v1alpha1_fee_pb);
var penumbra_core_component_dao_v1alpha1_dao_pb = require('../../../../../penumbra/core/component/dao/v1alpha1/dao_pb.js');
goog.object.extend(proto, penumbra_core_component_dao_v1alpha1_dao_pb);
var penumbra_core_component_ibc_v1alpha1_ibc_pb = require('../../../../../penumbra/core/component/ibc/v1alpha1/ibc_pb.js');
goog.object.extend(proto, penumbra_core_component_ibc_v1alpha1_ibc_pb);
var penumbra_core_component_stake_v1alpha1_stake_pb = require('../../../../../penumbra/core/component/stake/v1alpha1/stake_pb.js');
goog.object.extend(proto, penumbra_core_component_stake_v1alpha1_stake_pb);
var penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb = require('../../../../../penumbra/core/component/shielded_pool/v1alpha1/shielded_pool_pb.js');
goog.object.extend(proto, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.DaoDeposit', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.DaoOutput', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.DaoSpend', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.DelegatorVote', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.DelegatorVoteCase', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.GenesisContent', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.Proposal', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.OutcomeCase', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalState', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalState.StateCase', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.Tally', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ValidatorVote', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.Vote', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.Vote.Vote', null, global);
goog.exportSymbol('proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof', null, global);
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
proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof';
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
proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit';
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
proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw';
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
proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim';
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
proto.penumbra.core.component.governance.v1alpha1.ValidatorVote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ValidatorVote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ValidatorVote';
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
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason';
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
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody';
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.DelegatorVote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.displayName = 'proto.penumbra.core.component.governance.v1alpha1.DelegatorVote';
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.displayName = 'proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody';
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.oneofGroups_);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.displayName = 'proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView';
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.displayName = 'proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible';
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque.displayName = 'proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque';
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.displayName = 'proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan';
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
proto.penumbra.core.component.governance.v1alpha1.DaoDeposit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.DaoDeposit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.DaoDeposit.displayName = 'proto.penumbra.core.component.governance.v1alpha1.DaoDeposit';
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
proto.penumbra.core.component.governance.v1alpha1.DaoSpend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.DaoSpend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.DaoSpend.displayName = 'proto.penumbra.core.component.governance.v1alpha1.DaoSpend';
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
proto.penumbra.core.component.governance.v1alpha1.DaoOutput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.DaoOutput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.DaoOutput.displayName = 'proto.penumbra.core.component.governance.v1alpha1.DaoOutput';
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
proto.penumbra.core.component.governance.v1alpha1.Vote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.Vote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.Vote.displayName = 'proto.penumbra.core.component.governance.v1alpha1.Vote';
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
proto.penumbra.core.component.governance.v1alpha1.ProposalState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.penumbra.core.component.governance.v1alpha1.ProposalState.oneofGroups_);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ProposalState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ProposalState.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ProposalState';
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
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting';
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
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn';
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
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished';
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
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed';
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
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.oneofGroups_);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome';
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
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn';
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
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed';
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
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed';
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
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed';
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
proto.penumbra.core.component.governance.v1alpha1.Tally = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.Tally, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.Tally.displayName = 'proto.penumbra.core.component.governance.v1alpha1.Tally';
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
proto.penumbra.core.component.governance.v1alpha1.Proposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.Proposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.Proposal.displayName = 'proto.penumbra.core.component.governance.v1alpha1.Proposal';
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
proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling.displayName = 'proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling';
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
proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency.displayName = 'proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency';
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
proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.displayName = 'proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange';
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
proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend.displayName = 'proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend';
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
proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan.displayName = 'proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan';
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
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest';
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
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse';
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
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest';
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
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse';
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
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.displayName = 'proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters';
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
proto.penumbra.core.component.governance.v1alpha1.GenesisContent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.GenesisContent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.GenesisContent.displayName = 'proto.penumbra.core.component.governance.v1alpha1.GenesisContent';
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
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters';
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
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.displayName = 'proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet';
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
proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof.toObject = function(includeInstance, msg) {
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof}
 */
proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof;
  return proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof}
 */
proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof.deserializeBinaryFromReader = function(msg, reader) {
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
proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof.serializeBinaryToWriter = function(message, writer) {
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
proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof.prototype.getInner = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes inner = 1;
 * This is a type-conversion wrapper around `getInner()`
 * @return {string}
 */
proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof.prototype.getInner_asB64 = function() {
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
proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof.prototype.getInner_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInner()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof.prototype.setInner = function(value) {
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
proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposal: (f = msg.getProposal()) && proto.penumbra.core.component.governance.v1alpha1.Proposal.toObject(includeInstance, f),
    depositAmount: (f = msg.getDepositAmount()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit;
  return proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.governance.v1alpha1.Proposal;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.Proposal.deserializeBinaryFromReader);
      msg.setProposal(value);
      break;
    case 3:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setDepositAmount(value);
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
proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.governance.v1alpha1.Proposal.serializeBinaryToWriter
    );
  }
  f = message.getDepositAmount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
};


/**
 * optional Proposal proposal = 1;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.Proposal}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.prototype.getProposal = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.Proposal} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.Proposal, 1));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.Proposal|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.prototype.setProposal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.prototype.clearProposal = function() {
  return this.setProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.prototype.hasProposal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.num.v1alpha1.Amount deposit_amount = 3;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.prototype.getDepositAmount = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 3));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.prototype.setDepositAmount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.prototype.clearDepositAmount = function() {
  return this.setDepositAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalSubmit.prototype.hasDepositAmount = function() {
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
proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposal: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw;
  return proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProposal(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
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
proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposal();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 proposal = 1;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw.prototype.getProposal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw.prototype.setProposal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalWithdraw.prototype.setReason = function(value) {
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
proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposal: jspb.Message.getFieldWithDefault(msg, 1, 0),
    depositAmount: (f = msg.getDepositAmount()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    outcome: (f = msg.getOutcome()) && proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim;
  return proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProposal(value);
      break;
    case 2:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setDepositAmount(value);
      break;
    case 3:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.deserializeBinaryFromReader);
      msg.setOutcome(value);
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
proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposal();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getDepositAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getOutcome();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 proposal = 1;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.prototype.getProposal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.prototype.setProposal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional penumbra.core.num.v1alpha1.Amount deposit_amount = 2;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.prototype.getDepositAmount = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 2));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.prototype.setDepositAmount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.prototype.clearDepositAmount = function() {
  return this.setDepositAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.prototype.hasDepositAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ProposalOutcome outcome = 3;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.prototype.getOutcome = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome, 3));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.prototype.setOutcome = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.prototype.clearOutcome = function() {
  return this.setOutcome(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalDepositClaim.prototype.hasOutcome = function() {
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
proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.toObject = function(includeInstance, msg) {
  var f, obj = {
    body: (f = msg.getBody()) && proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.toObject(includeInstance, f),
    authSig: (f = msg.getAuthSig()) && penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVote}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ValidatorVote;
  return proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVote}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.deserializeBinaryFromReader);
      msg.setBody(value);
      break;
    case 2:
      var value = new penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature;
      reader.readMessage(value,penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature.deserializeBinaryFromReader);
      msg.setAuthSig(value);
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
proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.serializeBinaryToWriter
    );
  }
  f = message.getAuthSig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature.serializeBinaryToWriter
    );
  }
};


/**
 * optional ValidatorVoteBody body = 1;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.prototype.getBody = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody, 1));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVote} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVote} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.prototype.hasBody = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature auth_sig = 2;
 * @return {?proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.prototype.getAuthSig = function() {
  return /** @type{?proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature} */ (
    jspb.Message.getWrapperField(this, penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature, 2));
};


/**
 * @param {?proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVote} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.prototype.setAuthSig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVote} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.prototype.clearAuthSig = function() {
  return this.setAuthSig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVote.prototype.hasAuthSig = function() {
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
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason.toObject = function(includeInstance, msg) {
  var f, obj = {
    reason: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason;
  return proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
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
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string reason = 1;
 * @return {string}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposal: jspb.Message.getFieldWithDefault(msg, 1, 0),
    vote: (f = msg.getVote()) && proto.penumbra.core.component.governance.v1alpha1.Vote.toObject(includeInstance, f),
    identityKey: (f = msg.getIdentityKey()) && penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.toObject(includeInstance, f),
    governanceKey: (f = msg.getGovernanceKey()) && penumbra_core_keys_v1alpha1_keys_pb.GovernanceKey.toObject(includeInstance, f),
    reason: (f = msg.getReason()) && proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody;
  return proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProposal(value);
      break;
    case 2:
      var value = new proto.penumbra.core.component.governance.v1alpha1.Vote;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.Vote.deserializeBinaryFromReader);
      msg.setVote(value);
      break;
    case 3:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.IdentityKey;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.deserializeBinaryFromReader);
      msg.setIdentityKey(value);
      break;
    case 4:
      var value = new penumbra_core_keys_v1alpha1_keys_pb.GovernanceKey;
      reader.readMessage(value,penumbra_core_keys_v1alpha1_keys_pb.GovernanceKey.deserializeBinaryFromReader);
      msg.setGovernanceKey(value);
      break;
    case 5:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason.deserializeBinaryFromReader);
      msg.setReason(value);
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
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposal();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getVote();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.component.governance.v1alpha1.Vote.serializeBinaryToWriter
    );
  }
  f = message.getIdentityKey();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.IdentityKey.serializeBinaryToWriter
    );
  }
  f = message.getGovernanceKey();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_core_keys_v1alpha1_keys_pb.GovernanceKey.serializeBinaryToWriter
    );
  }
  f = message.getReason();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 proposal = 1;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.getProposal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.setProposal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Vote vote = 2;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.Vote}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.getVote = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.Vote} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.Vote, 2));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.Vote|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.setVote = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.clearVote = function() {
  return this.setVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.hasVote = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.core.keys.v1alpha1.IdentityKey identity_key = 3;
 * @return {?proto.penumbra.core.keys.v1alpha1.IdentityKey}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.getIdentityKey = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.IdentityKey} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.IdentityKey, 3));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.IdentityKey|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.setIdentityKey = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.clearIdentityKey = function() {
  return this.setIdentityKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.hasIdentityKey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.core.keys.v1alpha1.GovernanceKey governance_key = 4;
 * @return {?proto.penumbra.core.keys.v1alpha1.GovernanceKey}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.getGovernanceKey = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.GovernanceKey} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.GovernanceKey, 4));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.GovernanceKey|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.setGovernanceKey = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.clearGovernanceKey = function() {
  return this.setGovernanceKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.hasGovernanceKey = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ValidatorVoteReason reason = 5;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.getReason = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason, 5));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteReason|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.setReason = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.clearReason = function() {
  return this.setReason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ValidatorVoteBody.prototype.hasReason = function() {
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.toObject = function(includeInstance, msg) {
  var f, obj = {
    body: (f = msg.getBody()) && proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.toObject(includeInstance, f),
    authSig: (f = msg.getAuthSig()) && penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature.toObject(includeInstance, f),
    proof: (f = msg.getProof()) && proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVote}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.DelegatorVote;
  return proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVote}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.deserializeBinaryFromReader);
      msg.setBody(value);
      break;
    case 2:
      var value = new penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature;
      reader.readMessage(value,penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature.deserializeBinaryFromReader);
      msg.setAuthSig(value);
      break;
    case 3:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof.deserializeBinaryFromReader);
      msg.setProof(value);
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.serializeBinaryToWriter
    );
  }
  f = message.getAuthSig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature.serializeBinaryToWriter
    );
  }
  f = message.getProof();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof.serializeBinaryToWriter
    );
  }
};


/**
 * optional DelegatorVoteBody body = 1;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.prototype.getBody = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody, 1));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVote} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVote} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.prototype.hasBody = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature auth_sig = 2;
 * @return {?proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.prototype.getAuthSig = function() {
  return /** @type{?proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature} */ (
    jspb.Message.getWrapperField(this, penumbra_crypto_decaf377_rdsa_v1alpha1_decaf377_rdsa_pb.SpendAuthSignature, 2));
};


/**
 * @param {?proto.penumbra.crypto.decaf377_rdsa.v1alpha1.SpendAuthSignature|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVote} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.prototype.setAuthSig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVote} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.prototype.clearAuthSig = function() {
  return this.setAuthSig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.prototype.hasAuthSig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ZKDelegatorVoteProof proof = 3;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.prototype.getProof = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof, 3));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ZKDelegatorVoteProof|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVote} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.prototype.setProof = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVote} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.prototype.clearProof = function() {
  return this.setProof(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.prototype.hasProof = function() {
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposal: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startPosition: jspb.Message.getFieldWithDefault(msg, 2, 0),
    vote: (f = msg.getVote()) && proto.penumbra.core.component.governance.v1alpha1.Vote.toObject(includeInstance, f),
    value: (f = msg.getValue()) && penumbra_core_asset_v1alpha1_asset_pb.Value.toObject(includeInstance, f),
    unbondedAmount: (f = msg.getUnbondedAmount()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    nullifier: msg.getNullifier_asB64(),
    rk: msg.getRk_asB64()
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody;
  return proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProposal(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartPosition(value);
      break;
    case 3:
      var value = new proto.penumbra.core.component.governance.v1alpha1.Vote;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.Vote.deserializeBinaryFromReader);
      msg.setVote(value);
      break;
    case 4:
      var value = new penumbra_core_asset_v1alpha1_asset_pb.Value;
      reader.readMessage(value,penumbra_core_asset_v1alpha1_asset_pb.Value.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 5:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setUnbondedAmount(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNullifier(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRk(value);
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposal();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getStartPosition();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getVote();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.core.component.governance.v1alpha1.Vote.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getUnbondedAmount();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getNullifier_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getRk_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
};


/**
 * optional uint64 proposal = 1;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.getProposal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.setProposal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 start_position = 2;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.getStartPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.setStartPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Vote vote = 3;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.Vote}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.getVote = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.Vote} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.Vote, 3));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.Vote|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.setVote = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.clearVote = function() {
  return this.setVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.hasVote = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.core.asset.v1alpha1.Value value = 4;
 * @return {?proto.penumbra.core.asset.v1alpha1.Value}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.getValue = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.Value} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.Value, 4));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.Value|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.hasValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional penumbra.core.num.v1alpha1.Amount unbonded_amount = 5;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.getUnbondedAmount = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 5));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.setUnbondedAmount = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.clearUnbondedAmount = function() {
  return this.setUnbondedAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.hasUnbondedAmount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bytes nullifier = 6;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.getNullifier = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes nullifier = 6;
 * This is a type-conversion wrapper around `getNullifier()`
 * @return {string}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.getNullifier_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNullifier()));
};


/**
 * optional bytes nullifier = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNullifier()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.getNullifier_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNullifier()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.setNullifier = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bytes rk = 7;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.getRk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes rk = 7;
 * This is a type-conversion wrapper around `getRk()`
 * @return {string}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.getRk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRk()));
};


/**
 * optional bytes rk = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRk()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.getRk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteBody.prototype.setRk = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.DelegatorVoteCase = {
  DELEGATOR_VOTE_NOT_SET: 0,
  VISIBLE: 1,
  OPAQUE: 2
};

/**
 * @return {proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.DelegatorVoteCase}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.prototype.getDelegatorVoteCase = function() {
  return /** @type {proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.DelegatorVoteCase} */(jspb.Message.computeOneofCase(this, proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.oneofGroups_[0]));
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.toObject = function(includeInstance, msg) {
  var f, obj = {
    visible: (f = msg.getVisible()) && proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView;
  return proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.deserializeBinaryFromReader);
      msg.setVisible(value);
      break;
    case 2:
      var value = new proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque.deserializeBinaryFromReader);
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVisible();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque.serializeBinaryToWriter
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegatorVote: (f = msg.getDelegatorVote()) && proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.toObject(includeInstance, f),
    note: (f = msg.getNote()) && penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible;
  return proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.governance.v1alpha1.DelegatorVote;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.deserializeBinaryFromReader);
      msg.setDelegatorVote(value);
      break;
    case 2:
      var value = new penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView;
      reader.readMessage(value,penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView.deserializeBinaryFromReader);
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegatorVote();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.serializeBinaryToWriter
    );
  }
  f = message.getNote();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView.serializeBinaryToWriter
    );
  }
};


/**
 * optional DelegatorVote delegator_vote = 1;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.DelegatorVote}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.prototype.getDelegatorVote = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.DelegatorVote} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.DelegatorVote, 1));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.DelegatorVote|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.prototype.setDelegatorVote = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.prototype.clearDelegatorVote = function() {
  return this.setDelegatorVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.prototype.hasDelegatorVote = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.component.shielded_pool.v1alpha1.NoteView note = 2;
 * @return {?proto.penumbra.core.component.shielded_pool.v1alpha1.NoteView}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.prototype.getNote = function() {
  return /** @type{?proto.penumbra.core.component.shielded_pool.v1alpha1.NoteView} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.NoteView, 2));
};


/**
 * @param {?proto.penumbra.core.component.shielded_pool.v1alpha1.NoteView|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.prototype.setNote = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.prototype.clearNote = function() {
  return this.setNote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible.prototype.hasNote = function() {
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegatorVote: (f = msg.getDelegatorVote()) && proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque;
  return proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.governance.v1alpha1.DelegatorVote;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.deserializeBinaryFromReader);
      msg.setDelegatorVote(value);
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegatorVote();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.governance.v1alpha1.DelegatorVote.serializeBinaryToWriter
    );
  }
};


/**
 * optional DelegatorVote delegator_vote = 1;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.DelegatorVote}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque.prototype.getDelegatorVote = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.DelegatorVote} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.DelegatorVote, 1));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.DelegatorVote|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque.prototype.setDelegatorVote = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque.prototype.clearDelegatorVote = function() {
  return this.setDelegatorVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque.prototype.hasDelegatorVote = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Visible visible = 1;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.prototype.getVisible = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible, 1));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Visible|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.prototype.setVisible = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.prototype.clearVisible = function() {
  return this.setVisible(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.prototype.hasVisible = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Opaque opaque = 2;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.prototype.getOpaque = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque, 2));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.Opaque|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.prototype.setOpaque = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVoteView.prototype.hasOpaque = function() {
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposal: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startPosition: jspb.Message.getFieldWithDefault(msg, 2, 0),
    vote: (f = msg.getVote()) && proto.penumbra.core.component.governance.v1alpha1.Vote.toObject(includeInstance, f),
    stakedNote: (f = msg.getStakedNote()) && penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note.toObject(includeInstance, f),
    stakedNotePosition: jspb.Message.getFieldWithDefault(msg, 5, 0),
    unbondedAmount: (f = msg.getUnbondedAmount()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    randomizer: msg.getRandomizer_asB64(),
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan;
  return proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProposal(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartPosition(value);
      break;
    case 3:
      var value = new proto.penumbra.core.component.governance.v1alpha1.Vote;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.Vote.deserializeBinaryFromReader);
      msg.setVote(value);
      break;
    case 4:
      var value = new penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note;
      reader.readMessage(value,penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note.deserializeBinaryFromReader);
      msg.setStakedNote(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStakedNotePosition(value);
      break;
    case 6:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setUnbondedAmount(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRandomizer(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProofBlindingR(value);
      break;
    case 9:
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
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposal();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getStartPosition();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getVote();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.core.component.governance.v1alpha1.Vote.serializeBinaryToWriter
    );
  }
  f = message.getStakedNote();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note.serializeBinaryToWriter
    );
  }
  f = message.getStakedNotePosition();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getUnbondedAmount();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getRandomizer_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getProofBlindingR_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = message.getProofBlindingS_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
};


/**
 * optional uint64 proposal = 1;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.getProposal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.setProposal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 start_position = 2;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.getStartPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.setStartPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Vote vote = 3;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.Vote}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.getVote = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.Vote} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.Vote, 3));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.Vote|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.setVote = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.clearVote = function() {
  return this.setVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.hasVote = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.core.component.shielded_pool.v1alpha1.Note staked_note = 4;
 * @return {?proto.penumbra.core.component.shielded_pool.v1alpha1.Note}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.getStakedNote = function() {
  return /** @type{?proto.penumbra.core.component.shielded_pool.v1alpha1.Note} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_shielded_pool_v1alpha1_shielded_pool_pb.Note, 4));
};


/**
 * @param {?proto.penumbra.core.component.shielded_pool.v1alpha1.Note|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.setStakedNote = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.clearStakedNote = function() {
  return this.setStakedNote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.hasStakedNote = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 staked_note_position = 5;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.getStakedNotePosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.setStakedNotePosition = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional penumbra.core.num.v1alpha1.Amount unbonded_amount = 6;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.getUnbondedAmount = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 6));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.setUnbondedAmount = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.clearUnbondedAmount = function() {
  return this.setUnbondedAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.hasUnbondedAmount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes randomizer = 7;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.getRandomizer = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes randomizer = 7;
 * This is a type-conversion wrapper around `getRandomizer()`
 * @return {string}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.getRandomizer_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRandomizer()));
};


/**
 * optional bytes randomizer = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRandomizer()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.getRandomizer_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRandomizer()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.setRandomizer = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bytes proof_blinding_r = 8;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.getProofBlindingR = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes proof_blinding_r = 8;
 * This is a type-conversion wrapper around `getProofBlindingR()`
 * @return {string}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.getProofBlindingR_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProofBlindingR()));
};


/**
 * optional bytes proof_blinding_r = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProofBlindingR()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.getProofBlindingR_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProofBlindingR()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.setProofBlindingR = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * optional bytes proof_blinding_s = 9;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.getProofBlindingS = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes proof_blinding_s = 9;
 * This is a type-conversion wrapper around `getProofBlindingS()`
 * @return {string}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.getProofBlindingS_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProofBlindingS()));
};


/**
 * optional bytes proof_blinding_s = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProofBlindingS()`
 * @return {!Uint8Array}
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.getProofBlindingS_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProofBlindingS()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DelegatorVotePlan.prototype.setProofBlindingS = function(value) {
  return jspb.Message.setProto3BytesField(this, 9, value);
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
proto.penumbra.core.component.governance.v1alpha1.DaoDeposit.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.DaoDeposit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DaoDeposit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DaoDeposit.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && penumbra_core_asset_v1alpha1_asset_pb.Value.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DaoDeposit}
 */
proto.penumbra.core.component.governance.v1alpha1.DaoDeposit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.DaoDeposit;
  return proto.penumbra.core.component.governance.v1alpha1.DaoDeposit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DaoDeposit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DaoDeposit}
 */
proto.penumbra.core.component.governance.v1alpha1.DaoDeposit.deserializeBinaryFromReader = function(msg, reader) {
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
proto.penumbra.core.component.governance.v1alpha1.DaoDeposit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.DaoDeposit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DaoDeposit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DaoDeposit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.asset.v1alpha1.Value value = 1;
 * @return {?proto.penumbra.core.asset.v1alpha1.Value}
 */
proto.penumbra.core.component.governance.v1alpha1.DaoDeposit.prototype.getValue = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.Value} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.Value, 1));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.Value|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DaoDeposit} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DaoDeposit.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DaoDeposit} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DaoDeposit.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DaoDeposit.prototype.hasValue = function() {
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
proto.penumbra.core.component.governance.v1alpha1.DaoSpend.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.DaoSpend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DaoSpend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DaoSpend.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && penumbra_core_asset_v1alpha1_asset_pb.Value.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DaoSpend}
 */
proto.penumbra.core.component.governance.v1alpha1.DaoSpend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.DaoSpend;
  return proto.penumbra.core.component.governance.v1alpha1.DaoSpend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DaoSpend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DaoSpend}
 */
proto.penumbra.core.component.governance.v1alpha1.DaoSpend.deserializeBinaryFromReader = function(msg, reader) {
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
proto.penumbra.core.component.governance.v1alpha1.DaoSpend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.DaoSpend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DaoSpend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DaoSpend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_asset_v1alpha1_asset_pb.Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.asset.v1alpha1.Value value = 1;
 * @return {?proto.penumbra.core.asset.v1alpha1.Value}
 */
proto.penumbra.core.component.governance.v1alpha1.DaoSpend.prototype.getValue = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.Value} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.Value, 1));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.Value|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DaoSpend} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DaoSpend.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DaoSpend} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DaoSpend.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DaoSpend.prototype.hasValue = function() {
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
proto.penumbra.core.component.governance.v1alpha1.DaoOutput.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.DaoOutput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DaoOutput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DaoOutput.toObject = function(includeInstance, msg) {
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DaoOutput}
 */
proto.penumbra.core.component.governance.v1alpha1.DaoOutput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.DaoOutput;
  return proto.penumbra.core.component.governance.v1alpha1.DaoOutput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DaoOutput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DaoOutput}
 */
proto.penumbra.core.component.governance.v1alpha1.DaoOutput.deserializeBinaryFromReader = function(msg, reader) {
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
proto.penumbra.core.component.governance.v1alpha1.DaoOutput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.DaoOutput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.DaoOutput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.DaoOutput.serializeBinaryToWriter = function(message, writer) {
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
proto.penumbra.core.component.governance.v1alpha1.DaoOutput.prototype.getValue = function() {
  return /** @type{?proto.penumbra.core.asset.v1alpha1.Value} */ (
    jspb.Message.getWrapperField(this, penumbra_core_asset_v1alpha1_asset_pb.Value, 1));
};


/**
 * @param {?proto.penumbra.core.asset.v1alpha1.Value|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DaoOutput} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DaoOutput.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DaoOutput} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DaoOutput.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DaoOutput.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.keys.v1alpha1.Address address = 2;
 * @return {?proto.penumbra.core.keys.v1alpha1.Address}
 */
proto.penumbra.core.component.governance.v1alpha1.DaoOutput.prototype.getAddress = function() {
  return /** @type{?proto.penumbra.core.keys.v1alpha1.Address} */ (
    jspb.Message.getWrapperField(this, penumbra_core_keys_v1alpha1_keys_pb.Address, 2));
};


/**
 * @param {?proto.penumbra.core.keys.v1alpha1.Address|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DaoOutput} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.DaoOutput.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.DaoOutput} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.DaoOutput.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.DaoOutput.prototype.hasAddress = function() {
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
proto.penumbra.core.component.governance.v1alpha1.Vote.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.Vote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Vote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.Vote.toObject = function(includeInstance, msg) {
  var f, obj = {
    vote: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Vote}
 */
proto.penumbra.core.component.governance.v1alpha1.Vote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.Vote;
  return proto.penumbra.core.component.governance.v1alpha1.Vote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Vote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Vote}
 */
proto.penumbra.core.component.governance.v1alpha1.Vote.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.penumbra.core.component.governance.v1alpha1.Vote.Vote} */ (reader.readEnum());
      msg.setVote(value);
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
proto.penumbra.core.component.governance.v1alpha1.Vote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.Vote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Vote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.Vote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVote();
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
proto.penumbra.core.component.governance.v1alpha1.Vote.Vote = {
  VOTE_UNSPECIFIED: 0,
  VOTE_ABSTAIN: 1,
  VOTE_YES: 2,
  VOTE_NO: 3
};

/**
 * optional Vote vote = 1;
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Vote.Vote}
 */
proto.penumbra.core.component.governance.v1alpha1.Vote.prototype.getVote = function() {
  return /** @type {!proto.penumbra.core.component.governance.v1alpha1.Vote.Vote} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Vote.Vote} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Vote} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Vote.prototype.setVote = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.oneofGroups_ = [[2,3,4,5]];

/**
 * @enum {number}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.StateCase = {
  STATE_NOT_SET: 0,
  VOTING: 2,
  WITHDRAWN: 3,
  FINISHED: 4,
  CLAIMED: 5
};

/**
 * @return {proto.penumbra.core.component.governance.v1alpha1.ProposalState.StateCase}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.getStateCase = function() {
  return /** @type {proto.penumbra.core.component.governance.v1alpha1.ProposalState.StateCase} */(jspb.Message.computeOneofCase(this, proto.penumbra.core.component.governance.v1alpha1.ProposalState.oneofGroups_[0]));
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
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ProposalState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.toObject = function(includeInstance, msg) {
  var f, obj = {
    voting: (f = msg.getVoting()) && proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting.toObject(includeInstance, f),
    withdrawn: (f = msg.getWithdrawn()) && proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn.toObject(includeInstance, f),
    finished: (f = msg.getFinished()) && proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished.toObject(includeInstance, f),
    claimed: (f = msg.getClaimed()) && proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ProposalState;
  return proto.penumbra.core.component.governance.v1alpha1.ProposalState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting.deserializeBinaryFromReader);
      msg.setVoting(value);
      break;
    case 3:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn.deserializeBinaryFromReader);
      msg.setWithdrawn(value);
      break;
    case 4:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished.deserializeBinaryFromReader);
      msg.setFinished(value);
      break;
    case 5:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed.deserializeBinaryFromReader);
      msg.setClaimed(value);
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
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ProposalState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoting();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting.serializeBinaryToWriter
    );
  }
  f = message.getWithdrawn();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn.serializeBinaryToWriter
    );
  }
  f = message.getFinished();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished.serializeBinaryToWriter
    );
  }
  f = message.getClaimed();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed.serializeBinaryToWriter
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
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting.toObject = function(includeInstance, msg) {
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting;
  return proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting.deserializeBinaryFromReader = function(msg, reader) {
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
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting.serializeBinaryToWriter = function(message, writer) {
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
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn.toObject = function(includeInstance, msg) {
  var f, obj = {
    reason: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn;
  return proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
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
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string reason = 1;
 * @return {string}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished.toObject = function(includeInstance, msg) {
  var f, obj = {
    outcome: (f = msg.getOutcome()) && proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished;
  return proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.deserializeBinaryFromReader);
      msg.setOutcome(value);
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
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutcome();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProposalOutcome outcome = 1;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished.prototype.getOutcome = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome, 1));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished.prototype.setOutcome = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished.prototype.clearOutcome = function() {
  return this.setOutcome(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished.prototype.hasOutcome = function() {
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
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed.toObject = function(includeInstance, msg) {
  var f, obj = {
    outcome: (f = msg.getOutcome()) && proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed;
  return proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.deserializeBinaryFromReader);
      msg.setOutcome(value);
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
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutcome();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProposalOutcome outcome = 1;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed.prototype.getOutcome = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome, 1));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed.prototype.setOutcome = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed.prototype.clearOutcome = function() {
  return this.setOutcome(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed.prototype.hasOutcome = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Voting voting = 2;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.getVoting = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting, 2));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalState.Voting|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.setVoting = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.penumbra.core.component.governance.v1alpha1.ProposalState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.clearVoting = function() {
  return this.setVoting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.hasVoting = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Withdrawn withdrawn = 3;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.getWithdrawn = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn, 3));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalState.Withdrawn|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.setWithdrawn = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.penumbra.core.component.governance.v1alpha1.ProposalState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.clearWithdrawn = function() {
  return this.setWithdrawn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.hasWithdrawn = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Finished finished = 4;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.getFinished = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished, 4));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalState.Finished|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.setFinished = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.penumbra.core.component.governance.v1alpha1.ProposalState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.clearFinished = function() {
  return this.setFinished(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.hasFinished = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Claimed claimed = 5;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.getClaimed = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed, 5));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalState.Claimed|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.setClaimed = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.penumbra.core.component.governance.v1alpha1.ProposalState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalState} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.clearClaimed = function() {
  return this.setClaimed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalState.prototype.hasClaimed = function() {
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
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.OutcomeCase = {
  OUTCOME_NOT_SET: 0,
  PASSED: 1,
  FAILED: 2,
  SLASHED: 3
};

/**
 * @return {proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.OutcomeCase}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.prototype.getOutcomeCase = function() {
  return /** @type {proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.OutcomeCase} */(jspb.Message.computeOneofCase(this, proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.oneofGroups_[0]));
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
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.toObject = function(includeInstance, msg) {
  var f, obj = {
    passed: (f = msg.getPassed()) && proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed.toObject(includeInstance, f),
    failed: (f = msg.getFailed()) && proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed.toObject(includeInstance, f),
    slashed: (f = msg.getSlashed()) && proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome;
  return proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed.deserializeBinaryFromReader);
      msg.setPassed(value);
      break;
    case 2:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed.deserializeBinaryFromReader);
      msg.setFailed(value);
      break;
    case 3:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed.deserializeBinaryFromReader);
      msg.setSlashed(value);
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
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassed();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed.serializeBinaryToWriter
    );
  }
  f = message.getFailed();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed.serializeBinaryToWriter
    );
  }
  f = message.getSlashed();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed.serializeBinaryToWriter
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
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.toObject = function(includeInstance, msg) {
  var f, obj = {
    reason: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn;
  return proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
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
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string reason = 1;
 * @return {string}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed.toObject = function(includeInstance, msg) {
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed;
  return proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed.deserializeBinaryFromReader = function(msg, reader) {
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
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed.serializeBinaryToWriter = function(message, writer) {
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
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed.toObject = function(includeInstance, msg) {
  var f, obj = {
    withdrawn: (f = msg.getWithdrawn()) && proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed;
  return proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.deserializeBinaryFromReader);
      msg.setWithdrawn(value);
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
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWithdrawn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.serializeBinaryToWriter
    );
  }
};


/**
 * optional Withdrawn withdrawn = 1;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed.prototype.getWithdrawn = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn, 1));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed.prototype.setWithdrawn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed.prototype.clearWithdrawn = function() {
  return this.setWithdrawn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed.prototype.hasWithdrawn = function() {
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
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed.toObject = function(includeInstance, msg) {
  var f, obj = {
    withdrawn: (f = msg.getWithdrawn()) && proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed;
  return proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.deserializeBinaryFromReader);
      msg.setWithdrawn(value);
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
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWithdrawn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn.serializeBinaryToWriter
    );
  }
};


/**
 * optional Withdrawn withdrawn = 1;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed.prototype.getWithdrawn = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn, 1));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Withdrawn|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed.prototype.setWithdrawn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed.prototype.clearWithdrawn = function() {
  return this.setWithdrawn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed.prototype.hasWithdrawn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Passed passed = 1;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.prototype.getPassed = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed, 1));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Passed|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.prototype.setPassed = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.prototype.clearPassed = function() {
  return this.setPassed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.prototype.hasPassed = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Failed failed = 2;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.prototype.getFailed = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed, 2));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Failed|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.prototype.setFailed = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.prototype.clearFailed = function() {
  return this.setFailed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.prototype.hasFailed = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Slashed slashed = 3;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.prototype.getSlashed = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed, 3));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.Slashed|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.prototype.setSlashed = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.prototype.clearSlashed = function() {
  return this.setSlashed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalOutcome.prototype.hasSlashed = function() {
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
proto.penumbra.core.component.governance.v1alpha1.Tally.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.Tally.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Tally} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.Tally.toObject = function(includeInstance, msg) {
  var f, obj = {
    yes: jspb.Message.getFieldWithDefault(msg, 1, 0),
    no: jspb.Message.getFieldWithDefault(msg, 2, 0),
    abstain: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Tally}
 */
proto.penumbra.core.component.governance.v1alpha1.Tally.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.Tally;
  return proto.penumbra.core.component.governance.v1alpha1.Tally.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Tally} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Tally}
 */
proto.penumbra.core.component.governance.v1alpha1.Tally.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setYes(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAbstain(value);
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
proto.penumbra.core.component.governance.v1alpha1.Tally.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.Tally.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Tally} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.Tally.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getYes();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNo();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAbstain();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 yes = 1;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.Tally.prototype.getYes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Tally} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Tally.prototype.setYes = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 no = 2;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.Tally.prototype.getNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Tally} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Tally.prototype.setNo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 abstain = 3;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.Tally.prototype.getAbstain = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Tally} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Tally.prototype.setAbstain = function(value) {
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
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.Proposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 4, 0),
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    signaling: (f = msg.getSignaling()) && proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling.toObject(includeInstance, f),
    emergency: (f = msg.getEmergency()) && proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency.toObject(includeInstance, f),
    parameterChange: (f = msg.getParameterChange()) && proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.toObject(includeInstance, f),
    daoSpend: (f = msg.getDaoSpend()) && proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend.toObject(includeInstance, f),
    upgradePlan: (f = msg.getUpgradePlan()) && proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.Proposal;
  return proto.penumbra.core.component.governance.v1alpha1.Proposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling.deserializeBinaryFromReader);
      msg.setSignaling(value);
      break;
    case 6:
      var value = new proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency.deserializeBinaryFromReader);
      msg.setEmergency(value);
      break;
    case 7:
      var value = new proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.deserializeBinaryFromReader);
      msg.setParameterChange(value);
      break;
    case 8:
      var value = new proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend.deserializeBinaryFromReader);
      msg.setDaoSpend(value);
      break;
    case 9:
      var value = new proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan.deserializeBinaryFromReader);
      msg.setUpgradePlan(value);
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
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.Proposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSignaling();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling.serializeBinaryToWriter
    );
  }
  f = message.getEmergency();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency.serializeBinaryToWriter
    );
  }
  f = message.getParameterChange();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.serializeBinaryToWriter
    );
  }
  f = message.getDaoSpend();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend.serializeBinaryToWriter
    );
  }
  f = message.getUpgradePlan();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan.serializeBinaryToWriter
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
proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling;
  return proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommit(value);
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
proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string commit = 1;
 * @return {string}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling.prototype.getCommit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling.prototype.setCommit = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency.toObject = function(includeInstance, msg) {
  var f, obj = {
    haltChain: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency;
  return proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHaltChain(value);
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
proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHaltChain();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool halt_chain = 1;
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency.prototype.getHaltChain = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency.prototype.setHaltChain = function(value) {
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
proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.toObject = function(includeInstance, msg) {
  var f, obj = {
    oldParameters: (f = msg.getOldParameters()) && proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.toObject(includeInstance, f),
    newParameters: (f = msg.getNewParameters()) && proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange;
  return proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.deserializeBinaryFromReader);
      msg.setOldParameters(value);
      break;
    case 2:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.deserializeBinaryFromReader);
      msg.setNewParameters(value);
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
proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOldParameters();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.serializeBinaryToWriter
    );
  }
  f = message.getNewParameters();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.serializeBinaryToWriter
    );
  }
};


/**
 * optional ChangedAppParameters old_parameters = 1;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.prototype.getOldParameters = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters, 1));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.prototype.setOldParameters = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.prototype.clearOldParameters = function() {
  return this.setOldParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.prototype.hasOldParameters = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ChangedAppParameters new_parameters = 2;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.prototype.getNewParameters = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters, 2));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.prototype.setNewParameters = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.prototype.clearNewParameters = function() {
  return this.setNewParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange.prototype.hasNewParameters = function() {
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
proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionPlan: (f = msg.getTransactionPlan()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend;
  return proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setTransactionPlan(value);
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
proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionPlan();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Any transaction_plan = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend.prototype.getTransactionPlan = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend.prototype.setTransactionPlan = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend.prototype.clearTransactionPlan = function() {
  return this.setTransactionPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend.prototype.hasTransactionPlan = function() {
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
proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan;
  return proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan.deserializeBinaryFromReader = function(msg, reader) {
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
proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 id = 4;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Signaling signaling = 5;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.getSignaling = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling, 5));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.Proposal.Signaling|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.setSignaling = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.clearSignaling = function() {
  return this.setSignaling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.hasSignaling = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Emergency emergency = 6;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.getEmergency = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency, 6));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.Proposal.Emergency|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.setEmergency = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.clearEmergency = function() {
  return this.setEmergency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.hasEmergency = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ParameterChange parameter_change = 7;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.getParameterChange = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange, 7));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.Proposal.ParameterChange|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.setParameterChange = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.clearParameterChange = function() {
  return this.setParameterChange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.hasParameterChange = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DaoSpend dao_spend = 8;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.getDaoSpend = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend, 8));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.Proposal.DaoSpend|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.setDaoSpend = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.clearDaoSpend = function() {
  return this.setDaoSpend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.hasDaoSpend = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional UpgradePlan upgrade_plan = 9;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.getUpgradePlan = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan, 9));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.Proposal.UpgradePlan|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.setUpgradePlan = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.Proposal} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.clearUpgradePlan = function() {
  return this.setUpgradePlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.Proposal.prototype.hasUpgradePlan = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    proposalId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest;
  return proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setProposalId(value);
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
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProposalId();
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
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 proposal_id = 2;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest.prototype.getProposalId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoRequest.prototype.setProposalId = function(value) {
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
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    startBlockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startPosition: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse;
  return proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartBlockHeight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartPosition(value);
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
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getStartPosition();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 start_block_height = 1;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse.prototype.getStartBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse.prototype.setStartBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 start_position = 2;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse.prototype.getStartPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalInfoResponse.prototype.setStartPosition = function(value) {
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
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    proposalId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest;
  return proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setProposalId(value);
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
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProposalId();
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
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 proposal_id = 2;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest.prototype.getProposalId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataRequest.prototype.setProposalId = function(value) {
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
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse;
  return proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_component_stake_v1alpha1_stake_pb.RateData.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.component.stake.v1alpha1.RateData rate_data = 1;
 * @return {?proto.penumbra.core.component.stake.v1alpha1.RateData}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse.prototype.getRateData = function() {
  return /** @type{?proto.penumbra.core.component.stake.v1alpha1.RateData} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_stake_v1alpha1_stake_pb.RateData, 1));
};


/**
 * @param {?proto.penumbra.core.component.stake.v1alpha1.RateData|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse.prototype.setRateData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse.prototype.clearRateData = function() {
  return this.setRateData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ProposalRateDataResponse.prototype.hasRateData = function() {
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
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalVotingBlocks: jspb.Message.getFieldWithDefault(msg, 1, 0),
    proposalDepositAmount: (f = msg.getProposalDepositAmount()) && penumbra_core_num_v1alpha1_num_pb.Amount.toObject(includeInstance, f),
    proposalValidQuorum: jspb.Message.getFieldWithDefault(msg, 3, ""),
    proposalPassThreshold: jspb.Message.getFieldWithDefault(msg, 4, ""),
    proposalSlashThreshold: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters}
 */
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters;
  return proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters}
 */
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProposalVotingBlocks(value);
      break;
    case 2:
      var value = new penumbra_core_num_v1alpha1_num_pb.Amount;
      reader.readMessage(value,penumbra_core_num_v1alpha1_num_pb.Amount.deserializeBinaryFromReader);
      msg.setProposalDepositAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposalValidQuorum(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposalPassThreshold(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposalSlashThreshold(value);
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
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalVotingBlocks();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getProposalDepositAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_num_v1alpha1_num_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getProposalValidQuorum();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProposalPassThreshold();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProposalSlashThreshold();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint64 proposal_voting_blocks = 1;
 * @return {number}
 */
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.prototype.getProposalVotingBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.prototype.setProposalVotingBlocks = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional penumbra.core.num.v1alpha1.Amount proposal_deposit_amount = 2;
 * @return {?proto.penumbra.core.num.v1alpha1.Amount}
 */
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.prototype.getProposalDepositAmount = function() {
  return /** @type{?proto.penumbra.core.num.v1alpha1.Amount} */ (
    jspb.Message.getWrapperField(this, penumbra_core_num_v1alpha1_num_pb.Amount, 2));
};


/**
 * @param {?proto.penumbra.core.num.v1alpha1.Amount|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.prototype.setProposalDepositAmount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.prototype.clearProposalDepositAmount = function() {
  return this.setProposalDepositAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.prototype.hasProposalDepositAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string proposal_valid_quorum = 3;
 * @return {string}
 */
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.prototype.getProposalValidQuorum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.prototype.setProposalValidQuorum = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string proposal_pass_threshold = 4;
 * @return {string}
 */
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.prototype.getProposalPassThreshold = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.prototype.setProposalPassThreshold = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string proposal_slash_threshold = 5;
 * @return {string}
 */
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.prototype.getProposalSlashThreshold = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.prototype.setProposalSlashThreshold = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.penumbra.core.component.governance.v1alpha1.GenesisContent.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.GenesisContent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.GenesisContent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.GenesisContent.toObject = function(includeInstance, msg) {
  var f, obj = {
    governanceParams: (f = msg.getGovernanceParams()) && proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.GenesisContent}
 */
proto.penumbra.core.component.governance.v1alpha1.GenesisContent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.GenesisContent;
  return proto.penumbra.core.component.governance.v1alpha1.GenesisContent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.GenesisContent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.GenesisContent}
 */
proto.penumbra.core.component.governance.v1alpha1.GenesisContent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.deserializeBinaryFromReader);
      msg.setGovernanceParams(value);
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
proto.penumbra.core.component.governance.v1alpha1.GenesisContent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.GenesisContent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.GenesisContent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.GenesisContent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGovernanceParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.serializeBinaryToWriter
    );
  }
};


/**
 * optional GovernanceParameters governance_params = 1;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters}
 */
proto.penumbra.core.component.governance.v1alpha1.GenesisContent.prototype.getGovernanceParams = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters, 1));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.GenesisContent} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.GenesisContent.prototype.setGovernanceParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.GenesisContent} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.GenesisContent.prototype.clearGovernanceParams = function() {
  return this.setGovernanceParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.GenesisContent.prototype.hasGovernanceParams = function() {
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
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainParams: (f = msg.getChainParams()) && penumbra_core_component_chain_v1alpha1_chain_pb.ChainParameters.toObject(includeInstance, f),
    daoParams: (f = msg.getDaoParams()) && penumbra_core_component_dao_v1alpha1_dao_pb.DaoParameters.toObject(includeInstance, f),
    governanceParams: (f = msg.getGovernanceParams()) && proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.toObject(includeInstance, f),
    ibcParams: (f = msg.getIbcParams()) && penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcParameters.toObject(includeInstance, f),
    stakeParams: (f = msg.getStakeParams()) && penumbra_core_component_stake_v1alpha1_stake_pb.StakeParameters.toObject(includeInstance, f),
    feeParams: (f = msg.getFeeParams()) && penumbra_core_component_fee_v1alpha1_fee_pb.FeeParameters.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters;
  return proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new penumbra_core_component_chain_v1alpha1_chain_pb.ChainParameters;
      reader.readMessage(value,penumbra_core_component_chain_v1alpha1_chain_pb.ChainParameters.deserializeBinaryFromReader);
      msg.setChainParams(value);
      break;
    case 2:
      var value = new penumbra_core_component_dao_v1alpha1_dao_pb.DaoParameters;
      reader.readMessage(value,penumbra_core_component_dao_v1alpha1_dao_pb.DaoParameters.deserializeBinaryFromReader);
      msg.setDaoParams(value);
      break;
    case 3:
      var value = new proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.deserializeBinaryFromReader);
      msg.setGovernanceParams(value);
      break;
    case 4:
      var value = new penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcParameters;
      reader.readMessage(value,penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcParameters.deserializeBinaryFromReader);
      msg.setIbcParams(value);
      break;
    case 5:
      var value = new penumbra_core_component_stake_v1alpha1_stake_pb.StakeParameters;
      reader.readMessage(value,penumbra_core_component_stake_v1alpha1_stake_pb.StakeParameters.deserializeBinaryFromReader);
      msg.setStakeParams(value);
      break;
    case 6:
      var value = new penumbra_core_component_fee_v1alpha1_fee_pb.FeeParameters;
      reader.readMessage(value,penumbra_core_component_fee_v1alpha1_fee_pb.FeeParameters.deserializeBinaryFromReader);
      msg.setFeeParams(value);
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
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      penumbra_core_component_chain_v1alpha1_chain_pb.ChainParameters.serializeBinaryToWriter
    );
  }
  f = message.getDaoParams();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      penumbra_core_component_dao_v1alpha1_dao_pb.DaoParameters.serializeBinaryToWriter
    );
  }
  f = message.getGovernanceParams();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters.serializeBinaryToWriter
    );
  }
  f = message.getIbcParams();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcParameters.serializeBinaryToWriter
    );
  }
  f = message.getStakeParams();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      penumbra_core_component_stake_v1alpha1_stake_pb.StakeParameters.serializeBinaryToWriter
    );
  }
  f = message.getFeeParams();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      penumbra_core_component_fee_v1alpha1_fee_pb.FeeParameters.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.core.component.chain.v1alpha1.ChainParameters chain_params = 1;
 * @return {?proto.penumbra.core.component.chain.v1alpha1.ChainParameters}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.getChainParams = function() {
  return /** @type{?proto.penumbra.core.component.chain.v1alpha1.ChainParameters} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_chain_v1alpha1_chain_pb.ChainParameters, 1));
};


/**
 * @param {?proto.penumbra.core.component.chain.v1alpha1.ChainParameters|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.setChainParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.clearChainParams = function() {
  return this.setChainParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.hasChainParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.core.component.dao.v1alpha1.DaoParameters dao_params = 2;
 * @return {?proto.penumbra.core.component.dao.v1alpha1.DaoParameters}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.getDaoParams = function() {
  return /** @type{?proto.penumbra.core.component.dao.v1alpha1.DaoParameters} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_dao_v1alpha1_dao_pb.DaoParameters, 2));
};


/**
 * @param {?proto.penumbra.core.component.dao.v1alpha1.DaoParameters|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.setDaoParams = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.clearDaoParams = function() {
  return this.setDaoParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.hasDaoParams = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GovernanceParameters governance_params = 3;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.getGovernanceParams = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters, 3));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.GovernanceParameters|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.setGovernanceParams = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.clearGovernanceParams = function() {
  return this.setGovernanceParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.hasGovernanceParams = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.core.component.ibc.v1alpha1.IbcParameters ibc_params = 4;
 * @return {?proto.penumbra.core.component.ibc.v1alpha1.IbcParameters}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.getIbcParams = function() {
  return /** @type{?proto.penumbra.core.component.ibc.v1alpha1.IbcParameters} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_ibc_v1alpha1_ibc_pb.IbcParameters, 4));
};


/**
 * @param {?proto.penumbra.core.component.ibc.v1alpha1.IbcParameters|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.setIbcParams = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.clearIbcParams = function() {
  return this.setIbcParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.hasIbcParams = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional penumbra.core.component.stake.v1alpha1.StakeParameters stake_params = 5;
 * @return {?proto.penumbra.core.component.stake.v1alpha1.StakeParameters}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.getStakeParams = function() {
  return /** @type{?proto.penumbra.core.component.stake.v1alpha1.StakeParameters} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_stake_v1alpha1_stake_pb.StakeParameters, 5));
};


/**
 * @param {?proto.penumbra.core.component.stake.v1alpha1.StakeParameters|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.setStakeParams = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.clearStakeParams = function() {
  return this.setStakeParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.hasStakeParams = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional penumbra.core.component.fee.v1alpha1.FeeParameters fee_params = 6;
 * @return {?proto.penumbra.core.component.fee.v1alpha1.FeeParameters}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.getFeeParams = function() {
  return /** @type{?proto.penumbra.core.component.fee.v1alpha1.FeeParameters} */ (
    jspb.Message.getWrapperField(this, penumbra_core_component_fee_v1alpha1_fee_pb.FeeParameters, 6));
};


/**
 * @param {?proto.penumbra.core.component.fee.v1alpha1.FeeParameters|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.setFeeParams = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.clearFeeParams = function() {
  return this.setFeeParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.prototype.hasFeeParams = function() {
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
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    old: (f = msg.getOld()) && proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.toObject(includeInstance, f),
    pb_new: (f = msg.getNew()) && proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet;
  return proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.deserializeBinaryFromReader);
      msg.setOld(value);
      break;
    case 2:
      var value = new proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters;
      reader.readMessage(value,proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.deserializeBinaryFromReader);
      msg.setNew(value);
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
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOld();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.serializeBinaryToWriter
    );
  }
  f = message.getNew();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters.serializeBinaryToWriter
    );
  }
};


/**
 * optional ChangedAppParameters old = 1;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.prototype.getOld = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters, 1));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.prototype.setOld = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.prototype.clearOld = function() {
  return this.setOld(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.prototype.hasOld = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ChangedAppParameters new = 2;
 * @return {?proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.prototype.getNew = function() {
  return /** @type{?proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters, 2));
};


/**
 * @param {?proto.penumbra.core.component.governance.v1alpha1.ChangedAppParameters|undefined} value
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet} returns this
*/
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.prototype.setNew = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet} returns this
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.prototype.clearNew = function() {
  return this.setNew(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.core.component.governance.v1alpha1.ChangedAppParametersSet.prototype.hasNew = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.penumbra.core.component.governance.v1alpha1);
