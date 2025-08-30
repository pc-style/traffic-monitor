========================
CODE SNIPPETS
========================
TITLE: Local Development Setup
DESCRIPTION: Commands to install dependencies and start the local development server for the Vue.js documentation site. Requires Node.js v18+ and pnpm.

SOURCE: https://github.com/vuejs/docs/blob/main/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
pnpm i
pnpm run dev
```

----------------------------------------

TITLE: Create Vue Application with npm
DESCRIPTION: Scaffolds a new Vue.js application using npm. This command initiates the project creation process, guiding the user through setup options.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_0

LANGUAGE: sh
CODE:
```
$ npm create vue@latest
```

----------------------------------------

TITLE: Install and Run Vue Project (npm, pnpm, yarn, bun)
DESCRIPTION: Commands to navigate into the newly created project directory, install dependencies, and start the development server using different package managers.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_5

LANGUAGE: sh
CODE:
```
cd {{'<your-project-name>'}}
npm install
npm run dev
```

LANGUAGE: sh
CODE:
```
cd {{'<your-project-name>'}}
pnpm install
pnpm run dev
```

LANGUAGE: sh
CODE:
```
cd {{'<your-project-name>'}}
yarn
yarn dev
```

LANGUAGE: sh
CODE:
```
cd {{'<your-project-name>'}}
bun install
bun run dev
```

----------------------------------------

TITLE: Navigation Links
DESCRIPTION: Provides links to different sections of the Vue.js documentation, encouraging users to continue learning through the guide, tutorial, or examples.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_16

LANGUAGE: html
CODE:
```
<div class="vt-box-container next-steps">
  <a class="vt-box" href="/guide/essentials/application.html">
    <p class="next-steps-link">Continue with the Guide</p>
    <p class="next-steps-caption">The guide walks you through every aspect of the framework in full detail.</p>
  </a>
  <a class="vt-box" href="/tutorial/">
    <p class="next-steps-link">Try the Tutorial</p>
    <p class="next-steps-caption">For those who prefer learning things hands-on.</p>
  </a>
  <a class="vt-box" href="/examples/">
    <p class="next-steps-link">Check out the Examples</p>
    <p class="next-steps-caption">Explore examples of core features and common UI tasks.</p>
  </a>
</div>
```

----------------------------------------

TITLE: Create Vue Application with pnpm
DESCRIPTION: Scaffolds a new Vue.js application using pnpm. This command initiates the project creation process, guiding the user through setup options.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_1

LANGUAGE: sh
CODE:
```
$ pnpm create vue@latest
```

----------------------------------------

TITLE: ESLint Setup for Vue Projects
DESCRIPTION: Integrate ESLint with `eslint-plugin-vue` for SFC-specific linting rules. This setup guide covers installation, configuration, IDE integration, and running ESLint during the build process and with git commits.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/scaling-up/tooling.md#_snippet_4

LANGUAGE: bash
CODE:
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

LANGUAGE: bash
CODE:
```
# Add linting to package.json scripts:
# "scripts": {
#   "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix",
#   "build": "vue-build && npm run lint"
# }
```

LANGUAGE: bash
CODE:
```
# For git commit hooks with lint-staged:
npm install -D lint-staged
# Add to package.json:
# "lint-staged": {
#   "*.{vue,js,ts}": "eslint --fix"
# }
```

----------------------------------------

TITLE: Vue Composition API with <script setup> Example
DESCRIPTION: A detailed example of a Vue.js component using the Composition API with the `<script setup>` syntax. It demonstrates reactive state using `ref` and the `onMounted` lifecycle hook.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/introduction.md#_snippet_7

LANGUAGE: vue
CODE:
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

----------------------------------------

TITLE: Vuex State Management Basic Setup
DESCRIPTION: Provides a foundational example of setting up Vuex for state management. It includes creating a store with state, mutations, and actions, and integrating it with a Vue application.

SOURCE: https://github.com/vuejs/docs/blob/main/src/tutorial/src/step-5/App/template.html#_snippet_6

LANGUAGE: javascript
CODE:
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

LANGUAGE: javascript
CODE:
```
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')
```

LANGUAGE: html
CODE:
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

----------------------------------------

TITLE: Vuex State Management Basic Setup
DESCRIPTION: Provides a foundational example of setting up Vuex for state management. It includes creating a store with state, mutations, and actions, and integrating it with a Vue application.

SOURCE: https://github.com/vuejs/docs/blob/main/src/tutorial/src/step-5/_hint/App/template.html#_snippet_6

LANGUAGE: javascript
CODE:
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

LANGUAGE: javascript
CODE:
```
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')
```

LANGUAGE: html
CODE:
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

----------------------------------------

TITLE: Simplified Composition with `<script setup>`
DESCRIPTION: An example using Vue's Single-File Components (SFC) with the `<script setup>` syntax, simplifying the declaration and usage of refs and functions.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/essentials/reactivity-fundamentals.md#_snippet_9

LANGUAGE: vue
CODE:
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

----------------------------------------

TITLE: Create Vue Application with Yarn
DESCRIPTION: Scaffolds a new Vue.js application using Yarn. This command initiates the project creation process, guiding the user through setup options. Supports both Yarn v1+ and Yarn Modern (v2+).

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_2

LANGUAGE: sh
CODE:
```
# For Yarn (v1+)
$ yarn create vue

