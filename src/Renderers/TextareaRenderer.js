"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.TextareaRenderer = void 0;
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var TextareaRenderer = /** @class */ (function () {
    function TextareaRenderer() {
        var dom = new JSDOM();
        var document = dom.window.document;
        this.textareaTag = document.createElement("div");
        this.textareaTag.classList.add("bit__textarea");
    }
    TextareaRenderer.prototype.getTag = function () {
        return this.textareaTag;
    };
    TextareaRenderer.prototype.embedImages = function () {
        return this;
    };
    return TextareaRenderer;
}());
exports.TextareaRenderer = TextareaRenderer;
