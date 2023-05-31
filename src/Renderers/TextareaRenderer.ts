/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { RendererInterface } from "./RendererInterface";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class TextareaRenderer implements RendererInterface
{
    private readonly textareaTag: HTMLElement;

    constructor()
    {
        const dom = new JSDOM();
        const document = dom.window.document;

        this.textareaTag = document.createElement("div");
        this.textareaTag.classList.add("bit__textarea");
    }

    getTag(): HTMLElement
    {
        return this.textareaTag;
    }

    embedImages(): this
    {
        return this;
    }
}

export { TextareaRenderer };