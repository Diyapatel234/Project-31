class Plinko {
    constructor(x, y,r) {
      var options = {
        isStatic: true,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = 5
       
      World.add(world, this.body);
      }
    display(){
      ellipseMode(RADIUS);
  
      fill(255);
     
      circle(this.body.position.x, this.body.position.y, 10);
      
        
    
   
    }
}