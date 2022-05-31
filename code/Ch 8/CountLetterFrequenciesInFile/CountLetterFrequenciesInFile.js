/*
 * File: CountLetterFrequenciesInFile.js
 * -------------------------------------
 * This function displays a table of letter frequencies for the text in a
 * file chosen by the user.
 */

"use strict";

/*
 * Counts the frequency of letters in a file selected by the user.
 */

function CountLetterFrequenciesInFile() {
   JSFileChooser.chooseTextFile(countLetterFrequencies);
}
