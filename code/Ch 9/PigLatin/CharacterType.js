/*
 * File: CharacterType.js
 * ----------------------
 * This library exports a set of functions to classify a character by type.
 */

/*
 * Returns true if the character ch is a digit.
 */

function isDigit(ch) {
   return ch.length === 1 && ch >= "0" && ch <= "9";
}

/*
 * Returns true if the character ch is a letter in the Roman alphabet.
 */

function isLetter(ch) {
   return isLowerCase(ch) || isUpperCase(ch);
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
 * Returns true if the character ch is a "whitespace" character.
 */

function isWhitespace(ch) {
   return ch === " " || ch === "\t" || ch === "\n" || ch === "\f" ||
                        ch === "\r" || ch === "\v";
}
