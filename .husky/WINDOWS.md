# Husky on Windows

## Setup for Windows Users

Husky works on Windows, but you may need to adjust a few things.

### Option 1: Use Git Bash (Recommended)

1. Install [Git for Windows](https://git-scm.com/download/win) (includes Git Bash)
2. Run all git commands in Git Bash
3. Hooks will work automatically

### Option 2: Use WSL (Windows Subsystem for Linux)

1. Install WSL2
2. Clone and work on the project inside WSL
3. Hooks will work like on Linux

### Option 3: PowerShell/CMD

If you must use PowerShell or CMD:

1. Make sure you have Node.js installed
2. Hooks should work, but you might see warnings
3. If hooks fail, try Git Bash instead

## Common Issues

### "Permission Denied" Error

In Git Bash:

```bash
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
```

### "Command not found: bun"

Make sure Bun is in your PATH:

```bash
# Check if Bun is installed
bun --version

# If not, install it
powershell -c "irm bun.sh/install.ps1|iex"
```

Or change `.husky/pre-commit` to use npm:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint-staged
```

### Line Ending Issues

Set Git to handle line endings:

```bash
git config --global core.autocrlf true
```

## Testing Hooks

Test if hooks work:

```bash
# Make a small change
echo "// test" >> src/app/page.tsx

# Stage and commit
git add src/app/page.tsx
git commit -m "test: verify hooks"

# You should see lint-staged running
# If it works, reset the test:
git reset HEAD~1
git checkout src/app/page.tsx
```

## Disable Hooks Temporarily

If hooks are causing issues:

```bash
# Skip hooks for one commit
git commit --no-verify -m "message"

# Disable Husky completely
set HUSKY=0
git commit -m "message"
```

## Get Help

If you're still having issues:

1. Check [Husky Troubleshooting](https://typicode.github.io/husky/troubleshooting.html)
2. Use Git Bash instead of CMD/PowerShell
3. Ask the team for help
