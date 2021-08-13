class ComputerArcher{
    constructor(x, y,width,height,angle){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    //this.image= loadImage("assets/computerArcher.png");
    
    }
    display() {
if (keyIsDown(UP_ARROW) && ComputerArcher.body.angle < 1.77){
    this.angle = 0.1;
}else{
    this.angle= -0.1;
}
if (keyIsDown(DOWN_ARROW) && ComputerArcher.body.angle > 1.47){
    this.angle= -0.1;
}else{
    this.angle = 0.1;
}
push();
translate(this.x, this.y);
rotate(this.angle);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();

    }
}