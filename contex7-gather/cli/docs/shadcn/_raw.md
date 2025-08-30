========================
CODE SNIPPETS
========================
TITLE: Install shadcn-vue CLI
DESCRIPTION: Installs the shadcn-vue command-line interface. It's recommended to use the latest version, potentially the canary release, for access to the `build` command.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_4

LANGUAGE: bash
CODE:
```
npm install shadcn-vue@latest
```

----------------------------------------

TITLE: Install Registry Item using CLI
DESCRIPTION: Demonstrates how to use the shadcn-vue CLI to add a registry item from a specified URL. This command fetches and integrates the component into your project.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_8

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add http://localhost:3000/r/hello-world.json
```

----------------------------------------

TITLE: Create a Vue Component Example
DESCRIPTION: An example of a simple Vue component, `HelloWorld.vue`, which utilizes a `Button` component from a UI library. This component is intended to be part of the registry.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_1

LANGUAGE: vue
CODE:
```
<script setup lang="ts">
import { Button } from "@/components/ui/button"
</script>

<template>
  <Button>Hello World</Button>
</template>
```

----------------------------------------

TITLE: Serve Registry Locally
DESCRIPTION: Starts the development server for your project, allowing you to preview and serve your component registry. The registry files will be accessible via a local URL, such as `http://localhost:3000/r/[NAME].json`.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_6

LANGUAGE: bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Vue Dashboard Example Import and Render
DESCRIPTION: This snippet shows the standard Vue 3 script setup for importing a local component and rendering it. It imports the 'DashboardExample' component from a specified path and then includes it in the template.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/dashboard.md#_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import DashboardExample from "@/examples/dashboard/Example.vue"
</script>

<DashboardExample />
```

----------------------------------------

TITLE: Run Development Server
DESCRIPTION: Command to start the development server for the shadcn-vue.com website.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/contribution.md#_snippet_3

LANGUAGE: bash
CODE:
```
pnpm dev
```

----------------------------------------

TITLE: Run Nuxt Prepare Command
DESCRIPTION: Command to run Nuxt Prepare, which generates the necessary `.nuxt` folder for a new Nuxt project. This is essential after initial setup or configuration changes.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_8

LANGUAGE: bash
CODE:
```
npx nuxi prepare
```

----------------------------------------

TITLE: Vue.js Component Setup: Import and Render DisplayExample
DESCRIPTION: This snippet demonstrates a standard Vue 3 `<script setup>` block. It imports the `DisplayExample` component from a local path and then renders it within the template. This pattern is common for organizing and composing Vue applications.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/forms/display.md#_snippet_0

LANGUAGE: Vue.js
CODE:
```
<script setup>
import DisplayExample from "@/examples/forms/Display.vue"
</script>

<DisplayExample />
```

----------------------------------------

TITLE: Install Dependencies with pnpm
DESCRIPTION: Command to install all project dependencies using pnpm, leveraging its workspace capabilities.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/contribution.md#_snippet_2

LANGUAGE: bash
CODE:
```
pnpm install
```

----------------------------------------

TITLE: Install Block and Override Primitives
DESCRIPTION: This example shows how to install a block from the shadcn-vue registry and simultaneously override default primitives like 'button', 'input', and 'label' with custom versions from a remote registry.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/examples.md#_snippet_5

LANGUAGE: json
CODE:
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

----------------------------------------

TITLE: Initialize shadcn-vue Project
DESCRIPTION: Run the `shadcn-vue` init command to set up your project. This command will prompt you with questions to configure the `components.json` file, including selecting a base color.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_9

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest init
```

----------------------------------------

TITLE: Vue Component Setup and Rendering
DESCRIPTION: This snippet demonstrates the standard Vue 3 `<script setup>` syntax for importing components and rendering them in the template. It imports a 'CardsExample' component and includes it in the component's template.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/cards.md#_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import CardsExample from "@/examples/cards/Example.vue"
</script>

<CardsExample />
```

----------------------------------------

TITLE: Create Nuxt Project
DESCRIPTION: Command to create a new Nuxt.js project using npm. This is the initial step for setting up a Nuxt application.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm create nuxt@latest
```

