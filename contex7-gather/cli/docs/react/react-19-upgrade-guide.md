# React 19 Upgrade Guide

This guide details the changes and steps required for upgrading to React 19.

## Installing React 19

**Using npm:**

```bash
npm install --save-exact react@^19.0.0 react-dom@^19.0.0
```

**Using Yarn:**

```bash
yarn add --exact react@^19.0.0 react-dom@^19.0.0
```

## Migrating `ReactDOM.render` to `ReactDOM.createRoot`

React 19 removes `ReactDOM.render`. Update your application's entry point to use `ReactDOM.createRoot`:

**Before:**

```javascript
// Before
import {render} from 'react-dom';
render(<App />, document.getElementById('root'));
```

**After:**

```javascript
// After
import {createRoot} from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

## Correctly Passing Options to `createRoot`

Ensure options are passed to `createRoot`, not `root.render()`:

```javascript
// 🚩 Wrong: root.render only takes one argument.
root.render(App, {onUncaughtError});

// ✅ Correct: pass options to createRoot.
const root = createRoot(container, {onUncaughtError}); 
root.render(<App />);
```
