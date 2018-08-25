'use strict;'

var assert = chai.assert;
describe('Top card', function(){
    it(' is face down.', function(){
        assert.equal(topCard(deck).side,'back','Top card\'s side is ' + topCard(deck).side);
    });
});
