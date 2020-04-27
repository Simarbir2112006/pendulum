class Line{
    constructor(bodyA,bodyB){
      var option={
          bodyA:bodyA,
          bodyB:bodyB,
          stiffness:0.004,
          length:350,
         } ; 

         this.line=Constraint.create(option);
         World.add(world,this.line);
         
    }

    display(){
        var pointA =this.line.bodyA.position;
        var pointB=this.line.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}