# Husky Git Hooks

This directory contains Git hooks managed by Husky.

## Active Hooks

### `pre-commit`

Runs **lint-staged** before each commit to:

- Lint and fix code with ESLint
- Format code with Prettier
- Type-check TypeScript files

### `commit-msg`

Currently inactive. Can be used for commit message validation.

## Configuration

Main configuration is in:

- `.lintstagedrc.js` - Defines what runs on staged files
- `package.json` - Contains lint-staged config and prepare script

## Usage

Hooks run automatically. To skip (not recommended):

```bash
git commit --no-verify
```

## Setup

If hooks aren't working:

```bash
bun run prepare
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
```

For more details, see [HUSKY_SETUP.md](../HUSKY_SETUP.md)
