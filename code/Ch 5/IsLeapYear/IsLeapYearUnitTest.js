/*
 * File: IsLeapYearUnitTest.js
 * ---------------------------
 * This file tests the implementation of the isLeapYear function.
 */

"use strict";

function IsLeapYearUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertTrue("isLeapYear(1968) -> " + isLeapYear(1968),
                         isLeapYear(1968));
   JSUnitTest.assertTrue("isLeapYear(2000) -> " + isLeapYear(2000),
                         isLeapYear(2000));
   JSUnitTest.assertTrue("isLeapYear(0) -> " + isLeapYear(0),
                         isLeapYear(0));
   JSUnitTest.assertFalse("isLeapYear(2017) -> " + isLeapYear(2017),
                          isLeapYear(2017));
   JSUnitTest.assertFalse("isLeapYear(1900) -> " + isLeapYear(1900),
                          isLeapYear(1900));
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("IsLeapYearUnitTest succeeded");
   } else {
      console.println("IsLeapYearUnitTest failed");
   }
}
