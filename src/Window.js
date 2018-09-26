import blessed from 'blessed'

export default class {
    
    constructor () {
        this.screen = blessed.screen({
            smartCSR: true,
            title: 'blurple.js'
        })

        this.botList = blessed.box({
            width: '25%',
            height: '100%',
            content: 'Hello {bold}world{/bold}!',
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

        this.commands = blessed.box({
            left: '25%',
            top: '100%-3',
            width: '75%',
            height: 3,
            padding: { left: 1, right: 1 },
            content: 'Hello {bold}world{/bold}!',
            tags: true,
            border: { type: 'line' },
            style: {
                fg: 'white'
            }
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

        this.screen.append(this.botList)
        this.screen.append(this.commands)
        this.screen.append(this.logs)
        this.screen.append(label)
    }

}