# For Yarn Modern (v2+)
$ yarn create vue@latest
```

----------------------------------------

TITLE: Vue Global Build - Options API
DESCRIPTION: Demonstrates using Vue.js from a CDN with the global build and the Options API. This setup is ideal for simple integrations or enhancing existing HTML without a build process. It exposes Vue's top-level APIs on the global `Vue` object.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_7

LANGUAGE: html
CODE:
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

----------------------------------------

TITLE: Async Setup Hook Example
DESCRIPTION: Demonstrates how a component's `setup()` hook can be made asynchronous using `async/await` to fetch data before rendering. This makes the component a suspensible dependency for `<Suspense>`.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/built-ins/suspense.md#_snippet_0

LANGUAGE: javascript
CODE:
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

----------------------------------------

TITLE: Test a Composable with Setup
DESCRIPTION: An example of testing a composable that requires a host component context using the `withSetup` helper. It shows how to mock provide and perform assertions.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/scaling-up/testing.md#_snippet_21

LANGUAGE: js
CODE:
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

----------------------------------------

TITLE: Create Vue Project with Yarn or Bun
DESCRIPTION: Installs and executes the create-vue scaffolding tool using Yarn or Bun to initialize a new Vue.js project. This command prompts the user for optional features like TypeScript, Vue Router, Pinia, testing tools, ESLint, and Prettier.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_3

LANGUAGE: sh
CODE:
```
$ yarn dlx create-vue@latest
```

LANGUAGE: sh
CODE:
```
$ bun create vue@latest
```

----------------------------------------

TITLE: Vue ES Module Build - Composition API
DESCRIPTION: Demonstrates using Vue.js from a CDN with native ES modules and the Composition API. This example utilizes `import` syntax for Vue and Composition API features like `ref`. It's designed for modern browsers that support ES modules natively.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_10

LANGUAGE: html
CODE:
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

----------------------------------------

TITLE: Vue Single-File Component (Composition API with <script setup>)
DESCRIPTION: An example of a Vue.js Single-File Component (SFC) using the Composition API with the `<script setup>` syntax. It demonstrates reactive state with `ref` and lifecycle hooks like `onMounted`.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/introduction.md#_snippet_5

LANGUAGE: vue
CODE:
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

----------------------------------------

TITLE: Vue Project Creation Prompts
DESCRIPTION: Example interactive prompts shown during the create-vue process for configuring project features such as TypeScript, JSX support, Vue Router, Pinia, testing solutions (Vitest, E2E), ESLint, Prettier, and Vue DevTools.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_4

LANGUAGE: sh
CODE:
```
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

----------------------------------------

TITLE: Vue Global Build - Composition API
DESCRIPTION: Illustrates using Vue.js from a CDN with the global build and the Composition API. This example shows how to leverage Composition API features like `ref` when not using a build step. All top-level APIs are accessed through the global `Vue` object.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_8

LANGUAGE: html
CODE:
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

----------------------------------------

