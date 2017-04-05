var tiles = new Image();
tiles.src = "assets/tiles.png";

var tilesize = 32;
var tileDrawSize = 64;
var map = 1;

function drawMap(map) {
    for (i = 0; i < 11; i++) { // Draw Background Color
        for (j = 0; j < 11; j++) {
            drawTile(map, 1, i, j);
        }
    }
    for (i = 0; i < 11; i++) { // Draw Background Tiles
        for (j = 0; j < 11; j++) {
            if (i == 0 || i == 10 || j == 0 || j == 10 || i == 5 || j == 5) {
                drawTile(map, 0, i, j);
            }
        }
    }
}

function drawTile(fromX, fromY, toX, toY) {
    ctx.drawImage(tiles, fromX * tilesize, fromY * tilesize, tilesize, tilesize, toX * tileDrawSize, toY * tileDrawSize, tileDrawSize, tileDrawSize);
}
