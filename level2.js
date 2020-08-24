var play = 1;
var end = 0;
var gameState = play;
var bg, bg_level2, invisibleKangaroo1, kangaroo, fire1, fire1a, fire2, fire2a, fire3, fire3a, time, invisibleKangaroo, obstacle, invisibleGround, rand, count;
var FIRE_IMAGES = [];

function preload() {
  bg_level2 = loadImage("bg_level2.jpg");
  invisibleKangaroo1 = loadImage('invisibleKangaroo.png');
  fire1 = loadImage('fire1.png');
  fire1a = loadImage('fire1a.png');
  fire2 = loadImage('fire2.png');
  fire2a = loadImage('fire2a.png');
  fire3 = loadImage('fire3.png');

  FIRE_IMAGES = [fire1, fire1a, fire2, fire2a, fire3];

}
function setup() {

  createCanvas(1200, 900);
  bg = createSprite(1200 / 2, 425, 1200, 900);
  bg.addImage(bg_level2);
  bg.scale = 1.5;
  bg.depth = bg.depth - 3;
  bg.x = bg.width / 2;

  time = 60;

  count = 0;

  kangaroo = createSprite(300, 400, 20, 40);
  kangaroo.addImage(invisibleKangaroo1);
  kangaroo.scale = 0.3;
  invisibleKangaroo = createSprite(300, 400, 150, 300);
  invisibleKangaroo.visible=false;
  invisibleKangaroo.x = 170;

  textFont("Georgia");
  textStyle(BOLD);
  fill('white');

  //invisible Ground to support invisibleKangaroo
  invisibleGround = createSprite(1200 / 2, 775, 1200, 50);
  invisibleGround.visible = false;

  textSize(25);
  textFont('Algerian');
  fill(0);
}
function draw() {

  background(0, 250, 0);

  background("green");

  //console.log(count);


  if (gameState === play) {

    //scoring
    count = Math.round(World.frameCount / 4);

    bg.velocityX = -2;


    if (bg.x < 318) {
      bg.x = bg.width / 2;
    }

    //jump when the space key is pressed
    if (keyDown("space") && isIntersecting(invisibleKangaroo,invisibleGround)) {
      //playSound("sound://category_jump/arcade_game_jump_1.mp3",false);
      invisibleKangaroo.velocityY = -40;


    }

    //add gravity
    invisibleKangaroo.velocityY = invisibleKangaroo.velocityY + 1.6;



    //spawn obstacles
    spawnObstacles();

    
  }

  last2();

  // from falling down
  invisibleKangaroo.collide(invisibleGround);

  //display score


  drawSprites();
  text("Score: " + count, 1000, 50);
  kangaroo.x=invisibleKangaroo.x;
  kangaroo.y=invisibleKangaroo.y+45;
}
function isIntersecting(object1, object2) {
  var o1x = object1.x;
  var o1y = object1.y;
  var o1w = object1.width * object1.scale / 2;
  var o1h = object1.height * object1.scale / 2;

  var o2x = object2.x;
  var o2y = object2.y;
  var o2w = object2.width * object2.scale / 2;
  var o2h = object2.height * object2.scale / 2;

  console.log(o1w + "," + o2w);

  return abs(o2x - o1x) <= o1w + o2w &&
      abs(o2y - o1y) <= o1h + o2h;
}
function spawnObstacles() {




  if (World.frameCount % 80 === 0) {
    obstacle = createSprite(1200, invisibleGround.y - 90, 10, 40);
    obstacle.velocityX = -6;

    //generate random obstacles
    var rand = Math.floor(Math.random() * FIRE_IMAGES.length)
    obstacle.addImage(FIRE_IMAGES[rand]);

    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 470;

    //obstacle.depth=invisibleKangaroo.depth;
    //invisibleKangaroo.depth=invisibleKangaroo.depth+1;
    //add each obstacle to the group
    //ObstaclesGroup.add(obstacle);

    //obstacle.setCollider("rectangle",0,0,150,150);

  }
}
function last2(){
  if(isIntersecting(obstacle,invisibleKangaroo)){
    gameState = "END";
    }
  if (gameState === "END") {
    window.location.href = "level2fail.html";
  }
  else if(score=>500){
    window.location.href = "level2complete.html";
  }
}