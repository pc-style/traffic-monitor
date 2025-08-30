# Configuration

## Configure registry.json Schema

Defines the structure for your component registry. It requires a schema URL, registry name, homepage, and a list of component items. This file is essential for the shadcn-vue CLI to build your registry.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_0)

```json

```
{
"$schema": "https://shadcn-vue.com/schema/registry.json",
"name": "acme",
"homepage": "https://acme.com",
"items": [
// ...
]
}
```

```

---

## Configure Base Color

During the initialization process, you will be prompted to choose a base color for your project. This selection is saved in `components.json`.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_10](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_10)

```txt

```
Which color would you like to use as base color? › Neutral
```

```

---

## Nuxt Configuration for shadcn-vue

The `nuxt.config.ts` file configuration for integrating shadcn-vue. It includes adding the 'shadcn-nuxt' module and setting up the shadcn configuration options like prefix and component directory.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_7](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_7)

```typescript

```
export default defineNuxtConfig({
// ...
modules: ['shadcn-nuxt'],
shadcn: {
/**
* Prefix for all the imported component
*/
prefix: '',
/**
* Directory that the component lives in.
* @default "./components/ui"
*/
componentDir: './components/ui'
},
})
```

```

---

## shadcn-vue CLI Configuration Prompt

Example interaction with the `shadcn-vue` init CLI, showing a prompt for selecting a base color.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/vite.md#_snippet_8](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/vite.md#_snippet_8)

```txt

```
Which color would you like to use as base color? › Neutral
```

```

---

## shadcn-vue CLI init Configuration Prompts

When initializing a project, the `init` command prompts the user for configuration choices. These include selecting a UI style, a base color, and whether to use CSS variables for colors. These selections customize the project's appearance and setup.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/cli.md#_snippet_1](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/cli.md#_snippet_1)

```txt

```
Which style would you like to use? › New York
Which color would you like to use as base color? › Zinc
Do you want to use CSS variables for colors? › no / yes
```

```

---

## Tailwind CSS Configuration in Nuxt

Configuration for Tailwind CSS within a Nuxt project. This includes importing Tailwind CSS into the main CSS file and setting up the Vite plugin in `nuxt.config.ts`.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_3](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_3)

```typescript

```
@import "tailwindcss";
```

```
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
// ...
css: ['~/assets/css/tailwind.css'],
vite: {
plugins: [
tailwindcss(),
],
},
})
```

```