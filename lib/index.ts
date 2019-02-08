export function isString (str: any) : str is string {
    return typeof str === 'string' && str.trim() === str
}

// blurple.json
// - Specifies clients
// - Adds extensions to clients
// - Opens up a webserver (for hooks)

// Extensions
// - register()     instantiated
// - boot()         is ready

// Global express object
// Every DiscordClient is linked to a discord.js Client and a number of extensions
