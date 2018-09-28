export default class {
    constructor () {
        this.listeners = {}
    }

    register (name, listener) {
        if (!this.listeners[name]) this.listeners[name] = []

        this.listeners[name].push(listener)
    }

    emit (name, options = null) {
        if (!this.listeners[name]) return

        for (let handler of this.listeners[name]) {
            handler(options)
        }
    }
}
