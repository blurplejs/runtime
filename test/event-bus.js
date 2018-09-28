import chai from 'chai'
import spies from 'chai-spies'
import EventBus from '../src/EventBus'

chai.use(spies)

const should = chai.should()

describe('Event Bus', function () {

    it('should accept event subscriptions', function () {
        let bus = new EventBus()

        bus.register('event', function () { })
    })

    it('should be able to emit events', function () {
        let bus = new EventBus()

        bus.emit('event')
    })

    it('should call its listeners', function () {
        let bus = new EventBus()

        let listenerA = chai.spy(function () {})
        let listenerB = chai.spy(function () {})

        bus.register('event', listenerA)
        bus.register('event', listenerB)

        bus.emit('event')

        listenerA.should.have.been.called.once
        listenerB.should.have.been.called.once
    })

    it('should pass emitted options to its listeners', function () {
        let bus = new EventBus()

        let listener = chai.spy(function () {})

        bus.register('event', listener)
        bus.emit('event', 'hello')

        listener.should.have.been.called.with('hello')
    })

})
