var bg;
var gameState = "level1complete";
var bglevel2;

function preload() {
	level1complete = loadImage("level1complete.png");
	level1complete = 0.9;

	level2Bg = loadImage("level2.png");
	level2Bg.scale = 0.9;
}

function setup() {
	createCanvas(1200, 900);
	bg = createSprite(600, 900/2, 1200,900);
	bg.addImage(level1complete);

	bglevel2 = createSprite(600, 900/2, 1200,900);
  	bglevel2.addImage(level2Bg);
  	bglevel2.visible = false;
}

function draw() {
    background(0,250,0);
    
    if (gameState === "level1complete") {
      var startlevel2 = createSprite(700,750,200,80);
      clickToStart.visible = false;
      if (mousePressedOver(startlevel2)) {
          gameState = "BB";
          bg.visible = false;
          startlevel2.visible = false;
      }
    }
  
    if (gameState === "BB") {
        bglevel2.visible = true;
        var clickToStartLevel2 = createSprite(625,750,250,100);
      clickToStartLevel2.visible = false;
  
        if (mousePressedOver(clickToStartLevel2)) {
            window.location.href = "level2.html";
        }
    }
    drawSprites();
}
