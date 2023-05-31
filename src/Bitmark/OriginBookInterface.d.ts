/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { OriginBookTypeEnum } from "./OriginBookTypeEnum";
interface OriginBookInterface {
    bookID: number;
    publisherID: number;
    title: string;
    externalID: string;
    type: OriginBookTypeEnum;
    spaceID: null;
    seriesID: string;
    seriesTitle: string;
    subtitle: string;
    subject: string;
    subtype: string;
    isLiveBook: boolean;
    isSmartBook: boolean;
    isHighQuality: boolean;
    isPublic: boolean;
}
export { OriginBookInterface };
