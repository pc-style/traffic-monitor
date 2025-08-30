========================
CODE SNIPPETS
========================
TITLE: Installing shadcn-svelte CLI
DESCRIPTION: This command installs the `shadcn-svelte` CLI, specifically the `@next` version, which is required for accessing the `registry build` command. It uses `pnpm` as the package manager, consistent with other examples in the guide.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_5

LANGUAGE: shell
CODE:
```
pnpm add shadcn-svelte@next
```

----------------------------------------

TITLE: Installing Registry Item using shadcn-svelte CLI
DESCRIPTION: This snippet demonstrates how to install a specific registry item, 'hello-world.json', from a local registry URL using the 'add' command of the shadcn-svelte CLI. This command fetches and integrates the component into your project.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_8

LANGUAGE: shell
CODE:
```
shadcn-svelte@next add http://localhost:5173/r/hello-world.json
```

----------------------------------------

TITLE: Creating a Svelte Component for the Registry
DESCRIPTION: This Svelte code snippet provides an example of a simple `<HelloWorld />` component. It imports a `Button` component and renders 'Hello World' inside it, serving as a basic component to be included in the registry.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_1

LANGUAGE: svelte
CODE:
```
<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<Button>Hello World</Button>
```

----------------------------------------

TITLE: Serving the Registry Locally
DESCRIPTION: This command starts the local development server, allowing you to serve your component registry files. Once the server is running, your registry items will be accessible via a local URL, typically `http://localhost:5173/r/[NAME].json`.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_7

LANGUAGE: shell
CODE:
```
pnpm run dev
```

----------------------------------------

TITLE: Installing Command Component via CLI
DESCRIPTION: This snippet demonstrates how to install the `Command` component using the project's command-line interface tool, simplifying the setup process.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/command.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx shadcn-svelte add command
```

----------------------------------------

TITLE: Running Registry Build Script
DESCRIPTION: This command executes the `registry:build` script defined in `package.json`. Running this script triggers the `shadcn-svelte registry build` command, which generates the necessary registry JSON files for your components.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_6

LANGUAGE: shell
CODE:
```
pnpm run registry:build
```

----------------------------------------

TITLE: Adding Registry Build Script to package.json
DESCRIPTION: This `package.json` snippet demonstrates how to add a `registry:build` script. This script utilizes the `pnpm shadcn-svelte registry build` command to automate the process of generating the registry JSON files, streamlining the build workflow.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_4

LANGUAGE: json
CODE:
```
{
  "scripts": {
    "registry:build": "pnpm shadcn-svelte registry build"
  }
}
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually (CLI)
DESCRIPTION: This command installs the `bits-ui` library as a development dependency, which is a foundational prerequisite for the manual setup and functionality of the Tooltip component.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/tooltip.md#_snippet_1

LANGUAGE: CLI
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Starting Svelte Development Server (Bash)
DESCRIPTION: This snippet shows how to start the development server for a Svelte project after dependencies are installed. It includes options to simply start the server or to automatically open the application in a new browser tab upon startup.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/v4/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

----------------------------------------

TITLE: Adding a Component Definition to registry.json
DESCRIPTION: This updated `registry.json` snippet shows how to add a component definition to the `items` array. Each item requires a `name`, `type`, `title`, `description`, and a `files` array, specifying the relative `path` and `type` for each component file.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_3

LANGUAGE: json
CODE:
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

----------------------------------------

TITLE: Initializing registry.json for shadcn-svelte
DESCRIPTION: This snippet demonstrates the initial structure of the `registry.json` file, which is essential for using the `shadcn-svelte` CLI to build a component registry. It defines the schema, a unique name for the registry, its homepage, and an empty `items` array where component definitions will be added.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_0

LANGUAGE: json
CODE:
```
{
  "$schema": "https://shadcn-svelte.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    // ...
  ]
}
```

----------------------------------------

TITLE: Installing Calendar Component via CLI
DESCRIPTION: This command uses the shadcn-svelte CLI to automatically add the Calendar component and its dependencies to your project, simplifying the installation process. It's the recommended method for quick setup.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/calendar.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx shadcn-svelte add calendar
```

----------------------------------------

TITLE: Installing Block with Primitive Overrides - shadcn-svelte JSON
DESCRIPTION: This JSON configuration defines a registry item to install the 'login-01' block from the shadcn-svelte registry. It also specifies custom URLs to override the default 'button', 'input', and 'label' primitives, allowing for custom component implementations.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/examples.md#_snippet_5

LANGUAGE: JSON
CODE:
```
{
  "$schema": "https://next.shadcn-svelte.com/schema/registry-item.json",
  "name": "custom-login",
  "type": "registry:block",
  "registryDependencies": [
    "login-01",
    "https://example.com/r/button.json",
    "https://example.com/r/input.json",
    "https://example.com/r/label.json"
  ]
}
```

----------------------------------------

TITLE: Installing Card Component via CLI
DESCRIPTION: This snippet shows how to install the Card component using the shadcn-svelte CLI. It automates the process of adding the necessary files to your project, simplifying setup.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/card.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx shadcn-svelte add card
```

