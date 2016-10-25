var expect = require('chai').expect;
var fizz = require('../fizz-buzz-number');

describe('fizz', function() {
    it('should return fizz for 3', function(done) {
        var value = 3;
        var result = fizz(value);
        expect(result).to.be.fizz;
        done();
    });

    it('should return buzz for 5', function(done) {
        expect(fizz(5)).to.be.buzz;
        done();
    });

    it('should return fizz buzz for 15', function(done) {
        expect(fizz(15)).to.equal('fizz buzz');
        done();
    });

    it('should return 4 for 4', function(done) {
        expect(fizz(4)).to.equal(4);
        done();
    });

    it('should return Please provide a number less or equal 50 for 55', function(done) {
        expect(fizz(55)).to.have.property('message', 'Please provide a number less or equal 50');
        done();
    });

    it('should throw error for abc', function(done) {
        function invalidFizz() {
            fizz('abc');
        }
        expect(invalidFizz).to.throw(Error, /Invalid parameter/);
        done();
    });
});
