input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 108)
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P1, 701)
    pins.analogWritePin(AnalogPin.P2, 0)
})
let Lcal = 0
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
basic.forever(function () {
    Lcal = pins.analogReadPin(AnalogPin.P0)
    if (Lcal > 500) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 268)
        basic.clearScreen()
        basic.pause(200)
    }
})
