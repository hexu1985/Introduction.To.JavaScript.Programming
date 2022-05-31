/*
 * File: IsEnglishVowel.js
 * -----------------------
 * This file defines the function isEnglishVowel, which checks whether a
 * character is an English vowel.
 */

"use strict";

/*
 * Returns true if the character ch is an English vowel (A, E, I, O, or U).
 */

function isEnglishVowel(ch) {
   return ch.length === 1 && "AEIOUaeiou".indexOf(ch) !== -1;
}

/* Test program */

function TestIsEnglishVowel() {
   testVowel("A");
   testVowel("E");
   testVowel("I");
   testVowel("O");
   testVowel("U");
   testVowel("a");
   testVowel("e");
   testVowel("i");
   testVowel("o");
   testVowel("u");
   testVowel("x");
   testVowel("X");
   testVowel("1");
   testVowel("aa");
}

function testVowel(str) {
   console.log("isEnglishVowel(\"" + str + "\") -> " + isEnglishVowel(str));
}