----------------------------------------

TITLE: Vue.js Tasks Example Component Integration
DESCRIPTION: Demonstrates importing and rendering the TasksExample component in a Vue.js application using the `<script setup>` syntax. This illustrates the basic integration pattern for reusable components within the shadcn-vue project.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/tasks.md#_snippet_0

LANGUAGE: Vue.js
CODE:
```
<script setup>
import TasksExample from "@/examples/tasks/Example.vue"
</script>

<TasksExample />
```

----------------------------------------

TITLE: Run Registry Build Script
DESCRIPTION: Executes the `registry:build` script defined in your `package.json`. This command processes your components and `registry.json` to create the final registry output, typically in the `public/r` directory.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_5

LANGUAGE: bash
CODE:
```
npm run registry:build
```

----------------------------------------

TITLE: Install shadcn-nuxt Module
DESCRIPTION: Command to add the shadcn-nuxt module to a Nuxt project using the Nuxt CLI. This simplifies the integration of shadcn-vue components.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_4

LANGUAGE: bash
CODE:
```
npx nuxi@latest module add shadcn-nuxt
```

----------------------------------------

TITLE: Install Vue Dev Tools
DESCRIPTION: Instructions on installing the Vue DevTools browser extension for debugging Vue components. Links to the official Vue DevTools and browser-specific guides are provided.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/contribution.md#_snippet_14

LANGUAGE: html
CODE:
```
To easily inspect component props, attributes, events, and more, you can leverage the [`Vue DevTools`](https://devtools.vuejs.org/) extension for browsers.
```

----------------------------------------

TITLE: Vue Component Setup and Usage
DESCRIPTION: This snippet shows a Vue 3 `<script setup>` block importing a child component and its usage in the template. It demonstrates basic component composition in Vue.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/playground.md#_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import PlaygroundExample from "@/examples/playground/Example.vue"
</script>

<PlaygroundExample />
```

----------------------------------------

TITLE: Vue Setup with Component Import
DESCRIPTION: This snippet demonstrates the setup of a Vue 3 SFC (Single File Component) using the `<script setup>` syntax. It imports a custom component, `AppearanceExample`, from a local path.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/forms/appearance.md#_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import AppearanceExample from "@/examples/forms/Appearance.vue"
</script>
```

----------------------------------------

TITLE: Manual shadcn-vue Nuxt Module Setup
DESCRIPTION: Provides the code for a custom Nuxt module to integrate shadcn-vue manually. It includes options for component prefix and directory, and adds components from 'vee-validate', 'vaul-vue', and 'reka-ui' if they are found.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_5

LANGUAGE: typescript
CODE:
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

----------------------------------------

TITLE: Install Project Dependencies with npm
DESCRIPTION: Installs essential project dependencies using npm, including utility libraries like class-variance-authority, clsx, tailwind-merge, and icon/animation libraries.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/manual.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm install class-variance-authority clsx tailwind-merge lucide-vue-next tw-animate-css
```

----------------------------------------

TITLE: Install shadcn-vue with Laravel
DESCRIPTION: Guide for integrating shadcn-vue into a Laravel project. Details setup, configuration, and framework-specific considerations.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/tailwind-v4.md#_snippet_5

LANGUAGE: svg
CODE:
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

----------------------------------------

TITLE: Install shadcn-vue with Astro
DESCRIPTION: Guide for integrating shadcn-vue into an Astro project. Details setup steps and framework-specific configurations.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/tailwind-v4.md#_snippet_4

LANGUAGE: svg
CODE:
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

----------------------------------------

TITLE: Install Dependencies (npm, pnpm, yarn, bun)
DESCRIPTION: Installs project dependencies using the specified package manager. Ensure you have Node.js and the relevant package manager installed.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/v4/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
# npm
npm install
```

LANGUAGE: bash
CODE:
```
# pnpm
pnpm install
```

LANGUAGE: bash
CODE:
```
# yarn
yarn install
```

LANGUAGE: bash
CODE:
```
# bun
bun install
```

