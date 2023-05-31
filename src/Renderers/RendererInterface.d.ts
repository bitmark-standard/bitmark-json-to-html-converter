/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
interface RendererInterface {
    /**
     * Returns the rendered HTML element.
     */
    getTag(): HTMLElement;
    /**
     * Tells the renderer to embed images base64-encoded.
     */
    embedImages(): this;
}
export { RendererInterface };