----------------------------------------

TITLE: Installing Toggle Component via shadcn-svelte CLI
DESCRIPTION: This snippet shows how to quickly add the `Toggle` component to your project using the `shadcn-svelte` command-line interface, automating the setup process.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/toggle.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-svelte add toggle
```

----------------------------------------

TITLE: Installing Progress Component via CLI (shadcn-svelte)
DESCRIPTION: This command utilizes the `shadcn-svelte` CLI to automatically add the `Progress` component and its necessary dependencies to your project, streamlining the setup process. It's the recommended method for quick integration.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/progress.md#_snippet_0

LANGUAGE: CLI
CODE:
```
npx shadcn-svelte add progress
```

----------------------------------------

TITLE: Creating a new Astro project
DESCRIPTION: Initializes a new Astro project using the npm package manager. This command prompts the user for project setup details like location, template, TypeScript usage, and dependency installation.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/astro.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm create astro@latest
```

----------------------------------------

TITLE: Astro project configuration prompts
DESCRIPTION: Displays the interactive questions asked by the Astro CLI during project creation. These prompts guide the user through setting up the project directory, choosing a starter template, configuring TypeScript strictness, installing dependencies, and optionally initializing a Git repository.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/astro.md#_snippet_1

LANGUAGE: txt
CODE:
```
- Where should we create your new project?
./your-app-name
- How would you like to start your new project?
Choose a starter template (or Empty)
- Do you plan to write TypeScript?
Yes
- How strict should TypeScript be?
Strict
- Install dependencies?
Yes
- Initialize a new git repository? (optional)
Yes/No
```

----------------------------------------

TITLE: Adding Context Menu Component via CLI
DESCRIPTION: Installs the Context Menu component using the `shadcn-svelte` CLI, simplifying the setup process by automatically adding necessary files and dependencies to your project.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/context-menu.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx shadcn-svelte add context-menu
```

----------------------------------------

TITLE: Installing Checkbox Component via CLI (shadcn-svelte)
DESCRIPTION: This command utilizes the `shadcn-svelte` CLI to automatically add the `Checkbox` component and its necessary dependencies to your project, streamlining the setup process. It's the recommended installation method for convenience.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/checkbox.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx shadcn-svelte add checkbox
```

----------------------------------------

TITLE: Installing Separator Component via CLI
DESCRIPTION: This snippet demonstrates how to install the `Separator` component using the `shadcn-svelte` CLI. This method automates the process of adding the component's source files and managing dependencies, simplifying setup.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/separator.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-svelte add separator
```

----------------------------------------

TITLE: Manual Installation of bits-ui and Collapsible Component
DESCRIPTION: This section outlines the manual installation process. First, install `bits-ui` as a development dependency using a package manager. Subsequently, copy the component's source files directly into your project from the links provided at the top of the page.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/collapsible.md#_snippet_1

LANGUAGE: Svelte
CODE:
```
<PMInstall command="bits-ui -D" />
```

----------------------------------------

TITLE: Installing bits-ui for Manual Tabs Installation
DESCRIPTION: This snippet shows how to install the `bits-ui` library, which is a prerequisite for manually setting up the Tabs component. It's installed as a development dependency.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/tabs.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Installing Badge Component via CLI
DESCRIPTION: This snippet shows the command-line interface (CLI) method for adding the Badge component to your project using `shadcn-svelte`'s utility. It simplifies the setup process by automating file copying and dependency management.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/badge.md#_snippet_0

LANGUAGE: shell
CODE:
```
npx shadcn-svelte add badge
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually
DESCRIPTION: This snippet shows how to install the `bits-ui` library, a core dependency for the Radio Group component, using a package manager helper component. This step is crucial for manual setup before copying the component source files.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/radio-group.md#_snippet_1

LANGUAGE: Svelte
CODE:
```
<PMInstall command="bits-ui -D" />
```

----------------------------------------

TITLE: Example Registry package.json (JSON)
DESCRIPTION: This snippet shows a typical `package.json` file from a component registry, illustrating how dependencies are declared. This serves as a baseline to understand how `overrideDependencies` in `registry.json` can later modify these declared versions during component installation.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/registry-json.md#_snippet_8

LANGUAGE: json
CODE:
```
{
  "dependencies": {
    "paneforge": "1.0.0-next.1"
  }
}
```

----------------------------------------

TITLE: Example Configuration for shadcn-svelte components.json
DESCRIPTION: This text snippet provides an example of the interactive prompts and typical responses when running the `shadcn-svelte@next init` command. It demonstrates how to configure the base color and define import aliases for various components, utilities, and hooks, which are then stored in the `components.json` file.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/vite.md#_snippet_3

LANGUAGE: Text
CODE:
```
Which base color would you like to use? › Slate
Where is your global CSS file? (this file will be overwritten) › src/app.css
Configure the import alias for lib: › $lib
Configure the import alias for components: › $lib/components
Configure the import alias for utils: › $lib/utils
Configure the import alias for hooks: › $lib/hooks
Configure the import alias for ui: › $lib/components/ui
```

