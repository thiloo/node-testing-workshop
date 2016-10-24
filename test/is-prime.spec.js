'use strict';

var expect = require('chai').expect;
var isPrime = require('../is-prime');

describe('isPrime', function () {
    it('should return true for 3', function (done) {
        // arrange
        var value = 3;

        // act
        var result = isPrime(value);

        // assert
        expect(result).to.be.true;

        done();
    });

    it('should return false for 4', function (done) {
        expect(isPrime(4)).to.be.false;
        done();
    });
});