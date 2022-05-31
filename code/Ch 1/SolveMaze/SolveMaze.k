/*
 * File: SolveMaze.k
 * -----------------
 * This program solves a maze by applying the right hand rule, which
 * correctly solves any maze unless the starting square is surrounded
 * by a loop.  The end of the maze is marked by a beeper.
 */

"use turns";

function SolveMaze() {
   while (noBeepersPresent()) {
      turnRight();
      while (frontIsBlocked()) {
         turnLeft();
      }
      move();
   }
}
