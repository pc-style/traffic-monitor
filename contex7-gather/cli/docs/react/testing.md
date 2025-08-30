# Testing

## Starting Storybook for Accessibility Testing - Bash

This command starts the Storybook development server, which is a prerequisite for running automated accessibility verification tests. It can be run directly or with an environment variable for specific Storybook configurations.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_5](https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_5)

```bash

```
npm start
```

```
STORYBOOK=true npx start-storybook -p 6006
```

```

---

## Starting Storybook for Visual Regression Testing

These commands initiate the Storybook server, which is a prerequisite for running visual regression tests, providing the environment for component rendering and screenshot capture.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_3](https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_3)

```bash

```
npm start
```

```
STORYBOOK=true npx start-storybook -p 6006
```

```

---

## Running Unit Tests

Commands for executing and managing unit tests, including running all tests, specific components, debugging, generating coverage reports, and updating snapshots.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_0](https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_0)

```bash

```
npm test
```

```
npm test ComponentName
```

```
npm test -- --watch
```

```
npm test -- --coverage
```

```
npm test -- -u
```

```

---

## Running Playwright Visual Regression Tests

Commands for executing and managing visual regression tests with Playwright, covering full runs, specific tests, report viewing, snapshot updates, debugging, and filtering by tags.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_1](https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_1)

```bash

```
script/test-e2e
```

```
script/test-e2e TestName
```

```
npx playwright show-report .playwright/report
```

```
script/test-e2e --update-snapshots
```

```
npx playwright test --debug
```

```
npx playwright test --headed
```

```
script/test-e2e --grep @tag-name
```

```
script/test-e2e --grep-invert @tag-name
```

```

---

## Running Accessibility Verification Tests - Bash

This command executes the end-to-end accessibility verification tests using a custom test script. The --grep @avt flag filters the tests to specifically run those tagged for accessibility verification.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_6](https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_6)

```bash

```
script/test-e2e --grep @avt
```

```

---

## Executing Tagged Visual Regression Tests

These commands run visual regression tests specifically filtered by the '@vrt' tag. The first command uses a helper script mirroring the CI environment, while the second runs Playwright directly, which might require local snapshot regeneration on the first run.

**Source:** [https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_4](https://github.com/primer/react/blob/main/contributor-docs/testing.md#_snippet_4)

```bash

```
script/test-e2e --grep @vrt
```

```
npx playwright test --grep @vrt
```

```