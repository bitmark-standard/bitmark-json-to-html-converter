/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { AbstractConsoleCommand } from "bitandblack-console/src/Commands/AbstractConsoleCommand";
import { ArgumentModeEnum } from "bitandblack-console/src/Commands/ArgumentModeEnum";
import { ConsoleCommandInterface } from "bitandblack-console/src/Commands/ConsoleCommandInterface";
import { InputInterface } from "bitandblack-console/src/Console/InputInterface";
import { JSONToHTMLConverter } from "../JSONToHTMLConverter";
import { OutputInterface } from "bitandblack-console/src/Console/OutputInterface";
import * as fs from "fs";
import { fileCanBeUsed } from "../Helpers";
import { InputModeEnum } from "bitandblack-console/src/Commands/InputModeEnum";

class JSONConvertCommand extends AbstractConsoleCommand {
    configure(): void {
        this
            .setName("json:convert")
            .setDescription("This command converts JSON into HTML.")
            .addInputArgument(
                "input",
                ArgumentModeEnum.REQUIRED,
                "The JSON input. This may be the path to a file or a stream with the JSON content."
            )
            .addInputArgument(
                "output",
                ArgumentModeEnum.OPTIONAL,
                "The HTML input."
            )
            .addInputOption(
                "link-images",
                InputModeEnum.VALUE_NONE,
                "Link images instead of embedding them. Per default, all images will be embedded as base64 encoded strings, as this allows an easier handling through all PrintCSS renderers."
            )
        ;
    }

    execute(input: InputInterface, output: OutputInterface): number {
        output.writeln("Starting conversion now.");

        const inputArgument = input.getInputArgument("input");
        const outputArgument = input.getInputArgument("output");

        let content: any = inputArgument;
        let message = "Reading content from stream.";

        if (fileCanBeUsed(inputArgument)) {
            message = `Reading content from <info>"${inputArgument}"</info>.`;
            content = fs.readFileSync(inputArgument);
        }

        output.writeln(message);

        let html = null;

        try {
            const jsonToHTMLConverter = new JSONToHTMLConverter(content);

            if (!input.hasInputOption("link-images")) {
                jsonToHTMLConverter.embedImages();
            }

            html = jsonToHTMLConverter.getHTML();
        } catch (error) {
            output.writeln("<error>Error while parsing content.</error>");
            output.writeln(error.stack);
        }

        if (null === html) {
            return ConsoleCommandInterface.FAILURE;
        }

        if (null !== outputArgument) {
            fs.writeFileSync(outputArgument, html);
            output.writeln(`Successfully written content to <info>"${outputArgument}"</info>.`);
            return ConsoleCommandInterface.SUCCESS;
        }

        output.writeln(html);

        return ConsoleCommandInterface.SUCCESS;
    }
}

export { JSONConvertCommand }