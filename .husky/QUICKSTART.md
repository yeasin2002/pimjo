# 🚀 Husky Quick Start

## Installation (One-Time Setup)

```bash
# Install dependencies (this runs 'prepare' script automatically)
bun install
```

That's it! Husky is now active.

## How It Works

Every time you commit, Husky automatically:

1. ✅ Runs ESLint and fixes issues
2. ✅ Formats code with Prettier
3. ✅ Type-checks TypeScript files
4. ✅ Only on files you're committing (fast!)

## Example

```bash
# Make changes
echo "const x = 1" >> src/app/page.tsx

# Stage and commit
git add src/app/page.tsx
git commit -m "feat: add feature"

# Husky runs automatically:
# ✔ Preparing lint-staged...
# ✔ Running tasks for staged files...
# ✔ Applying modifications from tasks...
# ✔ Cleaning up temporary files...
# [main abc123] feat: add feature
```

## Skip Hooks (Emergency Only)

```bash
git commit --no-verify -m "message"
```

⚠️ Not recommended! Only use when absolutely necessary.

## Troubleshooting

### Hooks not running?

```bash
bun run prepare
```

### On Windows?

Use Git Bash or see [WINDOWS.md](WINDOWS.md)

### Need more help?

See [HUSKY_SETUP.md](../HUSKY_SETUP.md) for detailed guide.

## What Gets Checked

| File Type                    | Actions                        |
| ---------------------------- | ------------------------------ |
| `.ts`, `.tsx`, `.js`, `.jsx` | ESLint + Prettier + Type Check |
| `.json`, `.md`, `.yml`       | Prettier                       |
| `.css`, `.scss`              | Prettier                       |

## Configuration Files

- `.lintstagedrc.js` - What runs on staged files
- `.husky/pre-commit` - Pre-commit hook script
- `package.json` - lint-staged config

That's all you need to know! Just commit normally and Husky handles the rest. 🎉
