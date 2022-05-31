/*
 * File: DistanceUnitTest.js
 * -------------------------
 * This file tests the implementation of the distance function.
 */

"use strict";

function DistanceUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertEquals("distance(0, 0) -> " + distance(0, 0),
                           distance(0, 0), 0);
   JSUnitTest.assertEquals("distance(4, 0) -> " + distance(4, 0),
                           distance(4, 0), 4);
   JSUnitTest.assertEquals("distance(0, -2) -> " + distance(0, -2),
                           distance(0, -2), 2);
   JSUnitTest.assertEquals("distance(3, 4) -> " + distance(3, 4),
                           distance(3, 4), 5);
   JSUnitTest.assertEquals("distance(5, 12) -> " + distance(5, 12),
                           distance(5, 12), 13);
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("DistanceUnitTest succeeded");
   } else {
      console.println("DistanceUnitTest failed");
   }
}
