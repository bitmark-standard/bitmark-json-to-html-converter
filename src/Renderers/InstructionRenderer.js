"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.InstructionRenderer = void 0;
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var InstructionRenderer = /** @class */ (function () {
    function InstructionRenderer(instructionExtractor) {
        var dom = new JSDOM();
        var document = dom.window.document;
        this.instructionTag = document.createElement("div");
        this.instructionTag.classList.add("bit__instruction");
        this.instructionTag.innerHTML = instructionExtractor.getInstruction();
    }
    InstructionRenderer.prototype.getTag = function () {
        return this.instructionTag;
    };
    InstructionRenderer.prototype.embedImages = function () {
        return this;
    };
    return InstructionRenderer;
}());
exports.InstructionRenderer = InstructionRenderer;
