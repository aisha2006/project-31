const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  if(frameCount/60){
  console.log(particles)
  }
}

function draw() {
  background(34,34,30);  
  Engine.update(engine);
  
  for(var k = 0; k<= 480; k+=80){
    divisions.push(new Divisions(k,650,10,300));
  }
  
  for(var k = 0; k<divisions.length; k++){
    divisions[k].display();
  }

  for(var j=40; j<=480; j+=50){
    plinkos.push(new Plinko(j,75,10,10));
  }

  for(var j=40; j<plinkos.length; j+=50){
    plinkos[j].display();  
  }

  for(var i=15; i<=480-10;i+=50){
    plinkos.push(new Plinko(i,175,10,10));
  }

  for(var i=15; i<plinkos.length; i+=50){
    plinkos[i].display();
  }

  for(var l=0; l<=250; l++){
     if(frameCount/60===0){
       particles.push(new Particle(l,10,20));
    }
  }

  for(var l=0; l< particles.length; l++){
    particles[l].display();
    
  }



}