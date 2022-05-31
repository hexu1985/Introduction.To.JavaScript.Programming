/*
 * File: SimplePluralUnitTest.js
 * -----------------------------
 * This file tests the implementation of the simplePlural function.
 */

"use strict";

function SimplePluralUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertEquals("simplePlural(\"cat\") -> " +
                           simplePlural("cat"),
                           simplePlural("cat"), "cats");
   JSUnitTest.assertEquals("simplePlural(\"program\") -> " +
                           simplePlural("program"),
                           simplePlural("program"), "programs");
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("SimplePluralUnitTest succeeded");
   } else {
      console.println("SimplePluralUnitTest failed");
   }
}
