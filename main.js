canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d")

array_mars = ["img 1.jpeg", "img 2.jpeg", "img 3.jpeg", "img4.jpeg", "mars.jpg"];
rover_x = 10;
rover_y = 10;
rover_width = 100;
rover_height = 90;
rover_image = "rover.png";
random_number = Math.floor(Math.random()*4);
background_image = array_mars[random_number];

function add(e){
    background_imgTag=new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_img = new Image();
    rover_img.onload = uploadRover;
    rover_img.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", key_down);

function key_down(e){
    key_pressed = e.keyCode;
    if(key_pressed == "38"){
        up();
        console.log("up");
    }

    if(key_pressed == "40"){
        down();
        console.log("down");
    }

    if(key_pressed == "37"){
        left();
        console.log("left");
    }

    if(key_pressed == "39"){
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(rover_y <= 550){
        rover_y = rover_y + 10;
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_x <= 750){
        rover_x = rover_x + 10;
        uploadBackground();
        uploadRover();
    }
}