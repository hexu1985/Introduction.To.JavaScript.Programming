/*
 * File: PointUnitTest.js
 * ----------------------
 * This file tests the implementation of the Point class.
 */

"use strict";

function PointUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertEquals("Point(5, 2).getX() -> " + Point(5, 2).getX(),
                           Point(5, 2).getX(), 5);
   JSUnitTest.assertEquals("Point(5, 2).getY() -> " + Point(5, 2).getY(),
                           Point(5, 2).getY(), 2);
   JSUnitTest.assertEquals("Point(5, 2).toString() -> " +
                           Point(5, 2).toString(),
                           Point(5, 2).toString(), "(5, 2)");
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("PointUnitTest succeeded");
   } else {
      console.println("PointUnitTest failed");
   }
}
