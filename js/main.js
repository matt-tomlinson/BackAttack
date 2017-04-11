var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

var width = canvas.width; //= window.innerWidth;
var height = canvas.height; //= window.innerHeight;
var fps = 60;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed = false;
var firstRun = 1;
var tilesize = 32;
var tileDrawSize = 64;
var map;

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
}

function draw() {
    clearCanvas();
    drawMap(map);
    drawPlayers();
}

function main() {
    load();
    draw();
    update();
}

setInterval(main, 1000 / fps);
