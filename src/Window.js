import blessed from 'blessed'

export default class {
    
    constructor () {
        this.setup()
    }

    setup () {
        this.screen = blessed.screen({
            smartCSR: true,
            title: 'blurple.js',
            cursor: { blink: true }
        })

        this.screen.key(['escape', 'q', 'C-c'], (ck, key) => {
            // TODO: Add confirm dialog
            return process.exit(0)
        })

        this.screen.key(['c'], (ck, key) => {
            this.commands.focus()
        })

        this._bots = blessed.list({
            width: '25%',
            height: '100%',
            tags: true,
            padding: 1,
            border: { type: 'line' },
            style: {
                fg: 'white'
            }
        })

        this._logs = blessed.log({
            left: '25%',
            width: '75%',
            height: '100%-3',
            tags: true,
            padding: 1,
            mouse: true,
            scrollable: true,
            border: { type: 'line' },
            style: {
                fg: 'white'
            }
        })

        // this.logs.on('click', (d) => {
        //     this.logs.add('Log clicked: ' + Date.now())
        // })

        this.commands = blessed.textbox({
            left: '25%',
            top: '100%-3',
            width: '75%',
            height: 3,
            padding: { left: 1, right: 1 },
            tags: true,
            inputOnFocus: true,
            border: { type: 'line' },
            style: {
                fg: 'white',
                focus: {
                    border: { fg: 'green' }
                }
            }
        })

        this.commands.on('submit', (e) => {
            this.logs().add(e)
            this.commands.clearValue()
            this.commands.focus()
        })

        let label = blessed.text({
            tags: true,
            left: 2,
            content: '{#7289da-fg}{bold}blurple{/bold}.js{/}',
            padding: { left: 1, right: 1 }
        })

        this.screen.append(this._bots)
        this.screen.append(this.commands)
        this.screen.append(this._logs)
        this.screen.append(label)
    }

    logs () { return this._logs }
    bots () { return this._bots }

}