var deck1 = Deck();
    $container = document.getElementById('container');
deck1.mount($container);
//deck1.shuffle();

//$(document.ready(function()
//))

//could use this for index page 
deck1.cards.forEach(function (card, i) {
    card.setSide(Math.random() < 0.5 ? 'front' : 'back');
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
});
