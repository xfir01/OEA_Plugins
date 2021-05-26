//=============================================================================
// Once Ever After Adds Ingrid Dance Images during the mini game
// OEA_Ingrid_Dance.js
//=============================================================================
/*:
* @plugindesc Adds Ingrid Dance Images during the mini game
* 
* @param X Position
* @desc X position of the image
* Default: 285
* @default 285
* 
* 
* @param Y Position
* @desc Y position of the image
* Default: 10
* @default 10
* 
*/

(function () {

	var params = PluginManager.parameters("ChainCommand");
	var OEA_Ingrid_Dance_Params = PluginManager.parameters('OEA_Ingrid_Dance');  
	var validKeys = params["Valid Keys"].split(" ");

	var soundFX = {
		keypress: { name: params["Keypress SFX"], pan: 0, pitch: 100, volume: 100 },
		victory: { name: params["Success SFX"], pan: 0, pitch: 100, volume: 100 },
		defeat: { name: params["Error SFX"], pan: 0, pitch: 100, volume: 100 }
	}

	Scene_ChainCommand.prototype.processInput = function () {
		for (var i = 0; i < validKeys.length; i++) {
			if (Input.isTriggered(validKeys[i])) {
				if (this.sequence[this.index] === validKeys[i]) {
					this.addIngridImage(i);
					this.updateButtons();
				}
				else this.hasFailed();
				return;
			}
		}
	};

	var oea_Scene_ChainCommand_hasFailed = Scene_ChainCommand.prototype.hasFailed;
	Scene_ChainCommand.prototype.hasFailed = function () {
		oea_Scene_ChainCommand_hasFailed.call(this);
		this.addIngridImage(6);
	}

	var oea_Scene_ChainCommand_hasSucceeded = Scene_ChainCommand.prototype.hasSucceeded;
	Scene_ChainCommand.prototype.hasSucceeded = function () {
		oea_Scene_ChainCommand_hasSucceeded.call(this);
		this.addIngridImage(7);
	}

	Scene_ChainCommand.prototype.addIngridImage = function (input) {

		if (!this.ingrid) {
			this.ingrid = new Sprite(ImageManager.loadBitmap("img/ingrid_dance/", "Ingrid"));
			this.ingrid.x = Number(OEA_Ingrid_Dance_Params["X Position"])
			this.ingrid.y = Number(OEA_Ingrid_Dance_Params["Y Position"])

			this.addChild(this.ingrid);
		}

		
		var bmp;
		switch (input) {
			case 0:
				bmp = ImageManager.loadBitmap("img/ingrid_dance/", "Ingrid_Up");
				break
			case 1:
				bmp = ImageManager.loadBitmap("img/ingrid_dance/", "Ingrid_Down");
				break;
			case 2:
				bmp = ImageManager.loadBitmap("img/ingrid_dance/", "Ingrid_Left");
				break;
			case 3:
				bmp = ImageManager.loadBitmap("img/ingrid_dance/", "Ingrid_Right");
				break;
			case 4:
				bmp = ImageManager.loadBitmap("img/ingrid_dance/", "Ingrid_Z");
				break;
			case 5:
				bmp = ImageManager.loadBitmap("img/ingrid_dance/", "Ingrid_X");
				break;
			case 6:
				bmp = ImageManager.loadBitmap("img/ingrid_dance/", "Ingrid_Lose");
				break;
			case 7:
				bmp = ImageManager.loadBitmap("img/ingrid_dance/", "Ingrid_Win");
				break;
		}

		this.ingrid.bitmap = bmp;
		this.ingrid.update();
	}

})();