/*
 * File: ConsoleTriangle.js
 * ------------------------
 * The program uses nested loops to draw a triangle on the console.
 */

"use strict";

/*
 * Draws a triangle on the console in which each row increases in length
 * by one character.  The parameter is the size of the triangle, which in
 * this case specifies both the number of rows and the number of columns.
 */

function drawConsoleTriangle(size) {
   for (let i = 1; i <= size; i++) {
      let line = "";
      for (let j = 0; j < i; j++) {
         line += "*";
      }
      console.log(line);
   }
}

/* Test program */

function ConsoleTriangle() {
   drawConsoleTriangle(10);
}
