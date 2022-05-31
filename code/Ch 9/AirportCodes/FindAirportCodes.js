/*
 * File: FindAirportCodes.js
 * -------------------------
 * This program looks up three-letter airport codes in a constant map
 * called AIRPORT_CODES, which is loaded independently.
 */

"use strict";

/* Main program */

function FindAirportCodes() {
   console.requestInput("Airport code: ", processLine);

   function processLine(line) {
      if (line !== "") {
         let city = AIRPORT_CODES[line];
         if (city === undefined) {
            console.log("There is no airport code " + line);
         } else {
            console.log(city);
         }
         console.requestInput("Airport code: ", processLine);
      }
   }
}
