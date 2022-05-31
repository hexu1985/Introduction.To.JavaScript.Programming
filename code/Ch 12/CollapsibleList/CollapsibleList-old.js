/*
 * File: CollapsibleList.js
 * ------------------------
 * This file contains code for converting HTML lists into collapsible lists.
 */

"use strict";

/*
 * Collapses all <li> elements and adds a listener for click events.
 */

function collapseAll() {
   let nodes = document.getElementsByTagName("li");
   for (let i = 0; i < nodes.length; i++) {
      let listItem = nodes[i];
      setDisplayState(listItem, true);
      listItem.addEventListener("click", createCallback(listItem));
   }
}

/*
 * Sets the display state of listItem to the value of isCollapsed.
 */

function setDisplayState(listItem, isCollapsed) {
   let containsNestedLists = false;
   for (let i = 0; i < listItem.childNodes.length; i++) {
      let node = listItem.childNodes[i];
      if (node.nodeName.toLowerCase() === "ul") { 
         containsNestedLists = true;
         node.style.display = (isCollapsed) ? "none" : "block";
      }
   }
   if (containsNestedLists) {
      let marker = (isCollapsed) ? "TriangleRight.png" : "TriangleDown.png";
      listItem.style.listStyleImage = "url('" + marker + "')";
      listItem.isCollapsed = isCollapsed;
   } else {
      listItem.style.listStyleImage = "none";
      listItem.style.listStyleType = "none";
   }
}

/*
 * Returns a callback function that toggles the state of listItem.
 */

function createCallback(listItem) {
   return function(e) {
             e.stopPropagation();
             setDisplayState(listItem, !listItem.isCollapsed);
          };
}
