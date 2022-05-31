/*
 * File: IsDivisibleByUnitTest.js
 * ------------------------------
 * This file tests the implementation of the isDivisibleBy function.
 */

"use strict";

function IsDivisibleByUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertTrue("isDivisibleBy(63, 7) -> " + isDivisibleBy(63, 7),
                         isDivisibleBy(63, 7));
   JSUnitTest.assertTrue("isDivisibleBy(0, 7) -> " + isDivisibleBy(0, 7),
                         isDivisibleBy(0, 7));
   JSUnitTest.assertFalse("isDivisibleBy(63, 2) -> " + isDivisibleBy(63, 2),
                          isDivisibleBy(63, 2));
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("IsDivisibleByUnitTest succeeded");
   } else {
      console.println("IsDivisibleByUnitTest failed");
   }
}
