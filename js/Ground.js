class Ground{

    constructor(x, y, width, height){
        var options = {
        isStatic: true
        }
        this.width = width
        this.height = height
        this.image = loadImage("GamingBackground.png")
        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body)
    }
    
    display(){

        var groundpos = this.body.position

        push()
        translate(groundpos.x, groundpos.y)
        rectMode(CENTER)
        fill("white")
        image(this.image, 0, 0, this.width, this.height)
        rect(0, 0, this.width, this.height)
        pop() 


    }
}