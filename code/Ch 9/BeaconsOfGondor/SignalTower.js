/*
 * File: SignalTower.js
 * --------------------
 * This file implements the SignalTower class, which models a
 * communications outpost of the sort used to convey the call for
 * assistance from Minas Tirith to Rohan in J. R. R. Tolkien's
 * Return of the King.  Clients can call the  SignalTower factory
 * method directly, although it is usually more convenient to call the
 * class method SignalTower.createChain with an array of tower names.
 */

"use strict";

/*
 * Creates a new SignalTower object from the tower's name and an
 * optional link to the next SignalTower in the chain.
 */

function SignalTower(name, link = null) {
   return { getName, signal };

/*
 * Returns the name of the tower.
 */

   function getName() {
      return name;
   }

/*
 * Simulates the lighting of this signal tower and then propagates that
 * signal forward to the tower to which this tower is linked, if any.
 */

   function signal() {
      console.log("Lighting " + name);
      if (link !== null) link.signal();
   }

}

/*
 * Creates a chain of SignalTower objects from an array of tower names.
 * This function processes the array in reverse order to ensure that the
 * elements in the list appear in the same order as the names in the array.
 */

SignalTower.createChain = function(names) {
   let towers = null;
   for (let i = names.length - 1; i >= 0; i--) {
      towers = SignalTower(names[i], towers);
   }
   return towers;
};
