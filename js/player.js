function Player() {
    this.x = 1;
    this.y = 1;
    this.dy = 0;
    this.dx = 0;
    this.ai = 0;
    this.color = 0;
    this.speed = 3;
    this.facing = 0;
    this.frameCount = 0;
    this.animateSpeed = 6;
}

var madePlayers = [];
var players = [];

Player.prototype.draw = function(ctx) {
    ctx.drawImage(tiles, 160 + (this.facing * tilesize), this.color * tilesize, tilesize, tilesize, this.x * tileDrawSize, this.y * tileDrawSize, tileDrawSize, tileDrawSize);
}

function makePlayer(x, y, color, ai, facing, madePlayers) {
    var newPlayer = new Player();

    newPlayer.x = x;
    newPlayer.y = y;
    newPlayer.color = color;
    newPlayer.ai = ai;
    newPlayer.facing = facing;

    madePlayers.push(newPlayer);

    return madePlayers;
}

function makePlayers() {


    madePlayers = makePlayer(1, 1, 0, 0, 0, madePlayers);
    madePlayers = makePlayer(11, 1, 1, 0, 0, madePlayers);
    madePlayers = makePlayer(1, 11, 2, 0, 0, madePlayers);
    madePlayers = makePlayer(11, 11, 3, 0, 0, madePlayers);

    return madePlayers;
}

function drawPlayers() {
  players = makePlayers();
  for (i = 0; i < players.length; i++) {
      players[i].draw(ctx);
  }
}
