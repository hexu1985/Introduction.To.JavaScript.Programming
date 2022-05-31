/*
 * File: Point.js
 * --------------
 * This file defines a simple class for representing encapsulated points.
 * In this implementation, the values of the variables x and y are stored
 * in the closure of the factory method and are therefore private to the
 * implementation.  The client can obtain these values using the getter
 * methods getX and getY but cannot change these values.
 */
 
/*
 * Creates a new Point object using the specified x and y coordinates.
 */

function Point(x, y) {
   return { getX, getY, toString };

/*
 * Returns the x component of the point.
 */

   function getX() {
      return x;
   }

/*
 * Returns the y component of the point.
 */

   function getY() {
      return y;
   }

/*
 * Converts the point to a string in the form (x, y).
 */

   function toString() {
      return "(" + x + ", " + y + ")";
   }
}

/* Test program */

function TestPoint() {
   console.log("Point(5, 2).getX() -> " + Point(5, 2).getX() +
               " (should be 5)");
   console.log("Point(5, 2).getY() -> " + Point(5, 2).getY() +
               " (should be 2)");
   console.log("Point(5, 2).toString() -> \"" + Point(5, 2).toString() +
               "\" (should be \"(5, 2)\")");
}
