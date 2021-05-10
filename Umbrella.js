class Umbrella{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,100,options)
        this.radius = 100
        this.image = loadImage("Images/walking_1.png")
        World.add(world,this.body)
    }
    
    display(){
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,300,300)
    }
}