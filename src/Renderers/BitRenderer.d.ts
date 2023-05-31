/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { RendererInterface } from "./RendererInterface";
declare class BitRenderer implements RendererInterface {
    private isImageEmbeddingAllowed;
    private readonly document;
    private readonly contents;
    constructor(contents: RendererInterface[]);
    getTag(): HTMLElement;
    embedImages(): this;
}
export { BitRenderer };
