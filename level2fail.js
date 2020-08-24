var bg;
var gameState = "level2fail";
var level2fail,bglevel2;

function preload() {
	bglevel2fail = loadImage("level2fail.png");
	bglevel2fail.scale = 0.9;

	level2Bg = loadImage("level2.png");
	level2Bg.scale = 0.9;
}

function setup() {
	createCanvas(1200, 900);
	bg = createSprite(600, 900/2, 1200,900);
	bg.addImage(bglevel2fail);

	bglevel2 = createSprite(600, 900/2, 1200,900);
  	bglevel2.addImage(level2Bg);
  	bglevel2.visible = false;
}

function draw() {
    background(0,250,0);
    
    if (gameState === "level2fail") {
      var level2retry = createSprite(600,620,300,150);
      level2retry.visible = false;
      if (mousePressedOver(level2retry)) {
          gameState = "AA";
          bg.visible = false;
          level2retry.visible = false;
      }
    }
  
    if (gameState === "AA") {
        bglevel2.visible = true;
        var clickToStartLevel2 = createSprite(625,220,250,100);
	      clickToStartLevel2.visible = false;

  	  if (mousePressedOver(clickToStartLevel2)) {
		  window.location.href = "level2.html";
        }
    }
    drawSprites();
}
