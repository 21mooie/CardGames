var card;
for (let i=0;i<deck.cards.length;i++){
    card = deck.cards[i];
    //console.log(i + " " + card.suit + " " + card.rank);
    if (i<deck.cards.length-1){
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