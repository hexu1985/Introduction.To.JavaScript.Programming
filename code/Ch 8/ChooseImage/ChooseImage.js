/*
 * File: ChooseImage.js
 * --------------------
 * This program illustrates the process of choosing an image file.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 400;

/* Main program */

function ChooseImage() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   GImage.chooseImage(displayImage);

   function displayImage(image) {
      let x = (gw.getWidth() - image.getWidth()) / 2;
      let y = (gw.getHeight() - image.getHeight()) / 2;
      gw.add(image, x, y);
   }
}
