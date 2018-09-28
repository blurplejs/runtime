import 'babel-polyfill'
import chai from 'chai'
import sinon from 'sinon'
import Runtime from '../src/index'

const should = chai.should()

describe('Runtime', function () {

    it('should boot up with an example configuration', function () {
        let runtime = new Runtime()

        runtime.start({ blurple: { bot: { extensions: [] } } })
        runtime.shutdown()
    })

})
