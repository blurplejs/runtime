import Window from './Window'
import DiscordBot from './DiscordBot'
import { Extension } from '@blurple/extension'
import WebhookServer from './WebhookServer'

export default class {
    
    constructor () {
        this.bots = {}
    }

    async start (configuration) {
        // let window = this.createWindow()
        // window.logs.add('Welcome to blurple.js')
        // window.logs.add('Read the documentation at https://blurple.js.org')
        // window.logs.add()

        if (configuration.webhooks) {
            this.webhooks = new WebhookServer(configuration.webhooks.port)
            this.webhooks.handler = (req, res) => {
            //     window.logs.add(req.params)
                res.send('Hello')
            }

            this.webhooks.start()
        }

        // Iterate through all configured bots
        for (let name of Object.keys(configuration.blurple)) {
            let config = configuration.blurple[name]
        
            // Create a new discord client for the bot
            let bot = new DiscordBot(config.token)
            
            // Iterate through all extensions
            for (let extension of config.extensions) {
                let Extension = require(process.cwd() + '/' + extension)
                bot.addExtension(new Extension())
            }

            // window.logs.add(`{inverse}${name}{/inverse} booted`)
            // window.bots.add(`{bold}${name}{/bold}`)
        
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
