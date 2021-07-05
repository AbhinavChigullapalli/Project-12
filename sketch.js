var jaxon,jaxon_animation;
var path,path_image
var invisible1,invisible2

function preload(){
  //pre-load images
  jaxon_animation = loadAnimation("Runner-1.png","Runner-2.png")
  path_image = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here



  path = createSprite(170,200,400,400)
  path.addImage("path",path_image)
  path.scale = 1.1
  path.velocityY = 4;

  invisible1 = createSprite(20,200,40,400)
  invisible1.visible = false

  invisible2 = createSprite(380,200,40,400)
  invisible2.visible = false

  jaxon = createSprite(190,350,1,10)
  jaxon.addAnimation("Runner",jaxon_animation)
  jaxon.scale = 0.07
}

function draw() {
  background("white");

  if(path.y > 400){
  path.y = height/2
  }

  jaxon.x = World.MouseX
  
  jaxon.collide(invisible1)
  jaxon.collide(invisible2)

  drawSprites()
}
