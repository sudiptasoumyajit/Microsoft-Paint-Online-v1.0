var canvas= new fabric.Canvas ('gameCanvas');

	playerX = 10;
	playerY = 10;

	block_imgwidth = 30;
	block_imgheight = 30;

var playerObj = "";
var blockImgObj = "";

		function playerUpdate() {
			fabric.Image.fromURL ("player.png", function (Img) {
				playerObj = Img;
				playerObj.scaleToWidth (150);
				playerObj.scaleToHeight (140);
				playerObj.set ({
					top: playerY;
					left: playerX;
				});
				canvas.add(playerObj);
			});
		}

		function newImg(getImg) {
			fabric.Image.fromURL (getImg, function (Img)) {
				blockImgObj = Img;
				blockImgObj.scaleToWidth (block_imgwidth);
				blockImgObj.scaleToHeight (block_imgheight);
				blockImgObj.set ({
					top: playerY;
					left: playerX;
				});
				canvas.add (blockImgObj);
			}
		}