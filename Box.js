class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.4,
        'friction':0,
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility=255
    this.image = loadImage("hi.jpg");
    World.add(world, this.body);
  }
  display(){
   
  
  
  if(this.body.speed < 5){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("red")
    fill(255);
    
     this.visibility = this.visibility - 5;
     //tint(255,this.Visiblity);
     rect(0,0, 50, 50);
    
    pop();
   }
   else{
     World.remove(world, this.body);
     push();
     this.visibility = this.visibility - 5;
     pop();
   }
  }

  score(){
    if (this.visibility>0 && this.visibility<=205){
      score=score+10;
 
    }
 
  }
  
};
