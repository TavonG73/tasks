/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const bookList: number[] = [];
    if (numbers.length === 0) return bookList;
    const bookFirst: number[] = [numbers[0]];
    const finalIndex: number =
        numbers[1] !== null ? numbers[numbers.length - 1] : bookFirst[0];
    const bookLast: number[] = [...bookFirst, finalIndex];
    return bookLast;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const strings = numbers.map((str: string): number =>
        isNaN(Number(str)) ? 0 : parseInt(str)
    );
    return strings;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollars: string[] = amounts.map((amount: string): string => {
        return amount.startsWith("$") ? amount.substring(1) : amount;
    });
    const money: number[] = dollars.map((amount: string): number => {
        return isNaN(Number(amount)) || amount === "" ? 0 : parseInt(amount);
    });
    return money;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const question = messages.filter(
        (message: string): boolean => message.endsWith("?") === false
    );
    const shout: string[] = question.map((message: string): string => {
        return message.endsWith("!") ? message.toUpperCase() : message;
    });
    return shout;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const wordArray = words.filter(
        (message: string): boolean => message.length < 4
    );
    return wordArray.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) return true;
    const allColors = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return allColors;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = 0;
    if (addends.length === 0) return "0=0";
    const addTotal: string[] = addends.map((add: number): string => {
        sum += add;
        return add + "+";
    });
    const strMath = [sum, "=", ...addTotal].join("").toString();
    return strMath.substring(0, strMath.length - 1);
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
    let sum = 0;
    values.map((value: number): number => {
        if (values.length > 1 && values[0] < 0) return 0;
        sum += value;
        if (value < 0) {
            sum += value;
            return sum;
        }
        return sum;
    });
    const newArray = [...values];
    let insertNum = newArray.findIndex((element) => element < 0);
    if (insertNum !== -1) insertNum++;
    newArray.splice(
        newArray.findIndex((element) => element < 0) !== -1
            ? insertNum
            : newArray.length,
        0,
        sum
    );
    return newArray;
}
