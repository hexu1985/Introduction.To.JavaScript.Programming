/*
 * File: DrawTrain.js
 * ------------------
 * This program defines a class hierarchy for representing train cars
 * based on the GCompound class.  The implementations of the Engine
 * and Caboose classes are left to the reader as exercises.
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;       /* Width of the graphics window         */
const GWINDOW_HEIGHT = 300;      /* Height of the graphics window        */
const CAR_WIDTH = 113;           /* Width of the frame of a train car    */
const CAR_HEIGHT = 54;           /* Height of the frame of a train car   */
const CAR_BASELINE = 15;         /* Distance of car base to the track    */
const CONNECTOR = 6;             /* Width of the connector on each car   */
const WHEEL_RADIUS = 12;         /* Radius of the wheels on each car     */
const WHEEL_INSET = 24;          /* Distance from frame to wheel center  */
const CAB_WIDTH = 53;            /* Width of the cab on the engine       */
const CAB_HEIGHT = 12;           /* Height of the cab on the engine      */
const SMOKESTACK_WIDTH = 12;     /* Width of the smokestack              */
const SMOKESTACK_HEIGHT = 12;    /* Height of the smokestack             */
const SMOKESTACK_INSET = 12;     /* Distance from smokestack to front    */
const DOOR_WIDTH = 27;           /* Width of the door on the boxcar      */
const DOOR_HEIGHT = 48;          /* Height of the door on the boxcar     */
const CUPOLA_WIDTH = 53;         /* Width of the cupola on the caboose   */
const CUPOLA_HEIGHT = 12;        /* Height of the cupola on the caboose  */
const TIME_STEP = 20;            /* Time step for the animation          */

/* Main program */

function DrawTrain() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let train = Train();
   train.append(Boxcar("Green"));
   let x = (gw.getWidth() - train.getWidth()) / 2;
   let y = gw.getHeight();
   gw.add(train, x, y);
   let timer = null;
   gw.addEventListener("click", clickAction);

   function clickAction() {
     timer = setInterval(step, TIME_STEP);
   }

   function step() {
      train.move(-1, 0);
      if (train.getX() + train.getWidth() < 0) {
         clearInterval(timer);
      }
   }
}

/*
 * Creates a new instance of the Train class, which is a subclass of
 * GCompound extended to include an append method.
 */

function Train() {
   let train = GCompound();
   train.append = append;
   return train;

/*
 * Appends the car to the end of the train.
 */

   function append(car) {
      train.add(car, train.getWidth(), 0);
   }
}

/*
 * Creates a new instance of the TrainCar class, which is the common
 * superclass for the concrete subclasses Engine, Boxcar, and Caboose.
 */

function TrainCar(color) {
   let frame = GCompound();
   let x = CONNECTOR;
   let y = -CAR_BASELINE;
   frame.add(GLine(0, y, CAR_WIDTH + 2 * CONNECTOR, y));
   frame.add(TrainWheel(), x + WHEEL_INSET,  -WHEEL_RADIUS);
   frame.add(TrainWheel(), x + CAR_WIDTH - WHEEL_INSET,  -WHEEL_RADIUS);
   let r = GRect(x, y - CAR_HEIGHT, CAR_WIDTH, CAR_HEIGHT);
   r.setFilled(true);
   r.setFillColor(color);
   frame.add(r);
   return frame;
}

/*
 * Creates a new instance of the Boxcar class in the specified color.
 */

function Boxcar(color) {
   let boxcar = TrainCar(color);
   let x = CONNECTOR + CAR_WIDTH / 2;
   let y = -(CAR_BASELINE + DOOR_HEIGHT);
   boxcar.add(GRect(x - DOOR_WIDTH, y, DOOR_WIDTH, DOOR_HEIGHT));
   boxcar.add(GRect(x, y, DOOR_WIDTH, DOOR_HEIGHT));
   return boxcar;
}

/*
 * Creates a new TrainWheel object whose reference point is the center.
 */

function TrainWheel() {
   let wheel = GCompound();
   let r = WHEEL_RADIUS;
   let circle = GOval(-r, -r, 2 * r, 2 * r);
   circle.setFilled(true);
   circle.setFillColor("Gray");
   wheel.add(circle);
   return wheel;
}
