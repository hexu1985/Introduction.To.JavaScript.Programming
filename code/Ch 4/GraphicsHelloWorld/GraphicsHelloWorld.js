/*
 * File: GraphicsHelloWorld.js
 * ---------------------------
 * This program displays the string "hello, world" at location (50, 100)
 * on the graphics window.  The inspiration for this program comes from
 * Brian Kernighan and Dennis Ritchie's book, The C Programming Language.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;

/* Main program */

function GraphicsHelloWorld() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let msg = GLabel("hello, world", 50, 100);
   gw.add(msg);
}
