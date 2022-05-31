/*
 * File: BeaconsOfGondor.js
 * ------------------------
 * This program illustrates the concept of a linked list by simulating the
 * Beacons of Gondor story from J. R. R. Tolkien's Return of the King.
 */

"use strict";

/* Constants */

const TOWER_NAMES = [
   "Minas Tirith",
   "Amon Din",
   "Eilenach",
   "Nardol",
   "Erelas",
   "Min-Rimmon",
   "Calenhad",
   "Halifirien",
   "Rohan"
];

/* Main program */

function BeaconsOfGondor() {
   let beacons = SignalTower.createChain(TOWER_NAMES);
   beacons.signal();
}
