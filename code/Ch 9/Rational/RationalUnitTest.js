/*
 * File: RationalUnitTest.js
 * -------------------------
 * This program implements a unit test for the Rational class.
 */

/* Constants */

let ZERO = undefined;
let ONE = undefined;
let TWO = undefined;
let ONE_HALF = undefined;
let ONE_THIRD = undefined;
let TWO_THIRDS = undefined;
let MINUS_ONE = undefined;

/* Test program */

function RationalUnitTest() {
   JSUnitTest.resetErrorCount();
   ZERO = Rational(0);
   ONE = Rational(1);
   TWO = Rational(2);
   ONE_HALF = Rational(1, 2);
   ONE_THIRD = Rational(1, 3);
   TWO_THIRDS = Rational(2, 3);
   MINUS_ONE = Rational(-1);
   testFactory();
   testAdd();
   testSub();
   testMul();
   testDiv();
   testGCD();
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("RationalUnitTest succeeded");
   } else {
      console.println("RationalUnitTest failed");
   }
}

/* Test the Rational constructor */

function testFactory() {
   JSUnitTest.assertEquals(Rational(42).toString(), "42");
   JSUnitTest.assertEquals(Rational(-17).toString(), "-17");
   JSUnitTest.assertEquals(Rational(3, 1).toString(), "3");
   JSUnitTest.assertEquals(Rational(1, 3).toString(), "1/3");
   JSUnitTest.assertEquals(Rational(2, 6).toString(), "1/3");
   JSUnitTest.assertEquals(Rational(-1, 3).toString(), "-1/3");
   JSUnitTest.assertEquals(Rational(1, -3).toString(), "-1/3");
   JSUnitTest.assertEquals(Rational(0, 2).toString(), "0");
}

/* Test the add method */

function testAdd() {
   JSUnitTest.assertEquals(ONE.add(ONE).toString(), "2");
   JSUnitTest.assertEquals(ONE_HALF.add(ONE_THIRD).toString(), "5/6");
   JSUnitTest.assertEquals(ONE.add(MINUS_ONE).toString(), "0");
   JSUnitTest.assertEquals(MINUS_ONE.add(ONE).toString(), "0");
}

/* Test the subtract method */

function testSub() {
   JSUnitTest.assertEquals(ONE.sub(ONE).toString(), "0");
   JSUnitTest.assertEquals(ONE_HALF.sub(ONE_THIRD).toString(), "1/6");
   JSUnitTest.assertEquals(ONE.sub(MINUS_ONE).toString(), "2");
   JSUnitTest.assertEquals(MINUS_ONE.sub(ONE).toString(), "-2");
}

/* Test the mul method */

function testMul() {
   JSUnitTest.assertEquals(ZERO.mul(TWO).toString(), "0");
   JSUnitTest.assertEquals(ONE_HALF.mul(ONE_THIRD).toString(), "1/6");
   JSUnitTest.assertEquals(MINUS_ONE.mul(ONE_THIRD).toString(), "-1/3");
   JSUnitTest.assertEquals(MINUS_ONE.mul(MINUS_ONE).toString(), "1");
}

/* Test the div method */

function testDiv() {
   JSUnitTest.assertEquals(ZERO.div(TWO).toString(), "0");
   JSUnitTest.assertEquals(ONE.div(TWO).toString(), "1/2");
   JSUnitTest.assertEquals(TWO_THIRDS.div(ONE_THIRD).toString(), "2");
   JSUnitTest.assertEquals(TWO.div(MINUS_ONE).toString(), "-2");
}

/* Test the Rational.gcd class method */

function testGCD() {
   JSUnitTest.assertEquals(Rational.gcd(64, 729), 1);
   JSUnitTest.assertEquals(Rational.gcd(63, 49), 7);
}
