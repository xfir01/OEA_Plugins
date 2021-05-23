//=============================================================================
// Once Ever After Removes CTB icons during victory screen
// OEA_Menu_AP.js
//=============================================================================
/*:
* @plugindesc Removes CTB icons during victory screen
*
* 
*/

Sprite_Battler.prototype.createCTBIcon = function() {
    if (!Yanfly.Param.CTBTurnOrder) return;
    this._ctbIcon = new Window_CTBIcon(this);

    if(!$gameTemp.OEA_ctbIcons)
    {
        $gameTemp.OEA_ctbIcons = [];
    }
    $gameTemp.OEA_ctbIcons.push(this._ctbIcon);
};


var oea_BattleManager_endBattle = BattleManager.endBattle;
BattleManager.endBattle = function(result) {
    oea_BattleManager_endBattle.call(this, result);
    console.log("EndBattle!");
    if (Yanfly.Param.CTBTurnOrder) {
        if(!$gameTemp.OEA_ctbIcons) return;
        var index;
        for(index = 0; index < $gameTemp.OEA_ctbIcons.length; index++)
        {
            $gameTemp.OEA_ctbIcons[index].removeCTBIcon();
        }    
        $gameTemp.OEA_ctbIcons = [];    
    }
    
};