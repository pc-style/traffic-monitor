# Components

## Creating a Svelte Component for the Registry

This Svelte code snippet provides an example of a simple `<HelloWorld />` component. It imports a `Button` component and renders 'Hello World' inside it, serving as a basic component to be included in the registry.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_1)

```svelte

```
<script lang="ts">
import { Button } from "$lib/components/ui/button/index.js";
</script>

<Button>Hello World</Button>
```

```

---

## Adding a Component Definition to registry.json

This updated `registry.json` snippet shows how to add a component definition to the `items` array. Each item requires a `name`, `type`, `title`, `description`, and a `files` array, specifying the relative `path` and `type` for each component file.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_3](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_3)

```json

```
{
"$schema": "https://next.shadcn-svelte.com/schema/registry.json",
"name": "acme",
"homepage": "https://acme.com",
"items": [
{
"name": "hello-world",
"type": "registry:block",
"title": "Hello World",
"description": "A simple hello world component.",
"files": [
{
"path": "./src/lib/hello-world/hello-world.svelte",
"type": "registry:component"
}
]
}
]
}
```

```

---

## Adding Context Menu Component via CLI

Installs the Context Menu component using the `shadcn-svelte` CLI, simplifying the setup process by automatically adding necessary files and dependencies to your project.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/context-menu.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/context-menu.md#_snippet_0)

```Shell

```
npx shadcn-svelte add context-menu
```

```

---

## Example Configuration for shadcn-svelte components.json

This text snippet provides an example of the interactive prompts and typical responses when running the `shadcn-svelte@next init` command. It demonstrates how to configure the base color and define import aliases for various components, utilities, and hooks, which are then stored in the `components.json` file.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/vite.md#_snippet_3](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/vite.md#_snippet_3)

```Text

```
Which base color would you like to use? › Slate
Where is your global CSS file? (this file will be overwritten) › src/app.css
Configure the import alias for lib: › $lib
Configure the import alias for components: › $lib/components
Configure the import alias for utils: › $lib/utils
Configure the import alias for hooks: › $lib/hooks
Configure the import alias for ui: › $lib/components/ui
```

```

---

## Adding Aspect Ratio Component using CLI

Installs the Aspect Ratio component using the shadcn-svelte CLI, which automates the setup and integration into your project.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/aspect-ratio.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/aspect-ratio.md#_snippet_0)

```Shell

```
npx shadcn-svelte add aspect-ratio
```

```

---

## Example Svelte Component Imports (Svelte)

This Svelte snippet provides a contextual example of how internal imports are structured within a component in a custom registry. These import paths, such as `@/lib/registry/ui/button/index.js`, are later transformed by the `aliases` defined in `registry.json` when users install the component.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/registry-json.md#_snippet_5](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/registry-json.md#_snippet_5)

```svelte

```
<script lang="ts">
import { Button } from "@/lib/registry/ui/button/index.js";
import { cn } from "@/lib/utils.js";
</script>
```

```

---

## Configuring shadcn-svelte components.json

Displays the interactive questions asked by the `shadcn-svelte` init command. These prompts guide the user through setting up the base color, global CSS file path, and import aliases for various components, utilities, and hooks, customizing the library's integration.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/astro.md#_snippet_8](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/astro.md#_snippet_8)

```txt

```
Which base color would you like to use? › Slate
Where is your global CSS file? (this file will be overwritten) › src/app.css
Configure the import alias for lib: › $lib
Configure the import alias for components: › $lib/components
Configure the import alias for utils: › $lib/utils
Configure the import alias for hooks: › $lib/hooks
Configure the import alias for ui: › $lib/components/ui
```

```

---

## Adding the 'alert-dialog' shadcn-svelte Component (Bash)

This is an example usage of the `add` command, specifically adding the `alert-dialog` component to the project. It demonstrates how to specify a component name to be added, along with its dependencies.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/packages/cli/README.md#_snippet_2](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/packages/cli/README.md#_snippet_2)

```bash

```
npx shadcn-svelte add alert-dialog
```

```

---

## Adding Tooltip Component via CLI (shadcn-svelte)

This command utilizes the `shadcn-svelte` CLI to automatically add the Tooltip component's source files to your project, streamlining the setup process for UI components.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/tooltip.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/tooltip.md#_snippet_0)

```CLI

```
npx shadcn-svelte add tooltip
```

```

---

## Adding a Specific shadcn-svelte Component (Bash)

This command adds a specified `shadcn-svelte` component to your project. It automatically handles the installation of all required dependencies for the chosen component, streamlining the integration process.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/packages/cli/README.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/packages/cli/README.md#_snippet_1)

```bash

```
npx shadcn-svelte add [component]
```

```

---

## Importing Accordion Components in TypeScript

Demonstrates two ways to import the `shadcn-svelte` Accordion component and its sub-components from the `index.ts` file. This approach allows for tree-shaking by Rollup, optimizing bundle size by only including used components.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/index.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/index.md#_snippet_0)

```ts

```
import * as Accordion from '$lib/components/ui/accordion"
// or
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger
} from "$lib/components/ui/accordion"
```

```

---

## Listing Available shadcn-svelte Components (Bash)

Running the `add` command without any arguments displays a comprehensive list of all available `shadcn-svelte` components. This is useful for discovering components that can be added to the project.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/packages/cli/README.md#_snippet_3](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/packages/cli/README.md#_snippet_3)

```bash

```
npx shadcn-svelte add
```

```

---

## Basic Usage of Svelte Input Component

This snippet shows the minimal setup required to use the Input component in a Svelte application. It imports the component and renders a basic input field.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/input.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/input.md#_snippet_1)

```svelte

```
<script lang="ts">\n  import { Input } from "$lib/components/ui/input/index.js";\n</script>\n\n<Input />
```

```