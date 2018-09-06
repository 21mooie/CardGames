var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
// app.use("/css", express.static(__dirname));
app.use('/js', express.static(__dirname + '/dist/'));
// app.use('/dist/bundles',express.static(__dirname + '/dist/bundles'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/' + 'index.html'));
});

app.get('/blackjack.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/' + 'blackjack.html'));
});

app.get('/index.html', function (req,res){
    res.redirect('/');
})

app.listen(process.env.PORT || 8080, function(){
    console.log('The server is listening on port 8080.');
});