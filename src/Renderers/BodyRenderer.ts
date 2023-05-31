/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { BodyExtractor } from "../Extractors/BodyExtractor";
import { marked } from "marked";
import { RendererInterface } from "./RendererInterface";
import { RemoteImage } from "../RemoteImage";
import {PlaceholderExtractor} from "../Extractors/PlaceholderExtractor";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class BodyRenderer implements RendererInterface
{
    private isImageEmbeddingAllowed: boolean = false;

    private readonly document: Document;

    private readonly bodyExtractor: BodyExtractor;

    private readonly placeholderExtractor: PlaceholderExtractor;

    constructor(bodyExtractor: BodyExtractor, placeholderExtractor: PlaceholderExtractor)
    {
        const dom = new JSDOM();
        this.document = dom.window.document;
        this.bodyExtractor = bodyExtractor;
        this.placeholderExtractor = placeholderExtractor;
    }

    /**
     * Extracts images from bitmark strings where they have a format different to markdown.
     *
     * @param content
     * @private
     */
    private extractImages(content: string): string {
        const extractValues = (piecesExtracted) => (pipePiece) => {
            const pieceExtracted = pipePiece.split(":");

            let key = pieceExtracted.shift();
            let value = pieceExtracted.join(":");

            key = key.replace(/^@/, "");

            if ("" === key) {
                return;
            }

            const numberValues = [
                "width",
                "height"
            ];

            if (numberValues.includes(key)) {
                value = Number(value);
            }

            piecesExtracted[key] = value;
        };

        const handlePipes = () => {
            return (match) => {
                const pipePieces = match.split("|");

                const piecesExtracted = [];

                pipePieces.forEach(
                    extractValues(piecesExtracted)
                );

                const wrapperTag = this.document.createElement("div");

                const figureTag = this.document.createElement("figure");
                wrapperTag.appendChild(figureTag);

                const image = this.document.createElement("img");
                image.alt = "";

                if (piecesExtracted["width"]) {
                    image.width = piecesExtracted["width"];
                }

                image.src = true === this.isImageEmbeddingAllowed
                    ? (new RemoteImage(piecesExtracted["image"])).getBase64String()
                    : piecesExtracted["image"]
                ;

                figureTag.appendChild(image);

                if (piecesExtracted["caption"]) {
                    image.alt = piecesExtracted["caption"];
                    image.title = piecesExtracted["caption"];

                    const figcaptionTag = this.document.createElement("figcaption");
                    figcaptionTag.textContent = piecesExtracted["caption"];
                    figcaptionTag.classList.add("bit__caption");
                    figureTag.appendChild(figcaptionTag);
                }

                /**
                 * That linebreak is important to help the markdown formatter creating the
                 * correct semantics.
                 */
                return wrapperTag.innerHTML + "\n";
            };
        };

        return content.replace(
            /\|.+\|/g,
            handlePipes()
        )
    }

    getTag(): HTMLElement
    {
        const bodyTag = this.document.createElement("div");
        bodyTag.classList.add("bit__body");

        let bodyContent = this.bodyExtractor.getBody();

        if ("" === bodyContent) {
            return;
        }

        const placeholderValues = null !== this.placeholderExtractor
            ? this.placeholderExtractor.getPlaceholderValues()
            : new Map<string, HTMLElement>()
        ;

        /**
         * Extracting images with a non-markdown-conformance semantic.
         */
        bodyContent = this.extractImages(bodyContent);

        /**
         * Adds line breaks after bold text that is being used as headline.
         */
        bodyContent = bodyContent.replace(/\*\n/g, "*\n\n");

        /**
         * Adds two line breaks before lists to help the Markdown parser finding them.
         */
        bodyContent = bodyContent.replace(/\n(\d+\.)/g, "\n\n$1");

        bodyContent = marked.parse(bodyContent);

        bodyContent = bodyContent.replace(
            /{(\d+)}/g,
            (match, contents) => {

                const placeholderContainer = this.document.createElement("div");

                if (placeholderValues.has(match)) {
                    placeholderContainer.appendChild(placeholderValues.get(match));
                }

                return `<span class="bit__placeholder" data-placeholder-id="${contents}">${placeholderContainer.innerHTML}</span>`;
            }
        );

        bodyTag.innerHTML = bodyContent;
        return bodyTag;
    }

    embedImages(): this
    {
        this.isImageEmbeddingAllowed = true;
        return this;
    }
}

export { BodyRenderer };