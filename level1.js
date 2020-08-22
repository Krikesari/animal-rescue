var bg,boy,giraffeG,lionG,elephantG,pandaG,keyG,cage,giraffe,panda,elephant,lion,key
 function preload(){
 bg_level1 = loadImage(bg_level1.png);

boy = loadImage(boy.png);
lion = loadImage(lion.png);
giraffe = loadImage(giraffe.png);
panda = loadImage(panda.png);
elephant = loadImage(elephant.png);
cage = loadImage(cage.png);
key = loadImage(key.png);
 }
 function setup(){

  createCanvas(1200, 950);
 var bg=createSprite(1200/2,425,1200,950);
bg.setImage(bg_level1);   



var score=0;


var boy =  createSprite(400,930,20,40);
boy.addImage(boy) ;
boy.scale=0.8;


textSize(25);
textFont('Algerian');
fill("yellow");

var giraffeG = createGroup();
var lionG = createGroup();
var elephantG = createGroup();
var pandaG = createGroup();
var keyG = createGroup();

}

function draw() {
        
  background(0,250,0);


boy.y=World.mouseY;
   
    createEdgeSprites();
  
    pandaF();
    
    elephantF();
    
    lionF();
    
   giraffeF();
    
   keyF();
                                             
   if (keyG.isTouching(pandaG)){
        
        pandaG.destroyEach();
        keyG.destroyEach();
        score=score+1;
        
      }
        if (keyG.isTouching(giraffeG)){
        
        giraffeG.destroyEach();
        keyG.destroyEach();
        score=score+1;
        
      }
      if (keyG.isTouching(lionG)){
        
        lionG.destroyEach();
        keyG.destroyEach();
        score=score+1;
        
     }            
      
        if (keyG.isTouching(elephantG)){
        
        elephantG.destroyEach();
        keyG.destroyEach();
        score=score+1;
        
      }
      
       drawSprites();
       text("score:"+score, 1150, 50);
       
  }
 
  
    
  function pandaF() {
    
    
      if(World.frameCount%60===10){
        var cage=createSprite(150,970,20,20);
 
  cage.addImage(cage);
   pandaG.add(cage);
      cage.velocityY=-(5*score/25+5);
      cage.x=random(20,1200);
      
      cage.lifetime=950/5+10;
      
      var panda=createSprite(cage.x,950,20,20);
      
      panda.addImage(panda);
   
   
      panda.velocityY=-(5*score/25+5);
      
      
      panda.lifetime=950/5+10;
      
      panda.depth=cage.depth;
      cage.depth=cage.depth+1;
      }
  }
  function elephantF() {
            
            
              if(World.frameCount%60===40){
var cage=createSprite(115,950,20,20);
             
             cage.addImage(cage);
   elephantG.add(cage);
             cage.velocityY=-(5*score/25+5);
            cage.x=random(20,1200);
              
              cage.lifetime=950/5+10;
              
              var elephant=createSprite(cage.x,950,20,20);
     
     elephant.addImage(elephant);
   
   
      elephant.velocityY=-(5*score/25+5);
      
      
      elephant.lifetime=950/5+10;
      
      cage.depth=elephant.depth;
      cage.depth=cage.depth+1;
              }
          }
  
  function lionF() {
    
    
      if(World.frameCount%60===0){
        var cage=createSprite(70,950,20,20);
    
      cage.addImage(cage);
  lionG.add(cage);
   
      cage.velocityY=-(5*score/25+5);
      cage.x=random(20,1200);
      
      cage.lifetime=950/5+10;
      
        var lion=createSprite(cage.x,950,20,20);
   
      lion.addImage(lion);
   
   
      lion.velocityY=-(5*score/25+5);
      
      
      lion.lifetime=950/5+10;
      
      lion.depth=cage.depth;
      cage.depth=cage.depth+1;
      }
        
  } 
  function giraffeF() {
    
    
      if(World.frameCount%70===0){
        var cage=createSprite(70,950,20,20);
   
     cage.addImage(cage);
   giraffeG.add(cage);
     cage.velocityY=-(5*score/25+5);
     cage.x=random(20,1150);
    
    cage.lifetime=950/5+10;
    
    var giraffe=createSprite(cage.x,950,20,20);

      giraffe.addImage(giraffe);
   
   
      giraffe.velocityY=-(5*score/25+5);
      
      
     giraffe.lifetime=950/5+10;
      
      giraffe.depth=cage.depth;
      cage.depth=cage.depth+1;
    
      }
  } 
 
  function keyF(){
    
      if(keyDown('space')&&World.frameCount%20===0){
     
     var key=createSprite(380,200,10,10);
   key.addImage(key);
  keyG.add(key);
   
   key.velocityX=-6;
   
  key.y=boy.y;
   
   
   
   key.lifetime=210;
   }
  }

