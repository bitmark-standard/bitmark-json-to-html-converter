/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { PlaceholderExtractor } from "../../src/Extractors/PlaceholderExtractor";
import { PlaceholdersInterface } from "../../src/Bitmark/PlaceholdersInterface";

it("Can render placeholders", async () => {
    const json = {
        first: {
            type: "select",
            options: [
                {
                    text: "Text 1",
                    isCorrect: true,
                },
                {
                    text: "Text 2",
                    isCorrect: false,
                }
            ]
        }
    };

    const converted = JSON.stringify(json);
    const input: Map<string, PlaceholdersInterface> = JSON.parse(converted);

    const placeholderExtractor = new PlaceholderExtractor(input);
    const placeholderValues = placeholderExtractor.getPlaceholderValues();

    expect(placeholderValues.size)
        .toBe(1)
    ;

    const placeholderValueFirst = placeholderValues.get("first");

    expect(placeholderValueFirst.querySelector("[data-is-correct=\"true\"]").textContent)
        .toBe("Text 1")
    ;

    expect(placeholderValueFirst.querySelector("[data-is-correct=\"false\"]").textContent)
        .toBe("Text 2")
    ;
});