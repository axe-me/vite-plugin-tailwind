# Vite Tailwind Plugin

> This plugin heavily inspired by the [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss) and the [Nuxt tailwind module](https://tailwindcss.nuxtjs.org/)

## Features
- zero-config
- JIT enabled by default
- Config viewer at `/_tailwind/` (dont miss the trailing slash at the end)

## Usage

### Fastest case
just add this plugin into your `vite.config.ts`

```ts
import { defineConfig } from "vite";
import tailwind from "vite-plugin-tailwind";

export default defineConfig({
  plugins: [
    tailwind(),
  ],
});

```

### Extended case

Assumptions:

- projects `./src/tailwind.css` should be used
- projects `./tailwind.config.js` should be used along with tailwind plugins like `@tailwindcss/forms`, `@tailwindcss/typography`, `@tailwindcss/aspect-ratio`

```js
import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import path from 'path'
import tailwindVitePlugin from "vite-plugin-tailwind";
import tailwindConfig from './tailwind.config'

export default defineConfig({
  plugins: [vuePlugin(), tailwindVitePlugin({
    jit: true,
    autoprefixer: true,
    nesting: true,
    cssPath: path.resolve(__dirname, 'src', 'tailwind.css'),
    tailwind: tailwindConfig,
  })],
})
```

see the examples folder for example XD

## Todos
- [ ] polish it up
- [ ] add tests
- [ ] test the viewer with WindiCss, and split it out to individual plugin
