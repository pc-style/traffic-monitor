# Configuration

## Astro project configuration prompts

Displays the interactive questions asked by the Astro CLI during project creation. These prompts guide the user through setting up the project directory, choosing a starter template, configuring TypeScript strictness, installing dependencies, and optionally initializing a Git repository.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/astro.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/astro.md#_snippet_1)

```txt

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

```

---

## Configuring shadcn-svelte init Command

This snippet shows the interactive prompts presented when running the `shadcn-svelte init` command, guiding the user through configuring `components.json` with base color, CSS file path, and import aliases for various project directories.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/cli.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/cli.md#_snippet_0)

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

## shadcn-svelte add Command Options

This snippet outlines the command-line options for the `shadcn-svelte add` command, enabling users to specify components, control dependency installation, use a proxy, and manage confirmation prompts and file overwrites.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/cli.md#_snippet_3](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/cli.md#_snippet_3)

```txt

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

```

---

## Configuring Tailwind CSS for Custom Registry Directories

This CSS snippet demonstrates how to configure Tailwind CSS to detect components located in custom directories. The `@source` directive is used in `src/app.css` to ensure that Tailwind CSS processes styles from the specified registry path.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_2](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_2)

```css

```
@source "./registry/@acmecorp/ui-lib";
```

```

---

## shadcn-svelte init Command Options

This snippet details the available command-line options for the `shadcn-svelte init` command, including options for specifying the working directory, overwriting files, disabling dependency installation, setting base color, CSS path, import aliases, and proxy settings.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/cli.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/cli.md#_snippet_1)

```txt

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

```

---

## Configuring Global CSS Styles with CSS Variables for Theming

This snippet defines global CSS variables for a theming system, supporting both light and dark modes. It imports Tailwind CSS and `tw-animate-css`, and sets up various color and spacing variables (`--radius`, `--background`, `--foreground`, etc.) for different UI components, including specific chart and sidebar colors. It also includes a `@theme inline` block for mapping these variables to a more generic `--color-*` naming convention and a `@layer base` block for applying base styles.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/manual.md#_snippet_3](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/manual.md#_snippet_3)

```css

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

```

---

## Configuring Import Aliases in jsconfig.json

Illustrates how to set up import aliases in `jsconfig.json` for JavaScript projects. This configuration maps the `$lib` alias to the `./src/lib/*` path, simplifying module imports and improving developer experience.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/index.md#_snippet_2](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/installation/index.md#_snippet_2)

```json

```
{
"compilerOptions": {
"paths": {
"$lib/*": ["./src/lib/*"]
}
}
}
```

```