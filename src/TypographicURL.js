"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.TypographicURL = void 0;
var TypographicURL = /** @class */ (function () {
    function TypographicURL(url) {
        this.url = url;
    }
    TypographicURL.prototype.getPieceWrapped = function (piece, appendSlash) {
        if (appendSlash === void 0) { appendSlash = false; }
        var slash = appendSlash ? "/" : "";
        return "<span class=\"url__piece\">".concat(piece).concat(slash, "</span>");
    };
    TypographicURL.prototype.getURL = function () {
        var _this = this;
        var urlSplitted = this.url.split(/\/\//g);
        var protocol = '';
        if (this.url.startsWith("http")) {
            protocol = urlSplitted.shift();
            protocol = this.getPieceWrapped("".concat(protocol, "//"));
        }
        var urlPieces = urlSplitted.join("").split(/\//g);
        var urlPiecesCount = urlPieces.length;
        var urlPiecesWrapped = urlPieces
            .map(function (urlPiece, index) {
            var isLastElement = index === urlPiecesCount - 1;
            return _this.getPieceWrapped(urlPiece, !isLastElement);
        });
        return "<span class=\"url\">".concat(protocol).concat(urlPiecesWrapped.join(""), "</span>");
    };
    return TypographicURL;
}());
exports.TypographicURL = TypographicURL;
