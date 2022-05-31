/*
 * File: StartsWithUnitTest.js
 * -----------------------
 * This file tests the implementation of startsWith.
 */

"use strict";

function StartsWithUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertTrue("startsWith(\"ABCDE\", \"\") === " +
                         startsWith("ABCDE", ""),
                         startsWith("ABCDE", ""));
   JSUnitTest.assertTrue("startsWith(\"ABCDE\", \"ABCDE\") === " +
                         startsWith("ABCDE", "ABCDE"),
                         startsWith("ABCDE", "ABCDE"));
   JSUnitTest.assertTrue("startsWith(\"ABCDE\", \"ABC\") === " +
                         startsWith("ABCDE", "ABC"),
                         startsWith("ABCDE", "ABC"));
   JSUnitTest.assertFalse("startsWith(\"ABCDE\", \"ABCDEX\") === " +
                          startsWith("ABCDE", "ABCDEX"),
                          startsWith("ABCDE", "ABCDEX"));
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("StartsWithUnitTest succeeded");
   } else {
      console.println("StartsWithUnitTest failed");
   }
}
