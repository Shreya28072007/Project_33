class Particle{

    constructor(x,y,r){

        var options={
            restitution:0
        }

        this.r = r;

        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.image = loadImage("snow4.png");
        
        World.add(world,this.body);
    }
display(){

    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
  //  noStroke();
    //fill(this.color);
  //  ellipseMode(RADIUS);
    //ellipse(0,0,this.r,this.r);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
}

}