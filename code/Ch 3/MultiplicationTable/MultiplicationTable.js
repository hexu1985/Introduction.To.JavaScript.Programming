/*
 * File: MultiplicationTable.js
 * ----------------------------
 * This program uses nested loops to create a multiplication table.
 */

"use strict";

/* Constants */

const TABLE_SIZE = 10;
const FIELD_WIDTH = 4;

/*
 * Draws a multiplication table on the console.
 */

function MultiplicationTable() {
   for (let i = 1; i <= TABLE_SIZE; i++) {
      let line = "";
      for (let j = 1; j <= TABLE_SIZE ; j++) {
         line += alignRight(i * j, FIELD_WIDTH);
      }
      console.log(line);
   }
}

/*
 * Aligns a number at the right edge of a fixed-width field by adding
 * the appropriate number of spaces at the left.
 */

function alignRight(n, width) {
   let str = "" + n;
   while (str.length < width) {
      str = " " + str;
   }
   return str;
}
