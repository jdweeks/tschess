"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultPosition = (function () {
    function DefaultPosition(row, col) {
        this.row = row;
        this.col = col;
        this.totem = '-';
    }
    DefaultPosition.prototype.print = function () {
        process.stdout.write(this.totem + ' ');
    };
    return DefaultPosition;
}());
exports.default = DefaultPosition;
//# sourceMappingURL=DefaultPosition.js.map