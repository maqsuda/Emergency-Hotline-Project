## ASSIGNMENT-005

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans.
**getElementById :**
it is Unique identity of an element.select one element .If no element with the specified ID is found, it returns null.

**getElementsByClassName :**
selects multiple element based on their similar classname and share a common class.

**querySelector :**
Selects the first element that matches a specified CSS selector. This can include IDs, classes, tag names, attributes, or any combination of CSS selectors.

**querySelectorAll **
Selects all elements that match a specified CSS selector.
To select multiple elements using complex CSS selectors, returning a collection that can be iterated over.

2.  How do you **create and insert a new element into the DOM**?
    Ans.
    Use document.createElement() for creation and adding a new element by appendChild.
    Examle:
    let parentDiv = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerText = 'This is a h2';
    parentDiv.appendChild(h2);

3.  What is **Event Bubbling** and how does it work?
    Ans. Event bubbling is a technique which bubbles up and searches for everything related to the event.

4.  What is **Event Delegation** in JavaScript? Why is it useful?
    Ans. It is improves both the performance and maintainability of code, especially when dealing with dynamic content or a large number of elements.

5.  What is the difference between **preventDefault() and stopPropagation()** methods?
    Ans. preventDefault() is used to prevent the default action.
    stopPropagation() is used to prevent the propagation that is If event.stopPropagation() is called within an event handler, the event will not continue to travel up or down the DOM tree.
