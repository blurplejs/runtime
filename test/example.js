var assert = require('assert')
var expect = require('chai').expect
var should = require('chai').should()

describe('Example Mocha Test', function () {

    it('should return the number of characters in a string', function () {
        'Hello'.length.should.equal(5)
    })

    it('should return the first character of the string', function () {
        'Hello'.charAt(0).should.equal('H')
    })
})
