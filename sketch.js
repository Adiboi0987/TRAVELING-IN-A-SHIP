var sea,seaimg;   
var ship,shipImg;

function preload(){
  seaimg = loadImage("sea.png")
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  sea=createSprite(200,200,400,400)
  sea.addImage("sea",seaimg)
  sea.velocityX=2;

  ship=createSprite(200,200,20,20)
  ship.addAnimation("sea",shipImg1)
  ship.scale=0.5
}

function draw() {
  background("blue");
  if(sea.x>500){
  sea.x=250
  }
  drawSprites();
} 
