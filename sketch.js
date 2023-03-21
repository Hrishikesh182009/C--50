var canvas;
var backgroundImage;
var bgImg;
var bird,bar
var birdImg,barImge
var form, player;
var playerCount;

function preload() {
  backgroundImage = loadImage("./assets/bg.png");
 
  barImg = loadImage("./assets/bar.png")
  birdImg = loadImage("./assets/flapy.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  bird = createSprite(width/2-600,height/2,50,50)
  bird.addImage(birdImg);
  bird.scale = 0.25;
  
  bar = createSprite(width/2-100,height/2+200,50,50)
  bar.addImage(barImg);
  bar.scale = 0.85;
  
  bar2 = createSprite(width/2-100,height/2-250,50,50)
  bar2.addImage(barImg);
  bar2.scale = 0.85;
  
}

function draw() {
  background(backgroundImage);
  

  drawSprites()
}
function keyPressed(){
  if (keyCode===DOWN_ARROW) {
    console.log("BIRD")
        bar.x =- 3;
        
      }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
