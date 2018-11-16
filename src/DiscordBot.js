import Discord from 'discord.js'
import BotCustomizer from './BotCustomizer'

export default class {

    constructor (token, express) {
        this.token = token
        this.client = new Discord.Client()
        this.extensions = []

        this.express = express
    }

    bindEvents () {
        this.client.on('message', this.onMessage.bind(this))
    }

    onMessage (message) {
        for (let extension of this.extensions) {
            for (let command of extension.commands) {
                command.call(message)
            }
        }
    }

    addExtension (extension) {
        let customizer = new BotCustomizer(extension, this.express)
        extension.register(customizer)

        this.extensions.push(customizer)
    }

    login () {
        this.bindEvents()

        return this.client.login(this.token)
    }

    shutdown () {
        this.client.destroy()
    }

}