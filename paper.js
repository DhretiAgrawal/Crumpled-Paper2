class Paper {
    constructor (x,y,radius) {
        var options = {
            isStatic : false , 
            restitution : 0.3 ,
            friction : 0.5 , 
            density : 0.3

        }
        this.image = loadImage("paper.png");
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options) ;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        ellipse(0,0,this.radius,this.radius);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        

    }
}