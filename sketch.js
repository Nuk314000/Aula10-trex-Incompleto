var trex;

function preload(){
var runningTrex = loadAnimation("trex1.png","trex3.png","trex4.png");





}





function setup(){

  createCanvas(600,200);
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",runningTrex);

}



function draw(){

background("white");

if(keyDown("space")){
trex.velocityY = -10;


}

drawSprites();
}
