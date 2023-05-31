/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { ArticleInterface } from "./ArticleInterface";
import { AudioInterface } from "./AudioInterface";
import { ImageInterface } from "./ImageInterface";
import { ResourceTypeEnum } from "./ResourceTypeEnum";
import { VideoLinkInterface } from "./VideoLinkInterface";
interface ResourceInterface {
    type: ResourceTypeEnum;
    image?: ImageInterface;
    audio?: AudioInterface;
    article?: ArticleInterface;
    videoLink?: VideoLinkInterface;
}
export { ResourceInterface };
