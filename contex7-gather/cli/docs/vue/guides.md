# Guides

## Create Vue Application with npm

Scaffolds a new Vue.js application using npm. This command initiates the project creation process, guiding the user through setup options.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_0](https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_0)

```sh

```
$ npm create vue@latest
```

```

---

## Create Vue Application with pnpm

Scaffolds a new Vue.js application using pnpm. This command initiates the project creation process, guiding the user through setup options.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_1](https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_1)

```sh

```
$ pnpm create vue@latest
```

```

---

## Create Vue Application with Yarn

Scaffolds a new Vue.js application using Yarn. This command initiates the project creation process, guiding the user through setup options. Supports both Yarn v1+ and Yarn Modern (v2+).

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_2](https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_2)

```sh

```
# For Yarn (v1+)
$ yarn create vue

# For Yarn Modern (v2+)
$ yarn create vue@latest
```

```

---

## Create Vue Project with Yarn or Bun

Installs and executes the create-vue scaffolding tool using Yarn or Bun to initialize a new Vue.js project. This command prompts the user for optional features like TypeScript, Vue Router, Pinia, testing tools, ESLint, and Prettier.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_3](https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_3)

```sh

```
$ yarn dlx create-vue@latest
```

```
$ bun create vue@latest
```

```

---

## Contributing to Vue.js Core

Information on how to contribute code to the Vue.js core repository. It directs users to the contributing guide for details on pull request guidelines, build setup, and architecture.

**Source:** [https://github.com/vuejs/docs/blob/main/src/about/community-guide.md#_snippet_1](https://github.com/vuejs/docs/blob/main/src/about/community-guide.md#_snippet_1)

```vue

```
<!-- Vue.js Core Contributing Guide -->
<a href="https://github.com/vuejs/core/blob/main/.github/contributing.md">Vue core repository contributing guide</a>

<!-- RFC Repo for Feature Discussions -->
<a href="https://github.com/vuejs/rfcs/discussions">RFC repo for feature discussions</a>
```

```

---

## Running Basic SSR Example

Command to execute the basic Vue SSR example file (`example.js`) using Node.js.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/scaling-up/ssr.md#_snippet_4](https://github.com/vuejs/docs/blob/main/src/guide/scaling-up/ssr.md#_snippet_4)

```sh

```
node example.js
```

```

---

## Vue.js Community Resources

This section outlines various resources for staying informed and getting support within the Vue.js community. It includes links to official social media, RFC discussions, blogs, chat platforms, forums, and GitHub repositories.

**Source:** [https://github.com/vuejs/docs/blob/main/src/about/community-guide.md#_snippet_0](https://github.com/vuejs/docs/blob/main/src/about/community-guide.md#_snippet_0)

```vue

```
<!-- Official Twitter Account -->
<a href="https://twitter.com/vuejs">Follow our official Twitter account</a>

<!-- RFC Discussions -->
<a href="https://github.com/vuejs/rfcs">Follow the RFC discussions</a>

<!-- Official Blog -->
<a href="https://blog.vuejs.org/">Subscribe to the official blog</a>

<!-- Discord Chat -->
<a href="https://discord.com/invite/vue">Vue.js Discord Chat</a>

<!-- Forum -->
<a href="https://forum.vuejs.org/">Vue.js Forum</a>

<!-- GitHub Repositories -->
<a href="https://github.com/vuejs">Vue.js GitHub</a>
```

```

---

## Basic Render Function

Demonstrates returning a render function from the setup API in Vue.js. This function directly uses reactive state (`ref`) to render a div containing the state's value.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_4](https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_4)

```js

```
import { h, ref } from 'vue'

export default {
setup() {
const count = ref(0)
return () => h('div', count.value)
}
}
```

```

---

## Exposing Public Properties with expose()

Shows how to use the `expose` function from the setup context to selectively expose properties to parent components via template refs. It covers both closing off the instance and exposing specific reactive state.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_3](https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_3)

```javascript

```
export default {
setup(props, { expose }) {
// make the instance "closed" -
// i.e. do not expose anything to the parent
expose()

const publicCount = ref(0)
const privateCount = ref(0)
// selectively expose local state
expose({ count: publicCount })
}
}
```

```

---

## Render Function with Exposed Method

Shows how to expose a method (`increment`) from a component's setup function when also returning a render function. This allows parent components to call the exposed method via template refs.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_5](https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_5)

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

## defineModel() with Modifiers and Transformers

Illustrates how to handle modifiers used with the `v-model` directive when using `defineModel`. It shows how to destructure the return value of `defineModel` to access modifiers and how to use `get` and `set` transformer options to transform the model value based on the presence of modifiers.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_13](https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_13)

```js

```
const [modelValue, modelModifiers] = defineModel()

// corresponds to v-model.trim
if (modelModifiers.trim) {
// ...
}

const [modelValue, modelModifiers] = defineModel({
// get() omitted as it is not needed here
set(value) {
// if the .trim modifier is used, return trimmed value
if (modelModifiers.trim) {
return value.trim()
}
// otherwise, return the value as-is
return value
}
})
```

```

---

## Exposing Top-Level Bindings to Template

Shows how variables, functions, and imports declared at the top level of <script setup> are directly accessible within the component's template. This reduces boilerplate compared to the traditional script setup.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_1](https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_1)

```vue

```
<script setup>
// variable
const msg = 'Hello!'

// functions
function log() {
console.log(msg)
}
</script>

<template>
<button @click="log">{{ msg }}</button>
</template>
```

```
<script setup>
import { capitalize } from './helpers'
</script>

<template>
<div>{{ capitalize('hello') }}</div>
</template>
```

```

---

## Create Vue Application Instance

Initializes a new Vue application instance using the `createApp` function. This is the starting point for any Vue application.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/essentials/application.md#_snippet_0](https://github.com/vuejs/docs/blob/main/src/guide/essentials/application.md#_snippet_0)

```js

```
import { createApp } from 'vue'

const app = createApp({
/* root component options */
})
```

```