TITLE: Basic Script Setup Usage
DESCRIPTION: Demonstrates the fundamental usage of the <script setup> block in a Vue Single-File Component. Code within this block executes on component instance creation.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
console.log('hello script setup')
</script>
```

----------------------------------------

TITLE: Composition API: Inject (No Script Setup)
DESCRIPTION: Provides an example of using the `inject` function outside of `<script setup>` in Vue's Composition API. It must be called synchronously within the `setup()` function.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/components/provide-inject.md#_snippet_10

LANGUAGE: javascript
CODE:
```
import { inject } from 'vue'

export default {
  setup() {
    const message = inject('message')
    return { message }
  }
}
```

----------------------------------------

TITLE: Vue Component Setup
DESCRIPTION: Demonstrates the setup of a Vue.js Single File Component (SFC) using the `<script setup>` syntax. It imports a child component and renders it.

SOURCE: https://github.com/vuejs/docs/blob/main/src/ecosystem/themes.md#_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import ThemePage from './themes/ThemePage.vue'
</script>

<ThemePage />
```

----------------------------------------

TITLE: Vue.js Composition API with Import Map
DESCRIPTION: Illustrates how to set up an import map for CDN-based Vue.js imports and utilize it within a Vue.js application using the Composition API. Features the HTML setup, import map, and the Vue script.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_12

LANGUAGE: html
CODE:
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

----------------------------------------

TITLE: CSS Modules with Composition API Example
DESCRIPTION: A complete example of using CSS Modules with the Composition API in a `<script setup>` block. It imports `useCssModule`, retrieves the classes, and applies them to an element.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/sfc-css-features.md#_snippet_10

LANGUAGE: vue
CODE:
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

----------------------------------------

TITLE: Vue Component Setup
DESCRIPTION: This snippet shows the basic setup for a Vue component using the `<script setup>` syntax. It imports a component and then renders it.

SOURCE: https://github.com/vuejs/docs/blob/main/src/developers/index.md#_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import DeveloperLanding from './components/DeveloperLanding.vue'
</script>

<DeveloperLanding />
```

----------------------------------------

TITLE: v-for Key Example Data (Options API)
DESCRIPTION: Example data structure for a list of todos used in the `v-for` key explanation within the Options API context.

SOURCE: https://github.com/vuejs/docs/blob/main/src/style-guide/rules-essential.md#_snippet_4

LANGUAGE: js
CODE:
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

----------------------------------------

TITLE: Contributing to Vue.js Core
DESCRIPTION: Information on how to contribute code to the Vue.js core repository. It directs users to the contributing guide for details on pull request guidelines, build setup, and architecture.

SOURCE: https://github.com/vuejs/docs/blob/main/src/about/community-guide.md#_snippet_1

LANGUAGE: vue
CODE:
```
<!-- Vue.js Core Contributing Guide -->
<a href="https://github.com/vuejs/core/blob/main/.github/contributing.md">Vue core repository contributing guide</a>

<!-- RFC Repo for Feature Discussions -->
<a href="https://github.com/vuejs/rfcs/discussions">RFC repo for feature discussions</a>
```

----------------------------------------

TITLE: v-for Key Example Data (Composition API)
DESCRIPTION: Example data structure for a list of todos using `ref` for reactivity, used in the `v-for` key explanation within the Composition API context.

SOURCE: https://github.com/vuejs/docs/blob/main/src/style-guide/rules-essential.md#_snippet_5

LANGUAGE: js
CODE:
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

----------------------------------------

TITLE: Vue Component with setup()
DESCRIPTION: Demonstrates a basic Vue component using the Composition API's `setup()` hook to manage reactive state (`count`) and expose it to the template and Options API hooks. It shows how `ref` values are automatically unwrapped in the template and `this` context.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_0

LANGUAGE: vue
CODE:
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

----------------------------------------

TITLE: defineComponent - Composition API with Render Function
DESCRIPTION: Example of using defineComponent with the Composition API and a render function. The setup function receives props and context, returning a render function.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/general.md#_snippet_5

LANGUAGE: javascript
CODE:
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

----------------------------------------

TITLE: Basic Vue Component with Composition API
DESCRIPTION: A fundamental example of a Vue.js component utilizing the Composition API with the `<script setup>` syntax. It demonstrates reactive state management using `ref` and lifecycle hooks with `onMounted`.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/extras/composition-api-faq.md#_snippet_0

LANGUAGE: vue
CODE:
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

----------------------------------------

TITLE: Vue.js Basic Setup and Component Usage
DESCRIPTION: This snippet demonstrates a basic Vue.js application setup using the `<script setup>` syntax. It imports a `Home` component and renders it. This is a common pattern for initializing Vue applications.

SOURCE: https://github.com/vuejs/docs/blob/main/src/index.md#_snippet_0

LANGUAGE: javascript
CODE:
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

LANGUAGE: html
CODE:
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

----------------------------------------

TITLE: Vue Single-File Component (Composition API)
DESCRIPTION: An example of a Vue Single-File Component using the Composition API with `<script setup>`. It demonstrates reactive state management with `ref` and encapsulates template and style.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/scaling-up/sfc.md#_snippet_1

LANGUAGE: vue
CODE:
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

----------------------------------------

TITLE: Setup Context in setup()
DESCRIPTION: Demonstrates the usage of the `setup` context object, which provides access to `attrs`, `slots`, `emit`, and `expose`. It shows how to destructure the context and highlights that `attrs` and `slots` are not reactive and should be accessed directly.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_2

LANGUAGE: javascript
CODE:
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

LANGUAGE: javascript
CODE:
```
export default {
  setup(props, { attrs, slots, emit, expose }) {
    ...
  }
}
```

----------------------------------------

TITLE: Vue Component Setup
DESCRIPTION: This snippet demonstrates the setup of a Vue.js component using the `<script setup>` syntax. It imports an 'ApiIndex' component, which is then rendered in the template. This is a common pattern for organizing and displaying API documentation within a Vue application.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/index.md#_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import ApiIndex from './ApiIndex.vue'
</script>

<ApiIndex />
```

