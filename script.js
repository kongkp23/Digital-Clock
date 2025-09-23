let hr = document.getElementById("hrs");
let min = document.getElementById("mins");
let sec = document.getElementById("secs");

setInterval(() => {

    let currentTime = new Date();

    hr.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

}, 1000);
