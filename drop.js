class Drop{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.radius=radius
        
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("Blue")
        ellipse(0,0,this.radius,this.radius)
        pop();
      }
      updateY(){
if(this.body.position.y>600)
{Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,600)})}







      }
}