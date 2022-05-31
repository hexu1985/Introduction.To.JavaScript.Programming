/*
 * File: CenteredHelloWorld.js
 * ---------------------------
 * This program displays the string "hello, world" so that the label is
 * centered in the graphics window.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;

/* Main program */

function CenteredHelloWorld() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let msg = GLabel("hello, world");
   msg.setFont("50pt SansSerif");
   let x = (gw.getWidth() - msg.getWidth()) / 2;
   let y = (gw.getHeight() + msg.getAscent()) / 2;
   gw.add(msg, x, y);
}
