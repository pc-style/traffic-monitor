# Build And Deploy

## Running Registry Build Script

This command executes the `registry:build` script defined in `package.json`. Running this script triggers the `shadcn-svelte registry build` command, which generates the necessary registry JSON files for your components.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_6](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_6)

```shell

```
pnpm run registry:build
```

```

---

## Adding Registry Build Script to package.json

This `package.json` snippet demonstrates how to add a `registry:build` script. This script utilizes the `pnpm shadcn-svelte registry build` command to automate the process of generating the registry JSON files, streamlining the build workflow.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_4](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_4)

```json

```
{
"scripts": {
"registry:build": "pnpm shadcn-svelte registry build"
}
}
```

```