/*
 * File: GStar.js
 * --------------
 * This file illustrates the strategy of subclassing GPolygon by
 * creating a new GObject class depicting a five-pointed star.
 */

"use strict";

/*
 * This class represents a five-pointed star with its reference point
 * at the center.  The size parameter indicates the width of the star
 * at its widest point.
 */

function GStar(size) {
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
