/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { ResourceInterface } from "../Bitmark/ResourceInterface";
import { ResourceTypeEnum } from "../Bitmark/ResourceTypeEnum";
declare class ResourceExtractor {
    private readonly resourceTypeName;
    private readonly resourceLink;
    private readonly resourceType;
    private readonly width;
    private readonly height;
    private readonly caption;
    private readonly body;
    constructor(resource: ResourceInterface);
    getResourceTypeName(): string;
    getResourceLink(): string | null;
    getResourceType(): ResourceTypeEnum;
    getWidth(): number | null;
    getHeight(): number | null;
    getCaption(): string | null;
    getBody(): string | null;
}
export { ResourceExtractor };
