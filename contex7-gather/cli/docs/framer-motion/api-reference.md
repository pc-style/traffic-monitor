# Api Reference

## Starting WAAPI Transform Animation and Hydrating Root (JavaScript)

Starts a WAAPI animation for the `transform` property using `startOptimizedAppearAnimation`. It includes a callback that triggers `ReactDOM.hydrateRoot` after a delay, simulating the client-side hydration process during which animation cancellation might occur.

**Source:** [https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout-ancestor.html#_snippet_5](https://github.com/grx7/framer-motion/blob/main/dev/html/public/optimized-appear/defer-handoff-layout-ancestor.html#_snippet_5)

```JavaScript

```
// Start WAAPI animation
const animation = startOptimisedAppearAnimation(
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