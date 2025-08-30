# Getting Started

## Local Development Setup

Commands to install dependencies and start the local development server for the Vue.js documentation site. Requires Node.js v18+ and pnpm.

**Source:** [https://github.com/vuejs/docs/blob/main/README.md#_snippet_0](https://github.com/vuejs/docs/blob/main/README.md#_snippet_0)

```bash

```
pnpm i
pnpm run dev
```

```

---

## Install and Run Vue Project (npm, pnpm, yarn, bun)

Commands to navigate into the newly created project directory, install dependencies, and start the development server using different package managers.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_5](https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_5)

```sh

```
cd {{'<your-project-name>'}}
npm install
npm run dev
```

```
cd {{'<your-project-name>'}}
pnpm install
pnpm run dev
```

```
cd {{'<your-project-name>'}}
yarn
yarn dev
```

```
cd {{'<your-project-name>'}}
bun install
bun run dev
```

```

---

## ESLint Setup for Vue Projects

Integrate ESLint with `eslint-plugin-vue` for SFC-specific linting rules. This setup guide covers installation, configuration, IDE integration, and running ESLint during the build process and with git commits.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/scaling-up/tooling.md#_snippet_4](https://github.com/vuejs/docs/blob/main/src/guide/scaling-up/tooling.md#_snippet_4)

```bash

```
npm install -D eslint eslint-plugin-vue
# or
yarn add -D eslint eslint-plugin-vue

# Then configure ESLint (e.g., .eslintrc.js):
# module.exports = {
#   // ... other configs
#   plugins: [
#     'vue'
#   ],
#   extends: [
#     'plugin:vue/vue3-essential',
#     // ... other extends
#   ]
# }
```

```
# Add linting to package.json scripts:
# "scripts": {
#   "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix",
#   "build": "vue-build && npm run lint"
# }
```

```
# For git commit hooks with lint-staged:
npm install -D lint-staged
# Add to package.json:
# "lint-staged": {
#   "*.{vue,js,ts}": "eslint --fix"
# }
```

```

---

## Vue Composition API with <script setup> Example

A detailed example of a Vue.js component using the Composition API with the `<script setup>` syntax. It demonstrates reactive state using `ref` and the `onMounted` lifecycle hook.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/introduction.md#_snippet_7](https://github.com/vuejs/docs/blob/main/src/guide/introduction.md#_snippet_7)

```vue

```
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
count.value++
}

