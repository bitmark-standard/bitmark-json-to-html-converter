/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import request from "sync-request";
import { IncomingHttpHeaders } from "http";

class RemoteImage {
    private readonly headers: IncomingHttpHeaders;
    private readonly body: Buffer | string;
    private readonly uri: string;

    constructor(uri: string) {
        const response = request('GET', uri);
        this.headers = response.headers;
        this.body = response.getBody();
        this.uri = uri;
    };

    getURI(): string {
        return this.uri;
    }

    getHeaders(): IncomingHttpHeaders {
        return this.headers;
    }

    getBody(): Buffer | string {
        return this.body;
    }

    getBase64String(): string {
        const contentType = this.getHeaders()["content-type"];
        const bodyEncoded = this.getBody().toString("base64");
        return `data:${contentType};base64,${bodyEncoded}`;
    }
}

export { RemoteImage };