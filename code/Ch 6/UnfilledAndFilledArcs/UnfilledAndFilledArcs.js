/*
 * File: UnfilledAndFilledArcs.js
 * ------------------------------
 * This program draws one unfilled and one filled arc to show the difference
 * between the two styles.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 125;

/* Main program */

function UnfilledAndFilledArcs() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let r = 50;
   let x1 = 0.3 * gw.getWidth();
   let x2 = 0.7 * gw.getWidth();
   let cy = gw.getHeight() / 2;
   let openArc = GArc(x1 - r, cy - r, 2 * r, 2 * r, 0, 60);
   gw.add(openArc);
   let filledArc = GArc(x2 - r, cy - r, 2 * r, 2 * r, 0, 60);
   filledArc.setFilled(true);
   gw.add(filledArc);
}
