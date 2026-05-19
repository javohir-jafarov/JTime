let soat = document.querySelector('.hour')
let daqiqa = document.querySelector('.minChild')
let soniya = document.querySelector('.sec')

let burger = document.querySelector('#burger')
let menu = document.querySelector('#menu')
let close = document.querySelector('#close')

let options = document.querySelector('#options')

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

isActive = false

let sandwich = () => {
    isActive = !isActive
    if (isActive == true) {
        menu.style.display = 'none'
        close.style.display = 'flex'
        options.style.width = '100%'
    } else {
        menu.style.display = 'flex'
        close.style.display = 'none'
        options.style.width = '0'
    }
}

burger.addEventListener('mousedown', sandwich)