
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let mins = document.getElementById("minutes");
let seconds = document.getElementById("seconds");


const countdownTimer = setInterval(function() {
    const now = new Date().getTime();

    const saleEndDate = new Date('2024-03-20T00:00:00').getTime();
    const timeRemaining = saleEndDate - now;
    seconds.innerHTML = String( Math.floor((timeRemaining % (1000 * 60)) / 1000)).padStart(2,"0").padEnd(2,"0");
    mins.innerHTML = String(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2,"0")
    hours.innerHTML =String(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2,"0");
    days.innerHTML = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
   
    if (timeRemaining < 0) {
        clearInterval(countdownTimer);
        console.log('Sale has ended!');
        alert("Sale has ended!")
    }
}, 1000);