# Typescript

## Setting Up Projection Nodes for Nested Elements (JavaScript)

Initializes necessary functions from global objects, creates projection nodes for existing and newly created nested HTML elements, linking them via parent-child relationships and shared layout IDs. It triggers updates and performs checks on the state of the projection system after setup.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/perf-shared-deep.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/perf-shared-deep.html#_snippet_1)

```JavaScript

```
const { createNode } = window.Animate
const { matchViewportBox, checkFrame } = window.Assert
const { frame } = window.Projection
const duration = 10
const a = document.getElementById("a")
const aProjection = createNode( a, undefined, { layoutId: "box" }, { duration } )
const a2 = document.getElementById("a-2")
const a2Projection = createNode( a2, aProjection, { layoutId: "2" }, { duration } )
const a3 = document.getElementById("a-3")
const a3Projection = createNode( a3, a2Projection, { layoutId: "3" }, { duration } )
aProjection.willUpdate()
a2Projection.willUpdate()
a3Projection.willUpdate()
const b = document.createElement("div")
b.id = "b"
document.body.appendChild(b)
const bProjection = createNode( b, undefined, { layoutId: "box" }, { duration } )
const b2 = document.createElement("div")
b2.id = "b-2"
b.appendChild(b2)
const b2Projection = createNode( b2, bProjection, { layoutId: "2" }, { duration } )
const b3 = document.createElement("div")
b3.id = "b-3"
b2.appendChild(b3)
const b3Projection = createNode( b3, b2Projection, { layoutId: "3" }, { duration } )
aProjection.root.didUpdate()
/**
* Shared element transition nodes are currently all recalculated,
* it would be good to investigate in the future if there's further
* safe optimisations we can make here.
*/
requestAnimationFrame(() => {
requestAnimationFrame(() => {
console.log(window.ProjectionFrames)
checkFrame(a, 1, { totalNodes: 7, resolvedTargetDeltas: 3, recalculatedProjection: 6, })
})
})
```

```

---

## Styling Elements for Framer Motion Layout (CSS)

Defines basic CSS styles for the body and two box elements (#box-a, #box-b) used in the Framer Motion layout examples. Includes positioning, dimensions, background colors, and a rule for incorrect layout states.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-promote-new-mix-rotate.html#_snippet_0](https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-promote-new-mix-rotate.html#_snippet_0)

```css

```
body { padding: 0; margin: 0; } #box-a { width: 100px; height: 100px; background-color: #00cc88; } #box-b { position: absolute; top: 100px; left: 100px; width: 200px; height: 300px; background-color: #09f; } #trigger-overflow { width: 1px; height: 1px; position: absolute; top: 2000px; left: 2000px; } \[data-layout-correct="false"\] { background: #dd1144 !important; opacity: 0.5; }
```

```

---

## Styling Elements for Layout Transitions (CSS)

Provides basic CSS rules for elements used in layout transition tests, including dimensions, background colors, positioning, and a rule to highlight elements potentially miscalculated by the layout system.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/perf-shared-deep.html#_snippet_0](https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/perf-shared-deep.html#_snippet_0)

```CSS

```
body { padding: 0; margin: 0; } #a { width: 100px; height: 100px; background-color: #00cc88; } #b { width: 200px; height: 200px; background-color: #0077ff; position: absolute; top: 50px; left: 50px; } #a-2, #b-2 { width: 50px; height: 50px; background-color: #fff; } #a-3, #b-3 { width: 25px; height: 25px; background-color: #000; } #trigger-overflow { width: 1px; height: 1px; position: absolute; top: 2000px; left: 2000px; } \[data-layout-correct="false"\] { background: #dd1144 !important; opacity: 0.5; }
```

```

---

## Styling Elements for Animation (CSS)

Defines basic layout for the body and styles for the animated boxes, including initial state (opacity 0) and performance optimization (`will-change`).

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/benchmarks/pregenerated-background-color.html#_snippet_0](https://github.com/grx7/framer-motion/blob/main/dev/html/public/benchmarks/pregenerated-background-color.html#_snippet_0)

```css

```
body { display: flex; flex-wrap: wrap; gap: 10px; height: 100vh; overflow: hidden; }
.box { width: 50px; height: 50px; background-color: #f00; opacity: 0; will-change: auto !important; }
```

```

---

## Run Bootstrap Command (Shell)

Executes the 'bootstrap' target defined in the project's Makefile to set up the local development environment, typically involving installing dependencies and linking packages.

**Source:** [https://github.com/grx7/framer-motion/blob/main/CONTRIBUTING.md#_snippet_0](https://github.com/grx7/framer-motion/blob/main/CONTRIBUTING.md#_snippet_0)

```Shell

```
make bootstrap
```

```

---

## Styling Layout Elements with CSS

Defines basic styles for body, boxes, buttons, and child elements, including positioning, dimensions, background colors, and a class for button width change. Also includes a rule for highlighting elements with incorrect layout.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-promote-target.html#_snippet_0](https://github.com/grx7/framer-motion/blob/main/dev/html/public/projection/shared-promote-target.html#_snippet_0)

```css

```
body { padding: 0; margin: 0; } #box-a { position: absolute; left: 100px; top: 100px; width: 200px; height: 200px; background-color: #00cc88; } #box-b { position: absolute; left: 600px; top: 100px; width: 200px; height: 200px; background-color: #09f; } #button { width: 100px; height: 100px; top: 0; left: 0; background-color: rgb(132, 0, 255); } #button.b { width: 300px; } #child-a, #child-b { position: absolute; left: 0; top: 0; width: 50px; height: 50px; background-color: yellow; } #trigger-overflow { width: 1px; height: 1px; position: absolute; top: 2000px; left: 2000px; } \[data-layout-correct="false"\] { background: #dd1144 !important; opacity: 0.5; }
```

```