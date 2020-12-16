class box{
    constructor(x,y,width,height){
       
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
       // this.image=loadImage("wood1.png");
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height);
        this.visibility=255;
        World.add(world,this.body);
    }
    show(){
       //console.log(this.body.speed);
        var pos=this.body.position;
        var angle=this.body.angle;
       if(this.body.speed<3){
        push();
        translate(pos.x,pos.y);
        rotate(angle);
      
        fill("cyan");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        
        pop();
    }
    else{
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        //image(this.image,0,0,20,20);
        pop();
    }
}
}