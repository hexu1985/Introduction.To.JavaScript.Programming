/*
 * File: DrawCrossedBox.js
 * -----------------------
 * This program draws a box with its two diagonals.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;
const BOX_WIDTH = 200;
const BOX_HEIGHT = 100;

/*
 * Draws a crossed box at the center of the graphics window.
 */

function DrawCrossedBox() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   gw.add(createCrossedBox(BOX_WIDTH, BOX_HEIGHT), gw.getWidth() / 2,
                                                   gw.getHeight() / 2);
}

/*
 * Creates a crossed box, which is a GCompound consisting of a GRect and its
 * diagonals.  The reference point for the crossed box is at the center.
 */

function createCrossedBox(width, height) {
   let compound = GCompound();
   compound.add(GRect(-width / 2, -height / 2, width, height));
   compound.add(GLine(-width / 2, -height / 2, width / 2, height / 2));
   compound.add(GLine(-width / 2, height / 2, width / 2, -height / 2));
   return compound;
}
