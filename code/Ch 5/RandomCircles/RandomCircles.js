/*
 * File: RandomCircles.js
 * ----------------------
 * This program draws a set of 10 circles with different sizes, positions,
 * and colors.  Each circle has a randomly chosen color, a randomly chosen
 * radius within a specified range, and a randomly chosen position subject
 * to the condition that the circle must fit inside the graphics window.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 300;
const N_CIRCLES = 10;
const MIN_RADIUS = 15;
const MAX_RADIUS = 50;

/* Main program */

function RandomCircles() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   for (let i = 0; i < N_CIRCLES; i++) {
      gw.add(createRandomCircle());
   }
}

/*
 * Creates a randomly generated circle.  The radius is chosen randomly
 * between MIN_RADIUS and MAX_RADIUS, the location is chosen so that the
 * circle fits in the window, and the circle is given a random color.
 */

function createRandomCircle() {
   let r = randomReal(MIN_RADIUS, MAX_RADIUS);
   let x = randomReal(r, GWINDOW_WIDTH - r);
   let y = randomReal(r, GWINDOW_HEIGHT - r);
   let circle = GOval(x - r, y - r, 2 * r, 2 * r);
   circle.setFilled(true);
   circle.setColor(randomColor());
   return circle;
}
