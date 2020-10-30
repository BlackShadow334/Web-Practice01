"use strict";

//const GRAVITY = 0.01 ;
//const FRICTION = 1 ;
const COF = 1 ;  //coefficient of restitution (e)


let dx ;
let dy ;
const distance = ( x1 , y1 , x2 , y2 ) => {
    dx = x2 - x1 ;
    dy = y2 - y1 ;
    
    return Math.sqrt( Math.pow( dx , 2 ) + Math.pow( dy ,2 ));
}


const resolveCollision = ( particle2 , particle1 ) => {
    //x and y component of distance between center of both particles
    let xDist = particle2.x - particle1.x ;
    let yDist = particle2.y - particle1.y ;
    
    //x and y velocity difference
    let xVelocityDiff = particle1.vx - particle2.vx ;
    let yVelocityDiff = particle1.vy - particle2.vy ;
    
    //angle based on above by tan theta
    let angle = Math.atan( yDist / xDist);
    
    if ( xDist * xVelocityDiff + yDist * yVelocityDiff >= 0){
    //u1 and u2 in direction of normal
    let u1 = (particle1.vx * Math.cos(angle))
         - (particle1.vy * Math.sin(angle)) ;
    let u2 = (particle2.vx * Math.cos(angle))
         - (particle2.vy * Math.sin(angle)) ;
    
    //finding v1 and v2 
    let v1 = ((particle1.m -COF *particle2.m)
        * u1 + (1 + COF ) * particle2.m * u2)
           / ( particle1.m + particle2.m ) ;
           
    let v2 = ((particle2.m -COF *particle1.m)
         * u2 + (1 + COF) * particle1.m * u1)
           / ( particle2.m + particle1.m ) ;
        
    //ut1 and ut2 in direction of tangent 
    let ut1 = particle1.vx * Math.sin(angle)
            + particle1.vy * Math.cos(angle);
    let ut2 = particle2.vx * Math.sin(angle)
            + particle2.vy * Math.cos(angle);
           
    particle1.vx = v1 * Math.cos( angle ) 
                 + ut1 * Math.sin(angle) ;
    particle1.vy = ut1 * Math.cos( angle )
                 - v1 * Math.sin(angle) ;
    particle2.vx = v2 * Math.cos( angle )
                 + ut2 * Math.sin(angle) ;
    particle2.vy = ut2 * Math.cos( angle )
                 - v2 * Math.sin(angle) ;
    }
}

    
var touch = {
    x : undefined ,
    y : undefined
};
let move ;
document.addEventListener("touchstart",function(ev){
    touch.x = ev.touches[0].clientX ;
    touch.y = ev.touches[0].clientY ;
    move = true ;
});
document.addEventListener("touchmove",function(ev){
    touch.x = ev.touches[0].clientX ;
    touch.y = ev.touches[0].clientY ;
    move = true ;
});
document.addEventListener("touchend",function(){
    move = false ;
});


const cnvs = document.querySelector("#canvas");
window.addEventListener("resize",function(){
    cnvs.width = innerWidth ;
    cnvs.height = innerHeight ;
});
    cnvs.width = innerWidth ;
    cnvs.height = innerHeight ;
const c = cnvs.getContext("2d");


function Ball ( x , y , vx , vy , r , col ){
    this.x = x ;
    this.y = y ;
    this.vx = vx ;
    this.vy = vy ;
    this.r = r ;
    this.col = col ;
    this.opacity = 0 ;
    
    this.D = 0.1; // density
    this.m = ( 4 / 3 ) * ( Math.PI * Math.pow( r , 3 ) * this.D);
    
    this.draw = () => {
        c.beginPath();
        c.arc( this.x , this.y , this.r , 0 , Math.PI * 2 );
        c.restore();
        c.strokeStyle = this.col ;
        c.stroke();
        c.save();
        c.globalAlpha = this.opacity ;
        c.fillStyle = this.col ;
        c.fill();
        c.restore();
        c.closePath();
        
    }
    
    this.update = ( other ) => {
        if ( this.x < this.r - this.vx || this.x > innerWidth - this.r - this.vx){
            this.vx = - this.vx ;
        }
        if ( this.y < this.r - this.vy || this.y > innerHeight - this.r - this.vy){
            this.vy = - this.vy ;
        }
        
        let l = balls.length ;
        let i ;
        for ( i = 0 ; i < l ; i++ ){
            if ( this === other[ i ]) continue;
            if ( distance( this.x , this.y , other[ i ].x , other[ i ].y ) < this.r + other[ i ].r ){
                resolveCollision( this , other[i]);
            }
        }
        this.x += this.vx ;
        this.y += this.vy ;
    this.draw();
    }
}


const colorArray =[        
         "rgba(255,255,255,1)",
         "rgba(255,0,0,1)",
         "rgba(17, 207, 162,1)",
         "rgba(46, 149, 240,1)",
         "rgba(151, 68, 156,1)",
         "rgba(120, 66, 173,1)",
         "rgba(217, 106, 89,1)",
         "rgba(212, 129, 28,1)"
          ];
          

let balls ;
const ballsInit = () => {
    balls = [];
    let i ;
    let l = 150 ;
    let x ;
    let y ;
    let vx ;
    let vy ;
    let r ;
    let col ;
    let colorArrayLength = colorArray.length;
    let j;
    let ballsLength ;
    
    for ( i = 0 ; i < l ; i++ ){
        r =  10;
        x = Math.random() * ( innerWidth - 2 * r ) + r ;
        y = Math.random() * ( innerHeight - 2 * r ) + r ;
        vx = Math.random()*6 - 3 ;
        vy = Math.random()*6 - 3 ;
        col = colorArray[Math.floor(Math.random() * colorArrayLength)] ;
        if ( i != 0 ){
            ballsLength = balls.length ;
            for ( j = 0 ; j < ballsLength ; j++ ){
                if ( distance( x , y , balls[ j ].x , balls[ j ].y ) < r + balls[ j ].r ){
                    x = Math.random() * ( innerWidth - 2 * r ) + r ;
                    y = Math.random() * ( innerHeight - 2 * r ) + r ;
                    j = -1 ;
                }
            }
        }
        balls.push ( new Ball( x , y, vx , vy , r , col));
        
    }
}


var req ;
const animate = () => {
    req = requestAnimationFrame( animate );
    c.clearRect( 0 , 0 , innerWidth , innerHeight );
    
    let i ;
    let ballsLength = balls.length ;
    for ( i = 0 ; i < ballsLength ; i++ ){
        balls[ i ].update( balls ) ;
        
        if (move === true && distance( balls[i].x , balls[i].y , touch.x , touch.y ) < 80 && balls[i].opacity < 0.8){
            balls[i].opacity += 0.08 ;
        }else if(balls[i].opacity > 0 ) {
            balls[i].opacity -= 0.015 ;
            balls[i].opacity = Math.max(0,balls[i].opacity);
        }
    }
}


const setBalls = () => {
    ballsInit();
    animate();
}
setBalls();

