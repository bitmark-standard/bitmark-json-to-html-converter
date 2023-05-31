/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { LeadExtractor } from "../Extractors/LeadExtractor";
import { RendererInterface } from "./RendererInterface";
declare class LeadRenderer implements RendererInterface {
    private readonly leadTag;
    constructor(leadExtractor: LeadExtractor);
    getTag(): HTMLElement;
    embedImages(): this;
}
export { LeadRenderer };
