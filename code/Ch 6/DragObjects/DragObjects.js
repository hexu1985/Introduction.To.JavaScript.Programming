/*
 * File: DragObjects.js
 * --------------------
 * This program lets the user drag objects on the window.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;
const GOBJECT_WIDTH = 200;
const GOBJECT_HEIGHT = 100;

/* Main program */

function DragObjects() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let x0 = (gw.getWidth() - GOBJECT_WIDTH) / 2;
   let y0 = (gw.getHeight() - GOBJECT_HEIGHT) / 2;
   let rect = GRect(x0, y0, GOBJECT_WIDTH, GOBJECT_HEIGHT);
   rect.setFilled(true);
   rect.setColor("Blue");
   gw.add(rect);
   let oval = GOval(x0, y0, GOBJECT_WIDTH, GOBJECT_HEIGHT);
   oval.setFilled(true);
   oval.setColor("Red");
   gw.add(oval);
   let objectBeingDragged = null;
   let lastX = 0;
   let lastY = 0;
   gw.addEventListener("mousedown", mousedownAction);
   gw.addEventListener("drag", dragAction);
   gw.addEventListener("click", clickAction);

   function mousedownAction(e) {
      lastX = e.getX();
      lastY = e.getY();
      objectBeingDragged = gw.getElementAt(lastX, lastY);
   }

   function dragAction(e) {
      if (objectBeingDragged !== null) {
         objectBeingDragged.move(e.getX() - lastX, e.getY() - lastY);
         lastX = e.getX();
         lastY = e.getY();
      }
   }

   function clickAction(e) {
      if (objectBeingDragged !== null) {
         objectBeingDragged.sendToFront();
      }
   }
}
