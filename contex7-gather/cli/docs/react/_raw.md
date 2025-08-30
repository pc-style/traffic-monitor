========================
CODE SNIPPETS
========================
TITLE: Setting up Primer React Development Environment
DESCRIPTION: This command is used to initialize the local development environment for Primer React components. It typically installs necessary dependencies and performs other setup tasks required before running Storybook or developing components.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npm run setup
```

----------------------------------------

TITLE: Configuring Primer React Theme and Base Styles
DESCRIPTION: This example illustrates the setup of ThemeProvider and BaseStyles at the root of a React application, which are crucial for applying Primer's design system styles and themes. It also shows how to import a specific theme, like light.css, from @primer/primitives.

SOURCE: https://github.com/primer/react/blob/main/packages/react/README.md#_snippet_3

LANGUAGE: tsx
CODE:
```
// Import each of the themes you would like to use, by default we are including
// the light theme below
import '@primer/primitives/dist/css/functional/themes/light.css'
import {BaseStyles, ThemeProvider} from '@primer/react'

function RootLayout() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <App />
      </BaseStyles>
    </ThemeProvider>
  )
}
```

----------------------------------------

TITLE: Installing Primer React with Yarn
DESCRIPTION: This command installs the @primer/react library, @primer/primitives for design tokens, and styled-components@5.x as a styling dependency using Yarn. It provides an alternative installation method to npm for projects using Yarn.

SOURCE: https://github.com/primer/react/blob/main/packages/react/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
yarn add @primer/react @primer/primitives styled-components@5.x
```

----------------------------------------

TITLE: Starting Primer React Storybook Development Server
DESCRIPTION: This command starts the Storybook development server, which allows developers to view and interact with Primer React components in a browser. The server typically becomes accessible at http://localhost:6006/ after execution.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm start
```

----------------------------------------

TITLE: Installing postcss-preset-primer via npm
DESCRIPTION: This command installs the `postcss-preset-primer` package as a development dependency using npm. It's the initial step required to integrate the PostCSS plugin into your project's development environment.

SOURCE: https://github.com/primer/react/blob/main/packages/postcss-preset-primer/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm install postcss-preset-primer --save-dev
```

----------------------------------------

TITLE: Installing Primer React with Yarn
DESCRIPTION: This command installs the @primer/react package into your project using Yarn, an alternative package manager for JavaScript. It achieves the same result as npm install but uses Yarn's dependency resolution.

SOURCE: https://github.com/primer/react/blob/main/README.md#_snippet_1

LANGUAGE: console
CODE:
```
yarn add @primer/react
```

----------------------------------------

TITLE: Installing Primer React with npm
DESCRIPTION: This command installs the @primer/react library, @primer/primitives for design tokens, and styled-components@5.x as a styling dependency using npm. These packages are essential for building UIs with Primer components.

SOURCE: https://github.com/primer/react/blob/main/packages/react/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm install -S @primer/react @primer/primitives styled-components@5.x
```

----------------------------------------

TITLE: Installing Playwright Dependencies
DESCRIPTION: This command installs the necessary browser binaries and other dependencies required for Playwright to run locally, ensuring the testing environment is properly set up.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_2

LANGUAGE: bash
CODE:
```
npx playwright install --with-deps
```

----------------------------------------

TITLE: Starting Storybook for Accessibility Testing - Bash
DESCRIPTION: This command starts the Storybook development server, which is a prerequisite for running automated accessibility verification tests. It can be run directly or with an environment variable for specific Storybook configurations.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_5

LANGUAGE: bash
CODE:
```
npm start
```

LANGUAGE: bash
CODE:
```
STORYBOOK=true npx start-storybook -p 6006
```

----------------------------------------

TITLE: Installing Playwright Browser Executables - Bash
DESCRIPTION: This command installs the necessary browser executables (Chromium, Firefox, WebKit) required for Playwright to run end-to-end tests. The --with-deps flag ensures that all required dependencies are also installed.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_7

LANGUAGE: bash
CODE:
```
npx playwright install --with-deps
```

----------------------------------------

TITLE: Installing Primer React with npm
DESCRIPTION: This command installs the @primer/react package into your project using npm, the Node.js package manager. It's the standard way to add dependencies to a JavaScript or TypeScript project.

SOURCE: https://github.com/primer/react/blob/main/README.md#_snippet_0

LANGUAGE: console
CODE:
```
npm install @primer/react
```

----------------------------------------

TITLE: Starting Storybook for Visual Regression Testing
DESCRIPTION: These commands initiate the Storybook server, which is a prerequisite for running visual regression tests, providing the environment for component rendering and screenshot capture.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm start
```

LANGUAGE: bash
CODE:
```
STORYBOOK=true npx start-storybook -p 6006
```

----------------------------------------

TITLE: Applying Individual Component Themes in React
DESCRIPTION: This example shows how to theme individual `@primer/components` components by passing a `theme` prop directly to them. It defines a custom `magenta` color within a local theme object and applies it to a `<Text>` component. While functional, the note indicates this is an intentionally convoluted example as direct color values can often be used.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_5

LANGUAGE: jsx
CODE:
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

----------------------------------------

TITLE: Example Jest Snapshot Output for a React Link Component
DESCRIPTION: This snippet shows an example of the generated snapshot file content for the `Link` component. It captures the rendered HTML structure, including attributes like `className`, `href`, and event handlers, as stored by Jest for comparison in future test runs.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-011-snapshot-tests.md#_snippet_1

LANGUAGE: js
CODE:
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

