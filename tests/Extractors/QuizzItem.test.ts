/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { QuizItem } from "../../src/Extractors/QuizItem";

it("Counts items correctly", async () => {
    const quizzItem = new QuizItem();
    quizzItem.addAnswer("Yes");
    quizzItem.addAnswer("No");

    expect(quizzItem.getAnswers().length)
        .toEqual(2)
    ;
});