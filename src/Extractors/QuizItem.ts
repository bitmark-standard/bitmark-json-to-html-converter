/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

class QuizItem
{
    private question: string | null = null;

    private answers: string[] = [];

    private typeMultipleChoice: boolean = false;

    private typeSingleChoice: boolean = false;

    setQuestion(question: string): this
    {
        this.question = question;
        return this;
    }

    getQuestion(): string | null
    {
        return this.question;
    }

    addAnswer(answer: string): this
    {
        this.answers.push(answer);
        return this;
    }

    getAnswers(): string[]
    {
        return this.answers;
    }

    setTypeSingleChoice(): this
    {
        this.typeSingleChoice = true;
        return this;
    }

    setTypeMultipleChoice(): this
    {
        this.typeMultipleChoice = true;
        return this;
    }

    isTypeSingleChoice(): boolean
    {
        return this.typeSingleChoice;
    }

    isTypeMultipleChoice(): boolean
    {
        return this.typeMultipleChoice;
    }
}

export { QuizItem };