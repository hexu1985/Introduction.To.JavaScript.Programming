/*
 * File: Palindrome.js
 * -------------------
 * This file implements a function to determine whether a string is a
 * palindrome, which is a string that reads the same backwards and forwards.
 */

"use strict";

/*
 * Checks whether a string is a palindrome.
 */

function isPalindrome(str) {
   return str === reverseString(str);
}

/*
 * Returns a string with the characters reversed.
 */

function reverseString(str) {
   let result = "";
   for (let i = 0; i < str.length; i++) {
      result = str.charAt(i) + result;
   }
   return result;
}

/* Test program */

function TestPalindrome() {
   console.requestInput("Enter a string: ", processLine);

   function processLine(line) {
      if (line !== "") {
         console.log("isPalindrome(\"" + line + "\") -> " +
                      isPalindrome(line));
         console.requestInput("Enter a string: ", processLine);
      }
   }
}
