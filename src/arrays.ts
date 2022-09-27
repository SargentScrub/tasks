/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let answer: number[];
    if (numbers.length === 0) {
        answer = [];
    } else if (numbers.length === 1) {
        answer = [...numbers, ...numbers];
    } else {
        answer = numbers.filter(
            (value: number): boolean =>
                numbers.indexOf(value) === 0 ||
                numbers.indexOf(value) === numbers.length - 1
        );
    }
    return answer;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((value: number): number => value * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const answer = numbers.map((value: string): number => {
        if (parseInt(value)) {
            return parseInt(value);
        } else {
            return 0;
        }
    });
    return answer;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((value: string): number => {
        if (value.charAt(0) === "$") {
            const copy = value.slice(1);
            if (parseInt(copy)) {
                return parseInt(copy);
            } else {
                return 0;
            }
        } else {
            if (parseInt(value)) {
                return parseInt(value);
            } else {
                return 0;
            }
        }
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removeQuestions = messages.filter(
        (value: string): boolean => !(value.charAt(value.length - 1) === "?")
    );
    const answer = removeQuestions.map((value: string): string =>
        value.charAt(value.length - 1) === "!" ? value.toUpperCase() : value
    );

    return answer;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const helper = (currentTotal: number, value: string): number => {
        if (value.length < 4) {
            return currentTotal + 1;
        } else {
            return currentTotal;
        }
    };
    const answer = words.reduce(helper, 0);
    return answer;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const helper = (currentValue: boolean, value: string): boolean => {
        if (currentValue === false) {
            return false;
        } else if (value === "red" || value === "blue" || value === "green") {
            return true;
        } else {
            return false;
        }
    };

    const answer = colors.reduce(helper, true);
    return answer;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const helperSum = (currentTotal: number, value: number): number => {
        return currentTotal + value;
    };
    const mathSum = addends.reduce(helperSum, 0);
    const helperString = (currentTotal: string, value: number): string => {
        return currentTotal + value.toString() + "+";
    };
    const stringSum = addends.reduce(helperString, "");
    let newString = "";
    if (stringSum.length === 0) {
        newString = "0";
    } else {
        newString = stringSum.slice(0, stringSum.length - 1);
    }
    const answer = mathSum.toString() + "=" + newString;
    return answer;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
