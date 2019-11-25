/* Assignment:
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanized = '';

    for (let i = 0; i < decimalValues.length; i++) {
        while (num >= decimalValues[i]) {
            romanized += romanNumerals[i];
            num -= decimalValues[i];
        }
    }
    console.log(romanized);
    return romanized;
}

convertToRoman(36);