function collisionResolution(grid, bombList) {
    for (i = 0; i < players.length; i++) {
        for (j = 0; j < grid.length; j++) {
            var block = grid[j];
            if (block.collide) {
                var dir = colCheck(players[i], block); // player vs grid collision
                if (dir) {
                    if (players[i].facing == players[i].nextDir) {
                        players[i].facing = random(0, 4);
                    } else {
                        players[i].facing = players[i].nextDir;
                    }
                }
            }
        }
        for (k = 0; k < bombList.length; k++) {
            var bomb = bombList[k];
            if (bomb) {
                var dir1 = colCheck(players[i], bomb); // player vs bomb collision
            }
            if (dir1) {
                switch (players[i].facing) {
                    case 0: // up
                        if (dir1 == 'b' && players.indexOf(players[i]) > -1) {
                            players.splice(players.indexOf(players[i]), 1);
                        }
                        break;
                    case 1: // down
                        if (dir1 == 't' && players.indexOf(players[i]) > -1) {
                            players.splice(players.indexOf(players[i]), 1);
                        }
                        break;
                    case 2: // left
                        if (dir1 == 'r' && players.indexOf(players[i]) > -1) {
                            players.splice(players.indexOf(players[i]), 1);
                        }
                        break;
                    case 3: // right
                        if (dir1 == 'l' && players.indexOf(players[i]) > -1) {
                            players.splice(players.indexOf(players[i]), 1);
                        }
                        break;
                    default:
                }
                if (bombList.indexOf(bombList[k]) > -1) { // remove bomb
                    bombList.splice(bombList.indexOf(bombList[k]), 1);
                }
            }
        }
    }
}
