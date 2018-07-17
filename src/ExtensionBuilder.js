module.exports = class {

    constructor (extension) {
        this.extension = extension
        this.commands = []
    }

    command (name, handler) {
        let command = {
            name,
            handler: (...args) => {
                handler.apply(this.extension, args)
            }
        }

        this.commands.push(command)
    }
}
