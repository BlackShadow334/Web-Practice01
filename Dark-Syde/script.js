/*
Guess Game
Guess a computer chosen number from 1-100
*/



$(function(){
//nav for a.href.............................
i=0;
$("#navbtn").on("click",function(){
i++;
if (i%2==1){
    $("#nav").css({"right" :"0"});
    $("#navbtn").css({"right" :"60%"});
    $("#main").fadeTo(1000,0.5);
    }else{
    $("#nav").css({"right" :"-60%"});
    $("#navbtn").css({"right" :"0%"});
    $("#main").fadeTo(1000,1);
    }
});
//nav end....................................
//searching..................................
$("#navsearch").on("keyup",function(){
    var value= $("#navsearch").val().toLowerCase();
    
    $("#navlistdiv a").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1
        );
    });
});
//searching end..............................
//clock......................................
i1=0;
$("#timediv").on("click",function(){
i1++;
if (i1%2==1){
    $(this).css({"height" : "60px"});
    }else{
    $(this).css({"height" : "19px"});
    }
});
setInterval(clock);
function clock(){
var time= new Date();
var h= time.getHours();
if (h/1>=12){ampm="PM"}else{ampm="AM"};
if (h/1>12){h= h-12};
if (h/1<10){h= "0"+h};
var m= time.getMinutes();
if (m/1<10){m= "0"+m};
var s= time.getSeconds();
if (s/1<10){s= "0"+s};
var da= time.getDate();
var mo= time.getMonth();
var ye= time.getFullYear();
var dy= time.getDay();
if (dy==0){dy=" SUNDAY "};
if (dy==1){dy=" MONDAY "};
if (dy==2){dy=" TUESDAY "};
if (dy==3){dy=" WEDNESDAY "};
if (dy==4){dy=" THURSDAY "};
if (dy==5){dy=" FRIDAY "};
if (dy==6){dy=" SATURDAY "};

    $("#timediv").html(h +":"+ m+":" + s + " "+ampm+ "<br>"+
    dy +"<br>" + da + "-" + mo + "-" + ye);
};
//clock end..................................
//creating switch............................
$("#commandbtn").on("click",commandgo);
$("#commandinp").on("keyup",function(i){
    if (i.keyCode===13){
        i.preventDefault();
        commandgo();
    }
});

