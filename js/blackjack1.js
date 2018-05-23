/*

      B L A C K J A C K
        by Muata Nkosi



      Inherited vars:

      deck = array of 52 cards
      card = object with suit & value
      gameOver = game status initialize as true
      playerHand = array of player's hand
      

*/
'use strict;'

//Game CONSTS
const maxHandVal = 21;
      maxHandSize = 5;
      minHandSize = 2;
 
//DOM variables

$(document).ready(function(){

  //let textArea = document.getElementById('text-area');
  //    newGameButton = document.getElementById("new-game-button");
  //    hitButton = document.getElementById("hit-button");
  //    stayButton = document.getElementById("stay-button");
  //    returnButton = document.getElementById("return-button");

  //Game variables
  //let dealerHand = [];

  var playerOverBoard; 
  var dealerOverBoard;


  

  showStartGameButtons();

  // GAME DRIVERS
  $("#new-game-button").click(function (){
  //newGameButton.addEventListener("click",function(){
    gameOver=false;
    playerOverBoard = false;
    dealerOverBoard = false;
    dealerHand = [drawCard(deck)];
    playerHand = [drawCard(deck),drawCard(deck)];
    checkBlackjack(dealerHand,playerHand);
    showInGameButtons();
    gameStatus();
  });

  $("#return-button").click(function (){  
  //returnButton.addEventListener("click",function(){
    gameOver=true;
    dealerHand=[];
    playerHand=[];
  });

  // hitButton.addEventListener("click", function(){
  //   addCard(playerHand);
  //   playerOverBoard = checkOverBoard(playerHand,playerOverBoard);
  //   gameStatus();
  // });

  $("#hit-button").click(function (){
    addCard(playerHand);
    playerOverBoard = checkOverBoard(playerHand,playerOverBoard);
    gameStatus();
  });


  $("#stay-button").click(function (){
  //stayButton.addEventListener("click", function(){
    gameOver = true;
    dealersTurn();
    gameStatus();
  });

  function checkBlackjack(hand1,hand2){
    if (getScore(hand1)===maxHandVal || getScore(hand2===maxHandVal))
      gameOver=true;
  }

  function dealersTurn(){
    while (getScore(dealerHand)<getScore(playerHand) && numCards(dealerHand) < maxHandSize)
      addCard(dealerHand);
    console.log("this is dealers hand " + getScore(dealerHand));
    console.log("this is dealeroverboard before check " + dealerOverBoard);
    dealerOverBoard = checkOverBoard(dealerHand,dealerOverBoard);
    console.log("this is dealeroverboard after check " + dealerOverBoard);
  }


  function addCard(hand){
    hand.push(drawCard(deck))
  }

  function didPlayerWin(){
    console.log("this is dealeroverboard " + dealerOverBoard);
    if (playerOverBoard){
      console.log("here1");
      return false;
    }
    
    if (dealerOverBoard){
    console.log("here2");
      return true;
    }

    if(numCards(dealerHand) === maxHandSize){
    console.log("here3");
      return false;
    }

    if (getScore(dealerHand) === maxHandVal && numCards(dealerHand) === minHandSize)
      return false;

    if (getScore(playerHand) === maxHandVal && numCards(dealerHand) === minHandSize)
      return true;

    if(getScore(dealerHand)>=getScore(playerHand)){
    console.log("here4");
      return false;
    }
    console.log("here5");
  }

  function checkOverBoard(hand,overBoard){
    if(getScore(hand)>maxHandVal){
      gameOver = true;
      overBoard = true;
    }
    console.log("this is overboard during check " + overBoard);
    return overBoard;
  }

  //could be put in prepareGame
  function showHand(hand){
    var text = "";
    for (let i=0;i<hand.length;i++){
        text += hand[i].toString();
        if (i<hand.length-1)
          text += "\n";  
    }
    return text;
  }

  function gameStatus(){
    $("#text-area").html(
    //textArea.innerText = 
    'Dealer has:\n' +
    showHand(dealerHand) + '\n\n' +
    '(score: ' + getScore(dealerHand) + ')\n\n' +
    
    'Player has:\n' +
    showHand(playerHand) + '\n' +
    '(score: ' + getScore(playerHand) + ')\n\n');
    if (gameOver){
      //textArea.innerText += didPlayerWin() ? "You win!" : "Dealer wins :(";
      if (didPlayerWin()){
        $("#text-area").append("You win!");
        //textArea.innerText+="You win!";
      }
      else{
        $("#text-area").append("Dealer wins :(");
        //textArea.innerText+="Dealer wins :(";
      }
      showStartGameButtons();
    }
  }

  function showStartGameButtons(){
    //hitButton.style.display = "none";
    $("#hit-button").hide();
    $("#stay-button").hide();
    //stayButton.style.display="none";
    $("#new-game-button").show();
    //newGameButton.style.display="inline";
    while (playerHand.length>0){
      deck.push(playerHand.shift());
    }
    while (dealerHand.length>0){
      deck.push(dealerHand.shift());
    }
    shuffleDeck(deck);
    //console.log("number of cards in deck " + numCards(deck));
  }

  function showInGameButtons(){
    //hitButton.style.display="inline";
    $("#hit-button").show();
    $("#stay-button").show();
    //stayButton.style.display="inline";
    $("#new-game-button").hide();
    //newGameButton.style.display="none";
  }

  function getScore(hand){
    let score = 0;
        aceCount = 0;
    for (let i = 0;i<hand.length;i++){
      if (hand[i].value==='Ace')
        aceCount+=1;
      
      score+=getCardNumericValue(hand[i]); 
    }
    for (let j=0;j<aceCount;j++){
      if (score < maxHandVal-10){
        aceCount-=1;
        score+=10;
      }
    }
    return score;
  }

  function getCardNumericValue(card){
    //change to get index for value
    switch(card.value){
      case 'Ace':
        return 1;
      case 'Two':
        return 2;
      case 'Three':
        return 3;
      case 'Four':
        return 4;
      case 'Five':
        return 5;
      case 'Six':
        return 6;
      case 'Seven':
        return 7;
      case 'Eight':
        return 8;
      case 'Nine':
        return 9;
      case 'Ten':
      case 'Jack':
      case 'Queen':
      case 'King':
        return 10;
      default:
        console.error("There is an error calculating value of card " + card.toString());          
    }
  }

});
