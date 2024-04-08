let Zufall = 0
input.onGesture(Gesture.Shake, function () {
    Zufall = randint(1, 3)
    if (Zufall == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (Zufall == 2) {
        basic.showLeds(`
            . . . . .
            . . . # #
            . . # . .
            # # . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            `)
    }
})
