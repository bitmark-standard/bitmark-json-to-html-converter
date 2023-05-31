/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { LeadExtractor } from "../Extractors/LeadExtractor";
import { RendererInterface } from "./RendererInterface";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class LeadRenderer implements RendererInterface
{
    private readonly leadTag: HTMLElement;

    constructor(leadExtractor: LeadExtractor)
    {
        const dom = new JSDOM();
        const document = dom.window.document;

        this.leadTag = document.createElement("div");
        this.leadTag.classList.add("bit__lead");
        this.leadTag.textContent = leadExtractor.getInstruction();
    }

    getTag(): HTMLElement
    {
        return this.leadTag;
    }

    embedImages(): this
    {
        return this;
    }
}

export { LeadRenderer };