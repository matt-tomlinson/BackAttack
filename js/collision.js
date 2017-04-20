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
            var player = players[i];
            if (bomb && player) {
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
        for (l = 0; l < players.length; l++) {
            if (players[i] != players[l]) {
                var player1 = players[i];
                var player2 = players[l];
                if (player1 && player2) {
                    var dir3 = colCheck(players[i], players[l]);
                }
                if (dir3) {
                    for (m = 0; m < 4; m++) {
                        for (n = 0; n < 4; n++) {
                            if (players[i].facing != players[l].facing) {
                                if (players[i].facing == m && players[l].facing == n) {
                                    if (players[i].facing == 0) {
                                        players[i].facing = 1
                                    } else if (players[i].facing == 1) {
                                        players[i].facing = 0;
                                    } else if (players[i].facing == 2) {
                                        players[i].facing = 3;
                                    } else if (players[i].facing == 3) {
                                        players[i].facing = 2;
                                    }

                                    if (players[l].facing == 0) {
                                        players[l].facing = 1
                                    } else if (players[l].facing == 1) {
                                        players[l].facing = 0;
                                    } else if (players[l].facing == 2) {
                                        players[l].facing = 3;
                                    } else if (players[l].facing == 3) {
                                        players[l].facing = 2;
                                    }
                                    var done = 1;
                                    break;
                                }
                            }
                        }
                        if (done) {
                            done = 0;
                            break;
                        }
                    }
                }
            }
        }
    }
    for (k = 0; k < bombList.length; k++) {
        for (j = 0; j < grid.length; j++) {
            var bomb = bombList[k];
            if (bomb) {
                var dir2 = colCheck(bombList[k], grid[j]); // bomb vs grid collision
            }
            if (dir2) {
                if (bombList.indexOf(bombList[k]) > -1) {
                    bombList.splice(bombList.indexOf(bombList[k]), 1);
                }
            }
        }
    }
}
