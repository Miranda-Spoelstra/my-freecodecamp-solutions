/* Assignment:
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const decimalVals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const valuesSize = decimalVals.length;
    let romanized = '';

    // note: if used or iterated over more than once, store something in a variable. Is more efficient
    for (let i = 0; i < valuesSize; i++) {
        const decimalVal = decimalVals[i];
        const romanVal = romanNumerals[i];
        while (num >= decimalVal) {
            romanized += romanVal;
            num -= decimalVal;
        }
    }
    return romanized;
}

convertToRoman(36);