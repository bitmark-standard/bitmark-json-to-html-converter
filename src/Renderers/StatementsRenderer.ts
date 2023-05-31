/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { marked } from "marked";
import { RendererInterface } from "./RendererInterface";
import { StatementInterface } from "../Bitmark/StatementInterface";
import {ContentInterface} from "../Bitmark/ContentInterface";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class StatementsRenderer implements RendererInterface
{
    statementsTag: HTMLElement;

    constructor(contentPart: ContentInterface)
    {
        const dom = new JSDOM();
        const document = dom.window.document;

        this.statementsTag = document.createElement("div");
        this.statementsTag.classList.add("bit__statements");

        const statementsItemsHeaderTag = document.createElement("div");
        statementsItemsHeaderTag.classList.add("statements__header");
        this.statementsTag.appendChild(statementsItemsHeaderTag);

        const statementsHeaderContentTag = document.createElement("div");
        statementsHeaderContentTag.classList.add("header__content");
        statementsItemsHeaderTag.appendChild(statementsHeaderContentTag);

        const statementsItemAnswerRightTag = document.createElement("div");
        statementsItemAnswerRightTag.classList.add("header__answer", "header__answer--right");
        statementsItemAnswerRightTag.textContent = contentPart.bit.labelTrue;
        statementsItemsHeaderTag.appendChild(statementsItemAnswerRightTag);

        const statementsItemAnswerWrongTag = document.createElement("div");
        statementsItemAnswerWrongTag.classList.add("header__answer", "header__answer--wrong");
        statementsItemAnswerWrongTag.textContent = contentPart.bit.labelFalse;
        statementsItemsHeaderTag.appendChild(statementsItemAnswerWrongTag);

        let hasIndex: boolean = false;

        contentPart.bit.statements.forEach((statement: StatementInterface) => {

            const statementsItemTag = document.createElement("div");
            statementsItemTag.classList.add("statements__item");
            this.statementsTag.appendChild(statementsItemTag);

            const index = statement.statement.match(/\d+\.(?=\s)/m);
            let text = statement.statement;

            if (null !== index && 0 === index.index) {
                const length = index[0].length;
                text = text.substring(length);
                text = text.trim();

                const statementsItemNumberTag = document.createElement("div");
                statementsItemNumberTag.classList.add("item__index");
                statementsItemNumberTag.textContent = String(index);
                statementsItemTag.appendChild(statementsItemNumberTag);

                this.statementsTag.classList.add("bit__statements--indexed");

                hasIndex = true;
            }

            text = marked(text);

            const statementsItemContentTag = document.createElement("div");
            statementsItemContentTag.classList.add("item__content");
            statementsItemContentTag.innerHTML = text;
            statementsItemTag.appendChild(statementsItemContentTag);

            const statementsItemAnswerRightTag = document.createElement("div");
            statementsItemAnswerRightTag.classList.add("item__answer", "item__answer--right");
            statementsItemTag.appendChild(statementsItemAnswerRightTag);

            const statementsItemAnswerWrongTag = document.createElement("div");
            statementsItemAnswerWrongTag.classList.add("item__answer", "item__answer--wrong");
            statementsItemTag.appendChild(statementsItemAnswerWrongTag);
        });

        // @ts-ignore
        if (true === hasIndex) {
            const statementsHeaderIndexTag = document.createElement("div");
            statementsHeaderIndexTag.classList.add("header__index");
            statementsItemsHeaderTag.insertBefore(statementsHeaderIndexTag, statementsItemsHeaderTag.firstChild);
        }
    }

    getTag(): HTMLElement
    {
        return this.statementsTag;
    }

    embedImages(): this
    {
        return this;
    }
}

export { StatementsRenderer };