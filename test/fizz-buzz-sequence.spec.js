var expect = require('chai').expect;
var fizz = require('../fizz-buzz-sequence');

describe('sequence', function() {
    it('should return fizz, 4', function(done){
        expect(fizz(3,4)).to.eql(['fizz', 4]);
        done();
    });
    it('should return fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizz buzz', function(done){
        expect(fizz(3,15)).to.eql(['fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizz buzz']);
        done();
    });
});
