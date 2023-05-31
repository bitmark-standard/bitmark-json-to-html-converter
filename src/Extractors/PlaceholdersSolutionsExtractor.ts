/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { PlaceholdersExtractorInterface } from "../Renderers/PlaceholdersExtractorInterface";
import { PlaceholdersInterface } from "../Bitmark/PlaceholdersInterface";
import { shuffle } from "../Helpers";

class PlaceholdersSolutionsExtractor implements PlaceholdersExtractorInterface
{
    private placeholders: string[] = [];

    constructor(placeholders: Map<string, PlaceholdersInterface>)
    {
        const placeholderNames = Object.getOwnPropertyNames(placeholders);

        placeholderNames.forEach((placeholderName: any) => {
            const placeholder = placeholders[placeholderName];
            this.placeholders.push((placeholder.solutions || []).join(", "));
        });
    }

    sortRandomly(): this
    {
        this.placeholders = shuffle(this.placeholders);
        return this;
    }

    getPlaceholders(): string[]
    {
        return this.placeholders;
    }
}

export { PlaceholdersSolutionsExtractor };