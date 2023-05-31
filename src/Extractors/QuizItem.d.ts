/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
declare class QuizItem {
    private question;
    private answers;
    private typeMultipleChoice;
    private typeSingleChoice;
    setQuestion(question: string): this;
    getQuestion(): string | null;
    addAnswer(answer: string): this;
    getAnswers(): string[];
    setTypeSingleChoice(): this;
    setTypeMultipleChoice(): this;
    isTypeSingleChoice(): boolean;
    isTypeMultipleChoice(): boolean;
}
export { QuizItem };
