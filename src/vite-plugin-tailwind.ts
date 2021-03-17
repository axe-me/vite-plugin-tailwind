// @ts-ignore
import * as tailwindcssJit from "@tailwindcss/jit";
import * as Postcss from 'postcss';
import { Plugin } from 'vite';
import { VitePluginTailwindOptions } from '.';

export function VitePluginTailwind(options: VitePluginTailwindOptions = {}): Plugin {
  const config: VitePluginTailwindOptions = {
    jit: true,
    autoprefixer: true,
    nesting: true,
    cssPath: "vite-plugin-tailwind/tailwind.css",
    virtualFileId: "@tailwind",
    preview: {
      path: '/__tailwind',
      open: false
    },
    tailwind: {
      // @ts-ignore looks like a bug in type def
      purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
    },
    ...options
  };

  return {
    name: 'vite-plugin-tailwind',
    config: () => {
      const plugins: Postcss.Plugin[]  = [];

      if (config.jit) {
        plugins.push(tailwindcssJit.default(config.tailwind))
      }

      if (config.nesting) {
        plugins.push(require('postcss-nesting'))
      }
      
      if (config.jit) {
        plugins.push(require('autoprefixer'))
      }

      return {
        css: {
          postcss: {
            plugins,
          }
        }
      }
    },
    resolveId(id) {
      if (id === config.virtualFileId) {
        return config.virtualFileId
      }
    },
    load(id) {
      if (id === config.virtualFileId) {
        return `import '${config.cssPath}'`
      }
    }
  };
}
