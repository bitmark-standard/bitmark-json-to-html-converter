"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.getUniqued = exports.shuffle = exports.fileCanBeUsed = void 0;
var fs = require("fs");
var shuffle = function (array) {
    var _a;
    var arrayShuffeled = __spreadArray([], __read(array), false);
    var currentIndex = array.length, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        _a = __read([
            arrayShuffeled[randomIndex], arrayShuffeled[currentIndex]
        ], 2), arrayShuffeled[currentIndex] = _a[0], arrayShuffeled[randomIndex] = _a[1];
    }
    return arrayShuffeled;
};
exports.shuffle = shuffle;
var fileCanBeUsed = function (file) {
    if (!fs.existsSync(file)) {
        return false;
    }
    var isAccessible = true;
    try {
        fs.accessSync(file, fs.constants.R_OK);
    }
    catch (error) {
        isAccessible = false;
    }
    return isAccessible;
};
exports.fileCanBeUsed = fileCanBeUsed;
var getUniqued = function (input) { return __spreadArray([], __read(new Set(input)), false); };
exports.getUniqued = getUniqued;
