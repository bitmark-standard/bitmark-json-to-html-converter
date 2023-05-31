/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import * as fs from "fs";

const shuffle = (array) => {
    const arrayShuffeled = [...array];
    let currentIndex = array.length, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arrayShuffeled[currentIndex], arrayShuffeled[randomIndex]] = [
            arrayShuffeled[randomIndex], arrayShuffeled[currentIndex]
        ];
    }

    return arrayShuffeled;
};

const fileCanBeUsed = (file): boolean => {
    if (!fs.existsSync(file)) {
        return false;
    }

    let isAccessible = true;

    try {
        fs.accessSync(file, fs.constants.R_OK);
    } catch (error) {
        isAccessible = false;
    }

    return isAccessible;
};

const getUniqued = (input: string[]): string[] => [
    ...new Set(input)
];

export { fileCanBeUsed, shuffle, getUniqued };