import * as Discord from 'discord.js'
import Extension from './Extension'
import Logger from './Logger';

type ExtensionConstructor = new (bot: Bot, logger: Logger) => Extension

export default class Bot {

    protected extensions: Extension[] = []

    constructor (protected client: Discord.Client) {
        this.client.on('ready', this.onReady)
    }

    protected onReady () : void {
        this.extensions.forEach((extension) => extension.boot())
    }

    addExtension (ExtensionClass: ExtensionConstructor) : this {
        let extension = new ExtensionClass(this, new Logger())
        extension._callRegister()

        this.extensions.push(extension)

        return this
    }

}
