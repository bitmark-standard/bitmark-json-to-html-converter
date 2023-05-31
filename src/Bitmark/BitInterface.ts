/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { BitFormatEnum } from "./BitFormatEnum";
import { PlaceholdersInterface } from "./PlaceholdersInterface";
import { ResourceInterface } from "./ResourceInterface";
import { StatementInterface } from "./StatementInterface";
import { QuizInterface } from "./QuizInterface";
import { TypeEnum } from "./TypeEnum";

interface BitInterface {
    id: number;
    body: string;
    hint?: string;
    item?: string;
    type: TypeEnum;
    format: BitFormatEnum;
    example?: string;
    isExample?: boolean;
    instruction?: string;
    placeholders?: Map<string, PlaceholdersInterface>;
    lead?: string;
    labelTrue?: string;
    labelFalse?: string;
    statements?: StatementInterface[];
    resource?: ResourceInterface;
    partialAnswer?: string;
    textReference?: string;
    footer?: string;
    quizzes?: QuizInterface[];
    toc?: boolean;
    level?: number;
    title?: string;
    progress?: boolean | string;
    leaveContext?: string[];
    leaveSubject?: string[];
    posterImage?: string[];
}

export { BitInterface };