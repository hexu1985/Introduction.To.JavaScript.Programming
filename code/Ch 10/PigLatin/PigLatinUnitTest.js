/*
 * File: PigLatinUnitTest.js
 * -------------------------
 * This file tests the implementations of toPigLatin and wordToPigLatin.
 */

"use strict";

function PigLatinUnitTest() {
   JSUnitTest.resetErrorCount();
   JSUnitTest.assertTrue("toPigLatin(\"this is pig latin.\") -> " +
                         toPigLatin("this is pig latin."),
                         toPigLatin("this is pig latin.") ===
                         "isthay isway igpay atinlay.");
   JSUnitTest.assertTrue("toPigLatin(\"This is Pig Latin.\") -> " +
                         toPigLatin("This is Pig Latin."),
                         toPigLatin("This is Pig Latin.") ===
                         "isThay isway igPay atinLay.");
   JSUnitTest.assertTrue("wordToPigLatin(\"trash\") -> " +
                         wordToPigLatin("trash"),
                         wordToPigLatin("trash") === "ashtray");
   JSUnitTest.assertTrue("wordToPigLatin(\"express\") -> " +
                         wordToPigLatin("express"),
                         wordToPigLatin("express") === "expressway");
   JSUnitTest.assertTrue("wordToPigLatin(\"cwm\") -> " +
                         wordToPigLatin("cwm"),
                         wordToPigLatin("cwm") === "cwm");
   JSUnitTest.assertTrue("wordToPigLatin(\"\") -> " +
                         wordToPigLatin(""),
                         wordToPigLatin("") === "");
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("PigLatinUnitTest succeeded");
   } else {
      console.println("PigLatinUnitTest failed");
   }
}
