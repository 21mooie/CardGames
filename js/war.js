/*


        WAR


*/

'use strict;'

const numStartingHand = numCards(deck)/numPlayers;

var numPlayers=2;


let textArea = document.getElementById('text-area');
    newGameButton = document.getElementById("new-game-button");
    drawButton = document.getElementById("draw-button");
    returnButton = document.getElementById("return-button");






shuffleDeck(deck);
playerHand = dealHand(deck,numStartingHand);
dealerHand = dealHand(deck,numStartingHand);  

//showDeck(playerHand);

newGameButton.addEventListener("click",function(){
    gameOver=false;
    showInGameButtons();
    gameStatus();
  });

drawButton.addEventListener("click", function(){
    var playerc = drawCard(playerHand);
    var dealerc = drawCard(dealHand);
    gameStatus();
})



function gameStatus(){
  textArea.innerText = 
  'Dealer has: ' +
  numCards(dealerHand) + 
  '.'+
  
  'Player has: ' +
  numCards(playerHand) + 
  '.';
//   if (gameOver){
//     //textArea.innerText += didPlayerWin() ? "You win!" : "Dealer wins :(";
//     if (didPlayerWin()){
//       textArea.innerText+="You win!";
//     }
//     else{
//       textArea.innerText+="Dealer wins :(";
//     }
//     showStartGameButtons();
//   }
}


function showInGameButtons(){
    drawButton.style.display="inline";
    newGameButton.style.display="none";
}


