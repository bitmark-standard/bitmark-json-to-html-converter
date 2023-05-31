"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.ItemExtractor = void 0;
var ItemExtractor = /** @class */ (function () {
    function ItemExtractor(item) {
        this.item = item;
    }
    ItemExtractor.prototype.getItem = function () {
        return this.item;
    };
    return ItemExtractor;
}());
exports.ItemExtractor = ItemExtractor;
