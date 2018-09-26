import { Command } from '@blurple/extension'

export default class {

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
