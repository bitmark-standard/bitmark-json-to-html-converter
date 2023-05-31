/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

class BodyExtractor
{
    private readonly body: string;

    constructor(body: string)
    {
        this.body = body;
    }

    getBody(): string
    {
        return this.body;
    }
}

export { BodyExtractor };