/*
 * File: CenterImage.js
 * --------------------
 * This program illustrates the process of centering an image on the
 * graphics window.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 300;

/* Main program */

function CenterImage() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let image = GImage("MyImage.png");
   image.addEventListener("load", addImageToWindow);

   function addImageToWindow() {
      let x = (gw.getWidth() - image.getWidth()) / 2;
      let y = (gw.getHeight() - image.getHeight()) / 2;
      gw.add(image, x, y);
   }
}
