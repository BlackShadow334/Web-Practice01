
var touch = {
    x: innerWidth / 2,
    y: innerHeight / 2
}


canvas.width = innerWidth;
canvas.height = innerHeight;
window.addEventListener("resize", () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    touch = {
        x: innerWidth / 2,
        y: innerHeight / 2
    }

    cancelAnimationFrame(req);
    setParticles();
});
let c = canvas.getContext("2d");


document.addEventListener("touchmove", (e) => {
    touch.x = e.touches[0].clientX;
    touch.y = e.touches[0].clientY;
})


function Particle(x, y, r, col) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = col;
    this.radians = Math.random() * Math.PI * 2;
    this.v = 0.03;
    this.centerDist = Math.random() * 50 + 40;
    this.lastTouch = { x: x, y: y };

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0,
            Math.PI * 2);
        c.fillStyle = this.col;
        c.fill();
        c.closePath();

    }
    this.update = () => {

        //dragEffect
        this.lastTouch.x += (touch.x - this.lastTouch.x) * 0.06;
        this.lastTouch.y += (touch.y - this.lastTouch.y) * 0.06;

        //applying sina nd cos and multypling to create center distance
        this.x = this.lastTouch.x +
            Math.cos(this.radians)
            * this.centerDist;
        this.y = this.lastTouch.y +
            Math.sin(this.radians)
            * this.centerDist;

        this.radians += this.v;

        this.draw();
    }
}


const colorArray = [
    "rgb(255, 00, 000)",//red
    "rgb(27, 210, 136)",//green
    "rgb(8, 148, 255)",//blue
    //         "rgb(150, 68, 156)",//violet
    //         "rgb(200, 200, 200)",//white
    //         "rgb(217, 106, 89)"//brown
];


let particles;
const init = () => {
    particles = [];

    for (i = 0; i < 55; i++) {
        x = touch.x;
        y = touch.y;
        r = Math.random() * 1 + 1.2;
        col = colorArray[Math.floor(Math.random() * colorArray.length)];
        particles.push(new Particle(x, y, r,
            col));
    }
}


var req;
const animate = () => {
    req = requestAnimationFrame(animate);
    c.fillStyle = "#22222211"
    c.fillRect(0, 0, innerWidth, innerHeight);
    c.fill();

    particles.forEach((item) => {
        item.update();
    });

}


const setParticles = () => {
    init();
    animate();
}
setParticles();
