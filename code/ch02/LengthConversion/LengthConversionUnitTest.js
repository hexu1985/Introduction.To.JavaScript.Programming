/*
 * File: LengthConversionUnitTest.js
 * ---------------------------------
 * This file tests the implementation of the functions in the
 * LengthConversion.js file.
 */

"use strict";

function LengthConversionUnitTest() {
   JSUnitTest.resetErrorCount();
   TestFeetAndInchesToCentimeters();
   TestCentimetersToFeetAndInches();
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("LengthConversionUnitTest succeeded");
   } else {
      console.println("LengthConversionUnitTest failed");
   }
}

function TestFeetAndInchesToCentimeters() {
   JSUnitTest.assertEquals("feetAndInchesToCentimeters(8, 4) -> " +
                           feetAndInchesToCentimeters(8, 4),
                           feetAndInchesToCentimeters(8, 4), 254);
   JSUnitTest.assertEquals("feetAndInchesToCentimeters(0, 10) -> " +
                           feetAndInchesToCentimeters(0, 10),
                           feetAndInchesToCentimeters(0, 10), 25.4);
}

function TestCentimetersToFeetAndInches() {
   JSUnitTest.assertEquals("centimetersToFeetAndInches(254) -> " +
                           centimetersToFeetAndInches(254),
                           centimetersToFeetAndInches(254), "8ft 4in");
   JSUnitTest.assertEquals("centimetersToFeetAndInches(25.4) -> " +
                           centimetersToFeetAndInches(25.4),
                           centimetersToFeetAndInches(25.4), "0ft 10in");
}
