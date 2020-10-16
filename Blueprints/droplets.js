let Droplets = [];

class Droplet {
    constructor(x, y) {
        this.body = Bodies.circle(x, y, 5);
        World.add(world, this.body);
        this.index = Droplets.length;
        Droplets.push(this);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(0, 0, 255)
        ellipse(0, 0, 5, 5);
        if (this.body.position.y > 800) {
            World.remove(world, this.body);
            Droplets[this.index] = null ;
        }
        pop();
    }
};