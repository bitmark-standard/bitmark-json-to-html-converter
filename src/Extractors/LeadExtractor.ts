/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

class LeadExtractor
{
    private readonly instruction: string;

    constructor(instruction: string)
    {
        this.instruction = instruction;
    }

    getInstruction(): string
    {
        return this.instruction;
    }
}

export { LeadExtractor };