/*
 * File: MoveBeeperToLedge.k
 * -------------------------
 * This program solves the problem of moving a beeper to a ledge.
 */

function MoveBeeperToLedge() {
   move();
   pickBeeper();
   move();
   turnLeft();
   move();
   turnRight();
   move();
   putBeeper();
   move();
}

/*
 * Turns Karel right 90 degrees.
 */

function turnRight() {
   turnLeft();
   turnLeft();
   turnLeft();
}
