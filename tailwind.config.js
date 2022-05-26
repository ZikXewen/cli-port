module.exports = {
  content: ['index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ["'Fira Code'", 'sans-serif'] },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
