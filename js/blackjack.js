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

    $("#return-button").click(function (){  
        gameOver=true;
        dealerHand=[];
        playerHand=[];
    });

    $('#container').click( function (){
        console.log('clicked deck');
        playerHand.draw(deck);
        playerHand.mountHand(playerContainer)
    });


    
});

function updateGameButtons(inGame){
    if (inGame){
        $('#new-game-button').hide();
        $('#hit-button').show();
        $('#stay-button').show();
    }
    else{
        $('#new-game-button').show();
        $('#hit-button').hide();
        $('#stay-button').hide();
    }
}