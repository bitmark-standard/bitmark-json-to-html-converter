/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
declare class JSONToHTMLConverter {
    private readonly json;
    private readonly document;
    private isImageEmbeddingAllowed;
    constructor(json: string);
    getHTML(): string;
    embedImages(): JSONToHTMLConverter;
}
export { JSONToHTMLConverter };
