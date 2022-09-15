var KeyUp;
var KeyDown;
var KeyLeft; 
var KeyRight;


document.addEventListener('keydown', (e) => {
    if(e.code == 'ArrowUp') KeyUp = true;
});

document.addEventListener('keydown', (e) => {
    if(e.code == 'ArrowDown') KeyDown = true;
});

document.addEventListener('keydown', (e) => {
    if(e.code == 'ArrowLeft') KeyLeft = true;
});

document.addEventListener('keydown', (e) => {
    if(e.code == 'ArrowRight') KeyRight = true;
});

document.addEventListener('keyup', (e) => {
    if(e.code == "ArrowUp"){
        KeyUp = false;
    }
});
document.addEventListener('keyup', (e) => {
    if(e.code == "ArrowDown"){
        KeyDown = false;
    }
});
document.addEventListener('keyup', (e) => {
    if(e.code == "ArrowLeft"){
        KeyLeft = false;
    }
});
document.addEventListener('keyup', (e) => {
    if(e.code == "ArrowRight"){
        KeyRight = false;
    }
});