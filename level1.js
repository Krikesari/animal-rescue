
 
 
 var bg=createSprite(200,200,400,400);
bg.setAnimation("background");   
bg.scale=4;


var score=0;


var boy =  createSprite(370,130,20,40);
boy.setAnimation('boy') ;
boy.scale=0.5;


textSize(25);
textFont('Algerian');
fill("yellow");

var giraffeG = createGroup();
var lionG = createGroup();
var elephantG = createGroup();
var pandaG = createGroup();
var keyG = createGroup();



function draw() {
        
background('black');


boy.y=World.mouseY;

    
  
  if (bg.y<0) {
  bg.y=bg.height/2;
   }
    

   
   
    createEdgeSprites();
  
    pandaF();
    
    elephantF();
    
    lionF();
    
   giraffeF();
    
   keyF();
                                             
   if (keyG.isTouching(pandaG)){
        playSound("sound://category_explosion/playful_game_explosive_hit.mp3",false);
        pandaG.destroyEach();
        keyG.destroyEach();
        score=score+1;
        
      }
        if (keyG.isTouching(giraffeG)){
        playSound("sound://category_explosion/playful_game_explosive_hit.mp3",false);
        giraffeG.destroyEach();
        keyG.destroyEach();
        score=score+1;
        
      }
      if (keyG.isTouching(lionG)){
        playSound("sound://category_explosion/playful_game_explosive_hit.mp3",false);
        lionG.destroyEach();
        keyG.destroyEach();
        score=score+1;
        
     }            
      
        if (keyG.isTouching(elephantG)){
        playSound("sound://category_explosion/playful_game_explosive_hit.mp3",false);
        elephantG.destroyEach();
        keyG.destroyEach();
        score=score+1;
        
      }
      
       drawSprites();
       text("score:"+score, 270, 30);
       
  }
 
  //check 
    
  function pandaF() {
    
    
      if(World.frameCount%60===10){
        var cage=createSprite(150,400,20,20);
 
  cage.setAnimation("cage");
   pandaG.add(cage);
      cage.velocityY=-(5*score/25+5);
      cage.x=randomNumber(20,320);
      
      cage.lifetime=95;
      
      var panda=createSprite(cage.x,400,20,20);
      
      panda.setAnimation("panda");
   
   
      panda.velocityY=-(5*score/25+5);
      
      
      panda.lifetime=90;
      
      panda.depth=cage.depth;
      cage.depth=cage.depth+1;
      }
  }
  function elephantF() {
            
            
              if(World.frameCount%60===40){
var cage=createSprite(115,400,20,20);
             
             cage.setAnimation("cage");
   elephantG.add(cage);
             cage.velocityY=-(5*score/25+5);
            cage.x=randomNumber(20,340);
              
              cage.lifetime=90;
              
              var elephant=createSprite(cage.x,400,20,20);
     
     elephant.setAnimation("elephant");
   
   
      elephant.velocityY=-(5*score/25+5);
      
      
      elephant.lifetime=90;
      
      cage.depth=elephant.depth;
      cage.depth=cage.depth+1;
              }
          }
  
  function lionF() {
    
    
      if(World.frameCount%60===0){
        var cage=createSprite(70,400,20,20);
    
      cage.setAnimation("cage");
  lionG.add(cage);
   
      cage.velocityY=-(5*score/25+5);
      cage.x=randomNumber(20,340);
      
      cage.lifetime=90;
      
        var lion=createSprite(cage.x,400,20,20);
   
      lion.setAnimation("lion");
   
   
      lion.velocityY=-(5*score/25+5);
      
      
      lion.lifetime=90;
      
      lion.depth=cage.depth;
      cage.depth=cage.depth+1;
      }
        
  } 
  function giraffeF() {
    
    
      if(World.frameCount%70===0){
        var cage=createSprite(70,400,20,20);
   
     cage.setAnimation("cage");
   giraffeG.add(cage);
     cage.velocityY=-(5*score/25+5);
     cage.x=randomNumber(20,340);
    
    cage.lifetime=90;
    
    var giraffe=createSprite(cage.x,400,20,20);

      giraffe.setAnimation("giraffe");
   
   
      giraffe.velocityY=-(5*score/25+5);
      
      
     giraffe.lifetime=90;
      
      giraffe.depth=cage.depth;
      cage.depth=cage.depth+1;
    
      }
  } 
 
  function keyF(){
    
      if(keyDown('space')&&World.frameCount%20===0){
     
     var key=createSprite(380,200,10,10);
   key.setAnimation('key');
  keyG.add(key);
   
   key.velocityX=-6;
   
  key.y=boy.y;
   
   playSound("sound://category_achievements/lighthearted_bonus_objective_3.mp3", false);
   
   key.lifetime=50;
   }
  }

