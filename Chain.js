class Chain {
    constructor(bodyA, bodyB){
    var options= {

        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.4,
        length: 10
    }
    this.chain= Constraint.create(options);
    World.add(world,this.chain);
    }
    display(){
        stroke ("pink");
        var PointA=this.chain.bodyA.position;
        var PointB= this.chain.bodyB.position;
        line(PointA.x,PointA.y,PointB.x,PointB.y);

    }

}