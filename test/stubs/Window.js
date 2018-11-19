import sinon from 'sinon'
import Window from '../../src/Window'

export default {
    mock () {
        sinon.stub(Window.prototype, 'setup')
        sinon.stub(Window.prototype, 'logs').returns({ add: () => {} })
        sinon.stub(Window.prototype, 'bots').returns({ add: () => {} })
    }
}
