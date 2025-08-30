# Build And Deploy

## Run Registry Build Script

Executes the `registry:build` script defined in your `package.json`. This command processes your components and `registry.json` to create the final registry output, typically in the `public/r` directory.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_5](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_5)

```bash

```
npm run registry:build
```

```

---

## Add registry:build Script to package.json

Adds a custom script to your `package.json` file to execute the shadcn-vue build command. This script is used to generate the registry JSON files from your component definitions.

**Source:** [https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_3](https://github.com/unovue/shadcn-vue/blob/dev/apps/www/src/content/docs/registry/getting-started.md#_snippet_3)

```json

```
{
"scripts": {
"registry:build": "shadcn-vue build"
}
}
```

```