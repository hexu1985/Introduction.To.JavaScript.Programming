/*
 * File: PigLatin.js
 * -----------------
 * This file defines the functions wordToPigLatin and toPigLatin.
 */

"use strict";

/*
 * Converts a multi-word string from English to Pig Latin.  This version
 * uses the token scanner to separate the words.
 */

function toPigLatin(str) {
   let result = "";
   let scanner = TokenScanner(str);
   while (scanner.hasMoreTokens()) {
      let token = scanner.nextToken();
      if (isEntirelyAlphabetic(token)) {
         token = wordToPigLatin(token);
      }
      result += token;
   }
   return result;
}

/*
 * Translates a word to Pig Latin using the following rules:
 *
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
 * Returns true if the character ch is a letter.
 */

function isLetter(ch) {
   return ch.length === 1 && ((ch >= "A" && ch <= "Z") ||
                              (ch >= "a" && ch <= "z"));
}

/*
 * Returns true if the character ch is an English vowel (A, E, I, O, or U).
 */

function isEnglishVowel(ch) {
   return ch.length === 1 && "AEIOUaeiou".indexOf(ch) !== -1;
}

/*
 * Returns true if the word contains only alphabetic characters.
 */

function isEntirelyAlphabetic(str) {
   if (str === "") return false;
   for (let i = 0; i < str.length; i++) {
      if (!isLetter(str.charAt(i))) return false;
   }
   return true;
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
