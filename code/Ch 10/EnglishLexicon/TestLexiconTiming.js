/*
 * File: TestLexiconTiming.js
 * --------------------------
 * This program checks to see how long it takes to look up every word
 * in the English lexicon.
 */

"use strict";

/* Main program */

function TestLexiconTiming() {
   let english = EnglishLexicon();
   let start = Date.now();
   english.map(checkWord);
   let elapsed = Date.now() - start;
   console.log("Time: " + elapsed + " milliseconds");

   function checkWord(word) {
      if (!english.contains(word)) {
         console.log("contains failed for " + word);
      }
   }
}
