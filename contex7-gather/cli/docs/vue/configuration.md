# Configuration

## Vue.js HTML-mode Configuration (Vite)

This snippet shows how to configure Vite to use Vue in HTML-mode without a build step, by aliasing the 'vue' import to 'vue/dist/vue.esm-bundler.js'. This is useful for in-browser template compilation.

**Source:** [https://github.com/vuejs/docs/blob/main/src/tutorial/src/step-1/description.md#_snippet_0](https://github.com/vuejs/docs/blob/main/src/tutorial/src/step-1/description.md#_snippet_0)

```javascript

```
export default {
resolve: {
alias: {
vue: 'vue/dist/vue.esm-bundler.js'
}
}
}
```

```