/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { RendererInterface } from "./RendererInterface";
import { ResourceExtractor } from "../Extractors/ResourceExtractor";
import { ResourceTypeEnum } from "../Bitmark/ResourceTypeEnum";
import { RemoteImage } from "../RemoteImage";
import { TypographicURL } from "../TypographicURL";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const qrcodeGenerator = require("qrcode-generator");

class ResourceRenderer implements RendererInterface
{
    private isImageEmbeddingAllowed: boolean = false;

    private readonly document: Document;

    private readonly resourceExtractor: ResourceExtractor;

    constructor(resourceExtractor: ResourceExtractor)
    {
        const dom = new JSDOM();
        this.document = dom.window.document;
        this.resourceExtractor = resourceExtractor;
    }

    getTag(): HTMLElement
    {
        const resourceTag = this.document.createElement("div");
        resourceTag.classList.add("bit__resource", `bit__resource--type-${this.resourceExtractor.getResourceTypeName()}`);

        let resourceItemTag = null;
        const resourceLink = this.resourceExtractor.getResourceLink();
        let addURLAsCaption = false;

        /**
         * Handles an image.
         */
        if (this.resourceExtractor.getResourceType() === ResourceTypeEnum.Image) {
            resourceItemTag = this.document.createElement("img");

            if (null === resourceLink) {
                return resourceTag;
            }

            resourceItemTag.src = true === this.isImageEmbeddingAllowed
                ? (new RemoteImage(resourceLink)).getBase64String()
                : resourceLink
            ;

            resourceItemTag.width = this.resourceExtractor.getWidth();
            resourceItemTag.height = this.resourceExtractor.getHeight();
            resourceItemTag.alt = this.resourceExtractor.getCaption();
        }

        /**
         * Handles an audio file or a video file.
         */
        else if (this.resourceExtractor.getResourceType() === ResourceTypeEnum.VideoLink
            || this.resourceExtractor.getResourceType() === ResourceTypeEnum.Audio
        ) {
            resourceItemTag = this.document.createElement("img");
            resourceItemTag.src = this.getQRCode(resourceLink.toString());
            addURLAsCaption = true;
        }

        /**
         * Handles an article.
         */
        else if (this.resourceExtractor.getResourceType() === ResourceTypeEnum.Article) {
            resourceItemTag = this.document.createElement("div");
            resourceItemTag.innerHTML = this.resourceExtractor.getBody();
        }

        if (null !== resourceItemTag) {
            resourceItemTag.classList.add("resource__item");
            resourceTag.appendChild(resourceItemTag);
        }

        if (null !== this.resourceExtractor.getResourceLink() && true === addURLAsCaption) {
            const resourceLinkTag = this.document.createElement("div");
            resourceLinkTag.classList.add("resource__link", "bit__caption");
            resourceLinkTag.innerHTML = (new TypographicURL(resourceLink)).getURL();
            resourceTag.appendChild(resourceLinkTag);
        }
        
        return resourceTag;
    }

    private getQRCode(qrContent: string): string | null {
        try {
            const qrCode = qrcodeGenerator(0, "L");
            qrCode.addData(qrContent);
            qrCode.make();
            return qrCode.createDataURL(10);
        } catch (error) {
        }

        return null;
    }

    embedImages(): this
    {
        this.isImageEmbeddingAllowed = true;
        return this;
    }
}

export { ResourceRenderer };