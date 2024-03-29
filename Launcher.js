class Launcher {
    constructor(bodyA,pointB) {
var options={
    bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
}
this.pointB = pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

  display() {
    if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        push();
        
        stroke(48,22,8);
 line(pointB.x,pointB.y,pointA.x,pointA.y);   
        pop();
    }
  }
  attach(body){
    this.launcher.bodyA = body;
}

fly(){
    this.launcher.bodyA = null;
}  
}