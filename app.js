let [hour,min,sec]=[0,0,0];
let display = document.querySelector("#display")
let timer= null;
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let reset = document.querySelector("#reset");

function Watch(){
    sec++;
    
    if(sec===60)
    {
        sec=0;
        min++;
        if(min===60)
        {
            min=0;
            hour++;
        }
    }
    let h= hour<10 ?"0"+hour:hour;
    let m = min<10 ? "0"+min:min;
    let s = sec<10 ? "0"+sec:sec
    display.innerHTML=h+":"+m+":"+s
}
start.addEventListener("click",startWatch);

function startWatch(){
    if(timer!=null){
        clearInterval(timer)
    }
    timer = setInterval(Watch,1000);
}
stop.addEventListener("click",stopWatch);
function stopWatch()
{
    clearInterval(timer);
}
reset.addEventListener("click",resetWatch);

function resetWatch(){
    clearInterval(timer);
    [hour,min,sec]=[0,0,0];
    display.innerHTML = "00:00:00"
}