// lifecycle hooks
onMounted(() => {
console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
<button @click="increment">Count is: {{ count }}</button>
</template>
```

```

---

## Vuex State Management Basic Setup

Provides a foundational example of setting up Vuex for state management. It includes creating a store with state, mutations, and actions, and integrating it with a Vue application.

**Source:** [https://github.com/vuejs/docs/blob/main/src/tutorial/src/step-5/App/template.html#_snippet_6](https://github.com/vuejs/docs/blob/main/src/tutorial/src/step-5/App/template.html#_snippet_6)

```html

```
import { createStore } from 'vuex'

const store = createStore({
state() {
return {
count: 0
}
},
mutations: {
increment(state) {
state.count++
}
},
actions: {
incrementAsync({ commit }) {
setTimeout(() => {
commit('increment')
}, 1000)
}
}
})

export default store
```

```
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')
```

```
<template>
<p>{{ count }}</p>
<button @click="increment">Increment</button>
<button @click="incrementAsync">Increment Async</button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
setup() {
const store = useStore()
return {
count: computed(() => store.state.count),
increment: () => store.commit('increment'),
incrementAsync: () => store.dispatch('incrementAsync')
}
}
}
</script>
```

```

---

## Vuex State Management Basic Setup

Provides a foundational example of setting up Vuex for state management. It includes creating a store with state, mutations, and actions, and integrating it with a Vue application.

**Source:** [https://github.com/vuejs/docs/blob/main/src/tutorial/src/step-5/_hint/App/template.html#_snippet_6](https://github.com/vuejs/docs/blob/main/src/tutorial/src/step-5/_hint/App/template.html#_snippet_6)

```html

```
import { createStore } from 'vuex'

const store = createStore({
state() {
return {
count: 0
}
},
mutations: {
increment(state) {
state.count++
}
},
actions: {
incrementAsync({ commit }) {
setTimeout(() => {
commit('increment')
}, 1000)
}
}
})

export default store
```

```
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')
```

```
<template>
<p>{{ count }}</p>
<button @click="increment">Increment</button>
<button @click="incrementAsync">Increment Async</button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
setup() {
const store = useStore()
return {
count: computed(() => store.state.count),
increment: () => store.commit('increment'),
incrementAsync: () => store.dispatch('incrementAsync')
}
}
}
</script>
```

```

---

## Simplified Composition with `<script setup>`

An example using Vue's Single-File Components (SFC) with the `<script setup>` syntax, simplifying the declaration and usage of refs and functions.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/essentials/reactivity-fundamentals.md#_snippet_9](https://github.com/vuejs/docs/blob/main/src/guide/essentials/reactivity-fundamentals.md#_snippet_9)

```vue

```
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
count.value++
}
</script>

<template>
<button @click="increment">
{{ count }}
</button>
</template>
```

```

---

## Async Setup Hook Example

Demonstrates how a component's `setup()` hook can be made asynchronous using `async/await` to fetch data before rendering. This makes the component a suspensible dependency for `<Suspense>`.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/built-ins/suspense.md#_snippet_0](https://github.com/vuejs/docs/blob/main/src/guide/built-ins/suspense.md#_snippet_0)

```javascript

```
export default {
async setup() {
const res = await fetch(...)
const posts = await res.json()
return {
posts
}
}
}
```

```

---

## Test a Composable with Setup

An example of testing a composable that requires a host component context using the `withSetup` helper. It shows how to mock provide and perform assertions.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/scaling-up/testing.md#_snippet_21](https://github.com/vuejs/docs/blob/main/src/guide/scaling-up/testing.md#_snippet_21)

```js

```
import { withSetup } from './test-utils'
import { useFoo } from './foo'

test('useFoo', () => {
const [result, app] = withSetup(() => useFoo(123))
// mock provide for testing injections
app.provide(...)
// run assertions
expect(result.foo.value).toBe(1)
// trigger onUnmounted hook if needed
app.unmount()
})
```

```

---

## Vue Single-File Component (Composition API with <script setup>)

An example of a Vue.js Single-File Component (SFC) using the Composition API with the `<script setup>` syntax. It demonstrates reactive state with `ref` and lifecycle hooks like `onMounted`.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/introduction.md#_snippet_5](https://github.com/vuejs/docs/blob/main/src/guide/introduction.md#_snippet_5)

```vue

```
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
<button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
font-weight: bold;
}
</style>
```

```

---

## Basic Script Setup Usage

Demonstrates the fundamental usage of the <script setup> block in a Vue Single-File Component. Code within this block executes on component instance creation.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_0](https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_0)

```vue

```
<script setup>
console.log('hello script setup')
</script>
```

```

---

## Composition API: Inject (No Script Setup)

Provides an example of using the `inject` function outside of `<script setup>` in Vue's Composition API. It must be called synchronously within the `setup()` function.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/components/provide-inject.md#_snippet_10](https://github.com/vuejs/docs/blob/main/src/guide/components/provide-inject.md#_snippet_10)

```javascript

```
import { inject } from 'vue'

export default {
setup() {
const message = inject('message')
return { message }
}
}
```

```

---

## Vue Component Setup

Demonstrates the setup of a Vue.js Single File Component (SFC) using the `<script setup>` syntax. It imports a child component and renders it.

