/*
 * File: Craps.js
 * --------------
 * This program plays the casino game of Craps.  At the beginning of
 * the game, the player rolls a pair of dice and computes the total.
 * If the total is 2, 3, or 12 (called "craps"), the player loses.
 * If the total is 7 or 11 (called a "natural"), the player wins.
 * If the total is any other number, that number becomes the "point."
 * From here, the player keeps rolling the dice until (a) the point
 * comes up again, in which case the player wins, or (b) a 7 appears,
 * in which case the player loses.  The numbers 2, 3, 11, and 12 no
 * longer have special significance after the first roll.
 */

"use strict";

function Craps() {
   let total = rollTwoDice();
   if (total === 7 || total === 11) {
      console.log("That's a natural.  You win.");
   } else if (total === 2 || total === 3 || total === 12) {
      console.log("That's craps.  You lose.");
   } else {
      let point = total;
      console.log("Your point is " + point + ".");
      let running = true;
      while (running) {
         total = rollTwoDice();
         if (total === point) {
            console.log("You made your point.  You win.");
            running = false;
         } else if (total === 7) {
            console.log("That's a 7.  You lose.");
            running = false;
         }
      }
   }
}

/*
 * Rolls two dice, displays their values, and returns their sum.
 */

function rollTwoDice() {
   let d1 = randomInteger(1, 6);
   let d2 = randomInteger(1, 6);
   let total = d1 + d2;
   console.log("Rolling dice: " + d1 + " + " + d2 + " = " + total);
   return total;
}
