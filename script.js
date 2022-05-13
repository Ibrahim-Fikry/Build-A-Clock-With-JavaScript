setInterval(setclock, 1000)
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-hour-hand]')

function setclock() {
    var currentDate = new Date();
    var secondRatio = currentDate.getSeconds() / 60
    var minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    var hourRatio = (minuteRatio + currentDate.getHours()) / 12
    setRotation(hourHand, hourRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(secondHand, secondRatio)
}

function setRotation(element, rotationRatio) {

    element.style.Property('--rotation', rotationRatio * 360)
}
setclock()