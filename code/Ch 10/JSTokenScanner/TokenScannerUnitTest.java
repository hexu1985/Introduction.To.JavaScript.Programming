/*
 * File: TokenScannerUnitTest.java
 * -------------------------------
 * This program implements a unit test of the simplified version of the
 * TokenScanner class.
 */

package edu.stanford.cs.javacs2.ch7.exercises;

import edu.stanford.cs.javacs2.ch7.TokenScanner;
import static edu.stanford.cs.unittest.UnitTest.assertEquals;

public class TokenScannerUnitTest {

   public void run() {
      TokenScanner scanner = new TokenScanner("This is Pig Latin.");
      assertEquals(scanner.nextToken(), "This");
      assertEquals(scanner.nextToken(), " ");
      assertEquals(scanner.nextToken(), "is");
      assertEquals(scanner.nextToken(), " ");
      assertEquals(scanner.nextToken(), "Pig");
      assertEquals(scanner.nextToken(), " ");
      assertEquals(scanner.nextToken(), "Latin");
      assertEquals(scanner.hasMoreTokens(), true);
      assertEquals(scanner.nextToken(), ".");
      assertEquals(scanner.hasMoreTokens(), false);
      assertEquals(scanner.nextToken(), "");
      scanner.setInput("double area = Math.PI * r * r;");
      scanner.ignoreWhitespace();
      assertEquals(scanner.nextToken(), "double");
      assertEquals(scanner.nextToken(), "area");
      scanner.saveToken("area");
      assertEquals(scanner.nextToken(), "area");
      assertEquals(scanner.nextToken(), "=");
      assertEquals(scanner.nextToken(), "Math");
      assertEquals(scanner.nextToken(), ".");
      assertEquals(scanner.nextToken(), "PI");
      assertEquals(scanner.nextToken(), "*");
      assertEquals(scanner.nextToken(), "r");
      assertEquals(scanner.nextToken(), "*");
      assertEquals(scanner.nextToken(), "r");
      assertEquals(scanner.nextToken(), ";");
      assertEquals(scanner.hasMoreTokens(), false);
   }

/* Main program */

   public static void main(String[] args) {
      new TokenScannerUnitTest().run();
   }

}
