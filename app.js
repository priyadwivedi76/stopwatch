let [seconds,minutes,hours]=[0,0,0];
let display=document.querySelector("p");
let timer=null;

function watch(){
    seconds++;
    if(seconds==60){
        minutes++;
        if(minutes==60){
            hours++;
        }
    }
    let h=hours<10?"0"+hours:hours;
    let m=minutes<10?"0"+minutes:minutes;
    let s=seconds<10?"0"+seconds:seconds;
    display.innerHTML=h+":"+m+":"+s;
}
 function startWatch(){
    if(timer!=null){
        clearInterval(timer);
    }
   timer=setInterval(watch,1000);
 }

 function stopWatch(){
    clearInterval(timer);
 }

 function resetWatch(){
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    display.innerHTML="00:00:00";
 }