----------------------------------------

TITLE: Initializing shadcn-svelte CLI
DESCRIPTION: This command executes the `shadcn-svelte` CLI's initialization process, which interactively guides the user through configuring the project's `components.json` file for component management.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/sveltekit.md#_snippet_3

LANGUAGE: Shell
CODE:
```
shadcn-svelte@next init
```

----------------------------------------

TITLE: Installing Popover Component using CLI
DESCRIPTION: This command adds the Popover component to your project using the shadcn-svelte CLI, streamlining the setup process for UI components.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/popover.md#_snippet_0

LANGUAGE: shell
CODE:
```
npx shadcn-svelte add popover
```

----------------------------------------

TITLE: Initializing shadcn-svelte Project Dependencies (Bash)
DESCRIPTION: This command initializes a new `shadcn-svelte` project by installing necessary dependencies, adding the `cn` utility, configuring the project, and setting up CSS variables. It prepares the project for component integration.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/packages/cli/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-svelte init
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually
DESCRIPTION: This step outlines the manual installation of `bits-ui`, a prerequisite library for the Alert Dialog component. It instructs the user to install `bits-ui` as a development dependency using a package manager like npm.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/alert-dialog.md#_snippet_1

LANGUAGE: CLI
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Installing Embla Carousel Svelte Dependency
DESCRIPTION: This command installs `embla-carousel-svelte` as a development dependency. This library is the core engine powering the carousel component and is a prerequisite for manual setup.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/carousel.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm install embla-carousel-svelte -D
```

----------------------------------------

TITLE: Adding Aspect Ratio Component using CLI
DESCRIPTION: Installs the Aspect Ratio component using the shadcn-svelte CLI, which automates the setup and integration into your project.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/aspect-ratio.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx shadcn-svelte add aspect-ratio
```

----------------------------------------

TITLE: Defining Custom Style Extending Shadcn-Svelte (JSON)
DESCRIPTION: This JSON defines a custom shadcn-svelte style that extends the base framework. It specifies dependencies (phosphor-svelte), registry dependencies (blocks like login-01, calendar, and a remote editor), and custom CSS variables for font-sans and a brand color in light/dark modes. When initialized, it installs these dependencies and adds the specified components/blocks.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/examples.md#_snippet_0

LANGUAGE: json
CODE:
```
{
  "$schema": "https://next.shadcn-svelte.com/schema/registry-item.json",
  "name": "example-style",
  "type": "registry:style",
  "dependencies": ["phosphor-svelte"],
  "registryDependencies": [
    "login-01",
    "calendar",
    "https://example.com/r/editor.json"
  ],
  "cssVars": {
    "theme": {
      "font-sans": "Inter, sans-serif"
    },
    "light": {
      "brand": "oklch(0.145 0 0)"
    },
    "dark": {
      "brand": "oklch(0.145 0 0)"
    }
  }
}
```

----------------------------------------

TITLE: Installing bits-ui Manually
DESCRIPTION: This snippet shows how to manually install the `bits-ui` dependency using a package manager, which is a prerequisite for the `Command` component.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/command.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Example Svelte Component Imports (Svelte)
DESCRIPTION: This Svelte snippet provides a contextual example of how internal imports are structured within a component in a custom registry. These import paths, such as `@/lib/registry/ui/button/index.js`, are later transformed by the `aliases` defined in `registry.json` when users install the component.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/registry-json.md#_snippet_5

LANGUAGE: svelte
CODE:
```
<script lang="ts">
  import { Button } from "@/lib/registry/ui/button/index.js";
  import { cn } from "@/lib/utils.js";
</script>
```

----------------------------------------

TITLE: Configuring shadcn-svelte init Command
DESCRIPTION: This snippet shows the interactive prompts presented when running the `shadcn-svelte init` command, guiding the user through configuring `components.json` with base color, CSS file path, and import aliases for various project directories.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/cli.md#_snippet_0

LANGUAGE: txt
CODE:
```
Which base color would you like to use? › Slate
Where is your global CSS file? (this file will be overwritten) › src/app.css
Configure the import alias for lib: › $lib
Configure the import alias for components: › $lib/components
Configure the import alias for utils: › $lib/utils
Configure the import alias for hooks: › $lib/hooks
Configure the import alias for ui: › $lib/components/ui
```

----------------------------------------

