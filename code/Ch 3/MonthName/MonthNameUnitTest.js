/*
 * File: MonthNameUnitTest.js
 * --------------------------
 * This file tests the implementation of the monthName function.
 */

"use strict";

function MonthNameUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertTrue("monthName(0) -> " + monthName(0),
                         monthName(0) === undefined);
   JSUnitTest.assertEquals("monthName(1) -> " + monthName(1),
                           monthName(1), "January");
   JSUnitTest.assertEquals("monthName(2) -> " + monthName(2),
                           monthName(2), "February");
   JSUnitTest.assertEquals("monthName(3) -> " + monthName(3),
                           monthName(3), "March");
   JSUnitTest.assertEquals("monthName(4) -> " + monthName(4),
                           monthName(4), "April");
   JSUnitTest.assertEquals("monthName(5) -> " + monthName(5),
                           monthName(5), "May");
   JSUnitTest.assertEquals("monthName(6) -> " + monthName(6),
                           monthName(6), "June");
   JSUnitTest.assertEquals("monthName(7) -> " + monthName(7),
                           monthName(7), "July");
   JSUnitTest.assertEquals("monthName(8) -> " + monthName(8),
                           monthName(8), "August");
   JSUnitTest.assertEquals("monthName(9) -> " + monthName(9),
                           monthName(9), "September");
   JSUnitTest.assertEquals("monthName(10) -> " + monthName(10),
                           monthName(10), "October");
   JSUnitTest.assertEquals("monthName(11) -> " + monthName(11),
                           monthName(11), "November");
   JSUnitTest.assertEquals("monthName(12) -> " + monthName(12),
                           monthName(12), "December");
   JSUnitTest.assertTrue("monthName(13) -> " + monthName(13),
                         monthName(13) === undefined);
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("MonthNameUnitTest succeeded");
   } else {
      console.println("MonthNameUnitTest failed");
   }
}
