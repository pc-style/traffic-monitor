# Api Reference

## Vue Global Build - Options API

Demonstrates using Vue.js from a CDN with the global build and the Options API. This setup is ideal for simple integrations or enhancing existing HTML without a build process. It exposes Vue's top-level APIs on the global `Vue` object.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_7](https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_7)

```html

```
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
const { createApp } = Vue

createApp({
data() {
return {
message: 'Hello Vue!'
}
}
}).mount('#app')
</script>
```

```

---

## Vue ES Module Build - Composition API

Demonstrates using Vue.js from a CDN with native ES modules and the Composition API. This example utilizes `import` syntax for Vue and Composition API features like `ref`. It's designed for modern browsers that support ES modules natively.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_10](https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_10)

```html

```
<div id="app">{{ message }}</div>

<script type="module">
import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
setup() {
const message = ref('Hello Vue!')
return {
message
}
}
}).mount('#app')
</script>
```

```

---

## Vue Global Build - Composition API

Illustrates using Vue.js from a CDN with the global build and the Composition API. This example shows how to leverage Composition API features like `ref` when not using a build step. All top-level APIs are accessed through the global `Vue` object.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_8](https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_8)

```html

```
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
const { createApp, ref } = Vue

createApp({
setup() {
const message = ref('Hello vue!')
return {
message
}
}
}).mount('#app')
</script>
```

```

---

## Vue.js Composition API with Import Map

Illustrates how to set up an import map for CDN-based Vue.js imports and utilize it within a Vue.js application using the Composition API. Features the HTML setup, import map, and the Vue script.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_12](https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_12)

```html

```
<script type="importmap">
{
"imports": {
"vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
}
}
</script>

<div id="app">{{ message }}</div>

<script type="module">
import { createApp, ref } from 'vue'

createApp({
setup() {
const message = ref('Hello Vue!')
return {
message
}
}
}).mount('#app')
</script>
```

```

---

## CSS Modules with Composition API Example

A complete example of using CSS Modules with the Composition API in a `<script setup>` block. It imports `useCssModule`, retrieves the classes, and applies them to an element.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/sfc-css-features.md#_snippet_10](https://github.com/vuejs/docs/blob/main/src/api/sfc-css-features.md#_snippet_10)

```vue

```
<script setup lang="ts">
import { useCssModule } from 'vue'

const classes = useCssModule()
</script>

<template>
<p :class="classes.red">red</p>
</template>

<style module>
.red {
color: red;
}
</style>
```

```

---

## v-for Key Example Data (Options API)

Example data structure for a list of todos used in the `v-for` key explanation within the Options API context.

