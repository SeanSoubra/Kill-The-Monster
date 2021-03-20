class Fly{
    constructor(body, point){
        var options={
            bodyA : body,
            pointB : point,
            stiffness : 0.05,
            length : 200
        };

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;

        push();
        stroke("white");
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
}