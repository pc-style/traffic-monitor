# Components

## Applying Individual Component Themes in React

This example shows how to theme individual `@primer/components` components by passing a `theme` prop directly to them. It defines a custom `magenta` color within a local theme object and applies it to a `<Text>` component. While functional, the note indicates this is an intentionally convoluted example as direct color values can often be used.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_5](https://github.com/primer/react/blob/main/migrating.md#_snippet_5)

```jsx

```
import {Text} from '@primer/components'

const theme = {
colors: {
magenta: '#f0f',
},
}

export default () => (
<Text theme={theme} color="magenta">
Hi, I'm magenta!
</Text>
)
```

```

---

## Example Jest Snapshot Output for a React Link Component

This snippet shows an example of the generated snapshot file content for the `Link` component. It captures the rendered HTML structure, including attributes like `className`, `href`, and event handlers, as stored by Jest for comparison in future test runs.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-011-snapshot-tests.md#_snippet_1](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-011-snapshot-tests.md#_snippet_1)

```js

```
exports[`renders correctly 1`] = `
<a
className="normal"
href="http://www.facebook.com"
onMouseEnter={[Function]}
onMouseLeave={[Function]}
>
Facebook
</a>
`
```

```

---

## Upgrading Primer React Components to v1.0.0-beta using Codemod (Shell)

This command executes a jscodeshift codemod to upgrade Primer React components from `0.x.x-beta` to v1.0.0-beta. This major release refactors component internals and introduces `emotion` and `styled-system`. The `path/to/src` argument should be updated to point to the project's source code directory.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_3](https://github.com/primer/react/blob/main/migrating.md#_snippet_3)

```Shell

```
npx jscodeshift -t node_modules/primer-react/codemods/v1.js path/to/src
```

```

---

## Using Responsive `padding` Prop in React Component

This example illustrates how to consume the `Stack` component with a responsive `padding` prop. It shows setting different padding values for `narrow` and `regular` viewports, leveraging the `ResponsiveValue` type to adapt styling based on screen size.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_17](https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_17)

```tsx

```
// usage
<Stack padding={{narrow: 'none', regular: 'normal'}} />
```

```

---

## Upgrading Primer React Components to v3.0.0-beta using Codemod (Shell)

This command runs a jscodeshift codemod to facilitate the migration from Primer React v2.x.x-beta to v3.0.0-beta. It also handles the package name change from `primer-react` to `@primer/components`. The `path/to/src` placeholder must be replaced with the actual directory containing the project's source code.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_1](https://github.com/primer/react/blob/main/migrating.md#_snippet_1)

```Shell

```
npx jscodeshift -t node_modules/@primer/components/codemods/v3.js path/to/src
```

```

---

## Upgrading Primer React Components to v2.0.0-beta using Codemod (Shell)

This command utilizes a jscodeshift codemod to assist in migrating Primer React components from v1.x.x-beta to v2.0.0-beta. This version includes component renames such as `Box` to `BorderBox` and `Block` to `Box`. Users should replace `path/to/src` with the correct path to their source files.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_2](https://github.com/primer/react/blob/main/migrating.md#_snippet_2)

```Shell

```
npx jscodeshift -t node_modules/primer-react/codemods/v2.js path/to/src
```

```

---

## Implementing Controllable and Uncontrolled Components in React

This snippet defines a React component (`Example`) that can operate in both controlled and uncontrolled modes, demonstrating the use of `value`, `defaultValue`, and `onChange` props. It shows how `UncontrolledExample` uses `defaultValue` and `ControlledExample` manages state externally with `value` and `setValue`.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/style.md#_snippet_0](https://github.com/primer/react/blob/main/contributor-docs/style.md#_snippet_0)

```tsx

```
type ExampleProps = {
value?: string
defaultValue?: string
onChange({value}: {value: string}): void
}

function Example(props: ExampleProps) {
// ...
}

function UncontrolledExample() {
return (
<Example
defaultValue="Example default value"
onChange={({value}) => {
console.log(value)
}}
/>
)
}

function ControlledExample() {
const [value, setValue] = React.useState('Example controlled value')
return (
<Example
value={value}
onChange={({value}) => {
setValue(value)
}}
/>
)
}
```

```

---

## Upgrading Primer React Components to v4.0.0-beta using Codemod (Shell)

This command executes a jscodeshift codemod script to automatically upgrade component identifiers from v3.x.x-beta to v4.0.0-beta in a Primer React project. It targets the specified source path to apply renames like `FlexContainer` to `Flex` and `FlexItem` to `Flex.Item`. The `path/to/src` placeholder should be replaced with the actual path to the project's source files.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_0](https://github.com/primer/react/blob/main/migrating.md#_snippet_0)

```Shell

```
npx jscodeshift -t node_modules/@primer/components/codemods/v4.js path/to/src
```

```

---

## Importing TreeView Component Exclusively from Primer React Drafts

This example illustrates importing the `TreeView` component specifically from the `@primer/react/drafts` path. This indicates that `TreeView` was a work-in-progress component not yet available in the main package, intended for early access or collaborative development.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-010-drafts-are-experimental.md#_snippet_1](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-010-drafts-are-experimental.md#_snippet_1)

```JavaScript

```
// this component only exists in drafts and not in the roof of the package
import {TreeView} from '@primer/react/drafts'
```

```

---

## Merging Class Names with clsx in React Components (TSX)

This example illustrates how to correctly handle the `className` prop in Primer React components. It shows the use of `clsx` to merge multiple class names, including a custom `className` passed by the consumer and module-specific styles, ensuring proper styling and extensibility.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_3](https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_3)

