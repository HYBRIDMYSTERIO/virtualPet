//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImage;

var foodCount = 20;


function preload()
{
  //load images here
  dogImage = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
  createCanvas(500,500);

  

  dog = createSprite(250,250,10,10);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  database = firebase.database();

  foodStock = database.ref('food');
  foodStock.on("value", readStock);

  
  
}


function draw() {  
 
  background(46,139,87);

  fill(0);
  textSize(15)
  text("Note:Press UP_ARROW Key To Feed Drago Milk!",110,50);

  fill(0);
  textSize(15);
  text("Food remaining:"+ foodCount,180,150)
  
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);

    foodCount = foodCount-1;

  }
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();

}

function writeStock(x){
  
  database.ref('/').update({
    food:x
  });
}
   