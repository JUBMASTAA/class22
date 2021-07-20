class Rope{
    constructor(pointA, bodyB){

        var options ={
        pointA : pointA,
        bodyB : bodyB,
        length : 200,
        stiffness: 0.5
        }
        this.con = Matter.Constraint.create(options);
        World.add(world,this.con);

    }
    display(){
        push()
        stroke("#0ce4f3")
        strokeWeight(5)
        line(this.con.pointA.x, this.con.pointA.y,this.con.bodyB.position.x,this.con.bodyB.position.y)
        pop()

    }
}