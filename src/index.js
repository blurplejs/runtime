import Window from './window'
import DiscordBot from './DiscordBot'
import { Extension } from '@blurple/extension'
import WebhookServer from './WebhookServer'

export default class {
    
    constructor () {
        this.bots = {}
    }

    configuration () {
        let config = {}
        config.blurple = require(process.cwd() + '/blurple')

        try {
            config.webhooks = require(process.cwd() + '/webhooks')
        } catch (e) {}

        return config
    }

    start () {
        let loadedConfig = this.configuration()

        let window = this.createWindow()
        window.logs.add('Welcome to blurple.js')
        window.logs.add('Read the documentation at https://blurple.js.org')
        window.logs.add()

        if (loadedConfig.webhooks) {
            this.webhooks = new WebhookServer(loadedConfig.webhooks.port)
            this.webhooks.handler = (req, res) => {
                window.logs.add(req.params)
                res.send('Hello')
            }

            this.webhooks.start()
        }

        // Iterate through all configured bots
        for (let name of Object.keys(loadedConfig.blurple)) {
            let config = loadedConfig.blurple[name]
        
            // Create a new discord client for the bot
            let bot = new DiscordBot(config.token)
            
            // Iterate through all extensions
            for (let extension of config.extensions) {
                let Extension = require(process.cwd() + '/' + extension)
                bot.addExtension(new Extension())
            }

            window.logs.add(`{inverse}${name}{/inverse} booted`)
            window.bots.add(`{bold}${name}{/bold}`)
        
            this.bots[name] = bot
            bot.login()
        }
    }

    createWindow () {
        let window = new Window()
        window.screen.render()

        return window
    }

}
