// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  // 項目類型。庫使用 'lib'，默認為 'app'
  //   type: 'lib',

  // 啟用風格格式化規則
  // stylistic: true,

  // 自定義風格規則
  stylistic: {
    // indent: 2, // 使用 4 或 'tab'
    quotes: 'single', // 使用單引號或雙引號
    semi: true, // 啟用分號
    arrowParens: 'avoid',
  },

  // TypeScript 和 Vue 會自動檢測，也可以明確啟用：
  typescript: true,
  vue: true,

  // 禁用 jsonc 和 yaml 支持
  jsonc: false,
  yaml: false,

  // 在平面配置中不再支持 `.eslintignore`，改用 `ignores`
  ignores: [
    '**/fixtures',
    // ...globs
  ],
  formatters: {
    /**
     * 格式化 CSS、LESS、SCSS 文件，以及 Vue 中的 `<style>` 區塊
     * 默認使用 Prettier
     */
    css: true,
    /**
     * 格式化 HTML 文件
     * 默認使用 Prettier
     */
    html: true,
    /**
     * 格式化 Markdown 文件
     * 支持 Prettier 和 dprint
     * 默認使用 Prettier
     */
    markdown: 'prettier',
  },
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'style/arrow-parens': 'off',
    '@typescript-eslint/arrow-parens': 'off',
    'arrow-parens': 'off',
    'unicorn/arrow-parens': ['error', 'as-needed'],
    'antfu/if-newline': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
  },
  unocss: true,
})
