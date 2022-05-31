/*
 * File: GrowingCircles.js
 * -----------------------
 * This program draws random circles that grow to their final size.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 300;
const N_CIRCLES = 10;
const MIN_RADIUS = 15;
const MAX_RADIUS = 50;
const TIME_STEP = 20;
const DELTA_SIZE = 1;

/* Main program */

function GrowingCircles() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let circlesCreated = 0;
   let desiredSize = 0;
   let currentSize = 0;
   let circle = null;
   let timer = setInterval(step, TIME_STEP);

   function createNewCircle() {
      let r = randomReal(MIN_RADIUS, MAX_RADIUS);
      let x = randomReal(r, GWINDOW_WIDTH - r);
      let y = randomReal(r, GWINDOW_HEIGHT - r);
      circle = GOval(x, y, 0, 0);
      circle.setFilled(true);
      circle.setColor(randomColor());
      desiredSize = 2 * r;
      currentSize = 0;
      return circle;
   }

   function step() {
      if (currentSize < desiredSize) {
         currentSize += DELTA_SIZE;
         let x = circle.getX() - DELTA_SIZE / 2;
         let y = circle.getY() - DELTA_SIZE / 2;
         circle.setBounds(x, y, currentSize, currentSize);
      } else if (circlesCreated < N_CIRCLES) {
         gw.add(createNewCircle());
         circlesCreated++;
      } else {
         clearInterval(timer);
      }
   }
}
