var bg;
var gameState = "start";
var bgLevel1;

function preload() {
	animalRescue = loadImage("animalRescue.png");
	animalRescue.scale = 0.9;

	level1Bg = loadImage("level1.png");
	level1Bg.scale = 0.9;
}

function setup() {
	createCanvas(1200, 950);
	bg = createSprite(600, 950/2, 1200,950);
	bg.addImage(animalRescue);

	bgLevel1 = createSprite(600, 950/2, 1200,900);
  	bgLevel1.addImage(level1Bg);
  	bgLevel1.visible = false;
}


function draw() {
  background(0,250,0);
  
  if (gameState === "start") {
	var clickToStart = createSprite(1200/2,525,200,80);
	clickToStart.visible = false;
	if (mousePressedOver(clickToStart)) {
		gameState = "AA";
		bg.visible = false;
		clickToStart.visible = false;
	}
  }

  if (gameState === "AA") {
  	bgLevel1.visible = true;
  	var clickToStartLevel1 = createSprite(625,220,250,100);
	clickToStartLevel1.visible = false;

  	if (mousePressedOver(clickToStartLevel1)) {
		  window.location.href = "level1.html";
  	}
  }
  
  drawSprites();
}





