import { FakeDiscordServer } from '@blurple/tests'
import 'mocha'

let server: FakeDiscordServer

before(async () => {
    server = new FakeDiscordServer()
    server.bindStubs()
    server.start()
})

after(async () => {
    server.unbindStubs()
})
