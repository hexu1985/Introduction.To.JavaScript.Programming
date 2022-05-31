/*
 * File: DrawLines.js
 * ------------------
 * This program lets the user draw lines on the screen by dragging the mouse.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 300;

/* Main program */

function DrawLines() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let line = null;
   gw.addEventListener("mousedown", mousedownAction);
   gw.addEventListener("drag", dragAction);

   function mousedownAction(e) {
      line = GLine(e.getX(), e.getY(), e.getX(), e.getY());
      gw.add(line);
   }

   function dragAction(e) {
      line.setEndPoint(e.getX(), e.getY());
   }
}