----------------------------------------

TITLE: Vue.js HTML-mode Configuration (Vite)
DESCRIPTION: This snippet shows how to configure Vite to use Vue in HTML-mode without a build step, by aliasing the 'vue' import to 'vue/dist/vue.esm-bundler.js'. This is useful for in-browser template compilation.

SOURCE: https://github.com/vuejs/docs/blob/main/src/tutorial/src/step-1/description.md#_snippet_0

LANGUAGE: javascript
CODE:
```
export default {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  }
}
```

----------------------------------------

TITLE: Vue Application Plugin Installation
DESCRIPTION: Demonstrates how to install a Vue plugin using `app.use()`. Plugins can be functions or objects with an `install` method, which receives the application instance.

SOURCE: https://github.com/vuejs/docs/blob/main/src/glossary/index.md#_snippet_14

LANGUAGE: javascript
CODE:
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

----------------------------------------

TITLE: Running Basic SSR Example
DESCRIPTION: Command to execute the basic Vue SSR example file (`example.js`) using Node.js.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/scaling-up/ssr.md#_snippet_4

LANGUAGE: sh
CODE:
```
node example.js
```

----------------------------------------

TITLE: Basic Plugin Installation
DESCRIPTION: Demonstrates the fundamental way to install a Vue.js plugin using `app.use()`. It shows importing `createApp` and the plugin, then applying the plugin to the app instance with optional configuration.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/reusability/plugins.md#_snippet_0

LANGUAGE: js
CODE:
```
import { createApp } from 'vue'

const app = createApp({})

app.use(myPlugin, {
  /* optional options */
})
```

----------------------------------------

TITLE: Vue defineProps & defineEmits Basic Usage
DESCRIPTION: Demonstrates the basic usage of defineProps and defineEmits within a Vue `<script setup>` block. These are compiler macros automatically available and do not require import.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_7

LANGUAGE: vue
CODE:
```
<script setup>
const props = defineProps({
  foo: String
})

const emit = defineEmits(['change', 'delete'])
// setup code
</script>
```

----------------------------------------

TITLE: Using Components within Script Setup
DESCRIPTION: Demonstrates how to import and use child components directly as tags within the template when using <script setup>. Components are treated as variables, allowing for dynamic usage.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_3

LANGUAGE: vue
CODE:
```
<script setup>
import MyComponent from './MyComponent.vue'
</script>

<template>
  <MyComponent />
</template>
```

----------------------------------------

TITLE: Build Vue Project for Production (npm, pnpm, yarn, bun)
DESCRIPTION: Commands to generate a production-ready build of the Vue.js application, typically outputting to a './dist' directory, using various package managers.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_6

LANGUAGE: sh
CODE:
```
npm run build
```

