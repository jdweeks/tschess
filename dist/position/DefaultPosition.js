"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultPosition = (function () {
    function DefaultPosition(row, col, piece) {
        this.row = row;
        this.col = col;
        this.piece = piece;
    }
    DefaultPosition.prototype.print = function () {
        process.stdout.write(this.piece.totem + ' ');
    };
    return DefaultPosition;
}());
exports.default = DefaultPosition;
//# sourceMappingURL=DefaultPosition.js.map