"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pawn_1 = require("../piece/Pawn");
var Side_1 = require("../game/Side");
var readline = require("readline");
var DefaultGame = (function () {
    function DefaultGame(board, player1, player2) {
        this.side = Side_1.Side.LIGHT;
        this.board = board;
        this.player1 = player1;
        this.player2 = player2;
        this.reader = readline.createInterface({ input: process.stdin, output: process.stdout });
    }
    DefaultGame.prototype.parseAlgebraic = function (move) {
        var fromTo = [];
        var len = move.length;
        switch (len) {
            case 2:
                var index = this.board.positionMap[move];
                var oneBack = this.side ? index - 8 : index + 8;
                var twoBack = this.side ? index - 16 : index + 16;
                var piece = this.board.positions[oneBack].piece;
                if (piece instanceof Pawn_1.default) {
                    fromTo.push(oneBack);
                }
                else {
                    fromTo.push(twoBack);
                }
                fromTo.push(index);
                return fromTo;
            case 3:
            case 4:
            case 5:
            default:
                console.log('Move is not valid');
        }
        return fromTo;
    };
    DefaultGame.prototype.playTurn = function () {
        var _this = this;
        this.board.print();
        this.reader.question('Enter move: ', function (move) {
            var fromTo = _this.parseAlgebraic(move);
            var valid = _this.board.move(fromTo[0], fromTo[1]);
            if (!valid) {
                console.log('Move is not valid');
            }
            else {
                _this.switchSide();
                _this.playTurn();
            }
        });
    };
    DefaultGame.prototype.switchSide = function () {
        if (this.side) {
            this.side = Side_1.Side.LIGHT;
        }
        else {
            this.side = Side_1.Side.DARK;
        }
    };
    return DefaultGame;
}());
exports.default = DefaultGame;
//# sourceMappingURL=DefaultGame.js.map