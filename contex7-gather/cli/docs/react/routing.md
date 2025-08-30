# Routing

## Configure React Compiler for React Router with Vite

Sets up React Compiler within a React Router project that uses Vite. This involves installing `vite-plugin-babel` and configuring it in `vite.config.js` to apply `babel-plugin-react-compiler` to relevant files, ensuring compatibility with React Router's development setup.

**Source:** [https://github.com/reactjs/react.dev/blob/main/src/content/learn/react-compiler/installation.md#_snippet_4](https://github.com/reactjs/react.dev/blob/main/src/content/learn/react-compiler/installation.md#_snippet_4)

```js

```
npm install vite-plugin-babel
```

```
// vite.config.js
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import { reactRouter } from "@react-router/dev/vite";

const ReactCompilerConfig = { /* ... */ };

export default defineConfig({
plugins: [
reactRouter(),
babel({
filter: /\.[jt]sx?$/,
babelConfig: {
presets: ["@babel/preset-typescript"], // if you use TypeScript
plugins: [
["babel-plugin-react-compiler", ReactCompilerConfig]
]
}
})
]
});
```

```