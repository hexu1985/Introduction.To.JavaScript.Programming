/*
 * File: Point.js
 * --------------
 * This file defines a simple class for representing encapsulated points.
 * In this implementation, the values of the variables x and y are stored
 * as properties of the record along with the methods getX and getY.
 * This implementation model allows clients to use the method-based
 * form of selection but does not prevent them from making explicit
 * references to the x and y fields.
 */
 
/*
 * Creates a new Point object using the specified x and y coordinates.
 */

function Point(x, y) {
   return {
      x: x,
      y: y,
      getX: function() { return this.x; },
      getY: function() { return this.y; }
   };
}

/* Test program */

function TestPoint() {
   console.log("Point(5, 2).getX() -> " + Point(5, 2).getX() +
               " (should be 5)");
   console.log("Point(5, 2).getY() -> " + Point(5, 2).getY() +
               " (should be 2)");
}
