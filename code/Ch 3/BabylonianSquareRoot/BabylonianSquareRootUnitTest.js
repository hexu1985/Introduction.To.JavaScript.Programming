/*
 * File: BabylonianSquareRootUnitTest.js
 * -------------------------------------
 * This file tests the implementation of the sqrt function.
 */

"use strict";

function BabylonianSquareRootUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertEquals("sqrt(1) -> " + sqrt(1),
                           sqrt(1), 1);
   JSUnitTest.assertEquals("sqrt(2) -> " + sqrt(2),
                           sqrt(2), 1.414213562373095);
   JSUnitTest.assertEquals("sqrt(9) -> " + sqrt(9),
                           sqrt(9), 3);
   JSUnitTest.assertEquals("sqrt(1764) -> " + sqrt(1764),
                           sqrt(1764), 42);
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("BabylonianSquareRootUnitTest succeeded");
   } else {
      console.println("BabylonianSquareRootUnitTest failed");
   }
}
