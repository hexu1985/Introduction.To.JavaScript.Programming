/*
 * File: DrawStar.js
 * -----------------
 * This program draws a five-pointed star at the center of the window.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;
const STAR_SIZE = 150;

/*
 * Draws a star at the center of the graphics window.
 */

function DrawStar() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   gw.add(createStar(STAR_SIZE), gw.getWidth() / 2, gw.getHeight() / 2);
}

/*
 * Creates a GPolygon representing a five-pointed star with the reference
 * point at the center.  The size refers to the width of the star at its
 * widest point.
 */

function createStar(size) {
   let poly = GPolygon();
   let dx = size / 2;
   let dy = dx * Math.tan(18 * Math.PI / 180);
   let edge = dx - dy * Math.tan(36 * Math.PI / 180);
   poly.addVertex(-dx, -dy);
   let angle = 0;
   for (let i = 0; i < 5; i++) {
      poly.addPolarEdge(edge, angle);
      poly.addPolarEdge(edge, angle + 72);
      angle -= 72;
   }
   return poly;
}