----------------------------------------

TITLE: Node.js package exports example for internal modules
DESCRIPTION: This Node.js `package.json` example demonstrates how to expose specific paths while explicitly setting internal paths like `./feature/internal/*` to `null`, preventing them from being part of the public API.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-015-internal-modules.md#_snippet_2

LANGUAGE: json
CODE:
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

----------------------------------------

TITLE: Proposed NPM Workspaces Project Structure
DESCRIPTION: This snippet illustrates the proposed directory structure for the `primer/react` project after adopting `npm` workspaces. It shows the top-level `package.json` for defining workspaces and the organization of various sub-projects like `docs`, `packages`, and `examples`, along with top-level scripts and configuration directories, aiming for a more unified and manageable repository.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-014-npm-workspaces.md#_snippet_0

LANGUAGE: Text
CODE:
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

----------------------------------------

TITLE: Upgrading Primer React Components to v1.0.0-beta using Codemod (Shell)
DESCRIPTION: This command executes a jscodeshift codemod to upgrade Primer React components from `0.x.x-beta` to v1.0.0-beta. This major release refactors component internals and introduces `emotion` and `styled-system`. The `path/to/src` argument should be updated to point to the project's source code directory.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_3

LANGUAGE: Shell
CODE:
```
npx jscodeshift -t node_modules/primer-react/codemods/v1.js path/to/src
```

----------------------------------------

TITLE: Migrating Block shadow Prop in React
DESCRIPTION: Explains the refactoring for the `shadow` prop on the `Block` component. All values previously used with `shadow` should now be applied directly to the `boxShadow` prop with the corresponding CSS value.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_14

LANGUAGE: JSX
CODE:
```
boxShadow="value"
```

----------------------------------------

TITLE: Using Responsive `padding` Prop in React Component
DESCRIPTION: This example illustrates how to consume the `Stack` component with a responsive `padding` prop. It shows setting different padding values for `narrow` and `regular` viewports, leveraging the `ResponsiveValue` type to adapt styling based on screen size.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_17

LANGUAGE: tsx
CODE:
```
// usage
<Stack padding={{narrow: 'none', regular: 'normal'}} />
```

----------------------------------------

TITLE: Upgrading Primer React Components to v3.0.0-beta using Codemod (Shell)
DESCRIPTION: This command runs a jscodeshift codemod to facilitate the migration from Primer React v2.x.x-beta to v3.0.0-beta. It also handles the package name change from `primer-react` to `@primer/components`. The `path/to/src` placeholder must be replaced with the actual directory containing the project's source code.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npx jscodeshift -t node_modules/@primer/components/codemods/v3.js path/to/src
```

----------------------------------------

TITLE: Applying Global Theme Overrides with Emotion-Theming in React
DESCRIPTION: This snippet demonstrates how to apply a custom theme to an entire tree of `@primer/components` using `emotion-theming`'s `<ThemeProvider>`. It extends the default Primer theme with custom `space` and `fontSizes` values and overrides a specific color. The `ThemeProvider` requires exactly one child element.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_4

LANGUAGE: jsx
CODE:
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

----------------------------------------

TITLE: Upgrading Primer React Components to v2.0.0-beta using Codemod (Shell)
DESCRIPTION: This command utilizes a jscodeshift codemod to assist in migrating Primer React components from v1.x.x-beta to v2.0.0-beta. This version includes component renames such as `Box` to `BorderBox` and `Block` to `Box`. Users should replace `path/to/src` with the correct path to their source files.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_2

LANGUAGE: Shell
CODE:
```
npx jscodeshift -t node_modules/primer-react/codemods/v2.js path/to/src
```

----------------------------------------

TITLE: Implementing Controllable and Uncontrolled Components in React
DESCRIPTION: This snippet defines a React component (`Example`) that can operate in both controlled and uncontrolled modes, demonstrating the use of `value`, `defaultValue`, and `onChange` props. It shows how `UncontrolledExample` uses `defaultValue` and `ControlledExample` manages state externally with `value` and `setValue`.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/style.md#_snippet_0

LANGUAGE: tsx
CODE:
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

----------------------------------------

TITLE: Migrating Block border Prop (top) in React
DESCRIPTION: Shows how to refactor the `border` prop on the `Block` component when its value was `'top'`. This specific border application is now handled by the `borderTop` prop with a numeric value of `1`.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_13

LANGUAGE: JSX
CODE:
```
borderTop={1}
```

----------------------------------------

TITLE: Upgrading Primer React Components to v4.0.0-beta using Codemod (Shell)
DESCRIPTION: This command executes a jscodeshift codemod script to automatically upgrade component identifiers from v3.x.x-beta to v4.0.0-beta in a Primer React project. It targets the specified source path to apply renames like `FlexContainer` to `Flex` and `FlexItem` to `Flex.Item`. The `path/to/src` placeholder should be replaced with the actual path to the project's source files.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx jscodeshift -t node_modules/@primer/components/codemods/v4.js path/to/src
```

----------------------------------------

TITLE: Migrating Typography nowrap Prop in React
DESCRIPTION: Describes how to replace the boolean `nowrap` prop for `Text` and `Heading` components. The functionality is now achieved by directly applying `white-space: nowrap` via the `css` prop.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_8

LANGUAGE: JSX
CODE:
```
css="white-space: nowrap"
```

----------------------------------------

TITLE: Migrating FlexContainer direction Prop in React
DESCRIPTION: Details the migration of the `direction` prop on the `FlexContainer` component. This prop is now replaced by `flexDirection`, which accepts standard CSS flexbox direction values.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_15

