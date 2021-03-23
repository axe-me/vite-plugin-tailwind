import path from 'path';
import * as Postcss from 'postcss';
import { Plugin } from 'vite';
import { VitePluginTailwindOptions } from '.';
import { VitePluginTailwindViewer } from './vite-plugin-tailwind-viewer';

export function VitePluginTailwind(options: VitePluginTailwindOptions = {}): Plugin[] {
  const config: VitePluginTailwindOptions = {
    jit: true,
    autoprefixer: false,
    nesting: false,
    cssPath: path.resolve(__dirname, "../tailwind.css"),
    virtualFileId: "@tailwindcss",
    viewer: {
      path: '/_tailwind/',
      open: false
    },
    tailwind: {
      // @ts-ignore looks like a bug in type def
      purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,svelte}']
    },
    ...options
  };

  return [
    {
      name: 'vite-plugin-tailwind',
      config: (_, env) => {
        const plugins: Postcss.Plugin[]  = [];

        // need this for jit plugin to enable watch mode
        process.env.NODE_ENV = env.mode

        const tailwind = config.jit ? require('@tailwindcss/jit') : require('tailwindcss')
        const tailwindPlugin = tailwind(config.tailwind)

        plugins.push(tailwindPlugin)

        if (config.nesting) {
          plugins.push(require('postcss-nesting'))
        }
        
        if (config.autoprefixer) {
          plugins.push(require('autoprefixer'))
        }

        return {
          css: {
            postcss: {
              plugins
            }
          }
        }
      },
      resolveId(id) {
        if (id === config.virtualFileId) {
          return config.cssPath
        }
      }
    },
    VitePluginTailwindViewer({
      ...config.viewer,
      tailwind: config.tailwind
    })
  ];
}
