module.exports = {
  // TypeScript and JavaScript files
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],

  // JSON, Markdown, YAML files
  '*.{json,md,yml,yaml}': ['prettier --write'],

  // CSS and SCSS files
  '*.{css,scss}': ['prettier --write'],

  // Optional: Run type-check on TypeScript files
  '*.{ts,tsx}': () => 'tsc --noEmit',
}
