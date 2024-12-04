// let data = new Date();

// console.log(data);
// console.log(data.getFullYear());
// console.log(data.getMinutes());
// console.log(data.getDay());
// console.log(data.getDate());
// console.log(data.getHours());
// console.log(data.getMinutes());
// console.log(data.getSeconds());
// console.log(data.getMilliseconds());


// console.log(`${data.getHours()}: ${data.getMinutes}: ${data.getSeconds}`);
// console.log(`${data.getDate()}. ${data.getMonth}. ${data.getFullYear}`);



// let myDate = new Date(2025);

// console.log(myDate.getDay());


let days = document.getElementById('days');
let hours = document.getElementById('hours');
let min = document.getElementById('min');
let sec = document.getElementById('sec');



setInterval(() => {
    let finishYear = new Date(2025, 0, 0);
    let nowYear = new Date();
    
    
    let dif = finishYear.getTime() - nowYear.getTime();
    
    
    days.textContent = (dif / 1000 / 60 / 60 / 24).toFixed(0).padStart(2, '0');
    hours.textContent = ((dif / 1000 / 60 / 60) % 24).toFixed(0).padStart(2, '0');
    min.textContent = ((dif / 1000 / 60) % 60).toFixed(0).padStart(2, '0');
    sec.textContent = ((dif / 1000) % 60).toFixed(0).padStart(2, '0');
}, 100)

