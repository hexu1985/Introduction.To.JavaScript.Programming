/*
 * File: CombinationsUnitTest.js
 * -----------------------------
 * This file tests the implementation of the combinations function.
 */

"use strict";

function CombinationsUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertEquals("combinations(1, 1) -> " + combinations(1, 1),
                           combinations(1, 1), 1);
   JSUnitTest.assertEquals("combinations(6, 0) -> " + combinations(6, 0),
                           combinations(6, 0), 1);
   JSUnitTest.assertEquals("combinations(6, 1) -> " + combinations(6, 1),
                           combinations(6, 1), 6);
   JSUnitTest.assertEquals("combinations(6, 2) -> " + combinations(6, 2),
                           combinations(6, 2), 15);
   JSUnitTest.assertEquals("combinations(6, 3) -> " + combinations(6, 3),
                           combinations(6, 3), 20);
   JSUnitTest.assertEquals("combinations(6, 4) -> " + combinations(6, 4),
                           combinations(6, 4), 15);
   JSUnitTest.assertEquals("combinations(6, 5) -> " + combinations(6, 5),
                           combinations(6, 5), 6);
   JSUnitTest.assertEquals("combinations(6, 6) -> " + combinations(6, 6),
                           combinations(6, 6), 1);
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("CombinationsUnitTest succeeded");
   } else {
      console.println("CombinationsUnitTest failed");
   }
}
