/*
 * File: Acronym.js
 * ----------------
 * This file defines the function acronym, which generates acronyms from
 * a string.
 */

"use strict";

/* Constants */

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/*
 * Generates the acronym of the specified string, which is a string formed
 * from the first letter of each word.  Word boundaries are indicated by
 * sequences of nonletters.
 */

function acronym(str) {
   let result = "";
   let inWord = false;
   for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (isLetter(ch)) {
         if (!inWord) result += ch;
         inWord = true;
      } else {
         inWord = false;
      }
   }
   return result;
}

/*
 * Returns true if the character ch is a letter.
 */

function isLetter(ch) {
   return ch.length === 1 &&
          ALPHABET.indexOf(ch.toUpperCase()) !== -1;
}

/* Test program */

function TestAcronym() {
   console.requestInput("Enter a string: ", processLine);

   function processLine(line) {
      if (line !== "") {
         console.log("acronym(\"" + line + "\") -> " + acronym(line));
         console.requestInput("Enter a string: ", processLine);
      }
   }
}
