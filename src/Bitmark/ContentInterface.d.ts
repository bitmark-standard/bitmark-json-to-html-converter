/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { BitInterface } from "./BitInterface";
import { MetaInterface } from "./MetaInterface";
import { ChapterPathInterface } from "./ChapterPathInterface";
interface ContentInterface {
    id: number;
    bitmark: string;
    bit: BitInterface;
    bookId: number;
    deletionDate: null;
    spaceId: null;
    meta: MetaInterface;
    bitLikeCounter: number;
    bitPopularityCounter: number;
    chapterPath: ChapterPathInterface[];
}
export { ContentInterface };
