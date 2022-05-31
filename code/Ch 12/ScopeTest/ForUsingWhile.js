/*
 * File: ForUsingWhile.js
 * ----------------------
 * This program tests an expansion of the for loop using a while statement.
 * The goal is to find an expansion of
 *
 *    for ( <init>; <test>; <step> ) {
 *       <body>
 *    }
 *
 * that meets the following conditions:
 *
 *   - No editing of <body> is allowed
 *   - Any index variables in <init> are scoped inside the block for closures
 *   - The break and continue statements work
 *   - The code in <body> is free to modify the index variable
 *
 */

function ForUsingWhile() {
   let functions = [ ];
   {
      let _savedIndex = undefined;
      let _firstFlag = true;
      let _continueFlag = false;
      while (true) {
         let i = (_firstFlag) ? 0 : _savedIndex;
         _firstFlag = false;
         if (!(i < 5)) break;
         if (_continueFlag) {
            _continueFlag = false;
         } else {
            _continueFlag = true;
 
            if (i === 1) continue;
            if (i === 3) break;
            functions.push(function() { return i; });

            _continueFlag = false;
         }
         if (!_continueFlag) {
            i++;
            _savedIndex = i;
         }
      }
   }
   for (let j = 0; j < 5; j++) {
      if (functions[j] !== undefined) {
         console.log("functions[" + j + "]() -> " + functions[j]());
      }
   }
}
