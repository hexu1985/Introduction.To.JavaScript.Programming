/*
 * File: JSUnitTest.js
 * -------------------
 * This file defines a class for creating unit tests of JavaScript programs.
 */

/*
 * The JSUnitTest class supplies several static methods that are useful
 * in writing unit tests.  These methods are compatible with the JUnit
 * framework but do not depend on it.
 */

function JSUnitTest() {
   throw new Error("JSUnitTest cannot be instantiated");
}

/*
 * Checks that the boolean condition is true.
 *
 * @param msg The message to display if the assertion fails
 * @param exp The expression being tested
 */

JSUnitTest.assertTrue = function(a1, a2) {
   if (a2 === undefined) {
      a2 = a1;
      a1 = "Failure: " + a2 + " != true";
   }
   if (!a2) {
      JSUnitTest.errorCount++;
      if (console.showErrorMessage) {
         console.showErrorMessage(a1);
      } else if (console.println) {
         console.println(a1);
      }
   }
};

/*
 * Checks that the boolean condition is false.
 *
 * @param msg The message to display if the assertion fails
 * @param exp The expression being tested
 */

JSUnitTest.assertFalse = function(a1, a2) {
   if (a2 === undefined) {
      a2 = a1;
      a1 = "Failure: " + a2 + " == true";
   }
   JSUnitTest.assertTrue(a1, !a2);
};

/*
 * Tests that two values are equal.
 *
 * @param msg The message to display if the assertion fails
 * @param exp1 The expression being tested
 * @param exp2 The expected value
 */

JSUnitTest.assertEquals = function(a1, a2, a3) {
   if (a3 === undefined) {
      a3 = a2;
      a2 = a1;
      a1 = "Failure: " + a2 + " !== " + a3;
   }
   JSUnitTest.assertTrue(a1, a2 === a3);
};

/*
 * Tests that two values are not equal.
 *
 * @param msg The message to display if the assertion fails
 * @param exp1 The expression being tested
 * @param exp2 The value that should be excluded
 */

JSUnitTest.assertNotEquals = function(a1, a2, a3) {
   if (a3 === undefined) {
      a3 = a2;
      a2 = a1;
      a1 = "Failure: " + a2 + " === " + a3;
   }
   JSUnitTest.assertTrue(a1, a2 !== a3);
};

/*
 * Checks that the expression is null.
 *
 * @param msg The message to display if the assertion fails
 * @param exp The expression being tested
 */

JSUnitTest.assertNull = function(a1, a2) {
   if (a2 === undefined) {
      a2 = a1;
      a1 = "Failure: " + a2 + " !== null";
   }
   JSUnitTest.assertTrue(a1, a2 === null);
};

/*
 * Checks that the expression is not null.
 *
 * @param msg The message to display if the assertion fails
 * @param exp The expression being tested
 */

JSUnitTest.assertNotNull = function(a1, a2) {
   if (a2 === undefined) {
      a2 = a1;
      a1 = "Failure: " + a2 + " === null";
   }
   JSUnitTest.assertTrue(a1, a2 !== null);
};

/*
 * Resets the current error count to zero.
 */

JSUnitTest.resetErrorCount = function() {
   JSUnitTest.errorCount = 0;
};

/*
 * Returns the current error count.  This method is typically used to keep
 * track of the number of errors in a connected sequence of tests.
 *
 * @return The current error count
 */

JSUnitTest.getErrorCount = function() {
   return JSUnitTest.errorCount;
};

JSUnitTest.errorCount = 0;
