class Plank  {
    constructor() {
      var options = {
          isStatic:true
      }

      this.width = 400;
      this.height = 20;
      this.body = Bodies.rectangle(300, 50, this.width, this.height, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      stroke ("white");
      strokeWeight(5);
      rect(this.body.position.x,this.body.position.y, this.width, this.height);
    }
  };