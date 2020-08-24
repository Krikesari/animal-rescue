var bg, cow, cowWidthHalf, car1, car3, car4, car2, key, cow1, key1, car21, score, carA, carB, carC, carD, noOfKeys, time, car;


var ANIMAL_SCALE = 0.25;
var GAME_WIDTH = 1200;
var ALL_KEYS = [];

function preload() {
  bg_level3 = loadImage("bg_level3.jpg");

  cow1 = loadImage('cow.png');
  car2 = loadImage('car2.png');
  car1 = loadImage('car1.png');
  car3 = loadImage('car3.png');
  car4 = loadImage('car4.png');

}
function setup() {

  createCanvas(1200, 900);
  bg = createSprite(1200 / 2, 425, 1200, 900);
  bg.addImage(bg_level3);
  bg.scale = 2.0;

  time = 60;

  score = 0;
  noOfKeys = 0;

  cow = createSprite(600, 825, 20, 40);
  cow.addImage(cow1);
  cow.scale = 0.75;


  textSize(25);
  textFont('Algerian');
  fill("yellow");

  car1G = createGroup();
  car2G = createGroup();
  car4G = createGroup();
  car3G = createGroup();
  keyG = createGroup();

}

function draw() {

  background(0, 250, 0);


  cow.x = World.mouseX;
  cowWidthHalf = cow.width * cow.scale / 2;
  if (cow.x - cowWidthHalf < 0) {
    cow.x = cowWidthHalf;
  } else if (cow.x + cowWidthHalf > GAME_WIDTH) {
    cow.x = GAME_WIDTH - cowWidthHalf;
  }


  createEdgeSprites();

  if (isIntersecting(carA, cow) || isIntersecting(carB, cow) || isIntersecting(carC, cow) || isIntersecting(carD, cow) && time > 0) {
    window.location.href = "level3fail.html";
  }
  if (time <= 0) {
    window.location.href = "level3complete.html";
  }


  if (World.frameCount % 60 === 0) {
    time = time - 1;
  }
  drawSprites();

  text("time:" + time, 50, 50);

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

  return abs(o2x - o1x) <= o1w + o2w &&
    abs(o2y - o1y) <= o1h + o2h;
}

car3F();

car4F();

car2F();

car1F();


function car3F() {


  if (World.frameCount % 80 === 0) {

    carC = createSprite(random(50, 1150), 0, 20, 20);
    carC.addImage(car3);
    carC.scale = 0.25;
    carC.velocityY = +(5 * score / 25 + 5);
    carC.lifetime = 900 / 5 + 10;


  }
}

function car4F() {


  if (World.frameCount % 80 === 60) {

    carD = createSprite(random(50, 1150), 0, 20, 20);
    carD.addImage(car4);
    carD.scale = 0.2;
    carD.velocityY = +(5 * score / 25 + 11);
    carD.lifetime = 900 / 5 + 10;


  }
}

function car2F() {


  if (World.frameCount % 80 === 40) {

    carB = createSprite(random(50, 1150), 0, 20, 20);
    carB.addImage(car2);
    carB.scale = 0.25;
    carB.velocityY = +(5 * score / 25 + 9);
    carB.lifetime = 900 / 5 + 10;


  }

}
function car1F() {


  if (World.frameCount % 80 === 20) {
    carA = createSprite(random(50, 1150), 0, 20, 20);
    carA.addImage(car1);
    carA.scale = 0.1;
    carA.velocityY = +(5 * score / 25 + 10);
    carA.lifetime = 900 / 5 + 10 + 50;

  }
}

