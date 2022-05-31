/*
 * File: SymbolTable.js
 * --------------------
 * This file implements a simple test program that illustrates using
 * maps as symbol tables.
 *
 * The program reads command lines, which must be in one of
 * the following forms:
 *
 *   - A simple assignment statement of the form let = number
 *   - The name of a variable, which displays the value of that variable
 *   - The command list, which lists all variables and their values
 *   - The command quit, which should exit from the program.
 */

function SymbolTable() {
   let map = { };
   let callback = function(cmd) {
      switch (cmd) {
       case "quit": return;
       case "list":
         for (let key in map) {
            console.log(key + " = " + map[key]);
         }
         break;
       default:
         let equals = cmd.indexOf("=");
         if (equals === -1) {
            console.log(map[cmd.trim()]);
         } else {
            let key = cmd.substring(0, equals).trim();
            let value = cmd.substring(equals + 1).trim();
            map[key] = value;
         }
         break;
      }
      console.requestInput("> ", callback);
   };
   console.requestInput("> ", callback);
}
