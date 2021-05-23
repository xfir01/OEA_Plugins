//=============================================================================
// Once Ever After AP on Menu Status
// OEA_Menu_AP.js
//=============================================================================
/*:
* @plugindesc Alters SRD_AltMenuScreen_BustIcons to adds JP display from YEP_JobPoints to main status menu
*
* 
*/ 
var sBack = String(PluginManager.parameters('SRD_AltMenuScreen_BustIcons')['Status Background']);


Window_MenuStatus.prototype.drawItemStatus = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    var lineHeight = this.lineHeight();
    var x = rect.x + 12;
    var y = rect.y + rect.height / 2;
    y -= lineHeight;
    var boxHeight = lineHeight * 7
    this.contents.fillRect(rect.x, y, this.itemWidth(), boxHeight, sBack);
    this.drawActorName(actor, x, y);
    this.drawActorLevel(actor, x, y + lineHeight * 1);
    this.drawActorIcons(actor, x, y + lineHeight * 2);
    this.drawActorClass(actor, x, y + lineHeight * 3);
    this.drawActorHp(actor, x, y + lineHeight * 4, this.itemWidth() - 24);
    this.drawActorMp(actor, x, y + lineHeight * 5, this.itemWidth() - 24);
    var classId = actor.currentClass().id;
    this.drawActorJp(actor, classId, x, y + lineHeight * 6, this.itemWidth() - 24, 'right');
    
};