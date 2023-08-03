## What are react portals.
React portals come up with a way to render children into a DOM node that occurs outside the DOM hierarchy of the parent component .
Mostly used for rendering backdrops and overlays.
In order to use portal  
1) First of all make a div in index.html with an id.
2) Then write css for backdrop and modal-overlay.
3) Then write jsx (e.g Modal.jsx) .
4) Then use this (Modal.jsx) as a wrapper in other compoent which we want to render as overlay.