----------------------------------------

TITLE: Add Components with shadcn-vue
DESCRIPTION: Use the `add` command to include specific components into your project. For example, `npx shadcn-vue@latest add button` adds the Button component. Nuxt's auto-import feature handles the component import, allowing direct usage in your templates.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_11

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add button
```

----------------------------------------

TITLE: Install shadcn-vue with Vite
DESCRIPTION: Guide for integrating shadcn-vue into a project using the Vite build tool. Includes setup instructions and configuration details.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/tailwind-v4.md#_snippet_2

LANGUAGE: svg
CODE:
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

----------------------------------------

TITLE: Configure registry.json Schema
DESCRIPTION: Defines the structure for your component registry. It requires a schema URL, registry name, homepage, and a list of component items. This file is essential for the shadcn-vue CLI to build your registry.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_0

LANGUAGE: json
CODE:
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

----------------------------------------

TITLE: Authentication Example Vue Component
DESCRIPTION: This snippet shows a standard Vue 3 SFC (Single File Component) using the `<script setup>` syntax. It imports a child component and renders it within the template. The primary language is Vue, with JavaScript used within the script block.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/authentication.md#_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import AuthenticationExample from "@/examples/authentication/Example.vue"
</script>

<AuthenticationExample />
```

----------------------------------------

TITLE: Install shadcn-vue with Nuxt
DESCRIPTION: Guide for integrating shadcn-vue into a Nuxt.js project. Covers setup, configuration, and framework-specific considerations.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/tailwind-v4.md#_snippet_3

LANGUAGE: svg
CODE:
```
<svg xmlns="http://www.w3.org/2000/svg"  class="w-12 h-12" viewBox="0 0 900 900" fill="none">
    <title>Nuxt</title>
    <path d="M504.908 750H839.476C850.103 750.001 860.542 747.229 869.745 741.963C878.948 736.696 886.589 729.121 891.9 719.999C897.211 710.876 900.005 700.529 900 689.997C899.995 679.465 897.193 669.12 891.873 660.002L667.187 274.289C661.876 265.169 654.237 257.595 645.036 252.329C635.835 247.064 625.398 244.291 614.773 244.291C604.149 244.291 593.711 247.064 584.511 252.329C575.31 257.595 567.67 265.169 562.36 274.289L504.908 372.979L392.581 179.993C387.266 170.874 379.623 163.301 370.42 158.036C361.216 152.772 350.777 150 340.151 150C329.525 150 319.086 152.772 309.883 158.036C300.679 163.301 293.036 170.874 287.721 179.993L8.12649 660.002C2.80743 669.12 0.00462935 679.465 5.72978e-06 689.997C-0.00461789 700.529 2.78909 710.876 8.10015 719.999C13.4112 729.121 21.0523 736.696 30.255 741.963C39.4576 747.229 49.8973 750.001 60.524 750H270.538C353.748 750 415.112 713.775 457.336 643.101L559.849 467.145L614.757 372.979L779.547 655.834H559.849L504.908 750ZM267.114 655.737L120.551 655.704L340.249 278.586L449.87 467.145L376.474 593.175C348.433 639.03 316.577 655.737 267.114 655.737Z" fill="currentColor"/>
    </svg>
```

----------------------------------------

TITLE: Vue.js Component with FormsExample
DESCRIPTION: This snippet demonstrates a Vue 3 component using the `<script setup>` syntax. It imports the `FormsExample` component from a local path and renders it in the template. This is a standard way to compose UI elements in Vue applications.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/forms/index.md#_snippet_0

LANGUAGE: vue
CODE:
```
<script setup>
import FormsExample from "@/examples/forms/Example.vue"
</script>

<FormsExample />
```

----------------------------------------

