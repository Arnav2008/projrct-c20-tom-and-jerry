var  bgImg;
var cat;
var catimg1,catimg2;
var mouse;
var mouseimg1,mouseimg2;



function preload() {
    //load the images here
bgImg=loadImage("garden.png");
catimg1=loadAnimation("cat1.png");
mouseimg1=loadAnimation("mouse1.png");
catimg2=loadAnimation("cat2.png,cat3.png");
mouseimg2=loadAnimation("mouse2.png,mouse3.png");





}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(200,200,50,50);
cat.addImage(catimg1,catimg2);

mouse=createSprite(250,250,300,300);
mouse.addImage(mouseimg1,mouseimg2);
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

if(cat.x - mouse.x < (cat.width - mouse.width)/2){



}




    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(KeyCode===LEFT_ARROW){
mouse.addAnimation("mouseTeasing",mouseimg2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay=25;
}

if(KeyCode===RIGHT_ARROW){
mouse.addAnimation("mouseTeasing",mouseimg2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay=25;

}





}
