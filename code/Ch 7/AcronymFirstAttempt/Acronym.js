/*
 * File: AcronymFirstAttempt.js
 * ----------------------------
 * This file defines the first version of the acronym function, which
 * uses spaces to identify the word boundaries.
 */

"use strict";

/*
 * Generates the acronym of the specified string, which is a string formed
 * from the first letter of each word.  Word boundaries are indicated by
 * spaces.  This implementation fails when there are multiple consecutive
 * spaces, spaces at the beginning or end of the string, separators
 * other than spaces, or the string is empty.
 */

function acronym(str) {
   let result = str.charAt(0);
   let sp = str.indexOf(" ");
   while (sp !== -1) {
      result += str.charAt(sp + 1);
      sp = str.indexOf(" ", sp + 1);
   }
   return result;
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
