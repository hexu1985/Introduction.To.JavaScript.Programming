/*
 * File: CaesarCipher.js
 * ---------------------
 * This file implements a function to encode a string using a Caesar
 * cipher in which each letter of the alphabet is shifted cyclically
 * by some number of characters.
 */

"use strict";

/*
 * Encrypts a string using a Caesar cipher, in which the value of key
 * is added to each character, wrapping around to the beginning of the
 * alphabet if necessary.  The first line of the function makes sure
 * that the key value is always positive by converting negative keys
 * to the equivalent positive shift.
 */

function caesarCipher(str, key) {
   if (key < 0) key = 26 - (-key % 26);
   let result = "";
   for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch >= "A" && ch <= "Z") {
         let code = ch.charCodeAt(0);
         let base = "A".charCodeAt(0);
         ch = String.fromCharCode(base + (code - base + key) % 26);
      } else if (ch >= "a" && ch <= "z") {
         let code = ch.charCodeAt(0);
         let base = "a".charCodeAt(0);
         ch = String.fromCharCode(base + (code - base + key) % 26);
      }
      result += ch;
   }
   return result;
}

/* Test program */

function TestCaesarCipher() {
   console.requestInput("Enter string/key: ", processLine);
   function processLine(line) {
      if (line !== "") {
         let slash = line.indexOf("/");
         if (slash === -1) {
            console.log("Missing / in input");
         } else {
            let str = line.substring(0, slash);
            let key = parseInt(line.substring(slash + 1));
            console.log("caesarCipher(\"" + str + "\", " + key + ") -> " +
                        caesarCipher(str, key));
         }
         console.requestInput("Enter string/key: ", processLine);
      }
   }
}
