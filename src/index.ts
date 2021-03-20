export { VitePluginTailwind as default } from './vite-plugin-tailwind';

export interface ViewerOption {
  path?: string;
  open?: boolean;
  tailwind?: any; // no correct tailwind config type found anywhere
}

export interface VitePluginTailwindOptions {
  jit?: boolean;
  autoprefixer?: boolean;
  nesting?: boolean;
  cssPath?: string;
  virtualFileId?: string;
  viewer?: ViewerOption;
  tailwind?: any;
}
