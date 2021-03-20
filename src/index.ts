import { TailwindConfig } from "tailwindcss/tailwind-config";

export { VitePluginTailwind as default } from './vite-plugin-tailwind';

export interface ViewerOption {
  path?: string;
  open?: boolean;
  tailwind?: Partial<TailwindConfig>;
}

export interface VitePluginTailwindOptions {
  jit?: boolean;
  autoprefixer?: boolean;
  nesting?: boolean;
  cssPath?: string;
  virtualFileId?: string;
  viewer?: ViewerOption;
  tailwind?: Partial<TailwindConfig>;
}