TITLE: Installing Textarea Component via CLI (shadcn-svelte)
DESCRIPTION: This snippet provides the command to install the `Textarea` component using the `shadcn-svelte` CLI. This is the recommended method for quickly adding the component and its dependencies to your project.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/textarea.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx shadcn-svelte add textarea
```

----------------------------------------

TITLE: Installing Input Component via CLI
DESCRIPTION: This snippet demonstrates how to install the Input component using the shadcn-svelte CLI tool. It automates the process of adding the component to your project.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/input.md#_snippet_0

LANGUAGE: shell
CODE:
```
npx shadcn-svelte add input
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually
DESCRIPTION: This snippet outlines the manual installation of `bits-ui`, a required dependency for the Menubar component. It uses `npm install` to add `bits-ui` as a development dependency to your project.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/menubar.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Manual Installation of Sheet Component Dependencies
DESCRIPTION: This snippet outlines the first step for manual installation, which involves installing the 'bits-ui' library as a development dependency. 'bits-ui' is a prerequisite for the Sheet component, providing the underlying unstyled primitives.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/sheet.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm install bits-ui -D
# or pnpm install bits-ui -D
# or yarn add bits-ui -D
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually
DESCRIPTION: Installs the `bits-ui` library as a development dependency using npm, which is a prerequisite for the Aspect Ratio component when installed manually.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/aspect-ratio.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Manual Installation: Install bits-ui
DESCRIPTION: This snippet shows the command to manually install `bits-ui`, a dependency for the Dialog component, using npm. This is a crucial step in the manual installation process before copying component source files.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/dialog.md#_snippet_1

LANGUAGE: shell
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Install bits-ui Dependency Manually
DESCRIPTION: This command shows how to manually install `bits-ui` as a development dependency, which is a prerequisite for `shadcn-svelte` components. After installing, users must also manually copy the component source files.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/button.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually
DESCRIPTION: This step outlines the manual installation of `bits-ui`, a prerequisite library for the `Label` component, by using a package manager to add it as a development dependency.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/label.md#_snippet_1

LANGUAGE: shell
CODE:
```
npm install bits-ui -D
```

LANGUAGE: shell
CODE:
```
pnpm add bits-ui -D
```

LANGUAGE: shell
CODE:
```
yarn add bits-ui -D
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually
DESCRIPTION: This snippet shows how to manually install `bits-ui`, a required dependency for the Input OTP component, using a package manager. It installs `bits-ui` as a development dependency.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/input-otp.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Using PMInstall for bits-ui Dependency
DESCRIPTION: This Svelte component call is used in the documentation to display the command for installing `bits-ui` as a development dependency, which is a prerequisite for manual component setup.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/scroll-area.md#_snippet_1

LANGUAGE: Svelte
CODE:
```
<PMInstall command="bits-ui -D" />
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually (Shadcn Svelte)
DESCRIPTION: This snippet outlines the manual installation step for the `bits-ui` library, which is a prerequisite for the Shadcn Svelte Dropdown Menu component. It shows how to install `bits-ui` as a development dependency using npm.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/dropdown-menu.md#_snippet_1

LANGUAGE: shell
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Configuring shadcn-svelte components.json
DESCRIPTION: Displays the interactive questions asked by the `shadcn-svelte` init command. These prompts guide the user through setting up the base color, global CSS file path, and import aliases for various components, utilities, and hooks, customizing the library's integration.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/astro.md#_snippet_8

LANGUAGE: txt
CODE:
```
Which base color would you like to use? › Slate
Where is your global CSS file? (this file will be overwritten) › src/app.css
Configure the import alias for lib: › $lib
Configure the import alias for components: › $lib/components
Configure the import alias for utils: › $lib/utils
Configure the import alias for hooks: › $lib/hooks
Configure the import alias for ui: › $lib/components/ui
```

----------------------------------------

TITLE: Installing Tabs Component using CLI
DESCRIPTION: This snippet demonstrates how to install the Tabs component using the `shadcn-svelte` CLI tool. It simplifies the process by automatically adding the necessary files to your project.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/tabs.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx shadcn-svelte add tabs
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually
DESCRIPTION: This step outlines the manual installation of `bits-ui`, a required dependency for the `Separator` component. It uses a package manager command to install `bits-ui` as a development dependency in your project.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/separator.md#_snippet_1

LANGUAGE: bash
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: shadcn-svelte add Command Options
DESCRIPTION: This snippet outlines the command-line options for the `shadcn-svelte add` command, enabling users to specify components, control dependency installation, use a proxy, and manage confirmation prompts and file overwrites.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/cli.md#_snippet_3

LANGUAGE: txt
CODE:
```
Usage: shadcn-svelte add [options] [components...]

add components to your project

Arguments:
  components         the components to add or a url to the component

Options:
  -c, --cwd <path>   the working directory (default: the current directory)
  --no-deps          skips adding & installing package dependencies
  -a, --all          install all components to your project (default: false)
  -y, --yes          skip confirmation prompt (default: false)
  -o, --overwrite    overwrite existing files (default: false)
  --proxy <proxy>    fetch components from registry using a proxy
  -h, --help         display help for command
```

----------------------------------------

TITLE: Configuring Tailwind CSS for Custom Registry Directories
DESCRIPTION: This CSS snippet demonstrates how to configure Tailwind CSS to detect components located in custom directories. The `@source` directive is used in `src/app.css` to ensure that Tailwind CSS processes styles from the specified registry path.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_2

LANGUAGE: css
CODE:
```
@source "./registry/@acmecorp/ui-lib";
```

