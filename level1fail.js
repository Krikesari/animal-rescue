var bg;
var gameState = "level1fail";
var bglevel1fail,bglevel1;

function preload() {
	bglevel1fail = loadImage("level1fail.png");
	bglevel1fail.scale = 0.9;

	level1Bg = loadImage("level1.png");
	level1Bg.scale = 0.9;
}

function setup() {
	createCanvas(1200, 900);
	bg = createSprite(600, 900/2, 1200,900);
	bg.addImage(bglevel1fail);

	bglevel1 = createSprite(600, 900/2, 1200,900);
  	bglevel1.addImage(level1Bg);
  	bglevel1.visible = false;
}

function draw() {
    background(0,250,0);
    
    if (gameState === "level1fail") {
      var level1retry = createSprite(600,620,300,150);
      level1retry.visible = false;
      if (mousePressedOver(level1retry)) {
          gameState = "AA";
          bg.visible = false;
          level1retry.visible = false;
      }
    }
  
    if (gameState === "AA") {
        bglevel1.visible = true;
        var clickToStartLevel1 = createSprite(625,220,250,100);
	      clickToStartLevel1.visible = false;
          if (mousePressedOver(clickToStartLevel1)) {
            window.location.href = "level1.html";
        }
    }
    drawSprites();
}
