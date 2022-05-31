/*
 * File: StartsWith.js
 * -------------------
 * This file defines the predicate function startsWith(str, suffix).
 */

"use strict";

/*
 * Returns true if the string str starts with the specified prefix.
 */

function startsWith(str, prefix) {
  return prefix === str.substring(0, prefix.length);
}

/* Test program */

function TestStartsWith() {
   console.requestInput("Enter string/prefix: ", processLine);

   function processLine(line) {
      if (line !== "") {
         let slash = line.indexOf("/");
         if (slash === -1) {
            console.log("Missing / in input");
         } else {
            let str = line.substring(0, slash);
            let prefix = line.substring(slash + 1);
            console.log("startsWith(\"" + str + "\", \"" + prefix + "\") -> " +
                        startsWith(str, prefix));
         }
         console.requestInput("Enter string/prefix: ", processLine);
      }
   }
}
