/*
 * File: GTextBox.js
 * -----------------
 * This file creates a new GTextBox class that extends GCompound to
 * display text inside a rectangular box.
 */

"use strict";

/*
 * This class represents a compound that displays text in a rectangular
 * box.  The factory method returns a new GTextBox object with the
 * specified width, height, and text.
 */

function GTextBox(width, height, text) {
   const DEFAULT_FONT = "18px 'Helvetica Neue','Arial','Sans-Serif'";
   let box = GCompound();
   let frame = GRect(width, height);
   let label = GLabel(text);
   frame.setFilled(true);
   frame.setFillColor("White");
   label.setFont(DEFAULT_FONT);
   box.add(frame);
   box.add(label, (width - label.getWidth()) / 2,
                  (height + label.getAscent()) / 2);
   box.setLineColor = setLineColor;
   box.setFillColor = setFillColor;
   box.setTextColor = setTextColor;
   return box;

/*
 * Sets the line color of the frame surrounding the text.
 */

   function setLineColor(color) {
      frame.setColor(color);
   }

/*
 * Sets the fill color of the frame surrounding the text.
 */

   function setFillColor(color) {
      frame.setFillColor(color);
   }

/*
 * Sets the color of the text in the box.
 */

   function setTextColor(color) {
      label.setColor(color);
   }

}
