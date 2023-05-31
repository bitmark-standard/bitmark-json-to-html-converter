"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.QuizzesExtractor = void 0;
var QuizItem_1 = require("./QuizItem");
var QuizzesExtractor = /** @class */ (function () {
    function QuizzesExtractor(quizzes) {
        var _this = this;
        this.quizzes = [];
        quizzes.forEach(function (quiz) {
            var quizItem = new QuizItem_1.QuizItem();
            _this.quizzes.push(quizItem);
            var question = quiz.instruction || null;
            if (question) {
                quizItem.setQuestion(question);
            }
            if (quiz.choices) {
                quizItem.setTypeSingleChoice();
                quiz.choices.forEach(function (choices) {
                    quizItem.addAnswer(choices.choice);
                });
            }
            if (quiz.responses) {
                quizItem.setTypeMultipleChoice();
                quiz.responses.forEach(function (responses) {
                    quizItem.addAnswer(responses.response);
                });
            }
        });
    }
    QuizzesExtractor.prototype.getQuizItems = function () {
        return this.quizzes;
    };
    return QuizzesExtractor;
}());
exports.QuizzesExtractor = QuizzesExtractor;
