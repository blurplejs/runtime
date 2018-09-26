import blessed from 'blessed'

export default class {
    
    constructor () {
        this.screen = blessed.screen({
            smartCSR: true,
            title: 'blurple.js',
            cursor: { blink: true }
        })

        this.bots = blessed.list({
            width: '25%',
            height: '100%',
            tags: true,
            padding: 1,
            border: { type: 'line' },
            style: {
                fg: 'white'
            }
        })

        this.logs = blessed.log({
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

        this.logs.on('click', (d) => {
            this.logs.add('Log clicked: ' + Date.now())
            this.logs.focus()
        })

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
            this.logs.add(e)
            this.commands.clearValue()
            this.commands.focus()
        })

        let label = blessed.text({
            tags: true,
            left: 2,
            content: '{#7289da-fg}{bold}blurple{/bold}.js{/}',
            padding: { left: 1, right: 1 }
        })

        this.screen.key(['escape', 'q', 'C-c'], (ck, key) => {
            return process.exit(0)
        })

        this.screen.key(['c'], (ck, key) => {
            this.commands.focus()
        })

        this.screen.append(this.bots)
        this.screen.append(this.commands)
        this.screen.append(this.logs)
        this.screen.append(label)
    }

}