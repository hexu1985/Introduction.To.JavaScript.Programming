/*
 * File: ForCallback.java
 * ----------------------
 * This program tests Java's scoping of for loops.
 */

public class ForCallback {

   void run() {
      IntFunction[] functions = new IntFunction[5];
      for (int i = 0; i < 5; i++) {
         functions[i] = (() -> i);
      }
      for (int j = 0; j < 5; j++) {
         System.out.println(functions[j].getIndex());
      }
   }

   public static void main(String[] args) {
      new ForCallback().run();
   }

}

interface IntFunction {
   int getIndex();
}

