# Guides

## Implementing Optimized Appear Animation with Framer Motion/React - JavaScript

Initializes dependencies from global objects, defines spring physics parameters, creates a React component using `motion.div` with initial/animate states and a spring transition, includes an animation start check, renders the component server-side, generates spring keyframes based on physics, and starts a Motion One optimized appear animation with hydration triggered mid-animation.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/interrupt-spring.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/interrupt-spring.html#_snippet_1)

```javascript

```
const { motion, animateStyle, startOptimizedAppearAnimation, optimizedAppearDataAttribute, motionValue, spring, } = window.Motion
const { matchViewportBox, matchOpacity } = window.Assert
const root = document.getElementById("root")
const stiffness = 300
const damping = 40
const mass = 1
// This is the tree to be rendered "server" and client-side.
const Component = React.createElement(motion.div, {
id: "box",
initial: { y: 0, scale: 1 },
animate: { y: 100, scale: 2 },
transition: { type: "spring", stiffness, damping, mass },
/**
* On animation start, check the values we expect to see here
*/
onAnimationStart: () => {
const { top, left } = document
.getElementById("box")
.getBoundingClientRect()
if (top < 110 || top > 140 || left < 60 || left > 90) {
showError(box, `unexpected viewport box`)
}
},
style: { willChange: "opacity" },
\[optimizedAppearDataAttribute\]: "a",
})
// Emulate server rendering of element
root.innerHTML = ReactDOMServer.renderToString(Component)
const springTimeResolution = 10
function generateSpringKeyframes(from, to) {
let t = 0
const keyframes = \[\]
const springAnimation = spring({
keyframes: \[from, to\],
stiffness,
damping,
mass,
})
let state = { done: false, value: from }
while (!state.done) {
state = springAnimation.next(t)
keyframes.push(state.value)
t += springTimeResolution
}
return keyframes
}
const yKeyframes = generateSpringKeyframes(0, 100)
const scaleKeyframes = generateSpringKeyframes(1, 2)
const maxKeyframes = Math.max(
yKeyframes.length,
scaleKeyframes.length
)
const transformOptions = {
duration: maxKeyframes * springTimeResolution,
ease: "linear",
}
const transformKeyframes = \[\]
for (let i = 0; i < maxKeyframes; i++) {
transformKeyframes.push(
`translateY(${ yKeyframes\[Math.min(i, yKeyframes.length - 1)\] }px) scale(${ scaleKeyframes\[Math.min(i, scaleKeyframes.length - 1)\] })`
)
}
// Start Motion One animations
const animation = startOptimizedAppearAnimation(
document.getElementById("box"),
"transform",
transformKeyframes,
transformOptions,
(animation) => {
// Hydrate root mid-way through animation
setTimeout(() => {
ReactDOM.hydrateRoot(root, Component)
}, 100)
}
)
```

```

---

## Starting Optimized Opacity Animation (JavaScript)

Initiates an optimized appear animation for the 'opacity' property of the box element using `startOptimizedAppearAnimation`. It animates from 0 to 1 using the same timing options as the transform animation.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/resync-delay.html#_snippet_3](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/resync-delay.html#_snippet_3)

```javascript

```
startOptimizedAppearAnimation(
document.getElementById("box"),
"opacity",
[0, 1],
options
)
```

```

---

## Starting Manual Rotation Animation (JavaScript)

Initializes the start time and begins the manual rotation animation loop by calling `requestAnimationFrame`. This function is commented out in the provided code.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/benchmarks/pregenerated-background-color.html#_snippet_3](https://github.com/grx7/framer-motion/blob/main/dev/html/public/benchmarks/pregenerated-background-color.html#_snippet_3)

```javascript

```
function animateRotation() {
startTime = performance.now()
requestAnimationFrame(rotate)
}
// animateRotation()
```

```

---

## Starting Optimized Opacity Appear Animation

Initiates a Web Animations API (WAAPI) optimized animation for the opacity property of the #box element, transitioning from 0 to 1 over a specified duration with a linear ease.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-block.html#_snippet_4](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-block.html#_snippet_4)

