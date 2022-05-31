/*
 * File: IsLeapYear.js
 * -------------------
 * The program defines the function isLeapYear, which determines whether a
 * year is a leap year.
 */

"use strict";

/*
 * Returns true if the specified year is a leap year and false otherwise.
 * Leap year are those divisible by 4, with the exception of century years,
 * which are leap years only if they are divisible by 400.  Thus, 1900 was
 * not a leap year, but 2000 was.
 */

function isLeapYear(year) {
   return year % 400 === 0 ||
          (year % 4 === 0 && year % 100 !== 0);
}

/* Simple program to test the isLeapYear function */

function TestIsLeapYear() {
   console.log("isLeapYear(2000) -> " + isLeapYear(2000) +
               " (should be true)");
   console.log("isLeapYear(0) -> " + isLeapYear(0) +
               " (should be true)");
   console.log("isLeapYear(2017) -> " + isLeapYear(2017) +
               " (should be false)");
   console.log("isLeapYear(1900) -> " + isLeapYear(1900) +
               " (should be false)");
}
