var canvas = document.querySelector('#canvas0c');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c = canvas.getContext("2d");



function lines(){
for(let i=0;i<50;i++){
    x=Math.random()*window.innerWidth;
    y=Math.random()*window.innerHeight;
    
    x1=window.innerWidth/2;
    y1=window.innerHeight/2;
    
    c.beginPath();
    c.moveTo(x1,y1);
    c.lineTo(x,y);
    c.strokeStyle="green";
    c.stroke();
} };



function rectangles(){
for(let i=0;i<10;i++){
    x=Math.random()*window.innerWidth-25;
    y=Math.random()*window.innerHeight-25;
    
    x1=50;
    y1=50;
    
    c.beginPath();
    c.fillStyle="rgba(0,255,100,0.4)";
    c.strokeStyle="red"
    c.fillRect(x,y ,x1,y1);
} };


function circles(){
for(let i=0;i<5;i++){
    x=Math.random()*window.innerWidth;
    y=Math.random()*window.innerHeight;
    
    r1=50;
    
    col=Math.ceil(Math.random()*4);
    if(col==1){col="red"}
    if(col==2){col="green"}
    if(col==3){col="yellow"}
    if(col==4){col="deepskyblue"}
    
    c.beginPath();
    c.fillStyle="rgba(0,255,100,0.4)";
    c.strokeStyle=col;
    
    c.arc(x,y ,r1,0,Math.PI*2);
    c.stroke();
} };

var il;
var ir;
var ia;
linebtn.addEventListener("click",function(){
    c.clearRect(0,0,innerWidth ,innerHeight);
    il= setInterval(lines,1000);
    
    clearInterval(ir);
    clearInterval(ia);
});
rectbtn.addEventListener("click",function(){
    c.clearRect(0,0,innerWidth ,innerHeight);
    ir= setInterval(rectangles,1000);
    clearInterval(il);
    clearInterval(ia);
});
arcbtn.addEventListener("click",function(){
    c.clearRect(0,0,innerWidth ,innerHeight);
    ia= setInterval(circles,1000);
    clearInterval(ir);
    clearInterval(il);
});



