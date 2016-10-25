var expect = require('chai').expect;
var fizz = require('../fizz-buzz-callback');

describe('callback', function() {
    it('should call callback without error and fizz for 3', function(done) {
        fizz(3, function(err, result) {
            expect(err).to.be.null;
            expect(result).to.equal('fizz');
            done();
        });
    });
    it('should return error', function(done) {
        fizz('invalid', function(err) {
            expect(err).to.be.not.null;
            done();
        });
    });
});
