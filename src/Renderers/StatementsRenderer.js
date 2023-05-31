"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.StatementsRenderer = void 0;
var marked_1 = require("marked");
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var StatementsRenderer = /** @class */ (function () {
    function StatementsRenderer(contentPart) {
        var _this = this;
        var dom = new JSDOM();
        var document = dom.window.document;
        this.statementsTag = document.createElement("div");
        this.statementsTag.classList.add("bit__statements");
        var statementsItemsHeaderTag = document.createElement("div");
        statementsItemsHeaderTag.classList.add("statements__header");
        this.statementsTag.appendChild(statementsItemsHeaderTag);
        var statementsHeaderContentTag = document.createElement("div");
        statementsHeaderContentTag.classList.add("header__content");
        statementsItemsHeaderTag.appendChild(statementsHeaderContentTag);
        var statementsItemAnswerRightTag = document.createElement("div");
        statementsItemAnswerRightTag.classList.add("header__answer", "header__answer--right");
        statementsItemAnswerRightTag.textContent = contentPart.bit.labelTrue;
        statementsItemsHeaderTag.appendChild(statementsItemAnswerRightTag);
        var statementsItemAnswerWrongTag = document.createElement("div");
        statementsItemAnswerWrongTag.classList.add("header__answer", "header__answer--wrong");
        statementsItemAnswerWrongTag.textContent = contentPart.bit.labelFalse;
        statementsItemsHeaderTag.appendChild(statementsItemAnswerWrongTag);
        var hasIndex = false;
        contentPart.bit.statements.forEach(function (statement) {
            var statementsItemTag = document.createElement("div");
            statementsItemTag.classList.add("statements__item");
            _this.statementsTag.appendChild(statementsItemTag);
            var index = statement.statement.match(/\d+\.(?=\s)/m);
            var text = statement.statement;
            if (null !== index && 0 === index.index) {
                var length_1 = index[0].length;
                text = text.substring(length_1);
                text = text.trim();
                var statementsItemNumberTag = document.createElement("div");
                statementsItemNumberTag.classList.add("item__index");
                statementsItemNumberTag.textContent = String(index);
                statementsItemTag.appendChild(statementsItemNumberTag);
                _this.statementsTag.classList.add("bit__statements--indexed");
                hasIndex = true;
            }
            text = (0, marked_1.marked)(text);
            var statementsItemContentTag = document.createElement("div");
            statementsItemContentTag.classList.add("item__content");
            statementsItemContentTag.innerHTML = text;
            statementsItemTag.appendChild(statementsItemContentTag);
            var statementsItemAnswerRightTag = document.createElement("div");
            statementsItemAnswerRightTag.classList.add("item__answer", "item__answer--right");
            statementsItemTag.appendChild(statementsItemAnswerRightTag);
            var statementsItemAnswerWrongTag = document.createElement("div");
            statementsItemAnswerWrongTag.classList.add("item__answer", "item__answer--wrong");
            statementsItemTag.appendChild(statementsItemAnswerWrongTag);
        });
        // @ts-ignore
        if (true === hasIndex) {
            var statementsHeaderIndexTag = document.createElement("div");
            statementsHeaderIndexTag.classList.add("header__index");
            statementsItemsHeaderTag.insertBefore(statementsHeaderIndexTag, statementsItemsHeaderTag.firstChild);
        }
    }
    StatementsRenderer.prototype.getTag = function () {
        return this.statementsTag;
    };
    StatementsRenderer.prototype.embedImages = function () {
        return this;
    };
    return StatementsRenderer;
}());
exports.StatementsRenderer = StatementsRenderer;
