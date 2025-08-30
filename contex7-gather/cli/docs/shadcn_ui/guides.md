# Guides

## Serving the Registry Locally

This command starts the local development server, allowing you to serve your component registry files. Once the server is running, your registry items will be accessible via a local URL, typically `http://localhost:5173/r/[NAME].json`.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_7](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_7)

```shell

```
pnpm run dev
```

```

---

## Starting Svelte Development Server (Bash)

This snippet shows how to start the development server for a Svelte project after dependencies are installed. It includes options to simply start the server or to automatically open the application in a new browser tab upon startup.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/v4/README.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/v4/README.md#_snippet_1)

```bash

```
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

```

---

## Initializing registry.json for shadcn-svelte

This snippet demonstrates the initial structure of the `registry.json` file, which is essential for using the `shadcn-svelte` CLI to build a component registry. It defines the schema, a unique name for the registry, its homepage, and an empty `items` array where component definitions will be added.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_0)

```json

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

```

---

## Creating a new Astro project

Initializes a new Astro project using the npm package manager. This command prompts the user for project setup details like location, template, TypeScript usage, and dependency installation.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/astro.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/astro.md#_snippet_0)

```bash

```
npm create astro@latest
```

```

---

## Example Registry package.json (JSON)

This snippet shows a typical `package.json` file from a component registry, illustrating how dependencies are declared. This serves as a baseline to understand how `overrideDependencies` in `registry.json` can later modify these declared versions during component installation.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/registry-json.md#_snippet_8](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/registry-json.md#_snippet_8)

```json

```
{
"dependencies": {
"paneforge": "1.0.0-next.1"
}
}
```

```

---

## Initializing shadcn-svelte CLI

This command executes the `shadcn-svelte` CLI's initialization process, which interactively guides the user through configuring the project's `components.json` file for component management.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/sveltekit.md#_snippet_3](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/sveltekit.md#_snippet_3)

```Shell

```
shadcn-svelte@next init
```

```

---

## Initializing shadcn-svelte Project Dependencies (Bash)

This command initializes a new `shadcn-svelte` project by installing necessary dependencies, adding the `cn` utility, configuring the project, and setting up CSS variables. It prepares the project for component integration.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/packages/cli/README.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/packages/cli/README.md#_snippet_0)

```bash

```
npx shadcn-svelte init
```

```

---

## Defining Custom Block (JSON)

This JSON defines a shadcn-svelte registry block named login-01. It includes a description, specifies registry dependencies (components like button, card, input, label), and lists the files that comprise the block. Each file entry includes its path, content (simplified for example), type (registry:page or registry:component), and a target path for pages. This allows for packaging and distributing reusable UI components.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/examples.md#_snippet_4](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/examples.md#_snippet_4)

```json

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

```

---

## Overriding Dependencies Example (JSON)

This snippet demonstrates the effect of the `overrideDependencies` property in `registry.json`. It shows how a dependency's version, initially `1.0.0-next.1`, can be forced to a different range, such as `@next`, when the component is installed, allowing for specific version pinning or pre-release usage.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/registry-json.md#_snippet_9](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/registry-json.md#_snippet_9)

```json

```
{
"dependencies": {
"paneforge": "1.0.0-next.1", // overrideDependencies: []
"paneforge": "1.0.0-next.5" // overrideDependencies: ["paneforge@next"]
}
}
```

```

---

## Specifying Registry Item Type in JSON

This snippet illustrates the `type` property, which categorizes the registry item (e.g., `registry:block`, `registry:component`). This type determines how the item is resolved and where its files are placed within a project, guiding the installation process.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/registry-item-json.md#_snippet_5](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/registry-item-json.md#_snippet_5)

```json

```
{
"type": "registry:block"
}
```

```

---

## Creating SvelteKit Project

This command uses the SvelteKit CLI to initialize a new SvelteKit project named 'my-app', setting up the basic project structure.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/sveltekit.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/sveltekit.md#_snippet_0)

```Shell

```
sv create my-app
```

```

---

## Initializing shadcn-svelte in Astro

Runs the `shadcn-svelte` initialization command to set up the project for using shadcn-svelte components. This command configures the necessary files and directories, preparing the project for UI library integration.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/astro.md#_snippet_7](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/astro.md#_snippet_7)

```bash

```
npx shadcn-svelte@next init
```

```