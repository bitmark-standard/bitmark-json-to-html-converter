/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { InstructionExtractor } from "../Extractors/InstructionExtractor";
import { RendererInterface } from "./RendererInterface";
declare class InstructionRenderer implements RendererInterface {
    private readonly instructionTag;
    constructor(instructionExtractor: InstructionExtractor);
    getTag(): HTMLElement;
    embedImages(): this;
}
export { InstructionRenderer };
