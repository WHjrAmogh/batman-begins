const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var t1,t2,t3,t4
var drops=[]
var maxDrops=100
function preload(){
    t1=loadImage("images/thunderbolt/1.png")
    t2=loadImage("images/thunderbolt/2.png")
    t3=loadImage("images/thunderbolt/3.png")
    t4=loadImage("images/thunderbolt/4.png")
}

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    for(var i=0;i<maxDrops; i++){
        drops.push(new Drop(random(0,600),random(0,600),20))
    }
    


    
}

function draw(){
    background("black")
    Engine.update(engine);
    
    for(var i=0;i<maxDrops; i++){
        drops[i].display()
    drops[i].updateY()
    }





}   

