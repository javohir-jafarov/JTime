let soat = document.querySelector('.hour')
let daqiqa = document.querySelector('.minChild')
let soniya = document.querySelector('.sec')



let clock = () => {
    let date = new Date()
    let hour = String(date.getHours()).padStart(2, '0')
    let min = String(date.getMinutes()).padStart(2, '0')
    let sec = String(date.getSeconds()).padStart(2, '0')
    
    soat.innerText = hour
    daqiqa.innerText = min
    soniya.innerText = sec

}

setInterval(clock, 1000)