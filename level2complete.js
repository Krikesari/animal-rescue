var bg;
var gameState = "level2complete";
var bglevel3;

function preload() {
	bglevel2complete = loadImage("level2complete.png");
	bglevel2complete.scale = 0.9;

	level3Bg = loadImage("level3.png");
	level3Bg.scale = 0.9;
}

function setup() {
	createCanvas(1200, 900);
	bg = createSprite(600, 900/2, 1200,900);
	bg.addImage(bglevel2complete);

	bglevel3 = createSprite(600, 900/2, 1200,900);
  	bglevel3.addImage(level3Bg);
  	bglevel3.visible = false;
}

function draw() {
    background(0,250,0);
    
    if (gameState === "leve2complete") {
      var startlevel3 = createSprite(620,630,280,110);
      startlevel3.visible = false;
      if (mousePressedOver(startlevel3)) {
          gameState = "CC";
          bg.visible = false;
          startlevel3.visible = false;
      }
    }
  
    if (gameState === "CC") {
        bglevel3.visible = true;
        var clickToStartLevel3 = createSprite(625,700,230,80);
        clickToStartLevel3.visible = false;
  
        if (mousePressedOver(clickToStartLevel3)) {
            window.location.href = "level3.html";
        }
    }
    drawSprites();
}