TITLE: Install shadcn-vue Select Component
DESCRIPTION: Installs the shadcn-vue Select component using the shadcn-vue CLI. This command adds the necessary files to your project.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/select.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add select
```

----------------------------------------

TITLE: Install Reka UI Dependency
DESCRIPTION: Manual installation step requiring the 'reka-ui' package as a dependency for the Toggle Group component. This is part of the manual setup process.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/toggle-group.md#_snippet_1

LANGUAGE: bash
CODE:
```
npm install reka-ui
```

----------------------------------------

TITLE: Install Switch Manually
DESCRIPTION: Manually installs the Switch component by first adding the 'reka-ui' dependency and then copying the component files. This method is useful for understanding the component's structure or for custom setups.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/switch.md#_snippet_1

LANGUAGE: bash
CODE:
```
npm install reka-ui
```

----------------------------------------

TITLE: TypeScript Setup and URL Generation
DESCRIPTION: This snippet demonstrates setting up TypeScript in a Vue component and generating URLs for GitHub commits and diffs based on a commit tag.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/contribution.md#_snippet_0

LANGUAGE: typescript
CODE:
```
import { Button } from "@/registry/new-york/ui/button"

const latestSyncCommitTag = "06cc0cdf3d080555d26abbe6639f2d7f6341ec73"

const latestSyncCommitUrl = `https://github.com/shadcn-ui/ui/commit/${latestSyncCommitTag}`
const diffUrl = `https://github.com/shadcn-ui/ui/compare/${latestSyncCommitTag}...main`
```

----------------------------------------

TITLE: Add Component Definition to registry.json
DESCRIPTION: Includes a component's metadata, such as its name, type, title, description, and associated files, within the `registry.json` file. This step registers the component for use by the CLI and registry consumers.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_7

LANGUAGE: json
CODE:
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

----------------------------------------

TITLE: Add registry:build Script to package.json
DESCRIPTION: Adds a custom script to your `package.json` file to execute the shadcn-vue build command. This script is used to generate the registry JSON files from your component definitions.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_3

LANGUAGE: json
CODE:
```
{
  "scripts": {
    "registry:build": "shadcn-vue build"
  }
}
```

----------------------------------------

TITLE: Add Custom Animations
DESCRIPTION: This example shows how to define custom animations by specifying CSS keyframes and linking them to CSS variables in the theme. It includes a 'wiggle' animation example.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/examples.md#_snippet_13

LANGUAGE: json
CODE:
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

----------------------------------------

TITLE: Install Resizable Component
DESCRIPTION: Install the Resizable component using the shadcn-vue CLI for project integration.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/resizable.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add resizable
```

----------------------------------------

TITLE: Create Astro Project with Tailwind and Vue
DESCRIPTION: Initializes a new Astro project using the `create-astro` CLI. It sets up the project with Tailwind CSS, installs dependencies, adds Vue support, and initializes a Git repository.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/astro.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-astro@latest astro-app  --template with-tailwindcss --install --add vue --git
```

----------------------------------------

TITLE: Vue Component Setup with Script
DESCRIPTION: This snippet shows the setup of a Vue 3 Single File Component (SFC) using the `<script setup>` syntax. It imports a custom component, LandingPage, from a specified path.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/index.md#_snippet_0

LANGUAGE: Vue
CODE:
```
<script setup>
import LandingPage from "../../.vitepress/theme/components/LandingPage.vue"
</script>
```

----------------------------------------

TITLE: Install shadcn-vue Input CLI
DESCRIPTION: Installs the shadcn-vue Input component using the command-line interface. This is the recommended method for adding components to your project.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/input.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add input
```

----------------------------------------

TITLE: Commit Convention Example
DESCRIPTION: Demonstrates the standard commit message format used in the project, which includes a category, scope, and a descriptive message.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/contribution.md#_snippet_7

LANGUAGE: conventional-commits
CODE:
```
feat(components): add new prop to the avatar component
```

----------------------------------------

TITLE: Install TypeScript for Nuxt Error
DESCRIPTION: Installs TypeScript as a development dependency to resolve a specific error ('ERROR: Cannot read properties of undefined (reading 'sys')') encountered during Nuxt project creation, as suggested by a GitHub issue.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_1

LANGUAGE: bash
CODE:
```
npm install -D typescript
```

----------------------------------------

