var deck = Deck();
    playerHand = new Hand();
    dealerHand = new Hand();
    container = document.getElementById('container');

function Hand(){
    this.cards = [];
    this.draw = personDraws;
};

deck.mount(container);
deck.shuffle();

function numCards(Deck) {return Deck.cards.length;}

function topCard(Deck) {return Deck.cards[numCards(Deck)-1];}

function drawCard(Deck) {return Deck.cards.pop();}

function isEmpty(Deck) {return numCards(Deck)===0;}

function personDraws(Deck){
    if (isEmpty(Deck)){
        return false;
    }
    else{
        this.cards.push(drawCard(Deck));
        return true;
    }
};




