/*
 * File: EuclidGCDUnitTest.js
 * --------------------------
 * This file tests the implementation of the gcd function.
 */

"use strict";

function EuclidGCDUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertEquals("gcd(49, 63) -> " + gcd(49, 63),
                           gcd(49, 63), 7);
   JSUnitTest.assertEquals("gcd(51, 15) -> " + gcd(51, 15),
                           gcd(51, 15), 3);
   JSUnitTest.assertEquals("gcd(1000000, 1000005) -> " + gcd(1000000, 1000005),
                           gcd(1000000, 1000005), 5);
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("EuclidGCDUnitTest succeeded");
   } else {
      console.println("EuclidGCDUnitTest failed");
   }
}
