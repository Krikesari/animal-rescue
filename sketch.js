var bg,gameState;

gameState = "start";

function preload()
{
	animalRescue=loadImage("animalRescue.png");
	animalRescue.scale=0.9;
	
}

function setup() {
	createCanvas(1200, 950);
	
	bg=createSprite(600, 950/2, 1200,950);
	bg.addImage(animalRescue);

}


function draw() {
  background(0,250,0);
  if(gameState === "start") {
	var clickToStart=createSprite(1200/2,950/2,50,50);
  }
  drawSprites();
  
}





