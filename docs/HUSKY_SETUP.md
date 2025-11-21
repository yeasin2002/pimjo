# Husky + lint-staged Setup Guide

This project uses **Husky** and **lint-staged** to ensure code quality before commits.

## 🎯 What's Configured

### Pre-commit Hook

Automatically runs on every commit to:

- ✅ Lint and fix JavaScript/TypeScript files with ESLint
- ✅ Format all files with Prettier
- ✅ Run TypeScript type checking
- ✅ Only check staged files (fast!)

### Commit Message Hook

Optional hook for commit message validation (currently disabled).

## 📦 Installation

### 1. Install Dependencies

```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install
```

This will automatically:

- Install `husky` and `lint-staged`
- Run `husky` setup via the `prepare` script
- Create `.husky` directory with hooks

### 2. Manual Setup (if needed)

If hooks aren't working, run:

```bash
# Initialize Husky
bun run prepare

# Make hooks executable (Unix/Mac/Linux)
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
```

## 🔧 Configuration Files

### `.lintstagedrc.js`

Defines what commands run on staged files:

```javascript
module.exports = {
  // TypeScript and JavaScript files
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],

  // JSON, Markdown, YAML files
  '*.{json,md,yml,yaml}': ['prettier --write'],

  // CSS and SCSS files
  '*.{css,scss}': ['prettier --write'],

  // Type-check TypeScript files
  '*.{ts,tsx}': () => 'tsc --noEmit',
}
```

### `.husky/pre-commit`

Runs before each commit:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

bun run lint-staged
```

### `package.json` Scripts

```json
{
  "scripts": {
    "prepare": "husky"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md,yml,yaml}": ["prettier --write"],
    "*.{css,scss}": ["prettier --write"]
  }
}
```

## 🚀 Usage

### Normal Workflow

Just commit as usual:

```bash
git add .
git commit -m "feat: add new feature"
```

Husky will automatically:

1. Run lint-staged on your staged files
2. Fix linting issues
3. Format code with Prettier
4. Run type checking
5. If everything passes, commit succeeds
6. If there are errors, commit is blocked

### Skip Hooks (Not Recommended)

If you need to skip hooks temporarily:

```bash
git commit -m "message" --no-verify
# or
HUSKY=0 git commit -m "message"
```

⚠️ **Warning**: Only skip hooks when absolutely necessary!

## 🛠️ Customization

### Add More Checks

Edit `.lintstagedrc.js`:

```javascript
module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write',
    'vitest related --run', // Run tests for changed files
  ],
}
```

### Add Commit Message Linting

1. Install commitlint:

```bash
bun add -D @commitlint/cli @commitlint/config-conventional
```

2. Create `commitlint.config.js`:

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
}
```

3. Update `.husky/commit-msg`:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

bunx commitlint --edit $1
```

### Disable Type Checking

If type checking is too slow, edit `.lintstagedrc.js`:

```javascript
module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write',
    // Remove this line:
    // '*.{ts,tsx}': () => 'tsc --noEmit',
  ],
}
```

## 🐛 Troubleshooting

### Hooks Not Running

```bash
# Reinstall Husky
rm -rf .husky
bun run prepare

# Make hooks executable (Unix/Mac/Linux)
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
```

### "Command not found" Error

Make sure you're using the correct package manager:

- If using Bun: `bun run lint-staged`
- If using npm: `npm run lint-staged`

Update `.husky/pre-commit` accordingly.

### Slow Pre-commit Hook

1. Remove type checking from lint-staged
2. Run type checking separately: `bun run type-check`
3. Or run it in CI/CD instead

### ESLint Errors

Fix errors manually:

```bash
bun run lint:fix
```

Or skip the commit and fix issues:

```bash
git commit --no-verify
# Then fix issues and commit again
```

## 📊 What Gets Checked

| File Type       | ESLint | Prettier | Type Check |
| --------------- | ------ | -------- | ---------- |
| `.ts`, `.tsx`   | ✅     | ✅       | ✅         |
| `.js`, `.jsx`   | ✅     | ✅       | ❌         |
| `.json`         | ❌     | ✅       | ❌         |
| `.md`           | ❌     | ✅       | ❌         |
| `.css`, `.scss` | ❌     | ✅       | ❌         |
| `.yml`, `.yaml` | ❌     | ✅       | ❌         |

## 🎯 Benefits

- ✅ **Consistent Code Style**: All code follows the same formatting rules
- ✅ **Catch Errors Early**: Find issues before they reach CI/CD
- ✅ **Fast**: Only checks staged files, not entire codebase
- ✅ **Automatic Fixes**: ESLint and Prettier auto-fix issues
- ✅ **Team Collaboration**: Everyone follows the same standards

## 📚 Resources

- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged Documentation](https://github.com/okonet/lint-staged)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 🔑 Quick Commands

```bash
# Run lint-staged manually
bun run lint-staged

# Run linting
bun run lint
bun run lint:fix

# Run formatting
bun run format
bun run format:check

# Run type checking
bun run type-check

# Skip hooks (emergency only)
git commit --no-verify
```
