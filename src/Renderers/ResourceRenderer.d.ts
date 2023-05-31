/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { RendererInterface } from "./RendererInterface";
import { ResourceExtractor } from "../Extractors/ResourceExtractor";
declare class ResourceRenderer implements RendererInterface {
    private isImageEmbeddingAllowed;
    private readonly document;
    private readonly resourceExtractor;
    constructor(resourceExtractor: ResourceExtractor);
    getTag(): HTMLElement;
    private getQRCode;
    embedImages(): this;
}
export { ResourceRenderer };