----------------------------------------

TITLE: Installing bits-ui Dependency via CLI
DESCRIPTION: This command installs `bits-ui` as a development dependency in your project. `bits-ui` is a foundational library required by `shadcn-svelte` components, including the `Progress` component, when performing a manual installation.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/progress.md#_snippet_1

LANGUAGE: CLI
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Svelte Component Call for Manual PaneForge Installation
DESCRIPTION: This Svelte template snippet demonstrates the use of the `PMInstall` component to render the installation command for the `paneforge` dependency. It specifies `paneforge@next -D` for a development dependency.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/resizable.md#_snippet_1

LANGUAGE: Svelte
CODE:
```
<PMInstall command="paneforge@next -D" />
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually
DESCRIPTION: This snippet shows how to manually install the `bits-ui` dependency, which is a prerequisite for the Switch component. The `-D` flag indicates it should be installed as a development dependency.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/switch.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Installing Calendar Dependencies Manually
DESCRIPTION: This command installs the core `bits-ui` calendar library and the `@internationalized/date` package as development dependencies. These packages are essential prerequisites for the Calendar component's functionality when performing a manual installation.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/calendar.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm install bits-ui @internationalized/date -D
```

----------------------------------------

TITLE: Defining Custom Block (JSON)
DESCRIPTION: This JSON defines a shadcn-svelte registry block named login-01. It includes a description, specifies registry dependencies (components like button, card, input, label), and lists the files that comprise the block. Each file entry includes its path, content (simplified for example), type (registry:page or registry:component), and a target path for pages. This allows for packaging and distributing reusable UI components.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/examples.md#_snippet_4

LANGUAGE: json
CODE:
```
{
  "$schema": "https://next.shadcn-svelte.com/schema/registry-item.json",
  "name": "login-01",
  "type": "registry:block",
  "description": "A simple login form.",
  "registryDependencies": ["button", "card", "input", "label"],
  "files": [
    {
      "path": "blocks/login-01/page.svelte",
      "content": "import { LoginForm } ...",
      "type": "registry:page",
      "target": "src/routes/login/+page.svelte"
    },
    {
      "path": "blocks/login-01/components/login-form.svelte",
      "content": "...",
      "type": "registry:component"
    }
  ]
}
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually
DESCRIPTION: This command installs `bits-ui` as a development dependency, which is a prerequisite for the Navigation Menu component. It provides the underlying unstyled primitives.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/navigation-menu.md#_snippet_1

LANGUAGE: CLI
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Installing Label Component via shadcn-svelte CLI
DESCRIPTION: This snippet demonstrates how to install the `Label` component using the `shadcn-svelte` command-line interface, which automates the process of adding the component and its dependencies to your project.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/label.md#_snippet_0

LANGUAGE: shell
CODE:
```
npx shadcn-svelte add label
```

----------------------------------------

TITLE: shadcn-svelte init Command Options
DESCRIPTION: This snippet details the available command-line options for the `shadcn-svelte init` command, including options for specifying the working directory, overwriting files, disabling dependency installation, setting base color, CSS path, import aliases, and proxy settings.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/cli.md#_snippet_1

LANGUAGE: txt
CODE:
```
Usage: shadcn-svelte init [options]

initialize your project and install dependencies

Options:
  -c, --cwd <path>           the working directory (default: the current directory)
  -o, --overwrite            overwrite existing files (default: false)
  --no-deps                  disable adding & installing dependencies
  --base-color <name>        the base color for the components (choices: "slate", "gray", "zinc", "neutral", "stone")
  --css <path>               path to the global CSS file
  --components-alias <path>  import alias for components
  --lib-alias <path>         import alias for lib
  --utils-alias <path>       import alias for utils
  --hooks-alias <path>       import alias for hooks
  --ui-alias <path>          import alias for ui
  --proxy <proxy>            fetch items from registry using a proxy
  -h, --help                 display help for command
```

----------------------------------------

TITLE: Installing Input OTP Component via CLI
DESCRIPTION: This snippet demonstrates how to install the Input OTP component using the `shadcn-svelte` CLI tool. It automates the process of adding the component's source files to your project.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/input-otp.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx shadcn-svelte add input-otp
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually
DESCRIPTION: This command installs `bits-ui` as a development dependency. `bits-ui` is a foundational library required for the `shadcn-svelte` Slider component when performing a manual installation.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/slider.md#_snippet_1

LANGUAGE: CLI
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually (Svelte)
DESCRIPTION: This command installs `bits-ui` as a development dependency, which is a foundational prerequisite for the `shadcn-svelte` Checkbox component when opting for manual installation. After this, component source files need to be copied.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/checkbox.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Overriding Dependencies Example (JSON)
DESCRIPTION: This snippet demonstrates the effect of the `overrideDependencies` property in `registry.json`. It shows how a dependency's version, initially `1.0.0-next.1`, can be forced to a different range, such as `@next`, when the component is installed, allowing for specific version pinning or pre-release usage.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/registry-json.md#_snippet_9

LANGUAGE: json
CODE:
```
{
  "dependencies": {
    "paneforge": "1.0.0-next.1", // overrideDependencies: []
    "paneforge": "1.0.0-next.5" // overrideDependencies: ["paneforge@next"]
  }
}
```

----------------------------------------

TITLE: Installing Dialog Component via CLI
DESCRIPTION: This snippet demonstrates how to install the Dialog component using the project's command-line interface, adding it to your Svelte project. It uses the `npx shadcn-svelte add` command to automatically set up the component.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/dialog.md#_snippet_0

LANGUAGE: shell
CODE:
```
npx shadcn-svelte add dialog
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually
DESCRIPTION: This snippet shows how to manually install 'bits-ui' as a development dependency, which is a core prerequisite for the shadcn-svelte Pagination component. This step is part of the manual installation process, ensuring all necessary libraries are available.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/pagination.md#_snippet_1

