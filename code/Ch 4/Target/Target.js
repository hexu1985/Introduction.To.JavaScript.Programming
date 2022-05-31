/*
 * File: Target.js
 * ---------------
 * This program draws a target at the center of the graphics window composed
 * of three concentric circles alternately colored red and white.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;
const TARGET_RADIUS = 75;

/* Main program */

function Target() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let cx = gw.getWidth() / 2;
   let cy = gw.getHeight() / 2;
   gw.add(createFilledCircle(cx, cy, TARGET_RADIUS, "Red"));
   gw.add(createFilledCircle(cx, cy, 2 * TARGET_RADIUS / 3, "White"));
   gw.add(createFilledCircle(cx, cy, TARGET_RADIUS / 3, "Red"));
}

/*
 * Creates a circle of radius r centered at the point (x, y) filled
 * with the specified color and returns the initialized GOval to
 * the caller.
 */

function createFilledCircle(x, y, r, color) {
   let circle = GOval(x - r, y - r, 2 * r, 2 * r);
   circle.setColor(color);
   circle.setFilled(true);
   return circle;
}
