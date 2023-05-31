"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.PlaceholdersRenderer = void 0;
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var PlaceholdersRenderer = /** @class */ (function () {
    function PlaceholdersRenderer(placeholdersExtractor) {
        var _this = this;
        var dom = new JSDOM();
        var document = dom.window.document;
        this.placeholdersTag = document.createElement("div");
        this.placeholdersTag.classList.add("bit__placeholders");
        placeholdersExtractor.getPlaceholders().forEach(function (placeholder) {
            var itemTag = document.createElement("div");
            itemTag.classList.add("placeholder__item");
            itemTag.textContent = placeholder;
            _this.placeholdersTag.appendChild(itemTag);
        });
    }
    PlaceholdersRenderer.prototype.getTag = function () {
        return this.placeholdersTag;
    };
    PlaceholdersRenderer.prototype.embedImages = function () {
        return this;
    };
    return PlaceholdersRenderer;
}());
exports.PlaceholdersRenderer = PlaceholdersRenderer;