LANGUAGE: JSX
CODE:
```
flexDirection="css-value"
```

----------------------------------------

TITLE: Migrating Typography mono Prop in React
DESCRIPTION: Details the migration of the boolean `mono` prop on `Text` and `Heading` components. Instead of a boolean `mono` prop, the `fontFamily` prop should be set to `"mono"` to apply a monospace font.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_7

LANGUAGE: JSX
CODE:
```
fontFamily="mono"
```

----------------------------------------

TITLE: Importing TreeView Component Exclusively from Primer React Drafts
DESCRIPTION: This example illustrates importing the `TreeView` component specifically from the `@primer/react/drafts` path. This indicates that `TreeView` was a work-in-progress component not yet available in the main package, intended for early access or collaborative development.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-010-drafts-are-experimental.md#_snippet_1

LANGUAGE: JavaScript
CODE:
```
// this component only exists in drafts and not in the roof of the package
import {TreeView} from '@primer/react/drafts'
```

----------------------------------------

TITLE: Configuring ESLint Parser Options for Type-Aware Linting (JavaScript)
DESCRIPTION: This JavaScript snippet illustrates how to configure the `parserOptions` within an ESLint configuration file. It sets up the ECMAScript version, module source type, and specifies the TypeScript configuration files (`tsconfig.json`, `tsconfig.node.json`) along with the root directory, enabling type-aware linting for a React and TypeScript project.

SOURCE: https://github.com/primer/react/blob/main/examples/codesandbox/README.md#_snippet_0

LANGUAGE: JavaScript
CODE:
```
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

----------------------------------------

TITLE: Migrating Block border Prop (right) in React
DESCRIPTION: Shows how to refactor the `border` prop on the `Block` component when its value was `'right'`. This specific border application is now handled by the `borderRight` prop with a numeric value of `1`.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_12

LANGUAGE: JSX
CODE:
```
borderRight={1}
```

----------------------------------------

TITLE: Migrating FlexContainer wrap Prop in React
DESCRIPTION: Explains the refactoring for the `wrap` prop on the `FlexContainer` component. This prop is now replaced by `flexWrap`, which accepts standard CSS flexbox wrap values like `wrap` or `nowrap`.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_16

LANGUAGE: JSX
CODE:
```
flexWrap="css-value"
```

----------------------------------------

TITLE: Merging Class Names with clsx in React Components (TSX)
DESCRIPTION: This example illustrates how to correctly handle the `className` prop in Primer React components. It shows the use of `clsx` to merge multiple class names, including a custom `className` passed by the consumer and module-specific styles, ensuring proper styling and extensibility.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_3

LANGUAGE: tsx
CODE:
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

----------------------------------------

TITLE: Migrating Block border Prop (bottom) in React
DESCRIPTION: Shows how to refactor the `border` prop on the `Block` component when its value was `'bottom'`. This specific border application is now handled by the `borderBottom` prop with a numeric value of `1`.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_10

LANGUAGE: JSX
CODE:
```
borderBottom={1}
```

----------------------------------------

TITLE: Migrating Block border Prop (left) in React
DESCRIPTION: Shows how to refactor the `border` prop on the `Block` component when its value was `'left'`. This specific border application is now handled by the `borderLeft` prop with a numeric value of `1`.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_11

LANGUAGE: JSX
CODE:
```
borderLeft={1}
```

----------------------------------------

TITLE: Migrating Block border Prop (boolean) in React
DESCRIPTION: Illustrates how to update the `border` prop on the `Block` component when its value was `true`. The boolean `true` is now replaced with a numeric value of `1` for the `border` prop.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_9

LANGUAGE: JSX
CODE:
```
border={1}
```

----------------------------------------

TITLE: Migrating Typography lineHeight Prop in React
DESCRIPTION: Explains how to update the `lineHeight` prop for `Text` and `Heading` components. The `condensed-ultra` string value is replaced with `condensedUltra` to align with `theme.lineHeights` keys, or any other value will be treated as a literal CSS value.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_6

LANGUAGE: JSX
CODE:
```
lineHeight="condensedUltra"
```

----------------------------------------

TITLE: Migrating FlexContainer inline Prop in React
DESCRIPTION: Describes how to update the boolean `inline` prop on the `FlexContainer` component. The inline flex display behavior is now achieved by setting the `display` prop to `"inline-flex"`.

SOURCE: https://github.com/primer/react/blob/main/migrating.md#_snippet_17

LANGUAGE: JSX
CODE:
```
display="inline-flex"
```

----------------------------------------

TITLE: Emitting Conditional Development Warnings with warning() Helper (TypeScript)
DESCRIPTION: This example illustrates the usage of the `warning()` helper function, which provides a standardized way to emit development-only warnings. It takes a `condition` and a `message`; the message is logged via `console.warn()` only when the condition is truth-y. This helper is automatically wrapped in a `__DEV__` block, ensuring it is removed from production builds.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-012-development-warnings.md#_snippet_1

LANGUAGE: ts
CODE:
```
warning(condition, 'This is the message that is logged when condition is truth-y')
```

----------------------------------------

TITLE: Programmatic Announcements with `announce` in React
DESCRIPTION: This example illustrates how to use the `announce` helper from `@primer/live-region-element` to trigger accessibility announcements programmatically. It's used here to announce the number of filtered search results, providing immediate feedback to users of assistive technologies.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-020-live-regions.md#_snippet_2

LANGUAGE: tsx
CODE:
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

----------------------------------------

TITLE: Creating Avatar Component with styled-components (TypeScript)
DESCRIPTION: This snippet demonstrates creating a React `Avatar` component using `styled-components`. It defines an image element with dynamic `height` and `width` based on `size` props, applying inline-block display, hidden overflow, specific line height, and border-radius, while also supporting `sx` prop for system styles. It requires `styled-components` and `get` utility.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-005-box-sx.md#_snippet_0

LANGUAGE: tsx
CODE:
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

----------------------------------------

TITLE: Setting Feature Flags for Testing with FeatureFlags Component (TSX)
DESCRIPTION: This example shows how to use the `FeatureFlags` component in a testing environment. By wrapping the component under test with `FeatureFlags` and providing specific flag values, developers can easily simulate different feature flag states for isolated testing.

SOURCE: https://github.com/primer/react/blob/main/packages/react/src/FeatureFlags/README.md#_snippet_4

LANGUAGE: tsx
CODE:
```
render(
  <FeatureFlags flags={{enableNewFeature: true}}>
    <ExampleComponent />
  </FeatureFlags>,
)
```

----------------------------------------

TITLE: Unpreferred: React Hook Returning a Ref
DESCRIPTION: This example shows an antipattern where a React hook returns a ref. This design makes it challenging for a component to use multiple such hooks simultaneously, as merging or combining the returned refs becomes a complex task for the caller.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/style.md#_snippet_7

LANGUAGE: tsx
CODE:
```
function MyComponent() {
  const [ref1, isHovering] = useHover()
  const [ref2, isDragging] = useDrag()

  // How should the caller merge these two refs?
}
```

----------------------------------------

TITLE: Example Output of CSS Module Import
DESCRIPTION: This snippet illustrates the expected output structure when `rollup-plugin-import-css` processes CSS Modules. It shows how the plugin generates an import statement for the transformed CSS file (e.g., `path-to-header-[hash].css`) alongside the default export containing the scoped class names, enabling automatic CSS inclusion upon component import.

SOURCE: https://github.com/primer/react/blob/main/packages/rollup-plugin-import-css/README.md#_snippet_1

LANGUAGE: TypeScript
CODE:
```
// Example output
import './path-to-header-[hash].css'
export default {
  header: 'header___3s4s'
}
```

----------------------------------------

TITLE: Using `useControllableState` Hook in React Components
DESCRIPTION: This example demonstrates how to refactor a component to use the `useControllableState` hook. This hook simplifies the logic for managing state that can be either controlled externally via `value` or internally via `defaultValue`, abstracting away the boilerplate.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/style.md#_snippet_1

LANGUAGE: tsx
CODE:
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

----------------------------------------

TITLE: Configuring rollup-plugin-import-css in Rollup
DESCRIPTION: This snippet demonstrates how to integrate and configure `rollup-plugin-import-css` within a `rollup.config.js` file. It shows how to specify the `modulesRoot`, include optional PostCSS plugins like `autoprefixer`, and pass custom options to `postcss-modules` for generating scoped class names. This setup ensures that component CSS is automatically bundled with the component.

SOURCE: https://github.com/primer/react/blob/main/packages/rollup-plugin-import-css/README.md#_snippet_0

LANGUAGE: TypeScript
CODE:
```
// rollup.config.js
import {importCSS} from 'rollup-plugin-import-css'

