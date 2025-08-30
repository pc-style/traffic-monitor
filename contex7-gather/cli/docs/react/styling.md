# Styling

## Example Output of CSS Module Import

This snippet illustrates the expected output structure when `rollup-plugin-import-css` processes CSS Modules. It shows how the plugin generates an import statement for the transformed CSS file (e.g., `path-to-header-[hash].css`) alongside the default export containing the scoped class names, enabling automatic CSS inclusion upon component import.

**Source:** [https://github.com/primer/react/blob/main/packages/rollup-plugin-import-css/README.md#_snippet_1](https://github.com/primer/react/blob/main/packages/rollup-plugin-import-css/README.md#_snippet_1)

```TypeScript

```
// Example output
import './path-to-header-[hash].css'
export default {
header: 'header___3s4s'
}
```

```

---

## Mitigating Specificity with :where() - CSS

This snippet demonstrates using the `:where()` pseudo-class to reduce the specificity of a selector to `0,1,0`. This approach helps maintain stable specificity, ensuring that external overrides continue to apply, and includes an example with CSS nesting.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-021-css-layers.md#_snippet_2](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-021-css-layers.md#_snippet_2)

```CSS

```
.Component:where([data-variant='default']) {
color: var(--fgColor-default);
}

/* Or with nesting: */
.Component {
&:where([data-variant='default']) {
color: var(--fgColor-default);
}
}
```

```

---

## CSS Layers and Override Precedence - CSS

This example demonstrates how CSS layers interact with rules outside of layers. Even if a rule within a layer has higher specificity, a rule in a later or anonymous layer (like the `.override` class here) will take precedence, simplifying override management.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-021-css-layers.md#_snippet_4](https://github.com/primer/react/blob/main/contributor-docs/adrs/adr-021-css-layers.md#_snippet_4)

```CSS

```
@layer primer.components.component {
.Component[data-variant='default'] {
color: var(--fgColor-default);
}
}

.override {
color: var(--fgColor-muted);
}
```

```

---

## Linting CSS Files (Shell)

This command runs Stylelint to check CSS files against the Primer stylelint configuration, ensuring consistent styling and adherence to best practices for CSS within the project. It helps maintain a unified visual language.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_9](https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_9)

```sh

```
npm run lint:css
```

```

---

## Automatically Fixing Stylelint Errors (Shell)

This command runs Stylelint with autofix capabilities, automatically correcting certain CSS rules to comply with the project's style guidelines. This streamlines the process of maintaining consistent CSS formatting and reduces manual effort.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_10](https://github.com/primer/react/blob/main/contributor-docs/CONTRIBUTING.md#_snippet_10)

```sh

```
npm run lint:css:fix
```

```

---

## Applying Responsive Data Attributes in CSS with `:where`

This CSS snippet demonstrates how to style the `Stack` component based on its responsive data attributes. It uses the `:where` pseudo-class to target `data-padding='none'` or `data-padding-narrow='none'`, setting `padding: 0` while maintaining a specificity of 0, which is useful for allowing custom overrides.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_18](https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_18)

```css

```
/* Stack.module.css */
.Stack {
&:where([data-padding='none']),
&:where([data-padding-narrow='none']) {
padding: 0;
}
}
```

```

---

## Recommended PascalCase for CSS Module Classnames

This CSS snippet demonstrates the recommended PascalCase naming convention for CSS Module class names. Using PascalCase simplifies referencing these classes in TSX, avoiding the need for cumbersome backslash escapes.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_5](https://github.com/primer/react/blob/main/contributor-docs/authoring-css.md#_snippet_5)

```css

```
/* Do */
.ButtonContent {
display: inline-block;
}
```

```