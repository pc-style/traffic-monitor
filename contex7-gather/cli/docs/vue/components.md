# Components

## <component> Dynamic Rendering Examples

Demonstrates how to use the <component> special element in Vue.js to render dynamic components or HTML elements based on data or conditions. Includes examples for Options API, Composition API with <script setup>, and rendering native HTML elements.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/built-in-special-elements.md#_snippet_0](https://github.com/vuejs/docs/blob/main/src/api/built-in-special-elements.md#_snippet_0)

```vue

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

```
<script setup>
import Foo from './Foo.vue'
import Bar from './Bar.vue'
</script>

<template>
<component :is="Math.random() > 0.5 ? Foo : Bar" />
</template>
```

```
<component :is="href ? 'a' : 'span'"></component>
```

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

```

---

## Component Word Order (Bad)

Shows an example of component naming where the word order is unnatural or less descriptive, making it difficult to understand the component's purpose and its relationship to other components.

**Source:** [https://github.com/vuejs/docs/blob/main/src/style-guide/rules-strongly-recommended.md#_snippet_7](https://github.com/vuejs/docs/blob/main/src/style-guide/rules-strongly-recommended.md#_snippet_7)

```vue

```
components/
|- ClearSearchButton.vue
|- ExcludeFromSearchInput.vue
|- LaunchOnStartupCheckbox.vue
|- RunSearchButton.vue
|- SearchInput.vue
|- TermsCheckbox.vue
```

```