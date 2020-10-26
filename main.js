canvas=document.getElementById("my_canvas");
ctx= canvas.getContext("2d");



car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;
car1_image="car1.png";
car1_imgcolor="red"

car2_width=120;
car2_height=70;
car2_x=86;
car2_y=86;
car2_image="car2.png";
car2_imgcolor="blue"

background_image="racing.jpg";


function add(){
    background_imgTag=new Image();
    background_imgTag.onload=upload_background();
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=upload_car1();
    car1_imgTag.src=car1_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=upload_car2();
    car2_imgTag.src=car2_image;
}

function upload_background(){
 ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function upload_car1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);

}
function upload_car2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);

}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    Key_pressed=e.keyCode;
    console.log(Key_pressed);
    console.log(e);
    if(Key_pressed== "38"){
    up();
    console.log("up");
    }
    if(Key_pressed== "40"){
        down();
        console.log("down");
    }
    if(Key_pressed== "37"){
        left();
        console.log("left");
    }
    if(Key_pressed== "39"){
        right();
        console.log("right");
    }
    if(Key_pressed== "68"){
        car2_right();
        console.log("d");
    }
    if(Key_pressed== "65"){
        car2_left();
        console.log("a");
    }
    if(Key_pressed== "83"){
        car2_down();
        console.log("s");
    }
    if(Key_pressed== "87"){
        car2_up();
        console.log("w");
    }

}
function up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        upload_background();
        upload_car1();
    }
}
function down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        upload_background();
        upload_car1();
    }
}
function left(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        upload_background();
        upload_car1();
    }
}
function right(){
    if(car1_x<=700){
        car1_x=car1_x+10;
        upload_background();
        upload_car1();
    }
}
function car2_up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        upload_background();
        upload_car1();
    }
}
function car2_down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        upload_background();
        upload_car1();
    }
}
function car2_left(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        upload_background();
        upload_car1();
    }
}
function car2_right(){
    if(car1_x<=700){
        car1_x=car1_x+10;
        upload_background();
        upload_car1();
    }
}





















































