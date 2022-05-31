/*
 * File: RaiseToPowerUnitTest.js
 * -----------------------------
 * This file tests the implementation of the raiseToPower function.
 */

"use strict";

function RaiseToPowerUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertEquals("raiseToPower(2, 0) -> " + raiseToPower(2, 0),
                           raiseToPower(2, 0), 1);
   JSUnitTest.assertEquals("raiseToPower(2, 1) -> " + raiseToPower(2, 1),
                           raiseToPower(2, 1), 2);
   JSUnitTest.assertEquals("raiseToPower(2, 2) -> " + raiseToPower(2, 2),
                           raiseToPower(2, 2), 4);
   JSUnitTest.assertEquals("raiseToPower(2, 10) -> " + raiseToPower(2, 10),
                           raiseToPower(2, 10), 1024);
   JSUnitTest.assertEquals("raiseToPower(3, 0) -> " + raiseToPower(3, 0),
                           raiseToPower(3, 0), 1);
   JSUnitTest.assertEquals("raiseToPower(3, 1) -> " + raiseToPower(3, 1),
                           raiseToPower(3, 1), 3);
   JSUnitTest.assertEquals("raiseToPower(3, 2) -> " + raiseToPower(3, 2),
                           raiseToPower(3, 2), 9);
   JSUnitTest.assertEquals("raiseToPower(3, 3) -> " + raiseToPower(3, 3),
                           raiseToPower(3, 3), 27);
   JSUnitTest.assertEquals("raiseToPower(2.5, 2) -> " + raiseToPower(2.5, 2),
                           raiseToPower(2.5, 2), 6.25);
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("RaiseToPowerUnitTest succeeded");
   } else {
      console.println("RaiseToPowerUnitTest failed");
   }
}
