let Número_1 = 0
let Número_2 = 0
let Número_3 = 0
input.onButtonPressed(Button.A, function () {
    if (Número_1 != 0 && Número_2 != 0) {
        basic.showIcon(IconNames.No)
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    Número_1 = randint(0, 9)
    Número_2 = randint(0, 9)
    Número_3 = randint(0, 9)
    if (Número_1 != Número_2 && (Número_1 != Número_3 && Número_2 != Número_3)) {
        basic.showIcon(IconNames.Yes)
        basic.showNumber(Número_1)
        basic.showNumber(Número_2)
        basic.showNumber(Número_3)
    } else {
        basic.showIcon(IconNames.No)
        Número_1 = 0
        Número_2 = 0
        Número_3 = 0
    }
})
