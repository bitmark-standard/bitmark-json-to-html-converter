"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.BitRenderer = void 0;
var ResourceRenderer_1 = require("./ResourceRenderer");
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var BitRenderer = /** @class */ (function () {
    function BitRenderer(contents) {
        this.isImageEmbeddingAllowed = false;
        var dom = new JSDOM();
        this.document = dom.window.document;
        this.contents = contents.filter(function (content) { return content; });
    }
    BitRenderer.prototype.getTag = function () {
        var _this = this;
        var bitTag = this.document.createElement("div");
        this.contents.forEach(function (content) {
            if (true === _this.isImageEmbeddingAllowed) {
                content.embedImages();
            }
            var tag = content.getTag();
            /**
             * Don't render empty resource tags.
             */
            if (content instanceof ResourceRenderer_1.ResourceRenderer && !tag.hasChildNodes()) {
                return;
            }
            bitTag.appendChild(tag);
        });
        return bitTag;
    };
    BitRenderer.prototype.embedImages = function () {
        this.isImageEmbeddingAllowed = true;
        return this;
    };
    return BitRenderer;
}());
exports.BitRenderer = BitRenderer;
