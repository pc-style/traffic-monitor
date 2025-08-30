# Getting Started

## Install shadcn-vue CLI

Installs the shadcn-vue command-line interface. It's recommended to use the latest version, potentially the canary release, for access to the `build` command.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_4](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_4)

```bash

```
npm install shadcn-vue@latest
```

```

---

## Install Registry Item using CLI

Demonstrates how to use the shadcn-vue CLI to add a registry item from a specified URL. This command fetches and integrates the component into your project.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_8](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_8)

```bash

```
npx shadcn-vue@latest add http://localhost:3000/r/hello-world.json
```

```

---

## Vue.js Component Setup: Import and Render DisplayExample

This snippet demonstrates a standard Vue 3 `<script setup>` block. It imports the `DisplayExample` component from a local path and then renders it within the template. This pattern is common for organizing and composing Vue applications.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/forms/display.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/forms/display.md#_snippet_0)

```Vue.js

```
<script setup>
import DisplayExample from "@/examples/forms/Display.vue"
</script>

<DisplayExample />
```

```

---

## Install Dependencies with pnpm

Command to install all project dependencies using pnpm, leveraging its workspace capabilities.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/contribution.md#_snippet_2](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/contribution.md#_snippet_2)

```bash

```
pnpm install
```

```

---

## Install Block and Override Primitives

This example shows how to install a block from the shadcn-vue registry and simultaneously override default primitives like 'button', 'input', and 'label' with custom versions from a remote registry.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/examples.md#_snippet_5](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/examples.md#_snippet_5)

```json

```
{
"$schema": "https://shadcn-vue.com/schema/registry-item.json",
"name": "custom-login",
"type": "registry:block",
"registryDependencies": [
"Login01",
"https://example.com/r/button.json",
"https://example.com/r/input.json",
"https://example.com/r/label.json"
]
}
```

```

---

## Vue Component Setup and Rendering

This snippet demonstrates the standard Vue 3 `<script setup>` syntax for importing components and rendering them in the template. It imports a 'CardsExample' component and includes it in the component's template.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/cards.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/cards.md#_snippet_0)

```vue

```
<script setup>
import CardsExample from "@/examples/cards/Example.vue"
</script>

<CardsExample />
```

```

---

## Install shadcn-nuxt Module

Command to add the shadcn-nuxt module to a Nuxt project using the Nuxt CLI. This simplifies the integration of shadcn-vue components.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_4](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_4)

```bash

```
npx nuxi@latest module add shadcn-nuxt
```

```

---

## Install Vue Dev Tools

Instructions on installing the Vue DevTools browser extension for debugging Vue components. Links to the official Vue DevTools and browser-specific guides are provided.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/contribution.md#_snippet_14](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/contribution.md#_snippet_14)

```html

```
To easily inspect component props, attributes, events, and more, you can leverage the [`Vue DevTools`](https://devtools.vuejs.org/) extension for browsers.
```

```

---

## Vue Component Setup and Usage

This snippet shows a Vue 3 `<script setup>` block importing a child component and its usage in the template. It demonstrates basic component composition in Vue.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/playground.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/playground.md#_snippet_0)

```vue

```
<script setup>
import PlaygroundExample from "@/examples/playground/Example.vue"
</script>

<PlaygroundExample />
```

```

---

## Vue Setup with Component Import

This snippet demonstrates the setup of a Vue 3 SFC (Single File Component) using the `<script setup>` syntax. It imports a custom component, `AppearanceExample`, from a local path.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/forms/appearance.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/forms/appearance.md#_snippet_0)

```vue

```
<script setup>
import AppearanceExample from "@/examples/forms/Appearance.vue"
</script>
```

```

---

## Manual shadcn-vue Nuxt Module Setup

Provides the code for a custom Nuxt module to integrate shadcn-vue manually. It includes options for component prefix and directory, and adds components from 'vee-validate', 'vaul-vue', and 'reka-ui' if they are found.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_5](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_5)

```typescript

```
import {
defineNuxtModule,
addComponent,
addComponentsDir,
tryResolveModule,
} from 'nuxt/kit';

export interface ShadcnVueOptions {
/**
* Prefix for all the imported component
*/
prefix: string;

/**
* Directory that the component lives in.
* @default "~/components/ui"
*/
componentDir: string;
}