export default {
  input: ['src/index.ts'],
  plugins: [
    // ...
    importCSS({
      modulesRoot: 'src',

      // Optionally, include postcss plugins to run alongside postcss-modules
      postcssPlugins: [autoprefixer()],

      // Optionally, include options to pass to postcss-modules
      postcssModulesOptions: {
        generateScopedName: '[name]_[local]_[hash:base64:5]',
      },
    }),
  ],
}
```

----------------------------------------

TITLE: Mitigating Specificity with :where() - CSS
DESCRIPTION: This snippet demonstrates using the `:where()` pseudo-class to reduce the specificity of a selector to `0,1,0`. This approach helps maintain stable specificity, ensuring that external overrides continue to apply, and includes an example with CSS nesting.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-021-css-layers.md#_snippet_2

LANGUAGE: CSS
CODE:
```
.Component:where([data-variant='default']) {
  color: var(--fgColor-default);
}

/* Or with nesting: */
.Component {
  &:where([data-variant='default']) {
    color: var(--fgColor-default);
  }
}
```

----------------------------------------

TITLE: Composing ActionList Item with Custom Visuals in React
DESCRIPTION: This example illustrates a composite component API where consumers have more control over the children. It shows an `ActionList.Item` containing an `ActionList.LeadingVisual` with an `Avatar` component, allowing flexible content rendering within the list item.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-004-children-as-api.md#_snippet_1

LANGUAGE: jsx
CODE:
```
<ActionList.Item>
  <ActionList.LeadingVisual>
    <Avatar src="https://github.com/mona.png" />
  <ActionList.LeadingVisual>
  mona
