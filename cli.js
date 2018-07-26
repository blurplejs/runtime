#!/usr/bin/env node

const DiscordBot = require('./src/DiscordBot')

// Load configuration
let blurple = require(process.cwd() + '/blurple')

// Iterate through all configured bots
for (let name of Object.keys(blurple)) {
    let config = blurple[name]

    // Create a new discord client for the bot
    let bot = new DiscordBot(config.token)

    // Iterate through all extensions
    for (let extension of config.extensions) {
        let Extension = require(extension)
        bot.addExtension(new Extension())
    }

    bot.login()
}

console.log('Welcome to blurple.js')
console.log('Read the documentation at https://blurple.js.org')