**Source:** [https://github.com/vuejs/docs/blob/main/src/ecosystem/themes.md#_snippet_0](https://github.com/vuejs/docs/blob/main/src/ecosystem/themes.md#_snippet_0)

```vue

```
<script setup>
import ThemePage from './themes/ThemePage.vue'
</script>

<ThemePage />
```

```

---

## Vue Component Setup

This snippet shows the basic setup for a Vue component using the `<script setup>` syntax. It imports a component and then renders it.

**Source:** [https://github.com/vuejs/docs/blob/main/src/developers/index.md#_snippet_0](https://github.com/vuejs/docs/blob/main/src/developers/index.md#_snippet_0)

```vue

```
<script setup>
import DeveloperLanding from './components/DeveloperLanding.vue'
</script>

<DeveloperLanding />
```

```

---

## Vue Component with setup()

Demonstrates a basic Vue component using the Composition API's `setup()` hook to manage reactive state (`count`) and expose it to the template and Options API hooks. It shows how `ref` values are automatically unwrapped in the template and `this` context.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_0](https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_0)

```vue

```
<script>
import { ref } from 'vue'

export default {
setup() {
const count = ref(0)

// expose to template and other options API hooks
return {
count
}
},

mounted() {
console.log(this.count) // 0
}
}
</script>

<template>
<button @click="count++">{{ count }}</button>
</template>
```

```

---

## Vue.js Basic Setup and Component Usage

This snippet demonstrates a basic Vue.js application setup using the `<script setup>` syntax. It imports a `Home` component and renders it. This is a common pattern for initializing Vue applications.

**Source:** [https://github.com/vuejs/docs/blob/main/src/index.md#_snippet_0](https://github.com/vuejs/docs/blob/main/src/index.md#_snippet_0)

```html

```
import { defineComponent } from 'vue';
import Home from './components/Home.vue';

export default defineComponent({
name: 'App',
components: {
Home
}
});
```

```
<template>
<div id="app">
<Home />
</div>
</template>

<script setup>
import Home from '@theme/components/Home.vue'
</script>

<style>
/* Add any global styles here */
</style>
```

```

---

## Setup Context in setup()

Demonstrates the usage of the `setup` context object, which provides access to `attrs`, `slots`, `emit`, and `expose`. It shows how to destructure the context and highlights that `attrs` and `slots` are not reactive and should be accessed directly.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_2](https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_2)

```javascript

```
export default {
setup(props, context) {
// Attributes (Non-reactive object, equivalent to $attrs)
console.log(context.attrs)

// Slots (Non-reactive object, equivalent to $slots)
console.log(context.slots)

// Emit events (Function, equivalent to $emit)
console.log(context.emit)

// Expose public properties (Function)
console.log(context.expose)
}
}
```

```
export default {
setup(props, { attrs, slots, emit, expose }) {
...
}
}
```

```

---

## Vue Component Setup

This snippet demonstrates the setup of a Vue.js component using the `<script setup>` syntax. It imports an 'ApiIndex' component, which is then rendered in the template. This is a common pattern for organizing and displaying API documentation within a Vue application.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/index.md#_snippet_0](https://github.com/vuejs/docs/blob/main/src/api/index.md#_snippet_0)

```vue

```
<script setup>
import ApiIndex from './ApiIndex.vue'
</script>

<ApiIndex />
```

```

---

## Vue Application Plugin Installation

Demonstrates how to install a Vue plugin using `app.use()`. Plugins can be functions or objects with an `install` method, which receives the application instance.

**Source:** [https://github.com/vuejs/docs/blob/main/src/glossary/index.md#_snippet_14](https://github.com/vuejs/docs/blob/main/src/glossary/index.md#_snippet_14)

```javascript

```
app.use(plugin)

// Plugin as an object with an install function
const myPlugin = {
install(app) {
// ...
}
}

// Plugin as a function
function myPluginFunction(app) {
// ...
}
```

```

---

## Basic Plugin Installation

Demonstrates the fundamental way to install a Vue.js plugin using `app.use()`. It shows importing `createApp` and the plugin, then applying the plugin to the app instance with optional configuration.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/reusability/plugins.md#_snippet_0](https://github.com/vuejs/docs/blob/main/src/guide/reusability/plugins.md#_snippet_0)

```js

```
import { createApp } from 'vue'

const app = createApp({})

app.use(myPlugin, {
/* optional options */
})
```

```

---

## Using Components within Script Setup

Demonstrates how to import and use child components directly as tags within the template when using <script setup>. Components are treated as variables, allowing for dynamic usage.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_3](https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_3)

```vue

```
<script setup>
import MyComponent from './MyComponent.vue'
</script>

<template>
<MyComponent />
</template>
```

```

---

## Plugin Installation with Options

Demonstrates how to pass configuration options to a Vue.js plugin during installation using `app.use()`. These options are then accessible within the plugin's `install` function.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/reusability/plugins.md#_snippet_4](https://github.com/vuejs/docs/blob/main/src/guide/reusability/plugins.md#_snippet_4)

```js

```
import i18nPlugin from './plugins/i18n'

app.use(i18nPlugin, {
greetings: {
hello: 'Bonjour!'
}
})
```

```

---

## Composition API: Setup Function Return

Illustrates the Composition API where the `setup()` function returns reactive state and methods. It defines a `count` ref and an `increment` function, making them available to the template.

**Source:** [https://github.com/vuejs/docs/blob/main/src/tutorial/src/step-4/description.md#_snippet_5](https://github.com/vuejs/docs/blob/main/src/tutorial/src/step-4/description.md#_snippet_5)

```js

```
setup() {
const count = ref(0)

function increment(e) {
// update component state
count.value++
}

return {
count,
increment
}
}
```

```

---

## Vue setup exposing methods with render function

Shows how to expose public methods from a Vue `setup` hook when returning a render function. The `expose()` function is used to make methods like `increment` available to parent components via template refs.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_6](https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_6)

```js

```
import { h, ref } from 'vue'

export default {
setup(props, { expose }) {
const count = ref(0)
const increment = () => ++count.value

expose({
increment
})

return () => h('div', count.value)
}
}
```

```

---

## Component Setup with Reactive State (Options API)

Illustrates how to declare reactive state within a Vue component's `setup()` function using `reactive()` and `ref()`, and return them to be available in the template.

**Source:** [https://github.com/vuejs/docs/blob/main/src/tutorial/src/step-2/description.md#_snippet_3](https://github.com/vuejs/docs/blob/main/src/tutorial/src/step-2/description.md#_snippet_3)

```javascript

```
setup() {
const counter = reactive({ count: 0 })
const message = ref('Hello World!')
return {
counter,
message
}
}
```

```

---

## Async Setup with `<script setup>`

Shows how using top-level `await` expressions within `<script setup>` automatically makes a component an async dependency, enabling it to be managed by `<Suspense>`.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/built-ins/suspense.md#_snippet_1](https://github.com/vuejs/docs/blob/main/src/guide/built-ins/suspense.md#_snippet_1)

```vue

```
<script setup>
const res = await fetch(...)
const posts = await res.json()
</script>

<template>
{{ posts }}
</template>
```

```

---

## Installing a Vue Plugin

Shows how to install a Vue plugin using `app.use()`. Plugins can extend Vue's functionality and are typically registered with optional configuration options.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/application.md#_snippet_5](https://github.com/vuejs/docs/blob/main/src/api/application.md#_snippet_5)

```js

```
import { createApp } from 'vue'
import MyPlugin from './plugins/MyPlugin'

const app = createApp({ /* ... */ })

app.use(MyPlugin)
```

```

---

## Combining <script setup> with Normal <script>

A normal <script> block can be used alongside <script setup> for options not expressible in <script setup> (like inheritAttrs, though defineOptions is preferred in 3.3+), named exports, or one-time side effects. Mixing is limited, and direct access from <script setup> to the normal <script> instance is discouraged.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_20](https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_20)

```vue

```
<script>
// normal <script>, executed in module scope (only once)
runSideEffectOnce()

// declare additional options
export default {
inheritAttrs: false,
customOptions: {}
}
</script>

<script setup>
// executed in setup() scope (for each instance)
</script>
```

```

---

## Using Top-level Await in <script setup>

Top-level await is supported within <script setup>, compiling to an async setup function. The awaited expression preserves component instance context. This requires Suspense for proper handling, which is currently experimental.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_21](https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_21)

```javascript

```
<script setup>
const post = await fetch(`/api/post/1`).then((r) => r.json())
</script>
```

```

---

## Vue SFC with TypeScript (Setup API)

Illustrates the usage of TypeScript with Vue's `<script setup>` syntax. It shows how to import `ref` and define reactive state with type safety.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/typescript/overview.md#_snippet_6](https://github.com/vuejs/docs/blob/main/src/guide/typescript/overview.md#_snippet_6)

```vue

```
<script setup lang="ts">
// TypeScript enabled
import { ref } from 'vue'

const count = ref(1)
</script>

<template>
<!-- type checking and auto-completion enabled -->
{{ count.toFixed(2) }}
</template>
```

```

---

## Accessing `emit` in Options API `setup` function

Explains how to access the `emit` function as a property of the setup context when not using `<script setup>` in the Options API.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/essentials/component-basics.md#_snippet_24](https://github.com/vuejs/docs/blob/main/src/guide/essentials/component-basics.md#_snippet_24)

```js

```
export default {
emits: ['enlarge-text'],
setup(props, ctx) {
// ctx.emit('enlarge-text') can be used here
}
}
```

```

---

## Accessing Props in setup()

Illustrates how to access props within the `setup()` function. It highlights that props are reactive but destructuring them can lead to loss of reactivity. It recommends using `props.xxx` or utility functions like `toRefs()` and `toRef()` for maintaining reactivity.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_1](https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_1)

```javascript

```
export default {
props: {
title: String
},
setup(props) {
console.log(props.title)
}
}
```

```
import { toRefs, toRef } from 'vue'

export default {
setup(props) {
// turn `props` into an object of refs, then destructure
const { title } = toRefs(props)
// `title` is a ref that tracks `props.title`
console.log(title.value)

// OR, turn a single property on `props` into a ref
const title = toRef(props, 'title')
}
}
```

```