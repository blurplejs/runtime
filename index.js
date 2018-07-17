const Bot = require('./src/Bot')
const Extension = require('./src/Extension')

let bot = new Bot()

let ext = new Extension()
bot.registerExtension(ext)
