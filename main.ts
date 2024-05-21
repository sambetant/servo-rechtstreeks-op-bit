let kleine_hoek = 0
let hoek = 0
basic.forever(function () {
    basic.showNumber(kleine_hoek)
})
basic.forever(function () {
    hoek = input.acceleration(Dimension.X)
})
basic.forever(function () {
    kleine_hoek = Math.map(hoek, -1023, 1023, 0, 180)
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, kleine_hoek)
})
