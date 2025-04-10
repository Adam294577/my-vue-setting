import {
  defineConfig, // 定義 UnoCSS 的配置
  presetAttributify, // 啟用屬性化語法，允許用 div text="center red-500" 這種方式定義樣式
  presetIcons, // 引入內建的圖示支持，允許通過 class 使用圖示，如 i-heroicons-home
  presetTypography, // 提供針對文章內容的樣式，如排版優化
  presetUno, // UnoCSS 的核心預設，包含基本的樣式規則。
  transformerDirectives, // 支持 Tailwind CSS 樣式指令，例如 @apply
  transformerVariantGroup, // 支持分組語法，如將 hover:bg-red-500 focus:bg-blue-500 合併為 hover:(bg-red-500) focus:(bg-blue-500)。
} from 'unocss';

export default defineConfig({
  shortcuts: [
    // display
    {
      'flex-center': 'flex justify-center items-center',
      'flex-x-center': 'flex justify-center',
      'flex-y-center': 'flex items-center',
      'flex-col': 'flex flex-col',
      'flex-col-center': 'flex-center flex-col',
      'flex-col-stretch': 'flex-col items-stretch',
      'i-flex-center': 'inline-flex justify-center items-center',
      'i-flex-x-center': 'inline-flex justify-center',
      'i-flex-y-center': 'inline-flex items-center',
      'i-flex-col': 'flex-col inline-flex',
      'i-flex-col-center': 'flex-col i-flex-center',
      'i-flex-col-stretch': 'i-flex-col items-stretch',
      'flex-1-hidden': 'flex-1 overflow-hidden',
    },
    // position
    {
      'absolute-lt': 'absolute left-0 top-0',
      'absolute-lb': 'absolute left-0 bottom-0',
      'absolute-rt': 'absolute right-0 top-0',
      'absolute-rb': 'absolute right-0 bottom-0',
      'absolute-tl': 'absolute-lt',
      'absolute-tr': 'absolute-rt',
      'absolute-bl': 'absolute-lb',
      'absolute-br': 'absolute-rb',
      'absolute-full': 'absolute size-full',
      'absolute-center': 'absolute-full flex-center',
      'fixed-lt': 'fixed left-0 top-0',
      'fixed-lb': 'fixed left-0 bottom-0',
      'fixed-rt': 'fixed right-0 top-0',
      'fixed-rb': 'fixed right-0 bottom-0',
      'fixed-tl': 'fixed-lt',
      'fixed-tr': 'fixed-rt',
      'fixed-bl': 'fixed-lb',
      'fixed-br': 'fixed-rb',
      'fixed-center': 'fixed flex-center size-full',
    },
    // text
    {
      'nowrap-hidden': 'overflow-hidden whitespace-nowrap',
      'ellipsis-text': 'nowrap-hidden text-ellipsis',
    },
    // border
    {
      border: 'border-1 border-solid',
      'border-t': 'border-t-1 border-t-solid',
      'border-r': 'border-r-1 border-r-solid',
      'border-b': 'border-b-1 border-b-solid',
      'border-l': 'border-l-1 border-l-solid',
    },
    // theme
    {
      'color-main': 'text-gray-900 dark:text-white',

      'bg-main': 'bg-main dark:bg-main-dark',
      'bg-surface': 'bg-surface dark:bg-surface-dark',
      'bg-surface-container': 'bg-surfaceContainer dark:bg-surface-container-dark',
      'bg-on-surface-container': 'bg-on-surface-container dark:bg-on-surface-container-dark',
      'bg-muted': 'bg-muted dark:bg-muted-dark',
      'bg-primary': 'bg-primary-300 dark:bg-primary-500',
      'bg-on-surface': 'bg-on-surface dark:bg-on-surface-dark',

      'text-main': 'text-main dark:text-main-dark',
      'text-muted': 'text-muted dark:text-muted-dark',
      'text-primary': 'color-primary-300 dark:color-primary-500',
      'text-on-surface': 'text-on-surface dark:text-on-surface-dark',
      'text-on-surface-container': 'text-on-surface-container dark:text-on-surface-container-dark',

      'border-main': 'border-gray-300 dark:border-gray-800',
      'border-muted': 'border-muted dark:border-muted-dark',
      'border-primary': 'border-primary-300 dark:border-primary-500',
      'border-on-surface': 'border-on-surface dark:border-on-surface-dark',
      'border-on-surface-container':
        'border-on-surface-container dark:border-on-surface-container-dark',

      shadow: 'shadow class',
      rounded: 'rounded class',
    },
    // element
    {
      container: 'container class',

      card: 'relative rounded-md px-2',
      'primary-card': 'card bg-primary text-white',
      'second-card': 'card bg-primary-800/20 text-primary-300',
      'surface-card': 'bg-surface dark:bg-surface-dark text-onSurface dark:text-onSurface',
      'surfaceContainer-card':
        'bg-surfaceContainer dark:bg-surfaceContainer-dark text-onSurfaceContainer dark:text-onSurfaceContainer',

      btn: 'rounded-full duration-150',
      'base-btn':
        'btn bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:primary-btn',
      'primary-btn': 'btn bg-primary text-white',
      'primary-btn-outline': 'btn border border-primary-300',
      'second-btn':
        'btn bg-primary-800 text-primary-300 hover:bg-primary-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700',
      'second-btn-outline': 'btn border border-primary-800/20',
    },
  ],
  theme: {
    fontFamily: {
      sans: ['Noto Sans TC', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
    breakpoints: {
      mobile: '480px', // 手機
      tablet: '768px', // 平板
      laptop: '1024px', // 筆電
      desktop: '1280px', // 桌機
      widescreen: '1536px', // 超大螢幕
    },
    colors: {
      main: {
        DEFAULT: 'var(--color-main)',
        dark: 'var(--color-main-dark)',
      },
      primary: {
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
        400: 'var(--color-primary-400)',
        500: 'var(--color-primary-500)',
        600: 'var(--color-primary-600)',
        700: 'var(--color-primary-700)',
        800: 'var(--color-primary-800)',
      },
      gray: {
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)',
        1000: 'var(--color-gray-1000)',
      },
      muted: {
        DEFAULT: 'var(--color-muted)',
        dark: 'var(--color-muted-dark)',
      },
      surface: {
        DEFAULT: 'var(--color-surface)',
        dark: 'var(--color-surface-dark)',
      },
      onSurface: {
        DEFAULT: 'var(--color-on-surface)',
        dark: 'var(--color-on-surface-dark)',
      },
      surfaceContainer: {
        DEFAULT: 'var(--color-surface-container)',
        dark: 'var(--color-surface-container-dark)',
      },
      onSurfaceContainer: {
        DEFAULT: 'var(--color-on-surface-container)',
        dark: 'var(--color-on-surface-container-dark)',
      },
    },
    extend: {},
  },
  presets: [
    presetUno({
      dark: {
        dark: '.app-dark',
      },
    }),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
