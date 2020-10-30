//mouseevent.................................
var mouse = {
    x : undefined,
    y : undefined,
}
/*it do automatic firing*/
var setint;
clearInterval(setint);
setint = setInterval(function (){
    mouse.x = Math.random()*innerWidth;
    mouse.y = Math.random()*innerHeight;
    bulletsetting();
},2000);

/*it sets mouse.x and mouse.y also, it re sets setinterval,it calls bulletsetting*/ window.addEventListener("mousedown",function(ev){
    ev.preventDefault();
    mouse.x = ev.x;
    mouse.y = ev.y;
    
    bulletsetting();
//    toaf.style.bottom="-5px";
    
    clearInterval(setint);
    
    setTimeout(function(){
        setint = setInterval(function (){
        mouse.x = Math.random()*innerWidth;
        mouse.y = Math.random()*innerHeight;
        bulletsetting();
        },2000);
    },100);
});

//.........................................
//canvas1 and canvas2setting......
canvas1 = document.querySelector("#canvas1");
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

c1 = canvas1.getContext("2d");
//
window.addEventListener("resize",function(){
    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;
    
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
    
    
});
//
canvas2 = document.querySelector("#canvas2");
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

c2 = canvas2.getContext("2d");



//..........................................

//this sets toaf movement...
  /*angle is set up by some geometry and
  basic trignometry here toaffun is actually
  toaf function*/
function toaffun(){
    if (mouse.x <= innerWidth/2){
     var angle = (Math.atan((innerHeight
            -mouse.y)/(innerWidth/2 -
             mouse.x))*180/Math.PI)-90;
    }else if (mouse.x > innerWidth/2){
      var angle =  90 - (Math.atan((innerHeight-mouse.y)/(mouse.x-innerWidth/2))*180/Math.PI);
    }
    toaf.style.transform=
    "translateX(-50%)rotateZ("+angle+"deg)";
    
    setTimeout(function(){
     document.querySelector("#toaf").style.bottom
     ="-3px";
document.querySelector("#toafafter").style.bottom="-21px";
    },50);
    setTimeout(function(){
     document.querySelector("#toaf").style.bottom
     ="0px";
document.querySelector("#toafafter").style.bottom="-24px";
    },150);
    
    
    
};

//Bullet Object class.......................
function Bullet(mx,my){
  this.mx = mx;
  this.my = my;
  this.x = innerWidth/2;
  this.y = innerHeight;
  this.col = "#d4772a77"
  
  //this creates bullet...
  this.create = function(){
    c1.beginPath();
    c1.fillStyle = this.col;
    c1.arc(this.x,this.y,10,0,Math.PI*2,
          false);
    c1.fill();
  }
  
  //for updating bullet...
  this.update = function(){
  
  if (this.mx <= innerWidth/2){
       unitx =(innerWidth/2-this.mx)/30;
       unity =(innerHeight-this.my)/30;
  }else if (this.mx >= innerWidth/2){
       unitx =(this.mx - innerWidth/2)/30;
       unity =(innerHeight-this.my)/30;
  }

    if (this.mx <= innerWidth/2){
        this.x -= unitx;
        this.y -= unity;
        
    }else if(this.mx >= innerWidth/2){
        this.x += unitx;
        this.y -= unity;
    };
    this.create();
  }
  
};
//..........................................
//bullets setting and its animation.........
var bullets=[];
function bulletsetting(){
    bullets.push(new Bullet(mouse.x,
                     mouse.y));
    animateBullet();
    toaffun();
};

/*here getXForCircle and getYForCircle gives
 x and y value to circle object*/
var getXForCircle;
var getYForCircle;

function animateBullet(){
reqb = requestAnimationFrame(animateBullet);
    c1.clearRect(0,0,innerWidth,innerHeight);

    i1 =bullets.length-1;

    bullets[i1].update();
/*here conditions for stooping bullet which
was fired and after stopping bullet it calls
circlesetting due to which after stopping
bullet it crackes and getXForCircle ,getYForCircle cets its value to last position of bullet
dont worry about i1 it is simply i */
if(bullets[i1].mx <= innerWidth/2){
    if(bullets[i1].x <= bullets[i1].mx){

       cancelAnimationFrame(reqb);
    c1.clearRect(0,0,innerWidth,innerHeight);
       
       getXForCircle = bullets[i1].mx;
       getYForCircle = bullets[i1].my;
       
       circlesetting();

    }
}else if(bullets[i1].mx >= innerWidth/2){
    if(bullets[i1].x >= bullets[i1].mx){
    
       cancelAnimationFrame(reqb);
    c1.clearRect(0,0,innerWidth,innerHeight);
       
       getXForCircle = bullets[i1].mx;
       getYForCircle = bullets[i1].my;
       
       circlesetting();

    }
}
};
//.........................................
/*here comes Circle class which draw circle
 and it update it*/
function Circle(x,y,r,dx,dy,col){
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
    this.col = col;
    this.opacity = 1;
    
    this.draw = function(){
        c2.beginPath();
        c2.fillStyle = col+this.opacity+")";
        c2.arc(this.x,this.y,this.r
              ,0,Math.PI*2);
        c2.fill();
    }
    this.update = function(){
    if(this.opacity > 0){
        this.x += this.dx;
        this.y += this.dy;
        
        this.opacity += -0.009;
        this.draw();
    }else{
    c2.clearRect(0,0,innerWidth,innerHeight);
    }
    
    }
    
}
//colour store.....
var colorarray = [
    "rgba(255,255,255,",
    "rgba(255,0,0,",
    "rgba(17, 207, 162,",
    "rgba(46, 149, 240,",
    "rgba(151, 68, 156,",
    "rgba(120, 66, 173,",
    "rgba(217, 106, 89,",
    "rgba(212, 129, 28,"
    
]
//circlearray for storing many circles in 1
var circlearray = [];
//circle sets all required things for Circle
function circlesetting(){
   circlearray = [];
   for(let i=0; i<100; i++){
   dx = (Math.random()-0.5)*5;
   dy = (Math.random()-0.5)*5;
   r = (Math.random()*30)+5;
   
   col = colorarray[Math.floor(Math.random()
           *colorarray.length)];
   circlearray.push(new Circle(getXForCircle,
     getYForCircle,r,dx,dy,col));
   }
    animateCircle();

}



//it animates circle
function animateCircle(){
reqc = requestAnimationFrame(animateCircle);
c2.clearRect(0,0,innerWidth,innerHeight );


for(let i=0; i< circlearray.length; i++){

    circlearray[i].update();
    if(circlearray[i].opacity <=0){
        cancelAnimationFrame(reqc);
    }
    }
};

//.......................................
