'use strict;'

var assert = chai.assert;

describe('Deck', function(){
    var deck1;
    before(function() {
        deck1=Deck();
    });
    it(' should have 52 cards.', function(){
        assert.equal(numCards(deck1),52,'Deck has ' + deck1.length + ' cards.');
    });
    it('will return top card in deck without removing it.', function(){
        var cardOnTop = deck1.cards[deck1.cards.length-1];
        var cardOnTopFunc = topCard(deck1);
        assert.equal(cardOnTop,cardOnTopFunc,'Top cards not the same investigate further ' + cardOnTop + ' ' + cardOnTopFunc + '.');
    });
    it(' will be able to draw top card from deck.', function(){
        var cardOnTop = topCard(deck1);
        var drawnCard = drawCard(deck1);
        assert.equal(cardOnTop,drawnCard,'Top card and drawn card were not equal ' + cardOnTop + ' ' + drawnCard);
        assert.equal(numCards(deck1),51,"Number of cards in deck should have gone to 51 but it is actually " + numCards(deck) + '.');
    });
    it(' will validate when it is empty.', function(){
        assert.equal(isEmpty(deck1),false,'Deck incorrectly thinks it is empty.');
        while(numCards(deck1)>0){
            drawCard(deck1);
        }
        assert.equal(isEmpty(deck1),true,'Deck incorrectly think it is not empty.');
    });
});

describe('Container', function(){
    it(' should have a child div with class of Deck.', function(){
        assert.equal($('#container').children(':first').attr('class'),'deck','container\'s first element is not deck.');
    });
});

describe('Player hand', function(){
    var deck1;
    var playerHand1;
    before(function() { 
        deck1=Deck();
        deck1.shuffle();
        playerHand1= new Hand();
    });
    it(' should be empty.', function(){
        assert.equal(numCards(playerHand),0,'playerHand has cards within it.');
    });
    it(' will be able to add card to its hand.', function() {
        var top = topCard(deck1);
        var status = playerHand1.draw(deck1);
        
        assert.equal(topCard(playerHand1),top,"Player did not take card from top of deck.");
        assert.equal(status,true,'Draw card was not successful.');
        assert.equal(numCards(deck1),51,"Deck size did not reduce by card drawn");
        assert.notEqual(topCard(deck1),topCard(playerHand1),"Top card was not removed from deck for draw");
    });
    it(' will not be able to add card when deck is empty.', function () {
        var handCount = numCards(playerHand1);
        while(numCards(deck1)>0){
            drawCard(deck1);
        }
        var status = playerHand1.draw(deck1);

        assert.equal(status,false,'Draw occurred when it should not have.');
        assert.equal(numCards(deck1),0,"Deck is not empty as it should.");
        assert.equal(handCount,numCards(playerHand1),"Hand changed size after draw.");
        
    })
    it (' will be able to mount cards to the screen.', function(){
        playerHand1.mountHand(playerContainer,'front');
        assert.equal(numCards(playerHand1),$('#playerHand').children().length,"The number of cards aren't equal to the DOM.")
    })
});


describe('Dealer hand', function(){
    it(' should be empty.', function(){
        assert.equal(numCards(dealerHand),0,'delearHand has cards within it.');
    });
});