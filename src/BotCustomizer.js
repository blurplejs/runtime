import { Command, Webhook } from '@blurple/extension'

export default class {

    constructor (extension) {
        this.extension = extension
        this.commands = []
        this.webhooks = []
    }

    command (signature) {
        let command = new Command(this.extension, signature)
        this.commands.push(command)

        return command
    }

    webhook (route) {
        let webhook = new Webhook(this.extension, route)
        this.webhooks.push(webhook)

        return webhook
    }

}
