/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { InstructionExtractor } from "../../src/Extractors/InstructionExtractor";

it("Can render instructions", async () => {
    const input = "# Hello world!";
    const output = "<h1 id=\"hello-world\">Hello world!</h1>\n";

    const instructionExtractor = new InstructionExtractor(input);

    expect(instructionExtractor.getInstruction())
        .toBe(output)
    ;
});