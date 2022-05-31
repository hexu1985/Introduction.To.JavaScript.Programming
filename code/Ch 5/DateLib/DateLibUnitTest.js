/*
 * File: DateLibUnitTest.js
 * ------------------------
 * This file tests the implementation of the functions in DateLib.js
 */

"use strict";

function DateLibUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertEquals("JANUARY -> " + JANUARY, JANUARY, 1);
   JSUnitTest.assertEquals("FEBRUARY -> " + FEBRUARY, FEBRUARY, 2);
   JSUnitTest.assertEquals("MARCH -> " + MARCH, MARCH, 3);
   JSUnitTest.assertEquals("APRIL -> " + APRIL, APRIL, 4);
   JSUnitTest.assertEquals("MAY -> " + MAY, MAY, 5);
   JSUnitTest.assertEquals("JUNE -> " + JUNE, JUNE, 6);
   JSUnitTest.assertEquals("JULY -> " + JULY, JULY, 7);
   JSUnitTest.assertEquals("AUGUST -> " + AUGUST, AUGUST, 8);
   JSUnitTest.assertEquals("SEPTEMBER -> " + SEPTEMBER, SEPTEMBER, 9);
   JSUnitTest.assertEquals("OCTOBER -> " + OCTOBER, OCTOBER, 10);
   JSUnitTest.assertEquals("NOVEMBER -> " + NOVEMBER, NOVEMBER, 11);
   JSUnitTest.assertEquals("DECEMBER -> " + DECEMBER, DECEMBER, 12);
   JSUnitTest.assertEquals("monthName(0) -> " + monthName(0),
                           monthName(0), undefined);
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
   JSUnitTest.assertEquals("monthName(13) -> " + monthName(13),
                           monthName(13), undefined);
   JSUnitTest.assertTrue("isLeapYear(1968) -> " +
                         isLeapYear(1968),
                         isLeapYear(1968));
   JSUnitTest.assertTrue("isLeapYear(2000) -> " +
                         isLeapYear(2000),
                         isLeapYear(2000));
   JSUnitTest.assertTrue("isLeapYear(0) -> " +
                         isLeapYear(0),
                         isLeapYear(0));
   JSUnitTest.assertFalse("isLeapYear(2017) -> " +
                          isLeapYear(2017),
                          isLeapYear(2017));
   JSUnitTest.assertFalse("isLeapYear(1900) -> " +
                          isLeapYear(1900),
                          isLeapYear(1900));
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("DateLibUnitTest succeeded");
   } else {
      console.println("DateLibUnitTest failed");
   }
}