LANGUAGE: Bash
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Installing bits-ui Dependency
DESCRIPTION: This snippet shows how to install `bits-ui` as a development dependency. `bits-ui` is a prerequisite for the shadcn-svelte `Select` component, providing the underlying unstyled primitives.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/select.md#_snippet_1

LANGUAGE: shell
CODE:
```
npm install -D bits-ui
```

----------------------------------------

TITLE: Installing bits-ui Dependency
DESCRIPTION: Installs the `bits-ui` library as a development dependency using npm, which is a fundamental prerequisite for the Context Menu component's functionality and proper operation.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/context-menu.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually
DESCRIPTION: This step outlines the manual installation of the `bits-ui` dependency, which is a prerequisite for the Hover Card component. After installing, users are instructed to copy the component's source files into their project.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/hover-card.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Installing Alert Dialog Component using CLI
DESCRIPTION: This snippet demonstrates how to install the Alert Dialog component using the `shadcn-svelte` CLI tool. It automates the process of adding the component's files and dependencies to your project.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/alert-dialog.md#_snippet_0

LANGUAGE: CLI
CODE:
```
npx shadcn-svelte add alert-dialog
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually
DESCRIPTION: This step outlines how to manually install `bits-ui` as a development dependency, which is a prerequisite for the `Toggle` component. Choose your preferred package manager.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/toggle.md#_snippet_1

LANGUAGE: npm
CODE:
```
npm install bits-ui -D
```

LANGUAGE: pnpm
CODE:
```
pnpm add bits-ui -D
```

LANGUAGE: yarn
CODE:
```
yarn add bits-ui -D
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually
DESCRIPTION: This snippet shows how to manually install the `bits-ui` dependency, which is a prerequisite for the Accordion component. After installing this dependency, the component's source files need to be copied into your project.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/accordion.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm install bits-ui
```

----------------------------------------

TITLE: Install Button Component via shadcn-svelte CLI
DESCRIPTION: This command demonstrates how to quickly add the `Button` component to your project using the `shadcn-svelte` command-line interface. It automates the process of copying the component files and setting up necessary imports.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/button.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx shadcn-svelte add button
```

----------------------------------------

TITLE: Specifying Registry Item Type in JSON
DESCRIPTION: This snippet illustrates the `type` property, which categorizes the registry item (e.g., `registry:block`, `registry:component`). This type determines how the item is resolved and where its files are placed within a project, guiding the installation process.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/registry-item-json.md#_snippet_5

LANGUAGE: json
CODE:
```
{
  "type": "registry:block"
}
```

----------------------------------------

TITLE: Manually Installing vaul-svelte Dependency
DESCRIPTION: This snippet outlines the manual installation process for the `vaul-svelte` dependency, which is a prerequisite for the Drawer component. It uses npm as the package manager to install the package as a development dependency.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/drawer.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm install vaul-svelte@next -D
```

----------------------------------------

TITLE: Installing Table Component via CLI in Svelte
DESCRIPTION: This Svelte snippet utilizes the `PMAddComp` component to facilitate the command-line installation of the 'table' component, typically abstracting a package manager command like `npx shadcn-svelte add table`.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/table.md#_snippet_0

LANGUAGE: svelte
CODE:
```
<PMAddComp name="table" />
```

----------------------------------------

TITLE: Installing Pagination Component via shadcn-svelte CLI
DESCRIPTION: This snippet demonstrates how to install the Pagination component using the shadcn-svelte CLI tool. It simplifies the process by automatically adding the component to your project, including all necessary files and dependencies.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/pagination.md#_snippet_0

LANGUAGE: Bash
CODE:
```
npx shadcn-svelte add pagination
```

----------------------------------------

TITLE: Installing bits-ui Dependency via Helper (Svelte)
DESCRIPTION: This Svelte component call renders the command to install 'bits-ui' as a development dependency, which is a prerequisite for the Avatar component. It's part of the manual installation steps.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/avatar.md#_snippet_1

LANGUAGE: svelte
CODE:
```
<PMInstall command="bits-ui -D" />
```

----------------------------------------

TITLE: Adding the 'alert-dialog' shadcn-svelte Component (Bash)
DESCRIPTION: This is an example usage of the `add` command, specifically adding the `alert-dialog` component to the project. It demonstrates how to specify a component name to be added, along with its dependencies.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/packages/cli/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
npx shadcn-svelte add alert-dialog
```

