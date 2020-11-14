var touch = {
    x: undefined,
    y: undefined,
    r: undefined,
}

var move = true;
document.addEventListener("touchstart", function (ev) {
    touch.x = ev.touches[0].clientX;
    touch.y = ev.touches[0].clientY;
    touch.r = 20;
    move = true;
});
var move = true;
document.addEventListener("touchmove", function (ev) {
    touch.x = ev.touches[0].clientX;
    touch.y = ev.touches[0].clientY;
    touch.r = 20;
    move = true;
});
document.addEventListener("touchend", function () {
    move = false;

})
//canvas settings............................

canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener("resize", function () {
    cancelAnimationFrame(req);
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    ballsetting();
});

c = canvas.getContext("2d");

//...........................................

//Ball class..object.........................
var gravity = 0.8;
var friction = 0.95;
function Ball(x, y, r, dx, dy, col) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
    this.col = col;

    this.draw = function () {
        c.beginPath();
        c.fillStyle = this.col;
        c.arc(this.x, this.y, this.r, 0,
            Math.PI * 2, false);
        c.fill();
    }


    this.update = function () {

        if (this.y + this.r + this.dy >
            innerHeight || this.y - this.r +
            this.dy < 0) {
            this.dy = -this.dy * friction;
        } else {
            this.dy += gravity;
        }
        if (this.x > innerWidth - this.r -
            this.dx || this.x < this.r -
            this.dx) {
            this.dx = - this.dx *
                (friction);
        }
        if (getdistance(touch.x, touch.y,
            this.x, this.y) < this.r + touch.r
            && move == true) {
            if (this.y - this.r * 2 - touch.r +
                this.dy > 0) {
                this.dx += (Math.random() * 2) - 1;
                this.dy += -this.dy - 15;
            }
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }

}

var colorarray = [
    "rgba(255,255,255,0.9)",
    "rgba(255,0,0,0.9)",
    "rgba(17, 207, 162,0.9)",
    "rgba(46, 149, 240,0.9)",
    "rgba(151, 68, 156,0.9)",
    "rgba(120, 66, 173,0.9)",
    "rgba(217, 106, 89,0.9)",
    "rgba(212, 129, 28,0.9)"

];

var ballsam = [];
function ballsetting() {
    ballsam = [];
    for (let i = 0; i < 20; i++) {
        r = (Math.random() * 20) + 10;
        x = Math.random() * (innerWidth - 2 * r) + r;
        y = Math.random() * (innerHeight - 2 * r) + r;
        dx = (Math.random() * 6) - 3;
        dy = (Math.random() * 1) + 1;
        col = colorarray[Math.round(Math.random()
            * colorarray.length)];
        ballsam.push(new Ball(x, y, r, dx, dy, col));
    };
    animate();
};
ballsetting();



function animate() {
    req = requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < ballsam.length; i++) {
        ballsam[i].update();
    }

    if (move == true) {
        c.beginPath();
        c.fillStyle = "rgb(171, 169, 44,0.6)";
        c.arc(touch.x, touch.y, touch.r, 0,
            Math.PI * 2);
        c.fill();
    }
};


function getdistance(x1, y1, x2, y2) {
    xdist = x1 - x2;
    ydist = y1 - y2;
    return Math.sqrt(Math.pow(xdist, 2) +
        Math.pow(ydist, 2));


}
