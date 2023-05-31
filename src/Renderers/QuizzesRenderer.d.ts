/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { QuizzesExtractor } from "../Extractors/QuizzesExtractor";
import { RendererInterface } from "./RendererInterface";
declare class QuizzesRenderer implements RendererInterface {
    private readonly quizzesTag;
    constructor(quizzesExtractor: QuizzesExtractor);
    embedImages(): this;
    getTag(): HTMLElement;
}
export { QuizzesRenderer };
