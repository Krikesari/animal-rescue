var gameState = "play";
var bg, bg_level3, road, cow;
//var CAR_IMAGES = [];
//var ALL_OBSTACLES = [];

function preload() {
  bg_level3 = loadImage("bg_level3.jpg");
  //cow = loadImage("cow1.png")
   //car1 = loadImage('car1.png');
  //car2 = loadImage('car2.png');
  //  car3 = loadImage('car3.png');
  //car4 = loadImage('car4.png');
  //car5 = loadImage('car5.png');

  //car_IMAGES = [car1, car2, car3, car4, car5];

}

function setup() {

  createCanvas(1200, 900);
  bg = createSprite(1200 / 2, 425, 1200, 900);
  bg.addImage(bg_level3);
  bg.scale = 1.5;
  
 
    //creating sprites
    //cow = createSprite(200, 200, 20, 20);
   // cow.setAnimation(cow);

    //creating gamestates
   // gamestate = "play";


   // score = 0;

    //var enemysGroup = createGroup();

   // textFont("Calibri");
    //textSize(20);
    //fill('yellow');
}
function draw() {
    //adding background
    background(0, 255, 0);

    //createEdgeSprites();

    //console.log(gamestate);


    // if (gamestate === "play") {

    //cow.x = World.mouseX;

    // cow.y = 370;


    //if (enemysGroup.isTouching(bottomEdge) && World.frameCount % 20 === 19) {
    // score = score + 1;
    // }


    //enemys();


    // cow.setCollider('rectangle', 0, 0, 100, 200);

    //if (enemysGroup.isTouching(cow)) {
    //  gamestate = "end";
    // playSound("sound://category_animals/cow.mp3", false);
    // }
    //}
    //else {
    //if (gamestate === "end") {

    //enemysGroup.destroyEach();

    //cow.x = 200;
    //cow.y = 220;
    //cow.setAnimation("anim");
    //bg.visible=false;


    //var rip = createSprite(200, 200, 100, 100);
    //rip.setAnimation("rip");

    //rip.depth = cow.depth;
    //cow.depth = cow.depth + 1;
    //}
    //}
    // drawSprites();
    //text("Score:" + score, 270, 20);
}

////function enemys() {
//if (World.frameCount % 8 === 7) {
// var  car=createSprite(200,0,20,20);
//  car.setAnimation("car_"+randomNumber(1,4));
//  car.x=randomNumber(20,380);
// car.velocityY=7;
// car.lifetime=100;
//enemysGroup.add( car);
// car.scale=0.3;
// car.setCollider("rectangle",0,0,100,100);



// }

//}
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