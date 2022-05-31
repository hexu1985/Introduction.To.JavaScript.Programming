/*
 * File: AcronymUnitTest.js
 * ------------------------
 * This file tests the implementation of the acronym function.
 */

"use strict";

function AcronymUnitTest() {
   JSUnitTest.resetErrorCount();
   let nato = "North Atlantic Treaty Organization";
   JSUnitTest.assertTrue("acronym(\"" + nato + "\") -> " + acronym(nato),
                         acronym(nato) === "NATO");
   let aids = "Acquired Immune Deficiency Syndrome";
   JSUnitTest.assertTrue("acronym(\"" + aids + "\") -> " + acronym(aids),
                         acronym(aids) === "AIDS");
   let scuba = "self-contained underwater breathing apparatus";
   JSUnitTest.assertTrue("acronym(\"" + scuba + "\") -> " + acronym(scuba),
                         acronym(scuba) === "scuba");
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("AcronymUnitTest succeeded");
   } else {
      console.println("AcronymUnitTest failed");
   }
}
