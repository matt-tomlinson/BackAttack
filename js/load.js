function load() {
    if (firstRun) {
        map = random(0, 4);
        pattern = random(0, 5);
        players = makePlayers();
        firstRun = 0;
        //map = 1;
        //pattern = 3;
    }
}
