/*
 * File: FractionSum.js
 * --------------------
 * This program demonstrates potential inaccuracies introduced by
 * JavaScript's inexact internal representation of numbers.
 */

function FractionSum() {
   let sum = 1/2 + 1/3 + 1/6;
   console.log("1/2 + 1/3 + 1/6 = " + sum);
}
