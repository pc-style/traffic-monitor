# Getting Started

## JavaScript Setup and Imports

Imports necessary modules and variables from global objects (window.Motion, window.Assert), gets the root DOM element, and defines constants and a motion value used throughout the script.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout.html#_snippet_1)

```javascript

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

## Installing Framer Motion with npm

Provides the command line instruction to install the Framer Motion library using the npm package manager.

**Source:** [https://github.com/grx7/framer-motion/blob/main/packages/framer-motion/README.md#_snippet_1](https://github.com/grx7/framer-motion/blob/main/packages/framer-motion/README.md#_snippet_1)

```shell

```
npm install framer-motion
```

```