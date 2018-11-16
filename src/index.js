import Window from './Window'
import DiscordBot from './DiscordBot'
import { Extension } from '@blurple/extension'
import WebhookServer from './WebhookServer'

export default class {
    
    constructor () {
        this.bots = {}
    }

    async start (configuration) {
        let window = this.createWindow()
        window.logs.add('Welcome to blurple.js')
        window.logs.add('Read the documentation at https://blurple.js.org')
        window.logs.add()

        if (configuration.webhooks) {
            this.webhooks = new WebhookServer(configuration.webhooks.port)
            this.webhooks.handler = (req, res) => {
                for (let bot of Object.keys(this.bots)) {
                    this.bots[bot].handleWebhook(req, res)
                }
            }

            window.logs.add(`Webhook server started on *:${configuration.webhooks.port}`)
            this.webhooks.start()
        }

        // Iterate through all configured bots
        for (let name of Object.keys(configuration.blurple)) {
            let config = configuration.blurple[name]
        
            // Create a new discord client for the bot
            let bot = new DiscordBot(config.token, this.webhooks ? this.webhooks.app : null)
            bot.window = window.logs
            
            // Iterate through all extensions
            for (let extension of config.extensions) {
                try {
                    let Extension = require(process.cwd() + '/' + extension)
                    bot.addExtension(new Extension())
                } catch (e) {
                    window.logs.add(e)
                }
            }

            window.logs.add(`{inverse}${name}{/inverse} booted`)
            window.bots.add(`{bold}${name}{/bold}`)
        
            this.bots[name] = bot

            try {
                await bot.login()
            } catch (e) {
                // ...
            }
        }
    }

    shutdown () {
        for (let bot of Object.keys(this.bots)) {
            this.bots[bot].shutdown()
        }
    }

    createWindow () {
        let window = new Window()

        return window
    }

}
