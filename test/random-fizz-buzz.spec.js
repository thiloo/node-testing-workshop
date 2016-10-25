var expect = require('chai').expect;
var rewire = require('rewire');
var fizz = rewire('../random-fizz-buzz');


var mockWord = function(callback) {
    callback(null, 'test');
};

// or equally ok
// var request = function(url, options, callback) {
//     callback(null, {body:'test'});
// };

fizz.__set__("getRandomWord", mockWord);

describe('random word', function() {
    it('should return test for 15', function(done) {
        fizz(15, function(err, result) {
            expect(err).to.be.null;
            expect(result).to.equal('test');
            done();
        });
    });
    it('should return fizz for 3', function(done) {
        fizz(3, function(err, result) {
            expect(err).to.be.null;
            expect(result).to.equal('fizz');
            done();
        });
    });
    it('should return 4 for 4', function(done) {
        fizz(4, function(err, result) {
            expect(err).to.be.null;
            expect(result).to.equal(4);
            done();
        });
    });
    it('should return error for abc', function(done) {
        fizz('abc', function(err, result) {
            expect(err).to.not.be.null;
            expect(result).to.equal(undefined);
            done();
        });
    });
});
