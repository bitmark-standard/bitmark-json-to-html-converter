/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { marked } from "marked";
import { ResourceInterface } from "../Bitmark/ResourceInterface";
import { ResourceTypeEnum } from "../Bitmark/ResourceTypeEnum";

class ResourceExtractor
{
    private readonly resourceTypeName: string;

    private readonly resourceLink: string | null = null;

    private readonly resourceType: ResourceTypeEnum;

    private readonly width: number | null = null;

    private readonly height: number | null = null;

    private readonly caption: string | null = null;

    private readonly body: string | null = null;

    constructor(resource: ResourceInterface)
    {
        this.resourceType = resource.type;

        this.resourceTypeName = resource.type
            .split(/(?=[A-Z])/)
            .join('-')
            .toLowerCase()
        ;

        if (resource.type === ResourceTypeEnum.Image) {
            const media = resource.image;

            if (!media.src) {
                return;
            }

            this.resourceLink = media.src;
            this.width = media.width;
            this.height = media.height;
            this.caption = media.caption;
            return;
        }

        if (resource.type === ResourceTypeEnum.Audio) {
            this.resourceLink = resource.audio.src;
            return;
        }

        if (resource.type === ResourceTypeEnum.VideoLink) {
            this.resourceLink = resource.videoLink.url;
            return;
        }

        if (resource.type === ResourceTypeEnum.Article) {
            this.body = resource.article.body;

            /**
             * Adds two line breaks before lists to help the Markdown parser finding them.
             */
            this.body = this.body.replace(/\n(\d+\.)/g, "\n\n$1");

            this.body = marked.parse(this.body);
        }
    }
    
    getResourceTypeName(): string
    {
        return this.resourceTypeName;
    }

    getResourceLink(): string | null
    {
        return this.resourceLink;
    }

    getResourceType(): ResourceTypeEnum
    {
        return this.resourceType;
    }

    getWidth(): number | null
    {
        return this.width;
    }

    getHeight(): number | null
    {
        return this.height;
    }

    getCaption(): string | null
    {
        return this.caption;
    }

    getBody(): string | null
    {
        return this.body;
    }
}

export { ResourceExtractor };