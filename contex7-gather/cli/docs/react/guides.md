# Guides

## Setting up Primer React Development Environment

This command is used to initialize the local development environment for Primer React components. It typically installs necessary dependencies and performs other setup tasks required before running Storybook or developing components.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_0](https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_0)

```Shell

```
npm run setup
```

```

---

## Starting Primer React Storybook Development Server

This command starts the Storybook development server, which allows developers to view and interact with Primer React components in a browser. The server typically becomes accessible at http://localhost:6006/ after execution.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_1](https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_1)

```Shell

```
npm start
```

```

---

## Proposed NPM Workspaces Project Structure

This snippet illustrates the proposed directory structure for the `primer/react` project after adopting `npm` workspaces. It shows the top-level `package.json` for defining workspaces and the organization of various sub-projects like `docs`, `packages`, and `examples`, along with top-level scripts and configuration directories, aiming for a more unified and manageable repository.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-014-npm-workspaces.md#_snippet_0](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-014-npm-workspaces.md#_snippet_0)

```Text

```
- root
# Root package.json, defines workspaces
- package.json

# Workspaces
- docs
- packages
- react
- *
- examples
- nextjs
- consumer-test
- *

# Top-level scripts
- script

# Testing & Development
- .storybook
- .playwright

# Repo config
- .github
- .vscode
```

```

---

## Migrating Block shadow Prop in React

