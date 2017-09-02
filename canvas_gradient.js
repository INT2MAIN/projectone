var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var a=ctx.createLinearGradient(0,0,300,300);//圆形渐变createRadialGradient(x,y,r,x1,y1,r1)
a.addColorStop(0,"#00f");
a.addColorStop(1,"#0f0");
ctx.strokeStyle=a;
ctx.font="40px Arial";
ctx.textAlign="start";
ctx.strokeText("WELCOME TO YOU",80,50);//fillText(text,x,y) - 在 canvas 上绘制实心的文本;
//strokeText(text,x,y) - 在 canvas 上绘制空心的文本
