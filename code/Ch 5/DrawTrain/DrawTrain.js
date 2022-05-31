/*
 * File: DrawTrain.js
 * ------------------
 * This program draws a three-car train consisting on an engine, a boxcar,
 * and a caboose.  This implementation of the program, however, is
 * incomplete, and contains only the methods given in the text.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;       /* Width of the graphics window         */
const GWINDOW_HEIGHT = 300;      /* Height of the graphics window        */
const CAR_WIDTH = 113;           /* Width of the frame of a train car    */
const CAR_HEIGHT = 54;           /* Height of the frame of a train car   */
const CAR_BASELINE = 15;         /* Distance of car base to the track    */
const CONNECTOR = 6;             /* Width of the connector on each car   */
const WHEEL_RADIUS = 12;         /* Radius of the wheels on each car     */
const WHEEL_INSET = 24;          /* Distance from frame to wheel center  */
const CAB_WIDTH = 53;            /* Width of the cab on the engine       */
const CAB_HEIGHT = 12;           /* Height of the cab on the engine      */
const SMOKESTACK_WIDTH = 12;     /* Width of the smokestack              */
const SMOKESTACK_HEIGHT = 12;    /* Height of the smokestack             */
const SMOKESTACK_INSET = 12;     /* Distance from smokestack to front    */
const DOOR_WIDTH = 27;           /* Width of the door on the boxcar      */
const DOOR_HEIGHT = 48;          /* Height of the door on the boxcar     */
const CUPOLA_WIDTH = 53;         /* Width of the cupola on the caboose   */
const CUPOLA_HEIGHT = 12;        /* Height of the cupola on the caboose  */

/* Main program */

function DrawTrain() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let trainWidth = 3 * (CAR_WIDTH + 2 * CONNECTOR);
   let x = (gw.getWidth() - trainWidth) / 2;
   let y = gw.getHeight();
   let dx = CAR_WIDTH + 2 * CONNECTOR;
   drawEngine(gw, x, y);
   drawBoxcar(gw, x + dx, y, "Green");
   drawCaboose(gw, x + 2 * dx, y);
}

/*
 * Draws an engine whose origin is at (x, y).
 */

function drawEngine(gw, x, y) {
   drawCarFrame(gw, x, y, "Black");
   drawSmokestack(gw, x, y);
   drawEngineCab(gw, x, y);
   drawCowcatcher(gw, x, y);
}

/*
 * Draws the smokestack.
 */

function drawSmokestack(gw, x, y) {
   // You fill this in //
}

/*
 * Draws the engine cab.
 */

function drawEngineCab(gw, x, y) {
   // You fill this in //
}

/*
 * Draws the cowcatcher in the front of the engine.
 */

function drawCowcatcher(gw, x, y) {
   // You fill this in //
}

/*
 * Draws a boxcar in the specified color.
 */

function drawBoxcar(gw, x, y, color) {
   drawCarFrame(gw, x, y, color);
   let cx = x + CONNECTOR + CAR_WIDTH / 2;
   let doorTop = y - CAR_BASELINE - DOOR_HEIGHT;
   gw.add(GRect(cx - DOOR_WIDTH, doorTop, DOOR_WIDTH, DOOR_HEIGHT));
   gw.add(GRect(cx, doorTop, DOOR_WIDTH, DOOR_HEIGHT));
}

/*
 * Draws a red caboose.
 */

function drawCaboose(gw, x, y) {
   // You fill this in //
}

/*
 * Draws the common part of a train car.
 */

function drawCarFrame(gw, x, y, color) {
   let x0 = x + CONNECTOR;
   let y0 = y - CAR_BASELINE;
   let top = y0 - CAR_HEIGHT;
   gw.add(GLine(x, y0, x + CAR_WIDTH + 2 * CONNECTOR, y0));
   drawWheel(gw, x0 + WHEEL_INSET, y - WHEEL_RADIUS);
   drawWheel(gw, x0 + CAR_WIDTH - WHEEL_INSET, y - WHEEL_RADIUS);
   let r = GRect(x0, top, CAR_WIDTH, CAR_HEIGHT);
   r.setFilled(true);
   r.setFillColor(color);
   gw.add(r);
}

/*
 * Draws a wheel centered at (x, y).
 */

function drawWheel(gw, x, y) {
   let r = WHEEL_RADIUS;
   let wheel = GOval(x - r, y - r, 2 * r, 2 * r);
   wheel.setFilled(true);
   wheel.setFillColor("Gray");
   gw.add(wheel);
}
