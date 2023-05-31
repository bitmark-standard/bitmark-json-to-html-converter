/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { PlaceholdersInterface } from "../Bitmark/PlaceholdersInterface";
declare class PlaceholderExtractor {
    private readonly placeholderValues;
    private readonly document;
    constructor(placeholders: Map<string, PlaceholdersInterface>);
    getPlaceholderValues(): Map<string, HTMLElement>;
}
export { PlaceholderExtractor };
