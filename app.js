let timer = document.getElementById("stopwatch")

let hr = 0
let min = 0
let sec = 0
let millisec = 0
let stoptime  = true
 

function starttimer() {
    if(stoptime == true){
        stoptime = false
        timercycle()
    }
}

function pausetimer() {
    if(stoptime == false){
        stoptime = true
    }
}

function timercycle() {
    if(stoptime == false){
        sec = parseInt(sec)
        min = parseInt(min)
        hr = parseInt(hr)
        millisec = parseInt(millisec)

        millisec = millisec+1
    
        if(millisec == 1000){
            sec = sec+1
            millisec = 0
        }

        if(sec == 60){
            min = min+1
            sec = 0
            millisec = 0
        }
        if(min == 60){
            hr = hr+1
            min = 0
            sec = 0
            millisec = 0
        }
        if(millisec < 10){
            millisec = "00"+millisec
        } 
        if(millisec >=10 && millisec < 100){
            millisec = "0"+millisec
        }
        if(sec < 10){
            sec = "0"+sec
        }
        if(min < 10){
            min = "0"+min
        }
        if(hr < 10){
            hr = "0"+hr
        }
        
        timer.innerHTML = hr + ":" + min + ":" + sec + ":" + millisec
        setTimeout("timercycle()",0)
    }
}
function resettimer() {
    timer.innerHTML = "00:00:00:000"
    stoptime = true
    hr = 0
    min = 0
    sec = 0
    millisec = 0
}