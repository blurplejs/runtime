import { Command, Webhook } from '@blurple/extension'

export default class {

    constructor (extension, express) {
        this.extension = extension
        this.express = express
        this.commands = []
    }

    command (signature) {
        let command = new Command(this.extension, signature)
        this.commands.push(command)

        return command
    }

    webhook (route, handler) {
        if (!this.express) return
        
        this.express.get(route, handler)
    }

}
