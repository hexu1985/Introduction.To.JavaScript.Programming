/*
 * File: Point.js
 * --------------
 * This file defines a simple class for representing encapsulated points.
 * In this implementation, the values of the variables x and y are stored
 * as properties of the record and must be selected explicitly by the
 * client.  This implementation model violates the object-oriented
 * principle of encapsulation.
 */
 
/*
 * Creates a new Point object using the specified x and y coordinates.
 */

function Point(x, y) {
   return { x: x, y: y };
}

/* Test program */

function TestPoint() {
   console.log("Point(5, 2).x -> " + Point(5, 2).x + " (should be 5)");
   console.log("Point(5, 2).y -> " + Point(5, 2).y + " (should be 2)");
}
