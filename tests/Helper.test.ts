/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { fileCanBeUsed, getUniqued, shuffle } from "../src/Helpers";

it("Can shuffle arrays", async () => {
    const input = [1, 2, 3, 4, 5];
    const output1 = shuffle(input);
    const output2 = shuffle(input);

    expect(input)
        .toStrictEqual([1, 2, 3, 4, 5])
    ;

    expect(input)
        .not
        .toStrictEqual(output1)
    ;

    expect(output1)
        .not
        .toStrictEqual(output2)
    ;
});

it("Can read files", async () => {
    const file1 = "./tests/Helper.test.ts";
    const fileCanBeUsed1 = fileCanBeUsed(file1);

    expect(fileCanBeUsed1)
        .toBe(true)
    ;

    const file2 = "./tests/Helper.test.ts_MISSING";
    const fileCanBeUsed2 = fileCanBeUsed(file2);

    expect(fileCanBeUsed2)
        .toBe(false)
    ;
});

it("Can unique arrays", async () => {
    const input = ["first", "second", "third", "second"];
    const uniqued = getUniqued(input);

    expect(uniqued)
        .toStrictEqual(["first", "second", "third"])
    ;
});