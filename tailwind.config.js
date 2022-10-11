module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  safelist: [
    {
      pattern: /bg-(red|green|blue)-500/
    },
    {
      pattern: /border-(red|green|blue)-500/
    },
    {
      pattern: /text-(red|green|blue)-500/
    }
  ],
  plugins: [require('@tailwindcss/line-clamp')]
}
