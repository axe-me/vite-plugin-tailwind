module.exports = {
  plugins: {
    '@tailwindcss/jit': {
      purge: [
        './src/*.vue',
      ],
    },
  }
}