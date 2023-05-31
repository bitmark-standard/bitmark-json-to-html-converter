/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { ContentInterface } from "./ContentInterface";

interface ResponseInterface {
    content: ContentInterface[];
    skip: number;
    take: number;
    count: number;
}

export { ResponseInterface };