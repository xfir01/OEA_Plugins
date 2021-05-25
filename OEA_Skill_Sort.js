

//=============================================================================
// Once Ever After Sorts usable skill to the top of the skill list
// OEA_Skill_Sort.js
//=============================================================================
/*:
* @plugindesc Sorts usable skill to the top of the skill list out of combat
*
* 
*/
OEA_Window_SkillList_makeItemList = Window_SkillList.prototype.makeItemList;
Window_SkillList.prototype.makeItemList = function () {
    OEA_Window_SkillList_makeItemList.call(this);

    if ($gameParty._inBattle) return;

    if (this._data && this._actor) {

        var i = 0;
        while (this._actor.canUse(this._data[i])){
            i++;
        }

        var j = 0;
        for (j = i + 1; j < this._data.length; j++) {
            if (this._actor.canUse(this._data[j])) {
                var tmp = this._data[i];
                this._data[i] = this._data[j];
                this._data[j] = tmp;
                tmp = undefined;
                i++;
			}
		}

    }
};