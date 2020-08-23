var bg;
var gameState = "level1fail";
var invisibleclicklevel1fail,invisibleclicklevel1instructions,level1fail,level1Bg,bglevel1;

function preload() {
	level1fail = loadImage("level1fail.png");
	level1fail = 0.9;

	level1Bg = loadImage("level1.png");
	level1Bg.scale = 0.9;
}

function setup() {
	createCanvas(1200, 900);
	bg = createSprite(600, 900/2, 1200,900);
	bg.addImage(level1fail);

	bglevel1 = createSprite(600, 900/2, 1200,900);
  	bglevel1.addImage(level1Bg);
  	bglevel1.visible = false;
}

function draw() {
    background(0,250,0);
    
    if (gameState === "level1fail") {
      var level1retry = createSprite(700,750,200,80);
      level1retry.visible = false;
      if (mousePressedOver(level1retry)) {
          gameState = "AA";
          bg.visible = false;
          startlevel1.visible = false;
      }
    }
  
    if (gameState === "AA") {
        bglevel1.visible = true;
        var level1instructions = createSprite(625,750,250,100);
        level1instructions.visible = false;
  
        if (mousePressedOver(level1instructions)) {
            window.location.href = "level1.html";
        }
    }
    drawSprites();
}
