# Development Workflow

This section outlines common development tasks and commands.

## Git Workflow

### Creating a New Git Branch for Contributions

Ensure your local repository is up-to-date and create a new branch:

```shell
git checkout main
git pull origin main
git checkout -b the-name-of-my-branch
```

### Stage, Commit, and Push Git Changes

Stage all changes, commit them, and push to your fork:

```shell
git add -A && git commit -m "My message"
git push my-fork-name the-name-of-my-branch
```

## Running Code Quality Checks

Execute pre-commit checks for code quality:

```shell
yarn check-all
```
