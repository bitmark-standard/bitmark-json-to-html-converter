"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.InstructionExtractor = void 0;
var marked_1 = require("marked");
var InstructionExtractor = /** @class */ (function () {
    function InstructionExtractor(instruction) {
        this.instruction = marked_1.marked.parse(instruction);
    }
    InstructionExtractor.prototype.getInstruction = function () {
        return this.instruction;
    };
    return InstructionExtractor;
}());
exports.InstructionExtractor = InstructionExtractor;
