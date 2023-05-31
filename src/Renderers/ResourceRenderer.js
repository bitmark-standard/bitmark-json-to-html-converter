"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.ResourceRenderer = void 0;
var ResourceTypeEnum_1 = require("../Bitmark/ResourceTypeEnum");
var RemoteImage_1 = require("../RemoteImage");
var TypographicURL_1 = require("../TypographicURL");
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var qrcodeGenerator = require("qrcode-generator");
var ResourceRenderer = /** @class */ (function () {
    function ResourceRenderer(resourceExtractor) {
        this.isImageEmbeddingAllowed = false;
        var dom = new JSDOM();
        this.document = dom.window.document;
        this.resourceExtractor = resourceExtractor;
    }
    ResourceRenderer.prototype.getTag = function () {
        var resourceTag = this.document.createElement("div");
        resourceTag.classList.add("bit__resource", "bit__resource--type-".concat(this.resourceExtractor.getResourceTypeName()));
        var resourceItemTag = null;
        var resourceLink = this.resourceExtractor.getResourceLink();
        var addURLAsCaption = false;
        /**
         * Handles an image.
         */
        if (this.resourceExtractor.getResourceType() === ResourceTypeEnum_1.ResourceTypeEnum.Image) {
            resourceItemTag = this.document.createElement("img");
            if (null === resourceLink) {
                return resourceTag;
            }
            resourceItemTag.src = true === this.isImageEmbeddingAllowed
                ? (new RemoteImage_1.RemoteImage(resourceLink)).getBase64String()
                : resourceLink;
            resourceItemTag.width = this.resourceExtractor.getWidth();
            resourceItemTag.height = this.resourceExtractor.getHeight();
            resourceItemTag.alt = this.resourceExtractor.getCaption();
        }
        /**
         * Handles an audio file or a video file.
         */
        else if (this.resourceExtractor.getResourceType() === ResourceTypeEnum_1.ResourceTypeEnum.VideoLink
            || this.resourceExtractor.getResourceType() === ResourceTypeEnum_1.ResourceTypeEnum.Audio) {
            resourceItemTag = this.document.createElement("img");
            resourceItemTag.src = this.getQRCode(resourceLink.toString());
            addURLAsCaption = true;
        }
        /**
         * Handles an article.
         */
        else if (this.resourceExtractor.getResourceType() === ResourceTypeEnum_1.ResourceTypeEnum.Article) {
            resourceItemTag = this.document.createElement("div");
            resourceItemTag.innerHTML = this.resourceExtractor.getBody();
        }
        if (null !== resourceItemTag) {
            resourceItemTag.classList.add("resource__item");
            resourceTag.appendChild(resourceItemTag);
        }
        if (null !== this.resourceExtractor.getResourceLink() && true === addURLAsCaption) {
            var resourceLinkTag = this.document.createElement("div");
            resourceLinkTag.classList.add("resource__link", "bit__caption");
            resourceLinkTag.innerHTML = (new TypographicURL_1.TypographicURL(resourceLink)).getURL();
            resourceTag.appendChild(resourceLinkTag);
        }
        return resourceTag;
    };
    ResourceRenderer.prototype.getQRCode = function (qrContent) {
        try {
            var qrCode = qrcodeGenerator(0, "L");
            qrCode.addData(qrContent);
            qrCode.make();
            return qrCode.createDataURL(10);
        }
        catch (error) {
        }
        return null;
    };
    ResourceRenderer.prototype.embedImages = function () {
        this.isImageEmbeddingAllowed = true;
        return this;
    };
    return ResourceRenderer;
}());
exports.ResourceRenderer = ResourceRenderer;
