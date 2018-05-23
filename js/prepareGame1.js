'use strict;'

var deck1 = Deck();
    //container = $("#container");
    container = document.getElementById('container');
    playerContainer = document.getElementById('playerHand');
    dealerContainer = document.getElementById('dealerHand')
deck1.mount(container);

deck1.shuffle();
var playerHand = [deck1.cards.pop(),deck1.cards.pop()];

var dealerHand = [deck1.cards.pop(),deck1.cards.pop()];

playerHand.forEach( function(cards,i) {
    cards.enableDragging();
    cards.mount(playerContainer);
    
    cards.setSide('front');
});

dealerHand.forEach( function(cards,i) {
    // cards.enableFlipping();
    cards.enableDragging();
    cards.mount(dealerContainer);
});
dealerHand[0].setSide('front');


container.addEventListener('click', function(){
    console.log("hi i clicked the deck");
    var x = deck1.cards.pop();
    playerHand.push(x);
    x.mount(playerContainer)
    x.enableDragging();
    x.setSide('front');
});
