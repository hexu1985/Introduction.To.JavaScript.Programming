/*
 * File: FillFivePotholes.k
 * ------------------------
 * This program fills five evenly spaced potholes in a road.
 */

"use turns";

function FillRegularPotholes() {
   repeat (5) {
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
