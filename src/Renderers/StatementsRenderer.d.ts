/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { RendererInterface } from "./RendererInterface";
import { ContentInterface } from "../Bitmark/ContentInterface";
declare class StatementsRenderer implements RendererInterface {
    statementsTag: HTMLElement;
    constructor(contentPart: ContentInterface);
    getTag(): HTMLElement;
    embedImages(): this;
}
export { StatementsRenderer };
