/*
 * File: DrawFiveCircles.js
 * ------------------------
 * This program draws a row of five circles centered in the graphics window.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;
const CIRCLE_SIZE = 75;
const CIRCLE_SEP = 15;

/* Main program */

function DrawFiveCircles() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let cx = gw.getWidth() / 2;
   let cy = gw.getHeight() / 2;
   for (let i = 0; i < 5; i++) {
      let centerX = cx + (i - 2) * (CIRCLE_SIZE + CIRCLE_SEP);
      let circleX = centerX - CIRCLE_SIZE / 2;
      let circleY = cy - CIRCLE_SIZE / 2;
      gw.add(GOval(circleX, circleY, CIRCLE_SIZE, CIRCLE_SIZE));
   }
}
