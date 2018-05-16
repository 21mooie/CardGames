describe('Top card', function(){
    it(' is face down.', function(){
        assert.equal(deck.cards[deck.cards.length-1].side,'back','Top card is ' + deck.cards[0].side);
    });
});