export default defineNuxtModule<ShadcnVueOptions>({
defaults: {
prefix: 'Ui',
componentDir: '~/components/ui',
},
meta: {
name: 'ShadcnVue',
configKey: 'shadcn',
version: '0.0.1',
compatibility: {
nuxt: '>=3.9.0',
bridge: false,
},
},
async setup({ componentDir, prefix }) {
const veeValidate = await tryResolveModule('vee-validate');
const vaulVue = await tryResolveModule('vaul-vue');

addComponentsDir(
{
path: componentDir,
extensions: ['.vue'],
prefix,
pathPrefix: false,
},
{
prepend: true,
}
);

if (veeValidate !== undefined) {
addComponent({
filePath: 'vee-validate',
export: 'Form',
name: `${prefix}Form`,
priority: 999,
});

addComponent({
filePath: 'vee-validate',
export: 'Field',
name: `${prefix}FormField`,
priority: 999,
});
}

if(vaulVue !== undefined) {
['DrawerPortal', 'DrawerTrigger', 'DrawerClose'].forEach((item) => {
addComponent({
filePath: 'vaul-vue',
export: item,
name: prefix + item,
priority: 999,
});
})
}

addComponent({
filePath: 'reka-ui',
export: 'PaginationRoot',
name: `${prefix}Pagination`,
priority: 999,
});

addComponent({
filePath: 'reka-ui',
export: 'PaginationList',
name: `${prefix}PaginationList`,
priority: 999,
});

addComponent({
filePath: 'reka-ui',
export: 'PaginationListItem',
name: `${prefix}PaginationListItem`,
priority: 999,
});
},
});

declare module '@nuxt/schema' {
interface NuxtConfig {
shadcn?: ShadcnVueOptions;
}
interface NuxtOptions {
shadcn?: ShadcnVueOptions;
}
}
```

```

---

## Install Project Dependencies with npm

Installs essential project dependencies using npm, including utility libraries like class-variance-authority, clsx, tailwind-merge, and icon/animation libraries.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/manual.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/manual.md#_snippet_0)

```bash

```
npm install class-variance-authority clsx tailwind-merge lucide-vue-next tw-animate-css
```

```

---

## Install shadcn-vue with Laravel

Guide for integrating shadcn-vue into a Laravel project. Details setup, configuration, and framework-specific considerations.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/tailwind-v4.md#_snippet_5](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/tailwind-v4.md#_snippet_5)

```svg

```
<svg
role="img"
viewBox="0 0 62 65"
fill="currentColor"
xmlns="http://www.w3.org/2000/svg"
class="w-10 h-10"
>
</svg>
```

```

---

## Install shadcn-vue with Astro

Guide for integrating shadcn-vue into an Astro project. Details setup steps and framework-specific configurations.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/tailwind-v4.md#_snippet_4](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/tailwind-v4.md#_snippet_4)

```svg

```
<svg
role="img"
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
class="w-10 h-10"
fill="currentColor"
>
<title>Astro</title>
<path
d="M16.074 16.86C15.354 17.476 13.917 17.895 12.262 17.895C10.23 17.895 8.527 17.263 8.075 16.412C7.914 16.9 7.877 17.458 7.877 17.814C7.877 17.814 7.771 19.564 8.988 20.782C8.988 20.15 9.501 19.637 10.133 19.637C11.216 19.637 11.215 20.582 11.214 21.349V21.418C11.214 22.582 11.925 23.579 12.937 24C12.7812 23.6794 12.7005 23.3275 12.701 22.971C12.701 21.861 13.353 21.448 14.111 20.968C14.713 20.585 15.383 20.161 15.844 19.308C16.0926 18.8493 16.2225 18.3357 16.222 17.814C16.2221 17.4903 16.1722 17.1685 16.074 16.86ZM15.551 0.6C15.747 0.844 15.847 1.172 16.047 1.829L20.415 16.176C18.7743 15.3246 17.0134 14.7284 15.193 14.408L12.35 4.8C12.3273 4.72337 12.2803 4.65616 12.2162 4.60844C12.152 4.56072 12.0742 4.53505 11.9943 4.53528C11.9143 4.5355 11.8366 4.56161 11.7727 4.60969C11.7089 4.65777 11.6623 4.72524 11.64 4.802L8.83 14.405C7.00149 14.724 5.23264 15.3213 3.585 16.176L7.974 1.827C8.174 1.171 8.274 0.843 8.471 0.6C8.64406 0.385433 8.86922 0.218799 9.125 0.116C9.415 0 9.757 0 10.443 0H13.578C14.264 0 14.608 0 14.898 0.117C15.1529 0.219851 15.3783 0.386105 15.551 0.6Z"
fill="currentColor"
/>
</svg>
```

```

