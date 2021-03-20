class Hero{


    constructor(x, y, r) {
    this.x = x
    this.y = y
    this.r = r

    this.body = Bodies.circle(this.x, this.y, this.r)
    this.image = loadImage("Superhero-01.png")
    World.add(world, this.body)
    }
    display(){
    
        var heropos = this.body.position
    
        push()
        translate(heropos.x, heropos.y)
        image(this.image, -100, -100, 150, 150)
        ellipseMode(RADIUS)
        strokeWeight(3)
        fill(0, 0, 0)
        ellipse(0, 0, this.r, this.r)
        pop()
    
    }
    }