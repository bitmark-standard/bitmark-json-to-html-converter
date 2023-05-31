"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.JSONToHTMLConverter = void 0;
var BitRenderer_1 = require("./Renderers/BitRenderer");
var BodyExtractor_1 = require("./Extractors/BodyExtractor");
var BodyRenderer_1 = require("./Renderers/BodyRenderer");
var InstructionExtractor_1 = require("./Extractors/InstructionExtractor");
var InstructionRenderer_1 = require("./Renderers/InstructionRenderer");
var ItemExtractor_1 = require("./Extractors/ItemExtractor");
var ItemRenderer_1 = require("./Renderers/ItemRenderer");
var LeadExtractor_1 = require("./Extractors/LeadExtractor");
var LeadRenderer_1 = require("./Renderers/LeadRenderer");
var PlaceholderExtractor_1 = require("./Extractors/PlaceholderExtractor");
var PlaceholdersInstructionsExtractor_1 = require("./Extractors/PlaceholdersInstructionsExtractor");
var PlaceholdersSolutionsExtractor_1 = require("./Extractors/PlaceholdersSolutionsExtractor");
var PlaceholdersRenderer_1 = require("./Renderers/PlaceholdersRenderer");
var QuizzesExtractor_1 = require("./Extractors/QuizzesExtractor");
var QuizzesRenderer_1 = require("./Renderers/QuizzesRenderer");
var ResourceExtractor_1 = require("./Extractors/ResourceExtractor");
var ResourceRenderer_1 = require("./Renderers/ResourceRenderer");
var TextareaRenderer_1 = require("./Renderers/TextareaRenderer");
var TypeEnum_1 = require("./Bitmark/TypeEnum");
var StatementsRenderer_1 = require("./Renderers/StatementsRenderer");
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var jsBeautify = require("js-beautify");
var JSONToHTMLConverter = /** @class */ (function () {
    function JSONToHTMLConverter(json) {
        this.isImageEmbeddingAllowed = false;
        var dom = new JSDOM();
        this.document = dom.window.document;
        this.json = JSON.parse(json);
    }
    JSONToHTMLConverter.prototype.getHTML = function () {
        var _this = this;
        var content = this.json.content || [];
        if (0 === content.length) {
            console.error("content missing");
        }
        var wrap = this.document.createElement("div");
        content.forEach(function (contentPart) {
            var placeholdersSolutionsExtractor = contentPart.bit.placeholders
                ? new PlaceholdersSolutionsExtractor_1.PlaceholdersSolutionsExtractor(contentPart.bit.placeholders)
                : null;
            var placeholdersInstructionsExtractor = contentPart.bit.placeholders
                ? new PlaceholdersInstructionsExtractor_1.PlaceholdersInstructionsExtractor(contentPart.bit.placeholders)
                : null;
            var itemExtractor = contentPart.bit.item
                ? new ItemExtractor_1.ItemExtractor(contentPart.bit.item)
                : null;
            var leadExtractor = contentPart.bit.lead
                ? new LeadExtractor_1.LeadExtractor(contentPart.bit.lead)
                : null;
            var instructionExtractor = contentPart.bit.instruction
                ? new InstructionExtractor_1.InstructionExtractor(contentPart.bit.instruction)
                : null;
            var bodyExtractor = contentPart.bit.body
                ? new BodyExtractor_1.BodyExtractor(contentPart.bit.body)
                : null;
            var resourceExtractor = contentPart.bit.resource
                ? new ResourceExtractor_1.ResourceExtractor(contentPart.bit.resource)
                : null;
            var placeholderExtractor = contentPart.bit.placeholders
                ? new PlaceholderExtractor_1.PlaceholderExtractor(contentPart.bit.placeholders)
                : null;
            var quizzesExtractor = contentPart.bit.quizzes
                ? new QuizzesExtractor_1.QuizzesExtractor(contentPart.bit.quizzes)
                : null;
            /**
             * This is the basic definition for a bit and its contents. This definition can be changed
             * depending on the needs.
             */
            var contents = [
                itemExtractor && new ItemRenderer_1.ItemRenderer(itemExtractor),
                leadExtractor && new LeadRenderer_1.LeadRenderer(leadExtractor),
                instructionExtractor && new InstructionRenderer_1.InstructionRenderer(instructionExtractor),
                bodyExtractor && new BodyRenderer_1.BodyRenderer(bodyExtractor, placeholderExtractor),
                resourceExtractor && new ResourceRenderer_1.ResourceRenderer(resourceExtractor),
                quizzesExtractor && new QuizzesRenderer_1.QuizzesRenderer(quizzesExtractor),
            ];
            if (TypeEnum_1.TypeEnum.ClozeSolutionGrouped === contentPart.bit.type) {
                /**
                 * The possible answers need to be sorted randomly as they would have the correct order otherwise.
                 */
                placeholdersSolutionsExtractor.sortRandomly();
                contents = [
                    itemExtractor && new ItemRenderer_1.ItemRenderer(itemExtractor),
                    leadExtractor && new LeadRenderer_1.LeadRenderer(leadExtractor),
                    instructionExtractor && new InstructionRenderer_1.InstructionRenderer(instructionExtractor),
                    placeholdersSolutionsExtractor && new PlaceholdersRenderer_1.PlaceholdersRenderer(placeholdersSolutionsExtractor),
                    bodyExtractor && new BodyRenderer_1.BodyRenderer(bodyExtractor, placeholderExtractor),
                    resourceExtractor && new ResourceRenderer_1.ResourceRenderer(resourceExtractor),
                ];
            }
            if (TypeEnum_1.TypeEnum.ClozeInstructionGrouped === contentPart.bit.type) {
                /**
                 * The possible answers need to be sorted randomly as they would have the correct order otherwise.
                 */
                placeholdersInstructionsExtractor.sortRandomly();
                contents = [
                    itemExtractor && new ItemRenderer_1.ItemRenderer(itemExtractor),
                    leadExtractor && new LeadRenderer_1.LeadRenderer(leadExtractor),
                    instructionExtractor && new InstructionRenderer_1.InstructionRenderer(instructionExtractor),
                    placeholdersInstructionsExtractor && new PlaceholdersRenderer_1.PlaceholdersRenderer(placeholdersInstructionsExtractor),
                    bodyExtractor && new BodyRenderer_1.BodyRenderer(bodyExtractor, placeholderExtractor),
                    resourceExtractor && new ResourceRenderer_1.ResourceRenderer(resourceExtractor),
                ];
            }
            if (TypeEnum_1.TypeEnum.Essay === contentPart.bit.type) {
                contents.push(new TextareaRenderer_1.TextareaRenderer());
            }
            if (TypeEnum_1.TypeEnum.TrueFalse === contentPart.bit.type) {
                contents.push(new StatementsRenderer_1.StatementsRenderer(contentPart));
            }
            var bitRenderer = new BitRenderer_1.BitRenderer(contents);
            if (_this.isImageEmbeddingAllowed) {
                bitRenderer.embedImages();
            }
            var bitTag = bitRenderer.getTag();
            bitTag.classList.add("bit", "bit--type-".concat(contentPart.bit.type));
            wrap.appendChild(bitTag.cloneNode(true));
        });
        var output = wrap.innerHTML;
        output = jsBeautify.html(output);
        return output;
    };
    JSONToHTMLConverter.prototype.embedImages = function () {
        this.isImageEmbeddingAllowed = true;
        return this;
    };
    return JSONToHTMLConverter;
}());
exports.JSONToHTMLConverter = JSONToHTMLConverter;
