/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { ImageFormatEnum } from "./ImageFormatEnum";
interface ImageInterface {
    alt?: string;
    src?: string;
    width?: number | null;
    format?: ImageFormatEnum;
    height?: number | null;
    caption?: string | null;
    license?: string;
    copyright?: string;
    showInIndex?: boolean;
    widthNative?: number;
    heightNative?: number;
}
export { ImageInterface };
