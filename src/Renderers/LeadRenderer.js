"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.LeadRenderer = void 0;
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var LeadRenderer = /** @class */ (function () {
    function LeadRenderer(leadExtractor) {
        var dom = new JSDOM();
        var document = dom.window.document;
        this.leadTag = document.createElement("div");
        this.leadTag.classList.add("bit__lead");
        this.leadTag.textContent = leadExtractor.getInstruction();
    }
    LeadRenderer.prototype.getTag = function () {
        return this.leadTag;
    };
    LeadRenderer.prototype.embedImages = function () {
        return this;
    };
    return LeadRenderer;
}());
exports.LeadRenderer = LeadRenderer;
