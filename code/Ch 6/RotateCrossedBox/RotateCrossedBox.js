/*
 * File: RotateCrossedBox.js
 * -------------------------
 * This program draws a crossed box and then rotates it around its center.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;
const BOX_WIDTH = 200;
const BOX_HEIGHT = 100;
const TIME_STEP = 20;
const N_STEPS = 360;

/*
 * Draws a crossed box and then rotates it around its center.
 */

function RotateCrossedBox() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let box = createCrossedBox(BOX_WIDTH, BOX_HEIGHT);
   let cx = gw.getWidth() / 2;
   let cy = gw.getHeight() / 2;
   gw.add(box, cx, cy);
   let stepCount = 0;
   let timer = setInterval(step, TIME_STEP);

   function step() {
      if (stepCount < N_STEPS) {
         box.rotate(1);
         stepCount++;
      } else {
         clearInterval(timer);
      }
   }
}

/*
 * Creates a crossed box, which is a compound consisting of a GRect and
 * its two diagonals.  The reference point is at the center of the figure.
 */

function createCrossedBox(width, height) {
   let compound = GCompound();
   compound.add(GRect(-width / 2, -height / 2, width, height));
   compound.add(GLine(-width / 2, -height / 2, width / 2, height / 2));
   compound.add(GLine(-width / 2, height / 2, width / 2, -height / 2));
   return compound;
}