----------------------------------------

TITLE: Defining Custom Style from Scratch (JSON)
DESCRIPTION: This JSON defines a custom shadcn-svelte style that does not extend the base framework ("extends": "none"). It specifies new dependencies (tailwind-merge, clsx), registry dependencies (local utils and remote button, input, label, select components), and custom CSS variables (main, bg, border, text, ring) for light/dark modes. This allows for creating a completely new style from scratch.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/examples.md#_snippet_1

LANGUAGE: json
CODE:
```
{
  "$schema": "https://next.shadcn-svelte.com/schema/registry-item.json",
  "extends": "none",
  "name": "new-style",
  "type": "registry:style",
  "dependencies": ["tailwind-merge", "clsx"],
  "registryDependencies": [
    "utils",
    "https://example.com/r/button.json",
    "https://example.com/r/input.json",
    "https://example.com/r/label.json",
    "https://example.com/r/select.json"
  ],
  "cssVars": {
    "theme": {
      "font-sans": "Inter, sans-serif"
    },
    "light": {
      "main": "#88aaee",
      "bg": "#dfe5f2",
      "border": "#000",
      "text": "#000",
      "ring": "#000"
    },
    "dark": {
      "main": "#88aaee",
      "bg": "#272933",
      "border": "#000",
      "text": "#e6e6e6",
      "ring": "#fff"
    }
  }
}
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually
DESCRIPTION: This snippet shows how to install 'bits-ui' as a development dependency using npm, which is a prerequisite for the shadcn-svelte Toggle Group component. This step is part of the manual installation process.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/toggle-group.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Configuring Global CSS Styles with CSS Variables for Theming
DESCRIPTION: This snippet defines global CSS variables for a theming system, supporting both light and dark modes. It imports Tailwind CSS and `tw-animate-css`, and sets up various color and spacing variables (`--radius`, `--background`, `--foreground`, etc.) for different UI components, including specific chart and sidebar colors. It also includes a `@theme inline` block for mapping these variables to a more generic `--color-*` naming convention and a `@layer base` block for applying base styles.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/manual.md#_snippet_3

LANGUAGE: css
CODE:
```
@import "tailwindcss";
@import "tw-animate-css";
@custom-variant dark (&:is(.dark *));

