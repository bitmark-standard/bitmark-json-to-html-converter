/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { ItemExtractor } from "../Extractors/ItemExtractor";
import { RendererInterface } from "./RendererInterface";
declare class ItemRenderer implements RendererInterface {
    private readonly itemTag;
    constructor(itemExtractor: ItemExtractor);
    getTag(): HTMLElement;
    embedImages(): this;
}
export { ItemRenderer };
