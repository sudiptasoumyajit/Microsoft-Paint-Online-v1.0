canvas=document.getElementById("my_Canvas");
ctx=canvas.getContext("2d");
color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",myMouseCanvas);
function myMouseCanvas(e)
{
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
console.log("x= "+mouse_x+"y= "+mouse_y);
circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y)
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
ctx.stroke();
}
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=1;
ctx.rect(150,143,340,200);
ctx.stroke();