LANGUAGE: sh
CODE:
```
pnpm run build
```

LANGUAGE: sh
CODE:
```
yarn build
```

LANGUAGE: sh
CODE:
```
bun run build
```

----------------------------------------

TITLE: Plugin Installation with Options
DESCRIPTION: Demonstrates how to pass configuration options to a Vue.js plugin during installation using `app.use()`. These options are then accessible within the plugin's `install` function.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/reusability/plugins.md#_snippet_4

LANGUAGE: js
CODE:
```
import i18nPlugin from './plugins/i18n'

app.use(i18nPlugin, {
  greetings: {
    hello: 'Bonjour!'
  }
})
```

----------------------------------------

TITLE: Vue.js Community Resources
DESCRIPTION: This section outlines various resources for staying informed and getting support within the Vue.js community. It includes links to official social media, RFC discussions, blogs, chat platforms, forums, and GitHub repositories.

SOURCE: https://github.com/vuejs/docs/blob/main/src/about/community-guide.md#_snippet_0

LANGUAGE: vue
CODE:
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

----------------------------------------

TITLE: Vue resolveComponent Example (Composition API)
DESCRIPTION: Demonstrates how to use `resolveComponent` within the `setup()` function to dynamically render a component registered in the application. It imports `h` for creating VNodes and `resolveComponent` from Vue.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/render-function.md#_snippet_8

LANGUAGE: JavaScript
CODE:
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

----------------------------------------

TITLE: Composition API: Setup Function Return
DESCRIPTION: Illustrates the Composition API where the `setup()` function returns reactive state and methods. It defines a `count` ref and an `increment` function, making them available to the template.

SOURCE: https://github.com/vuejs/docs/blob/main/src/tutorial/src/step-4/description.md#_snippet_5

LANGUAGE: js
CODE:
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

----------------------------------------

TITLE: Basic Render Function
DESCRIPTION: Demonstrates returning a render function from the setup API in Vue.js. This function directly uses reactive state (`ref`) to render a div containing the state's value.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_4

LANGUAGE: js
CODE:
```
import { h, ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return () => h('div', count.value)
  }
}
```

----------------------------------------

TITLE: Vue setup exposing methods with render function
DESCRIPTION: Shows how to expose public methods from a Vue `setup` hook when returning a render function. The `expose()` function is used to make methods like `increment` available to parent components via template refs.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_6

LANGUAGE: js
CODE:
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

----------------------------------------

TITLE: Component Setup with Reactive State (Options API)
DESCRIPTION: Illustrates how to declare reactive state within a Vue component's `setup()` function using `reactive()` and `ref()`, and return them to be available in the template.

SOURCE: https://github.com/vuejs/docs/blob/main/src/tutorial/src/step-2/description.md#_snippet_3

LANGUAGE: javascript
CODE:
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

----------------------------------------

TITLE: <component> Dynamic Rendering Examples
DESCRIPTION: Demonstrates how to use the <component> special element in Vue.js to render dynamic components or HTML elements based on data or conditions. Includes examples for Options API, Composition API with <script setup>, and rendering native HTML elements.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/built-in-special-elements.md#_snippet_0

LANGUAGE: vue
CODE:
```
<script>
import Foo from './Foo.vue'
import Bar from './Bar.vue'

export default {
  components: { Foo, Bar },
  data() {
    return {
      view: 'Foo'
    }
  }
}
</script>

<template>
  <component :is="view" />
</template>
```

LANGUAGE: vue
CODE:
```
<script setup>
import Foo from './Foo.vue'
import Bar from './Bar.vue'
</script>

<template>
  <component :is="Math.random() > 0.5 ? Foo : Bar" />
</template>
```

LANGUAGE: vue-html
CODE:
```
<component :is="href ? 'a' : 'span'"></component>
```

LANGUAGE: vue
CODE:
```
<script>
import { Transition, TransitionGroup } from 'vue'

export default {
  components: {
    Transition,
    TransitionGroup
  }
}
</script>

<template>
  <component :is="isGroup ? 'TransitionGroup' : 'Transition'">
    ...
  </component>
</template>
```

LANGUAGE: vue
CODE:
```
<script setup>
import { ref } from 'vue'

const tag = ref('input')
const username = ref('')
</script>

<template>
  <!-- This won't work as 'input' is a native HTML element -->
  <component :is="tag" v-model="username" />
</template>
```

