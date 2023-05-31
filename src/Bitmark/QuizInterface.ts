/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { ChoiceInterface } from "./ChoiceInterface";

interface QuizInterface {
    hint: string;
    item: string;
    choices?: ChoiceInterface[];
    example: string;
    isExample: boolean;
    instruction: string;
    responses?: ChoiceInterface[];
}

export { QuizInterface };