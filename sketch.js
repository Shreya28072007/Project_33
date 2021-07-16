const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles=[];
var bg = "snow1.jpg";
var backgroundImg;

function preload(){
  getBackgroundImg();
}



function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

//  ground = new Ground(600,790,1200,10);
Engine.run(engine);
}

function draw() {


  if(backgroundImg)
  background(backgroundImg);
  Engine.update(engine);
 // ground.display();
  if(frameCount%20===0){
    particles.push(new Particle(random(width/2-600,width/2+600),30,30));
  } 
  
  for (var m=0;m<particles.length;m++){
    particles[m].display(); 
  }

  getBackgroundImg();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "snow1.jpg";
  }
  else{
      bg = "snow3.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}