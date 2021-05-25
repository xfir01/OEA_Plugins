//=============================================================================
// Once Ever After Removes screen flash from floor damage
// OEA_Remove_Floor_Damage_Flash.js
//=============================================================================
/*:
* @plugindesc Removes screen flash resulting from floor damage
*
* 
*/ 
Game_Actor.prototype.executeFloorDamage = function () {
    var damage = Math.floor(this.basicFloorDamage() * this.fdr);
    damage = Math.min(damage, this.maxFloorDamage());
    this.gainHp(-damage);
};