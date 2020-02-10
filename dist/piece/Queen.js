"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BasePiece_1 = require("./BasePiece");
var Queen = (function (_super) {
    __extends(Queen, _super);
    function Queen(light) {
        var _this = _super.call(this) || this;
        _this.light = light;
        _this.totem = _this.light ? 'Q' : 'q';
        return _this;
    }
    return Queen;
}(BasePiece_1.default));
exports.default = Queen;
//# sourceMappingURL=Queen.js.map