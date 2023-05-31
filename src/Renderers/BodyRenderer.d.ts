/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { BodyExtractor } from "../Extractors/BodyExtractor";
import { RendererInterface } from "./RendererInterface";
import { PlaceholderExtractor } from "../Extractors/PlaceholderExtractor";
declare class BodyRenderer implements RendererInterface {
    private isImageEmbeddingAllowed;
    private readonly document;
    private readonly bodyExtractor;
    private readonly placeholderExtractor;
    constructor(bodyExtractor: BodyExtractor, placeholderExtractor: PlaceholderExtractor);
    /**
     * Extracts images from bitmark strings where they have a format different to markdown.
     *
     * @param content
     * @private
     */
    private extractImages;
    getTag(): HTMLElement;
    embedImages(): this;
}
export { BodyRenderer };
