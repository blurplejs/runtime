import * as blessed from 'blessed'

export function createScreen(title: string) : blessed.Widgets.Screen {
    let screen = blessed.screen({
        smartCSR: true,
        title,
        cursor: {
            artificial: false,
            shape: 'block',
            blink: true,
            color: 'white'
        }
    })

    return screen
}
