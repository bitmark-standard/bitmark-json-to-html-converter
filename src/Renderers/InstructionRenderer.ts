/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { InstructionExtractor } from "../Extractors/InstructionExtractor";
import { RendererInterface } from "./RendererInterface";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class InstructionRenderer implements RendererInterface
{
    private readonly instructionTag: HTMLElement;

    constructor(instructionExtractor: InstructionExtractor)
    {
        const dom = new JSDOM();
        const document = dom.window.document;

        this.instructionTag = document.createElement("div");
        this.instructionTag.classList.add("bit__instruction");
        this.instructionTag.innerHTML = instructionExtractor.getInstruction();
    }

    getTag(): HTMLElement
    {
        return this.instructionTag;
    }

    embedImages(): this
    {
        return this;
    }
}

export { InstructionRenderer };