# Guides

## Serve Registry Locally

Starts the development server for your project, allowing you to preview and serve your component registry. The registry files will be accessible via a local URL, such as `http://localhost:3000/r/[NAME].json`.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_6](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_6)

```bash

```
npm run dev
```

```

---

## Vue Dashboard Example Import and Render

This snippet shows the standard Vue 3 script setup for importing a local component and rendering it. It imports the 'DashboardExample' component from a specified path and then includes it in the template.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/dashboard.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/dashboard.md#_snippet_0)

```vue

```
<script setup>
import DashboardExample from "@/examples/dashboard/Example.vue"
</script>

<DashboardExample />
```

```

---

## Run Development Server

Command to start the development server for the shadcn-vue.com website.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/contribution.md#_snippet_3](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/contribution.md#_snippet_3)

```bash

```
pnpm dev
```

```

---

## Run Nuxt Prepare Command

Command to run Nuxt Prepare, which generates the necessary `.nuxt` folder for a new Nuxt project. This is essential after initial setup or configuration changes.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_8](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_8)

```bash

```
npx nuxi prepare
```

```

---

## Initialize shadcn-vue Project

Run the `shadcn-vue` init command to set up your project. This command will prompt you with questions to configure the `components.json` file, including selecting a base color.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_9](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_9)

```bash

```
npx shadcn-vue@latest init
```

```

---

## Create Nuxt Project

Command to create a new Nuxt.js project using npm. This is the initial step for setting up a Nuxt application.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_0)

```bash

```
npm create nuxt@latest
```

```

---

## Add Custom Animations

This example shows how to define custom animations by specifying CSS keyframes and linking them to CSS variables in the theme. It includes a 'wiggle' animation example.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/examples.md#_snippet_13](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/examples.md#_snippet_13)

```json

```
{
"$schema": "https://shadcn-vue.com/schema/registry-item.json",
"name": "custom-component",
"type": "registry:component",
"cssVars": {
"theme": {
"--animate-wiggle": "wiggle 1s ease-in-out infinite"
}
},
"css": {
"@keyframes wiggle": {
"0%, 100%": {
"transform": "rotate(-3deg)"
},
"50%": {
"transform": "rotate(3deg)"
}
}
}
}
```

```

---

## Create Astro Project with Tailwind and Vue

Initializes a new Astro project using the `create-astro` CLI. It sets up the project with Tailwind CSS, installs dependencies, adds Vue support, and initializes a Git repository.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/astro.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/astro.md#_snippet_0)

```bash

```
npx create-astro@latest astro-app  --template with-tailwindcss --install --add vue --git
```

```

---

## Commit Convention Example

Demonstrates the standard commit message format used in the project, which includes a category, scope, and a descriptive message.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/contribution.md#_snippet_7](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/contribution.md#_snippet_7)

```conventional-commits

```
feat(components): add new prop to the avatar component
```

```

---

## Initialize shadcn-vue CLI

Runs the `shadcn-vue` initialization command to set up the project for using shadcn-vue components. This command typically configures necessary files and dependencies.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/astro.md#_snippet_2](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/astro.md#_snippet_2)

```bash

```
npx shadcn-vue@latest init
```

```

---

## Start Development Server (npm, pnpm, yarn, bun)

Starts the Nuxt.js development server, typically accessible at http://localhost:3000. This command is used for local development and hot-reloading.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/v4/README.md#_snippet_1](https://github.com/unovue/shadcn-vue/blob/dev/apps/v4/README.md#_snippet_1)

```bash

```
# npm
npm run dev
```

```
# pnpm
pnpm dev
```

```
# yarn
yarn dev
```

```
# bun
bun run dev
```

```

---

## Registry Import Path Convention

Illustrates the standard import path convention for registry components within a shadcn-vue project. Imports should always use the `@/registry` alias.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_9](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_9)

```javascript

```
import { HelloWorld } from "@/registry/new-york/hello-world/hello-world"
```

```

---

## Initialize Project with shadcn-vue CLI

The `init` command is used to set up a new project with shadcn-vue. It installs necessary dependencies, adds the `cn` utility, configures Tailwind CSS, and sets up CSS variables. Running this command prepares your project for component integration.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/cli.md#_snippet_0](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/cli.md#_snippet_0)

```bash

```
npx shadcn-vue@latest init
```

```

---

## Run shadcn-vue.com Website Locally

Command to start the development server for the shadcn-vue.com website. This allows contributors to preview the website and their changes locally.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/CONTRIBUTING.md#_snippet_2](https://github.com/unovue/shadcn-vue/blob/dev/CONTRIBUTING.md#_snippet_2)

```pnpm

```
pnpm dev
```

```

---

## Custom Block Definition

Defines a custom block registry item named 'Login01'. It includes a description, references other registry items as dependencies, and lists associated files with their paths, content placeholders, types, and targets.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/examples.md#_snippet_4](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/examples.md#_snippet_4)

```json

```
{
"$schema": "https://shadcn-vue.com/schema/registry-item.json",
"name": "Login01",
"type": "registry:block",
"description": "A simple login form.",
"registryDependencies": ["button", "card", "input", "label"],
"files": [
{
"path": "blocks/Login01/page.vue",
"content": "import { LoginForm } ...",
"type": "registry:page",
"target": "pages/login/index.vue"
},
{
"path": "blocks/Login01/components/LoginForm.vue",
"content": "...",
"type": "registry:component"
}
]
}
```

```