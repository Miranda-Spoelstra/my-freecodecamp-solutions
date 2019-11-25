/* Assignment:
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) { // LBH QVQ VG!
    let arr = str.split('');

    for (let i=0; i<arr.length; i++) {
      if (arr[i].match(/[A-Z]/)) {
        let charCode = arr[i].charCodeAt(0);
        charCode = charCode >= 78 ? charCode - 13 : charCode + 13;
        arr[i] = String.fromCharCode(charCode);
      }
    }

    console.log(arr.join(''));
    return arr.join('');
  }

// Change the inputs below to test
rot13("SERR PBQR PNZC");