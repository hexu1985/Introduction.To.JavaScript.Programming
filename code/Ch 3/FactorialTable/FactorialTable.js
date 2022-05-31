/*
 * File: FactorialTable.js
 * -----------------------
 * This program defines the function FactorialTable, which prints a table
 * of factorials in a specified range.
 */

"use strict";

/* Constants */

const LOWER_LIMIT = 0;
const UPPER_LIMIT = 10;
const NUMBER_WIDTH = 2;
const FACTORIAL_WIDTH = 7;

/*
 * Displays a table of factorials between LOWER_LIMIT and UPPER_LIMIT.
 */

function FactorialTable() {
   for (let i = LOWER_LIMIT; i <= UPPER_LIMIT; i++) {
      console.log(alignRight(i, NUMBER_WIDTH) + "! = " +
                  alignRight(fact(i), FACTORIAL_WIDTH));
   }
}

/*
 * Returns the factorial of n.  The factorial is simply the product of
 * the integers between 1 and n, inclusive.
 */

function fact(n) {
   let result = 1;
   for (let i = 1; i <= n; i++) {
      result *= i;
   }
   return result;
}

/*
 * Returns a string in which value appears at the right edge of a field
 * that is at least the specified width.  If the value does not fit in
 * that field, the returned string will be longer than the specified width.
 */

function alignRight(value, width) {
   let str = "" + value;
   while (str.length < width) {
      str = " " + str;
   }
   return str;
}
