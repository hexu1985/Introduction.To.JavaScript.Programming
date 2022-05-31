/*
 * File: Countdown.js
 * ------------------
 * The program defines the function countdown, which simulates the
 * countdown preceding a rocket launch.
 */

"use strict";

/*
 * Counts backwards from a specified starting value to zero.
 */

function countdown(start) {
   for (let t = start; t >= 0; t--) {
      console.log(t);
   }
}

/* Test program */

function TestCountdown() {
   countdown(10);
}
