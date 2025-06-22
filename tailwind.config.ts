/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'tertiary': 'var(--color-tertiary)',
        'light-bg': 'var(--color-light-background)',
        'dark-bg': 'var(--color-dark-background)',
        'primary-accent': 'var(--color-primary-accent)',
        'secondary-accent': 'var(--color-secondary-accent)',
        'tertiary-accent': 'var(--color-tertiary-accent)',
        'error': 'var(--color-error)',
        'completed': 'var(--color-completed)',
        'good': 'var(--color-good)',
      }
    },
  },
  plugins: [],
}