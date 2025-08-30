# Typescript

## Vue Project Creation Prompts

Example interactive prompts shown during the create-vue process for configuring project features such as TypeScript, JSX support, Vue Router, Pinia, testing solutions (Vitest, E2E), ESLint, Prettier, and Vue DevTools.

**Source:** [https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_4](https://github.com/vuejs/docs/blob/main/src/guide/quick-start.md#_snippet_4)

```sh

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

```

---

## Vue defineProps & defineEmits Basic Usage

Demonstrates the basic usage of defineProps and defineEmits within a Vue `<script setup>` block. These are compiler macros automatically available and do not require import.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_7](https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_7)

```vue

```
<script setup>
const props = defineProps({
foo: String
})

const emit = defineEmits(['change', 'delete'])
// setup code
</script>
```

```

---

## Vue Generics with Multiple Parameters and Constraints

Illustrates declaring multiple generic type parameters with constraints and default types in Vue's script setup.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_24](https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_24)

```vue

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

```