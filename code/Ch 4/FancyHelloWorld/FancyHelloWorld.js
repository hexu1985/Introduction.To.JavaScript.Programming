/*
 * File: FancyHelloWorld.js
 * ------------------------
 * This program displays the string "hello, world" at location (50, 100)
 * on the graphics window.  This version of the program uses a 36-point
 * Lucida Blackletter font to display the message.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;

/* Main program */

function FancyHelloWorld() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let msg = GLabel("hello, world", 50, 100);
   msg.setFont("36pt 'Lucida Blackletter'");
   gw.add(msg);
}
