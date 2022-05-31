/*
 * File: CelsiusToFahrenheitUnitTest.js
 * ------------------------------------
 * This file tests the implementation of the celsiusToFahrenheit function.
 */

"use strict";

function CelsiusToFahrenheitUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertEquals("celsiusToFahrenheit(0) -> " +
                           celsiusToFahrenheit(0),
                           celsiusToFahrenheit(0), 32);
   JSUnitTest.assertEquals("celsiusToFahrenheit(20) -> " +
                           celsiusToFahrenheit(20),
                           celsiusToFahrenheit(20), 68);
   JSUnitTest.assertEquals("celsiusToFahrenheit(37) -> " +
                           celsiusToFahrenheit(37),
                           Math.round(celsiusToFahrenheit(37) * 1000) / 1000,
                           98.6);
   JSUnitTest.assertEquals("celsiusToFahrenheit(100) -> " +
                           celsiusToFahrenheit(100),
                           celsiusToFahrenheit(100), 212);
   JSUnitTest.assertEquals("celsiusToFahrenheit(-40) -> " +
                           celsiusToFahrenheit(-40),
                           celsiusToFahrenheit(-40), -40);
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("CelsiusToFahrenheitUnitTest succeeded");
   } else {
      console.println("CelsiusToFahrenheitUnitTest failed");
   }
}
