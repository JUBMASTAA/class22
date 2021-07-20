class Ball{
    constructor (x,y,r){    
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(x,y,r,{restitution: 0.5, density: 0.1 })
        World.add(world,this.body)
}
    display(){
    push()
    fill("#F31B0C");
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle);
    ellipseMode(RADIUS)
    ellipse(0,0, this.r)
    pop()
    
    }
}