var bg,boy,giraffeG,lionG,elephantG,pandaG,keyG,cage,giraffe,panda,elephant,lion,key,boy1,key1,lion1,giraffe1,panda1,elephant1,cage1;
 function preload(){
 bg_level1 = loadImage("bg_level1.png");

boy1 = loadImage('boy.png');
lion1 = loadImage('lion.png');
giraffe1 = loadImage('giraffe.png');
panda1 = loadImage('panda.png');
elephant1 = loadImage('elephant.png');
cage1 = loadImage('cage.png');
key11 = loadImage('key.png');
 }
 function setup(){

  createCanvas(1200, 950);
 var bg=createSprite(1200/2,425,1200,950);
bg.addImage(bg_level1);   
bg.scale=1.5;


var score=0;


boy =  createSprite(1140,400,20,40);
boy.addImage(boy1) ;
boy.scale=0.4;


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
        
  background(0,250,0);


    boy.Y=World.mouseY;
   
    createEdgeSprites();
  
    pandaF();
    
    elephantF();
    
    lionF();
    
   giraffeF();
    
   keyF();
                                             
  // if (pandaG.x-keyG.x<pandaG.width/2+keyG.width/2&&keyG.x-pandaG.x<pandaG.width/2+keyG.width/2) {
        
    //pandaG.destroyEach();
    //keyG.destroyEach();
    //score=score+1;
    
  //}
       
      //if (giraffeG.x-keyG.x<giraffeG.width/2+keyG.width/2&&keyG.x-giraffeG.x<giraffeG.width/2+keyG.width/2)
       // {
        
        //giraffeG.destroyEach();
        //keyG.destroyEach();
        //score=score+1;
        
      //}
      //if (lionG.x-keyG.x<lionG.width/2+keyG.width/2&&keyG.x-lionG.x<lionG.width/2+keyG.width/2){
        
        //lionG.destroyEach();
       // keyG.destroyEach();
       // score=score+1;
        
    // }            
      
     //if (elephantG.x-keyG.x<elephantG.width/2+keyG.width/2&&keyG.x-elephantG.x<elephantG.width/2+keyG.width/2){
        
        //elephantG.destroyEach();
        //keyG.destroyEach();
        //score=score+1;
        
      //}
      
       drawSprites();
       //text("Score:" + score, 1150, 50);
       
  }
 
  
    
  function pandaF() {
    
    
      if(World.frameCount%60===10){
        var cage=createSprite(150,970,20,20);
 
  cage.addImage(cage1);
   pandaG.add(cage);
      cage.velocityY=-(5*score/25+5);
      cage.x=random(20,1130);
      
      cage.lifetime=950/5+10;
      
      var panda=createSprite(cage.x,950,20,20);
      
      panda.addImage(panda1);
   
   
      panda.velocityY=-(5*score/25+5);
      
      
      panda.lifetime=950/5+10;
      
      panda.depth=cage.depth;
      cage.depth=cage.depth+1;
      }
  }
  function elephantF() {
            
            
              if(World.frameCount%60===40){
var cage=createSprite(115,950,20,20);
             
             cage.addImage(cage1);
   elephantG.add(cage);
             cage.velocityY=-(5*score/25+5);
            cage.x=random(20,1130);
              
              cage.lifetime=950/5+10;
              
              var elephant=createSprite(cage.x,950,20,20);
     
     elephant.addImage(elephant1);
   
   
      elephant.velocityY=-(5*score/25+5);
      
      
      elephant.lifetime=950/5+10;
      
      cage.depth=elephant.depth;
      cage.depth=cage.depth+1;
              }
          }
  
  function lionF() {
    
    
      if(World.frameCount%60===0){
        var cage=createSprite(70,950,20,20);
    
      cage.addImage(cage1);
  lionG.add(cage);
   
      cage.velocityY=-(5*score/25+5);
      cage.x=random(20,1130);
      
      cage.lifetime=950/5+10;
      
        var lion=createSprite(cage.x,950,20,20);
   
      lion.addImage(lion1);
   
   
      lion.velocityY=-(5*score/25+5);
      
      
      lion.lifetime=950/5+10;
      
      lion.depth=cage.depth;
      cage.depth=cage.depth+1;
      }
        
  } 
  function giraffeF() {
    
    
      if(World.frameCount%70===0){
        var cage=createSprite(70,950,20,20);
   
     cage.addImage(cage1);
   giraffeG.add(cage);
     cage.velocityY=-(5*score/25+5);
     cage.x=random(20,1130);
    
    cage.lifetime=950/5+10;
    
    var giraffe=createSprite(cage.x,950,20,20);

      giraffe.addImage(giraffe1);
   
   
      giraffe.velocityY=-(5*score/25+5);
      
      
     giraffe.lifetime=950/5+10;
      
      giraffe.depth=cage.depth;
      cage.depth=cage.depth+1;
    
      }
  } 
 
  function keyF(){
    
      if(keyDown('space')&&World.frameCount%20===0){
     
     var key=createSprite(380,200,10,10);
   key.addImage(key1);
  keyG.add(key);
   
   key.velocityX=-6;
   
  key.y=boy.y;
   
   
   
   key.lifetime=210;
   }
  }

