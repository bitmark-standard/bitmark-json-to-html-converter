/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { BitRenderer } from "./Renderers/BitRenderer";
import { BodyExtractor } from "./Extractors/BodyExtractor";
import { BodyRenderer } from "./Renderers/BodyRenderer";
import { InstructionExtractor } from "./Extractors/InstructionExtractor";
import { InstructionRenderer } from "./Renderers/InstructionRenderer";
import { ItemExtractor } from "./Extractors/ItemExtractor";
import { ItemRenderer } from "./Renderers/ItemRenderer";
import { LeadExtractor } from "./Extractors/LeadExtractor";
import { LeadRenderer } from "./Renderers/LeadRenderer";
import { PlaceholderExtractor } from "./Extractors/PlaceholderExtractor";
import { PlaceholdersInstructionsExtractor } from "./Extractors/PlaceholdersInstructionsExtractor";
import { PlaceholdersSolutionsExtractor } from "./Extractors/PlaceholdersSolutionsExtractor";
import { PlaceholdersRenderer } from "./Renderers/PlaceholdersRenderer";
import { QuizzesExtractor } from "./Extractors/QuizzesExtractor";
import { QuizzesRenderer } from "./Renderers/QuizzesRenderer";
import { RendererInterface } from "./Renderers/RendererInterface";
import { ResourceExtractor } from "./Extractors/ResourceExtractor";
import { ResourceRenderer } from "./Renderers/ResourceRenderer";
import { ResponseInterface } from "./Bitmark/ResponseInterface";
import { TextareaRenderer } from "./Renderers/TextareaRenderer";
import { TypeEnum } from "./Bitmark/TypeEnum";
import { StatementsRenderer } from "./Renderers/StatementsRenderer";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const jsBeautify = require("js-beautify");

class JSONToHTMLConverter
{
    private readonly json: ResponseInterface;

    private readonly document: Document;

    private isImageEmbeddingAllowed: boolean = false;

    constructor(json: string)
    {
        const dom = new JSDOM();
        this.document = dom.window.document;
        this.json = JSON.parse(json);
    }

    getHTML(): string {

        const content = this.json.content || [];

        if (0 === content.length) {
            console.error("content missing");
        }

        const wrap = this.document.createElement("div");

        content.forEach((contentPart) => {

            const placeholdersSolutionsExtractor = contentPart.bit.placeholders
                ? new PlaceholdersSolutionsExtractor(contentPart.bit.placeholders)
                : null
            ;

            const placeholdersInstructionsExtractor = contentPart.bit.placeholders
                ? new PlaceholdersInstructionsExtractor(contentPart.bit.placeholders)
                : null
            ;

            const itemExtractor = contentPart.bit.item
                ? new ItemExtractor(contentPart.bit.item)
                : null
            ;

            const leadExtractor: LeadExtractor | null = contentPart.bit.lead
                ? new LeadExtractor(contentPart.bit.lead)
                : null
            ;

            const instructionExtractor = contentPart.bit.instruction
                ? new InstructionExtractor(contentPart.bit.instruction)
                : null
            ;

            const bodyExtractor = contentPart.bit.body
                ? new BodyExtractor(contentPart.bit.body)
                : null
            ;

            const resourceExtractor = contentPart.bit.resource
                ? new ResourceExtractor(contentPart.bit.resource)
                : null
            ;

            const placeholderExtractor = contentPart.bit.placeholders
                ? new PlaceholderExtractor(contentPart.bit.placeholders)
                : null
            ;

            const quizzesExtractor = contentPart.bit.quizzes
                ? new QuizzesExtractor(contentPart.bit.quizzes)
                : null
            ;

            /**
             * This is the basic definition for a bit and its contents. This definition can be changed
             * depending on the needs.
             */
            let contents: RendererInterface[] = [
                itemExtractor && new ItemRenderer(itemExtractor),
                leadExtractor && new LeadRenderer(leadExtractor),
                instructionExtractor && new InstructionRenderer(instructionExtractor),
                bodyExtractor && new BodyRenderer(bodyExtractor, placeholderExtractor),
                resourceExtractor && new ResourceRenderer(resourceExtractor),
                quizzesExtractor && new QuizzesRenderer(quizzesExtractor),
            ];

            if (TypeEnum.ClozeSolutionGrouped === contentPart.bit.type) {
                /**
                 * The possible answers need to be sorted randomly as they would have the correct order otherwise.
                 */
                placeholdersSolutionsExtractor.sortRandomly();

                contents = [
                    itemExtractor && new ItemRenderer(itemExtractor),
                    leadExtractor && new LeadRenderer(leadExtractor),
                    instructionExtractor && new InstructionRenderer(instructionExtractor),
                    placeholdersSolutionsExtractor && new PlaceholdersRenderer(placeholdersSolutionsExtractor),
                    bodyExtractor && new BodyRenderer(bodyExtractor, placeholderExtractor),
                    resourceExtractor && new ResourceRenderer(resourceExtractor),
                ];
            }

            if (TypeEnum.ClozeInstructionGrouped === contentPart.bit.type) {
                /**
                 * The possible answers need to be sorted randomly as they would have the correct order otherwise.
                 */
                placeholdersInstructionsExtractor.sortRandomly();

                contents = [
                    itemExtractor && new ItemRenderer(itemExtractor),
                    leadExtractor && new LeadRenderer(leadExtractor),
                    instructionExtractor && new InstructionRenderer(instructionExtractor),
                    placeholdersInstructionsExtractor && new PlaceholdersRenderer(placeholdersInstructionsExtractor),
                    bodyExtractor && new BodyRenderer(bodyExtractor, placeholderExtractor),
                    resourceExtractor && new ResourceRenderer(resourceExtractor),
                ];
            }

            if (TypeEnum.Essay === contentPart.bit.type) {
                contents.push(
                    new TextareaRenderer(),
                );
            }

            if (TypeEnum.TrueFalse === contentPart.bit.type) {
                contents.push(
                    new StatementsRenderer(contentPart),
                );
            }

            const bitRenderer = new BitRenderer(contents);

            if (this.isImageEmbeddingAllowed) {
                bitRenderer.embedImages();
            }

            const bitTag = bitRenderer.getTag();
            bitTag.classList.add("bit", `bit--type-${contentPart.bit.type}`);

            wrap.appendChild(
                bitTag.cloneNode(true)
            );
        });

        let output = wrap.innerHTML;
        output = jsBeautify.html(output);

        return output;
    }

    embedImages(): JSONToHTMLConverter {
        this.isImageEmbeddingAllowed = true;
        return this;
    }
}

export { JSONToHTMLConverter };