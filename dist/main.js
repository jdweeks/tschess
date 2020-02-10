"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultBoard_1 = require("./board/DefaultBoard");
var HumanPlayer_1 = require("./player/HumanPlayer");
var DefaultGame_1 = require("./game/DefaultGame");
var main = function () {
    var board = new DefaultBoard_1.default();
    var player1 = new HumanPlayer_1.default();
    var player2 = new HumanPlayer_1.default();
    var game = new DefaultGame_1.default(board, player1, player2);
    game.playTurn();
};
main();
//# sourceMappingURL=main.js.map