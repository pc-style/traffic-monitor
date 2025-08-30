# Composition Api

## Unpreferred: React Hook Returning a Ref

This example shows an antipattern where a React hook returns a ref. This design makes it challenging for a component to use multiple such hooks simultaneously, as merging or combining the returned refs becomes a complex task for the caller.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/style.md#_snippet_7](https://github.com/primer/react/blob/main/contributor-docs/style.md#_snippet_7)

```tsx

```
function MyComponent() {
const [ref1, isHovering] = useHover()
const [ref2, isDragging] = useDrag()

// How should the caller merge these two refs?
}
```

```

---

## Unpreferred: Applying Rest Props to Nested Element in React

This example shows an antipattern where rest parameters are applied to a nested element within a component's render output. This approach is generally unpreferred as it can lead to unexpected styling, accessibility, or event handling issues, as the root element does not receive the forwarded props.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/style.md#_snippet_3](https://github.com/primer/react/blob/main/contributor-docs/style.md#_snippet_3)

```tsx

```
type Props = React.ComponentPropsWithoutRef<'div'>

function Example({children, ...rest}: Props) {
return (
<div className="outer">
<div {...rest}>{children}</div>
</div>
)
}
```

```