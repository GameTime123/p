class Box {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.1,
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visiblity = 255;
      }
      display(){
      
        if(this.body.speed < 5){
          var angle = this.body.angle;
          push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width,this.height);
          pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           pop();
         }
      }
      score(){
        if (this.Visiblity < 0 && this.Visiblity > -50){
          score++;
        }
      }
    
}
