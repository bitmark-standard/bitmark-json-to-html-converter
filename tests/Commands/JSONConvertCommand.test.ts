/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { ConsoleInput } from "bitandblack-console/src/Console/ConsoleInput";
import { ConsoleOutput } from "bitandblack-console/src/Console/ConsoleOutput";
import { JSONConvertCommand } from "../../src/Commands/JSONConvertCommand";

it("Throws error message", async () => {
    const jsonConvertCommand = new JSONConvertCommand();
    let message = null;
    const output = process.stdout.write = jest.fn();

    try {
        jsonConvertCommand.execute(
            new ConsoleInput(),
            new ConsoleOutput()
        );
    } catch (error: unknown) {
        if (error instanceof Error) {
            message = error.message;
        }
    }

    expect(message)
        .toEqual(`The "input" argument does not exist.`)
    ;

    expect(output.mock.calls[0][0])
        .toBe("Starting conversion now.\n")
    ;
});