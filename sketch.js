var fixedRect,movingRect;



function setup(){

 createCanvas(800,800);



 fixedRect=createSprite(400,400,100,50);

 fixedRect.shapeColor="green";

 fixedRect.debug=true;



 movingRect=createSprite(200,100,50,100);

 movingRect.shapeColor="green";

 movingRect.debug=true;



 console.log(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2);

 // console.log(fixedRect.x-movingRect.x)

}



function draw(){

 background("black");



 movingRect.x=World.mouseX;

 movingRect.y=World.mouseY;



 if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 

  && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2

  && movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2

  && fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2){

  movingRect.shapeColor="red";

  fixedRect.shapeColor="red";

 }

 else {

  movingRect.shapeColor="green";

  fixedRect.shapeColor="green";

 }

 



 drawSprites();

}








