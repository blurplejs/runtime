# Adding commands
```js
register (bot) {
    bot.command('users', this.getAllUsers)
    bot.command('roles [username]', this.getRoles)
}
```