----------------------------------------

TITLE: Async Setup with `<script setup>`
DESCRIPTION: Shows how using top-level `await` expressions within `<script setup>` automatically makes a component an async dependency, enabling it to be managed by `<Suspense>`.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/built-ins/suspense.md#_snippet_1

LANGUAGE: vue
CODE:
```
<script setup>
const res = await fetch(...)
const posts = await res.json()
</script>

<template>
  {{ posts }}
</template>
```

----------------------------------------

TITLE: Handling Reactivity with `ref`
DESCRIPTION: Illustrates how to declare reactive state using Vue's `ref` API within <script setup>. Refs are automatically unwrapped when used in templates, simplifying state management.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_2

LANGUAGE: vue
CODE:
```
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
```

----------------------------------------

TITLE: Exposing Public Properties with expose()
DESCRIPTION: Shows how to use the `expose` function from the setup context to selectively expose properties to parent components via template refs. It covers both closing off the instance and exposing specific reactive state.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_3

LANGUAGE: javascript
CODE:
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

----------------------------------------

TITLE: Installing a Vue Plugin
DESCRIPTION: Shows how to install a Vue plugin using `app.use()`. Plugins can extend Vue's functionality and are typically registered with optional configuration options.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/application.md#_snippet_5

LANGUAGE: js
CODE:
```
import { createApp } from 'vue'
import MyPlugin from './plugins/MyPlugin'

const app = createApp({ /* ... */ })

app.use(MyPlugin)
```

----------------------------------------

TITLE: Combining <script setup> with Normal <script>
DESCRIPTION: A normal <script> block can be used alongside <script setup> for options not expressible in <script setup> (like inheritAttrs, though defineOptions is preferred in 3.3+), named exports, or one-time side effects. Mixing is limited, and direct access from <script setup> to the normal <script> instance is discouraged.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_20

LANGUAGE: vue
CODE:
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

----------------------------------------

TITLE: Render Function with Exposed Method
DESCRIPTION: Shows how to expose a method (`increment`) from a component's setup function when also returning a render function. This allows parent components to call the exposed method via template refs.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_5

LANGUAGE: js
CODE:
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

----------------------------------------

TITLE: Vue Options API Component Example
DESCRIPTION: A detailed example of a Vue.js component using the Options API. It showcases reactive data, methods for state mutation, and lifecycle hooks like `mounted`.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/introduction.md#_snippet_6

LANGUAGE: vue
CODE:
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

----------------------------------------

TITLE: Using Top-level Await in <script setup>
DESCRIPTION: Top-level await is supported within <script setup>, compiling to an async setup function. The awaited expression preserves component instance context. This requires Suspense for proper handling, which is currently experimental.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_21

LANGUAGE: javascript
CODE:
```
<script setup>
const post = await fetch(`/api/post/1`).then((r) => r.json())
</script>
```

----------------------------------------

TITLE: defineModel() with Modifiers and Transformers
DESCRIPTION: Illustrates how to handle modifiers used with the `v-model` directive when using `defineModel`. It shows how to destructure the return value of `defineModel` to access modifiers and how to use `get` and `set` transformer options to transform the model value based on the presence of modifiers.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_13

LANGUAGE: js
CODE:
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

----------------------------------------

TITLE: Component Word Order (Bad)
DESCRIPTION: Shows an example of component naming where the word order is unnatural or less descriptive, making it difficult to understand the component's purpose and its relationship to other components.

SOURCE: https://github.com/vuejs/docs/blob/main/src/style-guide/rules-strongly-recommended.md#_snippet_7

LANGUAGE: vue
CODE:
```
components/
|- ClearSearchButton.vue
|- ExcludeFromSearchInput.vue
|- LaunchOnStartupCheckbox.vue
|- RunSearchButton.vue
|- SearchInput.vue
|- TermsCheckbox.vue
```

----------------------------------------

TITLE: Vue.js Minimal Example (Options API)
DESCRIPTION: A minimal Vue.js application demonstrating the Options API for managing component state and rendering a button that increments a counter.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/introduction.md#_snippet_0

LANGUAGE: js
CODE:
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

----------------------------------------

