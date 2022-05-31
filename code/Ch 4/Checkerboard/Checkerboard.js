/*
 * File: Checkerboard.js
 * ---------------------
 * This program draws a checkerboard centered in the graphics window.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;         /* Width of the graphics window  */
const GWINDOW_HEIGHT = 300;        /* Height of the graphics window */
const N_COLUMNS = 8;               /* Number of columns             */
const N_ROWS = 8;                  /* Number of rows                */
const SQUARE_SIZE = 35;            /* Size of a square in pixels    */

/* Main program */

function Checkerboard() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let x0 = (gw.getWidth() - N_COLUMNS * SQUARE_SIZE) / 2;
   let y0 = (gw.getHeight() - N_ROWS * SQUARE_SIZE) / 2;
   for (let row = 0; row < N_ROWS; row++) {
      for (let col = 0; col < N_COLUMNS; col++) {
         let x = x0 + col * SQUARE_SIZE;
         let y = y0 + row * SQUARE_SIZE;
         let sq = GRect(x, y, SQUARE_SIZE, SQUARE_SIZE);
         sq.setFilled((row + col) % 2 !== 0);
         gw.add(sq);
      }
   }
}
