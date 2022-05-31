/*
 * File: TestSortTiming.js
 * -----------------------
 * This program checks to see how long it takes to sort the words
 * in the English lexicon.
 */

"use strict";

function TestSortTiming() {
   let english = EnglishLexicon();
   let start = Date.now();
   english.map(checkWord);
   let sortPlusCheckTime = Date.now() - start;
   start = Date.now();
   english.map(checkWord);
   let checkTime = Date.now() - start;
   let elapsed = sortPlusCheckTime - checkTime;
   console.log("Sort time: " + elapsed + " milliseconds");

   function checkWord(word) {
      if (!english.contains(word)) {
         console.log("contains failed for " + word);
      }
   }
}
