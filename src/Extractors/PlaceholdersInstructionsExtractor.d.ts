/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { PlaceholdersExtractorInterface } from "../Renderers/PlaceholdersExtractorInterface";
import { PlaceholdersInterface } from "../Bitmark/PlaceholdersInterface";
declare class PlaceholdersInstructionsExtractor implements PlaceholdersExtractorInterface {
    private placeholders;
    constructor(placeholders: Map<string, PlaceholdersInterface>);
    sortRandomly(): this;
    getPlaceholders(): string[];
}
export { PlaceholdersInstructionsExtractor };
