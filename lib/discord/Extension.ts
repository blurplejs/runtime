import Bot from './Bot'
import Logger from './Logger'

export default abstract class Extension {
    
    /**
     * Whether
     * @type boolean
     */
    private registered: boolean = false


    /**
     * Creates an instance of extension.
     * @param bot The Bot instance this extension relates to
     */
    constructor (protected bot: Bot, protected logger: Logger) {

    }

    /**
     * Registers this function once
     * @returns true if extension was registered, false if it was already registered before
     */
    _callRegister () : boolean {
        if (this.registered) return false

        this.register()
        this.registered = true
        
        return this.registered
    }

    /**
     * The register method is called once the extension was added to a Bot instance.
     * You can use this function to set up command listeners and the like.
     */
    abstract register () : void

    /**
     * The boot method is called once the Bot instance's Discord Client emits its "ready" event
     * and is ready to be used. Use this function to perform any setup steps that require
     * data from the Discord client
     */
    boot () : void {
        
    }
    
}
