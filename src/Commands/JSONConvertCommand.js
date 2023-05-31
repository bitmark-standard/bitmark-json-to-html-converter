"use strict";
/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.JSONConvertCommand = void 0;
var AbstractConsoleCommand_1 = require("bitandblack-console/src/Commands/AbstractConsoleCommand");
var ArgumentModeEnum_1 = require("bitandblack-console/src/Commands/ArgumentModeEnum");
var ConsoleCommandInterface_1 = require("bitandblack-console/src/Commands/ConsoleCommandInterface");
var JSONToHTMLConverter_1 = require("../JSONToHTMLConverter");
var fs = require("fs");
var Helpers_1 = require("../Helpers");
var InputModeEnum_1 = require("bitandblack-console/src/Commands/InputModeEnum");
var JSONConvertCommand = /** @class */ (function (_super) {
    __extends(JSONConvertCommand, _super);
    function JSONConvertCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONConvertCommand.prototype.configure = function () {
        this
            .setName("json:convert")
            .setDescription("This command converts JSON into HTML.")
            .addInputArgument("input", ArgumentModeEnum_1.ArgumentModeEnum.REQUIRED, "The JSON input. This may be the path to a file or a stream with the JSON content.")
            .addInputArgument("output", ArgumentModeEnum_1.ArgumentModeEnum.OPTIONAL, "The HTML input.")
            .addInputOption("link-images", InputModeEnum_1.InputModeEnum.VALUE_NONE, "Link images instead of embedding them. Per default, all images will be embedded as base64 encoded strings, as this allows an easier handling through all PrintCSS renderers.");
    };
    JSONConvertCommand.prototype.execute = function (input, output) {
        output.writeln("Starting conversion now.");
        var inputArgument = input.getInputArgument("input");
        var outputArgument = input.getInputArgument("output");
        var content = inputArgument;
        var message = "Reading content from stream.";
        if ((0, Helpers_1.fileCanBeUsed)(inputArgument)) {
            message = "Reading content from <info>\"".concat(inputArgument, "\"</info>.");
            content = fs.readFileSync(inputArgument);
        }
        output.writeln(message);
        var html = null;
        try {
            var jsonToHTMLConverter = new JSONToHTMLConverter_1.JSONToHTMLConverter(content);
            if (!input.hasInputOption("link-images")) {
                jsonToHTMLConverter.embedImages();
            }
            html = jsonToHTMLConverter.getHTML();
        }
        catch (error) {
            output.writeln("<error>Error while parsing content.</error>");
            output.writeln(error.stack);
        }
        if (null === html) {
            return ConsoleCommandInterface_1.ConsoleCommandInterface.FAILURE;
        }
        if (null !== outputArgument) {
            fs.writeFileSync(outputArgument, html);
            output.writeln("Successfully written content to <info>\"".concat(outputArgument, "\"</info>."));
            return ConsoleCommandInterface_1.ConsoleCommandInterface.SUCCESS;
        }
        output.writeln(html);
        return ConsoleCommandInterface_1.ConsoleCommandInterface.SUCCESS;
    };
    return JSONConvertCommand;
}(AbstractConsoleCommand_1.AbstractConsoleCommand));
exports.JSONConvertCommand = JSONConvertCommand;
