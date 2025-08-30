# Testing

## Styling Elements for Layout Testing (CSS)

Defines basic styles for the body, container, and box elements used in the layout projection example. Includes positioning, dimensions, background colors, and a rule to highlight incorrect layout states.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-promote-new-mix-rotate-scale-correction.html#_snippet_0](https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-promote-new-mix-rotate-scale-correction.html#_snippet_0)

```css

```
body { padding: 0; margin: 0; } #container-a { position: relative; width: 300px; height: 300px; } #box-a { width: 100px; height: 100px; background-color: #00cc88; } #container-b { position: relative; width: 300px; height: 600px; } #box-b { position: absolute; top: 100px; left: 100px; width: 200px; height: 300px; background-color: #09f; } #trigger-overflow { width: 1px; height: 1px; position: absolute; top: 2000px; left: 2000px; } \[data-layout-correct="false"\] { background: #dd1144 !important; opacity: 0.5; }
```

```

---

## Initializing and Testing Element Projection (JavaScript)

Retrieves necessary functions from global objects, gets the box element, creates a projection node, records its initial position, updates the element's class, updates the projection node, and schedules a post-render check to match the viewport box.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/single-element-layout-change.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/single-element-layout-change.html#_snippet_1)

```javascript

```
const { createNode } = window.Undo
const { matchViewportBox } = window.Assert
const { frame } = window.Projection
const box = document.getElementById("box")
const boxProjection = createNode(box)
const boxOrigin = box.getBoundingClientRect()
boxProjection.willUpdate()
box.classList.add("b")
boxProjection.root.didUpdate()
frame.postRender(() => {
matchViewportBox(box, boxOrigin)
})
```

```

---

## Setting up Layout Projection Nodes and Testing (JavaScript)

Initializes projection nodes for screen containers and box elements using custom functions (`createNode`). Manipulates the DOM to create a new scrollable screen and a box within it. Performs layout matching tests after a delay using `matchViewportBox`.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-scroll-b-a.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-scroll-b-a.html#_snippet_1)

```javascript

```
const { createNode } = window.Undo
const { matchViewportBox, matchVisibility, matchOpacity } = window.Assert
const { frame } = window.Projection
const screen = document.querySelector(".screen")
const screenProjection = createNode(screen)
const box = document.getElementById("box-b")
const boxOrigin = box.getBoundingClientRect()
const boxProjection = createNode(box, screenProjection, { layoutId: "box", })
boxProjection.willUpdate()
const scrollScreen = document.createElement("div")
scrollScreen.classList.add("screen", "scroll")
document.body.appendChild(scrollScreen)
const newBox = document.createElement("div")
newBox.id = "box"
scrollScreen.appendChild(newBox)
scrollScreen.scrollTop = 1000
console.log(scrollScreen.scrollTop)
const scrollScreenProjection = createNode(scrollScreen, undefined)
const newBoxProjection = createNode(
newBox, scrollScreenProjection, { layoutId: "box", }
)
boxProjection.root.didUpdate()
setTimeout(() => {
matchViewportBox(box, boxOrigin)
matchViewportBox(newBox, boxOrigin)
matchViewportBox(box, newBox)
}, 50)
```

```

---

## Setting up Projection Nodes and Testing Layout (JavaScript)

Initializes projection nodes for existing and newly created screen and box elements using functions from `window.Undo` and `window.Projection`. It manipulates the scroll position of a screen element and performs layout matching assertions using `window.Assert.matchViewportBox` after a short delay.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-scroll-a-b.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-scroll-a-b.html#_snippet_1)

```JavaScript

```
const { createNode } = window.Undo
const { matchViewportBox, matchVisibility, matchOpacity } = window.Assert
const { frame } = window.Projection
const scrollScreen = document.querySelector(".screen")
const scrollScreenProjection = createNode(scrollScreen, undefined, { layoutScroll: true, })
scrollScreen.scrollTop = 1000
const box = document.getElementById("box")
const boxProjection = createNode(box, scrollScreenProjection, { layoutId: "box", })
const boxOrigin = box.getBoundingClientRect()
boxProjection.willUpdate()
const screen = document.createElement("div")
screen.classList.add("screen")
document.body.appendChild(screen)
const screenProjection = createNode(screen, undefined)
const newBox = document.createElement("div")
newBox.id = "box-b"
screen.appendChild(newBox)
const newBoxProjection = createNode(newBox, screenProjection, { layoutId: "box", })
boxProjection.root.didUpdate()
setTimeout(() => {
matchViewportBox(box, boxOrigin)
matchViewportBox(newBox, boxOrigin)
matchViewportBox(box, newBox)
}, 50)
```

```

---

## Setting up Framer Motion Projection Nodes and Testing (JavaScript)

Initializes Framer Motion projection nodes for existing ('a') and newly created ('b') DOM elements. It triggers layout updates and uses assertion functions (`checkFrame`) within `requestAnimationFrame` loops to verify the state of the projection tree.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/perf-shared-single.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/perf-shared-single.html#_snippet_1)

```javascript

```
const { createNode } = window.Animate
const { matchViewportBox, checkFrame } = window.Assert
const { frame } = window.Projection
const a = document.getElementById("a")
const aProjection = createNode(
a,
undefined,
{ layoutId: "box" },
{ duration: 0.1 }
)
aProjection.willUpdate()
const b = document.createElement("b")
b.id = "b"
document.body.appendChild(b)
const bProjection = createNode(
b,
undefined,
{ layoutId: "box" },
{ duration: 0.1 }
)
aProjection.root.didUpdate()
requestAnimationFrame(() => {
requestAnimationFrame(() => {
console.log(window.ProjectionFrames)
checkFrame(a, 1, {
totalNodes: 3,
resolvedTargetDeltas: 1, // We only need to resolve a target for the lead node
recalculatedProjection: 2, // But recalculate a projection for both
})
})
})
```

```

---

## Styling Basic Elements for Layout Testing (CSS)

Defines basic styles for body, two box elements (#box-a, #box-b), a trigger element (#trigger-overflow), and a rule for incorrect layout state. These styles set dimensions, positioning, background colors, and visual indicators for testing.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-promote-new-mix-skew.html#_snippet_0](https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-promote-new-mix-skew.html#_snippet_0)

```css

```
body { padding: 0; margin: 0; } #box-a { width: 100px; height: 100px; background-color: #00cc88; } #box-b { position: absolute; top: 100px; left: 100px; width: 200px; height: 300px; background-color: #09f; } #trigger-overflow { width: 1px; height: 1px; position: absolute; top: 2000px; left: 2000px; } \[data-layout-correct="false"\] { background: #dd1144 !important; opacity: 0.5; }
```

```