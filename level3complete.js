var bg;
var gameState = "level1complete";
var bglevel2;

function preload() {
	bglevel1complete = loadImage("level3complete.png");
	bglevel1complete.scale = 0.9;

	level2Bg = loadImage("level4.png");
	level2Bg.scale = 0.9;
}

function setup() {
	createCanvas(1200, 900);
	bg = createSprite(600, 900/2, 1200,900);
	bg.addImage(bglevel1complete);

	bglevel2 = createSprite(600, 900/2, 1200,900);
  	bglevel2.addImage(level2Bg);
  	bglevel2.visible = false;
}

function draw() {
    background(0,250,0);
    
    if (gameState === "level1complete") {
      var startlevel2 = createSprite(620,630,280,110);
      startlevel2.visible = false;
      if (mousePressedOver(startlevel2)) {
          gameState = "BB";
          bg.visible = false;
          startlevel2.visible = false;
      }
    }
  
    if (gameState === "BB") {
        bglevel2.visible = true;
        var clickToStartLevel2 = createSprite(625,220,230,80);
        clickToStartLevel2.visible = false;
  
        if (mousePressedOver(clickToStartLevel2)) {
            window.location.href = "level4.html";
        }
    }
    drawSprites();
}