:root {
  --radius: 0.625rem;
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
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
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
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.269 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.371 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
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
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
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
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
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

TITLE: Installing Skeleton Component using CLI
DESCRIPTION: This snippet shows how to add the Skeleton component to your project using the shadcn-svelte CLI command. This is the recommended method for quickly integrating the component.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/skeleton.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx shadcn-svelte add skeleton
```

----------------------------------------

TITLE: Installing Switch Component via CLI
DESCRIPTION: This snippet demonstrates how to add the Switch component to your project using the shadcn-svelte CLI tool. It simplifies the installation process by automatically adding the necessary files and dependencies.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/switch.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx shadcn-svelte add switch
```

----------------------------------------

TITLE: Creating SvelteKit Project
DESCRIPTION: This command uses the SvelteKit CLI to initialize a new SvelteKit project named 'my-app', setting up the basic project structure.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/sveltekit.md#_snippet_0

LANGUAGE: Shell
CODE:
```
sv create my-app
```

----------------------------------------

TITLE: Installing bits-ui Dependency Manually
DESCRIPTION: This command installs the 'bits-ui' library as a development dependency, which is a prerequisite for the Popover component and other 'bits-ui' based components.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/popover.md#_snippet_1

LANGUAGE: shell
CODE:
```
npm install bits-ui -D
```

----------------------------------------

TITLE: Installing Menubar Component via shadcn-svelte CLI
DESCRIPTION: This snippet demonstrates how to add the Menubar component to your shadcn-svelte project using the command-line interface. It leverages the `npx shadcn-svelte add` command to automate the component addition process.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/menubar.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx shadcn-svelte add menubar
```

----------------------------------------

TITLE: Adding Tooltip Component via CLI (shadcn-svelte)
DESCRIPTION: This command utilizes the `shadcn-svelte` CLI to automatically add the Tooltip component's source files to your project, streamlining the setup process for UI components.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/tooltip.md#_snippet_0

LANGUAGE: CLI
CODE:
```
npx shadcn-svelte add tooltip
```

----------------------------------------

TITLE: Installing Collapsible Component via CLI (shadcn/svelte)
DESCRIPTION: This snippet demonstrates how to add the `collapsible` component to your project using the `shadcn/svelte` CLI tool. This is the recommended and easiest method for integrating the component, abstracting away manual file copying.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/collapsible.md#_snippet_0

LANGUAGE: Svelte
CODE:
```
<PMAddComp name="collapsible" />
```

----------------------------------------

TITLE: Installing Slider Component via CLI
DESCRIPTION: This snippet demonstrates how to quickly add the Slider component to your project using the `shadcn-svelte` CLI, which handles dependencies and file placement automatically.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/slider.md#_snippet_0

LANGUAGE: CLI
CODE:
```
npx shadcn-svelte add slider
```

----------------------------------------

TITLE: Installing Sheet Component via CLI
DESCRIPTION: This snippet demonstrates how to install the Sheet component using the shadcn-svelte CLI. This is the recommended and easiest way to add the component to your project, as it handles dependencies and file placement automatically.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/sheet.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx shadcn-svelte add sheet
```

----------------------------------------

TITLE: Adding a Specific shadcn-svelte Component (Bash)
DESCRIPTION: This command adds a specified `shadcn-svelte` component to your project. It automatically handles the installation of all required dependencies for the chosen component, streamlining the integration process.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/packages/cli/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npx shadcn-svelte add [component]
```

----------------------------------------

TITLE: Installing Alert Component using CLI
DESCRIPTION: This snippet demonstrates how to add the Alert component to your Svelte project using the `shadcn-svelte` CLI tool. It automates the process of adding the component's files and dependencies.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/alert.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx shadcn-svelte add alert
```

----------------------------------------

TITLE: Installing Radio Group Component via CLI
DESCRIPTION: This snippet demonstrates how to install the Radio Group component using a command-line interface helper component. It's the recommended method for quickly adding the component to your project, abstracting the underlying package manager commands.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/radio-group.md#_snippet_0

LANGUAGE: Svelte
CODE:
```
<PMAddComp name="radio-group" />
```

----------------------------------------

TITLE: Installing Hover Card Component via CLI
DESCRIPTION: This snippet demonstrates how to install the Hover Card component using the shadcn-svelte CLI, which automates the process of adding the component's files and dependencies to your project.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/hover-card.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx shadcn-svelte add hover-card
```

----------------------------------------

TITLE: Importing Accordion Components in TypeScript
DESCRIPTION: Demonstrates two ways to import the `shadcn-svelte` Accordion component and its sub-components from the `index.ts` file. This approach allows for tree-shaking by Rollup, optimizing bundle size by only including used components.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/index.md#_snippet_0

LANGUAGE: ts
CODE:
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

----------------------------------------

TITLE: Listing Available shadcn-svelte Components (Bash)
DESCRIPTION: Running the `add` command without any arguments displays a comprehensive list of all available `shadcn-svelte` components. This is useful for discovering components that can be added to the project.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/packages/cli/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npx shadcn-svelte add
```

----------------------------------------

TITLE: Configuring Import Aliases in jsconfig.json
DESCRIPTION: Illustrates how to set up import aliases in `jsconfig.json` for JavaScript projects. This configuration maps the `$lib` alias to the `./src/lib/*` path, simplifying module imports and improving developer experience.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/index.md#_snippet_2

LANGUAGE: json
CODE:
```
{
  "compilerOptions": {
    "paths": {
      "$lib/*": ["./src/lib/*"]
    }
  }
}
```

----------------------------------------

TITLE: Installing Navigation Menu Component via CLI
DESCRIPTION: This command uses the shadcn-svelte CLI to automatically add the Navigation Menu component files to your project, including its dependencies and configurations.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/navigation-menu.md#_snippet_0

LANGUAGE: CLI
CODE:
```
npx shadcn-svelte add navigation-menu
```

----------------------------------------

TITLE: Installing Tailwind Vite Plugin (Tailwind v4 Upgrade)
DESCRIPTION: This command installs the `@tailwindcss/vite` package as a development dependency, which is essential for integrating Tailwind v4 directly into a Vite-based project.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/migration/tailwind-v4.md#_snippet_2

LANGUAGE: Shell
CODE:
```
pnpm install @tailwindcss/vite -D
```

----------------------------------------

TITLE: Initializing shadcn-svelte in Astro
DESCRIPTION: Runs the `shadcn-svelte` initialization command to set up the project for using shadcn-svelte components. This command configures the necessary files and directories, preparing the project for UI library integration.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/astro.md#_snippet_7

LANGUAGE: bash
CODE:
```
npx shadcn-svelte@next init
```

----------------------------------------

TITLE: Installing Breadcrumb Component via CLI
DESCRIPTION: This snippet demonstrates how to install the Breadcrumb component using the shadcn-svelte CLI, which automates the process of adding the component files to your project. This command fetches and integrates the necessary files directly into your project structure.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/breadcrumb.md#_snippet_0

LANGUAGE: Shell
CODE:
```
npx shadcn-svelte add breadcrumb
```

----------------------------------------

TITLE: Basic Usage of Svelte Input Component
DESCRIPTION: This snippet shows the minimal setup required to use the Input component in a Svelte application. It imports the component and renders a basic input field.

SOURCE: https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/input.md#_snippet_1

LANGUAGE: svelte
CODE:
```
<script lang="ts">\n  import { Input } from "$lib/components/ui/input/index.js";\n</script>\n\n<Input />
```