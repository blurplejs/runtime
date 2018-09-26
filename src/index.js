import Window from './window'
import DiscordBot from './DiscordBot'
import { Extension } from '@blurple/extension'

export default function () {
    // Load configuration
    let blurple = require(process.cwd() + '/blurple')
    
    let window = new Window()
    window.screen.render()

    window.logs.add('Welcome to blurple.js')
    window.logs.add('Read the documentation at https://blurple.js.org')
    window.logs.add('')

    // Iterate through all configured bots
    for (let name of Object.keys(blurple)) {
        let config = blurple[name]
    
        // Create a new discord client for the bot
        let bot = new DiscordBot(config.token)
    
        // Iterate through all extensions
        for (let extension of config.extensions) {
            let Extension = require(process.cwd() + '/' + extension)
            bot.addExtension(new Extension())
        }

        window.logs.add(`{inverse}${name}{/inverse} booted`)
    
        bot.login()
    }
}
