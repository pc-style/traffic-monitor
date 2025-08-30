# Api Reference

## Implementing MyFancyBox with Prop-based API in React

This React component, `MyFancyBox`, demonstrates a prop-based API where the `contents` prop can accept a string, a React element, or a function. It renders the provided content within a div with a blue double border. The description highlights that while the implementation is abbreviated, the API's flexibility regarding the `contents` prop is not immediately obvious from usage alone.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/component-contents-api-patterns.md#_snippet_8](https://github.com/primer/react/blob/main/contributor-docs/component-contents-api-patterns.md#_snippet_8)

```jsx

```
function MyFancyBox({contents}) {
const boxChildren = []
if (typeof contents === 'string' || React.isValidElement(contents)) {
boxChildren.push(contents)
} else if (typeof contents === 'function') {
boxChildren.push(contents())
} // implementation abbreviated for clarity
return <div style="border: 4px double cornflowerblue;">{boxChildren}</div>
}

// usage
;<MyFancyBox contents="I have a blue border!" />
```

```