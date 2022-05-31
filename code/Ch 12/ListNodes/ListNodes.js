/*
 * File: ListNodes.js
 * ------------------
 * This program lists the nodes in an element.
 */

"use strict";

/*
 * Lists all the nodes in the DOM tree beginning at the specified start
 * node, which defaults to the <html> node, if present, or the document body.
 */

function listNodes(start) {
   if (start === undefined) {
      start = document.getElementsByTagName("html")[0];
      if (start === undefined) start = document.body;
   }
   let lines = [ ];
   walkNodeTree(start, 0, lines);
   for (let i = 0; i < lines.length; i++) {
      console.log(lines[i]);
   }
}

/*
 * Performs a recursive walk of the node tree beginning at node.  The
 * string representation for each node is added to the lines array,
 * preceded by the specified indentation.
 */

function walkNodeTree(node, indent, lines) {
   if (node.data !== undefined) {
      let str = node.data.trim();
      if (str !== "") lines.push(concatNCopies(indent, " ") + str);
   } else {
      let str = node.toString();
      if (str.startsWith("[object HTML") && str.endsWith("Element]")) {
         let tag = str.substring("[object HTML".length,
                                 str.length - "Element]".length).toLowerCase();
         str = "<" + tag;
         let attributeNames = node.getAttributeNames();
         for (let i = 0; i < attributeNames.length; i++) {
            str += " " + attributeNames[i] + "=" +
                   '"' + node.getAttribute(attributeNames[i]) + '"';
         }
         str += ">";
         lines.push(concatNCopies(indent, " ") + str);
         for (let i = 0; i < node.childNodes.length; i++) {
            walkNodeTree(node.childNodes[i], indent + 2, lines);
         }
         lines.push(concatNCopies(indent, " ") + "</" + tag + ">");
      }
   }
}

/*
 * Creates a string consisting of n copies of str.
 */

function concatNCopies(n, str) {
   let result = "";
   for (let i = 0; i < n; i++) {
      result += str;
   }
   return result;
}
