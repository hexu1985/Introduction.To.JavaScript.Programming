/*
 * File: DoubleStringUnitTest.js
 * -----------------------------
 * This file tests the implementation of the doubleString function.
 */

"use strict";

function DoubleStringUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertEquals("doubleString(\"a\") -> " +
                           doubleString("a"),
                           doubleString("a"), "aa");
   JSUnitTest.assertEquals("doubleString(\"boo\") -> " +
                           doubleString("boo"),
                           doubleString("boo"), "booboo");
   JSUnitTest.assertEquals("doubleString(\"hots\") -> " +
                           doubleString("hots"),
                           doubleString("hots"), "hotshots");
   JSUnitTest.assertEquals("doubleString(\"\") -> " +
                           doubleString(""),
                           doubleString(""), "");
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("DoubleStringUnitTest succeeded");
   } else {
      console.println("DoubleStringUnitTest failed");
   }
}
