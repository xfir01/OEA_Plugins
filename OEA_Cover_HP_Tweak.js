//=============================================================================
// Once Ever After Changes HP Requirements to be Covered
// OEA_Cover_HP_Tweak.js
//=============================================================================
/*:
* @plugindesc Changes target HP needed to be a viable cover target.
*
* @param Cover HP %
 * @desc A Character needs to be below this % of their max HP to be a viable target for "Cover" mechanics
 * Default: 25
 * @default 25
*/ 
var OEA = OEA || {};
OEA.Parameters = PluginManager.parameters('OEA_Cover_HP_Tweak');  
OEA.Param = OEA.Param || {};

OEA.Param.substitutionHPPercent = Number(OEA.Parameters['Cover HP %']);

Game_BattlerBase.prototype.isSubstitutionTarget = function() {
    return this.isAlive() && this._hp < ((this.mhp * OEA.Param.substitutionHPPercent) / 100);        
};

BattleManager.checkSubstitute = function(target) {        
    return target.isSubstitutionTarget() && !this._action.isCertainHit();
};

