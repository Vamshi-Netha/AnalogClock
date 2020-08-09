const currentDate = new Date()
const secondHand = document.getElementById("3")
const minuteHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-hour-hand]')
function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio+currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio+currentDate.getHours())/12
    setRotation(secondHand,secondsRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(hourHand,hoursRatio)  
    
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360)
}
setInterval(setClock, 1000)
setClock()
/*  day month year*/
let month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let n = weekday[currentDate.getDay()];
let m = month[currentDate.getMonth()];

const date = currentDate.getDate()
const year = currentDate.getFullYear()
document.querySelector(".date1").innerHTML = date
document.querySelector(".month").innerHTML = m
document.querySelector(".year").innerHTML = year
document.querySelector(".day").innerHTML = n
