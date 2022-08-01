const hourEI = document.getElementById("hour")

const minutesEI = document.getElementById("minute")

const secondEI = document.getElementById("second")

const ampmEi = document.getElementById("ampm")

// call a function to get data from our compute//


function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"


    if (h > 12 ) {
        h = h - 12
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEI.innerText = h;
    minutesEI.innerText = m
    secondEI.innerText = s
    ampmEi, innerText = ampm;
    setTimeout(() =>{
        updateClock()

    }, 1000)

}

updateClock()