'use strict;'
import { deck, playerHand, playerContainer, dealerHand, dealerContainer, mainDeckContainer, Hand,
    numCards, topCard, drawCard, isEmpty, addCardsToDeck} from './prepareGame'
    
var card;
for (let i=0;i<numCards(deck);i++){
    card = deck.cards[i];
    if (i<numCards(deck)-1){ //notTopCard
        card.setSide(Math.random() < 0.5 ? 'front' : 'back');
    }
    
    card.enableFlipping();
    card.enableDragging();

    // explode
    card.animateTo({
        delay: 1000 + i * 2, // wait 1 second + i * 2 ms
        duration: 500,
        ease: 'quartOut',

        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2
    });
};