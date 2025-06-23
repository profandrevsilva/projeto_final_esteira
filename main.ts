basic.showLeds(`
    # # # # #
    # . . . #
    # # # # #
    # . # . .
    # . . # .
    `)
basic.forever(function () {
    for (let index = 0; index < 7; index++) {
        basic.showIcon(IconNames.Yes)
        robotbit.MotorRun(robotbit.Motors.M1A, 150)
        basic.pause(300)
        robotbit.MotorStopAll()
        robotbit.Servo(robotbit.Servos.S8, 0)
        basic.pause(200)
        robotbit.Servo(robotbit.Servos.S8, 90)
    }
})
