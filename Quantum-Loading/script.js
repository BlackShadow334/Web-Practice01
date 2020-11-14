$(document).ready(function () {
    var num = 30;
    var dint = 0.25;
    var tint = 0.05;
    var time = 5;
    var bord = 2;
    var height = 1;
    var width = 1;

    var di = 0;
    var ti = 0;
    for (i = 0; i <= num; i++) {
        $("#wheel").append("<div></div>");

        var h = height / 1 + di / 1;
        var w = width / 1 + di / 1;
        var t = 0.1 + ti / 1;
        $("#wheel div:nth-child(" + i + ")").css({
            "height": h + "em",
            "width": w + "em",
            "animation-delay": t + "s"
        });
        di = di / 1 + dint / 1;
        ti = ti / 1 + tint / 1;
    };


});
