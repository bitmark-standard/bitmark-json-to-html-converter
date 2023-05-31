/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { RendererInterface } from "./RendererInterface";
import { PlaceholdersExtractorInterface } from "./PlaceholdersExtractorInterface";
declare class PlaceholdersRenderer implements RendererInterface {
    placeholdersTag: HTMLElement;
    constructor(placeholdersExtractor: PlaceholdersExtractorInterface);
    getTag(): HTMLElement;
    embedImages(): this;
}
export { PlaceholdersRenderer };
