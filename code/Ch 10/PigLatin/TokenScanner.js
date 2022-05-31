/*
 * File: TokenScanner.js
 * ---------------------
 * This file implements a simple version of a token scanner class.  A token
 * scanner is an abstract data type that divides a string into individual
 * tokens, which are strings of consecutive characters that form logical
 * units.  This simplified version recognizes two token types:
 *
 *   1. A string of consecutive letters and digits
 *   2. A single character string
 *
 * To use this class, you must first create a TokenScanner instance using
 * the declaration
 *
 *    let scanner = TokenScanner(str);
 *
 * Once you have initialized the scanner, you can retrieve the next token
 * from the token stream by calling
 *
 *    let token = scanner.nextToken();
 *
 * To determine whether any tokens remain to be read, you can either
 * call the predicate method scanner.hasMoreTokens() or check to see
 * whether nextToken returns the empty string.
 *
 * The following code fragment serves as a pattern for processing each
 * token in the string str:
 *
 *    let scanner = TokenScanner(str);
 *    while (scanner.hasMoreTokens()) {
 *       let token = scanner.nextToken();
 *       . . . code to process the token . . .
 *    }
 *
 * By default, TokenScanner treats whitespace characters as operators
 * and returns them as single-character tokens.  You can ignore these
 * characters by making the following call:
 *
 *    scanner.ignoreWhitespace();
 */

"use strict";

/*
 * Creates a new TokenScanner object that scans the specified string.
 */

function TokenScanner(str) {
   let cp = 0;
   let ignoreWhitespaceFlag = false;
   return { nextToken, hasMoreTokens, ignoreWhitespace };

/*
 * Returns the next token from this scanner.  If nextToken is called
 * when no tokens are available, it returns the empty string.
 */

   function nextToken() {
      if (ignoreWhitespaceFlag) skipWhitespace();
      if (cp === str.length) return "";
      let token = str.charAt(cp++);
      if (isLetterOrDigit(token)) {
         while (cp < str.length && isLetterOrDigit(str.charAt(cp))) {
            token += str.charAt(cp++);
         }
      }
      return token;
   }

/*
 * Returns true if there are more tokens for this scanner to read.
 */

   function hasMoreTokens() {
      if (ignoreWhitespaceFlag) skipWhitespace();
      return cp < str.length;
   }

/*
 * Tells the scanner to ignore whitespace characters.
 */

   function ignoreWhitespace() {
      ignoreWhitespaceFlag = true;
   }

/*
 * Skips over any whitespace characters before the next token.
 */

   function skipWhitespace() {
      while (cp < str.length && isWhitespace(str.charAt(cp))) {
         cp++;
      }
   }

}

/* Test program for the TokenScanner class */

function TestTokenScanner() {
   console.requestInput("Enter a string: ", processLine);

   function processLine(line) {
      if (line.length > 0) {
         let scanner = TokenScanner(line);
         if (line.startsWith(" ")) scanner.ignoreWhitespace();
         while (scanner.hasMoreTokens()) {
            console.log('"' + scanner.nextToken() + '"');
         }
         console.requestInput("Enter a string: ", processLine);
      }
   }
}
