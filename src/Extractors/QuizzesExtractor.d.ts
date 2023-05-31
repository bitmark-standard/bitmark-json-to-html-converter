/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { QuizInterface } from "../Bitmark/QuizInterface";
import { QuizItem } from "./QuizItem";
declare class QuizzesExtractor {
    private readonly quizzes;
    constructor(quizzes: QuizInterface[]);
    getQuizItems(): QuizItem[];
}
export { QuizzesExtractor };
