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
var Knight = (function (_super) {
    __extends(Knight, _super);
    function Knight(light) {
        var _this = _super.call(this) || this;
        _this.light = light;
        _this.totem = _this.light ? 'N' : 'n';
        return _this;
    }
    return Knight;
}(BasePiece_1.default));
exports.default = Knight;
//# sourceMappingURL=Knight.js.map