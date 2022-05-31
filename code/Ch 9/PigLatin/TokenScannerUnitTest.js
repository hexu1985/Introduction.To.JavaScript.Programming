/*
 * File: TokenScannerUnitTest.js
 * -----------------------------
 * This file tests the implementation of the simplified TokenScanner class.
 */

"use strict";

function TokenScannerUnitTest() {
   JSUnitTest.resetErrorCount();
   const INPUT = "This is Pig Latin."
   let scanner = TokenScanner(INPUT);
   JSUnitTest.assertTrue("scanner.hasMoreTokens() -> " +
                         scanner.hasMoreTokens(),
                         scanner.hasMoreTokens());
   let token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "This");
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, " ");
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "is");
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, " ");
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "Pig");
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, " ");
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "Latin");
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, ".");
   JSUnitTest.assertFalse("scanner.hasMoreTokens() -> " +
                          scanner.hasMoreTokens(),
                          scanner.hasMoreTokens());
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "");
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("TokenScannerUnitTest succeeded");
   } else {
      console.println("TokenScannerUnitTest failed");
   }
}