**Source:** [https://github.com/vuejs/docs/blob/main/src/style-guide/rules-essential.md#_snippet_4](https://github.com/vuejs/docs/blob/main/src/style-guide/rules-essential.md#_snippet_4)

```js

```
data() {
return {
todos: [
{
id: 1,
text: 'Learn to use v-for'
},
{
id: 2,
text: 'Learn to use key'
}
]
}
}
```

```

---

## v-for Key Example Data (Composition API)

Example data structure for a list of todos using `ref` for reactivity, used in the `v-for` key explanation within the Composition API context.

**Source:** [https://github.com/vuejs/docs/blob/main/src/style-guide/rules-essential.md#_snippet_5](https://github.com/vuejs/docs/blob/main/src/style-guide/rules-essential.md#_snippet_5)

```js

```
const todos = ref([
{
id: 1,
text: 'Learn to use v-for'
},
{
id: 2,
text: 'Learn to use key'
}
])
```

```

---

## defineComponent - Composition API with Render Function

Example of using defineComponent with the Composition API and a render function. The setup function receives props and context, returning a render function.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/general.md#_snippet_5](https://github.com/vuejs/docs/blob/main/src/api/general.md#_snippet_5)

```javascript

```
import { ref, h } from 'vue'

const Comp = defineComponent(
(props) => {
// use Composition API here like in <script setup>
const count = ref(0)

return () => {
// render function or JSX
return h('div', count.value)
}
},
// extra options, e.g. declare props and emits
{
props: {
/* ... */
}
}
)
```

```

---

## Basic Vue Component with Composition API

A fundamental example of a Vue.js component utilizing the Composition API with the `<script setup>` syntax. It demonstrates reactive state management using `ref` and lifecycle hooks with `onMounted`.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/extras/composition-api-faq.md#_snippet_0](https://github.com/vuejs/docs/blob/main/src/guide/extras/composition-api-faq.md#_snippet_0)

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

## Vue Single-File Component (Composition API)

An example of a Vue Single-File Component using the Composition API with `<script setup>`. It demonstrates reactive state management with `ref` and encapsulates template and style.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/scaling-up/sfc.md#_snippet_1](https://github.com/vuejs/docs/blob/main/src/guide/scaling-up/sfc.md#_snippet_1)

```vue

```
<script setup>
import { ref } from 'vue'
const greeting = ref('Hello World!')
</script>

<template>
<p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
color: red;
font-weight: bold;
}
</style>
```

```

---

## Vue resolveComponent Example (Composition API)

Demonstrates how to use `resolveComponent` within the `setup()` function to dynamically render a component registered in the application. It imports `h` for creating VNodes and `resolveComponent` from Vue.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/render-function.md#_snippet_8](https://github.com/vuejs/docs/blob/main/src/api/render-function.md#_snippet_8)

```JavaScript

```
import { h, resolveComponent } from 'vue'

export default {
setup() {
const ButtonCounter = resolveComponent('ButtonCounter')

return () => {
return h(ButtonCounter)
}
}
}
```

```

---

## Vue Options API Component Example

A detailed example of a Vue.js component using the Options API. It showcases reactive data, methods for state mutation, and lifecycle hooks like `mounted`.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/introduction.md#_snippet_6](https://github.com/vuejs/docs/blob/main/src/guide/introduction.md#_snippet_6)

```vue

```
<script>
export default {
// Properties returned from data() become reactive state
// and will be exposed on `this`.
data() {
return {
count: 0
}
},

// Methods are functions that mutate state and trigger updates.
// They can be bound as event handlers in templates.
methods: {
increment() {
this.count++
}
},

// Lifecycle hooks are called at different stages
// of a component's lifecycle.
// This function will be called when the component is mounted.
mounted() {
console.log(`The initial count is ${this.count}.`)
}
}
</script>

<template>
<button @click="increment">Count is: {{ count }}</button>
</template>
```

```

---

## Vue.js Minimal Example (Options API)

A minimal Vue.js application demonstrating the Options API for managing component state and rendering a button that increments a counter.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/introduction.md#_snippet_0](https://github.com/vuejs/docs/blob/main/src/guide/introduction.md#_snippet_0)

```js

```
import { createApp } from 'vue'

createApp({
data() {
return {
count: 0
}
}
}).mount('#app')
```

```

---

## Spacing in Vue Options API

Demonstrates the use of empty lines between multi-line properties in the Options API for improved readability. Shows both 'bad' and 'good' examples for props and computed properties.

**Source:** [https://github.com/vuejs/docs/blob/main/src/style-guide/rules-recommended.md#_snippet_2](https://github.com/vuejs/docs/blob/main/src/style-guide/rules-recommended.md#_snippet_2)

```javascript

```
props: {
value: {
type: String,
required: true
},

focused: {
type: Boolean,
default: false
},

label: String,
icon: String
},

computed: {
formattedValue() {
// ...
},

inputClasses() {
// ...
}
}
```

```

---

## Managing Refs and Mutating Functions

Demonstrates declaring a ref and a function to mutate it within the `setup()` function, exposing both to the template.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/essentials/reactivity-fundamentals.md#_snippet_7](https://github.com/vuejs/docs/blob/main/src/guide/essentials/reactivity-fundamentals.md#_snippet_7)

```js

```
import { ref } from 'vue'

export default {
setup() {
const count = ref(0)

function increment() {
// .value is needed in JavaScript
count.value++
}

// don't forget to expose the function as well.
return {
count,
increment
}
}
}
```

```

---

## Spacing in Vue Composition API

Illustrates the application of empty lines between multi-line properties when using the Composition API for better code organization. Includes 'bad' and 'good' examples for props and computed properties.

**Source:** [https://github.com/vuejs/docs/blob/main/src/style-guide/rules-recommended.md#_snippet_3](https://github.com/vuejs/docs/blob/main/src/style-guide/rules-recommended.md#_snippet_3)

```javascript

```
defineProps({
value: {
type: String,
required: true
},

focused: {
type: Boolean,
default: false
},

label: String,
icon: String
})

const formattedValue = computed(() => {
// ...
})

const inputClasses = computed(() => {
// ...
})
```

```

---

## Vue.js Minimal Example (Composition API)

A minimal Vue.js application demonstrating the Composition API using `ref` for reactive state management and rendering a button that increments a counter.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/introduction.md#_snippet_1](https://github.com/vuejs/docs/blob/main/src/guide/introduction.md#_snippet_1)

```js

```
import { createApp, ref } from 'vue'

createApp({
setup() {
return {
count: ref(0)
}
}
}).mount('#app')
```

```

---

## Bundle Efficiency: Composition API vs. Options API

Explains how Composition API and `<script setup>` lead to smaller production bundles and less overhead. The template in `<script setup>` is compiled as an inlined function, allowing direct access to variables without an instance proxy, which also aids minification.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/extras/composition-api-faq.md#_snippet_3](https://github.com/vuejs/docs/blob/main/src/guide/extras/composition-api-faq.md#_snippet_3)

```vue

```
<!-- <script setup> Component -->
<script setup>
import { ref } from 'vue';

const count = ref(0);

function increment() {
count.value++;
}
</script>

<template>
<button @click="increment">
Count is: {{ count }}
</button>
</template>

<!--
Compiled template code can directly access 'count' and 'increment'
without 'this' or an instance proxy, leading to more efficient
minification and smaller bundle size.
-->
```

```