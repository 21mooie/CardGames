var assert = chai.assert;
describe('UpdateGameButtons', function (){
    it(' should change on screen buttons once game starts.', function(){
        updateGameButtons(true);
        assert.equal($('#new-game-button').is(':hidden'),true,"New Game button is visible when it shouldn't be.");
        assert.equal($('#hit-button').is(':visible'),true,"Hit button is not visible when it should be.");
        assert.equal($('#stay-button').is(':visible'),true,"Stay button is not visible when it should be.");
    });

    it(' should change on screen buttons once game ends. ', function(){
        updateGameButtons(false);
        assert.equal($('#new-game-button').is(':visible'),true,"New Game button is visible when it shouldn't be.");
        assert.equal($('#hit-button').is(':hidden'),true,"Hit button is not visible when it should be.");
        assert.equal($('#stay-button').is(':hidden'),true,"Stay button is not visible when it should be.");
    })
});