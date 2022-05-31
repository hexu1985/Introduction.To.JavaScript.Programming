/*
 * File: DigitSumUnitTest.js
 * -------------------------
 * This file tests the implementation of the digitSum function.
 */

"use strict";

function DigitSumUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertEquals("digitSum(0) -> " + digitSum(0),
                           digitSum(0), 0);
   JSUnitTest.assertEquals("digitSum(1) -> " + digitSum(1),
                           digitSum(1), 1);
   JSUnitTest.assertEquals("digitSum(123456789) -> " + digitSum(123456789),
                           digitSum(123456789), 45);
   JSUnitTest.assertEquals("digitSum(1729) -> " + digitSum(1729),
                           digitSum(1729), 19);
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("DigitSumUnitTest succeeded");
   } else {
      console.println("DigitSumUnitTest failed");
   }
}
