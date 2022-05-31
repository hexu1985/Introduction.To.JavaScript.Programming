/*
 * File: CircleAreaUnitTest.js
 * ---------------------------
 * This file tests the implementation of the circleArea function.
 */

"use strict";

function CircleAreaUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertEquals("circleArea(1) -> " + circleArea(1),
                           circleArea(1), 3.141592653);
   JSUnitTest.assertEquals("circleArea(10) -> " + circleArea(10),
                           circleArea(10), 314.1592653);
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("CircleAreaUnitTest succeeded");
   } else {
      console.println("CircleAreaUnitTest failed");
   }
}
