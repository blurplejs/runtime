const Command = require('@blurple/extension').Command

module.exports = class {

    constructor (extension) {
        this.extension = extension
        this.commands = []
    }

    command (signature) {
        let command = new Command(this.extension, signature)

        this.commands.push(command)

        return command
    }

}
