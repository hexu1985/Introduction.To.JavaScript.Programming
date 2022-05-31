/*
 * File: SimplePlural.js
 * ---------------------
 * The file defines the function simplePlural, which creates a plural
 * form by adding an "s" to the end of the word.
 */

"use strict";

/*
 * Returns the simple plural form of the word, which is created by adding
 * an "s" to the end. This function will not return the correct plural
 * form for words ending in "s", "x", "z", "ch", or "sh"; implementing
 * that more sophisticated function is an exercise in the chapter on
 * strings.
 */

function simplePlural(str) {
   return str + "s";
}

/* Test program */

function TestSimplePlural() {
   console.log('simplePlural("cat") -> "' + simplePlural("cat") + '"');
   console.log('simplePlural("program") -> "' + simplePlural("program") + '"');
}
