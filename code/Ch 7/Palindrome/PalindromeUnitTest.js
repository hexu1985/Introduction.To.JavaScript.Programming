/*
 * File: PalindromeUnitTest.js
 * ---------------------------
 * This file tests the implementation of isPalindrome.
 */

"use strict";

function PalindromeUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertTrue("isPalindrome(\"level\") -> " + isPalindrome("level"),
                         isPalindrome("level"));
   JSUnitTest.assertTrue("isPalindrome(\"detartrated\") -> " +
                         isPalindrome("detartrated"),
                         isPalindrome("detartrated"));
   JSUnitTest.assertTrue("isPalindrome(\"a\") -> " + isPalindrome("a"),
                         isPalindrome("a"));
   JSUnitTest.assertTrue("isPalindrome(\"\") -> " + isPalindrome(""),
                         isPalindrome(""));
   JSUnitTest.assertFalse("isPalindrome(\"xyzzy\") -> " +
                          isPalindrome("xyzzy"),
                          isPalindrome("xyzzy"));
   JSUnitTest.assertFalse("isPalindrome(\"Madam, I'm Adam\") -> " +
                          isPalindrome("Madam, I'm Adam"),
                          isPalindrome("Madam, I'm Adam"));
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("PalindromeUnitTest succeeded");
   } else {
      console.println("PalindromeUnitTest failed");
   }
}
