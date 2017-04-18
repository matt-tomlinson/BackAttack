function Bomb() {
    this.x = 1;
    this.y = 1;
    this.dy = 0;
    this.dx = 0;
    this.width = 64;
    this.height = 64;
    this.count = 0;
    this.speed = 0.01;
    this.frameCount = 0;
    this.animateSpeed = 10;
}

Bomb.prototype.draw = function(ctx) {
    if (this.frameCount % 2) {
        ctx.drawImage(tiles, 160, 4 * tilesize, tilesize, tilesize, this.x * tileDrawSize, this.y * tileDrawSize, tileDrawSize, tileDrawSize);
    } else {
        ctx.drawImage(tiles, 160 + tilesize, 4 * tilesize, tilesize, tilesize, this.x * tileDrawSize, this.y * tileDrawSize, tileDrawSize, tileDrawSize);
    }
    this.count++;

    if (this.count % this.animateSpeed == 0) {
        this.frameCount++;
    }

    if (this.frameCount > 2) {
        this.frameCount = 0;
    }
}

Bomb.prototype.update = function(ctx) {
    this.x += this.dx;
    this.y += this.dy;
}

var madeBombs = [];

function makeBomb(x, y, dx, dy, madeBombs) {
    var newBomb = new Bomb();

    newBomb.x = x;
    newBomb.y = y;
    newBomb.dx = dx;
    newBomb.dy = dy;

    madeBombs.push(newBomb);

    return madeBombs;
}

function drawBombs() {
    for (i = 0; i < madeBombs.length; i++) {
        madeBombs[i].draw(ctx);
        /*for (j = 0; j < grid.length; j++) {
            var block = grid[j];
            if (block.collide) {
                var dir = colCheck(players[i], block);
                if (dir) {
                    if (players[i].facing == players[i].nextDir) {
                        players[i].facing = random(0, 4);
                    } else {
                        players[i].facing = players[i].nextDir;
                    }
                }
            }
        }*/
    }
}

function updateBombs() {
    for (i = 0; i < madeBombs.length; i++) {
        madeBombs[i].update(ctx);
    }
}
