/*
 * File: MathFunctions.js
 * ----------------------
 * The file implements the three functions from the Math class that are
 * used as examples in the chapter.
 */

"use strict";

/*
 * Returns the absolute value of the argument x.
 */

function abs(x) {
   if (x < 0) {
      return -x;
   } else {
      return x;
   }
}

/*
 * Returns the larger of the arguments x and y.  This method implements
 * max using the longer if-then-else form.
 */

function max(x, y) {
   if (x > y) {
      return x;
   } else {
      return y;
   }
}

/*
 * Returns the smaller of the arguments x and y.  This method implements
 * min using the question-mark-colon operator.
 */

function min(x, y) {
   return (x < y) ? x : y;
}

/*
 * Returns the sign of a number.  The return value is -1 for negative
 * numbers, 0 for zero, and +1 for positive numbers.  Note that the sign
 * function is predefined in both SJS and ECMA JavaScript 6, but needs
 * to be defined explicitly in earlier versions of JavaScript.
 */

function sign(x) {
   if (x < 0) {
      return -1;
   } else if (x === 0) {
      return 0;
   } else {
      return 1;
   }
}
