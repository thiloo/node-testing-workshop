'use strict';

var fizzBuzz = require('./fizz-buzz-number');

module.exports = function (from, to) {
    var sequence = [];

    for (var number = from; number <= to; number++) {
        sequence.push(fizzBuzz(number));
    }

    return sequence;
};