var bg;
var gameState = "level1complete";
var bglevel1complete

function preload() {
    bglevel1complete = loadImage("level4complete.png");
    bglevel1complete.scale = 0.9;

}

function setup() {
    createCanvas(1200, 900);
    bg = createSprite(600, 900 / 2, 1200, 900);
    bg.addImage(bglevel1complete);
}
   

function draw() {
    background(0, 250, 0);

    if (gameState === "level1complete") {
        var startlevel2 = createSprite(620, 700, 350, 100);
        startlevel2.visible = false;
        if (mousePressedOver(startlevel2)) {

            window.location.href = "index.html";
        }
    }
    drawSprites();
}
       
