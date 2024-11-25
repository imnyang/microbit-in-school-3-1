input.onButtonPressed(Button.A, function () {
    주사위 = randint(1, 6)
    if (주작 == 0) {
        if (주사위 == 1) {
            basic.showString("1")
        } else if (주사위 == 2) {
            basic.showString("2")
        } else if (주사위 == 3) {
            basic.showString("3")
        } else if (주사위 == 4) {
            basic.showString("4")
        } else if (주사위 == 5) {
            basic.showString("5")
        } else if (주사위 == 6) {
            basic.showString("6")
        }
    } else {
        basic.showString("" + (주작))
    }
})
input.onButtonPressed(Button.AB, function () {
    주작 = 0
})
input.onButtonPressed(Button.B, function () {
    주작 = 주사위
})
let 주사위 = 0
let 주작 = 0
주작 = 0
basic.forever(function () {
	
})
