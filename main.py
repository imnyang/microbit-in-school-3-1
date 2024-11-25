def on_forever():
    pass

주사위 = 0
주작 = 0

def on_button_pressed_a():
    global 주사위
    주사위 = randint(1, 6)

    if 주사위 == 1:
        basic.show_string("1")
    elif 주사위 == 2:
        basic.show_string("2")
    elif 주사위 == 3:
            basic.show_string("3")
    elif 주사위 == 4:
            basic.show_string("4")
    elif 주사위 == 5:
            basic.show_string("5")
    elif 주사위 == 6:
            basic.show_string("6")

input.on_button_pressed(Button.A, on_button_pressed_a)
basic.forever(on_forever)