```javascript

```
// Start optimised opacity animation
startOptimizedAppearAnimation(
document.getElementById("box"),
"opacity",
[0, 1],
{
duration: duration * 1000,
ease: "linear",
}
)
```

```

---

## Starting Optimized Appear Animations (JavaScript)

Demonstrates starting optimized appear animations for `opacity` and `backgroundColor` properties on the target element using `startOptimizedAppearAnimation`. It highlights a potential conflict with the `backgroundColor` animation defined in the component's `animate` prop.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout-ancestor.html#_snippet_4](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout-ancestor.html#_snippet_4)

```JavaScript

```
// Start optimised opacity animation
startOptimizedAppearAnimation(
document.getElementById("optimised-box"),
"opacity",
\[0, 1\],
{
duration: duration * 1000,
ease: "linear",
}
)

// Start optimised background-color animation
// This optimised animation is red -> red whereas the animation on the
// motion.div is blue -> blue. Therefore, if the optimised animations
// cancelled, the rendered color will be blue.
startOptimisedAppearAnimation(
document.getElementById("optimised-box"),
"backgroundColor",
\["#f00", "#f00"\]
{
duration: duration * 1000,
ease: "linear",
}
)
```

```

---

## Implementing Optimized Appear Animation with Framer Motion (JavaScript)

Demonstrates using Framer Motion's optimized appear animation feature. It defines a React component using `motion.div`, server-renders it, starts an optimized appear animation, and then hydrates the root with the same component, including checks during the animation lifecycle. Requires Framer Motion, React, and ReactDOM.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/interrupt-delay-before-accelerated.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/interrupt-delay-before-accelerated.html#_snippet_1)

```JavaScript

```
const { motion, animateStyle, startOptimizedAppearAnimation, optimizedAppearDataAttribute, motionValue, } = window.Motion
const { matchOpacity } = window.Assert
const root = document.getElementById("root")
const duration = 0.25
const delay = 0.5

// This is the tree to be rendered "server" and client-side.
const Component = React.createElement(motion.div, {
id: "box",
initial: { opacity: 0 },
animate: { opacity: 1 },
transition: { duration, ease: "linear", delay },
// style: { opacity },
/**
* On animation start, check the values we expect to see here
*/
onAnimationStart: () => {
matchOpacity(document.getElementById("box"), 0)
requestAnimationFrame(() => {
matchOpacity(document.getElementById("box"), 0)
})
},
\[optimizedAppearDataAttribute\]: "a",
})

// Emulate server rendering of element
root.innerHTML = ReactDOMServer.renderToString(Component)

