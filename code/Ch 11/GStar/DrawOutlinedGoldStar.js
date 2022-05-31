/*
 * File: DrawOutlinedGoldStar.js
 * -----------------------------
 * This program draws a five-pointed star at the center of the window.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;
const STAR_SIZE = 100;

/*
 * Draws a star at the center of the graphics window.
 */

function DrawOutlinedGoldStar() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let cx = gw.getWidth() / 2;
   let cy = gw.getHeight() / 2;
   let star = GStar(STAR_SIZE);
   star.setFilled(true);
   star.setFillColor("Gold");
   gw.add(star, cx, cy);
}
