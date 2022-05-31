/*
 * File: FindAirportsByLocation.js
 * -------------------------------
 * This program lists all the airports in a specified location.
 */

"use strict";

/* Main program */

function FindAirportsByLocation() {
   console.requestInput("Location: ", processLine);

   function processLine(line) {
      if (line !== "") {
         for (let code in AIRPORT_CODES) {
            let location = AIRPORT_CODES[code];
            if (location.indexOf(line) !== -1) {
               console.log(code + ": " + location);
            }
         }
         console.requestInput("Location: ", processLine);
      }
   }
}
