export default class {

    constructor (window) {
        this.window = window
        this.bots = []
    }

    add (name, bot) {
        this.bots[name] = bot
    }

}