</ActionList.Item>
```

----------------------------------------

TITLE: HTML Button with Title Attribute for Tooltip
DESCRIPTION: This snippet demonstrates a standard HTML `button` element utilizing the `title` attribute to provide a tooltip. The `title` attribute is an example of passing data as a prop (attribute) in plain HTML, which the browser then interprets to display additional information on hover.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/component-contents-api-patterns.md#_snippet_6

LANGUAGE: html
CODE:
```
<button title="Save">💾</button>
```

----------------------------------------

TITLE: Unpreferred: Callback Prop Type with Multiple Positional Arguments
DESCRIPTION: This example illustrates an unpreferred way to define callback prop types using multiple positional arguments. This structure makes it difficult to add or remove arguments in the future without introducing breaking changes to the function signature.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/style.md#_snippet_5

LANGUAGE: tsx
CODE:
```
type Props = {
  onChange: (a: boolean, b: string, c: number) => void
}
```

----------------------------------------

TITLE: Example Return Value for usePopover Component Behavior Hook - React
DESCRIPTION: This object illustrates the typical return value structure for a component behavior hook like `usePopover`. It contains multiple `PropsObject` instances, each intended to be spread onto a specific JSX element (e.g., `popoverProps` for the main popover element, `openClickTargetProps` for the element that opens it, and `closeClickTargetProps` for the element that closes it). This pattern allows the hook to provide all necessary props for related UI elements.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/behaviors.md#_snippet_0

LANGUAGE: JavaScript
CODE:
```
{
  popoverProps: PropsObject,
  openClickTargetProps: PropsObject,
  closeClickTargetProps: PropsObject
}
```

----------------------------------------

TITLE: Automatic Live Region Lookup with `AriaStatus` in Dialogs
DESCRIPTION: This example demonstrates that `AriaStatus` automatically identifies and uses the closest `dialog` element as its live region, removing the need for explicit `from` arguments. It's used here to announce a loading state within a dialog, simplifying accessibility for status updates.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-020-live-regions.md#_snippet_4

LANGUAGE: tsx
CODE:
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

----------------------------------------

TITLE: Defining Stack Component Props with Responsive Values (Initial Example) - TypeScript
DESCRIPTION: This snippet illustrates two ways to define the `gap` prop for a `Stack` component: a fixed string value and a responsive object value. The responsive object allows specifying different `gap` values for various named breakpoints (narrow, regular, wide), demonstrating the concept of responsive props.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-018-responsive-values.md#_snippet_0

LANGUAGE: TypeScript
CODE:
```
// Value
<Stack gap="condensed" />

