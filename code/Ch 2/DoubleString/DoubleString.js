/*
 * File: DoubleString.js
 * ---------------------
 * The file defines the function doubleString, which returns a string
 * consisting of two copies of the argument.
 */

"use strict";

/*
 * Returns a new string containing two copies of str.
 */

function doubleString(str) {
   return str + str;
}

/* Test program */

function TestDoubleString() {
   console.log('doubleString("a") -> "' + doubleString("a") + '"');
   console.log('doubleString("boo") -> "' + doubleString("boo") + '"');
   console.log('doubleString("hots") -> "' + doubleString("hots") + '"');
}
