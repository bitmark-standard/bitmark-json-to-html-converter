"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.ItemRenderer = void 0;
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var ItemRenderer = /** @class */ (function () {
    function ItemRenderer(itemExtractor) {
        var dom = new JSDOM();
        var document = dom.window.document;
        this.itemTag = document.createElement("div");
        this.itemTag.classList.add("bit__item");
        this.itemTag.textContent = itemExtractor.getItem();
    }
    ItemRenderer.prototype.getTag = function () {
        return this.itemTag;
    };
    ItemRenderer.prototype.embedImages = function () {
        return this;
    };
    return ItemRenderer;
}());
exports.ItemRenderer = ItemRenderer;
