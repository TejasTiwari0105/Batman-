class Batman {
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.image = loadImage("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")
        this.batman = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        World.add(world, this.batman);
    }
    display(){
        var pos = this.batman.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y , 300, 300);
    }
}