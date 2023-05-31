/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { RendererInterface } from "./RendererInterface";
declare class TextareaRenderer implements RendererInterface {
    private readonly textareaTag;
    constructor();
    getTag(): HTMLElement;
    embedImages(): this;
}
export { TextareaRenderer };
