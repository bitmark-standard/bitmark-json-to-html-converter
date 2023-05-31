/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

class ItemExtractor
{
    private readonly item: string;

    constructor(item: string)
    {
        this.item = item;
    }

    getItem(): string
    {
        return this.item;
    }
}

export { ItemExtractor };