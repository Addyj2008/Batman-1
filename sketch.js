const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

let engine, world, umbrella, umbrellaIMG = [], lightnig, lightnigType, lightnigIMG = [];

function preload(){
    umbrellaIMG.push(
        loadImage('Images/Walking Frame/walking_1.png'),
        loadImage('Images/Walking Frame/walking_2.png'),
        loadImage('Images/Walking Frame/walking_3.png'),
        loadImage('Images/Walking Frame/walking_4.png'),
        loadImage('Images/Walking Frame/walking_5.png'),
        loadImage('Images/Walking Frame/walking_6.png'),
        loadImage('Images/Walking Frame/walking_7.png'),
        loadImage('Images/Walking Frame/walking_8.png')
    );
    lightnigIMG.push(
        loadImage('Images/Thunderbolt/1.png'),
        loadImage('Images/Thunderbolt/2.png'),
        loadImage('Images/Thunderbolt/3.png'),
        loadImage('Images/Thunderbolt/4.png')
    );
}

function setup(){
    createCanvas(400, 800);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(200, 725)
}

function draw(){
    background(0);
    Engine.update(engine);
    for (let loop1 in Droplets) {
        if (Droplets[loop1] !== null) {
            Droplets[loop1].display();
        }
    }
    if (frameCount % 5 === 0) {
        new Droplet(random(0, 400), 0);
    }
    if (frameCount % 60 === 0) {
        lightnig = 5;
    }
    if (lightnig === 5) {
        lightnigType = [round(random(-0.5, 3.5)), random(0, 400)];
    }
    if (lightnig >= 0) {
        image(lightnigIMG[lightnigType[0]], lightnigType[1], 25, 150, 150);
    }
    lightnig--;
    drawSprites();
}   