// Responsive value
<Stack gap={{ narrow: 'condensed', regular: 'normal', wide: 'spacious' />
```

----------------------------------------

TITLE: Conditionally Altering Handler Behavior with useFeatureFlag (TSX)
DESCRIPTION: This example shows how to use the `useFeatureFlag` hook within a React component to check if a specific feature flag is enabled. Based on the flag's status, it conditionally alters the logic inside an event handler, such as an `onClick` function.

SOURCE: https://github.com/primer/react/blob/main/packages/react/src/FeatureFlags/README.md#_snippet_1

LANGUAGE: tsx
CODE:
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

----------------------------------------

TITLE: Basic HTML Div Structure with Nested Children in JSX
DESCRIPTION: This snippet shows a fundamental example of how HTML elements, when used in JSX, accept content as children. A `div` element contains two nested `div` elements, demonstrating the common pattern of defining content structure directly within the parent's tags. This is a core concept for structuring UI in React.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/component-contents-api-patterns.md#_snippet_2

LANGUAGE: jsx
CODE:
```
<div>
  <div>Some content</div>
  <div>More content</div>
</div>
```

----------------------------------------

TITLE: CSS Layers and Override Precedence - CSS
DESCRIPTION: This example demonstrates how CSS layers interact with rules outside of layers. Even if a rule within a layer has higher specificity, a rule in a later or anonymous layer (like the `.override` class here) will take precedence, simplifying override management.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-021-css-layers.md#_snippet_4

LANGUAGE: CSS
CODE:
```
@layer primer.components.component {
  .Component[data-variant='default'] {
    color: var(--fgColor-default);
  }
}

.override {
  color: var(--fgColor-muted);
}
```

----------------------------------------

TITLE: Primer React Documentation Directory Structure
DESCRIPTION: This snippet illustrates the recommended directory structure for adding new component documentation files within the `primer-react` project. New `.mdx` files for components should be placed under `docs/content` to be picked up by Doctocat.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_12

LANGUAGE: plaintext
CODE:
```
primer-react/
├─ docs/
│  ├─ content/
│  │  ├─ Component.mdx
```

----------------------------------------

TITLE: Increased Component Specificity (v1.1.0) - CSS
DESCRIPTION: This example illustrates a scenario where a component's selector specificity is increased in a new version. This change can inadvertently break existing overrides, as the more specific component rule now takes precedence over the less specific override.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-021-css-layers.md#_snippet_1

LANGUAGE: CSS
CODE:
```
/* v1.1.0 of a component */
.Component[data-variant='default'] {
  color: var(--fgColor-default);
}
```

----------------------------------------

TITLE: Composing Flash Component with Icon in React
DESCRIPTION: This example shows how to compose a `Flash` component by including an `CheckIcon` directly within its `children`. It highlights the flexibility of using `children` to embed rich content, where the `Flash` component manages the container's styling while the consumer controls the content's appearance.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-004-children-as-api.md#_snippet_3

LANGUAGE: jsx
CODE:
```
import {Flash} from '@primer/react'
import {CheckIcon} from '@primer/octicons-react'

render(
  <Flash variant="success">
    <CheckIcon /> Changes saved!
  </Flash>,
)
```

----------------------------------------

TITLE: Customizing Flash Component Layout with SX Prop in React
DESCRIPTION: This example showcases advanced customization of the `Flash` component using the `sx` prop for flexible styling, specifically to achieve a `flex` layout with space-between justification. It demonstrates embedding both content with an icon and an interactive `Button` for dismissal, illustrating how consumers can extend component functionality beyond baked-in use cases.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-004-children-as-api.md#_snippet_5

LANGUAGE: jsx
CODE:
```
<Flash variant="success" sx={{display: 'flex', justifyContent: 'space-between'}}>
  <span>
    <CheckIcon /> Changes saved!
  </span>
  <Button variant="invisible" icon={CheckIcon} aria-label="Hide flash message" onClick={onDismiss} />
</Flash>
```

----------------------------------------

TITLE: Running Unit Tests
DESCRIPTION: Commands for executing and managing unit tests, including running all tests, specific components, debugging, generating coverage reports, and updating snapshots.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm test
```

LANGUAGE: bash
CODE:
```
npm test ComponentName
```

LANGUAGE: bash
CODE:
```
npm test -- --watch
```

LANGUAGE: bash
CODE:
```
npm test -- --coverage
```

LANGUAGE: bash
CODE:
```
npm test -- -u
```

----------------------------------------

TITLE: Basic HTML Unordered List with List Items in JSX
DESCRIPTION: This snippet provides another example of HTML elements accepting children, specifically an unordered list (`ul`) containing list items (`li`). It highlights how standard HTML structures are represented in JSX, where the `li` elements are direct children of the `ul` element, adhering to typical web content structuring.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/component-contents-api-patterns.md#_snippet_3

LANGUAGE: jsx
CODE:
```
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

----------------------------------------

TITLE: Customizing Icon Styling via React Children in Flash Component
DESCRIPTION: This example illustrates how developers can still use `children` to render an icon with custom styling (size, color, margin) when intentionally deviating from the 'happy path.' This requires manual effort to ensure compatibility, making it feel like a workaround for non-standard use cases.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-004-children-as-api.md#_snippet_8

LANGUAGE: jsx
CODE:
```
<Flash variant="success">
  <CheckIcon size={20} color="success.emphasis" sx={{marginRight: 2}} />
  Changes saved!
</Flash>
```

----------------------------------------

TITLE: Implementing Responsive Props with Data Attributes in React - TypeScript & CSS
DESCRIPTION: This comprehensive example demonstrates how to implement responsive props using data attributes to prevent layout shifts during SSR. It defines a `Stack` component with a `gap` prop that can accept a single value or a responsive object. The `getResponsiveAttributes` helper is used to apply `data-gap` and `data-gap-{breakpoint}` attributes to the `StyledStack` element, which are then targeted by CSS rules to apply responsive styles based on viewport size.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-018-responsive-values.md#_snippet_1

LANGUAGE: TypeScript
CODE:
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

----------------------------------------

TITLE: Creating a New Changeset for Releases
DESCRIPTION: This command is used to create a new changeset file locally, which is crucial for managing releases and versioning in the Primer React project. Running `npx changeset` will prompt the user to answer questions about the type of change being made (e.g., major, minor, patch).

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_14

LANGUAGE: Shell
CODE:
```
npx changeset
```

----------------------------------------

TITLE: Importing and Using a Primer React Component
DESCRIPTION: This snippet demonstrates how to import a specific component, such as Button, directly from the @primer/react package. It then shows how to render this component within a functional React component, illustrating basic component integration.

SOURCE: https://github.com/primer/react/blob/main/packages/react/README.md#_snippet_2

LANGUAGE: tsx
CODE:
```
import {Button} from '@primer/react'

function App() {
  return <Button>Hello world</Button>
}
```

----------------------------------------

TITLE: Unpreferred: Applying Rest Props to Nested Element in React
DESCRIPTION: This example shows an antipattern where rest parameters are applied to a nested element within a component's render output. This approach is generally unpreferred as it can lead to unexpected styling, accessibility, or event handling issues, as the root element does not receive the forwarded props.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/style.md#_snippet_3

LANGUAGE: tsx
CODE:
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

----------------------------------------

TITLE: Running ESLint on Specific Files (Shell)
DESCRIPTION: This command uses `npx` to run ESLint on one or more specified files, allowing developers to focus linting efforts on particular components or modules without scanning the entire project. This is useful for targeted checks during development.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_5

LANGUAGE: sh
CODE:
```
npx eslint src/**/MyComponent.tsx
```

----------------------------------------

TITLE: Linting Markdown Files (Shell)
DESCRIPTION: This command executes Markdownlint to check Markdown files for style and formatting issues, ensuring consistency in documentation and other Markdown-based content within the project. It adheres to GitHub's markdownlint-github configuration.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_8

LANGUAGE: sh
CODE:
```
npm run lint:md
```

----------------------------------------

TITLE: Creating a Basic Primer React Component (TSX)
DESCRIPTION: This snippet demonstrates the basic structure of a Primer React component, including type definitions, importing styles and utilities like `clsx`, and defining a functional component with `React.FC` that accepts children, `className`, and other props. It also shows how to set a `displayName` for debugging.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_2

LANGUAGE: tsx
CODE:
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

----------------------------------------

TITLE: Running ESLint for Code Linting (Shell)
DESCRIPTION: This command executes the ESLint linter across the project, checking for code style and quality issues based on the configured rules. It's a standard practice to run this before pushing changes to ensure code consistency.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_4

LANGUAGE: sh
CODE:
```
npm run lint
```

----------------------------------------

TITLE: Linting CSS Files (Shell)
DESCRIPTION: This command runs Stylelint to check CSS files against the Primer stylelint configuration, ensuring consistent styling and adherence to best practices for CSS within the project. It helps maintain a unified visual language.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_9

LANGUAGE: sh
CODE:
```
npm run lint:css
```

----------------------------------------

TITLE: Importing Component Metadata in MDX
DESCRIPTION: This code snippet demonstrates how to import a component's metadata from its `docs.json` file into an `.mdx` documentation file. This import is essential for integrating component-specific data and properties into the documentation generated by Doctocat.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_13

LANGUAGE: JavaScript
CODE:
```
import data from '../../../src/Component/Component.docs.json'
```

----------------------------------------

TITLE: Running Playwright Visual Regression Tests
DESCRIPTION: Commands for executing and managing visual regression tests with Playwright, covering full runs, specific tests, report viewing, snapshot updates, debugging, and filtering by tags.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_1

LANGUAGE: bash
CODE:
```
script/test-e2e
```

LANGUAGE: bash
CODE:
```
script/test-e2e TestName
```

LANGUAGE: bash
CODE:
```
npx playwright show-report .playwright/report
```

LANGUAGE: bash
CODE:
```
script/test-e2e --update-snapshots
```

LANGUAGE: bash
CODE:
```
npx playwright test --debug
```

LANGUAGE: bash
CODE:
```
npx playwright test --headed
```

LANGUAGE: bash
CODE:
```
script/test-e2e --grep @tag-name
```

LANGUAGE: bash
CODE:
```
script/test-e2e --grep-invert @tag-name
```

----------------------------------------

TITLE: Running Accessibility Verification Tests - Bash
DESCRIPTION: This command executes the end-to-end accessibility verification tests using a custom test script. The --grep @avt flag filters the tests to specifically run those tagged for accessibility verification.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_6

LANGUAGE: bash
CODE:
```
script/test-e2e --grep @avt
```

----------------------------------------

TITLE: Configuring postcss-preset-primer in PostCSS
DESCRIPTION: This JavaScript snippet demonstrates how to import and use `postcss-preset-primer` within a `postcss.config.js` file. It configures the plugin by adding it to the `plugins` array, enabling its functionalities for PostCSS processing.

SOURCE: https://github.com/primer/react/blob/main/packages/postcss-preset-primer/README.md#_snippet_1

LANGUAGE: javascript
CODE:
```
// postcss.config.js
const postcssPresetPrimer = require('postcss-preset-primer')

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [postcssPresetPrimer()],
}

module.exports = config
```

----------------------------------------

TITLE: Implementing MyFancyBox with Prop-based API in React
DESCRIPTION: This React component, `MyFancyBox`, demonstrates a prop-based API where the `contents` prop can accept a string, a React element, or a function. It renders the provided content within a div with a blue double border. The description highlights that while the implementation is abbreviated, the API's flexibility regarding the `contents` prop is not immediately obvious from usage alone.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/component-contents-api-patterns.md#_snippet_8

LANGUAGE: jsx
CODE:
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

----------------------------------------

TITLE: Automatically Fixing Stylelint Errors (Shell)
DESCRIPTION: This command runs Stylelint with autofix capabilities, automatically correcting certain CSS rules to comply with the project's style guidelines. This streamlines the process of maintaining consistent CSS formatting and reduces manual effort.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_10

LANGUAGE: sh
CODE:
```
npm run lint:css:fix
```

----------------------------------------

TITLE: Importing Draft ActionMenu Component (Stage 1)
DESCRIPTION: This snippet demonstrates how consumers can explicitly import a new, experimental component from the `@primer/react/drafts` bundle during Stage 1 of the component lifecycle. This allows early adopters to test the component, understanding that it might not yet cover all use cases of its older counterpart and may incur additional bundle size if both versions are used.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-006-drafts.md#_snippet_0

LANGUAGE: TypeScript
CODE:
```
import { ActionMenu } from '@primer/react/drafts'
```

----------------------------------------

TITLE: Applying Responsive Data Attributes in CSS with `:where`
DESCRIPTION: This CSS snippet demonstrates how to style the `Stack` component based on its responsive data attributes. It uses the `:where` pseudo-class to target `data-padding='none'` or `data-padding-narrow='none'`, setting `padding: 0` while maintaining a specificity of 0, which is useful for allowing custom overrides.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_18

LANGUAGE: css
CODE:
```
/* Stack.module.css */
.Stack {
  &:where([data-padding='none']),
  &:where([data-padding-narrow='none']) {
    padding: 0;
  }
}
```

----------------------------------------

TITLE: Importing UnderlineNav from Root and Drafts in Primer React
DESCRIPTION: This snippet demonstrates how to import the `UnderlineNav` component from both the default `@primer/react` package and its `/drafts` path. The `/drafts` path was historically used for new or experimental versions of components, allowing parallel development and testing before integration into the main package.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-010-drafts-are-experimental.md#_snippet_0

LANGUAGE: JavaScript
CODE:
```
// default version of component exported from root of package
import {UnderlineNav} from '@primer/react'

// new version of component exported from /drafts
import {UnderlineNav} from '@primer/react/drafts'
```

----------------------------------------

TITLE: Standard Component Directory Structure for Primer React
DESCRIPTION: This snippet illustrates the proposed standardized directory structure for components within the `primer-react` library. Each component resides in its own PascalCased directory under `src/`, containing the primary component file (`.tsx`), subcomponents, documentation (`.mdx`), Storybook stories, and various test files. This structure aims to improve consistency and findability in IDEs.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-013-file-structure.md#_snippet_0

LANGUAGE: TypeScript
CODE:
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

----------------------------------------

TITLE: Defining Responsive Props with `getResponsiveAttributes` in React
DESCRIPTION: This snippet defines the `Stack` component, demonstrating how to use `ResponsiveValue` and `getResponsiveAttributes` to create a responsive `padding` prop. It sets up types for `PaddingScale` and `Padding`, allowing the `padding` prop to accept either a direct value or a responsive object, which is then applied to the div via data attributes.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_16

LANGUAGE: tsx
CODE:
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

----------------------------------------

TITLE: Executing Tagged Visual Regression Tests
DESCRIPTION: These commands run visual regression tests specifically filtered by the '@vrt' tag. The first command uses a helper script mirroring the CI environment, while the second runs Playwright directly, which might require local snapshot regeneration on the first run.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_4

LANGUAGE: bash
CODE:
```
script/test-e2e --grep @vrt
```

LANGUAGE: bash
CODE:
```
npx playwright test --grep @vrt
```

----------------------------------------

TITLE: Recommended PascalCase for CSS Module Classnames
DESCRIPTION: This CSS snippet demonstrates the recommended PascalCase naming convention for CSS Module class names. Using PascalCase simplifies referencing these classes in TSX, avoiding the need for cumbersome backslash escapes.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_5

LANGUAGE: css
CODE:
```
/* Do */
.ButtonContent {
  display: inline-block;
}
```

----------------------------------------

TITLE: Running TypeScript Type Checks (Shell)
DESCRIPTION: This command executes the TypeScript type checker across the project, verifying that all code adheres to the defined type definitions and catching potential type-related errors early in the development cycle. This ensures type safety and improves code reliability.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_11

LANGUAGE: sh
CODE:
```
npm run test:type-check
```

----------------------------------------

TITLE: Using `@supports` for Conditional CSS Feature Detection
DESCRIPTION: This CSS snippet illustrates the use of the `@supports` at-rule to conditionally apply styles based on browser feature availability. It checks for `container-type: inline-size` support, enabling container queries only when the browser supports this CSS feature, ensuring graceful degradation for older browsers.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_20

LANGUAGE: css
CODE:
```
@supports (container-type: inline-size) {
  container: banner / inline-size;
}
```

----------------------------------------

TITLE: Exposing all files in lib-esm in Primer React
DESCRIPTION: This `exports` pattern in `package.json` for `@primer/react` exposes all files and folders under `./lib-esm/*` as part of the public API, including those not intended for external use.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-015-internal-modules.md#_snippet_0

LANGUAGE: json5
CODE:
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

----------------------------------------

TITLE: Importing Deprecated ActionMenu Component (Stage 2)
DESCRIPTION: This snippet shows how consumers can continue using an older version of a component from the `@primer/react/deprecated` bundle after a new version has replaced it in the main bundle (Stage 2). This provides an easy opt-out for consumers who wish to delay migration, but the deprecated component will not receive new features.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-006-drafts.md#_snippet_1

LANGUAGE: TypeScript
CODE:
```
import { ActionMenu } from '@primer/react/deprecated'
```

----------------------------------------

TITLE: Automatically Fixing ESLint Errors (Shell)
DESCRIPTION: This command runs ESLint with the `--fix` flag, which attempts to automatically resolve common linting issues such as whitespace errors, incorrect ordering of object keys, and import statements. It helps maintain code consistency with minimal manual intervention.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_6

LANGUAGE: sh
CODE:
```
npm run lint -- --fix
```

----------------------------------------

TITLE: Creating a React Component Accepting Children Prop in JSX
DESCRIPTION: This snippet defines a custom React functional component `MyFancyBox` that accepts and renders its `children` prop. It showcases the "first-class" approach in React where content placed between a component's opening and closing tags is automatically available via the `children` prop, allowing the component to wrap or augment that content.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/component-contents-api-patterns.md#_snippet_5

LANGUAGE: jsx
CODE:
```
function MyFancyBox({children}) {
  return <div style="border: 4px double cornflowerblue;">{children}</div>
}

// usage
;<MyFancyBox>I have a blue border!</MyFancyBox>
```

----------------------------------------

TITLE: Integrating Custom Elements with React using @lit-labs/react
DESCRIPTION: This snippet demonstrates how to integrate a Custom Element, 'relative-time', into a React application using the @lit-labs/react library. It wraps the RelativeTimeElement and applies styling with 'styled' and 'sx', allowing the custom element to behave just like a native React component by automatically mapping props to instance properties and converting 'on*' callbacks to event listeners.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-009-behavior-isolation.md#_snippet_4

LANGUAGE: TypeScript
CODE:
```
const RelativeTime = styled(createComponent(React, 'relative-time', RelativeTimeElement))(sx)
```

----------------------------------------

TITLE: Recommended Data Attributes for Component Variants in CSS
DESCRIPTION: This CSS snippet shows the preferred method for styling component variants using data attributes (e.g., `data-size='small'`). This approach is more semantic and flexible than modifier classes, allowing for clear representation of component states and values.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_12

LANGUAGE: css
CODE:
```
/* Do */
.Button:where([data-size='small']) {
  height: var(--control-small-size);
}
```

----------------------------------------

TITLE: Conceptual Web Component Invocation Pattern
DESCRIPTION: This snippet demonstrates the simplified invocation pattern for a conceptual `focus-trap` Web Component. Unlike React hooks, Web Components offer a standard, declarative HTML-like syntax, allowing them to manage their own lifecycle and state internally, thereby simplifying their application for engineers.

SOURCE: https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-009-behavior-isolation.md#_snippet_0

LANGUAGE: HTML
CODE:
```
<focus-trap active={isActive}>
```