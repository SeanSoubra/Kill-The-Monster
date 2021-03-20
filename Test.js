class Genius{

    constructor(x, y, width, height){

        var options = {
            isStatic: true
        }

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body)
    }

    display(){

        var gpos = this.body.position

        push();
        translate(gpos.x, gpos.y)
        fill("white")
        rectMode(CENTER)
        rect(0, 0, this.width, this.height)
        pop();
    }
}