Explains the refactoring for the `shadow` prop on the `Block` component. All values previously used with `shadow` should now be applied directly to the `boxShadow` prop with the corresponding CSS value.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_14](https://github.com/primer/react/blob/main/migrating.md#_snippet_14)

```JSX

```
boxShadow="value"
```

```

---

## Applying Global Theme Overrides with Emotion-Theming in React

This snippet demonstrates how to apply a custom theme to an entire tree of `@primer/components` using `emotion-theming`'s `<ThemeProvider>`. It extends the default Primer theme with custom `space` and `fontSizes` values and overrides a specific color. The `ThemeProvider` requires exactly one child element.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_4](https://github.com/primer/react/blob/main/migrating.md#_snippet_4)

```jsx

```
import {Block, Button, Text, theme as primer} from '@primer/components'
import {ThemeProvider} from 'emotion-theming'

// a theme with custom spacing and font sizes
const theme = {
...primer,
space: [0, 8, 16, 32, 64],
fontSizes: [10, 12, 16, 24, 48],
}

// override
theme.colors.bodytext = '#111'

export default () => (
<ThemeProvider theme={theme}>
<Block sx={{color: 'bodytext', p: 4}}>
<Text fontSize={4}>Hello, world!</Text>
</Block>
</ThemeProvider>
)
```

```

---

## Migrating Block border Prop (top) in React

Shows how to refactor the `border` prop on the `Block` component when its value was `'top'`. This specific border application is now handled by the `borderTop` prop with a numeric value of `1`.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_13](https://github.com/primer/react/blob/main/migrating.md#_snippet_13)

```JSX

```
borderTop={1}
```

```

---

## Migrating Typography nowrap Prop in React

Describes how to replace the boolean `nowrap` prop for `Text` and `Heading` components. The functionality is now achieved by directly applying `white-space: nowrap` via the `css` prop.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_8](https://github.com/primer/react/blob/main/migrating.md#_snippet_8)

```JSX

```
css="white-space: nowrap"
```

```

---

## Migrating FlexContainer direction Prop in React

Details the migration of the `direction` prop on the `FlexContainer` component. This prop is now replaced by `flexDirection`, which accepts standard CSS flexbox direction values.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_15](https://github.com/primer/react/blob/main/migrating.md#_snippet_15)

```JSX

```
flexDirection="css-value"
```

```

---

## Migrating Typography mono Prop in React

Details the migration of the boolean `mono` prop on `Text` and `Heading` components. Instead of a boolean `mono` prop, the `fontFamily` prop should be set to `"mono"` to apply a monospace font.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_7](https://github.com/primer/react/blob/main/migrating.md#_snippet_7)

```JSX

```
fontFamily="mono"
```

```

---

## Migrating Block border Prop (right) in React

Shows how to refactor the `border` prop on the `Block` component when its value was `'right'`. This specific border application is now handled by the `borderRight` prop with a numeric value of `1`.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_12](https://github.com/primer/react/blob/main/migrating.md#_snippet_12)

```JSX

```
borderRight={1}
```

```

---

## Migrating FlexContainer wrap Prop in React

Explains the refactoring for the `wrap` prop on the `FlexContainer` component. This prop is now replaced by `flexWrap`, which accepts standard CSS flexbox wrap values like `wrap` or `nowrap`.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_16](https://github.com/primer/react/blob/main/migrating.md#_snippet_16)

```JSX

```
flexWrap="css-value"
```

```

---

## Migrating Block border Prop (bottom) in React

Shows how to refactor the `border` prop on the `Block` component when its value was `'bottom'`. This specific border application is now handled by the `borderBottom` prop with a numeric value of `1`.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_10](https://github.com/primer/react/blob/main/migrating.md#_snippet_10)

```JSX

```
borderBottom={1}
```

```

---

## Migrating Block border Prop (left) in React

Shows how to refactor the `border` prop on the `Block` component when its value was `'left'`. This specific border application is now handled by the `borderLeft` prop with a numeric value of `1`.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_11](https://github.com/primer/react/blob/main/migrating.md#_snippet_11)

```JSX

```
borderLeft={1}
```

```

---

## Migrating Block border Prop (boolean) in React

Illustrates how to update the `border` prop on the `Block` component when its value was `true`. The boolean `true` is now replaced with a numeric value of `1` for the `border` prop.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_9](https://github.com/primer/react/blob/main/migrating.md#_snippet_9)

```JSX

```
border={1}
```

```

---

## Migrating Typography lineHeight Prop in React

Explains how to update the `lineHeight` prop for `Text` and `Heading` components. The `condensed-ultra` string value is replaced with `condensedUltra` to align with `theme.lineHeights` keys, or any other value will be treated as a literal CSS value.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_6](https://github.com/primer/react/blob/main/migrating.md#_snippet_6)

```JSX

```
lineHeight="condensedUltra"
```

```

---

## Migrating FlexContainer inline Prop in React

Describes how to update the boolean `inline` prop on the `FlexContainer` component. The inline flex display behavior is now achieved by setting the `display` prop to `"inline-flex"`.

**Source:** [https://github.com/primer/react/blob/main/migrating.md#_snippet_17](https://github.com/primer/react/blob/main/migrating.md#_snippet_17)

```JSX

```
display="inline-flex"
```

```

---

## Composing ActionList Item with Custom Visuals in React

This example illustrates a composite component API where consumers have more control over the children. It shows an `ActionList.Item` containing an `ActionList.LeadingVisual` with an `Avatar` component, allowing flexible content rendering within the list item.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-004-children-as-api.md#_snippet_1](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-004-children-as-api.md#_snippet_1)

```jsx

```
<ActionList.Item>
<ActionList.LeadingVisual>
<Avatar src="https://github.com/mona.png" />
<ActionList.LeadingVisual>
mona
</ActionList.Item>
```

```

---

## HTML Button with Title Attribute for Tooltip

This snippet demonstrates a standard HTML `button` element utilizing the `title` attribute to provide a tooltip. The `title` attribute is an example of passing data as a prop (attribute) in plain HTML, which the browser then interprets to display additional information on hover.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/component-contents-api-patterns.md#_snippet_6](https://github.com/primer/react/blob/main/contributor-docs/component-contents-api-patterns.md#_snippet_6)

```html

```
<button title="Save">💾</button>
```

```

---

## Automatic Live Region Lookup with `AriaStatus` in Dialogs

This example demonstrates that `AriaStatus` automatically identifies and uses the closest `dialog` element as its live region, removing the need for explicit `from` arguments. It's used here to announce a loading state within a dialog, simplifying accessibility for status updates.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-020-live-regions.md#_snippet_4](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-020-live-regions.md#_snippet_4)

```tsx

```
import React from 'react'
import {AriaStatus} from '@primer/react'

function ExampleComponent() {
const [loading, setLoading] = React.useState(true)
return (
<dialog ref={ref}>
<h1>Example content</h1>
{loading ? <AriaStatus>Loading example dialog</AriaStatus> : <DialogContent />}
</dialog>
)
}
```

```

---

## Basic HTML Div Structure with Nested Children in JSX

This snippet shows a fundamental example of how HTML elements, when used in JSX, accept content as children. A `div` element contains two nested `div` elements, demonstrating the common pattern of defining content structure directly within the parent's tags. This is a core concept for structuring UI in React.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/component-contents-api-patterns.md#_snippet_2](https://github.com/primer/react/blob/main/contributor-docs/component-contents-api-patterns.md#_snippet_2)

```jsx

```
<div>
<div>Some content</div>
<div>More content</div>
</div>
```

```

---

## Primer React Documentation Directory Structure

This snippet illustrates the recommended directory structure for adding new component documentation files within the `primer-react` project. New `.mdx` files for components should be placed under `docs/content` to be picked up by Doctocat.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_12](https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_12)

```plaintext

```
primer-react/
├─ docs/
│  ├─ content/
│  │  ├─ Component.mdx
```

```

---

## Basic HTML Unordered List with List Items in JSX

This snippet provides another example of HTML elements accepting children, specifically an unordered list (`ul`) containing list items (`li`). It highlights how standard HTML structures are represented in JSX, where the `li` elements are direct children of the `ul` element, adhering to typical web content structuring.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/component-contents-api-patterns.md#_snippet_3](https://github.com/primer/react/blob/main/contributor-docs/component-contents-api-patterns.md#_snippet_3)

```jsx

```
<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
```

```

---

## Creating a New Changeset for Releases

This command is used to create a new changeset file locally, which is crucial for managing releases and versioning in the Primer React project. Running `npx changeset` will prompt the user to answer questions about the type of change being made (e.g., major, minor, patch).

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_14](https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_14)

