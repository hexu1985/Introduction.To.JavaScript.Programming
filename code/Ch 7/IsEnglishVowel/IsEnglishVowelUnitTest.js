/*
 * File: IsEnglishVowelUnitTest.js
 * -------------------------------
 * This file tests the implementation of isEnglishVowel.
 */

"use strict";

function IsEnglishVowelUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertTrue("isEnglishVowel(\"A\") -> " + isEnglishVowel("A"),
                         isEnglishVowel("A"));
   JSUnitTest.assertTrue("isEnglishVowel(\"a\") -> " + isEnglishVowel("a"),
                         isEnglishVowel("a"));
   JSUnitTest.assertFalse("isEnglishVowel(\"X\") -> " + isEnglishVowel("X"),
                          isEnglishVowel("X"));
   JSUnitTest.assertFalse("isEnglishVowel(\"x\") -> " + isEnglishVowel("x"),
                          isEnglishVowel("x"));
   JSUnitTest.assertFalse("isEnglishVowel(\"\") -> " + isEnglishVowel(""),
                          isEnglishVowel(""));
   JSUnitTest.assertFalse("isEnglishVowel(\"0\") -> " + isEnglishVowel("0"),
                          isEnglishVowel("0"));
   JSUnitTest.assertFalse("isEnglishVowel(\"xx\") -> " + isEnglishVowel("xx"),
                          isEnglishVowel("xx"));
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("IsEnglishVowelUnitTest succeeded");
   } else {
      console.println("IsEnglishVowelUnitTest failed");
   }
}
