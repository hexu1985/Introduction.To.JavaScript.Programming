/*
 * File: TestEmployeeClass.js
 * --------------------------
 * This file defines a simple test function for the HourlyEmployee class.
 */

"use strict";

function TestEmployeeClass() {
   let clerk = HourlyEmployee("Bob Cratchit", "clerk");
   clerk.setHourlyRate(1.25);
   clerk.setHoursWorked(40);
   console.log("clerk.getName() -> " + clerk.getName() +
               " (should be \"Bob Cratchit\")");
   console.log("clerk.getJobTitle() -> " + clerk.getJobTitle() +
               " (should be \"clerk\")");
   console.log("clerk.toString() -> " + clerk.toString() +
               " (should be \"Bob Cratchit (clerk)\")");
   console.log("clerk.getPay() -> " + clerk.getPay() +
               " (should be 50)");
}
