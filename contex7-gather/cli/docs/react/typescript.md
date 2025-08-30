# Typescript

## Node.js package exports example for internal modules

This Node.js `package.json` example demonstrates how to expose specific paths while explicitly setting internal paths like `./feature/internal/*` to `null`, preventing them from being part of the public API.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-015-internal-modules.md#_snippet_2](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-015-internal-modules.md#_snippet_2)

```json

```
{
"name": "my-package",
"exports": {
".": "./lib/index.js",
"./feature/*.js": "./feature/*.js",
"./feature/internal/*": null
}
}
```

```

---

## Emitting Conditional Development Warnings with warning() Helper (TypeScript)

This example illustrates the usage of the `warning()` helper function, which provides a standardized way to emit development-only warnings. It takes a `condition` and a `message`; the message is logged via `console.warn()` only when the condition is truth-y. This helper is automatically wrapped in a `__DEV__` block, ensuring it is removed from production builds.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-012-development-warnings.md#_snippet_1](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-012-development-warnings.md#_snippet_1)

```ts

```
warning(condition, 'This is the message that is logged when condition is truth-y')
```

```

---

## Programmatic Announcements with `announce` in React

This example illustrates how to use the `announce` helper from `@primer/live-region-element` to trigger accessibility announcements programmatically. It's used here to announce the number of filtered search results, providing immediate feedback to users of assistive technologies.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-020-live-regions.md#_snippet_2](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-020-live-regions.md#_snippet_2)

```tsx

```
import {announce} from '@primer/live-region-element'
import {useState} from 'react'

function ExampleComponent() {
const [results, setResults] = useState(data)

return (
<>
<input
type="text"
onChange={event => {
const filteredResults = data.filter(item => {
/* ... */
})
setResults(filteredResults)
announce(`${filteredResults.length} results available`)
}}
/>
{/* ... */}
</>
)
}
```

```

---

## Unpreferred: Callback Prop Type with Multiple Positional Arguments

This example illustrates an unpreferred way to define callback prop types using multiple positional arguments. This structure makes it difficult to add or remove arguments in the future without introducing breaking changes to the function signature.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/style.md#_snippet_5](https://github.com/primer/react/blob/main/contributor-docs/style.md#_snippet_5)

```tsx

```
type Props = {
onChange: (a: boolean, b: string, c: number) => void
}
```

```

---

## Conditionally Altering Handler Behavior with useFeatureFlag (TSX)

This example shows how to use the `useFeatureFlag` hook within a React component to check if a specific feature flag is enabled. Based on the flag's status, it conditionally alters the logic inside an event handler, such as an `onClick` function.

**Source:** [https://github.com/primer/react/blob/main/packages/react/src/FeatureFlags/README.md#_snippet_1](https://github.com/primer/react/blob/main/packages/react/src/FeatureFlags/README.md#_snippet_1)

```tsx

```
function ExampleComponent(props) {
const enabled = useFeatureFlag('enable_new_feature')

function onClick() {
if (enabled) {
// ...
} else {
// ...
}
}

// ...
}
```

```

---

## Implementing Responsive Props with Data Attributes in React - TypeScript & CSS

This comprehensive example demonstrates how to implement responsive props using data attributes to prevent layout shifts during SSR. It defines a `Stack` component with a `gap` prop that can accept a single value or a responsive object. The `getResponsiveAttributes` helper is used to apply `data-gap` and `data-gap-{breakpoint}` attributes to the `StyledStack` element, which are then targeted by CSS rules to apply responsive styles based on viewport size.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-018-responsive-values.md#_snippet_1](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-018-responsive-values.md#_snippet_1)

```TypeScript

```
type GapScale = 'none' | 'condensed' | 'normal' | 'spacious'

type StackProps = React.PropsWithChildren<{
// Responsive props should be a union of the value of the prop plus
// `ResponsiveValue` over that value
gap?: GapScale | ResponsiveValue<GapScale>
}>

function Stack({children, gap}: StackProps) {
// The `getResponsiveAttributes` helper is useful for adding the corresponding
// `data-*` attributes to the container for the compnoent.
//
// In this case, it will add `data-gap` and `data-gap-{breakpoint}` attributes
// with the corresponding value set
return <StyledStack {...getResponsiveAttributes('gap', gap)}>{children}</StyledStack>
}

const StyledStack = styled.div`
&[data-gap='none'],
&[data-gap-narrow='none'] {
/* ... */
}

&[data-gap='condensed'],
&[data-gap-narrow='condensed'] {
/* ... */
}

/* ... */

// @custom-media --viewportRange-regular
@media (min-width: 768px) {
&[data-gap-regular='none'] {
/* ... */
}

&[data-gap-regular='condensed'] {
/* ... */
}

/* ... */
}

// @custom-media --viewportRange-wide
@media (min-width: 1400px) {
&[data-gap-wide='none'] {
/* ... */
}

&[data-gap-wide='condensed'] {
/* ... */
}

/* ... */
}
`
```

```

---

## Importing UnderlineNav from Root and Drafts in Primer React

This snippet demonstrates how to import the `UnderlineNav` component from both the default `@primer/react` package and its `/drafts` path. The `/drafts` path was historically used for new or experimental versions of components, allowing parallel development and testing before integration into the main package.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-010-drafts-are-experimental.md#_snippet_0](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-010-drafts-are-experimental.md#_snippet_0)

```JavaScript

```
// default version of component exported from root of package
import {UnderlineNav} from '@primer/react'

// new version of component exported from /drafts
import {UnderlineNav} from '@primer/react/drafts'
```

```

---

## Running TypeScript Type Checks (Shell)

This command executes the TypeScript type checker across the project, verifying that all code adheres to the defined type definitions and catching potential type-related errors early in the development cycle. This ensures type safety and improves code reliability.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_11](https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_11)

```sh

```
npm run test:type-check
```

```

---

## Using `@supports` for Conditional CSS Feature Detection

This CSS snippet illustrates the use of the `@supports` at-rule to conditionally apply styles based on browser feature availability. It checks for `container-type: inline-size` support, enabling container queries only when the browser supports this CSS feature, ensuring graceful degradation for older browsers.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_20](https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_20)

```css

```
@supports (container-type: inline-size) {
container: banner / inline-size;
}
```

```

---

## Integrating Custom Elements with React using @lit-labs/react

This snippet demonstrates how to integrate a Custom Element, 'relative-time', into a React application using the @lit-labs/react library. It wraps the RelativeTimeElement and applies styling with 'styled' and 'sx', allowing the custom element to behave just like a native React component by automatically mapping props to instance properties and converting 'on*' callbacks to event listeners.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-009-behavior-isolation.md#_snippet_4](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-009-behavior-isolation.md#_snippet_4)

```TypeScript

```
const RelativeTime = styled(createComponent(React, 'relative-time', RelativeTimeElement))(sx)
```

```