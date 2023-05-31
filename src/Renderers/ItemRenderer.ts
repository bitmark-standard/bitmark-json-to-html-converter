/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { ItemExtractor } from "../Extractors/ItemExtractor";
import { RendererInterface } from "./RendererInterface";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class ItemRenderer implements RendererInterface
{
    private readonly itemTag: HTMLElement;

    constructor(itemExtractor: ItemExtractor)
    {
        const dom = new JSDOM();
        const document = dom.window.document;

        this.itemTag = document.createElement("div");
        this.itemTag.classList.add("bit__item");
        this.itemTag.textContent = itemExtractor.getItem();
    }

    getTag(): HTMLElement
    {
        return this.itemTag;
    }

    embedImages(): this
    {
        return this;
    }
}

export { ItemRenderer };