# State Management

## Complete example of lifting state up in React

This comprehensive example combines all steps of lifting state up: `MyApp` manages the shared `count` state and `handleClick` function, passing them as props to `MyButton`. `MyButton` then consumes these props to display the shared count and trigger the parent's handler, demonstrating how multiple components can share and update the same state.

**Source:** [https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md#_snippet_24](https://github.com/reactjs/react.dev/blob/main/src/content/learn/index.md#_snippet_24)

```javascript

```
import { useState } from 'react';

export default function MyApp() {
const [count, setCount] = useState(0);

function handleClick() {
setCount(count + 1);
}

return (
<div>
<h1>Counters that update together</h1>
<MyButton count={count} onClick={handleClick} />
<MyButton count={count} onClick={handleClick} />
</div>
);
}

function MyButton({ count, onClick }) {
return (
<button onClick={onClick}>
Clicked {count} times
</button>
);
}
```

```