```tsx

```
import {clsx} from 'clsx'
import styles from './Component.module.css'

const Nav = ({className}) => {
return (
<nav className={clsx(className, styles.Nav)} {...props}>
{children}
</nav>
)
}
```

```

---

## Creating Avatar Component with styled-components (TypeScript)

This snippet demonstrates creating a React `Avatar` component using `styled-components`. It defines an image element with dynamic `height` and `width` based on `size` props, applying inline-block display, hidden overflow, specific line height, and border-radius, while also supporting `sx` prop for system styles. It requires `styled-components` and `get` utility.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-005-box-sx.md#_snippet_0](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-005-box-sx.md#_snippet_0)

```tsx

```
const Avatar = styled.img.attrs<StyledAvatarProps>(props => ({
height: props.size,
width: props.size,
}))<StyledAvatarProps>`
display: inline-block;
overflow: hidden;
line-height: ${get('lineHeights.condensedUltra')};
border-radius: ${props => getBorderRadius(props)};
${sx}
`
```

```

---

## Setting Feature Flags for Testing with FeatureFlags Component (TSX)

This example shows how to use the `FeatureFlags` component in a testing environment. By wrapping the component under test with `FeatureFlags` and providing specific flag values, developers can easily simulate different feature flag states for isolated testing.

**Source:** [https://github.com/primer/react/blob/main/packages/react/src/FeatureFlags/README.md#_snippet_4](https://github.com/primer/react/blob/main/packages/react/src/FeatureFlags/README.md#_snippet_4)

```tsx

```
render(
<FeatureFlags flags={{enableNewFeature: true}}>
<ExampleComponent />
</FeatureFlags>,
)
```

```

---

## Using `useControllableState` Hook in React Components

This example demonstrates how to refactor a component to use the `useControllableState` hook. This hook simplifies the logic for managing state that can be either controlled externally via `value` or internally via `defaultValue`, abstracting away the boilerplate.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/style.md#_snippet_1](https://github.com/primer/react/blob/main/contributor-docs/style.md#_snippet_1)

```tsx

```
function Example({defaultValue, onChange, value: controlledValue}: ExampleProps) {
const [value, setValue] = useControllableState({
value: controlledValue,
defaultValue,
onChange: ({value}) => {
onChange({value})
},
})
}
```

```

---

## Example Return Value for usePopover Component Behavior Hook - React

This object illustrates the typical return value structure for a component behavior hook like `usePopover`. It contains multiple `PropsObject` instances, each intended to be spread onto a specific JSX element (e.g., `popoverProps` for the main popover element, `openClickTargetProps` for the element that opens it, and `closeClickTargetProps` for the element that closes it). This pattern allows the hook to provide all necessary props for related UI elements.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/behaviors.md#_snippet_0](https://github.com/primer/react/blob/main/contributor-docs/behaviors.md#_snippet_0)

```JavaScript

```
{
popoverProps: PropsObject,
openClickTargetProps: PropsObject,
closeClickTargetProps: PropsObject
}
```

```

---

## Defining Stack Component Props with Responsive Values (Initial Example) - TypeScript

This snippet illustrates two ways to define the `gap` prop for a `Stack` component: a fixed string value and a responsive object value. The responsive object allows specifying different `gap` values for various named breakpoints (narrow, regular, wide), demonstrating the concept of responsive props.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-018-responsive-values.md#_snippet_0](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-018-responsive-values.md#_snippet_0)

```TypeScript

```
// Value
<Stack gap="condensed" />

// Responsive value
<Stack gap={{ narrow: 'condensed', regular: 'normal', wide: 'spacious' />
```

```

---

## Increased Component Specificity (v1.1.0) - CSS

This example illustrates a scenario where a component's selector specificity is increased in a new version. This change can inadvertently break existing overrides, as the more specific component rule now takes precedence over the less specific override.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-021-css-layers.md#_snippet_1](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-021-css-layers.md#_snippet_1)

```CSS

```
/* v1.1.0 of a component */
.Component[data-variant='default'] {
color: var(--fgColor-default);
}
```

```

---

## Composing Flash Component with Icon in React

This example shows how to compose a `Flash` component by including an `CheckIcon` directly within its `children`. It highlights the flexibility of using `children` to embed rich content, where the `Flash` component manages the container's styling while the consumer controls the content's appearance.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-004-children-as-api.md#_snippet_3](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-004-children-as-api.md#_snippet_3)

```jsx

```
import {Flash} from '@primer/react'
import {CheckIcon} from '@primer/octicons-react'

render(
<Flash variant="success">
<CheckIcon /> Changes saved!
</Flash>,
)
```

```

---

## Customizing Flash Component Layout with SX Prop in React

This example showcases advanced customization of the `Flash` component using the `sx` prop for flexible styling, specifically to achieve a `flex` layout with space-between justification. It demonstrates embedding both content with an icon and an interactive `Button` for dismissal, illustrating how consumers can extend component functionality beyond baked-in use cases.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-004-children-as-api.md#_snippet_5](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-004-children-as-api.md#_snippet_5)

```jsx

```
<Flash variant="success" sx={{display: 'flex', justifyContent: 'space-between'}}>
<span>
<CheckIcon /> Changes saved!
</span>
<Button variant="invisible" icon={CheckIcon} aria-label="Hide flash message" onClick={onDismiss} />
</Flash>
```

```

---

## Customizing Icon Styling via React Children in Flash Component

This example illustrates how developers can still use `children` to render an icon with custom styling (size, color, margin) when intentionally deviating from the 'happy path.' This requires manual effort to ensure compatibility, making it feel like a workaround for non-standard use cases.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-004-children-as-api.md#_snippet_8](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-004-children-as-api.md#_snippet_8)

```jsx

```
<Flash variant="success">
<CheckIcon size={20} color="success.emphasis" sx={{marginRight: 2}} />
Changes saved!
</Flash>
```

```

---

## Importing and Using a Primer React Component

This snippet demonstrates how to import a specific component, such as Button, directly from the @primer/react package. It then shows how to render this component within a functional React component, illustrating basic component integration.

**Source:** [https://github.com/primer/react/blob/main/packages/react/README.md#_snippet_2](https://github.com/primer/react/blob/main/packages/react/README.md#_snippet_2)

```tsx

```
import {Button} from '@primer/react'

function App() {
return <Button>Hello world</Button>
}
```

```

---

## Creating a Basic Primer React Component (TSX)

This snippet demonstrates the basic structure of a Primer React component, including type definitions, importing styles and utilities like `clsx`, and defining a functional component with `React.FC` that accepts children, `className`, and other props. It also shows how to set a `displayName` for debugging.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_2](https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_2)

```tsx

```
import type React from 'react'
import styles from './Component.module.css'
import {clsx} from 'clsx'

export type ComponentProps = {
prop?: 'value1' | 'value2'
className?: string
} & SxProp

const Component: React.FC<React.PropsWithChildren<ComponentProps>> = ({
prop = 'value1',
children,
className,
...props
}) => {
return (
<nav className={clsx(className, styles.Nav)} {...props}>
{children}
</nav>
)
}

Component.displayName = 'Component'

export default Component
```

```

---

## Importing Component Metadata in MDX

This code snippet demonstrates how to import a component's metadata from its `docs.json` file into an `.mdx` documentation file. This import is essential for integrating component-specific data and properties into the documentation generated by Doctocat.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_13](https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_13)

```JavaScript

```
import data from '../../../src/Component/Component.docs.json'
```

```

---

## Importing Draft ActionMenu Component (Stage 1)

This snippet demonstrates how consumers can explicitly import a new, experimental component from the `@primer/react/drafts` bundle during Stage 1 of the component lifecycle. This allows early adopters to test the component, understanding that it might not yet cover all use cases of its older counterpart and may incur additional bundle size if both versions are used.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-006-drafts.md#_snippet_0](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-006-drafts.md#_snippet_0)

```TypeScript

```
import { ActionMenu } from '@primer/react/drafts'
```

```

---

## Standard Component Directory Structure for Primer React

This snippet illustrates the proposed standardized directory structure for components within the `primer-react` library. Each component resides in its own PascalCased directory under `src/`, containing the primary component file (`.tsx`), subcomponents, documentation (`.mdx`), Storybook stories, and various test files. This structure aims to improve consistency and findability in IDEs.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-013-file-structure.md#_snippet_0](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-013-file-structure.md#_snippet_0)

```TypeScript

```
primer-react/
├─ src/
│  ├─ Breadcrumbs/
│  │  ├─ index.ts                    // Just re-exporting?
│  │  ├─ Breadcrumbs.tsx             // Primary component
│  │  ├─ BreadcrumbsItem.tsx         // Subcomponent (include parent component name to increase findability in most IDEs)
│  │  ├─ Breadcrumbs.mdx             // Documentation. Always .mdx, not .md
│  │  ├─ Breadcrumbs.stories.tsx
│  │  ├─ Breadcrumbs.test.tsx        // Unit tests
│  │  ├─ Breadcrumbs.types.test.tsx  // Type tests
│  │  ├─ Breadcrumbs.yml             // Component metadata (Possible future)
│  │  └─ __snapshots__/
┆  ┆
```

```

---

## Importing Deprecated ActionMenu Component (Stage 2)

This snippet shows how consumers can continue using an older version of a component from the `@primer/react/deprecated` bundle after a new version has replaced it in the main bundle (Stage 2). This provides an easy opt-out for consumers who wish to delay migration, but the deprecated component will not receive new features.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-006-drafts.md#_snippet_1](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-006-drafts.md#_snippet_1)

```TypeScript

```
import { ActionMenu } from '@primer/react/deprecated'
```

```

---

## Creating a React Component Accepting Children Prop in JSX

This snippet defines a custom React functional component `MyFancyBox` that accepts and renders its `children` prop. It showcases the "first-class" approach in React where content placed between a component's opening and closing tags is automatically available via the `children` prop, allowing the component to wrap or augment that content.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/component-contents-api-patterns.md#_snippet_5](https://github.com/primer/react/blob/main/contributor-docs/component-contents-api-patterns.md#_snippet_5)

```jsx

```
function MyFancyBox({children}) {
return <div style="border: 4px double cornflowerblue;">{children}</div>
}

// usage
;<MyFancyBox>I have a blue border!</MyFancyBox>
```

```

---

## Recommended Data Attributes for Component Variants in CSS

This CSS snippet shows the preferred method for styling component variants using data attributes (e.g., `data-size='small'`). This approach is more semantic and flexible than modifier classes, allowing for clear representation of component states and values.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_12](https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_12)

```css

```
/* Do */
.Button:where([data-size='small']) {
height: var(--control-small-size);
}
```

```

---

## Conceptual Web Component Invocation Pattern

This snippet demonstrates the simplified invocation pattern for a conceptual `focus-trap` Web Component. Unlike React hooks, Web Components offer a standard, declarative HTML-like syntax, allowing them to manage their own lifecycle and state internally, thereby simplifying their application for engineers.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-009-behavior-isolation.md#_snippet_0](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-009-behavior-isolation.md#_snippet_0)

```HTML

```
<focus-trap active={isActive}>
```

```