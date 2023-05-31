"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.ResourceExtractor = void 0;
var marked_1 = require("marked");
var ResourceTypeEnum_1 = require("../Bitmark/ResourceTypeEnum");
var ResourceExtractor = /** @class */ (function () {
    function ResourceExtractor(resource) {
        this.resourceLink = null;
        this.width = null;
        this.height = null;
        this.caption = null;
        this.body = null;
        this.resourceType = resource.type;
        this.resourceTypeName = resource.type
            .split(/(?=[A-Z])/)
            .join('-')
            .toLowerCase();
        if (resource.type === ResourceTypeEnum_1.ResourceTypeEnum.Image) {
            var media = resource.image;
            if (!media.src) {
                return;
            }
            this.resourceLink = media.src;
            this.width = media.width;
            this.height = media.height;
            this.caption = media.caption;
            return;
        }
        if (resource.type === ResourceTypeEnum_1.ResourceTypeEnum.Audio) {
            this.resourceLink = resource.audio.src;
            return;
        }
        if (resource.type === ResourceTypeEnum_1.ResourceTypeEnum.VideoLink) {
            this.resourceLink = resource.videoLink.url;
            return;
        }
        if (resource.type === ResourceTypeEnum_1.ResourceTypeEnum.Article) {
            this.body = resource.article.body;
            /**
             * Adds two line breaks before lists to help the Markdown parser finding them.
             */
            this.body = this.body.replace(/\n(\d+\.)/g, "\n\n$1");
            this.body = marked_1.marked.parse(this.body);
        }
    }
    ResourceExtractor.prototype.getResourceTypeName = function () {
        return this.resourceTypeName;
    };
    ResourceExtractor.prototype.getResourceLink = function () {
        return this.resourceLink;
    };
    ResourceExtractor.prototype.getResourceType = function () {
        return this.resourceType;
    };
    ResourceExtractor.prototype.getWidth = function () {
        return this.width;
    };
    ResourceExtractor.prototype.getHeight = function () {
        return this.height;
    };
    ResourceExtractor.prototype.getCaption = function () {
        return this.caption;
    };
    ResourceExtractor.prototype.getBody = function () {
        return this.body;
    };
    return ResourceExtractor;
}());
exports.ResourceExtractor = ResourceExtractor;
