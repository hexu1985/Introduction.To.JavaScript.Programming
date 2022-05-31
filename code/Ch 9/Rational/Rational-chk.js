/*
 * File: Rational.js
 * -----------------
 * This file defines a simple class for representing rational numbers,
 * which are the quotients of two integers.
 */

"use strict";

/*
 * Creates a new Rational object with num as its numerator and den as its
 * denominator.  If den is not supplied, the Rational number creates an
 * integer by setting its value to 1.  The implementation ensures that the
 * following conditions hold for each rational number:
 *   1. The denominator must be greater than 0.
 *   2. The number 0 is always represented as 0/1.
 *   3. The fraction is always reduced to lowest terms.
 */

function Rational(num, den) {
   if (den === undefined) den = 1;
   if (den === 0) return NaN;
   if (num === 0) {
      den = 1;
   } else {
      if (den < 0) {
         den = -den;
         num = -num;
      }
      let g = gcd(Math.abs(num), den);
      num = num / g;
      den = den / g;
   }
   return { add, sub, mul, div, getNum, getDen, toString };

/*
 * Creates a new Rational by adding r to this Rational object.
 */

   function add(r) {
      return Rational(num * r.getDen() + r.getNum() * den, den * r.getDen());
   }

/*
 * Creates a new Rational by subtracting r from this Rational object.
 */

   function sub(r) {
      return Rational(num * r.getDen() - r.getNum() * den, den * r.getDen());
   }

/*
 * Creates a new Rational by multiplying this Rational object by r.
 */

   function mul(r) {
      return Rational(num * r.getNum(), den * r.getDen());
   }

/*
 * Creates a new Rational by dividing this Rational object by r.
 */

   function div(r) {
      return Rational(num * r.getDen(), den * r.getNum());
   }

/*
 * Returns the numerator of this Rational object.
 */

   function getNum() {
      return num;
   }

/*
 * Returns the denominator of this Rational object.
 */

   function getDen() {
      return den;
   }

/*
 * Converts this Rational object to a string.
 */

   function toString() {
      if (den === 1) return "" + num;
      return num + "/" + den;
   }

/*
 * Calculates the greatest common divisor using Euclid's algorithm.
 */

   function gcd(x, y) {
      let r = x % y;
      while (r !== 0) {
         x = y;
         y = r;
         r = x % y;
      }
      return y;
   }
}
