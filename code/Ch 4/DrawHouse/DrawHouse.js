/*
 * File: DrawHouse.js
 * ------------------
 * This program draws a simple frame house at the center of the graphics
 * window.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;  /* The width of the graphics window            */
const GWINDOW_HEIGHT = 300; /* The height of the graphics window           */
const HOUSE_WIDTH = 300;    /* The width of the house                      */
const HOUSE_HEIGHT = 210;   /* The height of the house including the roof  */
const ROOF_HEIGHT = 75;     /* The height of the roof above the frame      */
const DOOR_WIDTH = 60;      /* The width of the door                       */
const DOOR_HEIGHT = 105;    /* The height of the door                      */
const DOORKNOB_SIZE = 6;    /* The diameter of the doorknob                */
const DOORKNOB_INSET_X = 5; /* The distance from the knob to the door edge */
const WINDOW_WIDTH = 70;    /* The width of each window                    */
const WINDOW_HEIGHT = 50;   /* The height of each window                   */
const WINDOW_INSET_X = 26;  /* The distance from outer wall to the window  */
const WINDOW_INSET_Y = 30;  /* The distance from the ceiling to the window */

/* Main program */

function DrawHouse() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let houseX = (gw.getWidth() - HOUSE_WIDTH) / 2;
   let houseY = (gw.getHeight() - HOUSE_HEIGHT) / 2;
   drawFrameHouse(gw, houseX, houseY);
}

/*
 * Draws a simple frame house on the graphics window gw. The parameters
 * x and y indicate the upper left corner of the bounding box that
 * surrounds the entire house.
 */

function drawFrameHouse(gw, x, y) {
   drawFrame(gw, x, y);
   let doorX = x + (HOUSE_WIDTH - DOOR_WIDTH) / 2;
   let doorY = y + HOUSE_HEIGHT - DOOR_HEIGHT;
   drawDoor(gw, doorX, doorY);
   let leftWindowX = x + WINDOW_INSET_X;
   let rightWindowX = x + HOUSE_WIDTH - WINDOW_INSET_X - WINDOW_WIDTH;
   let windowY = y + ROOF_HEIGHT + WINDOW_INSET_Y;
   drawWindow(gw, leftWindowX, windowY);
   drawWindow(gw, rightWindowX, windowY);
}

/*
 * Draws the frame for the house on the graphics window gw.  The parameters
 * x and y indicate the upper left corner of the bounding box.
 */

function drawFrame(gw, x, y) {
   let roofY = y + ROOF_HEIGHT;
   gw.add(GRect(x, roofY, HOUSE_WIDTH, HOUSE_HEIGHT - ROOF_HEIGHT));
   gw.add(GLine(x, roofY, x + HOUSE_WIDTH / 2, y));
   gw.add(GLine(x + HOUSE_WIDTH / 2, y, x + HOUSE_WIDTH, roofY));
}

/*
 * Draws a door (with its doorknob) on the graphics window gw.  The
 * parameters x and y indicate the upper left corner of the door.
 */

function drawDoor(gw, x, y) {
   gw.add(GRect(x, y, DOOR_WIDTH, DOOR_HEIGHT));
   let doorknobX = x + DOOR_WIDTH - DOORKNOB_INSET_X - DOORKNOB_SIZE;
   let doorknobY = y + DOOR_HEIGHT / 2;
   gw.add(GOval(doorknobX, doorknobY, DOORKNOB_SIZE, DOORKNOB_SIZE));
}

/*
 * Draws a rectangular window divided vertically into two panes.  The
 * parameters x and y indicate the upper left corner of the window.
 */

function drawWindow(gw, x, y) {
   gw.add(GRect(x, y, WINDOW_WIDTH, WINDOW_HEIGHT));
   gw.add(GLine(x + WINDOW_WIDTH / 2, y,
                x + WINDOW_WIDTH / 2, y + WINDOW_HEIGHT));
}