TITLE: Initialize shadcn-vue CLI
DESCRIPTION: Runs the `shadcn-vue` initialization command to set up the project for using shadcn-vue components. This command typically configures necessary files and dependencies.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/astro.md#_snippet_2

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest init
```

----------------------------------------

TITLE: Install Table Component
DESCRIPTION: Install the shadcn-vue table component using the shadcn-vue CLI.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/table.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add table
```

----------------------------------------

TITLE: Start Development Server (npm, pnpm, yarn, bun)
DESCRIPTION: Starts the Nuxt.js development server, typically accessible at http://localhost:3000. This command is used for local development and hot-reloading.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/v4/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
# npm
npm run dev
```

LANGUAGE: bash
CODE:
```
# pnpm
pnpm dev
```

LANGUAGE: bash
CODE:
```
# yarn
yarn dev
```

LANGUAGE: bash
CODE:
```
# bun
bun run dev
```

----------------------------------------

TITLE: Configure Base Color
DESCRIPTION: During the initialization process, you will be prompted to choose a base color for your project. This selection is saved in `components.json`.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_10

LANGUAGE: txt
CODE:
```
Which color would you like to use as base color? › Neutral
```

----------------------------------------

TITLE: Add Tailwind CSS to Nuxt
DESCRIPTION: Installs Tailwind CSS and its Vite plugin for integration into a Nuxt project. It also shows how to configure Tailwind CSS in the `assets/css/tailwind.css` file and update `nuxt.config.ts`.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_2

LANGUAGE: bash
CODE:
```
npm install tailwindcss @tailwindcss/vite
```

----------------------------------------

TITLE: Registry Import Path Convention
DESCRIPTION: Illustrates the standard import path convention for registry components within a shadcn-vue project. Imports should always use the `@/registry` alias.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_9

LANGUAGE: javascript
CODE:
```
import { HelloWorld } from "@/registry/new-york/hello-world/hello-world"
```

----------------------------------------

TITLE: Nuxt Configuration for shadcn-vue
DESCRIPTION: The `nuxt.config.ts` file configuration for integrating shadcn-vue. It includes adding the 'shadcn-nuxt' module and setting up the shadcn configuration options like prefix and component directory.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_7

LANGUAGE: typescript
CODE:
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

----------------------------------------

TITLE: src/styles/globals.css
DESCRIPTION: Global CSS configuration including Tailwind CSS imports, custom variants, CSS variables for theming (light and dark modes), and animation keyframes.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/manual.md#_snippet_2

LANGUAGE: css
CODE:
```
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;

  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(--reka-accordion-content-height);
    }
  }

  @keyframes accordion-up {
    from {
      height: var(--reka-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

----------------------------------------

TITLE: Install Context Menu Component
DESCRIPTION: Installs the context menu component using the shadcn-vue CLI. This command adds the necessary files to your project.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/context-menu.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add context-menu
```

----------------------------------------

TITLE: Install Project Dependencies
DESCRIPTION: Command to install all necessary project dependencies using pnpm. This command should be run after cloning the repository to set up the development environment.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/CONTRIBUTING.md#_snippet_1

LANGUAGE: pnpm
CODE:
```
pnpm install
```

----------------------------------------

TITLE: Install Combobox Component
DESCRIPTION: Installs the Combobox component using the shadcn-vue CLI. This command adds the necessary files to your project.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/combobox.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add combobox

```

----------------------------------------

TITLE: Initialize Project with shadcn-vue CLI
DESCRIPTION: The `init` command is used to set up a new project with shadcn-vue. It installs necessary dependencies, adds the `cn` utility, configures Tailwind CSS, and sets up CSS variables. Running this command prepares your project for component integration.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/cli.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest init
```

----------------------------------------

TITLE: shadcn-vue CLI Configuration Prompt
DESCRIPTION: Example interaction with the `shadcn-vue` init CLI, showing a prompt for selecting a base color.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/vite.md#_snippet_8

LANGUAGE: txt
CODE:
```
Which color would you like to use as base color? › Neutral
```

----------------------------------------

TITLE: Install Drawer Component
DESCRIPTION: Installs the Drawer component using the shadcn-vue CLI. This command adds the necessary files to your project.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/drawer.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add drawer
```

----------------------------------------

TITLE: Vue Component Import and Usage
DESCRIPTION: Demonstrates importing a Vue component (`MusicExample`) and rendering it within the application. This snippet shows basic component composition in Vue 3 with the Composition API (`<script setup>`).

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/examples/music.md#_snippet_0

LANGUAGE: Vue.js
CODE:
```
<script setup>
import MusicExample from "@/examples/music/Example.vue"
</script>

<MusicExample />
```

----------------------------------------

TITLE: Install Progress Dependency
DESCRIPTION: Installs the 'reka-ui' dependency, which is a prerequisite for using the Progress component when installing manually. Ensure this is installed before copying component files.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/progress.md#_snippet_1

LANGUAGE: bash
CODE:
```
npm install reka-ui
```

----------------------------------------

TITLE: Install Tooltip Component
DESCRIPTION: Command to install the Tooltip component using the shadcn-vue CLI. This command adds the necessary files to your project.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/tooltip.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add tooltip
```

----------------------------------------

TITLE: Install shadcn-vue Sidebar Component
DESCRIPTION: Command to install the sidebar component using npx. This command fetches and sets up the necessary files for the sidebar component within your shadcn-vue project.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/sidebar.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add sidebar
```

----------------------------------------

TITLE: Install Stepper Component
DESCRIPTION: Installs the shadcn-vue stepper component using the `shadcn-vue` CLI. This command fetches and sets up the necessary files for the stepper UI.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/stepper.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add stepper
```

----------------------------------------

TITLE: Install Tabs Component
DESCRIPTION: Installs the Tabs component using the shadcn-vue CLI. This command adds the necessary files to your project.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/tabs.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add tabs
```

----------------------------------------

TITLE: Install Switch via CLI
DESCRIPTION: Installs the Switch component using the shadcn-vue CLI. This is the recommended method for adding components to your project.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/switch.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add switch
```

----------------------------------------

TITLE: Run shadcn-vue.com Website Locally
DESCRIPTION: Command to start the development server for the shadcn-vue.com website. This allows contributors to preview the website and their changes locally.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/CONTRIBUTING.md#_snippet_2

LANGUAGE: pnpm
CODE:
```
pnpm dev
```

----------------------------------------

TITLE: Install Badge Component with CLI
DESCRIPTION: Installs the Badge component into your project using the shadcn-vue CLI. This command fetches and sets up the necessary files for the component.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/badge.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add badge
```

----------------------------------------

TITLE: Custom Block Definition
DESCRIPTION: Defines a custom block registry item named 'Login01'. It includes a description, references other registry items as dependencies, and lists associated files with their paths, content placeholders, types, and targets.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/examples.md#_snippet_4

LANGUAGE: json
CODE:
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

----------------------------------------

TITLE: shadcn-vue CLI init Configuration Prompts
DESCRIPTION: When initializing a project, the `init` command prompts the user for configuration choices. These include selecting a UI style, a base color, and whether to use CSS variables for colors. These selections customize the project's appearance and setup.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/cli.md#_snippet_1

LANGUAGE: txt
CODE:
```
Which style would you like to use? › New York
Which color would you like to use as base color? › Zinc
Do you want to use CSS variables for colors? › no / yes
```

----------------------------------------

TITLE: Install Aspect Ratio via CLI
DESCRIPTION: Installs the Aspect Ratio component using the shadcn-vue CLI. This command adds the necessary files and configurations to your project.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/components/aspect-ratio.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-vue@latest add aspect-ratio
```

----------------------------------------

TITLE: Tailwind CSS Configuration in Nuxt
DESCRIPTION: Configuration for Tailwind CSS within a Nuxt project. This includes importing Tailwind CSS into the main CSS file and setting up the Vite plugin in `nuxt.config.ts`.

SOURCE: https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/installation/nuxt.md#_snippet_3

LANGUAGE: css
CODE:
```
@import "tailwindcss";
```

LANGUAGE: typescript
CODE:
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