/*
 * File: TokenScannerUnitTest.js
 * -----------------------------
 * This file tests the complete implementation of the JSTokenScanner class.
 */

"use strict";

function TokenScannerUnitTest() {
   JSUnitTest.resetErrorCount();
   testScannerNoOptions();
   testScannerLanguageOptions();
   testScanNumbers();
   if (JSUnitTest.getErrorCount() === 0) {
      console.println("TokenScannerUnitTest succeeded");
   } else {
      console.println("TokenScannerUnitTest failed");
   }
}

function testScannerNoOptions() {
   const INPUT = "const PI = 3.14159265;"
   let scanner = JSTokenScanner(INPUT);
   JSUnitTest.assertTrue("scanner.hasMoreTokens() -> " +
                         scanner.hasMoreTokens(),
                         scanner.hasMoreTokens());
   let token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "const");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.WORD);
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, " ");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.SEPARATOR);
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "PI");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.WORD);
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, " ");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.SEPARATOR);
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "=");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.OPERATOR);
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, " ");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.SEPARATOR);
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "3");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.NUMBER);
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, ".");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.OPERATOR);
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "14159265");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.NUMBER);
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, ";");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.OPERATOR);
   JSUnitTest.assertFalse("scanner.hasMoreTokens() -> " +
                          scanner.hasMoreTokens(),
                          scanner.hasMoreTokens());
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.EOF);
}

function testScannerLanguageOptions() {
   const INPUT = "const PI = 3.14159265;"
   let scanner = JSTokenScanner(INPUT);
   scanner.ignoreWhitespace();
   scanner.scanStrings();
   scanner.scanNumbers();
   scanner.addWordCharacters("_");
   scanner.addOperator("==");
   scanner.addOperator("!=");
   scanner.addOperator("<=");
   scanner.addOperator(">=");
   scanner.addOperator("++");
   scanner.addOperator("--");
   scanner.addOperator("&&");
   scanner.addOperator("||");
   JSUnitTest.assertTrue("scanner.hasMoreTokens() -> " +
                         scanner.hasMoreTokens(),
                         scanner.hasMoreTokens());
   let token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "const");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.WORD);
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "PI");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.WORD);
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "=");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.OPERATOR);
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "3.14159265");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.NUMBER);
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, ";");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.OPERATOR);
   JSUnitTest.assertFalse("scanner.hasMoreTokens() -> " +
                          scanner.hasMoreTokens(),
                          scanner.hasMoreTokens());
   token = scanner.nextToken()
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.EOF);
   const EXPRESSION = "if (a_1<=b+++_c &&&x!=4)";
   scanner.setInput(EXPRESSION);
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "if");
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "(");
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "a_1");
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "<=");
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "b");
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "++");
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "+");
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "_c");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.WORD);
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "&&");
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "&");
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "x");
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "!=");
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "4");
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, ")");
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "");
   JSUnitTest.assertEquals("scanner.getTokenType(token) -> " +
                           scanner.getTokenType(token),
                           scanner.getTokenType(token),
                           JSTokenScanner.EOF);
}

function testScanNumbers() {
   const INPUT = "42 73x 3.14159265 6.28E-25";
   let scanner = JSTokenScanner(INPUT);
   scanner.ignoreWhitespace();
   scanner.scanNumbers();
   let token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "42");
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "73");
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "x");
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "3.14159265");
   token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "6.28E-25");
}

function testScanEscapeSequences() {
   let scanner = JSTokenScanner();
   scanner.scanStrings();
   scanner.setInputString("'A'");
   let token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "'A'");
   JSUnitTest.assertEquals("getStringValue(token) -> \"" +
                           scanner.getStringValue(token),
                           scanner.getStringValue(token), "A");
   scanner.setInputString("\"Quoted String\"");
   let token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "\"Quoted String\"");
   JSUnitTest.assertEquals("getStringValue(token) -> \"" +
                           scanner.getStringValue(token),
                           scanner.getStringValue(token), "Quoted String");
   scanner.setInputString("\"\\\"Bother\\\" said Pooh.\"");
   let token = scanner.nextToken();
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "\"\\\"Bother\\\" said Pooh.\"");
   JSUnitTest.assertEquals("getStringValue(token) -> \"" +
                           scanner.getStringValue(token),
                           scanner.getStringValue(token),
                           "\"Bother\" said Pooh.");
   scanner.setInputString("\"\\xFF\\t\"");
   JSUnitTest.assertEquals("scanner.nextToken() -> \"" + token + "\"",
                           token, "\"\\xFF\\t\"");
   JSUnitTest.assertEquals("getStringValue(token) -> \"" +
                           scanner.getStringValue(token),
                           scanner.getStringValue(token), "\xFF\t");
}
