//reference part
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
satellite_array=[
"1.jpg",
"2.jpg",
"3.jpg",
"4.jpg",
"5.jpg"
];//sets the img
randomNum=Math.floor(Math.random()*4);//math calculation
console.log("Random Number "+randomNum);

//assign varibles
roverWidth=100;//setting rover width
roverHeight=90;//setting rover height
backImg="satellite_array[randomNum]";//sets image of the canvas
console.log("Background Image "+backImg);
roverImg="rover.png";//set the sprite image rover
roverX=5;//sets x cordinates
roverY=5;//sets y cordinates

//function to add background and rover image to the canvas
function add(){

backImgTag= new Image();//define a variable with a new image
backImgTag.onload= uploadBackground;//setting a function on 'onLoading'
backImgTag.src=backImg;//sets the image on the canvas when pages opens

//same thing done also for the rover just write the same code below
roverImgTag = new Image();//same things done
roverImgTag.onload= uploadSprite;//same things done
roverImgTag.src=roverImg;//same things done

}

//define a new function "uploadBackground"
function uploadBackground() {

ctx.drawImage(backImgTag, 0, 0, canvas.width, canvas.height);//define 'backgroundImgTag'

}

//take a new function
//define for upload the rover
function uploadSprite() {

ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);//sets the rover imgtag, x,y cordinates, height and width

}

//event to understand the fuction of the keys
window.addEventListener("keydown",FunKeyDown);//checks for the key down event
function FunKeyDown(e){ //e means defining the event
keyPressed=e.keyCode;//give the ascii code of the key pressed by the user
console.log("key pressed by the user =" ,keyPressed);//display the pressed key on the inspect console

//checks for the keys which pressed by the user
if (keyPressed=="38") {
up();//set the function up
console.log("up");
}

//lets add 3 more conditions down, left and right change the ascii code and deirections in the js
if (keyPressed=="40") {
down();//set the function up
console.log("down");
}
if (keyPressed=="37") {
left();//set the function up
console.log("left");
}
if (keyPressed=="39") {
right();//set the function up
console.log("right");
}
}

//let's create a function for buttons

function up() 
{
if (roverY>=0) 
{
roverY=roverY-10;//sets rovert to prevent goining out of the canvas
console.log("When left arrow is pressed, x = " + roverX + " | y = " +roverY); //sets the cordinates in the js and display in the console
uploadBackground();
uploadSprite();
}
}

function down() 
{
if (roverY<=500) 
{
roverY=roverY+10;//sets rovert to prevent goining out of the canvas
console.log("When left arrow is pressed, x = " + roverX + " | y = " +roverY); //sets the cordinates in the js and display in the console
uploadBackground();
uploadSprite();
}
}

function left() 
{
if (roverX>=0) 
{
roverX=roverX-10;//sets rovert to prevent goining out of the canvas
console.log("When left arrow is pressed, x = " + roverX + " | y = " +roverY); //sets the cordinates in the js and display in the console
uploadBackground();
uploadSprite();
}
}

function right() 
{
if (roverX<=700) 
{
roverX=roverX+10;//sets rovert to prevent goining out of the canvas
console.log("When left arrow is pressed, x = " + roverX + " | y = " +roverY); //sets the cordinates in the js and display in the console
uploadBackground();
uploadSprite();
}
}