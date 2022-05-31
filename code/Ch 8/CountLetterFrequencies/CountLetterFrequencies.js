/*
 * File: CountLetterFrequencies.js
 * -------------------------------
 * This function displays a table of letter frequencies.
 */

"use strict";

/*
 * Displays a letter-frequency table for input, which is either a string
 * or an array of strings.  Letters that never appear are not included
 * in the table.
 */

function countLetterFrequencies(input) {
   const LETTER_BASE = "A".charCodeAt(0);
   displayFrequencyTable(createFrequencyTable(input));

   function createFrequencyTable(input) {
      if (!Array.isArray(input)) input = [ input ];
      let letterCounts = createArray(26, 0);
      for (let i = 0; i < input.length; i++) {
         let line = input[i];
         for (let j = 0; j < line.length; j++) {
            let ch = line.charAt(j).toUpperCase();
            if (isLetter(ch)) {
               letterCounts[ch.charCodeAt(0) - LETTER_BASE]++;
            }
         }
      }
      return letterCounts;
   }

   function displayFrequencyTable(letterCounts) {
      for (let i = 0; i < 26; i++) {
         let count = letterCounts[i];
         if (count > 0) {
            let ch = String.fromCharCode(LETTER_BASE + i);
            console.log(ch + ": " + count);
         }
      }
   }
}

/* Test program */

function TestCountLetterFrequencies() {
   console.log("Enter lines of text, ending with a blank line.");
   readLineArray("", countLetterFrequencies);
}
