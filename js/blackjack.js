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

import { deck, playerHand, playerContainer, dealerHand, dealerContainer, mainDeckContainer, Hand,
    numCards, topCard, drawCard, isEmpty, addCardsToDeck, gameResult, setUpGameResult} from './prepareGame'

const maxHandSize = 5;
const maxHandVal = 21;

var inGame=true;
var gameOver=false;
var playerWin=false;

$(document).ready(function(){
    updateGameButtons(inGame);
    startGame(dealerHand, playerHand, dealerContainer, playerContainer, deck);
    gameStatus();
    checkValsAtGameStart(dealerHand,playerHand);
    

    $("#return-button").click(function (){  
        gameOver=true;
    });

    $('#container').click( function (){
        if(!gameOver){
            playerHand.draw(deck);
            playerHand.mountHand(playerContainer,'front');
            gameStatus();
            if (handVal(playerHand)>maxHandVal){
                gameOver=true;
                endGame('you busted.');
            }
            else if (handVal(playerHand)===maxHandVal){
                endGame();
            }
        }
    });
    
    $('#stay-button').click(function (){
        endGame();
    });

    $('#new-game-button').click(function (){
        gameOver = false;
        deck.unmount(mainDeckContainer);
        playerHand.unmountHand(playerContainer);
        dealerHand.unmountHand(dealerContainer);
        addCardsToDeck(deck,playerHand);
        addCardsToDeck(deck,dealerHand);
        deck.shuffle();
        deck.mount(mainDeckContainer);
        startGame(dealerHand, playerHand, dealerContainer, playerContainer,deck);
        playerHand.mountHand(playerContainer,'front');
        dealerHand.mountHand(dealerContainer,'front')
        gameStatus();
        updateGameButtons(inGame);
        checkValsAtGameStart(dealerHand,playerHand);
    })
});

function updateGameButtons(inGame){
    if (inGame){
        $('#new-game-button').hide();
        $('#stay-button').show();
    }
    else{
        $('#new-game-button').show();
        $('#stay-button').hide();
    }
}

function handVal(Hand){
    var handValue = 0;
    var aceCount = 0;
    Hand.cards.forEach(element => {
        if (element.rank==1){
            aceCount+=1;
        }
        handValue += cardVal(element.rank);
    });
    while (aceCount>0){
        if (handValue + 10 > maxHandVal){
            break;
        }
        handValue+=10;
        aceCount--;
    }
    return handValue;
}

function cardVal(valueOfCard){
    var val;
    switch(valueOfCard){
        case 11:
        case 12:   
        case 13:
            val = 10;
            break;
        default:
            val = valueOfCard;
            break;
    }    
    return val;
}

function gameStatus(){
    $('#gameInfo').html('Dealer hand is ' + handVal(dealerHand) + '.<br/>' + 'Your hand is ' + handVal(playerHand) + '.');
}

function endGame(reason){
    if (!gameOver){
        dealers_turn(dealerHand, playerHand, deck, dealerContainer);
        gameStatus();  
        if (handVal(dealerHand)<=maxHandVal){
            reason = 'Dealer has a better hand.';
        }
        else if (numCards(dealerHand)===maxHandSize){
            reason = 'Dealer has a five card hand.';
        }
        else{
            playerWin = true;
            if (handVal(dealerHand) > maxHandVal){
                reason = 'Dealer busted.'
            }
            else{
                reason = 'you have a better hand.';
            }
            
        }
    }
    gameOutput(reason, playerWin);
    updateGameButtons(!inGame);
}

function gameOutput(reason, winStatus){
    var status = winStatus ? 'win' : 'lose';
    $('#gameInfo').append('<br/>You ' + status + ' because ' + reason);
    return status;
}

function dealers_turn(dealerHand, playerHand, deck, dealerContainer){
    while (numCards(dealerHand) < maxHandSize && handVal(dealerHand) < handVal(playerHand)){
        dealerHand.draw(deck);
        dealerHand.mountHand(dealerContainer,'front');
    }

}

function startGame(dealerHand, playerHand, dealerContainer, playerContainer,deck){
    dealerHand.draw(deck);
    dealerHand.draw(deck);
    dealerHand.mountHand(dealerContainer,'front');
    playerHand.draw(deck);
    playerHand.draw(deck);
    playerHand.mountHand(playerContainer,'front');
    playerWin=false;
    
}

function checkValsAtGameStart(dealerHand,playerHand){
    if (handVal(dealerHand) === maxHandVal){
        gameOver=true;
        endGame('Dealer got blackjack.');
    }

    else if (handVal(playerHand) === maxHandVal){
        endGame();
    }
    return gameOver
}

export {startGame, checkValsAtGameStart, dealers_turn, gameOutput, endGame, gameStatus, 
    cardVal, handVal, updateGameButtons, maxHandSize, inGame, gameOver, playerWin}