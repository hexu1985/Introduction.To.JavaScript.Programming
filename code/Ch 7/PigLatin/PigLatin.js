/*
 * File: PigLatin.js
 * -----------------
 * This file defines the functions wordToPigLatin and toPigLatin.
 */

"use strict";

/*
 * Converts a multi-word string from English to Pig Latin.
 */

function toPigLatin(str) {
   let result = "";
   let start = -1;
   for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (isLetter(ch)) {
         if (start === -1) start = i;
      } else {
         if (start >= 0) {
            result += wordToPigLatin(str.substring(start, i));
         }
         start = -1;
         result += ch;
      }
   }
   if (start >= 0) {
      result += wordToPigLatin(str.substring(start));
   }
   return result;
}

/*
 * Translates a word to Pig Latin using the following rules:
 * 1. If the word begins with a vowel, add "way" to the end of the word.
 * 2. If the word begins with a consonant, extract the leading consonants
 *    up to the first vowel, move them to the end, and then add "ay".
 * 3. If the word contains no vowels, return the word unchanged.
 */

function wordToPigLatin(word) {
   let vp = findFirstVowel(word);
   if (vp === -1) {
      return word;
   } else if (vp === 0) {
      return word + "way";
   } else {
      let head = word.substring(0, vp);
      let tail = word.substring(vp);
      return tail + head + "ay";
   }
}

/*
 * Returns the index of the first vowel in the word, or -1 if none.
 */

function findFirstVowel(word) {
   for (let i = 0; i < word.length; i++) {
      if (isEnglishVowel(word.charAt(i))) return i;
   }
   return -1;
}

/*
 * Returns true if the character ch is an English vowel (A, E, I, O, or U).
 */

function isEnglishVowel(ch) {
   return ch.length === 1 && "AEIOUaeiou".indexOf(ch) !== -1;
}

/* Test program */

function PigLatin() {
   console.requestInput("Enter English string: ", processLine);

   function processLine(line) {
      if (line !== "") {
         console.log("Pig Latin equivalent: " + toPigLatin(line));
         console.requestInput("Enter English string: ", processLine);
      }
   }
}