TITLE: Spacing in Vue Options API
DESCRIPTION: Demonstrates the use of empty lines between multi-line properties in the Options API for improved readability. Shows both 'bad' and 'good' examples for props and computed properties.

SOURCE: https://github.com/vuejs/docs/blob/main/src/style-guide/rules-recommended.md#_snippet_2

LANGUAGE: javascript
CODE:
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

----------------------------------------

TITLE: Managing Refs and Mutating Functions
DESCRIPTION: Demonstrates declaring a ref and a function to mutate it within the `setup()` function, exposing both to the template.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/essentials/reactivity-fundamentals.md#_snippet_7

LANGUAGE: js
CODE:
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

----------------------------------------

TITLE: Spacing in Vue Composition API
DESCRIPTION: Illustrates the application of empty lines between multi-line properties when using the Composition API for better code organization. Includes 'bad' and 'good' examples for props and computed properties.

SOURCE: https://github.com/vuejs/docs/blob/main/src/style-guide/rules-recommended.md#_snippet_3

LANGUAGE: javascript
CODE:
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

----------------------------------------

TITLE: Exposing Top-Level Bindings to Template
DESCRIPTION: Shows how variables, functions, and imports declared at the top level of <script setup> are directly accessible within the component's template. This reduces boilerplate compared to the traditional script setup.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_1

LANGUAGE: vue
CODE:
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

LANGUAGE: vue
CODE:
```
<script setup>
import { capitalize } from './helpers'
</script>

<template>
  <div>{{ capitalize('hello') }}</div>
</template>
```

----------------------------------------

TITLE: Vue Generics with Multiple Parameters and Constraints
DESCRIPTION: Illustrates declaring multiple generic type parameters with constraints and default types in Vue's script setup.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_24

LANGUAGE: vue
CODE:
```
<script
  setup
  lang="ts"
  generic="T extends string | number, U extends Item"
>
import type { Item } from './types'
defineProps({
  id: T,
  list: Array<U>
})
</script>
```

----------------------------------------

TITLE: Vue SFC with TypeScript (Setup API)
DESCRIPTION: Illustrates the usage of TypeScript with Vue's `<script setup>` syntax. It shows how to import `ref` and define reactive state with type safety.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/typescript/overview.md#_snippet_6

LANGUAGE: vue
CODE:
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

----------------------------------------

TITLE: Vue.js Minimal Example (Composition API)
DESCRIPTION: A minimal Vue.js application demonstrating the Composition API using `ref` for reactive state management and rendering a button that increments a counter.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/introduction.md#_snippet_1

LANGUAGE: js
CODE:
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

----------------------------------------

TITLE: Bundle Efficiency: Composition API vs. Options API
DESCRIPTION: Explains how Composition API and `<script setup>` lead to smaller production bundles and less overhead. The template in `<script setup>` is compiled as an inlined function, allowing direct access to variables without an instance proxy, which also aids minification.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/extras/composition-api-faq.md#_snippet_3

LANGUAGE: vue
CODE:
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

----------------------------------------

TITLE: Accessing `emit` in Options API `setup` function
DESCRIPTION: Explains how to access the `emit` function as a property of the setup context when not using `<script setup>` in the Options API.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/essentials/component-basics.md#_snippet_24

LANGUAGE: js
CODE:
```
export default {
  emits: ['enlarge-text'],
  setup(props, ctx) {
    // ctx.emit('enlarge-text') can be used here
  }
}
```

----------------------------------------

TITLE: Create Vue Application Instance
DESCRIPTION: Initializes a new Vue application instance using the `createApp` function. This is the starting point for any Vue application.

SOURCE: https://github.com/vuejs/docs/blob/main/src/guide/essentials/application.md#_snippet_0

LANGUAGE: js
CODE:
```
import { createApp } from 'vue'

const app = createApp({
  /* root component options */
})
```

----------------------------------------

TITLE: Accessing Props in setup()
DESCRIPTION: Illustrates how to access props within the `setup()` function. It highlights that props are reactive but destructuring them can lead to loss of reactivity. It recommends using `props.xxx` or utility functions like `toRefs()` and `toRef()` for maintaining reactivity.

SOURCE: https://github.com/vuejs/docs/blob/main/src/api/composition-api-setup.md#_snippet_1

LANGUAGE: javascript
CODE:
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

LANGUAGE: javascript
CODE:
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