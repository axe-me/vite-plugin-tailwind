// @ts-ignore
import createServer from 'tailwind-config-viewer/server';
import { Plugin } from 'vite';
import { ViewerOption } from '.';

export function VitePluginTailwindViewer(options: ViewerOption = {}): Plugin {
  const config: ViewerOption = {
    path: '/_tailwind/',
    open: false,
    tailwind: {},
    ...options
  };

  return {
    name: 'vite-plugin-tailwind-viewer',
    apply: 'serve',
    configureServer(viteServer) {
      const server = createServer({
        // @ts-ignore
        tailwindConfigProvider: () => config.tailwind
      }).asMiddleware()

      viteServer.middlewares.use(config.path as string, server)
    }
  };
}
