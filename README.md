# Vite Tailwind Plugin

> This plugin heavily inspired by the [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss) and the [Nuxt tailwind module](https://tailwindcss.nuxtjs.org/)

## Features
- zero-config
- JIT enabled by default
- Config viewer at `/_tailwind/` (dont miss the trailing slash at the end)

## Usage
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

see the examples folder for example XD

## Todos
- [ ] polish it up
- [ ] add tests
- [ ] test the viewer with WindiCss, and split it out to individual plugin