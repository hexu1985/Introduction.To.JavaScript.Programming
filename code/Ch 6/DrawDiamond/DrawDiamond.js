/*
 * File: DrawDiamond.js
 * --------------------
 * This program draws a diamond shape at the center of the window.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;
const DIAMOND_WIDTH = 60;
const DIAMOND_HEIGHT = 100;

/*
 * Draws a diamond at the center of the graphics window.
 */

function DrawDiamond() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let diamond = GPolygon();
   diamond.addVertex(-DIAMOND_WIDTH / 2, 0);
   diamond.addVertex(0, DIAMOND_HEIGHT / 2);
   diamond.addVertex(DIAMOND_WIDTH / 2, 0);
   diamond.addVertex(0, -DIAMOND_HEIGHT / 2);
   gw.add(diamond, gw.getWidth() / 2, gw.getHeight() / 2);
}
