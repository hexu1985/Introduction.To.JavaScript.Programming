/*
 * File: CaesarCipherUnitTest.js
 * -----------------------------
 * This file tests the implementation of caesarCipher.
 */

"use strict";

function CaesarCipherUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertTrue("caesarCipher(\"HAL 9000\", 1) -> " +
                         caesarCipher("HAL 9000", 1),
                         caesarCipher("HAL 9000", 1) === "IBM 9000");
   JSUnitTest.assertTrue("caesarCipher(\"IBM 9000\", -1) -> " +
                         caesarCipher("IBM 9000", -1),
                         caesarCipher("IBM 9000", -1) === "HAL 9000");
   JSUnitTest.assertTrue("caesarCipher(\"MixedCase\", 3) -> " +
                         caesarCipher("MixedCase", 3),
                         caesarCipher("MixedCase", 3) === "PlahgFdvh");
   let ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   JSUnitTest.assertTrue("caesarCipher(\"" + ALPHABET + "\", 1) -> " +
                         caesarCipher(ALPHABET, 1),
                         caesarCipher(ALPHABET, 1) ===
                         "BCDEFGHIJKLMNOPQRSTUVWXYZA");
   JSUnitTest.assertTrue("caesarCipher(\"" + ALPHABET + "\", -13) -> " +
                         caesarCipher(ALPHABET, -13),
                         caesarCipher(ALPHABET, -13) ===
                         "NOPQRSTUVWXYZABCDEFGHIJKLM");
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("CaesarCipherUnitTest succeeded");
   } else {
      console.println("CaesarCipherUnitTest failed");
   }
}
