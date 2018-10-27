'use strict;'

import {startGame, checkValsAtGameStart, dealers_turn, gameOutput, 
    endGame, gameStatus, cardVal, handVal, updateGameButtons} from '../../js/blackjack'
import { deck, playerHand, playerContainer, dealerHand, dealerContainer, mainDeckContainer, Hand,
    numCards, topCard, drawCard, isEmpty, addCardsToDeck} from '../../js/prepareGame'
import '../../js/blackjack.js'

var assert = chai.assert;
describe('Start Game', function() {
    var hand1;
    var hand2;
    var deck1;
    var hand1Div;
    var hand1Container;
    var hand2Div;
    var hand2Container;
    before(function(){
        hand1 = new Hand();
        hand2 = new Hand();
        deck1 = new Deck();
        deck1.shuffle();
        hand1Div = document.createElement("div");
        hand1Div.setAttribute("id","container1");
        document.body.appendChild(hand1Div);
        hand1Container = document.getElementById("container1");
        hand2Div = document.createElement("div");
        hand2Div.setAttribute("id","container2");
        document.body.appendChild(hand2Div);
        hand2Container = document.getElementById("container2");
    })
    it('should start the game appropriately.', function(){
        startGame(hand1, hand2, hand1Container, hand2Container, deck1);
        assert.equal(numCards(hand1),numCards(hand2),'The hands have an uneven number of cards.');
        assert.equal(numCards(deck1),48,'The deck has ' + numCards(deck1) + '.');
    })
    it('should make the dealer draw cards.', function() {
        dealers_turn(hand2, hand1, deck1, hand2Container);
        assert.isAtLeast(handVal(hand2),handVal(hand1),'Dealer\'s hand is ' + 
            handVal(hand2) + '. Player\'s hand value is ' + handVal(hand1) + '.'); 
        assert.isAtMost(numCards(hand2),5,'Dealer has ' + numCards(hand2) + ' cards.');
    }) 
    it('should test that the status output is correct.', function(){
        assert.equal('win',gameOutput('win reason',true), 'Output says lose when it should be win.');
        assert.equal('lose',gameOutput('win reason',false), 'Output says win when it should be lose.');
    })

    it('should test end game conditions.', function() {
        endGame('')
        assert.equal($('#new-game-button').is(':visible'),true,"New Game button is not visible when it should be.");
        assert.equal($('#stay-button').is(':hidden'),true,"Stay button is not hidden when it should be.");
    })
})


describe('UpdateGameButtons', function (){
    it(' should change on screen buttons once game starts.', function(){
        updateGameButtons(true);
        assert.equal($('#new-game-button').is(':hidden'),true,"New Game button is not hidden when it should be.");
        assert.equal($('#stay-button').is(':visible'),true,"Stay button is not visible when it should be.");
    });

    it(' should change on screen buttons once game ends. ', function(){
        updateGameButtons(false);
        assert.equal($('#new-game-button').is(':visible'),true,"New Game button isn't visible when it should be.");
        assert.equal($('#stay-button').is(':hidden'),true,"Stay button is visible when it should be.");
    })
});

describe('handVal ', function (){
    var hand;
    var deck;
    before(function(){
        hand = new Hand();
        deck = new Deck();
    })
    it('should return 0 when hand is empty.', function(){
        assert.equal(handVal(hand),0,'The hand value is returning an erroneous value of ' + handVal(hand) + ' when the hand is empty.');
    })
    it('should return the correct value when added to it.', function(){
        hand.draw(deck);
        assert.isAtMost(handVal(hand), hand.cards[0].rank,'The value of the hand ' + handVal(hand) + ' and the value of the card ' + hand.cards[0].rank + ' are equal.');
    })
});

describe('cardVal ', function(){
    var hand;
    var card = {};
    before(function(){
        card.rank = 11;
        hand = new Hand();
    })
    it('should calculate the proper value of this card given this hand.', function(){
        assert.equal(cardVal(card.rank), 10, 'The value of this card is ' + card.rank + ' but it should be 10.');
        
    })
})

describe('Hands ', function(){
    var Deck = {};
    var dealerHand = new Hand();
    var hand2 = {cards:[]};
    before(function(){
        
        Deck.cards = [
            {rank : 1},
            {rank : 10},
        ];
        
        dealerHand.draw(Deck);
        dealerHand.draw(Deck);
        
    })
    it('are checked for blackjack.', function(){
        assert.equal(false,checkValsAtGameStart(hand2, dealerHand),'Game is over when it shouldn\'t be.');
        assert.equal(true,checkValsAtGameStart(dealerHand,hand2),'Game is not over when it should be.');
        //test case where Game is over when it should be
        
    })
})