---

## Install Dependencies (npm, pnpm, yarn, bun)

Installs project dependencies using the specified package manager. Ensure you have Node.js and the relevant package manager installed.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/v4/README.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/v4/README.md#_snippet_0)

```bash

```
# npm
npm install
```

```
# pnpm
pnpm install
```

```
# yarn
yarn install
```

```
# bun
bun install
```

```

---

## Install shadcn-vue with Vite

Guide for integrating shadcn-vue into a project using the Vite build tool. Includes setup instructions and configuration details.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/tailwind-v4.md#_snippet_2](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/tailwind-v4.md#_snippet_2)

```svg

```
<svg
role="img"
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
class="w-10 h-10"
fill="currentColor"
>
<title>Vite</title>
<path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z" />
</svg>
```

```

---

## Install shadcn-vue with Nuxt

Guide for integrating shadcn-vue into a Nuxt.js project. Covers setup, configuration, and framework-specific considerations.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/tailwind-v4.md#_snippet_3](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/tailwind-v4.md#_snippet_3)

```svg

```
<svg xmlns="http://www.w3.org/2000/svg"  class="w-12 h-12" viewBox="0 0 900 900" fill="none">
<title>Nuxt</title>
<path d="M504.908 750H839.476C850.103 750.001 860.542 747.229 869.745 741.963C878.948 736.696 886.589 729.121 891.9 719.999C897.211 710.876 900.005 700.529 900 689.997C899.995 679.465 897.193 669.12 891.873 660.002L667.187 274.289C661.876 265.169 654.237 257.595 645.036 252.329C635.835 247.064 625.398 244.291 614.773 244.291C604.149 244.291 593.711 247.064 584.511 252.329C575.31 257.595 567.67 265.169 562.36 274.289L504.908 372.979L392.581 179.993C387.266 170.874 379.623 163.301 370.42 158.036C361.216 152.772 350.777 150 340.151 150C329.525 150 319.086 152.772 309.883 158.036C300.679 163.301 293.036 170.874 287.721 179.993L8.12649 660.002C2.80743 669.12 0.00462935 679.465 5.72978e-06 689.997C-0.00461789 700.529 2.78909 710.876 8.10015 719.999C13.4112 729.121 21.0523 736.696 30.255 741.963C39.4576 747.229 49.8973 750.001 60.524 750H270.538C353.748 750 415.112 713.775 457.336 643.101L559.849 467.145L614.757 372.979L779.547 655.834H559.849L504.908 750ZM267.114 655.737L120.551 655.704L340.249 278.586L449.87 467.145L376.474 593.175C348.433 639.03 316.577 655.737 267.114 655.737Z" fill="currentColor"/>
</svg>
```

```

---

## Install shadcn-vue Select Component

Installs the shadcn-vue Select component using the shadcn-vue CLI. This command adds the necessary files to your project.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/select.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/select.md#_snippet_0)

```bash

```
npx shadcn-vue@latest add select
```

```

---

## Install Reka UI Dependency

Manual installation step requiring the 'reka-ui' package as a dependency for the Toggle Group component. This is part of the manual setup process.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/toggle-group.md#_snippet_1](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/toggle-group.md#_snippet_1)

```bash

```
npm install reka-ui
```

```

---

## Install Switch Manually

Manually installs the Switch component by first adding the 'reka-ui' dependency and then copying the component files. This method is useful for understanding the component's structure or for custom setups.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/switch.md#_snippet_1](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/switch.md#_snippet_1)

```bash

```
npm install reka-ui
```

```

---

## TypeScript Setup and URL Generation

This snippet demonstrates setting up TypeScript in a Vue component and generating URLs for GitHub commits and diffs based on a commit tag.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/contribution.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/contribution.md#_snippet_0)

```typescript

```
import { Button } from "@/registry/new-york/ui/button"

const latestSyncCommitTag = "06cc0cdf3d080555d26abbe6639f2d7f6341ec73"

const latestSyncCommitUrl = `https://github.com/shadcn-ui/ui/commit/${latestSyncCommitTag}`
const diffUrl = `https://github.com/shadcn-ui/ui/compare/${latestSyncCommitTag}...main`
```

```

---

## Install Resizable Component

Install the Resizable component using the shadcn-vue CLI for project integration.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/resizable.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/resizable.md#_snippet_0)

