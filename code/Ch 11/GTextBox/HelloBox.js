/*
 * File: HelloBox.js
 * -----------------
 * This program tests the GTextBox class by displaying a box containing
 * the string "Hello" at the center of the window.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;
const BOX_WIDTH = 80;
const BOX_HEIGHT = 40;

/*
 * Draws a box containing the string "Hello" at the center of the window.
 */

function HelloBox() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let cx = gw.getWidth() / 2;
   let cy = gw.getHeight() / 2;
   let box = GTextBox(BOX_WIDTH, BOX_HEIGHT, "Hello");
   box.setTextColor("Red");
   box.setFillColor("#EEEEEE");
   gw.add(box, cx - box.getWidth() / 2,
               cy - box.getHeight() / 2);
}
