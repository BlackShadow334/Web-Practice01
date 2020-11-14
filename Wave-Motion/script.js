

//CANVAS /

canvas.width = innerWidth;
canvas.height = innerHeight;
window.addEventListener("resize", () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    cancelAnimationFrame(req);
    setCanvas();
})
const c = canvas.getContext("2d");


var req;
const setCanvas = () => {
    let yPosition = innerHeight / 2;

    //lettingValue
    let wavelength = 50;
    let amplitude = 50;
    let frequency = 0.05;
    let sequence = 0.05;

    let hue = 110;
    let saturation = 50;
    let lightness = 50;

    let wavelengthValue = document.querySelector("#wavelengthValue");
    let amplitudeValue = document.querySelector("#amplitudeValue");
    let frequencyValue = document.querySelector("#frequencyValue");
    let sequenceValue = document.querySelector("#sequenceValue");
    let hueValue = document.querySelector("#hueValue");
    let saturationValue = document.querySelector("#saturationValue");
    let lightnessValue = document.querySelector("#lightnessValue");
    let hueChangeValue = document.querySelector("#hueChangeValue");

    let hueRange = document.querySelector("#hueRange");
    let hueChangeRange = document.querySelector("#hueChangeRange");



    let incFre = 0;
    let i;
    const animate = () => {
        //settingValue
        wavelength = wavelengthRange.value;
        amplitude = amplitudeRange.value;
        frequency = frequencyRange.value / 100;
        sequence = sequenceRange.value / 10;
        hue = hueRange.value;
        saturation = saturationRange.value;
        lightness = lightnessRange.value;
        hueChange = hueChangeRange.value;

        //showingValue
        wavelengthValue.innerHTML = wavelength;
        amplitudeValue.innerHTML = amplitude;
        frequencyValue.innerHTML = frequency;
        sequenceValue.innerHTML = sequence;
        hueValue.innerHTML = hue;
        saturationValue.innerHTML = saturation;
        lightnessValue.innerHTML = lightness;
        hueChangeValue.innerHTML = hueChange;

        req = requestAnimationFrame(animate);
        c.fillStyle = "#2222220a";
        c.fillRect(0, 0, innerWidth, innerHeight);

        c.beginPath();
        c.moveTo(innerWidth, innerHeight / 2);

        for (i = 0; i < innerWidth; i++) {
            c.lineTo(innerWidth - i, yPosition +
                Math.sin(i / wavelength +
                    incFre) * amplitude *
                Math.sin(incFre * sequence));

        }
        c.strokeStyle = `hsl( ${hue} , ${saturation}% , ${lightness}%)`
        c.stroke();
        c.closePath();

        //value change
        incFre += frequency;

        if (hueRange.value / 1 >= 255 ||
            hueRange.value / 1 <= 0) {
            hueChangeRange.value = - hueChangeRange.value / 1;
        }
        hueRange.value = hueRange.value / 1 +
            hueChangeRange.value / 1;


    }
    animate();
}
setCanvas();



//navigationSystem..................

let j = 0;
let toolbar =
    document.querySelector("#toolbar");
let toolbarBtn =
    document.querySelector("#toolbarBtn");
toolbarBtn.addEventListener("click", () => {
    j += 1;
    if (j % 2 == 1) {
        toolbar.style.top = "0em";
        toolbarBtn.style = "transform :rotate(360deg)";
    } if (j % 2 == 0) {
        toolbar.style = "top : -2em ;";
        toolbarBtn.style = "transform : rotate(0deg)";
    }
});
toolbarBtn.click();


$(document).ready(function () {
    waveBtn.addEventListener("click", () => {
        $("#wave").slideToggle(500);
    });
    strokeBtn.addEventListener("click", () => {
        $("#stroke").slideToggle(500);
    });
});