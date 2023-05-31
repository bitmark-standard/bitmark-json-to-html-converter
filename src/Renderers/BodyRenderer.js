"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.BodyRenderer = void 0;
var marked_1 = require("marked");
var RemoteImage_1 = require("../RemoteImage");
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var BodyRenderer = /** @class */ (function () {
    function BodyRenderer(bodyExtractor, placeholderExtractor) {
        this.isImageEmbeddingAllowed = false;
        var dom = new JSDOM();
        this.document = dom.window.document;
        this.bodyExtractor = bodyExtractor;
        this.placeholderExtractor = placeholderExtractor;
    }
    /**
     * Extracts images from bitmark strings where they have a format different to markdown.
     *
     * @param content
     * @private
     */
    BodyRenderer.prototype.extractImages = function (content) {
        var _this = this;
        var extractValues = function (piecesExtracted) { return function (pipePiece) {
            var pieceExtracted = pipePiece.split(":");
            var key = pieceExtracted.shift();
            var value = pieceExtracted.join(":");
            key = key.replace(/^@/, "");
            if ("" === key) {
                return;
            }
            var numberValues = [
                "width",
                "height"
            ];
            if (numberValues.includes(key)) {
                value = Number(value);
            }
            piecesExtracted[key] = value;
        }; };
        var handlePipes = function () {
            return function (match) {
                var pipePieces = match.split("|");
                var piecesExtracted = [];
                pipePieces.forEach(extractValues(piecesExtracted));
                var wrapperTag = _this.document.createElement("div");
                var figureTag = _this.document.createElement("figure");
                wrapperTag.appendChild(figureTag);
                var image = _this.document.createElement("img");
                image.alt = "";
                if (piecesExtracted["width"]) {
                    image.width = piecesExtracted["width"];
                }
                image.src = true === _this.isImageEmbeddingAllowed
                    ? (new RemoteImage_1.RemoteImage(piecesExtracted["image"])).getBase64String()
                    : piecesExtracted["image"];
                figureTag.appendChild(image);
                if (piecesExtracted["caption"]) {
                    image.alt = piecesExtracted["caption"];
                    image.title = piecesExtracted["caption"];
                    var figcaptionTag = _this.document.createElement("figcaption");
                    figcaptionTag.textContent = piecesExtracted["caption"];
                    figcaptionTag.classList.add("bit__caption");
                    figureTag.appendChild(figcaptionTag);
                }
                /**
                 * That linebreak is important to help the markdown formatter creating the
                 * correct semantics.
                 */
                return wrapperTag.innerHTML + "\n";
            };
        };
        return content.replace(/\|.+\|/g, handlePipes());
    };
    BodyRenderer.prototype.getTag = function () {
        var _this = this;
        var bodyTag = this.document.createElement("div");
        bodyTag.classList.add("bit__body");
        var bodyContent = this.bodyExtractor.getBody();
        if ("" === bodyContent) {
            return;
        }
        var placeholderValues = null !== this.placeholderExtractor
            ? this.placeholderExtractor.getPlaceholderValues()
            : new Map();
        /**
         * Extracting images with a non-markdown-conformance semantic.
         */
        bodyContent = this.extractImages(bodyContent);
        /**
         * Adds line breaks after bold text that is being used as headline.
         */
        bodyContent = bodyContent.replace(/\*\n/g, "*\n\n");
        /**
         * Adds two line breaks before lists to help the Markdown parser finding them.
         */
        bodyContent = bodyContent.replace(/\n(\d+\.)/g, "\n\n$1");
        bodyContent = marked_1.marked.parse(bodyContent);
        bodyContent = bodyContent.replace(/{(\d+)}/g, function (match, contents) {
            var placeholderContainer = _this.document.createElement("div");
            if (placeholderValues.has(match)) {
                placeholderContainer.appendChild(placeholderValues.get(match));
            }
            return "<span class=\"bit__placeholder\" data-placeholder-id=\"".concat(contents, "\">").concat(placeholderContainer.innerHTML, "</span>");
        });
        bodyTag.innerHTML = bodyContent;
        return bodyTag;
    };
    BodyRenderer.prototype.embedImages = function () {
        this.isImageEmbeddingAllowed = true;
        return this;
    };
    return BodyRenderer;
}());
exports.BodyRenderer = BodyRenderer;
