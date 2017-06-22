var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

var width = canvas.width, //= window.innerWidth;
    height = canvas.height, //= window.innerHeight;
    fps = 60,
    rightPressed = false,
    leftPressed = false,
    upPressed = false,
    downPressed = false,
    spacePressed = false,
    firstRun = 1,
    tilesize = 32,
    tileDrawSize = 64,
    map;

window.addEventListener("keydown", function(e) { // prevent key scrolling
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

function clearCanvas() {
    ctx.clearRect(0, 0, width, height);
}

function update() {
    updatePlayers();
    updateBombs();
    updateAnimations();
}

function draw() {
    clearCanvas();
    drawMap();
    drawBombs();
    drawPlayers();
    drawAnimations();
    collisionResolution();
}

function main() {
    load();
    draw();
    update();
}

setInterval(main, 1000 / fps);
