/*
 * File: LargestFactorUnitTest.js
 * ------------------------------
 * This file tests the implementation of the largestFactor function.
 */

"use strict";

function LargestFactorUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertEquals("largestFactor(63) -> " + largestFactor(63),
                           largestFactor(63), 21);
   JSUnitTest.assertEquals("largestFactor(262144) -> " + largestFactor(262144),
                           largestFactor(262144), 131072);
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("LargestFactorUnitTest succeeded");
   } else {
      console.println("LargestFactorUnitTest failed");
   }
}
