/*
 * File: RedBalloon.js
 * -------------------
 * This program draws a red balloon emblazoned with the message
 * "CS is fun!" on the graphics window.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 300;
const BALLOON_WIDTH = 140;
const BALLOON_HEIGHT = 160;
const BALLOON_LABEL = "CS is fun!";
const CORD_LENGTH = 100;

/* Main program */

function RedBalloon() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let cx = gw.getWidth() / 2;
   let cy = gw.getHeight() / 2;
   let balloonX = cx - BALLOON_WIDTH / 2;
   let balloonY = cy - (BALLOON_HEIGHT + CORD_LENGTH) / 2;
   let balloon = GOval(balloonX, balloonY, BALLOON_WIDTH, BALLOON_HEIGHT);
   balloon.setFilled(true);
   balloon.setFillColor("Red");
   let cordY = balloonY + BALLOON_HEIGHT;
   let cord = GLine(cx, cordY, cx, cordY + CORD_LENGTH);
   let label = GLabel(BALLOON_LABEL);
   label.setFont("bold 28px 'Helvetica Neue','Arial','Sans-Serif'");
   label.setColor("White");
   let labelX = cx - label.getWidth() / 2;
   let labelY = balloonY + (BALLOON_HEIGHT + label.getAscent()) / 2;
   gw.add(balloon);
   gw.add(cord);
   gw.add(label, labelX, labelY);
}
