/*
 * File: MathFunctionsUnitTest.js
 * ------------------------------
 * This file tests the implementation of the functions in MathFunctions.js.
 */

"use strict";

function MathFunctionsUnitTest() {
   JSUnitTest.resetErrorCount();
   AbsUnitTest();
   MaxUnitTest();
   MinUnitTest();
   SignUnitTest();
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("MathFunctionsUnitTest succeeded");
   } else {
      console.println("MathFunctionsUnitTest failed");
   }
}

function AbsUnitTest() {
   JSUnitTest.assertEquals("abs(42) -> " + abs(42), abs(42), 42);
   JSUnitTest.assertEquals("abs(0) -> " + abs(0), abs(0), 0);
   JSUnitTest.assertEquals("abs(-100) -> " + abs(-100), abs(-100), 100);
}

function MaxUnitTest() {
   JSUnitTest.assertEquals("max(5, 10) -> " + max(5, 10), max(5, 10), 10);
   JSUnitTest.assertEquals("max(-10, -20) -> " + max(-10, -20),
                          max(-10, -20), -10);
   JSUnitTest.assertEquals("max(5, 5) -> " + max(5, 5), max(5, 5), 5);
}

function MinUnitTest() {
   JSUnitTest.assertEquals("min(5, 10) -> " + min(5, 10), min(5, 10), 5);
   JSUnitTest.assertEquals("min(-10, -20) -> " + min(-10, -20),
                           min(-10, -20), -20);
   JSUnitTest.assertEquals("min(5, 5) -> " + min(5, 5), min(5, 5), 5);
}

function SignUnitTest() {
   JSUnitTest.assertEquals("sign(42) -> " + sign(42), sign(42), 1);
   JSUnitTest.assertEquals("sign(0) -> " + sign(0), sign(0), 0);
   JSUnitTest.assertEquals("sign(-100) -> " + sign(-100), sign(-100), -1);
}
