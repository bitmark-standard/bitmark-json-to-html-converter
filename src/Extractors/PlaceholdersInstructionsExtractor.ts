/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { getUniqued, shuffle } from "../Helpers";
import { PlaceholdersExtractorInterface } from "../Renderers/PlaceholdersExtractorInterface";
import { PlaceholdersInterface } from "../Bitmark/PlaceholdersInterface";

class PlaceholdersInstructionsExtractor implements PlaceholdersExtractorInterface
{
    private placeholders: string[] = [];

    constructor(placeholders: Map<string, PlaceholdersInterface>)
    {
        const placeholderNames = Object.getOwnPropertyNames(placeholders);

        placeholderNames.forEach((placeholderName: any) => {
            const placeholder = placeholders[placeholderName];

            if (!placeholder.instruction) {
                return;
            }

            this.placeholders.push(placeholder.instruction);
        });

        this.placeholders = getUniqued(this.placeholders);
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

export { PlaceholdersInstructionsExtractor };