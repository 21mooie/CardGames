var assert = chai.assert;

describe('Deck', function(){
    it(' should have 52 cards.', function(){
        assert.equal(deck.cards.length,52,'Deck has ' + deck.length + ' cards.');
    });
});

describe('Container', function(){
    it(' should have a child div with class of Deck.', function(){
        assert.equal($('#container').children(':first').attr('class'),'deck','container\'s first element is not deck.');
    });
});

describe('Player hand', function(){
    it(' should be empty.', function(){
        assert.equal(playerHand.length,0,'playerHand has cards within it.');
    });
});


describe('Dealer hand', function(){
    it(' should be empty.', function(){
        assert.equal(dealerHand.length,0,'delearHand has cards within it.');
    });
});