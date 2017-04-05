var tiles = new Image();
tiles.src = "assets/tiles.png";

var tilesize = 32;
var tileDrawSize = 64;
var map = 1;

function Tile() {
    this.x = 0;
    this.y = 0;
    this.collide = 1;
    this.xType = 0;
    this.yType = 0;
}

Tile.prototype.draw = function(ctx) {
    ctx.drawImage(tiles, xType * tilesize, yType * tilesize, tilesize, tilesize, toX * tileDrawSize, toY * tileDrawSize, tileDrawSize, tileDrawSize);
}
