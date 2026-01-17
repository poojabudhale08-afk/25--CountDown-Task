const cl = console.log;

const setZero = (num) =>{
    return (num < 10) ? "0" + num : num;
}

const countHandler = () =>{
    const countDown = document.getElementById('countDown');


let currentDate = Date.now();
cl(currentDate)

let targetDate = new Date("March 15, 2026 23:56:56");
cl(targetDate);



let diff = targetDate - currentDate;

let days = diff / (86400000)
cl(days)

let daysInt = Math.floor(days)
cl(daysInt);

let hrs = diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60);
cl(hrs);

let hrsInt = Math.floor(hrs);
cl(hrsInt);

let min = diff % (1000 * 60 * 60 ) / (1000 * 60 );
cl(hrs);

let minInt = Math.floor(min);
cl(hrsInt);

let sec = diff % (1000 * 60 ) / (1000);
cl(hrs);

let secInt = Math.floor(sec);
cl(hrsInt);


countDown.innerHTML = `${setZero(daysInt)} Days ${setZero(hrsInt)} Hours ${setZero(minInt)} Minutes ${setZero(secInt)} Seconds`;

if(diff < 0){
    clearInterval()
    countDown.innerHTML="got Offer Letter";
}


}

setInterval(countHandler, 1000);