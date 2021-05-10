const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var drop = []
var maxDrops = 100;
var boy,thunderimg1, thunderimg2, thunderimg3, thunderimg4
var thunderCreateFrame = 0,thunder;

function preload(){
    thunderimg1 = loadImage("Images/1.png")
    thunderimg2 = loadImage("Images/2.png")
    thunderimg3 = loadImage("Images/3.png")
    thunderimg4 = loadImage("Images/4.png")
}

function setup(){
createCanvas(400,400)
engine = Engine.create()
world = engine.world
if (frameCount % 150 === 0) {
    for(var i = 0; i < maxDrops; i++){
        drop.push(new rain(random(0,400),random(0,400)))
    }    
}

boy = new Umbrella(200,300)

}

function draw(){
Engine.update(engine) 
background("black")
for(var i = 0; i < maxDrops; i++){
    drop[i].display()
    drop[i].updatePos()
}
boy.display()
var ran = Math.round(random(1,4))
if (frameCount % 80 === 0) {
   thunderCreateFrame = frameCount
   thunder = createSprite(random(10,370),random(10,30),10,10)
   switch(ran){
       case 1: thunder.addImage(thunderimg1)
       break
       case 2: thunder.addImage(thunderimg2)
       break
       case 3: thunder.addImage(thunderimg3)
       break
       case 4: thunder.addImage(thunderimg4)
       break
   } 
   thunder.scale = random(0.3,0.6)
}
if (thunderCreateFrame + 10 === frameCount && thunder) {
    thunder.destroy()    
}
drawSprites()
}  

