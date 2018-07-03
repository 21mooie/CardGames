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
    playerWin=false;

$(document).ready(function(){
    updateGameButtons(inGame);
    startGame();
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
        // var hands = [playerHand,dealerHand];
        // var containers = [playerContainer,dealerContainer]
        // addCardsToDeck(deck,hands,containers);
        deck.unmount(mainDeckContainer);
        playerHand.unmountHand(playerContainer);
        dealerHand.unmountHand(dealerContainer);
        while (!isEmpty(playerHand)){
            deck.cards.push(drawCard(playerHand));
        }
        
        while (!isEmpty(dealerHand)){
            deck.cards.push(drawCard(dealerHand));
        }
        deck.shuffle();
        deck.mount(mainDeckContainer);
        
           
        startGame();
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
        dealers_turn();
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
    gameOutput(reason);
    updateGameButtons(!inGame);
}

function gameOutput(reason){
    var status = playerWin ? 'win' : 'lose';
    $('#gameInfo').append('<br/>You ' + status + ' because ' + reason);
}

function dealers_turn(){
    while (numCards(dealerHand) < maxHandSize && handVal(dealerHand) < handVal(playerHand)){
        dealerHand.draw(deck);
        dealerHand.mountHand(dealerContainer,'front');
    }

}

function startGame(){
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