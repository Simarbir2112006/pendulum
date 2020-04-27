class Ball{
    constructor(){
        var options = {

            restitution : 1.0,
            density : 1.0
          
          }
        this.body=Bodies.circle(300,400,100,options);
        World.add(world,this.body);


    }

    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      stroke ("white");
      strokeWeight(5);
      ellipse(this.body.position.x,this.body.position.y,100,100);
    }




}