startOptimizedAppearAnimation(
document.getElementById("box"),
"opacity",
\[0, 1\],
{
duration: duration * 1000,
ease: "linear",
delay: delay * 1000,
},
(animation) => {
// Hydrate root mid-way through delay
setTimeout(() => {
ReactDOM.hydrateRoot(root, Component)
const { opacity: initialOpacity } = window.getComputedStyle(box)
if (initialOpacity !== "0") {
showError(box, \`opacity should have animated\`)
}
}, 300)
}
)
```

```

---

## Importing Dependencies and Initializing Variables (JavaScript)

Imports necessary functions and objects from the global `window.Motion` and `window.Assert` objects, gets the root element, defines animation duration, and initializes a `motionValue`.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout-ancestor.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout-ancestor.html#_snippet_1)

```JavaScript

```
const { motion, animateStyle, animate, startOptimizedAppearAnimation, optimizedAppearDataAttribute, motionValue, frame, } = window.Motion
const { matchViewportBox } = window.Assert
const root = document.getElementById("root")
const duration = 0.5
const x = motionValue(0)
let isFirstFrame = true
```

```

---

## Run Framer Motion Vanilla Dev Environment (Shell)

Execute this command from the root directory of the motion project to start the development server for the Vanilla environment. This allows access to various tests and benchmark files.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/README.md#_snippet_0](https://github.com/grx7/framer-motion/blob/main/dev/html/README.md#_snippet_0)

```Shell

```
yarn dev
```

```

---

## Importing Framer Motion and Assert Utilities

Imports necessary functions and objects from global Motion and Assert objects, and initializes variables used for animation control and element references.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-block.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-block.html#_snippet_1)

```javascript

```
const { motion, animateStyle, animate, startOptimizedAppearAnimation, optimizedAppearDataAttribute, motionValue, frame, } = window.Motion
const { matchViewportBox } = window.Assert
const root = document.getElementById("root")
const duration = 4
const x = motionValue(0)
const xTarget = 500
let isFirstFrame = true
```

```

---

## Initializing Animation Node and Matching Viewport Box in JavaScript

Initializes an animation node for a DOM element using `window.Animate.createNode`, gets its initial bounding box, updates the node's internal state, and asserts its viewport position using `window.Assert.matchViewportBox`.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/animate-single-element.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/animate-single-element.html#_snippet_1)

```javascript

```
const { createNode } = window.Animate
const { matchViewportBox } = window.Assert
const box = document.getElementById("box")
const boxProjection = createNode(box)
const boxOrigin = box.getBoundingClientRect()
boxProjection.willUpdate()
boxProjection.root.didUpdate()
matchViewportBox(box, boxOrigin)
```

```

---

## Starting Optimized Transform Animation (JavaScript)

Initiates an optimized appear animation for the 'transform' property of the box element using `startOptimizedAppearAnimation`. It animates from 'translateX(0px)' to 'translateX(100px)' and hydrates the React component after the animation duration.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/resync-delay.html#_snippet_2](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/resync-delay.html#_snippet_2)

```javascript

```
// Emulate server rendering of element
root.innerHTML = ReactDOMServer.renderToString(Component)
const options = {
delay: delay * 1000,
duration: duration * 1000,
ease: "linear",
}
startOptimizedAppearAnimation(
document.getElementById("box"),
"transform",
["translateX(0px)", "translateX(100px)"],
options,
(animation) => {
setTimeout(() => {
ReactDOM.hydrateRoot(root, Component)
}, duration * 1000)
}
)
```

```

---

## Creating and Updating Projection Nodes with JavaScript

Uses functions from `window.Undo`, `window.Assert`, and `window.Projection` to create and manipulate projection nodes. It gets DOM elements for an overlay and a box, creates projection nodes for them (linking the box node to the overlay node), gets the box's initial bounding rectangle, updates the box projection, scrolls the window, updates the root projection, and finally asserts the box's viewport position.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/sticky-scroll-no-layout-change.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/sticky-scroll-no-layout-change.html#_snippet_1)

```javascript

```
const { createNode } = window.Undo
const { matchViewportBox, addPageScroll } = window.Assert
const { frame } = window.Projection

const overlay = document.getElementById("overlay")
const overlayProjection = createNode(overlay, undefined, {
layoutScroll: true,
layout: false,
})

const box = document.getElementById("box")
const boxProjection = createNode(
box,
overlayProjection
// undefined,
// { duration: 1 }
)

const boxOrigin = box.getBoundingClientRect()

boxProjection.willUpdate()

const scrollOffset = [50, 100]
window.scrollTo(...scrollOffset)

boxProjection.root.didUpdate()

matchViewportBox(box, {
top: 200,
left: -50,
bottom: 300,
right: 50,
})
```

```

---

## Initializing Animation Variables (JavaScript)

Selects the elements to animate and defines variables for animation timing and rotation calculation.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/benchmarks/pregenerated-background-color.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/benchmarks/pregenerated-background-color.html#_snippet_1)

```javascript

```
const boxes = document.querySelectorAll(".box")
let startTime = 0
const duration = 10000
const rotateRate = 360 / duration
```

```

---

## Setting up Layout Projections and Animation with JavaScript

Uses a library (Animate, Assert, Projection) to create layout nodes for existing and newly created DOM elements. It sets up shared layout IDs, triggers layout updates, appends new elements to the DOM, and includes a timeout to simulate a class change and assert the final position of an element.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-promote-target.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-promote-target.html#_snippet_1)

```javascript

```
const { createNode } = window.Animate
const { matchViewportBox, matchVisibility, matchOpacity } = window.Assert
const { frame } = window.Projection

const a = document.getElementById("box-a")
const childA = document.getElementById("child-a")
const c = document.getElementById("button")

const aProjection = createNode(
a,
undefined,
{ layoutId: "box" },
{ duration: 0.1 }
)

const childAProjection = createNode(
childA,
aProjection,
{ layoutId: "child" },
{ duration: 0.1 }
)

const cProjection = createNode(
c,
undefined,
{ layoutId: "foo" },
{ duration: 0.1 }
)

aProjection.willUpdate()
childAProjection.willUpdate()

const b = document.createElement("div")
const childB = document.createElement("div")
b.id = "box-b"
childB.id = "child-b"
b.appendChild(childB)
document.body.appendChild(b)

const bProjection = createNode(
b,
undefined,
{ layoutId: "box" },
{ duration: 0.1 }
)

const childBProjection = createNode(
childB,
bProjection,
{ layoutId: "child" },
{ duration: 0.1 }
)

aProjection.root.didUpdate()

// After the shared animation finished
setTimeout(() => {
cProjection.willUpdate()
c.classList.add("b")
cProjection.root.didUpdate()

matchViewportBox(childB, {
left: 600,
top: 100,
height: 50,
width: 50,
})
}, 200)
```

```

---

## Setting Up Projection Nodes and Assertions (JavaScript)

Uses helper functions from window.Animate, window.Assert, and window.Projection to create projection nodes for existing and newly created DOM elements. It sets specific properties (opacity, borderRadius, skewX) on these nodes and then uses frame.postRender to assert the final computed styles and layout properties of the elements.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-promote-new-mix-skew.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-promote-new-mix-skew.html#_snippet_1)

```javascript

```
const { createNode } = window.Animate
const { matchViewportBox, matchVisibility, matchOpacity, matchBorderRadius, matchSkewX, } = window.Assert
const { frame } = window.Projection
const box = document.getElementById("box-a")
const boxProjection = createNode(box, undefined, { layoutId: "a" })
boxProjection.willUpdate()
const newBox = document.createElement("div")
newBox.id = "box-b"
document.body.appendChild(newBox)
const newBoxProjection = createNode(newBox, undefined, { layoutId: "a", })
boxProjection.setValue("opacity", 0.8)
newBoxProjection.setValue("borderRadius", 20)
newBoxProjection.setValue("skewX", 40)
newBoxProjection.root.didUpdate()
frame.postRender(() => {
const bbox = newBox.getBoundingClientRect()
matchViewportBox(box, bbox)
matchVisibility(box, "visible")
matchVisibility(newBox, "visible")
matchOpacity(box, 0.8)
matchOpacity(newBox, 1)
matchSkewX(box, 40)
matchSkewX(newBox, 40)
matchBorderRadius(box, "6.66667% / 5%")
matchBorderRadius(newBox, "6.66667% / 5%")
})
```

```

---

## Start Optimized Opacity Animation

Initiates an optimized animation for the 'opacity' property of the box element using `startOptimizedAppearAnimation` with a linear ease and specified duration.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout.html#_snippet_4](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout.html#_snippet_4)

```javascript

```
// Start optimised opacity animation
startOptimizedAppearAnimation(
document.getElementById("box"),
"opacity",
[0, 1],
{
duration: duration * 1000,
ease: "linear",
}
)
```

```

---

## Starting Optimized Transform Animation and Hydration

Initiates a WAAPI optimized animation for the transform property (specifically translateX) of the #box element. Includes a callback that triggers ReactDOM.hydrateRoot after a delay, attaching React event handlers and logic to the server-rendered HTML.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-block.html#_snippet_5](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-block.html#_snippet_5)

```javascript

```
// Start WAAPI animation
const animation = startOptimizedAppearAnimation(
document.getElementById("box"),
"transform",
["translateX(0px)", `translateX(${xTarget}px)`],
{
duration: duration * 1000,
ease: "linear",
},
(animation) => {
setTimeout(() => {
ReactDOM.hydrateRoot(root, Component)
}, (duration * 1000) / 4)
}
)
```

```

---

## Starting Optimized Opacity Animation (Framer Motion)

Initiates an optimized appear animation for the opacity property of the box element, animating it from 0 to 1 over a specified duration with a linear ease.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout-uselayouteffect.html#_snippet_4](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout-uselayouteffect.html#_snippet_4)

```javascript

```
// Start optimised opacity animation
startOptimizedAppearAnimation(
document.getElementById("box"),
"opacity",
\[0, 1\],
{
duration: duration * 1000,
ease: "linear",
}
)
```

```

---

## Setting up Projection Nodes and Verifying Layout (JavaScript)

Imports necessary functions, retrieves DOM elements, and creates a hierarchy of projection nodes for the parent, mid, and child elements. It triggers updates, applies a class to the parent to change layout, and uses 'matchViewportBox' within 'frame.postRender' to assert the final positions of the mid and child elements.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/animate-relative-mixed-transition.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/animate-relative-mixed-transition.html#_snippet_1)

```javascript

```
const { createNode, relativeEase } = window.Animate
const { matchViewportBox } = window.Assert
const { frame } = window.Projection

const parent = document.getElementById("parent")
const mid = document.getElementById("mid")
const child = document.getElementById("child")

const parentProjection = createNode(
parent,
undefined,
{},
{ duration: 0 }
)
const midProjection = createNode(
mid,
parentProjection,
{},
{ duration: 0 }
)
const childProjection = createNode(
child,
midProjection,
{},
{ type: false }
)

parentProjection.willUpdate()
midProjection.willUpdate()
childProjection.willUpdate()

parent.classList.add("b")

parentProjection.root.didUpdate()

frame.postRender(() => {
frame.postRender(() => {
matchViewportBox(mid, {
bottom: 50,
left: 100,
right: 150,
top: 0,
})
matchViewportBox(child, {
bottom: 50,
left: 100,
right: 150,
top: 0,
})
})
})
```

```

---

## Emulating Server-Side Rendering with ReactDOMServer

Renders the defined React component to an HTML string using ReactDOMServer.renderToString and sets it as the innerHTML of the root element, simulating server-side rendering output.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-block.html#_snippet_3](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-block.html#_snippet_3)

```javascript

```
// Emulate server rendering of element
root.innerHTML = ReactDOMServer.renderToString(Component)
```

```

---

## Starting Optimized Transform Animation and Hydrating (Framer Motion/ReactDOM)

Starts an optimized appear animation for the transform property (translateX) of the box element. It also includes a callback that triggers client-side hydration using `ReactDOM.hydrateRoot` after a delay, demonstrating the interaction between optimized animations and hydration.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout-uselayouteffect.html#_snippet_5](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout-uselayouteffect.html#_snippet_5)

```javascript

```
// Start WAAPI animation
const animation = startOptimizedAppearAnimation(
document.getElementById("box"),
"transform",
\["translateX(0px)", "translateX(100px)"\],
{
duration: duration * 1000,
ease: "linear",
},
(animation) => {
setTimeout(() => {
ReactDOM.hydrateRoot(
root,
React.createElement(Component)
)
}, (duration * 1000) / 2)
}
)
```

```

---

## Animating Layout Transition with Framer Motion (JavaScript)

Demonstrates creating animation nodes for elements using a library like Framer Motion. It sets initial properties, unmounts the old node, mounts the new one with the same layoutId to trigger a transition, and performs assertions on the final state after rendering.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-promote-new-mix-remove.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-promote-new-mix-remove.html#_snippet_1)

```javascript

```
const { createNode } = window.Animate
const { matchViewportBox, matchVisibility, matchOpacity, matchBorderRadius, } = window.Assert
const { frame } = window.Projection
const box = document.getElementById("box-a")
const boxProjection = createNode(box, undefined, { layoutId: "a" })
boxProjection.setValue("opacity", 0.8)
boxProjection.willUpdate()
const newBox = document.createElement("div")
newBox.id = "box-b"
document.body.appendChild(newBox)
const newBoxProjection = createNode(newBox, undefined, { layoutId: "a", })
newBoxProjection.setValue("borderRadius", 20)
boxProjection.unmount()
document.body.removeChild(box)
newBoxProjection.root.didUpdate()
frame.postRender(() => {
const midBox = { bottom: 250, left: 50, right: 200, top: 50 }
matchViewportBox(newBox, midBox)
matchVisibility(newBox, "visible")
/**
* Should animate from the old opacity to the new one
* IMPORTANT: Don't make the previous opacity something non-default
*/
matchOpacity(newBox, 0.9)
matchBorderRadius(newBox, "6.66667% / 5%")
})
```

```

---

## Implementing Framer Motion Optimized Appear Animation with SSR (JavaScript)

Imports necessary Framer Motion and assertion utilities, sets up a motion value for opacity with a validation check, defines a React component using motion.div with initial/animate opacity and a transition, server-renders the component, initiates an optimized appear animation, and then hydrates the root after a delay to simulate a real-world SSR hydration scenario.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/persist.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/persist.html#_snippet_1)

```javascript

```
const { motion, animateStyle, startOptimizedAppearAnimation, optimizedAppearDataAttribute, motionValue, } = window.Motion
const { matchOpacity } = window.Assert
const root = document.getElementById("root")
const duration = 0.5
const opacity = motionValue(0)
opacity.onChange((v) => {
if (v < 1) {
showError(
document.getElementById("box"),
"opacity should never be less than 1"
)
}
})
// This is the tree to be rendered "server" and client-side.
const Component = React.createElement(motion.div, {
id: "box",
initial: { opacity: 0 },
animate: { opacity: 1 },
transition: { duration, ease: "linear" },
style: { opacity },
/**
* On animation start, check the values we expect to see here
*/
onAnimationStart: () => {
console.log(
getComputedStyle(document.getElementById("box")).opacity
)
matchOpacity(document.getElementById("box"), 1)
},
[optimizedAppearDataAttribute]: "a",
})
// Emulate server rendering of element
root.innerHTML = ReactDOMServer.renderToString(Component)
startOptimizedAppearAnimation(
document.getElementById("box"),
"opacity",
[0, 1],
{
duration: duration * 1000,
ease: "linear",
},
(animation) => {
/**
* Give it time to commit the finished animation
*/
setTimeout(() => {
// Hydrate root mid-way through animation
ReactDOM.hydrateRoot(root, Component)
}, duration * 1000 + 1000)
}
)
```

```

---

## Implementing Framer Motion Layout and Optimized Animations (JavaScript)

Defines a React component using Framer Motion for layout and optimized appear animations. It simulates server-side rendering, hydrates the component, and initiates various animations including transform, opacity, and background color.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout-child.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout-child.html#_snippet_1)

```javascript

```
const { motion, animateStyle, animate, startOptimizedAppearAnimation, optimizedAppearDataAttribute, motionValue, frame, } = window.Motion
const { matchViewportBox, xTransformEquals } = window.Assert
const root = document.getElementById("root")
const duration = 0.5
const x = motionValue(0)
let isFirstFrame = true
function Component() {
const \[top, setTop\] = React.useState(0)
React.useEffect(() => {
setTimeout(() => {
setTop(100)
}, 100)
}, \[\])
return React.createElement(motion.div, {
id: "container",
className: "box",
transition: {
duration,
ease: "linear",
layout: {
ease: () => 1,
duration: 10
},
},
style: {
top,
position: "relative",
background: top ? "red" : "blue",
},
layout: true,
children: "Content",
children: React.createElement(motion.div, {
id: "optimised-box",
className: "box",
initial: {
x: 0,
opacity: 0,
backgroundColor: "#f00",
},
animate: {
x: 100,
opacity: 1,
backgroundColor: "#00f",
},
transition: {
duration,
ease: "linear",
},
style: {
x,
position: "relative",
},
onAnimationStart: () => {
setTimeout(() => {
const box = document.getElementById("optimised-box")
if (
box.style.opacity === window.getComputedStyle(box).opacity ||
box.style.backgroundColor === window.getComputedStyle(box)
.backgroundColor ||
xTransformEquals(box)
) {
showError(
box,
\`Optimised animations cancelled by ancestor layout animations\`
)
}
}, 150)
},
\[optimizedAppearDataAttribute\]: "a",
children: "Content",
}),
})
}
// Emulate server rendering of element
root.innerHTML = ReactDOMServer.renderToString(
React.createElement(Component)
)
// Start optimised opacity animation
startOptimizedAppearAnimation(
document.getElementById("optimised-box"),
"opacity",
\[0, 1\],
{
duration: duration * 1000,
ease: "linear",
}
)
startOptimizedAppearAnimation(
document.getElementById("optimised-box"),
"backgroundColor",
\["#f00", "#00f"\],
{
duration: duration * 1000,
ease: "linear",
}
)
// Start WAAPI animation
const animation = startOptimizedAppearAnimation(
document.getElementById("optimised-box"),
"transform",
\["translateX(0px)", "translateX(100px)"\],
{
duration: duration * 1000,
ease: "linear",
},
(animation) => {
setTimeout(() => {
ReactDOM.hydrateRoot(
root,
React.createElement(Component)
)
}, (duration * 1000) / 4)
}
)
```

```

---

## GSAP Interpolate Function Example

Demonstrates the use of `gsap.utils.interpolate` to mix unit values (CSS variables and pixel values). It then runs a loop to test the function and measures performance.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/benchmarks/mix-unit-value-greensock.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/benchmarks/mix-unit-value-greensock.html#_snippet_1)

```javascript

```
/** * Create an interpolate function that mixes unit values. */
const px = gsap.utils.interpolate(
"var(--test-1, 1) 10px",
"var(--test-9, 3) 60px"
)
const numRuns = 10
let startTime = performance.now()
for (let i = 0; i < numRuns; i++) {
console.log(px(i / numRuns))
}
console.log(`First run: ${performance.now() - startTime}ms`)
```

```

---

## Applying Projection and Asserting Layout (JavaScript)

Retrieves utility functions from window.Projection, window.Undo, and window.Assert. Gets DOM elements, captures their initial bounding boxes, creates projection nodes for them, sets a border radius value on one projection, groups the projections, triggers layout updates, changes the container's flex direction, and finally, in a post-render callback, asserts the viewport box, opacity, and border radius of the elements against expected values.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/flexbox-siblings-layout-group.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/flexbox-siblings-layout-group.html#_snippet_1)

```JavaScript

```
const { frame, nodeGroup } = window.Projection
const { createNode } = window.Undo
const { matchOpacity, matchBorderRadius, matchViewportBox } = window.Assert
const container = document.getElementById("container")
const a = document.getElementById("a")
const b = document.getElementById("b")
const aOrigin = a.getBoundingClientRect()
const bOrigin = b.getBoundingClientRect()
const aProjection = createNode(a)
const bProjection = createNode(b)
aProjection.setValue("borderRadius", 20)
const group = nodeGroup()
group.add(aProjection)
group.add(bProjection)
aProjection.willUpdate()
container.style.flexDirection = "column-reverse"
aProjection.root.didUpdate()
frame.postRender(() => {
window.scrollTo(0, 0)
matchViewportBox(a, aOrigin)
matchViewportBox(b, bOrigin)
matchOpacity(a, 1)
matchOpacity(b, 1)
matchBorderRadius(a, "13.3333% / 10%")
matchBorderRadius(b, "")
})
```

```