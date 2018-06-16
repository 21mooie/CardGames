'use strict;'

var deck = Deck();
    playerHand = new Hand();
    dealerHand = new Hand();
    mainDeckContainer = document.getElementById('container');
    playerContainer = document.getElementById('playerHand');
    dealerContainer = document.getElementById('dealerHand');

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
                // x:  (count / 10) * window.innerWidth - window.innerWidth / 2,
                x:  (count/ length) * window.innerWidth - window.innerWidth/2,
                
            });
            console.log(window.innerWidth);
            count+=1;
        });
    }
};

deck.mount(container);
deck.shuffle();

function numCards(Deck) {return Deck.cards.length;}

function topCard(Deck) {return Deck.cards[numCards(Deck)-1];}

function drawCard(Deck) {return Deck.cards.pop();}

function isEmpty(Deck) {return numCards(Deck)===0;}




