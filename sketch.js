// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as
const Engine = Matter.Engine

*/
var engine,world;
var ground1;
var tanker1;
var ball1;
var cannonball1;
var shootball1


function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
var canvas = createCanvas(400,400);
ground1 = new Ground(600,height,1200,20);
ball1 = new Ball(200,200,PI/2);
tanker1 = new Tanker(30,380,80,40);
cannonball1 = new CanonBall(250,150);
shootball1 = new ShootBall(tanker1.body,{x:200,y:30});
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(255);

Engine.update(engine);

ground1.display();
ball1.display();
tanker1.display();
cannonball1.display();

fly();
}


function keyReleased() {
    // Call the shoot method for the cannon.
    shootball1.fly();
    gameState = "launched";

}