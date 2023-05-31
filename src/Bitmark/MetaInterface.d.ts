/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { ChapterPathInterface } from "./ChapterPathInterface";
import { OriginBookInterface } from "./OriginBookInterface";
import { ThisBookInterface } from "./ThisBookInterface";
interface MetaInterface {
    originBook: OriginBookInterface;
    context: string;
    subject: string;
    topics: string[];
    grammar: string[];
    skills: string[];
    ageRange: any[];
    tags: string[];
    groups: string[];
    grade: string;
    complexity: string;
    levelIlr: string;
    levelCefr: string;
    levelActfl: string;
    language: string;
    learningLanguage: string;
    masterBook: null;
    copyright: string;
    publisher: null;
    license: null;
    publications: string[];
    authors: string[];
    isPreview: boolean;
    originBitID: number;
    thisBook: ThisBookInterface;
    publisherID: null;
    seriesID: null;
    chapterPath: ChapterPathInterface[];
}
export { MetaInterface };
