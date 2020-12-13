// var database ,dog;
// var position;
// var feed,add;
// var foodobject;
// var Feedtime;
// var Lastfed;
// var foodobject



// function preload()
// {
//   dogImg = loadImage("sitting.jpg");
//   dogHappyImg = loadImage("drinking.jpg");
//   milkImg = loadImage("milk.jpg");
// }

// function setup() {
//   database = firebase.database(); 

//   createCanvas(500, 500);

  
//   dog = createSprite(250,250,10,10);
//   dog.addImage(dogImg);
//   dog.scale = 0.15

//   milk = createSprite(140,435,10,10);
//   milk.addImage(milkImg);
//   milk.scale = 0.25;

//    foodCount = database.ref("food");
//    foodCount.on("value", readCount)
//    foodCount.set(20);

//    feed = createButton("FEED DOG")
//    feed.position(500,60)
//    feed.mousePressed(FeedDog)

//    add = createButton("ADD FOOD")
//    add.position(400,60)
//    add.mousePressed(AddFood)
 
   



// }


// function draw() {  
// background("lightyellow")


// foodobject.display();



//   drawSprites();
//   textSize(17);

  
// }

// function readCount(data)
// {
//   foodS = data.val();
// }

// function writeCount(x){

//   if(x<=0){
//     x = 0;
//   }else{
//     x=x-1
//   }

//   database.ref('/').update({
//     food:x
//   })
// }
// function AddFood(){
//   position++
//   database.ref('/').update({
//     Food:position
//   }
  
//   )
//   }
//   function FeedDog(){
  
//   dog.addImage(dogHappyImg)
//   dog.scale = 0.9
//   foodobject.updateFoodStock(foodobject.getFoodStock()-1)
//    database.ref('/').update({
//      Food:foodobject.getFoodStock(),
//      FeedTime:hour ()
//    })
//   }
  
var database ,dog,dog1,dog2
var position
//var form
var feed,add
var foodobject
var Feedtime
var Lastfeed
//Create variables here

function preload()

{
  dogimg1 = loadImage("sitting.jpg")
  dogimg2 = loadImage("drinking.jpg")
	//load images here
}

function setup() {
	createCanvas(800, 500);
  database = firebase.database();
  console.log(database);
 
  foodobject=new Food();
  dog = createSprite(550,250,10,10);
  dog.addImage(dogimg1)
  dog.scale=0.2
 
  var dogo = database.ref('Food');
  dogo.on("value", readPosition, showError);
  feed = createButton("FEED DOG")
  feed.position(900,60)
  feed.mousePressed(FeedDog)

  add = createButton("ADD FOOD")
  add.position(800,60)
  add.mousePressed(AddFood)

} 

function draw(){
 background(46,139,87);
 fill(255,255,254); textSize(15); if(Lastfeed>=12){ text("Last Feed : "+ Lastfeed%12 + " PM", 200,30); }else if(Lastfeed==0){ text("Last Feed : 12 AM",200,30); }else{ text("Last Feed : "+ Lastfeed + " AM", 200,30); }
 foodobject.display()
 
 
  
 fill(255,255,254);
 textSize(15);

drawSprites();
}
function readPosition(data){
  position = data.val();
  foodobject.updateFoodStock(position)
}

function showError(){
  console.log("Error in writing to the database");
}

function writePosition(x){
  if(x>0){
    x=x-1
  }
  else{
    x=0
  }
  database.ref('/').set({
    'Food': x
  })

}
function AddFood(){
position++
database.ref('/').update({
  Food:position
}

)
}
function FeedDog(){
if(this.foodStock !== 0){
dog.addImage(dogimg2)
dog.scale = 0.9
foodobject.updateFoodStock(foodobject.getFoodStock()-1)
 database.ref('/').update({
   Food:foodobject.getFoodStock(),
   FeedTime:hour ()
 })
}else{
  dog.addImage(dogimg1)
}
}





