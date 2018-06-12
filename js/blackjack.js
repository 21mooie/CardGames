/*

      B L A C K J A C K
        by Muata Nkosi



      Inherited vars:

      deck = object with 52 inner card objects
      card = object with suit & value
      gameOver = game status initialize as true
      playerHand = object holding player's cards
      dealerHand = object holding dealer's cards

      

*/

'use strict;'

const maxHandSize = 5;
      maxHandVal = 21;

var inGame=true;
    gameOver=false;

$(document).ready(function(){
    updateGameButtons(inGame);
    dealerHand.draw(deck);
    dealerHand.mountHand(dealerContainer,'front');
    dealerHand.draw(deck);
    dealerHand.mountHand(dealerContainer,'front');


    $("#return-button").click(function (){  
        gameOver=true;
    });

    $('#container').click( function (){
        playerHand.draw(deck);
        playerHand.mountHand(playerContainer,'front');
        console.log(handVal(playerHand));
    });




    
});

function updateGameButtons(inGame){
    if (inGame){
        $('#new-game-button').hide();
        // $('#hit-button').show();
        $('#stay-button').show();
    }
    else{
        $('#new-game-button').show();
        // $('#hit-button').hide();
        $('#stay-button').hide();
    }
}

function handVal(Hand){
    var handValue = 0;
    Hand.cards.forEach(element => {
        handValue += element.rank;
    });
    return handValue;
}