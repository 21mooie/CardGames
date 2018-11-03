'use strict;'

import Deck from 'deck-of-cards';

var deck = Deck();
var playerHand = new Hand();
var dealerHand = new Hand();
var mainDeckContainer = document.getElementById('container');
var playerContainer = document.getElementById('playerHand');
var dealerContainer = document.getElementById('dealerHand');
var gameResult = document.getElementById('gameResult');
var resultOfGame = document.createElement('div');

function setUpGameResult(statusBoolean) {
    resultOfGame.setAttribute('id','gameResult');
    document.body.appendChild(resultOfGame);
    showPlayerEndGameStatus(statusBoolean);
}

function showPlayerEndGameStatus(statusBoolean) {
    
    statusBoolean ? $('#gameResult').html('You Win!') : $('#gameResult').html('You Lose :(');
}

function resetGameResult(){
    resultOfGame.innerHTML = '';
}

function Hand(){
    this.cards = [];
    this.draw = function(Deck){
        if (isEmpty(Deck)){
            return false;
        }
        else{
            this.cards.push(drawCard(Deck));
            return true;
        }
    }

    this.mountHand = function(displayContainer,side){ 
        var count = 1;
        var length = this.cards.length;
        this.cards.forEach( function(card,err) {
            card.mount(displayContainer);
            card.setSide(side);
            card.enableDragging();
            card.animateTo({
                delay: 100 * 2, // wait 1 second + i * 2 ms
                duration: 500,
                x:  (count/ length) * window.innerWidth - window.innerWidth/2,
                
            });
            count+=1;
        });
    }
    this.unmountHand = function(displayContainer){
        this.cards.forEach( function(card,err) {
            card.unmount(displayContainer);
        })
    }
};

deck.mount(mainDeckContainer);
deck.shuffle();

function numCards(Deck) {return Deck.cards.length;}

function topCard(Deck) {return Deck.cards[numCards(Deck)-1];}

function drawCard(Deck) {return Deck.cards.pop();}

function isEmpty(Deck) {return numCards(Deck)===0;}

function addCardsToDeck(Deck, Hand){
    while (!isEmpty(Hand)){
        Deck.cards.push(drawCard(Hand));
    }
}


export { deck, playerHand, playerContainer, dealerHand, dealerContainer, mainDeckContainer, Hand,
            numCards, topCard, drawCard, isEmpty, addCardsToDeck, gameResult, resultOfGame, setUpGameResult, resetGameResult}
