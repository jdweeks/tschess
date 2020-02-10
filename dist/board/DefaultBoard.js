"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultPosition_1 = require("../position/DefaultPosition");
var Column_1 = require("../position/Column");
var Empty_1 = require("../piece/Empty");
var Pawn_1 = require("../piece/Pawn");
var Rook_1 = require("../piece/Rook");
var Knight_1 = require("../piece/Knight");
var Bishop_1 = require("../piece/Bishop");
var King_1 = require("../piece/King");
var Queen_1 = require("../piece/Queen");
var DefaultBoard = (function () {
    function DefaultBoard() {
        this.positions = [];
        this.init();
    }
    DefaultBoard.prototype.init = function () {
        var range = [1, 2, 3, 4, 5, 6, 7, 8];
        this.positions.push(new DefaultPosition_1.default(8, Column_1.Column.a, new Rook_1.default(false)));
        this.positions.push(new DefaultPosition_1.default(8, Column_1.Column.b, new Knight_1.default(false)));
        this.positions.push(new DefaultPosition_1.default(8, Column_1.Column.c, new Bishop_1.default(false)));
        this.positions.push(new DefaultPosition_1.default(8, Column_1.Column.d, new Queen_1.default(false)));
        this.positions.push(new DefaultPosition_1.default(8, Column_1.Column.d, new King_1.default(false)));
        this.positions.push(new DefaultPosition_1.default(8, Column_1.Column.c, new Bishop_1.default(false)));
        this.positions.push(new DefaultPosition_1.default(8, Column_1.Column.b, new Knight_1.default(false)));
        this.positions.push(new DefaultPosition_1.default(8, Column_1.Column.a, new Rook_1.default(false)));
        for (var _i = 0, range_1 = range; _i < range_1.length; _i++) {
            var col = range_1[_i];
            this.positions.push(new DefaultPosition_1.default(7, col, new Pawn_1.default(false)));
        }
        for (var _a = 0, _b = range.slice(2, 6).reverse(); _a < _b.length; _a++) {
            var row = _b[_a];
            for (var _c = 0, range_2 = range; _c < range_2.length; _c++) {
                var col = range_2[_c];
                this.positions.push(new DefaultPosition_1.default(row, col, new Empty_1.default()));
            }
        }
        for (var _d = 0, range_3 = range; _d < range_3.length; _d++) {
            var col = range_3[_d];
            this.positions.push(new DefaultPosition_1.default(2, col, new Pawn_1.default(true)));
        }
        this.positions.push(new DefaultPosition_1.default(1, Column_1.Column.a, new Rook_1.default(true)));
        this.positions.push(new DefaultPosition_1.default(1, Column_1.Column.b, new Knight_1.default(true)));
        this.positions.push(new DefaultPosition_1.default(1, Column_1.Column.c, new Bishop_1.default(true)));
        this.positions.push(new DefaultPosition_1.default(1, Column_1.Column.d, new Queen_1.default(true)));
        this.positions.push(new DefaultPosition_1.default(1, Column_1.Column.d, new King_1.default(true)));
        this.positions.push(new DefaultPosition_1.default(1, Column_1.Column.c, new Bishop_1.default(true)));
        this.positions.push(new DefaultPosition_1.default(1, Column_1.Column.b, new Knight_1.default(true)));
        this.positions.push(new DefaultPosition_1.default(1, Column_1.Column.a, new Rook_1.default(true)));
    };
    DefaultBoard.prototype.print = function () {
        var count = 0;
        console.log('');
        for (var col in Column_1.Column) {
            if (isNaN(Number(col))) {
                process.stdout.write(col + ' ');
            }
        }
        console.log('\n');
        for (var _i = 0, _a = this.positions; _i < _a.length; _i++) {
            var pos = _a[_i];
            pos.print();
            count++;
            if (count % 8 == 0) {
                process.stdout.write(' ' + pos.row.toString() + ' ');
                console.log('');
            }
        }
        console.log('');
    };
    DefaultBoard.prototype.reset = function () {
        while (this.positions.length) {
            this.positions.pop();
        }
        this.init();
    };
    DefaultBoard.prototype.validMove = function (from, to) {
        return true;
    };
    DefaultBoard.prototype.move = function (from, to) {
        var valid = this.validMove(from, to);
        if (valid) {
            this.positions[to].piece = this.positions[from].piece;
            this.positions[from].piece = new Empty_1.default();
        }
        return valid;
    };
    Object.defineProperty(DefaultBoard.prototype, "positionMap", {
        get: function () {
            return {
                'a8': 0, 'b8': 1, 'c8': 2, 'd8': 3, 'e8': 4, 'f8': 5, 'g8': 6, 'h8': 7,
                'a7': 8, 'b7': 9, 'c7': 10, 'd7': 11, 'e7': 12, 'f7': 13, 'g7': 14, 'h7': 15,
                'a6': 16, 'b6': 17, 'c6': 18, 'd6': 19, 'e6': 20, 'f6': 21, 'g6': 22, 'h6': 23,
                'a5': 24, 'b5': 25, 'c5': 26, 'd5': 27, 'e5': 28, 'f5': 29, 'g5': 30, 'h5': 31,
                'a4': 32, 'b4': 33, 'c4': 34, 'd4': 35, 'e4': 36, 'f4': 37, 'g4': 38, 'h4': 39,
                'a3': 40, 'b3': 41, 'c3': 42, 'd3': 43, 'e3': 44, 'f3': 45, 'g3': 46, 'h3': 47,
                'a2': 48, 'b2': 49, 'c2': 50, 'd2': 51, 'e2': 52, 'f2': 53, 'g2': 54, 'h2': 55,
                'a1': 56, 'b1': 57, 'c1': 58, 'd1': 59, 'e1': 60, 'f1': 61, 'g1': 62, 'h1': 63
            };
        },
        enumerable: true,
        configurable: true
    });
    return DefaultBoard;
}());
exports.default = DefaultBoard;
//# sourceMappingURL=DefaultBoard.js.map