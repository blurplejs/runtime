import { isString } from '../lib/index'
import { expect } from 'chai'
import 'mocha'

describe('isString function', () => {

    it('should return true if the input is a trimmed string', () => {
        const result = isString('Hello')
        expect(result).to.be.true
    })

    it('should return false if the input is an untrimmed string', () => {
        const result = isString('Hello  ')
        expect(result).to.be.false
    })

    it('should return false if the input is not a string at all', () => {
        const result = isString(15)
        expect(result).to.be.false
    })

})