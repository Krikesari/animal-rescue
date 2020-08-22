var bg, boy, giraffeG, lionG, elephantG, pandaG, keyG, cage, giraffe, panda, elephant, lion, key, boy1, key1, lion1, score, giraffe1, panda1, elephant1, cage1,noOfKeys;


var ANIMAL_SCALE = 0.25;
var GAME_HEIGHT = 900;
var ALL_KEYS = [];

function preload() {
  bg_level1 = loadImage("bg_level1.png");

  boy1 = loadImage('boy.png');
  lion1 = loadImage('lion.png');
  giraffe1 = loadImage('giraffe.png');
  panda1 = loadImage('panda.png');
  elephant1 = loadImage('elephant.png');
  cage1 = loadImage('cage.png');
  key1 = loadImage('key.png');
}
function setup() {

  createCanvas(1200, 900);
  var bg = createSprite(1200 / 2, 425, 1200, 900);
  bg.addImage(bg_level1);
  bg.scale = 1.5;


  score = 0;
  noOfKeys=0;

  boy = createSprite(1140, 400, 20, 40);
  boy.addImage(boy1);
  boy.scale = 0.4;


  textSize(25);
  textFont('Algerian');
  fill("yellow");

  giraffeG = createGroup();
  lionG = createGroup();
  elephantG = createGroup();
  pandaG = createGroup();
  keyG = createGroup();

}

function draw() {

  background(0, 250, 0);


  boy.y = World.mouseY;
  var boyHeightHalf = boy.height * boy.scale / 2;
  if (boy.y - boyHeightHalf < 0) {
    boy.y = boyHeightHalf;
  } else if (boy.y + boyHeightHalf > GAME_HEIGHT) {
    boy.y = GAME_HEIGHT - boyHeightHalf;
  }
 
  console.log(noOfKeys);


  createEdgeSprites();

  pandaF();

   elephantF();

  lionF();

  // giraffeF();

  keyF();

  for (i in ALL_KEYS) {
    var key = ALL_KEYS[i];
    if (!key.removed && !pandaG.removed && isIntersecting(pandaG, key)) {
      pandaG.remove();
      score += 1;
      key.remove();
    } else if (!key.removed && !elephantG.removed && isIntersecting(elephantG, key)) {
      elephantG.remove();
      score += 1;
      key.remove();
    }
    else if (!key.removed && !lionG.removed && isIntersecting(lionG, key)) {
      lionG.remove();
      score += 1;
      key.remove();
    }
  }
                          
  drawSprites();
  text("Score:" + score, 1050, 50);

  if (score > 30) {
    window.location.href = "level1Complete.html";
  }
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



function pandaF() {


  if (World.frameCount % 180 === 100) {
    var cage = createSprite(150, 920, 20, 20);

    cage.addImage(cage1);
    cage.scale = ANIMAL_SCALE;
    // pandaG.add(cage);
    cage.velocityY = -(5 * score / 25 + 5);
    cage.x = random(20, 1000);
    pandaG = cage;

    cage.lifetime = 900 / 5 + 10;

    var panda = createSprite(cage.x, 920, 20, 20);

    panda.addImage(panda1);
    panda.scale = ANIMAL_SCALE - 0.1;

    panda.velocityY = -(5 * score / 25 + 5);


    panda.lifetime = 900 / 5 + 10;

    panda.depth = cage.depth;
    cage.depth = cage.depth + 1;
  }
}

function elephantF() {


  if (World.frameCount % 180 === 160) {
    var cage = createSprite(115, 920, 20, 20);

    cage.addImage(cage1);
    cage.scale = ANIMAL_SCALE;
    //elephantG.add(cage);
    cage.velocityY = -(5 * score / 25 + 5);
    cage.x = random(20, 1000);
    elephantG = cage;

    cage.lifetime = 900 / 5 + 10;

    var elephant = createSprite(cage.x, 920, 20, 20);

    elephant.addImage(elephant1);
    elephant.scale = ANIMAL_SCALE - 0.05;

    elephant.velocityY = -(5 * score / 25 + 5);
    elephant.lifetime = 900 / 5 + 10;

    cage.depth = elephant.depth;
    cage.depth = cage.depth + 1;
  }
}

function lionF() {


  if (World.frameCount % 180 === 40) {
    var cage = createSprite(70, 920, 20, 20);

    cage.addImage(cage1);
    cage.scale = ANIMAL_SCALE;
    //lionG.add(cage);
    lionG=cage;
    cage.velocityY = -(5 * score / 25 + 5);
    cage.x = random(20, 1000);

    cage.lifetime = 920 / 5 + 10;

    var lion = createSprite(cage.x, 920, 20, 20);

    lion.addImage(lion1);
    lion.scale = ANIMAL_SCALE - 0.21;;

    lion.velocityY = -(5 * score / 25 + 5);


    lion.lifetime = 900 / 5 + 10;

    lion.depth = cage.depth;
    cage.depth = cage.depth + 1;
  }

}
function giraffeF() {


  if (World.frameCount % 180 === 0) {
    var cage = createSprite(70, 920, 20, 20);

    cage.addImage(cage1);
    cage.scale = ANIMAL_SCALE;
    giraffeG.add(cage);
    cage.velocityY = -(5 * score / 25 + 5);
    cage.x = random(20, 1000);

    cage.lifetime = 900 / 5 + 10;

    var giraffe = createSprite(cage.x, 920, 20, 20);

    giraffe.addImage(giraffe1);
    giraffe.scale = ANIMAL_SCALE - 0.05;

    giraffe.velocityY = -(5 * score / 25 + 5);


    giraffe.lifetime = 900 / 5 + 10;

    giraffe.depth = cage.depth;
    cage.depth = cage.depth + 1;

  }
}

function keyF() {

  if (keyDown('space') && World.frameCount % 60 === 59) {

    key = createSprite(boy.x, 200, 10, 10);
    key.addImage(key1);

    key.scale = ANIMAL_SCALE - 0.1;
    keyG.add(key);

    key.velocityX = -6;

    key.y = boy.y;

    noOfKeys=noOfKeys+1;
    if(noOfKeys=4){
    noOfKeys=0;
    }

    key.lifetime = 210;
    ALL_KEYS.push(key);
  }

}


function scoreF() {
  if (score = 30) {
    window.location.href = "level1Complete.html";
  }
}