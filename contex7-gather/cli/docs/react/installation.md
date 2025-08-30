# Installation

This section covers the necessary steps to get your React project up and running.

## Installing Project Dependencies

To install all required npm dependencies for the react.dev website, navigate to the project directory and run the following commands:

```shell
cd react.dev
yarn
```

## Installing React and ReactDOM

To install the core React library and ReactDOM for web rendering, run:

```bash
npm install react react-dom
```

Alternatively, using Yarn:

```bash
yarn add --exact react@^19.0.0 react-dom@^19.0.0
```

Or with npm for React 19:

```bash
npm install --save-exact react@^19.0.0 react-dom@^19.0.0
```

## Installing React Compiler

To install the React Compiler Babel Plugin:

```bash
npm install -D babel-plugin-react-compiler@rc
```

Using Yarn:

```bash
yarn add -D babel-plugin-react-compiler@rc
```

Using pnpm:

```bash
pnpm install -D babel-plugin-react-compiler@rc
```

## Installing ESLint React Hooks Plugin RC

Install the `eslint-plugin-react-hooks@6.0.0-rc.1` for simplified ESLint setup:

```bash
npm install --save-dev eslint-plugin-react-hooks@6.0.0-rc.1
```

Using pnpm:

```bash
pnpm add --save-dev eslint-plugin-react-hooks@6.0.0-rc.1
```

Using Yarn:

```bash
yarn add --dev eslint-plugin-react-hooks@6.0.0-rc.1
```

## Installing VS Code Prettier Extension

Install the Prettier extension directly from the VS Code Quick Open palette:

```shell
ext install esbenp.prettier-vscode
```

## Creating a New React Project with Vite

Initialize a new React project using Vite:

```bash
npm create vite@latest my-app -- --template react
```
