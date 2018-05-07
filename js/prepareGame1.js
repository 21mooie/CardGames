var deck1 = Deck();
    container = document.getElementById('container');
    playerContainer = document.getElementById('playerhand');
deck1.mount(container);


//add css to make the player's hand closer to the bottom 


var playerCards = [deck1.cards[0],deck1.cards[1]];
deck1.shuffle();

playerCards.forEach( function(cards,i) {
    cards.mount(playerContainer);
    cards.enableFlipping();
});
//.mount(playerContainer);

//firstCard.enableFlipping();
