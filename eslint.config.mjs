// eslint.config.js
import antfu from '@antfu/eslint-config';

export default antfu({
  // Type of the project. 'lib' for libraries, the default is 'app'
  //   type: 'lib',

  // Enable stylistic formatting rules
  // stylistic: true,

  // Or customize the stylistic rules
  stylistic: {
    // indent: 2, // 4, or 'tab'
    quotes: 'single', // single or 'double'
    semi: true, // 啟用分號
  },

  // TypeScript and Vue are autodetected, you can also explicitly enable them:
  typescript: false,
  vue: true,

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,

  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: [
    '**/fixtures',
    // ...globs
  ],
  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true,
    /**
     * Format Markdown files
     * Supports Prettier and dprint
     * By default uses Prettier
     */
    markdown: 'prettier',
  },
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
  },
  unocss: true,
});
