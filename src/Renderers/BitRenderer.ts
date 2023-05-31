/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { RendererInterface } from "./RendererInterface";
import { ResourceRenderer } from "./ResourceRenderer";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class BitRenderer implements RendererInterface
{
    private isImageEmbeddingAllowed: boolean = false;

    private readonly document: Document;

    private readonly contents: RendererInterface[];

    constructor(contents: RendererInterface[])
    {
        const dom = new JSDOM();
        this.document = dom.window.document;
        this.contents = contents.filter(content => content);
    }

    getTag(): HTMLElement
    {
        const bitTag = this.document.createElement("div");

        this.contents.forEach((content) => {
            if (true === this.isImageEmbeddingAllowed) {
                content.embedImages();
            }

            const tag = content.getTag();

            /**
             * Don't render empty resource tags.
             */
            if (content instanceof ResourceRenderer && !tag.hasChildNodes()) {
                return;
            }

            bitTag.appendChild(tag);
        });

        return bitTag;
    }

    embedImages(): this
    {
        this.isImageEmbeddingAllowed = true;
        return this;
    }
}

export { BitRenderer };