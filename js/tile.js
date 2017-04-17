var tiles = new Image();
tiles.src = "assets/tiles.png";

function Tile() {
    this.x = 0;
    this.y = 0;
    this.width = 64;
    this.height = 64;
    this.collide = 1;
    this.xType = 0;
    this.yType = 0;
}

Tile.prototype.draw = function(ctx) {
    ctx.drawImage(tiles, this.xType * tilesize, this.yType * tilesize, tilesize, tilesize, this.x * tileDrawSize, this.y * tileDrawSize, tileDrawSize, tileDrawSize);
}