```Shell

```
npx changeset
```

```

---

## Running ESLint on Specific Files (Shell)

This command uses `npx` to run ESLint on one or more specified files, allowing developers to focus linting efforts on particular components or modules without scanning the entire project. This is useful for targeted checks during development.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_5](https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_5)

```sh

```
npx eslint src/**/MyComponent.tsx
```

```

---

## Linting Markdown Files (Shell)

This command executes Markdownlint to check Markdown files for style and formatting issues, ensuring consistency in documentation and other Markdown-based content within the project. It adheres to GitHub's markdownlint-github configuration.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_8](https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_8)

```sh

```
npm run lint:md
```

```

---

## Running ESLint for Code Linting (Shell)

This command executes the ESLint linter across the project, checking for code style and quality issues based on the configured rules. It's a standard practice to run this before pushing changes to ensure code consistency.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_4](https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_4)

```sh

```
npm run lint
```

```

---

## Defining Responsive Props with `getResponsiveAttributes` in React

This snippet defines the `Stack` component, demonstrating how to use `ResponsiveValue` and `getResponsiveAttributes` to create a responsive `padding` prop. It sets up types for `PaddingScale` and `Padding`, allowing the `padding` prop to accept either a direct value or a responsive object, which is then applied to the div via data attributes.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_16](https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_16)

```tsx

```
import type {ResponsiveValue} from '../hooks/useResponsiveValue'
import {getResponsiveAttributes} from '../internal/utils/getResponsiveAttributes'

// types
type PaddingScale = 'none' | 'condensed' | 'normal' | 'spacious'
type Padding = PaddingScale | ResponsiveValue<PaddingScale>

// prop
type StackProps = {
padding?: Padding
}

// component
export function Stack({padding = 'normal'}: StackProps) {
return <div {...getResponsiveAttributes('padding', padding)} />
}
```

```

---

## Exposing all files in lib-esm in Primer React

This `exports` pattern in `package.json` for `@primer/react` exposes all files and folders under `./lib-esm/*` as part of the public API, including those not intended for external use.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-015-internal-modules.md#_snippet_0](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-015-internal-modules.md#_snippet_0)

```json5

```
{
exports: {
// ...
'./lib-esm/*': {
import: [
// ...
],
require: [
// ...
],
},
},
}
```

```

---

## Automatically Fixing ESLint Errors (Shell)

This command runs ESLint with the `--fix` flag, which attempts to automatically resolve common linting issues such as whitespace errors, incorrect ordering of object keys, and import statements. It helps maintain code consistency with minimal manual intervention.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_6](https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_6)

```sh

```
npm run lint -- --fix
```

```