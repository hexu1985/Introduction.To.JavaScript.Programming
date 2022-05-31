/*
 * File: RationalSum.js
 * --------------------
 * Simple test of the Rational class.
 */

function RationalSum() {
   let a = Rational(1, 2);
   let b = Rational(1, 3);
   let c = Rational(1, 6);
   let sum = a.add(b).add(c);
   console.log("1/2 + 1/3 + 1/6 = " + sum);
}
