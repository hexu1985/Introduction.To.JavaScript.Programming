/*
 * File: Count.js
 * --------------
 * The file defines the function count, which displays n consecutive
 * integers, starting from an optionally specified starting value.
 */

"use strict";

/*
 * Displays n consecutive integers.  If the value start is specified,
 * it is used as the starting value; if not, the count starts at 1.
 */

function count(n, start) {
   if (start === undefined) start = 1;
   for (let i = 0; i < n; i++) {
      console.log(start + i);
   }
}

/* Simple test program to test the count function */

function TestCount() {
   console.log("count(0) should produce no output");
   count(0);
   console.log("count(3) should produce 1, 2, and 3");
   count(3);
   console.log("count(2, 10) should produce 10 and 11");
   count(2, 10);
   console.log("count(5, -2) should produce -2, -1, 0, 1, and 2");
   count(5, -2);
}
