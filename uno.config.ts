// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import { generateColorRules } from './src/utils/generateRules';
import { colors } from './unocolors';

const ColorRules = generateColorRules(colors);
export default defineConfig({
  shortcuts: [
    ['lk', 'border-1 border-red-900'],
    ['flex-center', 'flex items-center justify-center'],
  ],
  // rules: [],
  rules: [...ColorRules],
  theme: {},
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {},
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
