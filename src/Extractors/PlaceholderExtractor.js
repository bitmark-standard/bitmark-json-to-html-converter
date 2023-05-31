"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
exports.PlaceholderExtractor = void 0;
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var PlaceholderExtractor = /** @class */ (function () {
    function PlaceholderExtractor(placeholders) {
        var _this = this;
        var dom = new JSDOM();
        this.document = dom.window.document;
        this.placeholderValues = new Map();
        if (!(placeholders instanceof Object)) {
            return;
        }
        var placeholdersKeys = Object.getOwnPropertyNames(placeholders);
        placeholdersKeys.forEach(function (key) {
            var e_1, _a;
            var placeholder = placeholders[key];
            var placeholderMaxLength = 0;
            if (placeholder.solutions) {
                placeholder.solutions.forEach(function (solution) {
                    var length = solution.length;
                    if (length > placeholderMaxLength) {
                        placeholderMaxLength = length;
                    }
                });
            }
            if ("select" === placeholder.type && placeholder.options) {
                var selectTag = _this.document.createElement("span");
                selectTag.classList.add("placeholder__item", "placeholder__item--type-select");
                try {
                    for (var _b = __values(placeholder.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var option = _c.value;
                        var selectOptionTag = _this.document.createElement("span");
                        selectOptionTag.classList.add("placeholder__option");
                        selectOptionTag.dataset.isCorrect = option.isCorrect;
                        selectOptionTag.textContent = option.text;
                        var length_1 = option.text.length;
                        if (length_1 > placeholderMaxLength) {
                            placeholderMaxLength = length_1;
                        }
                        selectTag.appendChild(selectOptionTag);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                selectTag.dataset.placeholderMaxLength = String(placeholderMaxLength);
                _this.placeholderValues.set(key, selectTag);
                return;
            }
            if ("gap" === placeholder.type) {
                var gapTag = _this.document.createElement("span");
                gapTag.classList.add("placeholder__item", "placeholder__item--type-gap");
                gapTag.dataset.placeholderMaxLength = String(placeholderMaxLength);
                if (placeholder.instruction) {
                    var gapInstructionTag = _this.document.createElement("span");
                    gapInstructionTag.classList.add("placeholder__instruction");
                    gapInstructionTag.textContent = placeholder.instruction;
                    gapTag.appendChild(gapInstructionTag);
                }
                _this.placeholderValues.set(key, gapTag);
            }
        });
    }
    PlaceholderExtractor.prototype.getPlaceholderValues = function () {
        return this.placeholderValues;
    };
    return PlaceholderExtractor;
}());
exports.PlaceholderExtractor = PlaceholderExtractor;
