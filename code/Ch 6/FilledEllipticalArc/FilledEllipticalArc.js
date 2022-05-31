/*
 * File: FilledEllipticalArc.js
 * ----------------------------
 * This program draws a filled elliptical arc that covers the upper right
 * quadrant of the graphics window.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;

/* Main program */

function FilledEllipticalArc() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let arc = GArc(0, 0, gw.getWidth(), gw.getHeight(), 0, 90);
   arc.setFilled(true);
   gw.add(arc);   
}
