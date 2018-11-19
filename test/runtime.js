import Runtime from '../src/index'
import Window from './stubs/Window'
import sinon from 'sinon'

describe('Runtime', function () {

    before(() => {
        Window.mock()
    })

    it('should boot up with an example configuration', function () {
        let runtime = new Runtime()

        runtime.start({ blurple: { bot: { extensions: [] } } })
        runtime.shutdown()
    })

})
