# Composition Api

## Handling Reactivity with `ref`

Illustrates how to declare reactive state using Vue's `ref` API within <script setup>. Refs are automatically unwrapped when used in templates, simplifying state management.

**Source:** [https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_2](https://github.com/vuejs/docs/blob/main/src/api/sfc-script-setup.md#_snippet_2)

```vue

```
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
<button @click="count++">{{ count }}</button>
</template>
```

```