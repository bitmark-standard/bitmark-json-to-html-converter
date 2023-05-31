"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.PlaceholdersSolutionsExtractor = void 0;
var Helpers_1 = require("../Helpers");
var PlaceholdersSolutionsExtractor = /** @class */ (function () {
    function PlaceholdersSolutionsExtractor(placeholders) {
        var _this = this;
        this.placeholders = [];
        var placeholderNames = Object.getOwnPropertyNames(placeholders);
        placeholderNames.forEach(function (placeholderName) {
            var placeholder = placeholders[placeholderName];
            _this.placeholders.push((placeholder.solutions || []).join(", "));
        });
    }
    PlaceholdersSolutionsExtractor.prototype.sortRandomly = function () {
        this.placeholders = (0, Helpers_1.shuffle)(this.placeholders);
        return this;
    };
    PlaceholdersSolutionsExtractor.prototype.getPlaceholders = function () {
        return this.placeholders;
    };
    return PlaceholdersSolutionsExtractor;
}());
exports.PlaceholdersSolutionsExtractor = PlaceholdersSolutionsExtractor;
