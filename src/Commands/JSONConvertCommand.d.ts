/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association
 */
import { AbstractConsoleCommand } from "bitandblack-console/src/Commands/AbstractConsoleCommand";
import { InputInterface } from "bitandblack-console/src/Console/InputInterface";
import { OutputInterface } from "bitandblack-console/src/Console/OutputInterface";
declare class JSONConvertCommand extends AbstractConsoleCommand {
    configure(): void;
    execute(input: InputInterface, output: OutputInterface): number;
}
export { JSONConvertCommand };
