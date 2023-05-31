/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { QuizInterface } from "../Bitmark/QuizInterface";
import { QuizItem } from "./QuizItem";

class QuizzesExtractor
{
    private readonly quizzes: QuizItem[] = [];

    constructor(quizzes: QuizInterface[])
    {
        quizzes.forEach((quiz) => {

            const quizItem = new QuizItem();
            this.quizzes.push(quizItem);

            const question = quiz.instruction || null;

            if (question) {
                quizItem.setQuestion(question);
            }

            if (quiz.choices) {
                quizItem.setTypeSingleChoice();

                quiz.choices.forEach((choices) => {
                    quizItem.addAnswer(choices.choice);
                });
            }

            if (quiz.responses) {
                quizItem.setTypeMultipleChoice();

                quiz.responses.forEach((responses) => {
                    quizItem.addAnswer(responses.response);
                });
            }
        });
    }

    getQuizItems(): QuizItem[]
    {
        return this.quizzes;
    }
}

export { QuizzesExtractor };