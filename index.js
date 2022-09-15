/**
 *      Author: Antoni Chelstowski
 *      Date: 13 September 2022
 *      Description: 
 *          Simple Car Game, Nothing more than that
 *      
 *      Any Use of this code is permited
 *      Copy anything you want from this UwU :3
 *      It's probably shit and unoptimized anyways
 */

var canvas          = document.getElementById("canvas");
var ctx             = canvas.getContext('2d');
canvas.width        = document.body.clientWidth;
canvas.height       = window.innerHeight;
var SCREEN_HEIGHT   = canvas.height;
var SCREEN_WIDTH    = canvas.width; 

ctx.translate(SCREEN_WIDTH/2, SCREEN_HEIGHT/2)

window.addEventListener('resize', onResize, false);

function onResize(){
    canvas.width     = document.body.clientWidth;
    canvas.height    = window.innerHeight;
    SCREEN_HEIGHT    = canvas.height;
    SCREEN_WIDTH     = canvas.width;
    ctx.translate(SCREEN_WIDTH/2, SCREEN_HEIGHT/2)
}

var car = new Car();

function update(progress){
    if(KeyUp) {
        car.moveForward(progress);
        if(KeyLeft) {
            car.rotateLeft(progress);
        }
        if(KeyRight) {
            car.rotateRight(progress);
        }
    }
    if(KeyDown) {
        car.moveBackward(progress);
        if(KeyLeft) {
            car.rotateLeft(progress);
        }
        if(KeyRight) {
            car.rotateRight(progress);
        }
    }


}

function draw(){
    //  Draws The Background each frame
    ctx.fillStyle = "rgb(17, 17, 17)"
    ctx.fillRect(-SCREEN_WIDTH/2, -SCREEN_HEIGHT/2, SCREEN_WIDTH, SCREEN_HEIGHT)

    car.draw()
}

function gameLoop(timeStamp){
    progress = (timeStamp - lastRender);

    update(progress)
    draw()

    lastRender = timeStamp;
    window.requestAnimationFrame(gameLoop);
}

var lastRender = 0;
window.requestAnimationFrame(gameLoop)