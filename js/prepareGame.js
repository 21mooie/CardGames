

var suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
    values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight",
              "Seven", "Six", "Five", "Four", "Three", "Two"];
var deck = [];
    playerHand = [];
    dealerHand = [];
    gameOver  = true;


deck = initializeDeck(deck);




//functions 

function dealHand(deck,handlen){
    let hand = []
    for (let i=0;i<handlen;i++){
        hand.push(deck.shift());
    }
    return hand;
}


function newCard(suit,value){
    this.suit = suit,
    this.value = value
    this.toString = function(){
        return this.value + " of " + this.suit;
    }
};

function initializeDeck(deck){
    for (var i=0;i<suits.length;i++){
        for (var j=0;j<values.length;j++){
            var card = new newCard(suits[i],values[j])
            deck.push(card);
        }
    }
    return deck;
}

function shuffleDeck(deck){
    for (var i=0;i<deck.length;i++){
        var randomNumber =  Math.floor(Math.random()*deck.length);
        var temp = deck[i];
        deck[i] = deck[randomNumber];
        deck[randomNumber] = temp;
    }
}

function showDeck(deck){
    for (var i=0;i<deck.length;i++){
        console.log(deck[i])
    }
}

function drawCard(deck){
    return deck.shift();
}

function numCards(deck){
    return deck.length
}

