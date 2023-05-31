/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { OptionsInterface } from "./OptionsInterface";

interface PlaceholdersInterface {
    hint: string;
    item: string;
    type: string;
    example: string;
    options?: OptionsInterface[],
    isExample: boolean;
    solutions?: string[];
    instruction: string;
    isCaseSensitive: boolean;
}

export { PlaceholdersInterface };