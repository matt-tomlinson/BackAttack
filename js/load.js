function load() {
    if (firstRun) {
        makeMap(random(0, 4), random(0, 5));
        players = makePlayers();
        firstRun = 0;
    }
}
