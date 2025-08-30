# Getting Started

## Installing shadcn-svelte CLI

This command installs the `shadcn-svelte` CLI, specifically the `@next` version, which is required for accessing the `registry build` command. It uses `pnpm` as the package manager, consistent with other examples in the guide.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_5](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_5)

```shell

```
pnpm add shadcn-svelte@next
```

```

---

## Installing Registry Item using shadcn-svelte CLI

This snippet demonstrates how to install a specific registry item, 'hello-world.json', from a local registry URL using the 'add' command of the shadcn-svelte CLI. This command fetches and integrates the component into your project.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_8](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/getting-started.md#_snippet_8)

```shell

```
shadcn-svelte@next add http://localhost:5173/r/hello-world.json
```

```

---

## Installing Command Component via CLI

This snippet demonstrates how to install the `Command` component using the project's command-line interface tool, simplifying the setup process.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/command.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/command.md#_snippet_0)

```Shell

```
npx shadcn-svelte add command
```

```

---

## Installing bits-ui Dependency Manually (CLI)

This command installs the `bits-ui` library as a development dependency, which is a foundational prerequisite for the manual setup and functionality of the Tooltip component.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/tooltip.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/tooltip.md#_snippet_1)

```CLI

```
npm install bits-ui -D
```

```

---

## Installing Calendar Component via CLI

This command uses the shadcn-svelte CLI to automatically add the Calendar component and its dependencies to your project, simplifying the installation process. It's the recommended method for quick setup.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/calendar.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/calendar.md#_snippet_0)

```Shell

```
npx shadcn-svelte add calendar
```

```

---

## Installing Block with Primitive Overrides - shadcn-svelte JSON

This JSON configuration defines a registry item to install the 'login-01' block from the shadcn-svelte registry. It also specifies custom URLs to override the default 'button', 'input', and 'label' primitives, allowing for custom component implementations.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/examples.md#_snippet_5](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/registry/examples.md#_snippet_5)

```JSON

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

```

---

## Installing Card Component via CLI

This snippet shows how to install the Card component using the shadcn-svelte CLI. It automates the process of adding the necessary files to your project, simplifying setup.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/card.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/card.md#_snippet_0)

```Shell

```
npx shadcn-svelte add card
```

```

---

## Installing Toggle Component via shadcn-svelte CLI

This snippet shows how to quickly add the `Toggle` component to your project using the `shadcn-svelte` command-line interface, automating the setup process.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/toggle.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/toggle.md#_snippet_0)

```bash

```
npx shadcn-svelte add toggle
```

```

---

## Installing Progress Component via CLI (shadcn-svelte)

This command utilizes the `shadcn-svelte` CLI to automatically add the `Progress` component and its necessary dependencies to your project, streamlining the setup process. It's the recommended method for quick integration.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/progress.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/progress.md#_snippet_0)

```CLI

```
npx shadcn-svelte add progress
```

```

---

## Installing Checkbox Component via CLI (shadcn-svelte)

This command utilizes the `shadcn-svelte` CLI to automatically add the `Checkbox` component and its necessary dependencies to your project, streamlining the setup process. It's the recommended installation method for convenience.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/checkbox.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/checkbox.md#_snippet_0)

```Shell

```
npx shadcn-svelte add checkbox
```

```

---

## Installing Separator Component via CLI

This snippet demonstrates how to install the `Separator` component using the `shadcn-svelte` CLI. This method automates the process of adding the component's source files and managing dependencies, simplifying setup.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/separator.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/separator.md#_snippet_0)

```bash

```
npx shadcn-svelte add separator
```

```

---

## Manual Installation of bits-ui and Collapsible Component

This section outlines the manual installation process. First, install `bits-ui` as a development dependency using a package manager. Subsequently, copy the component's source files directly into your project from the links provided at the top of the page.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/collapsible.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/collapsible.md#_snippet_1)

```Svelte

```
<PMInstall command="bits-ui -D" />
```

```

---

## Installing bits-ui for Manual Tabs Installation

This snippet shows how to install the `bits-ui` library, which is a prerequisite for manually setting up the Tabs component. It's installed as a development dependency.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/tabs.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/tabs.md#_snippet_1)

```Shell

```
npm install bits-ui -D
```

```

---

## Installing Badge Component via CLI

This snippet shows the command-line interface (CLI) method for adding the Badge component to your project using `shadcn-svelte`'s utility. It simplifies the setup process by automating file copying and dependency management.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/badge.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/badge.md#_snippet_0)

```shell

```
npx shadcn-svelte add badge
```

```

---

## Installing bits-ui Dependency Manually

This snippet shows how to install the `bits-ui` library, a core dependency for the Radio Group component, using a package manager helper component. This step is crucial for manual setup before copying the component source files.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/radio-group.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/radio-group.md#_snippet_1)

```Svelte

```
<PMInstall command="bits-ui -D" />
```

```

---

## Installing Popover Component using CLI

This command adds the Popover component to your project using the shadcn-svelte CLI, streamlining the setup process for UI components.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/popover.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/popover.md#_snippet_0)

```shell

```
npx shadcn-svelte add popover
```

```

---

## Installing bits-ui Dependency Manually

This step outlines the manual installation of `bits-ui`, a prerequisite library for the Alert Dialog component. It instructs the user to install `bits-ui` as a development dependency using a package manager like npm.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/alert-dialog.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/alert-dialog.md#_snippet_1)

```CLI

```
npm install bits-ui -D
```

```

---

## Installing Embla Carousel Svelte Dependency

This command installs `embla-carousel-svelte` as a development dependency. This library is the core engine powering the carousel component and is a prerequisite for manual setup.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/carousel.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/carousel.md#_snippet_1)

```Shell

```
npm install embla-carousel-svelte -D
```

```

---

## Installing bits-ui Manually

This snippet shows how to manually install the `bits-ui` dependency using a package manager, which is a prerequisite for the `Command` component.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/command.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/command.md#_snippet_1)

```Shell

```
npm install bits-ui -D
```

```

---

## Installing Textarea Component via CLI (shadcn-svelte)

This snippet provides the command to install the `Textarea` component using the `shadcn-svelte` CLI. This is the recommended method for quickly adding the component and its dependencies to your project.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/textarea.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/textarea.md#_snippet_0)

```Shell

```
npx shadcn-svelte add textarea
```

```

---

## Installing Input Component via CLI

This snippet demonstrates how to install the Input component using the shadcn-svelte CLI tool. It automates the process of adding the component to your project.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/input.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/input.md#_snippet_0)

```shell

```
npx shadcn-svelte add input
```

```

---

## Installing bits-ui Dependency Manually

This snippet outlines the manual installation of `bits-ui`, a required dependency for the Menubar component. It uses `npm install` to add `bits-ui` as a development dependency to your project.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/menubar.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/menubar.md#_snippet_1)

```Shell

```
npm install bits-ui -D
```

```

---

## Manual Installation of Sheet Component Dependencies

This snippet outlines the first step for manual installation, which involves installing the 'bits-ui' library as a development dependency. 'bits-ui' is a prerequisite for the Sheet component, providing the underlying unstyled primitives.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/sheet.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/sheet.md#_snippet_1)

```Shell

```
npm install bits-ui -D
# or pnpm install bits-ui -D
# or yarn add bits-ui -D
```

```

---

## Installing bits-ui Dependency Manually

Installs the `bits-ui` library as a development dependency using npm, which is a prerequisite for the Aspect Ratio component when installed manually.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/aspect-ratio.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/aspect-ratio.md#_snippet_1)

```Shell

```
npm install bits-ui -D
```

```

---

## Manual Installation: Install bits-ui

This snippet shows the command to manually install `bits-ui`, a dependency for the Dialog component, using npm. This is a crucial step in the manual installation process before copying component source files.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/dialog.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/dialog.md#_snippet_1)

```shell

```
npm install bits-ui -D
```

```

---

## Install bits-ui Dependency Manually

This command shows how to manually install `bits-ui` as a development dependency, which is a prerequisite for `shadcn-svelte` components. After installing, users must also manually copy the component source files.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/button.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/button.md#_snippet_1)

```Shell

```
npm install bits-ui -D
```

```

---

## Installing bits-ui Dependency Manually

This step outlines the manual installation of `bits-ui`, a prerequisite library for the `Label` component, by using a package manager to add it as a development dependency.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/label.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/label.md#_snippet_1)

```shell

```
npm install bits-ui -D
```

```
pnpm add bits-ui -D
```

```
yarn add bits-ui -D
```

```

---

## Installing bits-ui Dependency Manually

This snippet shows how to manually install `bits-ui`, a required dependency for the Input OTP component, using a package manager. It installs `bits-ui` as a development dependency.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/input-otp.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/input-otp.md#_snippet_1)

```Shell

```
npm install bits-ui -D
```

```

---

## Using PMInstall for bits-ui Dependency

This Svelte component call is used in the documentation to display the command for installing `bits-ui` as a development dependency, which is a prerequisite for manual component setup.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/scroll-area.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/scroll-area.md#_snippet_1)

```Svelte

```
<PMInstall command="bits-ui -D" />
```

```

---

## Installing bits-ui Dependency Manually (Shadcn Svelte)

This snippet outlines the manual installation step for the `bits-ui` library, which is a prerequisite for the Shadcn Svelte Dropdown Menu component. It shows how to install `bits-ui` as a development dependency using npm.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/dropdown-menu.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/dropdown-menu.md#_snippet_1)

```shell

```
npm install bits-ui -D
```

```

---

## Installing Tabs Component using CLI

This snippet demonstrates how to install the Tabs component using the `shadcn-svelte` CLI tool. It simplifies the process by automatically adding the necessary files to your project.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/tabs.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/tabs.md#_snippet_0)

```Shell

```
npx shadcn-svelte add tabs
```

```

---

## Installing bits-ui Dependency Manually

This step outlines the manual installation of `bits-ui`, a required dependency for the `Separator` component. It uses a package manager command to install `bits-ui` as a development dependency in your project.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/separator.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/separator.md#_snippet_1)

```bash

```
npm install bits-ui -D
```

```

---

## Installing bits-ui Dependency via CLI

This command installs `bits-ui` as a development dependency in your project. `bits-ui` is a foundational library required by `shadcn-svelte` components, including the `Progress` component, when performing a manual installation.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/progress.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/progress.md#_snippet_1)

```CLI

```
npm install bits-ui -D
```

```

---

## Svelte Component Call for Manual PaneForge Installation

This Svelte template snippet demonstrates the use of the `PMInstall` component to render the installation command for the `paneforge` dependency. It specifies `paneforge@next -D` for a development dependency.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/resizable.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/resizable.md#_snippet_1)

```Svelte

```
<PMInstall command="paneforge@next -D" />
```

```

---

## Installing bits-ui Dependency Manually

This snippet shows how to manually install the `bits-ui` dependency, which is a prerequisite for the Switch component. The `-D` flag indicates it should be installed as a development dependency.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/switch.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/switch.md#_snippet_1)

```Shell

```
npm install bits-ui -D
```

```

---

## Installing Calendar Dependencies Manually

This command installs the core `bits-ui` calendar library and the `@internationalized/date` package as development dependencies. These packages are essential prerequisites for the Calendar component's functionality when performing a manual installation.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/calendar.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/calendar.md#_snippet_1)

```Shell

```
npm install bits-ui @internationalized/date -D
```

```

---

## Installing bits-ui Dependency Manually

This command installs `bits-ui` as a development dependency, which is a prerequisite for the Navigation Menu component. It provides the underlying unstyled primitives.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/navigation-menu.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/navigation-menu.md#_snippet_1)

```CLI

```
npm install bits-ui -D
```

```

---

## Installing Label Component via shadcn-svelte CLI

This snippet demonstrates how to install the `Label` component using the `shadcn-svelte` command-line interface, which automates the process of adding the component and its dependencies to your project.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/label.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/label.md#_snippet_0)

```shell

```
npx shadcn-svelte add label
```

```

---

## Installing Input OTP Component via CLI

This snippet demonstrates how to install the Input OTP component using the `shadcn-svelte` CLI tool. It automates the process of adding the component's source files to your project.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/input-otp.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/input-otp.md#_snippet_0)

```Shell

```
npx shadcn-svelte add input-otp
```

```

---

## Installing bits-ui Dependency Manually

This command installs `bits-ui` as a development dependency. `bits-ui` is a foundational library required for the `shadcn-svelte` Slider component when performing a manual installation.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/slider.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/slider.md#_snippet_1)

```CLI

```
npm install bits-ui -D
```

```

---

## Installing bits-ui Dependency Manually (Svelte)

This command installs `bits-ui` as a development dependency, which is a foundational prerequisite for the `shadcn-svelte` Checkbox component when opting for manual installation. After this, component source files need to be copied.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/checkbox.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/checkbox.md#_snippet_1)

```Shell

```
npm install bits-ui -D
```

```

---

## Installing Dialog Component via CLI

This snippet demonstrates how to install the Dialog component using the project's command-line interface, adding it to your Svelte project. It uses the `npx shadcn-svelte add` command to automatically set up the component.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/dialog.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/dialog.md#_snippet_0)

```shell

```
npx shadcn-svelte add dialog
```

```

---

## Installing bits-ui Dependency Manually

This snippet shows how to manually install 'bits-ui' as a development dependency, which is a core prerequisite for the shadcn-svelte Pagination component. This step is part of the manual installation process, ensuring all necessary libraries are available.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/pagination.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/pagination.md#_snippet_1)

```Bash

```
npm install bits-ui -D
```

```

---

## Installing bits-ui Dependency

This snippet shows how to install `bits-ui` as a development dependency. `bits-ui` is a prerequisite for the shadcn-svelte `Select` component, providing the underlying unstyled primitives.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/select.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/select.md#_snippet_1)

```shell

```
npm install -D bits-ui
```

```

---

## Installing bits-ui Dependency

Installs the `bits-ui` library as a development dependency using npm, which is a fundamental prerequisite for the Context Menu component's functionality and proper operation.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/context-menu.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/context-menu.md#_snippet_1)

```Shell

```
npm install bits-ui -D
```

```

---

## Installing bits-ui Dependency Manually

This step outlines the manual installation of the `bits-ui` dependency, which is a prerequisite for the Hover Card component. After installing, users are instructed to copy the component's source files into their project.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/hover-card.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/hover-card.md#_snippet_1)

```Shell

```
npm install bits-ui -D
```

```

---

## Installing Alert Dialog Component using CLI

This snippet demonstrates how to install the Alert Dialog component using the `shadcn-svelte` CLI tool. It automates the process of adding the component's files and dependencies to your project.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/alert-dialog.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/alert-dialog.md#_snippet_0)

```CLI

```
npx shadcn-svelte add alert-dialog
```

```

---

## Installing bits-ui Dependency Manually

This step outlines how to manually install `bits-ui` as a development dependency, which is a prerequisite for the `Toggle` component. Choose your preferred package manager.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/toggle.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/toggle.md#_snippet_1)

```yarn

```
npm install bits-ui -D
```

```
pnpm add bits-ui -D
```

```
yarn add bits-ui -D
```

```

---

## Installing bits-ui Dependency Manually

This snippet shows how to manually install the `bits-ui` dependency, which is a prerequisite for the Accordion component. After installing this dependency, the component's source files need to be copied into your project.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/accordion.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/accordion.md#_snippet_1)

```Shell

```
npm install bits-ui
```

```

---

## Install Button Component via shadcn-svelte CLI

This command demonstrates how to quickly add the `Button` component to your project using the `shadcn-svelte` command-line interface. It automates the process of copying the component files and setting up necessary imports.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/button.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/button.md#_snippet_0)

```Shell

```
npx shadcn-svelte add button
```

```

---

## Manually Installing vaul-svelte Dependency

This snippet outlines the manual installation process for the `vaul-svelte` dependency, which is a prerequisite for the Drawer component. It uses npm as the package manager to install the package as a development dependency.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/drawer.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/drawer.md#_snippet_1)

```Shell

```
npm install vaul-svelte@next -D
```

```

---

## Installing Table Component via CLI in Svelte

This Svelte snippet utilizes the `PMAddComp` component to facilitate the command-line installation of the 'table' component, typically abstracting a package manager command like `npx shadcn-svelte add table`.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/table.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/table.md#_snippet_0)

```svelte

```
<PMAddComp name="table" />
```

```

---

## Installing Pagination Component via shadcn-svelte CLI

This snippet demonstrates how to install the Pagination component using the shadcn-svelte CLI tool. It simplifies the process by automatically adding the component to your project, including all necessary files and dependencies.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/pagination.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/pagination.md#_snippet_0)

```Bash

```
npx shadcn-svelte add pagination
```

```

---

## Installing bits-ui Dependency via Helper (Svelte)

This Svelte component call renders the command to install 'bits-ui' as a development dependency, which is a prerequisite for the Avatar component. It's part of the manual installation steps.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/avatar.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/avatar.md#_snippet_1)

```svelte

```
<PMInstall command="bits-ui -D" />
```

```

---

## Installing bits-ui Dependency Manually

This snippet shows how to install 'bits-ui' as a development dependency using npm, which is a prerequisite for the shadcn-svelte Toggle Group component. This step is part of the manual installation process.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/toggle-group.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/toggle-group.md#_snippet_1)

```Shell

```
npm install bits-ui -D
```

```

---

## Installing Skeleton Component using CLI

This snippet shows how to add the Skeleton component to your project using the shadcn-svelte CLI command. This is the recommended method for quickly integrating the component.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/skeleton.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/skeleton.md#_snippet_0)

```Shell

```
npx shadcn-svelte add skeleton
```

```

---

## Installing Switch Component via CLI

This snippet demonstrates how to add the Switch component to your project using the shadcn-svelte CLI tool. It simplifies the installation process by automatically adding the necessary files and dependencies.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/switch.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/switch.md#_snippet_0)

```Shell

```
npx shadcn-svelte add switch
```

```

---

## Installing bits-ui Dependency Manually

This command installs the 'bits-ui' library as a development dependency, which is a prerequisite for the Popover component and other 'bits-ui' based components.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/popover.md#_snippet_1](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/popover.md#_snippet_1)

```shell

```
npm install bits-ui -D
```

```

---

## Installing Menubar Component via shadcn-svelte CLI

This snippet demonstrates how to add the Menubar component to your shadcn-svelte project using the command-line interface. It leverages the `npx shadcn-svelte add` command to automate the component addition process.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/menubar.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/menubar.md#_snippet_0)

```Shell

```
npx shadcn-svelte add menubar
```

```

---

## Installing Collapsible Component via CLI (shadcn/svelte)

This snippet demonstrates how to add the `collapsible` component to your project using the `shadcn/svelte` CLI tool. This is the recommended and easiest method for integrating the component, abstracting away manual file copying.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/collapsible.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/collapsible.md#_snippet_0)

```Svelte

```
<PMAddComp name="collapsible" />
```

```

---

## Installing Slider Component via CLI

This snippet demonstrates how to quickly add the Slider component to your project using the `shadcn-svelte` CLI, which handles dependencies and file placement automatically.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/slider.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/slider.md#_snippet_0)

```CLI

```
npx shadcn-svelte add slider
```

```

---

## Installing Sheet Component via CLI

This snippet demonstrates how to install the Sheet component using the shadcn-svelte CLI. This is the recommended and easiest way to add the component to your project, as it handles dependencies and file placement automatically.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/sheet.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/sheet.md#_snippet_0)

```Shell

```
npx shadcn-svelte add sheet
```

```

---

## Installing Alert Component using CLI

This snippet demonstrates how to add the Alert component to your Svelte project using the `shadcn-svelte` CLI tool. It automates the process of adding the component's files and dependencies.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/alert.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/alert.md#_snippet_0)

```Shell

```
npx shadcn-svelte add alert
```

```

---

## Installing Radio Group Component via CLI

This snippet demonstrates how to install the Radio Group component using a command-line interface helper component. It's the recommended method for quickly adding the component to your project, abstracting the underlying package manager commands.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/radio-group.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/radio-group.md#_snippet_0)

```Svelte

```
<PMAddComp name="radio-group" />
```

```

---

## Installing Hover Card Component via CLI

This snippet demonstrates how to install the Hover Card component using the shadcn-svelte CLI, which automates the process of adding the component's files and dependencies to your project.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/hover-card.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/hover-card.md#_snippet_0)

```Shell

```
npx shadcn-svelte add hover-card
```

```

---

## Installing Navigation Menu Component via CLI

This command uses the shadcn-svelte CLI to automatically add the Navigation Menu component files to your project, including its dependencies and configurations.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/navigation-menu.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/navigation-menu.md#_snippet_0)

```CLI

```
npx shadcn-svelte add navigation-menu
```

```

---

## Installing Tailwind Vite Plugin (Tailwind v4 Upgrade)

This command installs the `@tailwindcss/vite` package as a development dependency, which is essential for integrating Tailwind v4 directly into a Vite-based project.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/migration/tailwind-v4.md#_snippet_2](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/migration/tailwind-v4.md#_snippet_2)

```Shell

```
pnpm install @tailwindcss/vite -D
```

```

---

## Installing Breadcrumb Component via CLI

This snippet demonstrates how to install the Breadcrumb component using the shadcn-svelte CLI, which automates the process of adding the component files to your project. This command fetches and integrates the necessary files directly into your project structure.

**Source:** [https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/breadcrumb.md#_snippet_0](https://github.com/speedysh/shadcn-svelte-next-docs/blob/main/sites/docs/src/content/components/breadcrumb.md#_snippet_0)

```Shell

```
npx shadcn-svelte add breadcrumb
```

```