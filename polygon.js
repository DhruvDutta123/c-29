class polygon{
    constructor(x, y,radius) {
        var options = {
            'friction':0.1,
           'density':0.2,     
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(RADIUS);
        circle(0,0,this.radius);
        pop();
      }
}
       