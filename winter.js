function nyComes() {
    const nyDate = new Date("January 1, 2023 00:00");
    const now = new Date();
    const diff2 = nyDate - now;

    msInSec = 1000;
    msInMin = 60 * 1000;
    msInHr = 60 * 60 * 1000;
    msInDay = 24 * 60 * 60 * 1000;

    const displayD = Math.floor(diff2/msInDay);
    const dayinRussia = function declOfNum(number, titles) {  
        cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    const dayinRussiaDisplay = dayinRussia(displayD,['день', 'дня', 'дней']);
    document.querySelector('.day').innerHTML = `${displayD} <br> ${dayinRussiaDisplay}`;

    const displayH = Math.floor((diff2%msInDay)/msInHr);
    const hourinRussia = function declOfNum(number, titles) {  
        cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    const hourinRussiaDisplay = hourinRussia(displayH,['час', 'часа', 'часов']);
    document.querySelector('.hour').innerHTML = `${displayH} <br> ${hourinRussiaDisplay}`;

    const displayM = Math.floor((diff2%msInHr)/msInMin);
    const mininRussia = function declOfNum(number, titles) {  
        cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    const mininRussiaDisplay = mininRussia(displayM,['минута', 'минуты', 'минут']);
    document.querySelector('.minute').innerHTML = `${displayM} <br> ${mininRussiaDisplay}`;

    const displayS = Math.floor((diff2%msInMin)/msInSec);
    const secinRussia = function declOfNum(number, titles) {  
        cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    const secinRussiaDisplay = secinRussia(displayS,['секунда', 'секунды', 'секунд']);
    document.querySelector('.second').innerHTML = `${displayS} <br> ${secinRussiaDisplay}`;

    if(diff2 <= 0) {
        document.querySelector(".day").textContent = 0;
        document.querySelector(".hour").textContent = 0;
        document.querySelector(".minute").textContent = 0;
        document.querySelector(".second").textContent = 0;
        clearInterval(timerID2);
        happyNewYear();
    }
}

let timerID2 = setInterval(nyComes, 1000);

function happyNewYear() {
    const heading = document.querySelector("h1");
    heading.textContent = "С НОВЫМ ГОДОМ !!!";
    heading.classList.add("happy");
    const hide1 = document.querySelector(".container");
    hide1.classList.add("hide");
    const hide2 = document.querySelector(".container2");
    hide2.classList.add("hide");
    const newBody = document.querySelector("body");
    newBody.classList.add("newBody");
}

const button2 = document.querySelector("#btn2");
const song2 = document.querySelector("#song2");

button2.addEventListener("click" , function(){
    if(song2.paused) {
        song2.play();
        button2.classList.toggle("pause2");
    }
    else {
        song2.pause();
        button2.classList.toggle("pause2")
    }
})