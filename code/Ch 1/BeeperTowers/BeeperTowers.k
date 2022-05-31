/*
 * File: BeeperTowers.k
 * --------------------
 * This program collects all the beepers in a series of towers, deposits
 * them at the easternmost corner on 1st Street, and then returns home.
 */

function BeeperTowers() {
   collectAllBeepers();
   dropAllBeepers();
   returnHome();
}

/*
 * Collects the beepers from every tower along 1st Street.
 */

function collectAllBeepers() {
   while (frontIsClear()) {
      collectOneTower();
      move();
   }
   collectOneTower();
}

/*
 * Collects the beepers in a single tower.
 */

function collectOneTower() {
   turnLeft();
   collectLineOfBeepers();
   turnAround();
   moveToWall();
   turnLeft();
}

/*
 * Collects a consecutive line of beepers.
 */

function collectLineOfBeepers() {
   while (beepersPresent()) {
      pickBeeper();
      if (frontIsClear()) {
         move();
      }
   }
}

/*
 * Drops all the beepers from Karel's bag onto the current corner.
 */

function dropAllBeepers() {
   while (beepersInBag()) {
      putBeeper();
   }
}

/*
 * Returns Karel to the corner of 1st Avenue and 1st Street, facing east.
 */

function returnHome() {
   turnAround();
   moveToWall();
   turnAround();
}

/*
 * Moves Karel forward until it is blocked by a wall.
 */

function moveToWall() {
   while (frontIsClear()) {
      move();
   }
}
