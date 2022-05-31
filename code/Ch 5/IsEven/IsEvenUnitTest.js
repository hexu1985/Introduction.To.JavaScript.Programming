/*
 * File: IsEvenUnitTest.js
 * -----------------------
 * This file tests the implementation of the isEven function.
 */

"use strict";

function IsEvenUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertTrue("isEven(0) -> " + isEven(0),
                         isEven(0));
   JSUnitTest.assertTrue("isEven(12345678) -> " + isEven(12345678),
                         isEven(12345678));
   JSUnitTest.assertTrue("isEven(-4) -> " + isEven(-4),
                         isEven(-4));
   JSUnitTest.assertFalse("isEven(17) -> " + isEven(17),
                          isEven(17));
   JSUnitTest.assertFalse("isEven(-1) -> " + isEven(-1),
                          isEven(-1));
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("IsEvenUnitTest succeeded");
   } else {
      console.println("IsEvenUnitTest failed");
   }
}
