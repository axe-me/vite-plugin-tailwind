import { TailwindConfig } from "tailwindcss/tailwind-config";

export { VitePluginTailwind as default } from './vite-plugin-tailwind';

export interface PreviewOption {
  path?: string;
  open?: boolean; 
}

export interface VitePluginTailwindOptions {
  jit?: boolean;
  autoprefixer?: boolean;
  nesting?: boolean;
  cssPath?: string;
  virtualFileId?: string;
  preview?: PreviewOption;
  tailwind?: TailwindConfig
}
