# Configuration

## Configuring Primer React Theme and Base Styles

This example illustrates the setup of ThemeProvider and BaseStyles at the root of a React application, which are crucial for applying Primer's design system styles and themes. It also shows how to import a specific theme, like light.css, from @primer/primitives.

**Source:** [https://github.com/primer/react/blob/main/packages/react/README.md#_snippet_3](https://github.com/primer/react/blob/main/packages/react/README.md#_snippet_3)

```tsx

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

```

---

## Configuring ESLint Parser Options for Type-Aware Linting (JavaScript)

This JavaScript snippet illustrates how to configure the `parserOptions` within an ESLint configuration file. It sets up the ECMAScript version, module source type, and specifies the TypeScript configuration files (`tsconfig.json`, `tsconfig.node.json`) along with the root directory, enabling type-aware linting for a React and TypeScript project.

**Source:** [https://github.com/primer/react/blob/main/examples/codesandbox/README.md#_snippet_0](https://github.com/primer/react/blob/main/examples/codesandbox/README.md#_snippet_0)

```JavaScript

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

```

---

## Configuring rollup-plugin-import-css in Rollup

This snippet demonstrates how to integrate and configure `rollup-plugin-import-css` within a `rollup.config.js` file. It shows how to specify the `modulesRoot`, include optional PostCSS plugins like `autoprefixer`, and pass custom options to `postcss-modules` for generating scoped class names. This setup ensures that component CSS is automatically bundled with the component.

**Source:** [https://github.com/primer/react/blob/main/packages/rollup-plugin-import-css/README.md#_snippet_0](https://github.com/primer/react/blob/main/packages/rollup-plugin-import-css/README.md#_snippet_0)

```TypeScript

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

```

---

## Configuring postcss-preset-primer in PostCSS

This JavaScript snippet demonstrates how to import and use `postcss-preset-primer` within a `postcss.config.js` file. It configures the plugin by adding it to the `plugins` array, enabling its functionalities for PostCSS processing.

**Source:** [https://github.com/primer/react/blob/main/packages/postcss-preset-primer/README.md#_snippet_1](https://github.com/primer/react/blob/main/packages/postcss-preset-primer/README.md#_snippet_1)

```javascript

```
// postcss.config.js
const postcssPresetPrimer = require('postcss-preset-primer')

/** @type {import('postcss-load-config').Config} */
const config = {
plugins: [postcssPresetPrimer()],
}

module.exports = config
```

```