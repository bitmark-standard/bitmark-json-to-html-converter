/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { RendererInterface } from "./RendererInterface";
import { PlaceholdersExtractorInterface } from "./PlaceholdersExtractorInterface";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class PlaceholdersRenderer implements RendererInterface
{
    placeholdersTag: HTMLElement;

    constructor(placeholdersExtractor: PlaceholdersExtractorInterface)
    {
        const dom = new JSDOM();
        const document = dom.window.document;

        this.placeholdersTag = document.createElement("div");
        this.placeholdersTag.classList.add("bit__placeholders");

        placeholdersExtractor.getPlaceholders().forEach((placeholder: any) => {
            const itemTag = document.createElement("div");
            itemTag.classList.add("placeholder__item");
            itemTag.textContent = placeholder;
            this.placeholdersTag.appendChild(itemTag);
        });
    }

    getTag(): HTMLElement
    {
        return this.placeholdersTag;
    }

    embedImages(): this
    {
        return this;
    }
}

export { PlaceholdersRenderer };