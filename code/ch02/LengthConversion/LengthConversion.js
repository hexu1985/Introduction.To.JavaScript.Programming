/*
 * File: LengthConversion.js
 * -------------------------
 * The file defines functions to convert lengths back and forth between
 * metric units in centimeters and English units in feet and inches.
 */

"use strict";

/* Constants */

const INCHES_PER_FOOT = 12;
const CENTIMETERS_PER_INCH = 2.54;

/*
 * Converts a length measured in feet and inches to the equivalent
 * length in centimeters.
 */

function feetAndInchesToCentimeters(feet, inches) {
   let totalInches = feet * INCHES_PER_FOOT + inches;
   return totalInches * CENTIMETERS_PER_INCH;
}

/*
 * Converts a length measured in centimeters to a string showing both
 * the whole number of feet and the number of inches left over.
 */

function centimetersToFeetAndInches(cm) {
   let totalInches = cm / CENTIMETERS_PER_INCH;
   let feet = Math.floor(totalInches / INCHES_PER_FOOT);
   let inches = totalInches % INCHES_PER_FOOT;
   return feet + "ft " + inches + "in";
}

/* Test program */

function TestLengthConversion() {
   console.log("feetAndInchesToCentimeters(8, 4) -> " +
                feetAndInchesToCentimeters(8, 4));
   console.log("feetAndInchesToCentimeters(0, 10) -> " +
                feetAndInchesToCentimeters(0, 10));
   console.log("centimetersToFeetAndInches(254) -> " +
                centimetersToFeetAndInches(254));
   console.log("centimetersToFeetAndInches(25.4) -> " +
                centimetersToFeetAndInches(25.4));
}
