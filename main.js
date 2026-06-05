let body = document.body
let soat = document.querySelector('.hour')
let daqiqa = document.querySelector('.minChild')
let soniya = document.querySelector('.sec')

let burger = document.querySelector('#burger')
let menu = document.querySelector('#menu')
let close = document.querySelector('#close')

let options = document.querySelector('#options')

let colorPicker = document.querySelector('#colorPicker')

let images = document.querySelector('#images');

let ownImageInp = document.querySelector('#ownImage')

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
        options.style.height = '100vh'
    } else {
        menu.style.display = 'flex'
        close.style.display = 'none'
        options.style.width = '0'
        options.style.height = '0'
    }
}

burger.addEventListener('mousedown', sandwich);
window.addEventListener('keydown', (e) => {
    if(e.key == 'm') {
        sandwich()
    }
})


colorPicker.addEventListener('input', (event) => {
    document.documentElement.style.setProperty('--main-color', event.target.value + 'BF')
})


let BgImages = [
    {
        image: '/images/dara.png'
    },
    {
        image: '/images/edge_background.jpg'
    },
    {
        image: '/images/purple-city.jpg'
    },
    {
        image: '/images/cozyCar.jpeg'
    },
    {
        image: '/images/image1.webp'
    },
    {
        image: '/images/image2.webp'
    },
    {
        image: '/images/image3.webp'
    },
    {
        image: '/images/image4.webp'
    },
    {
        image: '/images/image5.webp'
    },
    {
        image: '/images/image6.webp'
    },
    {
        image: '/images/islandMacOS.jpg'
    },
]

for (let i = 0; i < BgImages.length; i++) {
    images.innerHTML += `
        <img src="${BgImages[i].image}" alt="" onclick="addUrl('${BgImages[i].image}')">
    `
}

let addUrl = (url) => {
    body.style.backgroundImage = `url(${url})`
}

