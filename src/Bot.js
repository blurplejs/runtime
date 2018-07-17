const ExtensionBuilder = require('./ExtensionBuilder')

module.exports = class {

    constructor () {
        
    }

    registerExtension (extension) {
        let builder = new ExtensionBuilder(extension)
        extension.register(builder)
        
        console.log(builder.commands[0].handler())
    }

}
