"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultPosition_1 = require("../position/DefaultPosition");
var Column_1 = require("../column/Column");
var DefaultBoard = (function () {
    function DefaultBoard() {
        this.positions = [];
        this.init();
    }
    DefaultBoard.prototype.init = function () {
        var range = [1, 2, 3, 4, 5, 6, 7, 8];
        for (var _i = 0, range_1 = range; _i < range_1.length; _i++) {
            var row = range_1[_i];
            for (var _a = 0, range_2 = range; _a < range_2.length; _a++) {
                var col = range_2[_a];
                var pos = new DefaultPosition_1.default(row, col);
                this.positions.push(pos);
            }
        }
    };
    DefaultBoard.prototype.print = function () {
        var count = 0;
        console.log('');
        for (var _i = 0, _a = this.positions; _i < _a.length; _i++) {
            var pos = _a[_i];
            pos.print();
            count++;
            if (count % 8 == 0) {
                process.stdout.write(pos.row.toString() + ' ');
                console.log('');
            }
        }
        for (var col in Column_1.Column) {
            if (isNaN(Number(col))) {
                process.stdout.write(col + ' ');
            }
        }
        console.log('\n');
    };
    DefaultBoard.prototype.reset = function () {
        while (this.positions.length) {
            this.positions.pop();
        }
        this.init();
    };
    DefaultBoard.prototype.move = function (from, to) {
        return false;
    };
    return DefaultBoard;
}());
exports.default = DefaultBoard;
//# sourceMappingURL=DefaultBoard.js.map