/*
 * File: TemperatureConverter.js
 * -----------------------------
 * This program implements an interactive Fahrenheit-to-Celsius converter.
 */

"use strict";

/* Constants */

const DIGITS_AFTER_DECIMAL_POINT = 2;

/* Main program */

function TemperatureConverter() {
   let fahrenheit = document.getElementById("Fahrenheit");
   let celsius = document.getElementById("Celsius");
   fahrenheit.addEventListener("input", convertFToC);
   celsius.addEventListener("input", convertCToF);

/* Converts the value in the Fahrenheit box to Celsius */

   function convertFToC() {
      if (fahrenheit.value === "") {
         celsius.value = "";
      } else {
         let f = Number(fahrenheit.value);
         let c = 5 / 9 * (f - 32);
         celsius.value = roundedString(c);
      }
   }

/* Converts the value in the Celsius box to Fahrenheit */

   function convertCToF() {
      if (celsius.value === "") {
         fahrenheit.value = "";
      } else {
         let c = Number(celsius.value);
         let f = 9 / 5 * c + 32;
         fahrenheit.value = roundedString(f);
      }
   }

/* Converts n to a string, limiting the digits after the decimal point */

   function roundedString(n) {
      let str = n.toFixed(DIGITS_AFTER_DECIMAL_POINT);
      while (str.endsWith("0")) {
         str = str.substring(0, str.length - 1);
      }
      if (str.endsWith(".")) str = str.substring(0, str.length - 1);
      return str;
   }
}
