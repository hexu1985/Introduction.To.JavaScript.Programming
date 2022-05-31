/*
 * File: DrawDiagonals.js
 * ----------------------
 * This program draws two diagonal lines that cross the graphics window.
 * This version of the program defines constants to specify the
 * dimensions of the window.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;

/* Main program */

function DrawDiagonals() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   gw.add(GLine(0, 0, GWINDOW_WIDTH, GWINDOW_HEIGHT));
   gw.add(GLine(0, GWINDOW_HEIGHT, GWINDOW_WIDTH, 0));
}
