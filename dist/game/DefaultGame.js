"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultGame = (function () {
    function DefaultGame(board, player1, player2) {
        this.board = board;
        this.player1 = player1;
        this.player2 = player2;
    }
    DefaultGame.prototype.loop = function () {
        this.board.print();
    };
    return DefaultGame;
}());
exports.default = DefaultGame;
//# sourceMappingURL=DefaultGame.js.map