/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
/// <reference types="node" />
/// <reference types="node" />
import { IncomingHttpHeaders } from "http";
declare class RemoteImage {
    private readonly headers;
    private readonly body;
    private readonly uri;
    constructor(uri: string);
    getURI(): string;
    getHeaders(): IncomingHttpHeaders;
    getBody(): Buffer | string;
    getBase64String(): string;
}
export { RemoteImage };
