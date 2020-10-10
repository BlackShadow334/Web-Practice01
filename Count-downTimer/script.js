var birthday_year;
const birthday_month = 11;
const birthday_day = 11;


function get_total_remaining_secs(target_month, target_date){
    var now = new Date();
    var now_year = now.getFullYear();
    var now_month = now.getMonth();
    var now_date = now.getDate();
    var target_year = 0;
    
    if(now_month >= target_month && now_date > target_date){
        target_year = ++now_year;
    }else{
        target_year = now_year;
    }
    
    var target = new Date(target_year, target_month, target_date);
    
   
    if(now_month == target_month && now_date == target_date){
        // change heading("until my birthday" to "happy my birthday")
    } 
   
    let total_remaining_secs = (target.valueOf() - now.valueOf()) / 1000;
   
    return total_remaining_secs;
}


const countdown = () => {
    
    let total_remaining_secs = get_total_remaining_secs(birthday_month, birthday_day);
    
    let remaining_days = Math.floor(total_remaining_secs / (60 * 60 * 24));
    
    let remaining_hours = Math.floor(total_remaining_secs / (60 * 60) - remaining_days * 24);
    
    let remaining_minutes = Math.floor(total_remaining_secs / 60 - remaining_hours * 60 - remaining_days * 24 * 60);
    
    let remaining_seconds = Math.floor(total_remaining_secs - remaining_minutes * 60 - remaining_hours * 60 * 60 - remaining_days * 24 * 60 * 60);
    
    document.querySelector("#days").innerHTML = remaining_days ;
    document.querySelector("#hours").innerHTML = remaining_hours ;
    document.querySelector("#minutes").innerHTML = remaining_minutes ;
    document.querySelector("#seconds").innerHTML = remaining_seconds ;
}

countdown();
setInterval(countdown, 1000);