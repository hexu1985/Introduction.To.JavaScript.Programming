/*
 * File: EmployeeClassUnitTest.js
 * ------------------------------
 * This file tests the implementation of the Employee and HourlyEmployee
 * classes.
 */

"use strict";

function EmployeeClassUnitTest() {
   JSUnitTest.resetErrorCount();
   let clerk = HourlyEmployee("Bob Cratchit", "clerk");
   clerk.setHourlyRate(1.25);
   clerk.setHoursWorked(40);
   JSUnitTest.assertEquals("clerk.getName() -> " + clerk.getName(),
                           clerk.getName(), "Bob Cratchit");
   JSUnitTest.assertEquals("clerk.getJobTitle() -> " + clerk.getJobTitle(),
                           clerk.getJobTitle(), "clerk");
   JSUnitTest.assertEquals("clerk.toString() -> " + clerk.toString(),
                           clerk.toString(), "Bob Cratchit (clerk)");
   JSUnitTest.assertEquals("clerk.getPay() -> " + clerk.getPay(),
                           clerk.getPay(), 50);
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("EmployeeClassUnitTest succeeded");
   } else {
      console.println("EmployeeClassUnitTest failed");
   }
}
