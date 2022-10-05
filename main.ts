let Número_1 = 0
let Número_2 = 0
let Número_3 = 0
let Mayor = 0
let Medio = 0
let Menor = 0
input.onButtonPressed(Button.A, function () {
    if (Número_1 > Número_2 && Número_1 > Número_3) {
        Mayor = Número_1
        if (Número_2 > Número_3) {
            Medio = Número_2
            Menor = Número_3
        } else {
            Medio = Número_3
            Menor = Número_2
        }
        basic.showNumber(Mayor)
        basic.showNumber(Medio)
        basic.showNumber(Menor)
    }
    if (Número_2 > Número_1 && Número_2 > Número_3) {
        Mayor = Número_2
        if (Número_1 > Número_3) {
            Medio = Número_1
            Menor = Número_3
        } else {
            Medio = Número_3
            Menor = Número_1
        }
        basic.showNumber(Mayor)
        basic.showNumber(Medio)
        basic.showNumber(Menor)
    }
    if (Número_3 > Número_1 && Número_3 > Número_2) {
        Mayor = Número_3
        if (Número_1 > Número_2) {
            Medio = Número_1
            Menor = Número_2
        } else {
            Medio = Número_1
            Menor = Número_2
        }
        basic.showNumber(Mayor)
        basic.showNumber(Medio)
        basic.showNumber(Menor)
    } else {
        basic.showIcon(IconNames.No)
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
