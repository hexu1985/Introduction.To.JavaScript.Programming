/*
 * File: XSquaredMinusFiveUnitTest.js
 * ----------------------------------
 * This file tests the implementation of the function f defined in
 * XSquaredMinusFive.js.
 */

"use strict";

function XSquaredMinusFiveUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertEquals("f(-3) -> " + f(-3), f(-3), 4);
   JSUnitTest.assertEquals("f(-2) -> " + f(-2), f(-2), -1);
   JSUnitTest.assertEquals("f(-1) -> " + f(-1), f(-1), -4);
   JSUnitTest.assertEquals("f(0) -> " + f(0), f(0), -5);
   JSUnitTest.assertEquals("f(1) -> " + f(1), f(1), -4);
   JSUnitTest.assertEquals("f(2) -> " + f(2), f(2), -1);
   JSUnitTest.assertEquals("f(3) -> " + f(3), f(3), 4);
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("XSquaredMinusFiveUnitTest succeeded");
   } else {
      console.println("XSquaredMinusFiveUnitTest failed");
   }
}
