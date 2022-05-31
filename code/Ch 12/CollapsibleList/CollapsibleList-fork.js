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
      if (listItem.containsNestedLists()) {
         listItem.addEventListener("click", createCallback(listItem));
      }
   }
}

/*
 * Sets the display state of listItem to the value of isCollapsed.
 */

   function setDisplayState(listItem, isCollapsed) {
      for (let i = 0; i < listItem.childNodes.length; i++) {
         let node = listItem.childNodes[i];
         if (node.nodeName.toLowerCase() === "ul") { 
            node.style.display = (isCollapsed) ? "none" : "block";
         }
      }
      if (listItem.containsNestedLists()) {
         let marker = (isCollapsed) ? "TriangleRight.png" : "TriangleDown.png";
         listItem.style.listStyleImage = "url('images/" + marker + "')";
         listItem.isCollapsed = isCollapsed;
      } else {
         listItem.style.listStyleImage = "none";
         listItem.style.listStyleType = "none";
      }
   }

/*
 * Returns true if the listItem has nested lists inside it.
 */

function containsNestedLists(listItem) {
   for (let i = 0; i < listItem.childNodes.length; i++) {
      if (listItem.childNodes[i].nodeName.toLowerCase() === "ul") return true;
   }
   return false;
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
