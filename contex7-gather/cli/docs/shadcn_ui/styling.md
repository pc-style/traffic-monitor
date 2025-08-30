# Styling

## Defining Custom Style Extending Shadcn-Svelte (JSON)

This JSON defines a custom shadcn-svelte style that extends the base framework. It specifies dependencies (phosphor-svelte), registry dependencies (blocks like login-01, calendar, and a remote editor), and custom CSS variables for font-sans and a brand color in light/dark modes. When initialized, it installs these dependencies and adds the specified components/blocks.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/examples.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/examples.md#_snippet_0)

```json

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

```

---

## Defining Custom Style from Scratch (JSON)

This JSON defines a custom shadcn-svelte style that does not extend the base framework ("extends": "none"). It specifies new dependencies (tailwind-merge, clsx), registry dependencies (local utils and remote button, input, label, select components), and custom CSS variables (main, bg, border, text, ring) for light/dark modes. This allows for creating a completely new style from scratch.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/examples.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/examples.md#_snippet_1)

```json

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

```