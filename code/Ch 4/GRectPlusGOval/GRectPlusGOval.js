/*
 * File: GRectPlusGOval.js
 * -----------------------
 * This program creates a blue GRect and a red GOval using the same
 * parameters.  The example illustrates that the GOval fills the
 * boundary set by the enclosing rectangle.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;

/* Main program */

function GRectPlusGOval() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let rect = GRect(150, 50, 200, 100);
   rect.setFilled(true);
   rect.setColor("Blue");
   gw.add(rect);
   let oval = GOval(150, 50, 200, 100);
   oval.setFilled(true);
   oval.setColor("Red");
   gw.add(oval);
}
