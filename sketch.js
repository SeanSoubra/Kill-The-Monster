const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world
var ground, hero, fly

function preload() {
  // bgImage = loadImage("images/GamingBackground.png")
  // monster1Image = loadImage("images/Monster-01.png")
  // monster2Image = loadImage("images/Monster-02.png")
  // superhero1Image = loadImage("pro-c34+images/images/Superhero-01.png")
  // superhero2Image = loadImage("images/Superhero-02.png")
}

function setup() {
  createCanvas(1091, 630);
  engine = Engine.create();
  world = engine.world;
  
  
  hero = new Hero(100, 150, 1)
  fly = new Fly(hero.body, {x: 135, y: 122})
  test = new Genius(545.5, 530, 1091, 20)
  
}

function draw() {
  background(0)
  Engine.update(engine);


  
  hero.display();
  fly.display();
  test.display();

  mouseDragged();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x : mouseX, y : mouseY})
}

