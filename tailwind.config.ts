import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        'page-bg': '#F7F4F0',
        'card-bg': '#FFFFFF',
        'dark-bg': '#0F0D0A',
        'primary': '#111111',
        'secondary': '#6B6460',
        'muted': '#9A9590',
        'gold': '#B8860B',
        'dark-text': '#F5F0E8',
        'divider': '#E8E4DE',
        'accent': '#E63946',
      },
    },
  },
  plugins: [],
};
export default config;
