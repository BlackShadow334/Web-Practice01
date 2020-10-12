var birthday_year;
const birthday_month = 11;
const birthday_day = 11;
var is_it_today = false;


//for randomizing background image
var bg_images = ["assets/background01.jpg", "assets/background02.jpg", "assets/background03.jpg", "assets/background04.jpg", "assets/background05.jpg"];

const randomize_bg = () => {
    //changing style of body
    document.body.style = "background: #222 url(" + bg_images[Math.floor(Math.random() * bg_images.length)] + ") no-repeat; background-size: cover; background-attachment: fixed; background-position: 50% 50%;";
    
}
randomize_bg();


function get_total_remaining_secs(target_month, target_date){
    var now = new Date();
    var now_year = now.getFullYear();
    var now_month = now.getMonth();
    var now_date = now.getDate();
    var target_year = 0;
    
    if(now_month >= target_month && now_date > target_date){
        target_year = ++now_year;
        is_it_today = false;
    }else{
        target_year = now_year;
        is_it_today = false
    }
    
    // target is date of event
    var target = new Date(target_year, target_month, target_date);
    
    let total_remaining_secs = (target.valueOf() - now.valueOf()) / 1000;
   
    if(now_month == target_month && now_date == target_date){
        // to change heading("until my birthday" to "happy my birthday")
        is_it_today = true;
        total_remaining_secs = 0;
    } 
   
    return total_remaining_secs;
}


const countdown = () => {
    
    // total_remaining_secs from function get_total_remaining_secs
    let total_remaining_secs = get_total_remaining_secs(birthday_month, birthday_day);
    
    // calculations for respective 
    let remaining_days = Math.floor(total_remaining_secs / (60 * 60 * 24));
    
    let remaining_hours = Math.floor(total_remaining_secs / (60 * 60) - remaining_days * 24);
    
    let remaining_minutes = Math.floor(total_remaining_secs / 60 - remaining_hours * 60 - remaining_days * 24 * 60);
    
    let remaining_seconds = Math.floor(total_remaining_secs - remaining_minutes * 60 - remaining_hours * 60 * 60 - remaining_days * 24 * 60 * 60);
    
    // changing innerHTML of respective and shows countdown 
    document.querySelector("#days").innerHTML = remaining_days ;
    document.querySelector("#hours").innerHTML = remaining_hours ;
    document.querySelector("#minutes").innerHTML = remaining_minutes ;
    document.querySelector("#seconds").innerHTML = remaining_seconds ;
    
    // for the day of event
    if(is_it_today == true){
        document.querySelector(".headline").innerHTML = "Happy My Birthday";
    }
}

// calling function 
countdown();
setInterval(countdown, 1000);