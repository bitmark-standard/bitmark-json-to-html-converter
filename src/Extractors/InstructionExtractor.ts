/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { marked } from "marked";

class InstructionExtractor
{
    private readonly instruction: string;

    constructor(instruction: string)
    {
        this.instruction = marked.parse(instruction);
    }

    getInstruction(): string
    {
        return this.instruction;
    }
}

export { InstructionExtractor };