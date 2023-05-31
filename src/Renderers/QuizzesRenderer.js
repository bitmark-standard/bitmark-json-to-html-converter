"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.QuizzesRenderer = void 0;
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var QuizzesRenderer = /** @class */ (function () {
    function QuizzesRenderer(quizzesExtractor) {
        var _this = this;
        var dom = new JSDOM();
        var document = dom.window.document;
        this.quizzesTag = document.createElement("div");
        this.quizzesTag.classList.add("bit__quizzes");
        quizzesExtractor.getQuizItems().forEach(function (quizItem) {
            var quizTag = document.createElement("div");
            quizTag.classList.add("bit__quiz", "bit__quiz--type-".concat(quizItem.isTypeMultipleChoice() ? 'multiple-choice' : 'single-choice'));
            _this.quizzesTag.appendChild(quizTag);
            var question = quizItem.getQuestion();
            if (null !== question) {
                var instructionTag = document.createElement("div");
                instructionTag.classList.add("quiz__instruction");
                instructionTag.textContent = quizItem.getQuestion();
                quizTag.appendChild(instructionTag);
            }
            var choicesTag = document.createElement("div");
            choicesTag.classList.add("quiz__choices");
            quizTag.appendChild(choicesTag);
            quizItem.getAnswers().forEach(function (answer) {
                var choiceTag = document.createElement("div");
                choiceTag.classList.add("quiz__choice");
                choicesTag.appendChild(choiceTag);
                var choiceFieldTag = document.createElement("div");
                choiceFieldTag.classList.add("choice__field");
                choiceTag.appendChild(choiceFieldTag);
                var choiceContentTag = document.createElement("div");
                choiceContentTag.classList.add("choice__content");
                choiceContentTag.textContent = answer;
                choiceTag.appendChild(choiceContentTag);
            });
        });
    }
    QuizzesRenderer.prototype.embedImages = function () {
        return this;
    };
    QuizzesRenderer.prototype.getTag = function () {
        return this.quizzesTag;
    };
    return QuizzesRenderer;
}());
exports.QuizzesRenderer = QuizzesRenderer;
