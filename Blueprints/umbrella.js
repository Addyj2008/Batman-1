class Umbrella {
    constructor(x, y) {
        this.body = Bodies.circle(x, y, 100, {'isStatic' : true});
        World.add(world, this.body);
        this.sprite = createSprite(x, y - 25);
        this.sprite.addAnimation('WALK' ,umbrellaIMG[0], umbrellaIMG[1], umbrellaIMG[2], umbrellaIMG[3], umbrellaIMG[4], umbrellaIMG[5], umbrellaIMG[6], umbrellaIMG[7]);
        this.sprite.scale = 0.25;
    }
}