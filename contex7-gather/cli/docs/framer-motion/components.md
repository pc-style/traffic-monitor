# Components

## Animating React Component with Framer Motion

Demonstrates using Framer Motion within a React component to animate opacity and layout. It includes state management, effect hooks, server-side rendering emulation, and starting a Web Animations API (WAAPI) animation for optimized appearance.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout-opacity.html#_snippet_1](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout-opacity.html#_snippet_1)

```javascript

```
const { motion, animateStyle, animate, startOptimizedAppearAnimation, optimizedAppearDataAttribute, motionValue, frame, } = window.Motion
const { matchViewportBox } = window.Assert
const root = document.getElementById("root")
const duration = 0.5
const x = motionValue(0)
let isFirstFrame = true
function Component() {
const \[top, setTop\] = React.useState(0)
React.useEffect(() => {
setTimeout(() => {
setTop(100)
}, 250)
}, \[\])
return React.createElement(motion.div, {
id: "box",
initial: { opacity: 0 },
animate: { opacity: 1 },
transition: {
duration,
ease: "linear",
layout: { duration: 10 },
},
style: {
x,
top,
position: "relative",
background: top ? "red" : "blue",
},
layout: true,
onLayoutAnimationStart: () => {
requestAnimationFrame(() => {
const box = document.getElementById("box")
if (
box.style.opacity === window.getComputedStyle(box).opacity
) {
/**
* If style.opacity and computed style.opacity are the same,
* it means the optimised opacity animation was cancelled by
* the layout animation.
*/
showError(
"style attr and computed style should be slightly different"
)
}
})
},
\[optimizedAppearDataAttribute\]: "a",
children: "Content",
})
}
// Emulate server rendering of element
root.innerHTML = ReactDOMServer.renderToString(
React.createElement(Component)
)
// Start WAAPI animation
const animation = startOptimizedAppearAnimation(
document.getElementById("box"),
"opacity",
\[0, 1\],
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