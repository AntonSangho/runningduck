def on_button_pressed_a():
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 120)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    pins.digital_write_pin(DigitalPin.P1, 120)
    pins.digital_write_pin(DigitalPin.P2, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

Lcal = 0
pins.digital_write_pin(DigitalPin.P1, 0)
pins.digital_write_pin(DigitalPin.P2, 0)

def on_forever():
    global Lcal
    Lcal = pins.analog_read_pin(AnalogPin.P0)
    if input.button_is_pressed(Button.A):
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 120)
    else:
        if Lcal > 500:
            pins.digital_write_pin(DigitalPin.P1, 0)
            pins.digital_write_pin(DigitalPin.P2, 120)
        else:
            pins.digital_write_pin(DigitalPin.P1, 0)
            pins.digital_write_pin(DigitalPin.P2, 0)
basic.forever(on_forever)
