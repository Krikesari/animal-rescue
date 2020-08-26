var bg, time, table;
var wallHtop, wallHbot, wallH13, wallH16, wallH20, wallH25, wallH27, wallH31, wallH33, wallH40, wallH42, wallH44, wallH49, wallH51, wallH56, wallH60, wallH65, wall69, wallH72, wallH76, wallH81, wallh84, wallH88, wallH93, wallH98;
var wallVlefta, wallVleftb, wallVrighta, wallVrightb, wallV11, wallV41, wallV61, wallV91, wallV12, wallV72, wallV13, wallV43, wallV63, wallV83, wallV14, wallV54, wallV05, wallV45, wallV16, wallV86, wallV27, wallV67, wallV87, wallV18, wallV38, wallV58, wallV78, wallV09, wallV39, wallV69;
var banana, monkeyImage, monkeyvisible, bananaImage, monkey, poacher1, poacher2, poacher3, poacher4, poacher5, poacher6, poacher1Image, poacher2hImage, poacher2vImage;


function preload() {
    bg_level4 = loadImage("bg_level4.png");

    table1 = loadImage("table.png");

    wallH = loadImage('wallH.png');
    wallH4 = loadImage('wallH4.png');
    wallH3 = loadImage('wallH3.png');
    wallH2 = loadImage('wallH2.png');
    wallH1 = loadImage('wallH1.png');
    wallV5 = loadImage('wallV5.png');
    wallV4 = loadImage('wallV4.png');
    wallV3 = loadImage('wallV3.png');
    wallV2 = loadImage('wallV2.png');
    wallV1 = loadImage('wallV1.png');
    monkeyImage = loadImage('monk.png');
    bananaImage = loadImage('banana.png');
    poacher1Image = loadImage('poacher1.png');
    poacher2vImage = loadImage('poacher2v.png');
    poacher2hImage = loadImage('poacher2h.png');

}
function setup() {

    createCanvas(1200, 900);
    bg = createSprite(1200 / 2, 450, 1200, 900);
    bg.addImage(bg_level4);
    bg.scale = 1.3;



    time = 60;
    table = createSprite(630, 450, 1200, 900);
    table.addImage(table1);
    table.scale = 0.80;
    table.visible = false;

    monkeyvisible = createSprite(200, 490, 40, 40);
    monkeyvisible.addImage(monkeyImage);
    monkeyvisible.scale = 0.13;
    // monkeyvisible.debug = true;

    monkey = createSprite(200, 490, 370, 370);
    monkey.scale = 0.13;
    monkey.visible = false;

    banana = createSprite(1050, 410, 40, 40);
    banana.addImage(bananaImage);
    banana.scale = 0.12;

    poacher1 = createSprite(500, 837, 40, 40);
    poacher1.addImage(poacher1Image);
    poacher1.scale = 0.14;
    poacher1.velocityX = -6;

    poacher2 = createSprite(500, 235, 40, 40);
    poacher2.addImage(poacher1Image);
    poacher2.scale = 0.14;
    poacher1.velocityX = -6;
    
    poacher3 = createSprite(770, 670, 40, 40);
    poacher3.addImage(poacher2hImage);
    poacher3.scale = 0.25;
    poacher4 = createSprite(410, 310, 40, 40);
    poacher4.addImage(poacher2vImage);
    poacher4.scale = 0.25;
    poacher6 = createSprite(860, 230, 40, 40);
    poacher6.addImage(poacher2vImage);
    poacher6.scale = 0.25;
    poacher5 = createSprite(670, 60, 40, 40);
    poacher5.addImage(poacher1Image);
    poacher5.scale = 0.13;




    wallHtop = createSprite(625, 20, 1200, 900);
    wallHtop.addImage(wallH);
    wallHtop.scale = 0.80;
    wallHbot = createSprite(625, 880, 1200, 900);
    wallHbot.addImage(wallH);
    wallHbot.scale = 0.80;
    wallH13 = createSprite(537, 100, 1200, 900);
    wallH13.addImage(wallH2);
    wallH13.scale = 0.80;
    wallH16 = createSprite(763, 100, 1200, 900);
    wallH16.addImage(wallH1);
    wallH16.scale = 0.80;
    wallH20 = createSprite(220, 190, 1200, 900);
    wallH20.addImage(wallH1);
    wallH20.scale = 0.80;
    wallH25 = createSprite(672, 190, 1200, 900);
    wallH25.addImage(wallH1);
    wallH25.scale = 0.80;
    wallH27 = createSprite(945, 190, 1200, 900);
    wallH27.addImage(wallH3);
    wallH27.scale = 0.80;
    wallH31 = createSprite(310, 277, 1200, 900);
    wallH31.addImage(wallH1);
    wallH31.scale = 0.80;
    wallH33 = createSprite(537, 277, 1200, 900);
    wallH33.addImage(wallH2);
    wallH33.scale = 0.80;
    wallH40 = createSprite(220, 363, 1200, 900);
    wallH40.addImage(wallH1);
    wallH40.scale = 0.80;
    wallH42 = createSprite(400, 363, 1200, 900);
    wallH42.addImage(wallH1);
    wallH42.scale = 0.80;
    wallH44 = createSprite(720, 363, 1200, 900);
    wallH44.addImage(wallH4);
    wallH44.scale = 0.80;
    wallH49 = createSprite(1035, 363, 1200, 900);
    wallH49.addImage(wallH1);
    wallH49.scale = 0.80;
    wallH51 = createSprite(400, 450, 1200, 900);
    wallH51.addImage(wallH3);
    wallH51.scale = 0.80;
    wallH56 = createSprite(855, 450, 1200, 900);
    wallH56.addImage(wallH3);
    wallH56.scale = 0.80;
    wallH60 = createSprite(265, 535, 1200, 900);
    wallH60.addImage(wallH2);
    wallH60.scale = 0.80;
    wallH65 = createSprite(720, 535, 1200, 900);
    wallH65.addImage(wallH2);
    wallH65.scale = 0.80;
    wallH69 = createSprite(1035, 535, 1200, 900);
    wallH69.addImage(wallH1);
    wallH69.scale = 0.80;
    wallH72 = createSprite(496, 620, 1200, 900);
    wallH72.addImage(wallH3);
    wallH72.scale = 0.80;
    wallH76 = createSprite(854, 620, 1200, 900);
    wallH76.addImage(wallH3);
    wallH76.scale = 0.80;
    wallH81 = createSprite(310, 708, 1200, 900);
    wallH81.addImage(wallH1);
    wallH81.scale = 0.80;
    wallH84 = createSprite(630, 708, 1200, 900);
    wallH84.addImage(wallH2);
    wallH84.scale = 0.80;
    wallH88 = createSprite(945, 708, 1200, 900);
    wallH88.addImage(wallH1);
    wallH88.scale = 0.80;
    wallH93 = createSprite(537, 798, 1200, 900);
    wallH93.addImage(wallH2);
    wallH93.scale = 0.80;
    wallH98 = createSprite(993, 798, 1200, 900);
    wallH98.addImage(wallH2);
    wallH98.scale = 0.80;



    wallVlefta = createSprite(173, 232, 1200, 900);
    wallVlefta.addImage(wallV5);
    wallVlefta.scale = 0.80;
    wallVleftb = createSprite(173, 708, 1200, 900);
    wallVleftb.addImage(wallV4);
    wallVleftb.scale = 0.80;
    wallVrighta = createSprite(1080, 190, 1200, 900);
    wallVrighta.addImage(wallV4);
    wallVrighta.scale = 0.80;
    wallVrightb = createSprite(1080, 660, 1200, 900);
    wallVrightb.addImage(wallV5);
    wallVrightb.scale = 0.80;
    wallV11 = createSprite(265, 140, 1200, 900);
    wallV11.addImage(wallV1);
    wallV11.scale = 0.80;
    wallV41 = createSprite(265, 400, 1200, 900);
    wallV41.addImage(wallV1);
    wallV41.scale = 0.80;
    wallV61 = createSprite(265, 585, 1200, 900);
    wallV61.addImage(wallV1);
    wallV61.scale = 0.80;
    wallV91 = createSprite(265, 835, 1200, 900);
    wallV91.addImage(wallV1);
    wallV91.scale = 0.80;
    wallV12 = createSprite(357, 225, 1200, 900);
    wallV12.addImage(wallV3);
    wallV12.scale = 0.80;
    wallV72 = createSprite(357, 715, 1200, 900);
    wallV72.addImage(wallV2);
    wallV72.scale = 0.80;
    wallV13 = createSprite(450, 143, 1200, 900);
    wallV13.addImage(wallV1);
    wallV13.scale = 0.80;
    wallV43 = createSprite(450, 400, 1200, 900);
    wallV43.addImage(wallV1);
    wallV43.scale = 0.80;
    wallV63 = createSprite(450, 580, 1200, 900);
    wallV63.addImage(wallV1);
    wallV63.scale = 0.80;
    wallV83 = createSprite(450, 798, 1200, 900);
    wallV83.addImage(wallV2);
    wallV83.scale = 0.80;
    wallV14 = createSprite(540, 193, 1200, 900);
    wallV14.addImage(wallV2);
    wallV14.scale = 0.80;
    wallV54 = createSprite(540, 492, 1200, 900);
    wallV54.addImage(wallV1);
    wallV54.scale = 0.80;
    wallV05 = createSprite(630, 60, 1200, 900);
    wallV05.addImage(wallV1);
    wallV05.scale = 0.80;
    wallV45 = createSprite(630, 535, 1200, 900);
    wallV45.addImage(wallV4);
    wallV45.scale = 0.80;
    wallV16 = createSprite(720, 233, 1200, 900);
    wallV16.addImage(wallV3);
    wallV16.scale = 0.80;
    wallV86 = createSprite(720, 760, 1200, 900);
    wallV86.addImage(wallV1);
    wallV86.scale = 0.80;
    wallV27 = createSprite(810, 233, 1200, 900);
    wallV27.addImage(wallV1);
    wallV27.scale = 0.80;
    wallV67 = createSprite(810, 580, 1200, 900);
    wallV67.addImage(wallV1);
    wallV67.scale = 0.80;
    wallV87 = createSprite(810, 798, 1200, 900);
    wallV87.addImage(wallV2);
    wallV87.scale = 0.80;
    wallV18 = createSprite(902, 143, 1200, 900);
    wallV18.addImage(wallV1);
    wallV18.scale = 0.80;
    wallV38 = createSprite(902, 315, 1200, 900);
    wallV38.addImage(wallV1);
    wallV38.scale = 0.80;
    wallV58 = createSprite(902, 492, 1200, 900);
    wallV58.addImage(wallV1);
    wallV58.scale = 0.80;
    wallV78 = createSprite(902, 660, 1200, 900);
    wallV78.addImage(wallV1);
    wallV78.scale = 0.80;
    wallV09 = createSprite(992, 60, 1200, 900);
    wallV09.addImage(wallV1);
    wallV09.scale = 0.80;
    wallV39 = createSprite(992, 360, 1200, 900);
    wallV39.addImage(wallV2);
    wallV39.scale = 0.80;
    wallV69 = createSprite(992, 580, 1200, 900);
    wallV69.addImage(wallV1);
    wallV69.scale = 0.80;


    textSize(30);
    textFont('Algerian');
    fill("black");



}

function draw() {

    background(0, 250, 0);

    poacher1.bounceOff(wallV83);
    poacher1.bounceOff(wallV87);
    if (World.frameCount % 60 === 0) {
        time = time - 1;
    }
    if (time <= 0 || isIntersecting(poacher1, monkey) || isIntersecting(poacher2, monkey) || isIntersecting(poacher3, monkey) || isIntersecting(poacher4, monkey) || isIntersecting(poacher5, monkey) || isIntersecting(poacher6, monkey)) {
        window.location.href = "level4fail.html";
    }
    drawSprites();
    text("time:" + time, 15, 50);

    monkeyvisible.x = monkey.x;
    monkeyvisible.y = monkey.y;
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
