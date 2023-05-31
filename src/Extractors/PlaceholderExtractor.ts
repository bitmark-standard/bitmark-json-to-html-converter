/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { PlaceholdersInterface } from "../Bitmark/PlaceholdersInterface";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class PlaceholderExtractor
{
    private readonly placeholderValues: Map<string, HTMLElement>;

    private readonly document: Document;

    constructor(placeholders: Map<string, PlaceholdersInterface>)
    {
        const dom = new JSDOM();
        this.document = dom.window.document;

        this.placeholderValues = new Map<string, HTMLElement>();

        if (!(placeholders instanceof Object)) {
            return;
        }

        const placeholdersKeys = Object.getOwnPropertyNames(placeholders);

        placeholdersKeys.forEach((key) => {
            const placeholder = placeholders[key];

            let placeholderMaxLength = 0;

            if (placeholder.solutions) {
                placeholder.solutions.forEach((solution) => {
                    const length = solution.length;

                    if (length > placeholderMaxLength) {
                        placeholderMaxLength = length;
                    }
                });
            }

            if ("select" === placeholder.type && placeholder.options) {
                const selectTag = this.document.createElement("span");
                selectTag.classList.add("placeholder__item", "placeholder__item--type-select");

                for (const option of placeholder.options) {
                    const selectOptionTag = this.document.createElement("span");
                    selectOptionTag.classList.add("placeholder__option");
                    selectOptionTag.dataset.isCorrect = option.isCorrect;
                    selectOptionTag.textContent = option.text;

                    const length = option.text.length;

                    if (length > placeholderMaxLength) {
                        placeholderMaxLength = length;
                    }

                    selectTag.appendChild(selectOptionTag);
                }

                selectTag.dataset.placeholderMaxLength = String(placeholderMaxLength);

                this.placeholderValues.set(key, selectTag);
                return;
            }

            if ("gap" === placeholder.type) {
                const gapTag = this.document.createElement("span");
                gapTag.classList.add("placeholder__item", "placeholder__item--type-gap");
                gapTag.dataset.placeholderMaxLength = String(placeholderMaxLength);

                if (placeholder.instruction) {
                    const gapInstructionTag = this.document.createElement("span");
                    gapInstructionTag.classList.add("placeholder__instruction");
                    gapInstructionTag.textContent = placeholder.instruction;
                    gapTag.appendChild(gapInstructionTag);
                }

                this.placeholderValues.set(key, gapTag);
            }
        });
    }

    getPlaceholderValues(): Map<string, HTMLElement>
    {
        return this.placeholderValues;
    }
}

export { PlaceholderExtractor };