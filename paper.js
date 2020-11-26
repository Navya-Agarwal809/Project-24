class Paper{

    constructor(x, y, r){

        var options= {

            isStatic: false,
            restitution: 0.3, 
            friction: 0.5,
            density: 1.2
        }

        this.x= x;
        this.y= y; 
        this.r= r; 

        this.body= Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body); 
    }

    display(){

        var paperpos= this.body.position; 

        push()
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER); 
        fill(128,128,128); 
        rect(0,0,this.w, this.h);
        pop(); 
    }
}