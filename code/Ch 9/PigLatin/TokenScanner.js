/*
 * File: TokenScanner.js
 * ---------------------
 * This file implements a simple version of a token scanner, which divides
 * a string into individual units called tokens.  This simplified version
 * recognizes only two token types:
 *
 *   1. A string of consecutive letters representing a word
 *   2. A single character string representing any other character
 *
 * The following code processes each token in the string str:
 *
 *    let scanner = TokenScanner(str);
 *    while (scanner.hasMoreTokens()) {
 *       let token = scanner.nextToken();
 *       . . . code to process the token . . .
 *    }
 */

"use strict";

/*
 * Creates a new TokenScanner object that scans the specified string.
 */

function TokenScanner(str) {
   let cp = 0;
   return { nextToken, hasMoreTokens };

/*
 * Returns the next token from this scanner.  If nextToken is called
 * when no tokens are available, it returns the empty string.
 */

   function nextToken() {
      if (cp === str.length) return "";
      let token = str.charAt(cp++);
      if (isLetter(token)) {
         while (cp < str.length && isLetter(str.charAt(cp))) {
            token += str.charAt(cp++);
         }
      }
      return token;
   }

/*
 * Returns true if there are more tokens for this scanner to read.
 */

   function hasMoreTokens() {
      return cp < str.length;
   }

}

/* Test program for the TokenScanner class */

function TestTokenScanner() {
   console.requestInput("Enter a string: ", processLine);

   function processLine(line) {
      if (line.length > 0) {
         let scanner = TokenScanner(line);
         while (scanner.hasMoreTokens()) {
            console.log('"' + scanner.nextToken() + '"');
         }
         console.requestInput("Enter a string: ", processLine);
      }
   }
}
