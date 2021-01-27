// Creating bounceoff function
function bounceOff(object1,object2)
{
  //Checking whether sprites are touching on x axis
  if(object1.x - object2.x< object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2+object2.width/2)
    {
     // making the sprites move on opposite direction
      object1.velocityX = object1.velocityX *(-1)
      object2.velocityX = object2.velocityX * (-1)
    }

    // Checking whether sprites are touching on the y axis
    if(object1.y - object2.y< object1.height/2 + object2.height/2 &&
     object2.y - object1.y < object1.height/2+object2.height/2)
     {
       //making the sprites move on the opposite direction on the y axis
       object1.velocityY = object1.velocityY *(-1)
       object2.velocityY = object2.velocityY * (-1)
     }


}

//Creating is touching function
function isTouching(object1,object2)
{
  //Checking whether sprites are touching on x and y axis
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2 &&
    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y-object1.y < object1.height/2 + object2.height/2)
   {
     // if they are touching the function will return true
    return true;
   }
   else
   {
     // if they are not touching the function will return false
    return false;
   }
}