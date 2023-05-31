"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
exports.__esModule = true;
exports.RemoteImage = void 0;
var sync_request_1 = require("sync-request");
var RemoteImage = /** @class */ (function () {
    function RemoteImage(uri) {
        var response = (0, sync_request_1["default"])('GET', uri);
        this.headers = response.headers;
        this.body = response.getBody();
        this.uri = uri;
    }
    ;
    RemoteImage.prototype.getURI = function () {
        return this.uri;
    };
    RemoteImage.prototype.getHeaders = function () {
        return this.headers;
    };
    RemoteImage.prototype.getBody = function () {
        return this.body;
    };
    RemoteImage.prototype.getBase64String = function () {
        var contentType = this.getHeaders()["content-type"];
        var bodyEncoded = this.getBody().toString("base64");
        return "data:".concat(contentType, ";base64,").concat(bodyEncoded);
    };
    return RemoteImage;
}());
exports.RemoteImage = RemoteImage;
