input.onButtonPressed(Button.A, function on_button_pressed_a() {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 120)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    pins.digitalWritePin(DigitalPin.P1, 120)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
let Lcal = 0
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
basic.forever(function on_forever() {
    
    Lcal = pins.analogReadPin(AnalogPin.P0)
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 120)
    } else if (Lcal > 500) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 120)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    
})
