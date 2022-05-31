/*
 * File: DrawDotsWithClear.js
 * --------------------------
 * This program draws a dot every time the user clicks the mouse.  This
 * version includes a "Clear" button that removes all elements from the
 * graphics window.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 300;
const DOT_SIZE = 6;

/* Main program */

function DrawDotsWithClear() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   gw.addEventListener("click", clickAction);
   document.getElementById("Clear").addEventListener("click", clearAction);

   function clickAction(e) {
      let dot = GOval(e.getX() - DOT_SIZE / 2, e.getY() - DOT_SIZE / 2,
                      DOT_SIZE, DOT_SIZE);
      dot.setFilled(true);
      gw.add(dot);
   }

   function clearAction(e) {
      gw.clear();
   }
}
