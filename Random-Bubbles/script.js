//touch obj and touch event.................
/*event sets touch.x and y*/
var touch = {
    x : undefined ,
    y : undefined
};
canvas.addEventListener("touchmove",
  function(ev){
    ev.preventDefault();
    touch.x = ev.touches[0].clientX;
    touch.y = ev.touches[0].clientY;
});
//
//mouse obj and mouse event
/*event sets mouse.x and y*/
var mouse = {
    x : undefined ,
    y : undefined
};
canvas.addEventListener("mousemove",
  function(ev){
    ev.preventDefault();
    mouse.x = ev.x;
    mouse.y = ev.y;
//    console.log(mouse.x)
});
//........................................

//setting canvas............................
canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize",function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
c = canvas.getContext("2d");
//..........................................

//CircleDrawing class........................
function CircleDrawing(x,dx,y,dy,r,color,
                       maxr){
    this.x = x;
    this.dx = dx;
    this.y = y;
    this.dy = dy;
    this.r = r;
    this.color = color;
    this.maxr = maxr;
    this.minr = r;
    
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.r,0,
              Math.PI*2,false);
        c.fillStyle=color;
        c.fill();
    }
    this.update = function(){

        if(this.x>innerWidth-this.r ||
           this.x<0+this.r){
          this.dx = -this.dx;
        }
        if(this.y>innerHeight-this.r ||
           this.y<0+this.r){
          this.dy = -this.dy;
        }
        
        //intraction...for touch.....
        if((touch.x - this.x) < 40 &&
           (touch.x - this.x) > -40 &&
           (touch.y - this.y) < 40 &&
           (touch.y - this.y) > -40){
           if (this.r < this.maxr){
            this.r += 1;
            }
        }else if(this.r >= this.minr){
            this.r += -1;
        }
        /*
        //for mouse intraction
        if((mouse.x - this.x) < 50 &&
           (mouse.x - this.x) > -50 &&
           (mouse.y - this.y) < 50 &&
           (mouse.y - this.y) > -50){
           if (this.r < this.maxr){
            this.r += 1;
            }
        }else if(this.r >= this.minr){
            this.r += -1;
        };
        */
        //.........................
        
        this.draw();
        this.x += this.dx;
        this.y += this.dy;
    }
};
//........................................
//colorarray..............................
/*storing colors*/
var colorarray = [
    "#fffa",
    "#f00a",
    "#07971Aaa",
    "#4076C4aa",
    "#901FF4aa",
    "#30CCD9aa",
];
//........................................
//circlearray.............................
/*it creates many circles and stores in array*/
var circlearray = [];
for(let i=0; i<300; i++){

    r1 = (Math.random()*2)+1;
    x1 = Math.random()*(innerWidth-2*r1)+r1;
    dx1 = (Math.random()-0.5)*1.5;
    y1 = Math.random()*(innerHeight-2*r1)
                        +r1;
    dy1 = (Math.random()-0.5)*1.5;
    col1= colorarray[Math.floor(Math.random()
                      *colorarray.length)];
    maxr1 = 30;
    
    
    circlearray.push(new CircleDrawing(x1,
           dx1,y1,dy1,r1,col1,maxr1));
};
//........................................
//animate frame...........................
/*it clears canvas and call update method for
each CircleDrawing  obj that are stored in
circlearray*/
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    for(let i=0; i< circlearray.length; i++){
        circlearray[i].update();
    };
    
};
animate();
//.....................................
