/*
 * File: FillRegularPotholes.k
 * ---------------------------
 * This program fills an arbitrary number of regularly spaced potholes.
 */

"use turns";

/*
 * Fills an arbitrary number of regularly spaced potholes in a roadway.
 * The potholes must appear on every even avenue.
 */

function FillRegularPotholes() {
   while (frontIsClear()) {
      move();
      fillPothole();
      move();
   }
}

/*
 * Fills a pothole immediately underneath Karel, if one exists.
 * When you call this function, Karel must be standing just above
 * the pothole, facing east.  When the function returns, Karel
 * will be in its original position above the pothole.
 */

function fillPothole() {
   turnRight();
   move();
   putBeeper();
   turnAround();
   move();
   turnRight();
}
