let pass = false;
let stop = false;

function addASecond() {
    if (stop) return;
    var currentTime = document.querySelector(".stopwatch").innerHTML.split(":");
    var min = parseInt(currentTime[0]);
    var sec = parseInt(currentTime[1]);
    var totalSec = (min * 60) + (sec);
    totalSec += 1;
    min = parseInt(totalSec / 60);
    sec = totalSec % 60;

    // console.log((min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec))
    if (!pass)
        document.querySelector(".stopwatch").innerHTML = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
    else {
        console.log("passed");
        pass = !pass;
        setTimeout(addASecond, 1000);
        return;
    }
    setTimeout(addASecond, 1000);
}

function addStopwatch() {
    var elem = document.createElement("div");
    elem.classList.add("stopwatch")
    elem.innerHTML = "00:00";
    document.querySelector(".scene").appendChild(elem);
    dragElement(document.querySelector(".stopwatch"));

    setTimeout(()=>{
        stop = false;
        setTimeout(addASecond, 1000);
    },1001);
}

