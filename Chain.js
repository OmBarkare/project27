class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
//            stiffness: 0.04,
//            length: 100,
              pointB:{x:this.offsetX, y:this.offsetY}
}
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        var pnt1X = pointA.x
        var pnt1Y = pointA.y
        var pnt2X = pointB.x + this.offsetX
        var pnt2Y = pointB.y + this.offsetY

        line(pnt1X,pnt1Y,pnt2X,pnt2Y);
    }
}