var birthday_year;
const birthday_month = 11;
const birthday_day = 11;

var_remaining_secs = 0;


function get_remaining_time(target_month, target_date){
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
   
    remaining_secs = (target.valueOf() - now.valueOf()) / 1000;
   
    document.querySelector("#seconds").innerHTML = remaining_secs;
    
}


//get_remaining_time(birthday_month, birthday_day);

setInterval(get_remaining_time(birthday_month, birthday_day), 100);


