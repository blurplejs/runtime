module.exports = class Soup {
    register (bot) {
        bot.command('user', this.fish)
        this.whatami = 'noodlesoup'
    }

    fish () {
        console.log(`I am ${this.whatami}.`)
    }
}
