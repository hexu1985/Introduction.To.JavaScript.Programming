/*
 * File: BlueRectangle.js
 * ----------------------
 * This program draws a blue rectangle on the graphics window.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;

/* Main program */

function BlueRectangle() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let rect = GRect(150, 50, 200, 100);
   rect.setColor("Blue");
   rect.setFilled(true);
   gw.add(rect);
}
