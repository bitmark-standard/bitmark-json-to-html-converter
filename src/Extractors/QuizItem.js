"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.QuizItem = void 0;
var QuizItem = /** @class */ (function () {
    function QuizItem() {
        this.question = null;
        this.answers = [];
        this.typeMultipleChoice = false;
        this.typeSingleChoice = false;
    }
    QuizItem.prototype.setQuestion = function (question) {
        this.question = question;
        return this;
    };
    QuizItem.prototype.getQuestion = function () {
        return this.question;
    };
    QuizItem.prototype.addAnswer = function (answer) {
        this.answers.push(answer);
        return this;
    };
    QuizItem.prototype.getAnswers = function () {
        return this.answers;
    };
    QuizItem.prototype.setTypeSingleChoice = function () {
        this.typeSingleChoice = true;
        return this;
    };
    QuizItem.prototype.setTypeMultipleChoice = function () {
        this.typeMultipleChoice = true;
        return this;
    };
    QuizItem.prototype.isTypeSingleChoice = function () {
        return this.typeSingleChoice;
    };
    QuizItem.prototype.isTypeMultipleChoice = function () {
        return this.typeMultipleChoice;
    };
    return QuizItem;
}());
exports.QuizItem = QuizItem;
