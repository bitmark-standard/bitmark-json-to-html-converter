/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { QuizzesExtractor } from "../Extractors/QuizzesExtractor";
import { RendererInterface } from "./RendererInterface";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class QuizzesRenderer implements RendererInterface
{
    private readonly quizzesTag: HTMLElement;

    constructor(quizzesExtractor: QuizzesExtractor)
    {
        const dom = new JSDOM();
        const document = dom.window.document;

        this.quizzesTag = document.createElement("div");
        this.quizzesTag.classList.add("bit__quizzes");

        quizzesExtractor.getQuizItems().forEach((quizItem) => {
            const quizTag = document.createElement("div");
            quizTag.classList.add("bit__quiz", `bit__quiz--type-${quizItem.isTypeMultipleChoice() ? 'multiple-choice' : 'single-choice'}`);
            this.quizzesTag.appendChild(quizTag);

            const question = quizItem.getQuestion();

            if (null !== question) {
                const instructionTag = document.createElement("div");
                instructionTag.classList.add("quiz__instruction");
                instructionTag.textContent = quizItem.getQuestion();
                quizTag.appendChild(instructionTag);
            }

            const choicesTag = document.createElement("div");
            choicesTag.classList.add("quiz__choices");
            quizTag.appendChild(choicesTag);

            quizItem.getAnswers().forEach((answer) => {
                const choiceTag = document.createElement("div");
                choiceTag.classList.add("quiz__choice");
                choicesTag.appendChild(choiceTag);

                const choiceFieldTag = document.createElement("div");
                choiceFieldTag.classList.add("choice__field");
                choiceTag.appendChild(choiceFieldTag);

                const choiceContentTag = document.createElement("div");
                choiceContentTag.classList.add("choice__content");
                choiceContentTag.textContent = answer;
                choiceTag.appendChild(choiceContentTag);
            });
        });
    }

    embedImages(): this
    {
        return this;
    }

    getTag(): HTMLElement
    {
        return this.quizzesTag;
    }
}

export { QuizzesRenderer };