# Components

## Create a Vue Component Example

An example of a simple Vue component, `HelloWorld.vue`, which utilizes a `Button` component from a UI library. This component is intended to be part of the registry.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_1](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_1)

```vue

```
<script setup lang="ts">
import { Button } from "@/components/ui/button"
</script>

<template>
<Button>Hello World</Button>
</template>
```

```

---

## Vue.js Tasks Example Component Integration

Demonstrates importing and rendering the TasksExample component in a Vue.js application using the `<script setup>` syntax. This illustrates the basic integration pattern for reusable components within the shadcn-vue project.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/tasks.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/tasks.md#_snippet_0)

```Vue.js

```
<script setup>
import TasksExample from "@/examples/tasks/Example.vue"
</script>

<TasksExample />
```

```

---

## Add Components with shadcn-vue

Use the `add` command to include specific components into your project. For example, `npx shadcn-vue@latest add button` adds the Button component. Nuxt's auto-import feature handles the component import, allowing direct usage in your templates.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_11](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_11)

```bash

```
npx shadcn-vue@latest add button
```

```

---

## Authentication Example Vue Component

This snippet shows a standard Vue 3 SFC (Single File Component) using the `<script setup>` syntax. It imports a child component and renders it within the template. The primary language is Vue, with JavaScript used within the script block.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/authentication.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/authentication.md#_snippet_0)

```vue

```
<script setup>
import AuthenticationExample from "@/examples/authentication/Example.vue"
</script>

<AuthenticationExample />
```

```

---

## Vue.js Component with FormsExample

This snippet demonstrates a Vue 3 component using the `<script setup>` syntax. It imports the `FormsExample` component from a local path and renders it in the template. This is a standard way to compose UI elements in Vue applications.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/forms/index.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/forms/index.md#_snippet_0)

```vue

```
<script setup>
import FormsExample from "@/examples/forms/Example.vue"
</script>

<FormsExample />
```

```

---

## Add Component Definition to registry.json

Includes a component's metadata, such as its name, type, title, description, and associated files, within the `registry.json` file. This step registers the component for use by the CLI and registry consumers.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_7](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_7)

```json

```
{
"name": "hello-world",
"type": "registry:block",
"title": "Hello World",
"description": "A simple hello world component.",
"files": [
{
"path": "registry/new-york/HelloWorld/HelloWorld.vue",
"type": "registry:component"
}
]
}
```

```

---

## Vue Component Import and Usage

Demonstrates importing a Vue component (`MusicExample`) and rendering it within the application. This snippet shows basic component composition in Vue 3 with the Composition API (`<script setup>`).

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/music.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/music.md#_snippet_0)

```Vue.js

```
<script setup>
import MusicExample from "@/examples/music/Example.vue"
</script>

<MusicExample />
```

```