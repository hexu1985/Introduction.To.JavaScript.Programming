/*
 * File: JSTokenScanner.js
 * -----------------------
 * This file implements the token scanner abstraction that is implemented
 * in a compatible way across a variety of languages.
 */

"use strict";

/*
 * This class provides an abstract data type for dividing a string
 * into tokens, which are strings of consecutive characters that form
 * logical units.  By default, the JSTokenScanner class recognizes two
 * kinds of tokens, as follows:
 *
 * 1. Strings of consecutive letters and digits representing words
 * 2. One-character strings representing punctuation or separators
 *
 * The use of the JSTokenScanner class is illustrated by the following
 * pattern, which reads the tokens in the string variable str:
 *
 *    let scanner = JSTokenScanner(str);
 *    while (scanner.hasMoreTokens()) {
 *       let token = scanner.nextToken();
 *       . . . process the token . . .
 *    }
 *
 * The JSTokenScanner class exports several additional methods that give
 * clients more control over its behavior.  Those methods are described
 * individually in the documentation.
 */

/*
 * Creates a new JSTokenScanner object that scans the specified string.
 */

function JSTokenScanner(str) {
   const MAX_TO_STRING_LENGTH = 20;
   const INITIAL_STATE = 0;
   const BEFORE_DECIMAL_POINT = 1;
   const AFTER_DECIMAL_POINT = 2;
   const STARTING_EXPONENT = 3;
   const FOUND_EXPONENT_SIGN = 4;
   const SCANNING_EXPONENT = 5;
   const LEADING_ZERO = 6;
   const SCANNING_HEX = 7;
   const FINAL_STATE = 8;

   let input = (str === undefined) ? "" : str;
   let savedToken = null;
   let cp = 0;
   let ignoreWhitespaceFlag = false;
   let ignoreCommentsFlag = false;
   let scanNumbersFlag = false;
   let scanStringsFlag = false;
   let savedCharacters = [ ];
   let savedTokens = [ ];
   let operators = { };
   let wordChars = "";
   return {
      setInput,
      hasMoreTokens,
      nextToken,
      saveToken,
      verifyToken,
      ignoreWhitespace,
      ignoreComments,
      scanNumbers,
      scanStrings,
      addWordCharacters,
      addOperator,
      getPosition,
      isValidIdentifier,
      isWordCharacter,
      getTokenType,
      getStringValue,
      getNumberValue,
      toString
   }

/*
 * Sets the scanner input to the specified string.  Any previous string
 * or saved tokens are lost.
 */

   function setInput(str) {
      input = str;
      savedTokens = [ ];
      savedCharacters = [ ];
      cp = 0;
   }

/*
 * Returns true if there are more tokens for this scanner to read.
 */

   function hasMoreTokens() {
      let token = nextToken();
      saveToken(token);
      return token !== "";
   }

/*
 * Returns the next token from this scanner.  If it is called when no
 * tokens are available, nextToken returns the empty string.
 */

   function nextToken() {
      if (savedTokens.length !== 0) {
         return savedTokens.pop();
      }
      while (true) {
         if (ignoreWhitespaceFlag) skipSpaces();
         let ch = getChar();
         if (ch === "") return "";
         if (ch === '/' && ignoreCommentsFlag) {
            ch = getChar();
            if (ch === '/') {
               ch = getChar();
               while (ch !== '\n' && ch !== '\r' && ch !== "") {
                  ch = getChar();
               }
               continue;
            } else if (ch === '*') {
               let prev = "";
               while (ch !== "" && !(prev === '*' && ch === '/')) {
                  prev = ch;
                  ch = getChar();
               }
               continue;
            }
            saveChar(ch);
            ch = '/';
         }
         if ((ch === '"' || ch === '\'') && scanStringsFlag) {
            saveChar(ch);
            return scanString();
         }
         if (isDigit(ch) && scanNumbersFlag) {
            saveChar(ch);
            return scanNumber();
         }
         if (isWordCharacter(ch)) {
            saveChar(ch);
            return scanWord();
         }
         let op = ch;
         while (isOperatorPrefix(op)) {
            ch = getChar();
            if (ch === "") break;
            op += ch;
         }
         while (op.length > 1 && !isOperator(op)) {
            saveChar(op[op.length - 1]);
            op = op.substring(0, op.length - 1);
         }
         return op;
      }
   }

/*
 * Saves one token to reread later.
 */

   function saveToken(token) {
      savedTokens.push(token);
   }

/*
 * Reads the next token and makes sure it matches the string expected.
 * If it does not, verifyToken throws an error.
 */

   function verifyToken(expected) {
      let token = nextToken();
      if (token !== expected) {
         let msg = "";
         if (token === "") {
            msg = "Missing " + expected;
         } else {
            msg = "Found " + token + " when expecting " + expected;
         }
         throw new Error(msg);
      }
   }

/*
 * Causes the scanner to ignore whitespace characters.
 */

   function ignoreWhitespace() {
      ignoreWhitespaceFlag = true;
   }

/*
 * Tells the scanner to ignore comments.  The scanner package recognizes
 * both the slash-star and slash-slash comment format from the C-based
 * family of languages.  Calling
 *
 *    scanner.ignoreComments();
 *
 * sets the scanner to ignore comments.
 */

   function ignoreComments() {
      ignoreCommentsFlag = true;
   }

/*
 * Controls how the scanner treats tokens that begin with a digit.  By
 * default, the nextToken method treats numbers and letters identically
 * and therefore does not provide any special processing for numbers.
 * Calling
 *
 *    scanner.scanNumbers();
 *
 * changes this behavior so that nextToken returns the longest substring
 * that can be interpreted as a real number.
 */

   function scanNumbers() {
      scanNumbersFlag = true;
   }

/*
 * Controls how the scanner treats tokens enclosed in quotation marks.  By
 * default, quotation marks (either single or double) are treated just like
 * any other punctuation character.  Calling
 *
 *    scanner.scanStrings();
 *
 * changes this assumption so that nextToken returns a single token
 * consisting of all characters through the matching quotation mark.
 * The quotation marks are returned as part of the scanned token so that
 * clients can differentiate strings from other token types.
 */

   function scanStrings() {
      scanStringsFlag = true;
   }

/*
 * Adds the characters in str to the set of characters that are acceptable
 * in an identifier.  For example, calling addWordCharacters("_") adds the
 * underscore to the set of characters that are legal in an identifier.
 */

   function addWordCharacters(str) {
      wordChars += str;
   }

/*
 * Defines a new multicharacter operator.  Whenever you call nextToken
 * when the input stream contains operator characters, the scanner returns
 * the longest possible operator string that can be read at that point.
 */

   function addOperator(op) {
      operators[op] = true;
   }

/*
 * Returns the current position of the scanner in the input stream.
 * If saveToken has been called, this position corresponds to the
 * beginning of the saved token.  If saveToken is called more than
 * once, the position is unavailable.
 */

   function getPosition() {
      switch (savedTokens.length) {
       case 0: return cp;
       case 1: return cp - savedTokens[0].length;
      }
      throw new Error("Internal error: getPosition after two saves");
   }

/*
 * Returns true if the token is a valid identifier.
 */

   function isValidIdentifier(token) {
      if (token.length === 0) return false;
      let ch = token.charAt(0);
      if (!isWordCharacter(ch) || isDigit(ch)) return false;
      for (let i = 1; i < token.length; i++) {
         if (!isWordCharacter(token.charAt(i))) return false;
      }
      return true;
   }

/*
 * Returns true if the character is valid in a word.
 */

   function isWordCharacter(ch) {
      return isLetterOrDigit(ch) || wordChars.indexOf(ch) !== -1;
   }

/*
 * Returns the type of this token, which is one of the following
 * constants:
 *
 *    JSTokenScanner.EOF
 *    JSTokenScanner.SEPARATOR
 *    JSTokenScanner.WORD
 *    JSTokenScanner.NUMBER
 *    JSTokenScanner.STRING
 *    JSTokenScanner.OPERATOR
 */

   function getTokenType(token) {
      if (token === "") return JSTokenScanner.EOF;
      let ch = token.charAt(0);
      if (isWhitespace(ch)) return JSTokenScanner.SEPARATOR;
      if (ch === '"' || ch === "'") return JSTokenScanner.STRING;
      if (isDigit(ch)) return JSTokenScanner.NUMBER;
      if (isWordCharacter(ch)) return JSTokenScanner.WORD;
      return JSTokenScanner.OPERATOR;
   }

/*
 * Returns the actual string value corresponding to a string token.
 */

   function getStringValue(token) {
      return eval(token);
   }

/*
 * Returns the numeric value corresponding to a number token.
 */

   function getNumberValue(token) {
      return Number(token);
   }

/*
 * Returns a printable representation of this scanner.
 */

   function toString() {
      let str = typeof(this);
      if (input.length < MAX_TO_STRING_LENGTH) {
         str += "(\"" + input + "\")";
      } else {
         str += "(" + input.length + " chars)";
      }
      return str;
   }

/*
 * Skips over any whitespace characters before the next token.
 */

   function skipWhitespace() {
      while (cp < input.length && isWhitespace(input.charAt(cp))) {
         cp++;
      }
   }

/* Private methods */

   function getChar() {
      if (savedCharacters.length === 0) {
         return (cp >= input.length) ? "" : input.charAt(cp++);
      } else {
         cp++;
         return savedCharacters.pop();
      }
   }

   function saveChar(ch) {
      cp--;
      savedCharacters.push(ch);
   }

   function skipSpaces() {
      while (true) {
         let ch = getChar();
         if (ch === "") return;
         if (!isWhitespace(ch) || operators[ch] === true) {
            saveChar(ch);
            return;
         }
      }
   }

   function scanWord() {
      let token = "";
      while (true) {
         let ch = getChar();
         if (ch === "") break;
         if (!isWordCharacter(ch)) {
            saveChar(ch);
            break;
         }
         token += ch;
      }
      return token;
   }

   function scanNumber() {
      let token = "";
      let state = INITIAL_STATE;
      while (state !== FINAL_STATE) {
         let ch = getChar();
         let xch = 'e';
         switch (state) {
          case INITIAL_STATE:
            if (ch === '0') {
               state = LEADING_ZERO;
            } else {
               state = BEFORE_DECIMAL_POINT;
            }
            break;
          case BEFORE_DECIMAL_POINT:
            if (ch === '.') {
               state = AFTER_DECIMAL_POINT;
            } else if (ch === 'E' || ch === 'e') {
               state = STARTING_EXPONENT;
               xch = ch;
            } else if (!isDigit(ch)) {
               saveChar(ch);
               state = FINAL_STATE;
            }
            break;
          case AFTER_DECIMAL_POINT:
            if (ch === 'E' || ch === 'e') {
               state = STARTING_EXPONENT;
               xch = ch;
            } else if (!isDigit(ch)) {
               saveChar(ch);
               state = FINAL_STATE;
            }
            break;
          case STARTING_EXPONENT:
            if (ch === '+' || ch === '-') {
               state = FOUND_EXPONENT_SIGN;
            } else if (isDigit(ch)) {
               state = SCANNING_EXPONENT;
            } else {
               saveChar(ch);
               state = FINAL_STATE;
            }
            break;
          case FOUND_EXPONENT_SIGN:
            if (isDigit(ch)) {
               state = SCANNING_EXPONENT;
            } else {
               saveChar(ch);
               saveChar(xch);
               state = FINAL_STATE;
            }
            break;
          case SCANNING_EXPONENT:
            if (!isDigit(ch)) {
               saveChar(ch);
               state = FINAL_STATE;
            }
            break;
          case LEADING_ZERO:
            if (ch === 'x' || ch === 'X') {
               state = SCANNING_HEX;
            } else if (ch === '.') {
               state = AFTER_DECIMAL_POINT;
            } else if (ch === 'E' || ch === 'e') {
               state = STARTING_EXPONENT;
               xch = ch;
            } else if (!isDigit(ch)) {
               saveChar(ch);
               state = FINAL_STATE;
            }
            break;
          case SCANNING_HEX:
            if (!isxdigit(ch)) {
               saveChar(ch);
               state = FINAL_STATE;
            }
            break;
          default:
            state = FINAL_STATE;
            break;
         }
         if (state !== FINAL_STATE) {
            token += ch;
         }
      }
      return token;
   }

   function scanString() {
      let token = "";
      let delim = getChar();
      token += delim;
      while (true) {
         let ch = getChar();
         if (ch === "") throw new Error("Unterminated string");
         if (ch === delim) break;
         if (ch === '\\') {
            token += scanEscapeCharacter();
         } else {
            token += ch;
         }
      }
      return token + delim;
   }

   function scanEscapeCharacter() {
      let str = "\\";
      let ch = getChar();
      str += ch;
      if (isDigit(ch) || ch === 'x' || ch === 'u') {
         let hex = !isDigit(ch);
         while (true) {
            ch = getChar();
            if ((hex) ? !isHexDigit(ch) : !isDigit(ch)) break;
            str += ch;
         }
         saveChar(ch);
      }
      return str;
   }

   function isOperator(op) {
      return operators[op] === true;
   }

   function isOperatorPrefix(op) {
      for (let str in operators) {
         if (str.startsWith(op)) return true;
      }
      return false;
   }

/* Functions to test character type */

/*
 * Returns true if the character ch is a digit.
 */

   function isDigit(ch) {
      return ch.length === 1 && "0123456789".indexOf(ch) !== -1;
   }

/*
 * Returns true if the character ch is a hexadecimal digit.
 */

   function isHexDigit(ch) {
      return ch.length === 1 && "0123456789ABCDEFabcdef".indexOf(ch) !== -1;
   }

/*
 * Returns true if the character ch is a letter in the Roman alphabet.
 */

   function isLetter(ch) {
      return isUpperCase(ch) || isLowerCase(ch);
   }

/*
 * Returns true if the character ch is a letter or a digit.
 */

   function isLetterOrDigit(ch) {
      return isLetter(ch) || isDigit(ch);
   }

/*
 * Returns true if the character ch is a lowercase letter.
 */

   function isLowerCase(ch) {
      return ch.length === 1 && ch >= "a" && ch <= "z";
   }

/*
 * Returns true if the character ch is an uppercase letter.
 */

   function isUpperCase(ch) {
      return ch.length === 1 && ch >= "A" && ch <= "Z";
   }

/*
 * Returns true if the character ch is a whitespace character.
 */

   function isWhitespace(ch) {
      return ch.length === 1 && " \t\n\r\f\v".indexOf(ch) !== -1;
   }

}

/* Class methods for JSTokenScanner */

/*
 * Returns the actual string value corresponding to a string token.
 */

JSTokenScanner.getStringValue = function(token) {
   return eval(token);
};

/*
 * Returns the numeric value corresponding to a number token.
 */

JSTokenScanner.getNumberValue = function(token) {
   return Number(token);
};

/* Public constants */

JSTokenScanner.EOF = -1;
JSTokenScanner.SEPARATOR = 0;
JSTokenScanner.WORD = 1;
JSTokenScanner.NUMBER = 2;
JSTokenScanner.STRING = 3;
JSTokenScanner.OPERATOR = 4;