```bash

```
npx shadcn-vue@latest add resizable
```

```

---

## Vue Component Setup with Script

This snippet shows the setup of a Vue 3 Single File Component (SFC) using the `<script setup>` syntax. It imports a custom component, LandingPage, from a specified path.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/index.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/index.md#_snippet_0)

```Vue

```
<script setup>
import LandingPage from "../../.vitepress/theme/components/LandingPage.vue"
</script>
```

```

---

## Install shadcn-vue Input CLI

Installs the shadcn-vue Input component using the command-line interface. This is the recommended method for adding components to your project.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/input.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/input.md#_snippet_0)

```bash

```
npx shadcn-vue@latest add input
```

```

---

## Install TypeScript for Nuxt Error

Installs TypeScript as a development dependency to resolve a specific error ('ERROR: Cannot read properties of undefined (reading 'sys')') encountered during Nuxt project creation, as suggested by a GitHub issue.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_1](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_1)

```bash

```
npm install -D typescript
```

```

---

## Install Table Component

Install the shadcn-vue table component using the shadcn-vue CLI.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/table.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/table.md#_snippet_0)

```bash

```
npx shadcn-vue@latest add table
```

```

---

## Install Context Menu Component

Installs the context menu component using the shadcn-vue CLI. This command adds the necessary files to your project.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/context-menu.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/context-menu.md#_snippet_0)

```bash

```
npx shadcn-vue@latest add context-menu
```

```

---

## Install Project Dependencies

Command to install all necessary project dependencies using pnpm. This command should be run after cloning the repository to set up the development environment.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/CONTRIBUTING.md#_snippet_1](https://github.com/unovue/shadcn-vue/blob/dev/CONTRIBUTING.md#_snippet_1)

```pnpm

```
pnpm install
```

```

---

## Install Combobox Component

Installs the Combobox component using the shadcn-vue CLI. This command adds the necessary files to your project.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/combobox.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/combobox.md#_snippet_0)

```bash

```
npx shadcn-vue@latest add combobox

```

```

---

## Install Drawer Component

Installs the Drawer component using the shadcn-vue CLI. This command adds the necessary files to your project.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/drawer.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/drawer.md#_snippet_0)

```bash

```
npx shadcn-vue@latest add drawer
```

```

---

## Install Progress Dependency

Installs the 'reka-ui' dependency, which is a prerequisite for using the Progress component when installing manually. Ensure this is installed before copying component files.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/progress.md#_snippet_1](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/progress.md#_snippet_1)

```bash

```
npm install reka-ui
```

```

---

## Install Tooltip Component

Command to install the Tooltip component using the shadcn-vue CLI. This command adds the necessary files to your project.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/tooltip.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/tooltip.md#_snippet_0)

```bash

```
npx shadcn-vue@latest add tooltip
```

```

---

## Install shadcn-vue Sidebar Component

Command to install the sidebar component using npx. This command fetches and sets up the necessary files for the sidebar component within your shadcn-vue project.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#_snippet_0)

```bash

```
npx shadcn-vue@latest add sidebar
```

```

---

## Install Stepper Component

Installs the shadcn-vue stepper component using the `shadcn-vue` CLI. This command fetches and sets up the necessary files for the stepper UI.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/stepper.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/stepper.md#_snippet_0)

```bash

```
npx shadcn-vue@latest add stepper
```

```

---

## Install Tabs Component

Installs the Tabs component using the shadcn-vue CLI. This command adds the necessary files to your project.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/tabs.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/tabs.md#_snippet_0)

```bash

```
npx shadcn-vue@latest add tabs
```

```

---

## Install Switch via CLI

Installs the Switch component using the shadcn-vue CLI. This is the recommended method for adding components to your project.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/switch.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/switch.md#_snippet_0)

```bash

```
npx shadcn-vue@latest add switch
```

```

---

## Install Badge Component with CLI

Installs the Badge component into your project using the shadcn-vue CLI. This command fetches and sets up the necessary files for the component.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/badge.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/badge.md#_snippet_0)

```bash

```
npx shadcn-vue@latest add badge
```

```

---

## Install Aspect Ratio via CLI

Installs the Aspect Ratio component using the shadcn-vue CLI. This command adds the necessary files and configurations to your project.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/aspect-ratio.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/aspect-ratio.md#_snippet_0)

```bash

```
npx shadcn-vue@latest add aspect-ratio
```

```