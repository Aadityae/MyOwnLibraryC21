// Declaring variables
var Rect1,Rect2

var Rect3,Rect4

function setup() {
  createCanvas(800,400);
  
  // Creating sprites
  Rect1 = createSprite(100, 100, 50, 50);
  Rect2 = createSprite(100,300,30,40);

  Rect3 = createSprite(100, 200, 30, 50);
  Rect4 = createSprite(400,200,30,40);

  // Adding colour
  Rect1.shapeColor = "yellow";
  Rect2.shapeColor = "yellow";

  Rect3.shapeColor = "red";
  Rect4.shapeColor = "white";

  // Rect1.velocityY = 2;
  // Rect2.velocityY = -2;
 
  // Giving velocity
  Rect3.velocityX = 2;
  Rect4.velocityX = -2;

}

function draw() {
  background("black"); 
 
// Making rect2 Move with the mouse
Rect2.x = World.mouseX;
Rect2.y = World.mouseY;

// calling bounce off function from myownlibrary
  bounceOff(Rect3,Rect4);
 
  //Calling Is touching function from my own library
  if(isTouching(Rect1,Rect2))
  {
    Rect1.shapeColor = "orange";
    Rect2.shapeColor = "orange";

  }
  else
  {
    Rect1.shapeColor = "yellow";
    Rect2.shapeColor = "yellow";

  }
  drawSprites();
}


