function fallComes() {
    const fallDate = new Date("September 1, 2022 00:00");
    const now = new Date();
    const diff = fallDate - now;

    msInSec = 1000;
    msInMin = 60 * 1000;
    msInHr = 60 * 60 * 1000;
    msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    const dayinRussia = function declOfNum(number, titles) {  
        cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    const dayinRussiaDisplay = dayinRussia(displayDay,['день', 'дня', 'дней']);
    document.querySelector('.days').innerHTML = `${displayDay} <br> ${dayinRussiaDisplay}`;


    const displayHour = Math.floor((diff%msInDay)/msInHr);
    const hourinRussia = function declOfNum(number, titles) {  
        cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    const hourinRussiaDisplay = hourinRussia(displayHour,['час', 'часа', 'часов']);
    document.querySelector('.hours').innerHTML = `${displayHour} <br> ${hourinRussiaDisplay}`;

    const displayMinute = Math.floor((diff%msInHr)/msInMin);
    const mininRussia = function declOfNum(number, titles) {  
        cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    const mininRussiaDisplay = mininRussia(displayMinute,['минута', 'минуты', 'минут']);
    document.querySelector('.minutes').innerHTML = `${displayMinute} <br> ${mininRussiaDisplay}`;

    const displaySecond = Math.floor((diff%msInMin)/msInSec);
    const secinRussia = function declOfNum(number, titles) {  
        cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    const secinRussiaDisplay = secinRussia(displaySecond,['секунда', 'секунды', 'секунд']);
    document.querySelector('.seconds').innerHTML = `${displaySecond} <br> ${secinRussiaDisplay}`;

    if(diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        window.location.href = "winter.html"
    }
}

let timerID = setInterval(fallComes, 1000);

const button = document.querySelector("#btn");
const song = document.querySelector("#song");

button.addEventListener("click" , function(){
    if(song.paused) {
        song.play();
        button.classList.toggle("pause");
    }
    else {
        song.pause();
        button.classList.toggle("pause")
    }
})

