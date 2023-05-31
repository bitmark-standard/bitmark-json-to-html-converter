"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.PlaceholdersInstructionsExtractor = void 0;
var Helpers_1 = require("../Helpers");
var PlaceholdersInstructionsExtractor = /** @class */ (function () {
    function PlaceholdersInstructionsExtractor(placeholders) {
        var _this = this;
        this.placeholders = [];
        var placeholderNames = Object.getOwnPropertyNames(placeholders);
        placeholderNames.forEach(function (placeholderName) {
            var placeholder = placeholders[placeholderName];
            if (!placeholder.instruction) {
                return;
            }
            _this.placeholders.push(placeholder.instruction);
        });
        this.placeholders = (0, Helpers_1.getUniqued)(this.placeholders);
    }
    PlaceholdersInstructionsExtractor.prototype.sortRandomly = function () {
        this.placeholders = (0, Helpers_1.shuffle)(this.placeholders);
        return this;
    };
    PlaceholdersInstructionsExtractor.prototype.getPlaceholders = function () {
        return this.placeholders;
    };
    return PlaceholdersInstructionsExtractor;
}());
exports.PlaceholdersInstructionsExtractor = PlaceholdersInstructionsExtractor;
