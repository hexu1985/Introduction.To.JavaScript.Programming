/*
 * File: TestCharacterType.js
 * --------------------------
 * This program lists all the characters that fit the classifications
 * in the CharacterType library.
 */

"use strict";

/* Main program */

function TestCharacterType() {
   showCharSet("isDigit:         ", isDigit);
   showCharSet("isLetter:        ", isLetter);
   showCharSet("isLetterOrDigit: ", isLetterOrDigit);
   showCharSet("isLowerCase:     ", isLowerCase);
   showCharSet("isUpperCase:     ", isUpperCase);
   showSeparators("isWhitespace:    ");
}

/*
 * Shows all the characters in the printable set that match the predicate.
 */

function showCharSet(prefix, predicate) {
   let str = prefix;
   for (let i = 0; i < 127; i++) {
      let ch = String.fromCharCode(i);
      if (predicate(ch)) str += ch;
   }
   console.log(str);
}

/*
 * Shows all the whitespace separators using hexadecimal codes.
 */

function showSeparators(prefix) {
   let str = prefix;
   for (let i = 0; i < 127; i++) {
      let ch = String.fromCharCode(i);
      if (isWhitespace(ch)) {
         if (str !== prefix) str += ", ";
         if (ch === " ") {
            str += '" "';
         } else {
            let hex = i.toString(16).toUpperCase();
            if (hex.length === 1) hex = "0" + hex;
            str += '"\\x' + hex + '"';
         }
      }
   }
   console.log(str);
}
