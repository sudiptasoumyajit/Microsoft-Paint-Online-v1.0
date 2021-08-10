var last_position_y, last_position_x;
color="black";
width_line=5;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var width=screen.width;
newWidth=screen.width-70;
newHeight=screen.height-300;
if (width <992) {
document.getElementById("myCanvas").width=newWidth;
document.getElementById("myCanvas").height=newHeight;
document.body.style.overflow="hidden";
}
canvas.addEventListner("touchstart",myTouchStart);
function myTouchStart (e){
console.log('myTouchStart');
last_position_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListner("touchmove",myTouchMove);
function myTouchMove (e){
console.log('myTouchMove');
currentPositionTouchX=e.touches[0].clientX-canvas.offsetLeft;
currentPositionTouchY=e.touches[0].clientY-canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
console.log("Last position of x and y coordinates =");
console.log("x = " + last_position_x + "y = " + last_position_y);
ctx.moveTo(last_position_of_x,last_position_of_y);
console.log("Current position of x and y coordinates = ");
console.log("x = " + currentPositionTouchX + "y = " + currentPositionTouchY);
ctx.lineTo(currentPositionTouchX, currentPositionTouchY);
ctx.stroke();
last_position_of_x = currentPositionTouchX;
last_position_of_y = currentPositionTouchY;
}