var weekday = prompt("Are you on weekdays (true = 1 / false = 0):");
var vacation = prompt("Are you on vacation (true = 1 / false = 0):");
sleepIn(weekday,vacation);
function sleepIn(weekday, vacation)
{
    if(weekday == false && vacation == false){
        console.log("Hey!!! you are set to have chilll....")
    }
    else if(weekday == false && vacation == true){
        console.log("Hey!!! you are set to have chilll....")
    }
    else
        console.log("Go to work, mah boy.")
        
}