setInterval(setclock, 1000)


const secondHand = document.querySelector('[data-second-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-hour-hand]')

function setclock() {
    var currentDate = new Date();
    var secondRatio = currentDate.getSeconds() / 60
    var minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    var hourRatio = (minuteRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand, hourRatio)

}

function setRotation(element, rotationRatio) {

    element.style.setProperty('--rotation', rotationRatio * 360)
}
setclock()