function commandgo(){
var command = $("#commandinp").val().toLowerCase();

switch(command){
    case "" :
    break;
    case "clock" :
    $("#timediv").toggle();
    $("#commandinp").val("");
    break;
    case "connect" :

let ip01= Math.round(Math.random()*255);
let ip02= Math.round(Math.random()*255);
let ip03= Math.round(Math.random()*255);
let ip04= Math.round(Math.random()*255);
let done0= Math.round(Math.random()*1);
$("#workarea").html("server IP : "+ip01+"."+ip02+"."+ip03+"."+ip04+"<br>"+
"connecting to server...<br><br>");

$("#workarea").append("<span id='progdiv'>"+
"<progress id='prog' value='100'></progress></span>");

$("#prog").animate({
    width : "100%"},5000,function(){
        $("#progdiv").hide();
   if (done0==0){
        $("#workarea").append("<g>successfully connected...</g><br>data stealing...<br><g>data stolen.</g>");
        }else{
        $("#workarea").append("<r>connection failed..!</r><br><br>"+
        "<button class='btnagain' id='btnag0'> AGAIN </button>");
        $("#btnag0").on("click",function(){
            $("#commandinp").val("connect");
            $("#commandbtn").click();
        });
        }
    });
    $("#commandinp").val("");
    break;
    case "randomizeip" :
let ip11= Math.round(Math.random()*255);
let ip12= Math.round(Math.random()*255);
let ip13= Math.round(Math.random()*255);
let ip14= Math.round(Math.random()*255);

$("#workarea").html("randomizing IP...</span><br>");
setTimeout(function(){
    $("#workarea").append("IP randomize :<g> Done</g><br>");
},2000);
setTimeout(function(){
    $("#workarea").append("your new IP : <g>"+ip11+"."+ip12+"."+ip13+"."+ip14+"</g><br><br><button id='btnag1' class='btnagain'> AGAIN </button>");
    $("#btnag1").on("click",function(){
        $("#commandinp").val("randomizeip");
            $("#commandbtn").click();
        });
},3000);
    $("#commandinp").val("");
    break;
    case "hackme":
    ihacks=0;
for(ihacks=0;ihacks < Infinity; ihacks++){
    $("#commandinp").val("hackme");
    
}
    $("#commandinp").val("hackme");
    $("#commandbtn").trigger("click");
    break;
    case "stuckme" :
    $("#workarea").html('do you wanna stuck...<br>To stuck yourSelf press <r>"STUCK ME"</r><br><br><button class="btnagain" id="btnag2"> STUCK ME </button>');
    $("#workarea").on("click",function(){
    $("#btnag2").on("click",function(){
        alert("Do you wanna stuck");
        $("#btnag2").trigger("click");
        });
        $("#btnag2").trigger("click");
    });
    $("#commandinp").val("");
    break;
    case "recursion" :

    $("#workarea").html("<span id='dot1' style='position:absolute;left:0.5em;'>.</span><span id='dot2' style='position:absolute;left:1em;'>.</span><span id='dot3' style='position:absolute;left:1.5em;'>.</span>");/*
    setInterval(function(){
    $("#dot1").toggle("slow" ,function(){
    $("#dot2").toggle("slow" ,function(){
    $("#dot3").toggle("slow");
    
    });
    });
});
    */
$("#dot1 ,#dot2 ,#dot3 ").show("slow",function(){
    $("#dot1 ,#dot2 ,#dot3 ").hide("slow",function(){
    $("#dot1").show("slow",function(){
    $("#dot2").show("slow",function(){
    $("#dot3").show("slow",function(){
    $("#commandinp").val("recursion");
    $("#commandbtn").click();
    });
    });
    });
});
});
    $("#commandinp").val("");
    break;
    
    case "screeninfo":
    $("#workarea").html('getting screen\'s info...<br>');
    setTimeout(function(){
        $("#workarea").append("<g>screen's informations successfully captured.</g><br><br>");
    },2000);
    setTimeout(function(){
        $("#workarea").append("Total Width : <g>"+ screen.width +" px</g><br>");
    },3000);
    setTimeout(function(){
        $("#workarea").append("Total Height : <g>"+ screen.height +" px</g><br>");
    },3500);
    setTimeout(function(){
        $("#workarea").append("Available Width : <g>"+ screen.availWidth +" px</g><br>");
    },4000);
    setTimeout(function(){
        $("#workarea").append("Available Height : <g>"+ screen.availHeight +" px</g><br>");
    },4500);
    setTimeout(function(){
        $("#workarea").append("Color Depth : <g>"+ screen.colorDepth +"</g><br>");
    },5000);
    setTimeout(function(){
        $("#workarea").append("Pixel Depth : <g>"+ screen.pixelDepth +"</g><br>");
    },5500);
    $("#commandinp").val("");
    break;
    case "browserinfo":
    $("#workarea").html('getting browser\'s info...<br>');
    setTimeout(function(){
        $("#workarea").append("<g>browser\'s informations successfully captured.</g><br><br>");
    },2000);
    setTimeout(function(){
        $("#workarea").append("Browser Name : <g>"+ navigator.appName +"</g><br>");
    },3000);
    setTimeout(function(){
        $("#workarea").append("Browser Code Name : <g>"+ navigator.appCodeName +"</g><br>");
    },3500);
    setTimeout(function(){
        $("#workarea").append("Browser engine : <g>"+ navigator.product +"</g><br>");
    },4000);
    setTimeout(function(){
        $("#workarea").append("Browser Version : <g>"+ navigator.appVersion +"</g><br>");
    },4500);
    setTimeout(function(){
        $("#workarea").append("Browser user-agent header : <g>"+ navigator.userAgent +"</g><br>");
    },5000);
    setTimeout(function(){
        $("#workarea").append("Browser Platform : <g>"+ navigator.platform +"</g><br>");
    },5500);
    setTimeout(function(){
        $("#workarea").append("Browser Language : <g>"+ navigator.language +"</g><br>");
    },6000);
    setTimeout(function(){
        $("#workarea").append("Browser Online Status : <g>"+ navigator.onLine +"</g><br>");
    },6500);
    setTimeout(function(){
        $("#workarea").append("Browser Cookie enabled : <g>"+ navigator.cookieEnabled +"</g><br>");
    },7000);
    setTimeout(function(){
        $("#workarea").append("Browser Java enabled : <g>"+ navigator.javaEnabled() +"</g><br>");
    },7500);
    $("#commandinp").val("");
    break;
    
    
    
    
    
    case "guessgame" :
    let num0= Math.round(Math.random()*100);
$("#workarea").html("# GUESS_GAME_<br><br>Guess a computer chosen number from 0-100<br><br><input id='guessinp' class='btnagain' placeholder=' enter number' type='number'> <button id='btnag3' class='btnagain'> GUESS </button><br><br>");

    $("#btnag3").on("click",function(){
    var numgu= $("#guessinp").val();
if (numgu==num0){
    $("#workarea").append("<g>Correct.. Wow</g><br><br>Wanna play again?<br>Type <g>\"guessgame\"</g> in command bar.<br>");
    $("#btnag3").remove();
}if (numgu>num0){
    $("#workarea").append("<r>WRONG too high..!</r><br>");
    $("#guessinp").val("");
}if (numgu<num0){
    $("#workarea").append("<r>WRONG too low..!</r><br>");
    $("#guessinp").val("");
}   
    });
    $("#commandinp").val("");
    break;
    case "error":
    $("#workarea").html('<r>error detected....<br>"'+command+'"</r> is not required Command.<br>You are forcing me to show <r>"error".</r><br><br> Don\'t know command : Try <g>"list"</g>.<br>Note: characters are not \'case sensetive\'');
    
    $("#commandinp").val("");
    
    break;
    case "about" :
    $("#workarea").html('<bl>About :</bl><br>'+
    '<g>Version </g>: 1.0<br>'+
    '<g>Updated on </g>: 11 feb, 2020<br>'+
    '<g>Release on </g>: 11 feb, 2020<br>'+
    '<g>Created by </g>: BlackShadow<br>'+
    'For any suggestions please comment.'
    );
    $("#commandinp").val("");
    break;
    case "list" :
    $("#workarea").html('enter any command below :<br>'+
    '<g>"list" </g>: For lists of commands.<br>'+
    '<g>"clock" </g>: To show/hide clock.<br>'+
    '<g>"connect" </g>: To connect any server.<br>'+
    '<g>"randomizeIp" </g>: To randomize your IP adress.<br>'+
    '<g>"hackme" </g>: Try to hack yourself.<br>'+
    '<g>"stuckme" </g>: stuck youself in your own browser.<br>'+
    '<g>"recursion" </g>: To show recursion.<br>'+
    '<g>"screenInfo" </g>: To get information about your screen.<br>'+
    '<g>"browserInfo" </g>: To get information about your browser.<br>'+
    '<g>"guessgame" </g>: To play Guess Game.<br>'+
    '<g>"error" </g>: To show error.<br>'+
    
    
    '<g>"about" </g>: To know about this code.<br><br>'+
    'Note: characters are not \'case sensetive\'.<br>'
    );
    $("#commandinp").val("");
    break;
    default :
    $("#workarea").html('<r>error detected....<br>"'+command+'"</r> is not required Command.<br><br> Don\'t know command : Try <g>"list"</g>.');
    $("#commandinp").val("");
};

};




});